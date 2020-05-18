unfocusedInputBuffer = options => {
    const inputs = document.querySelectorAll(options.selector || '[data-buffered]')
    let inputBuffer = []

    window.addEventListener('keypress', e => {
        // https://stackoverflow.com/questions/4179708/how-to-detect-if-the-pressed-key-will-produce-a-character-inside-an-input-text#comment100724575_4180715
        if (e.key.length === 1 && e.target.tagName !== 'INPUT') {
            inputBuffer.push(e.key)
        }
    })

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            if (!input.value) {
                input.value = inputBuffer.join('')
                inputBuffer = []
            }
        })
    })
}

module.exports.unfocusedInputBuffer = unfocusedInputBuffer
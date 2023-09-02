document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.input-wrapper').addEventListener('click', () => {
        let inputWrapper = document.querySelector('.input-wrapper')
        let loginPlaceholder = document.querySelector('.login-placeholder')
        let Input = document.querySelector('.login-origin-input')
        document.querySelector('.input-wrapper').classList.add('active')
        document.querySelector('.input-wrapper > .login-origin-input > span').style.color = '#6ABDF5'
        loginPlaceholder.style.display = 'none'
        Input.style.display = 'block'
        document.addEventListener('click', (event) => {
            if (!inputWrapper.contains(event.target)){
                if (document.querySelector('.login-origin-input > input').value.length !== 0){
                    document.querySelector('.input-wrapper').classList.remove('active')
                    document.querySelector('.input-wrapper > .login-origin-input > span').style.color = '#536471'
                }else{
                    document.querySelector('.input-wrapper').classList.remove('active')
                    loginPlaceholder.style.display = 'block'
                    Input.style.display = 'none'
                    document.querySelector('.login-origin-input > input').value = ''
                }
            }
        })
    })

    document.querySelector('.signin-button').addEventListener('click', () => {
        if (document.querySelector('#login-input').value.length === 0){
            document.querySelector('.error-message').style.display = 'block'
            setTimeout(() => {
                document.querySelector('.error-message').style.display = 'none'
            }, 3000)
        }
    })
})
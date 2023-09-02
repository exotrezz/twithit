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

    document.querySelector('.verify-wrapper').addEventListener('click', () => {
        let verWrapper = document.querySelector('.verify-wrapper')
        let verPlaceholder = document.querySelector('.verify-placeholder')
        let verify = document.querySelector('.verify-origin')
        document.querySelector('.verify-wrapper').classList.add('active')
        document.querySelector('.verify-wrapper > .verify-origin > span').style.color = '#6ABDF5'
        verPlaceholder.style.display = 'none'
        verify.style.display = 'block'
        document.addEventListener('click', (event) => {
            if (!verWrapper.contains(event.target)){
                if (document.querySelector('.verify-origin > input').value.length !== 0){
                    document.querySelector('.verify-wrapper').classList.remove('active')
                    document.querySelector('.verify-wrapper > .verify-origin > span').style.color = '#536471'
                }else{
                    document.querySelector('.verify-wrapper').classList.remove('active')
                    verPlaceholder.style.display = 'block'
                    verify.style.display = 'none'
                    document.querySelector('.verify-origin > input').value = ''
                }
            }
        })
    })

    document.querySelector('.signin-button').addEventListener('click', (click) => {
        click.preventDefault()
        if (document.querySelector('#login-input').value.length === 0){
            document.querySelector('.error-message').style.display = 'block'
            setTimeout(() => {
                document.querySelector('.error-message').style.display = 'none'
            }, 3000)
        }else{
            document.getElementById('change-marker').innerHTML = document.getElementById('login-input').value
            document.getElementById('defaultPage').style.display = 'none'
            document.getElementById('globalLoader').style.display = 'block'
            setTimeout(() => {
                document.getElementById('globalLoader').style.display = 'none'
                document.getElementById('verifyPage').style.display = 'block'
            }, 3700)
        }
    })
})

function checkVer(value) {
    if (value.length > 0 || value !== ''){
        document.querySelector('.success-button').classList.remove('disabled')
    }else{
        document.querySelector('.success-button').classList.add('disabled')
    }
}
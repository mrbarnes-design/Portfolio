class Button {
    constructor() {
        this.Btn = document.querySelector('.btn')
        this.Menu = document.querySelector('.myList')
        this.events()
    }

    events() {
        this.Btn.addEventListener('click', () => this.toggleTheMenu() )
    }

    toggleTheMenu() {
        this.Menu.classList.toggle("myList--is-visible")
    }
}

export default Button
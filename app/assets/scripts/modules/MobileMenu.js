class MobileMenu {
    constructor() {
        this.icon = document.querySelector('.menu-toggle')
        this.nav = document.querySelector('.site-nav')

        if (!this.icon || !this.nav) return

        this.events()
    }

    events() {
        this.icon.addEventListener('click', () => this.toggleTheMenu())
        this.nav.addEventListener('click', event => {
            if (event.target.closest('a')) this.setMenuOpen(false)
        })
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') this.setMenuOpen(false)
        })
    }

    toggleTheMenu() {
        this.setMenuOpen(this.icon.getAttribute('aria-expanded') !== 'true')
    }

    setMenuOpen(isOpen) {
        this.nav.classList.toggle('is-open', isOpen)
        this.icon.setAttribute('aria-expanded', String(isOpen))
        this.icon.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation')
    }
}

export default MobileMenu
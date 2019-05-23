export class Component {
    // Создаю елемент
    constructor(id) {
        this.$el = document.getElementById(id);
        this.init();
    }

    // Жизненный цикл компонента 
    init() { }

    onHide() { }
    onShow() { }

    hide() {
        this.$el.classList.add('hide');
        this.onHide();
    }

    show() {
        this.$el.classList.remove('hide');
        this.onShow();
    }

}
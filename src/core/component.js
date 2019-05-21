export class Component {
    // Создаю елемент
    constructor(id) {
        this.$el = document.getElementById(id);
        this.init();
    }

    // Жизненный цикл компонента 
    init() { }

    hide() {
        this.$el.classList.add('hide');
    }
    
    show() {
        this.$el.classList.remove('hide');
    }

}
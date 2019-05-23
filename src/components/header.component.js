import { Component } from '../core/component'

export class HeaderComponent extends Component {
    constructor(id) {
        super(id);
    }
    // Полученый метод от родителя. Жизнь компонента. Его основные функции
    init() {
        this.jsBlog = new Component('js-blog');

        if (localStorage.getItem('visited')) {
            this.hide();
        } else {
            this.jsBlog.hide();
        }
        const btn = document.querySelector('.js-header-start');
        btn.addEventListener('click', buttonHandler.bind(this));
    }
}

function buttonHandler() {
    localStorage.setItem('visited', JSON.stringify(true))
    this.hide();
    this.jsBlog.show();
}
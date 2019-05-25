import { Component } from '../core/component'
import { Form } from '../core/form'
import { Validators } from '../core/validators'
import { apiService } from '../services/api.service'

export class CreateComponent extends Component {
    constructor(id) {
        super(id);

    }

    init() {
        this.$el.addEventListener('submit', submitHandler.bind(this));

        this.form = new Form(this.$el, {
            title: [Validators.required],
            fulltext: [Validators.required, Validators.minLenght(10)]
        });
    }
}

async function submitHandler(event) {
    event.preventDefault()
    // Проверка на валидность
    if (this.form.isValid()) {
        // Получение значений формы
        const formData = {
            type: this.$el.type.value,
            date: new Date().toLocaleDateString(),
            ...this.form.value()
        }
        await apiService.createPost(formData);
        this.form.clear();
        alert('Запись создана в БД');

    }
}

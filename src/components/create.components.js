import { Component } from '../core/component'
import { Form } from '../core/form'
import { Validators } from '../core/validators'

export class CreateComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        this.$el.addEventListener('submit', submitHandler.bind(this));

        this.from = new Form(this.$el, {
            title: [Validators.required],
            fulltext: [Validators.required]
        });
    }
}

function submitHandler(event) {
    event.preventDefault()

    const formData = {
        type: this.$el.type.value,
        ...this.from.value()
    }
    console.log('Submit', formData)

}

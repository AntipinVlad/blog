import { Component } from '../core/component'
import { apiService } from '../services/api.service'
import { renderPost } from '../templates/post.template'

export class FavoriteComponent extends Component {
    constructor(id, { loader }) {
        super(id);
        this.loader = loader
    }

    init() {
        this.$el.addEventListener('click', linkClickHandler.bind(this))
        this.$el.addEventListener('click', buttonClickHandler.bind(this))
    }

    async onShow() {
        this.loader.show()
        this.$el.innerHTML = ''
        const favorites = JSON.parse(localStorage.getItem('favorites'))
        const html = renderList(favorites)
        this.loader.hide()
        this.$el.insertAdjacentHTML('beforeend', html)
    }
}

async function linkClickHandler(event) {
    event.preventDefault()

    if (event.target.classList.contains('js-link')) {
        const postId = event.target.dataset.id
        this.loader.show()
        const post = await apiService.fetchPostByid(postId)
        this.$el.innerHTML = ''
        this.loader.hide()
        this.$el.insertAdjacentHTML('beforeend', renderPost(post, false))
        console.log(post);

    }
}
function buttonClickHandler(event){
    const $el = event.target
    const id = $el.dataset.id
    if(id){
        this.onShow()
    }
}


function renderList(list = []) {
    if (list && list.length) {
        return `
            <ul>
                ${list.map(i => `<li><a href="#" class="js-link" data-id ="${i.id}">${i.title}</a></li>`).join(' ')}
            </ul>
        `
    }

    return `<h3 class="center">Вы пока ничего не добавили</h3>`
}


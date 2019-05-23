import {HeaderComponent} from './components/header.component'
import {NavigationComponent} from './components/navigtion.component'
import {CreateComponent} from './components/create.components'
import {FavoriteComponent} from './components/favorite.components'
import {PostsComponent} from './components/posts.components'


new HeaderComponent ('header');

const navigation = new NavigationComponent('navigation');

const posts = new PostsComponent('posts');
const create = new CreateComponent('create');
const favorite = new FavoriteComponent('favorite');

navigation.registerTabs([
    {name: 'create', component: create},
    {name: 'posts', component: posts},
    {name: 'favorite', component: favorite}
])
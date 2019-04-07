import React, { Component } from 'react';
import './Blog.css';
import Posts from '../Blog/Posts/Posts';
import NewPost from '../../containers/Blog/NewPost/NewPost';
import { Route, NavLink, Switch } from 'react-router-dom';
import FullPost from './FullPost/FullPost';


class Blog extends Component {

    state = {
        auth: true
    }

    render() {
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/' exact>POSTS</NavLink></li>
                            {/* wykład 192 - stylowanie!!!! */}
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>NEW POST</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={() => <h1 style={{ textAlign: 'center' }}>HOME</h1>} /> */}

                {/* <Route path='/' exact component={Posts} />
                <Route path='/new-post' exact component={NewPost} />
                <Route path='/posts/:id' component={FullPost} /> */}

                {/* drugi sposób na renderowanie pojedynczego komponentu: importuj Switch komponent i owiń nim wszystko, a switch wyświetli ten, który pierwszy pasuje do ścieżki. Wzór poniżej: */}

                <Switch>
                    <Route path='/' exact component={Posts} />
                    {this.state.auth ? <Route path='/new-post' exact component={NewPost} /> : null}
                    <Route path='/posts/:id' component={FullPost} />
                    <Route render={() => <h1>NOT FOUND</h1>} />
                </Switch>


            </div>
        );
    }
}

export default Blog;
import React, {Component} from 'react';
import io from 'socket.io-client';

import './styles.css';
import api from '../../services/api'

import more from '../../assets/more.svg'
import like from '../../assets/like.svg'
import comment from '../../assets/comment.svg'
import send from '../../assets/send.svg'

export default class Feed extends Component {
    
    state= {
        feed: []
    };

    async componentDidMount(){

        this.registerToSocket();

        const response = await api.get('posts');
        
        this.setState({feed: response.data});


    }
    registerToSocket = () => {
        const socket = io('http://localhost:3333');
        
        socket.on('post', newPost => {
            this.setState({ feed: [newPost, ...this.state.feed] })
        })

        socket.on('like', LikedPost => {
            this.setState({ 
                feed: this.state.feed.map(post =>
                     post._id == LikedPost._id ? LikedPost: post
                    )
                 })
        })

    
    }

    handleLike = id => {
        api.post(`/posts/${id}/like`)
    }
    
  
    

    render() {
        return (
            <section id='post-list'>
                { this.state.feed.map( post =>(
                <article key={post._id}>
                    <header>
                        <div className="user-info">
                            <span>{post.author}</span>
                            <span className="place">{post.place}</span>
                        </div>
                        <img src={more} alt="more" />
                    </header>
                    <img src={`http://localhost:3333/files/${post.image}`} alt={post.description} />
                    <footer>
                        <div className="actions">
                            <button type="button" onClick={() => this.handleLike(post._id)}>
                                <img src={like} alt="like" />
                            </button>
                            <img src={comment} alt="comment" />
                            <img src={send} alt="send" />
                        </div>
                        <strong>{post.likes} curtidas</strong>
                        <p>{post.description}<span>{post.hashtags}</span></p>
                    </footer>
                </article>
                ))}
            </section>
        );
    }
}
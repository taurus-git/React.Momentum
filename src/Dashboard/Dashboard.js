import React from 'react';
import axios from 'axios';
import TodoList from "../Todo";
import './Dashboard.css';
import { Blurhash } from "react-blurhash";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: localStorage.getItem('backgroundUrl')
                    ? localStorage.getItem('backgroundUrl') :
                    'https://images.unsplash.com/photo-1543169863-46febf95f5e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80',
            blur_hash: localStorage.getItem('blur_hash')
                    ? localStorage.getItem('blur_hash') :
                    'LRBNNNM{o#s:yZofR+t6ESt8jXR*',
            update: false
        }

    }

    async getBackgroundUrl() {
            let image = await axios.get('https://api.unsplash.com/photos/random', {
                params: {
                    query: 'nature',
                    orientation: 'landscape'
                },
                headers: {
                    Authorization: 'Client-ID F0k0DI4K2Pqkxl87P8mdSBk9VEixFfR-j84mwZcbW9U'
                }
            });

            this.setBackgroundUrl(image);
            this.setBlurBackground(image);
        }

    setBackgroundUrl(image) {
        localStorage.setItem('backgroundUrl',
            image.data.urls.full
        );

        const backgroundUrl = localStorage.getItem('backgroundUrl')
        this.setState({
            imageUrl: backgroundUrl
        })
    }

    setBlurBackground(image) {
        localStorage.setItem(
            'blur_hash', 'backgroundUrl' ? image.data.blur_hash : ''
        );

        const blur_hash = localStorage.getItem('blur_hash');
        this.setState({
            blur_hash: blur_hash
        })
    }

    getBackground() {


        {console.log(this.props)}


        if (this.props.update) {
            return this.getBackgroundUrl();
        } else {
            return `url(${this.state.imageUrl})`;
        }
    }

    render() {
        return (
            <div>
                <div className="blur-background">
                    <Blurhash
                        hash={this.state.blur_hash}
                        width={'auto'}
                    >
                    </Blurhash>
                </div>
                <div className="dashboard" style={
                    {backgroundImage: this.getBackground(),
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                    }
                } />
                <TodoList />
            </div>

            /*</div>*/
        );
    }

}

export default Dashboard;
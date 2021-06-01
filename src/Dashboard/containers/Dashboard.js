import React from 'react';
import axios from 'axios';
import './Dashboard.css';
import {Blurhash} from "react-blurhash";
import BackgroundImage from "../components/BackgroundImage";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: 'https://images.unsplash.com/photo-1543169863-46febf95f5e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80',
            blur_hash: 'LRBNNNM{o#s:yZofR+t6ESt8jXR*',
            weatherDesc: '',
        }
    }

    componentWillMount() {
        this.getBackgroundUrlSource();
    }

    async getBackgroundUrlSource() {
        const forecast = this.props.forecast;

        if (forecast && Object.keys(forecast).length !== 0 && forecast.constructor === Object) {
            let currentWeatherDesc = forecast.weather[0].description;
            await this.getBackgroundUrl(currentWeatherDesc)
        }
    }

    async getBackgroundUrl(weatherDesc) {
        let image = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: weatherDesc,
                per_page: 100,
                orientation: 'landscape',
            },
            headers: {
                Authorization: 'Client-ID F0k0DI4K2Pqkxl87P8mdSBk9VEixFfR-j84mwZcbW9U'
            }
        });

        let randomNum = Math.floor(Math.random(100)*10); // get more different images with the same forecast

        this.setState({
            imageUrl: image.data.results[randomNum].urls.regular,
            blur_hash: image.data.results[randomNum].blur_hash
        })
    }

    componentDidUpdate(prevProps) {
        if(prevProps.forecast.weather === undefined && this.state.weatherDesc === '') {
            this.getBackgroundUrlSource();
        }

        if (this.props.forecast.weather !== undefined && prevProps.forecast.weather !== undefined) {
            if (this.props.forecast.weather[0].description !== prevProps.forecast.weather[0].description) {
                this.getBackgroundUrlSource();
            }
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
                <BackgroundImage imageUrl={this.state.imageUrl}/>
            </div>
        );
    }

}

export default Dashboard;
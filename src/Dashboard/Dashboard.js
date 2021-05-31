import React from 'react';
import axios from 'axios';
import TodoList from "../Todo";
import './Dashboard.css';
import {Blurhash} from "react-blurhash";
import BackgroundImage from "../Weather/components/BackgroundImage";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: '',
            blur_hash: 'LRBNNNM{o#s:yZofR+t6ESt8jXR*',
            update: false,
            weatherDesc: 'sunny',
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
        console.log('weather search request: ' + weatherDesc)
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
            imageUrl: image.data.results[randomNum].urls.full
        })
    }

    componentDidUpdate(prevProps) {
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
                    {/* <Blurhash
                        hash={this.state.blur_hash}
                        width={'auto'}
                    >
                    </Blurhash>*/}
                </div>
                <BackgroundImage imageUrl={this.state.imageUrl}/>
                <TodoList/>
            </div>
        );
    }

}

export default Dashboard;
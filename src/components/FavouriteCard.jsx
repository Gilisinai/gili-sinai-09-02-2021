import React from 'react'
import WeatherIcon from './WeatherIcon'
import { connect } from 'react-redux'
import { removeCityFromFavorites } from '../redux/favorites/favorites.actions'
import { fetchCurrentWeatherStartAsync } from '../redux/weather/weather.actions'


function FavouriteCard({ data, removeCityFromFavorites, fetchCurrentWeatherStartAsync }) {
    const { Temperature, WeatherText, Date, LocalizedName } = data
    return (
        <div className="favorite__card" onClick={()=> fetchCurrentWeatherStartAsync(LocalizedName)}>
            <div className="favorite__card-item">
                <WeatherIcon iconCode={21} />
            </div>
            <div className="favorite__card-item">
                <h1>  {LocalizedName} </h1>
            </div>
            <div className="favorite__card-item favorite__card-item--temp">

                <p>
                    {WeatherText}
                </p>
            </div>
            <button onClick={() => removeCityFromFavorites(data)}>Remove from favorites</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeCityFromFavorites: city => dispatch(removeCityFromFavorites(city)),
    fetchCurrentWeatherStartAsync: city => dispatch(fetchCurrentWeatherStartAsync(city))
})


export default connect(null, mapDispatchToProps)(FavouriteCard)

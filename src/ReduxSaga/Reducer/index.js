import {combineReducers} from 'redux'
import RegionReducer from './RegionReducer'

const rootReducer = combineReducers({
    regionState: RegionReducer
})

export default rootReducer
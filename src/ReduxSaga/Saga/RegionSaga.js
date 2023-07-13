import {call,put} from 'redux-saga/effects'
import RegionApi from '../../api/RegionApi'
import { GetRegionSuccess,GetRegionFailed, AddRegionSuccess, AddRegionFailed } from '../Action/RegionAction'

function* handleRegion() {
    try {
        const result = yield call(RegionApi.list)
        yield put (GetRegionSuccess(result))
    } catch (error) {
        yield put(GetRegionFailed(error))        
    }
}
function* createRegion(action) {
    const {payload} = action
    try {
        const result = yield call(RegionApi.upload,payload)
        yield put(AddRegionSuccess(result.data))
    } catch (error) {
        yield put(AddRegionFailed(error))
    }
}

export {
    handleRegion,
    createRegion
}
import { takeEvery,all } from "redux-saga/effects";
import * as ActionRegion from '../Constant/RegionConstant'
import { createRegion, handleRegion } from "./RegionSaga";

function* watchAll(){
    yield all([
        takeEvery(ActionRegion.GET_REGION_REQUEST,handleRegion),
        takeEvery(ActionRegion.ADD_REGION_REQUEST,createRegion)
    ])
}

export default watchAll
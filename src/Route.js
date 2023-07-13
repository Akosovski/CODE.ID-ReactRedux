import React from 'react'
import { Navigate,useRoutes } from 'react-router-dom'
import Dashboard from './Dashboard'
import RegionSagaView from './ViewReduxSaga/RegionSagaView'
import RegionViewApi from './RegionView/RegionViewApi'
export default function Route() {
  return useRoutes([
    {
        path:'/',
        element: <Dashboard/>,
        children:[
            {path:'/api', element: <RegionViewApi/>},
            {path:'/saga', element: <RegionSagaView/>}
        ]
    },
    {
        path:'*', element:<Navigate to = '/404' replace/>
    }
  ])
}

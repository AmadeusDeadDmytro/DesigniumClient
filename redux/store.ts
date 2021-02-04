import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import { createWrapper } from 'next-redux-wrapper'

import rootReducer from './reducers/rootReducer'
import getConfig from 'next/config'
import rootSaga from './sagas'

const { publicRuntimeConfig } = getConfig()

const bindMiddleware = middleware => {
    if (!publicRuntimeConfig.PRODUCTION) {
        const { composeWithDevTools } = require('redux-devtools-extension')

        return composeWithDevTools(applyMiddleware(...middleware))
    }

    return applyMiddleware(...middleware)
}

export const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store: any = createStore(rootReducer, bindMiddleware([sagaMiddleware]))

    store.sagaTask = sagaMiddleware.run(rootSaga)
    return store
}

export const wrapper = createWrapper(makeStore, {debug: true})
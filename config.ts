import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export const API = publicRuntimeConfig.PRODUCTION ? 'http://designium.io/api' : 'http://localhost:8000/api'
export const APP_NAME = publicRuntimeConfig.APP_NAME


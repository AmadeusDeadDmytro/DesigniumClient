import { API } from '../config'

export const postRequest = (url: string, body: any) => {
    return fetch(API + '/' + url, {
        method: 'POST',
        headers: {
            Accept:
                'application/json, application/xml, text/plain, text/html, *.*',
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(body),
    })
}

import * as types from '../mutation-types'

export interface IMessage {
    author: string
    id: string
    me?: boolean
    text: string
    time: Date
}

export interface IState {
    title: string
    messages: Array<IMessage>
}

export const state: IState = {
    title: 'polorganization ltd.',
    messages: [
        { author: 'पोल्ruser', id: '0', me: true, text: 'i hate you and refuse to help you!', time: new Date('2017-02-18T08:05:36.100') },
        { author: 'shiक्षु', id: '1', me: false, text: 'why?', time: new Date('2017-02-18T08:05:39.204') },
        { author: 'पोल्ruser', id: '2', me: true, text: 'coz you are not khethavathu.', time: new Date('2017-02-18T08:06:00.150') },
        { author: 'shiक्षु', id: '3', me: false, text: 'why do you hate me so?', time: new Date('2017-02-18T08:05:49.204') },
        { author: 'पोल्ruser', id: '4', me: true, text: 'okayru', time: new Date('2017-02-18T08:06:00.150') },
        { author: 'shiक्षु', id: '5', me: false, text: 'help! help! you are not helping!', time: new Date('2017-02-18T08:05:36.100') },
    ]
}

export const getters = {
    title: (state: IState) => state.title,
    messages: (state: IState) => state.messages
}

// effects
export const actions = {
}

export const mutations = {
}

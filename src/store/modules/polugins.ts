import * as types from '../mutation-types'

export interface IPolugin {
    activated?: boolean
    author: string
    id: string
    logo: string
    name: string
}

export interface IState {
    polugins: Array<IPolugin>
}

export const state: IState = {
    polugins: [
        { activated: true, author: 'पोल्ruser', id: 'gitm', logo:'http://placehold.it/50x25', name: 'git markdown' },
        { activated: true, author: 'shiक्षु', id: 'polvideos',  logo:'http://placehold.it/50x25', name: 'video' },
        { activated: true, author: 'पोल्ruser', id: 'catdetective',  logo:'http://placehold.it/50x20', name: 'identify cats' },
        { activated: false, author: 'पोल्ruser', id: 'htmlm', logo:'http://placehold.it/50x25', name: 'html markdown' },
    ]
}

export const getters = {
    polugins: (state: IState) => state.polugins
}

// effects
export const actions = {
}

export const mutations = {
}

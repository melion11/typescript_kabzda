import {reducer, StateType, TOGGLE_COLLAPSED} from './reducer';


test('collapsed should change value to true', () => {

    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})


    expect(state.collapsed).not.toBe(newState.collapsed)
    expect(newState.collapsed).toBe(true)
})

test('collapsed should change value to false', () => {

    const state: StateType = {
        collapsed: true
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})


    expect(state.collapsed).not.toBe(newState.collapsed)
    expect(newState.collapsed).toBe(false)
})

test('false action type', () => {

    const state: StateType = {
        collapsed: true
    }

    expect(()=> {
        reducer(state, {type: 'FAKE-TYPE'})
    }).toThrowError()


})
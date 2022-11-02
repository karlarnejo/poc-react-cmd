import * as types from './types';

export const listOutput = (value) => ({
    type: types.GET_OUTPUT,
    payload: value
})
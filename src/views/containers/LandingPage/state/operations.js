import apiService from '../../../../utils/apiService';
import * as path from './apiRoutes';
import * as Actions from './actions';

export const listOutput = (payload) => (dispatch) => {

    return apiService.post(path.GET_OUTPUT, payload)
        .then(response => {
            if(response.data.data){
                dispatch(Actions.listOutput(response.data.data))
                return response.data.data;
            }
        }).catch(error => {
            throw error;
        });
}

export const listDirs = (payload) => (dispatch) => {

    return apiService.post(path.GET_DIRS, payload)
        .then(response => {
            if(response.data.data){
                // dispatch(Actions.listOutput(response.data.data))
                return response.data.data;
            }
        }).catch(error => {
            throw error;
        });
}
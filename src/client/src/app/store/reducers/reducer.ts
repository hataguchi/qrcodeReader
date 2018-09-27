import { Actions, ActionTypes } from '../actions';


/**
 * State
 */
export interface IState {
    loading: boolean;
    error: string | null;
}

/**
 * Initial state
 */
export const initialState: IState = {
    loading: false,
    error: null
};

function getInitialState(): IState {
    const json = localStorage.getItem('state');
    if (json === undefined || json === null || json === '{}') {
        return initialState;
    }
    const data = JSON.parse(json);
    return {
        loading: data.App.loading,
        error: data.App.error
    };
}

/**
 * Reducer
 * @param state
 * @param action
 */
export function reducer(
    state = getInitialState(),
    action: Actions
): IState {
    switch (action.type) {
        case ActionTypes.Delete: {
            return {
                loading: initialState.loading,
                error: state.error
            };
        }
        case ActionTypes.Load: {
            return { ...state, loading: true };
        }
        case ActionTypes.LoadSuccess: {
            return { ...state, loading: false, error: null };
        }
        case ActionTypes.LoadFail: {
            const error = action.payload.error;
            return { ...state, loading: false, error: JSON.stringify(error) };
        }
        default: {
            return state;
        }
    }
}

/**
 * Selectors
 */
export const getLoading = (state: IState) => state.loading;
export const getError = (state: IState) => state.error;

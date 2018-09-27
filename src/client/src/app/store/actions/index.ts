
import { Action } from '@ngrx/store';

/**
 * Action types
 */
export enum ActionTypes {
    Delete = '[User] User',
    Load = '[User] Load',
    LoadSuccess = '[User] Load Success',
    LoadFail = '[User] Load Fail'
}

/**
 * Delete
 */
export class Delete implements Action {
    public readonly type = ActionTypes.Delete;
    constructor(public payload: {}) { }
}

/**
 * Load
 */
export class Load implements Action {
    public readonly type = ActionTypes.Load;
    constructor(public payload: {}) { }
}

/**
 * LoadSuccess
 */
export class LoadSuccess implements Action {
    public readonly type = ActionTypes.LoadSuccess;
    constructor(public payload: {}) { }
}

/**
 * LoadFail
 */
export class LoadFail implements Action {
    public readonly type = ActionTypes.LoadFail;
    constructor(public payload: { error: Error }) { }
}

/**
 * Actions
 */
export type Actions =
    | Delete
    | Load
    | LoadSuccess
    | LoadFail;

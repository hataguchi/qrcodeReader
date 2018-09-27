import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ActionTypes, Load, LoadSuccess, LoadFail } from '../actions';

/**
 * Effects
 */
@Injectable()
export class Effects {

    constructor(
        private actions: Actions
    ) { }

    /**
     * Load
     */
    @Effect()
    public load = this.actions.pipe(
        ofType<Load>(ActionTypes.Load),
        map(action => action.payload),
        mergeMap(async (payload) => {
            console.log(payload);
            try {
                return new LoadSuccess({ });
            } catch (error) {
                return new LoadFail({ error: error });
            }
        })
    );
}

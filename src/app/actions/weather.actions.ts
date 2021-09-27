import { createAction, props } from '@ngrx/store';

export const aPPWeathers = createAction(
  '[Weather] APP Weathers'
);

export const countryAction = createAction(
  '[Country] APP country'
);

export const countrySuccessAction = createAction(
  '[Country] APP country success'
);

export const countryFailureAction = createAction(
  '[Country] APP country failure'
);


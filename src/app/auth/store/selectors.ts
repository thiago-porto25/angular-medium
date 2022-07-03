import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AuthStateInterface } from "src/app/auth/types/authState.interface";

const featureKey = "auth";

export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>(featureKey);

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (state) => state.isSubmitting
);

/* eslint-disable linebreak-style */
import { createSelector } from "reselect";

export const getWord1 = createSelector(
    state => state.viewChallange.word1,
    word1 => word1
);

export const getWord2 = createSelector(
    state => state.viewChallange.word2,
    word2 => word2
);

export const getStatusBreakify = createSelector(
    state => state.viewChallange.breakify,
    breakify => breakify
);
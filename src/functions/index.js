/* eslint-disable linebreak-style */
import { periodicTable } from "../constants";

export const getArrayWords = (word) => {
    const newArray = [];
    periodicTable.map(i => {
        if (i?.symbol.length >= 2) {
            const regex = new RegExp(i?.symbol.toLowerCase());
            const resp = regex.test(word.toLowerCase());
            if (resp) newArray.push(i?.symbol);
        }
    });
    return newArray;
};
import {createAsyncThunk} from "@reduxjs/toolkit";

function sleep (delay, par) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), delay)
  })
}



const REGEX = /He|Li|Be|Ne|Na|Mg|Al|Si|Cl|Ar|Ca|Sc|Ti|Cr|Mn|Fe|Co|Ni|Cu|Zn|Ga|Ge|As|Se|Br|Kr|Rb|Sr|Zr|Nb|Mo|Tc|Ru|Rh|Pd|Ag|Cd|In|Sn|Sb|Te|Xe|Cs|Ba|La|Ce|Pr|Nd|Pm|Sm|Eu|Gd|Tb|Dy|Ho|Er|Tm|Yb|Lu|Hf|Ta|W|Re|Os|Ir|Pt|Au|Hg|Tl|Pb|Bi|Po|At|Rn|Fr|Ra|Ac|Th|Pa|Np|Pu|Am|Cm|Bk|Cf|Es|Fm|Md|No|Lr|Rf|Db|Sg|Bh|Hs|Mt|B|C|N|O|F|P|S|U|K|V|Y|I|H/g


/**
 * Get inventory data
 */
export const processInput = createAsyncThunk('store/printer', async (inputArr, { getState }) => {

    await sleep(1000); // simulate delay

    return inputArr.map(word => {

        let results = word.match(REGEX);

        if(results) {

            return {word, innerHTML: word.replace(REGEX, `<span class='$&'">$&</span>`)}
        }

        return {word, innerHTML: null};

    })

});

import {CountryInfo} from "../api/apiService";

// Убираем повторяющиеся значения
export const uniqueArray = (array: CountryInfo[]) => {
    return array.filter(function (item, pos, arrayOrig) {
        const ind = arrayOrig.findIndex((elem) => elem.name === item.name);
        return ind === pos;
    });
}
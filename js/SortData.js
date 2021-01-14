
/**
* @description     :  Dependencies require to be installed before the execeution
* @CensusAnalyzer  :  Import CensusAnalyzer class
*/

const CensusAnalyzer = require('../js/StateCensusAnalyzer');

/**
 * @description Class Sorting
 * @class       Sorting
 */
class Sorting {
    /* sorting logic for number type */
    SortData = (filePath, sortType) => {
        return new Promise(function (resolve, reject) {
            CensusAnalyzer.stateCensusFileLoader(filePath).then(data => {
                data.sort((first, second) => (first[sortType] - second[sortType]));
                resolve(data);
            }).catch(err => {
                reject(err)
            })
        })
    }
    /*  sorting logic for String type */
    SortStateData = (filePath, sortType) => {
        return new Promise(function (resolve, reject) {
            CensusAnalyzer.stateCensusFileLoader(filePath).then(data => {
                data.sort((first, second) => (first[sortType].toUpperCase() < second[sortType].toUpperCase()) ? -1 : 1);
                resolve(data);
            }).catch(err => {
                reject(err)
            })
        })
    }
}

module.exports = new Sorting;

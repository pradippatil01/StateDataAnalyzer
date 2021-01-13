/**************************************************************************
*   Excecution : 1. default Node 
*   Purpose    : StateCensusDataAnalyzer read data from csv
*   @description 
*   @author    : Pradip R patil (BridgeLabz)
*   @file      : StateAnalyzer.js
*   @version   : v14.15.1
***************************************************************************/

/**
* @description :  Dependencies require to be installed before the execeution
* csv-parser   :  parser converting CSV text input into json.
* @fs          :  js file system module allows you to work with the file system.
*/
const csv = require('csv-parser');
const fs = require('fs');

/**
 * @description Class CensusAnalyzer
 * @class       CensusAnalyzer
 */

class CensusAnalyzer {
    /* read csv data from csv file and store in array */
stateCensusFileLoader(filename) {
        var csvData = [];
        return new Promise(function (resolve, reject) {
            fs.createReadStream(filename).pipe(csv())
                .on('data', (data) => {
                    csvData.push(data);
                })
                .on('end', () => {
                    resolve(csvData)
                })
        })
    }
}
module.exports = new CensusAnalyzer;
// let sca=new CensusAnalyzer();
// const FILE_PATH = '../resource/StateCensusData.csv';
// sca.stateCensusFileLoader(FILE_PATH).then((data) => {
//     console.log(data)
// })
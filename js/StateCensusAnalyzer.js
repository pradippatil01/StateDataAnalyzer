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
const path = require('path');

/**
 * @description Class CensusAnalyzer
 * @class       CensusAnalyzer
 */

class CensusAnalyzer {
    /* read csv data from csv file and store in array */
    stateCensusFileLoader(filename) {
        var csvData = [];
        fs.createReadStream(filename).pipe(csv())
            .on('data', (data) => {
                csvData.push(data);
            })
            .on('end', () => {
                console.log(csvData);
            })
    }
}

let censusAnalyzer = new CensusAnalyzer();
censusAnalyzer.stateCensusFileLoader('../resource/StateCensusData.csv');
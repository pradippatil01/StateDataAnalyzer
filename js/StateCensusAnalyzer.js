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
        return new Promise(function (resolve, reject) {
            /* check file present or not on path*/
            if (fs.existsSync(filename)) {
                /* check file extension */
                let ext = path.extname(filename);
                if (ext == '.csv') {
                    fs.createReadStream(filename).pipe(csv())
                        .on('data', (data) => {
                            csvData.push(data);
                        })
                        .on('end', () => {
                            resolve(csvData)
                        })
                } else {
                    reject(new Error('Extension Incorrect'));
                }
            } else {
                reject(new Error('No Such File'));
            }
        })
    }
}
module.exports = new CensusAnalyzer;

/**
* @description     :  Testing file where test cases implemented for validation purpose
*/
const CensusAnalyzer = require('../js/StateCensusAnalyzer');
const FILE_PATH = './resource/StateCensusData.csv';
const assert = require('chai').assert;


describe("#TestForReadingCsv", () => {
    it("givenStateCensusCsvFile_whenParse_shouldmatchCount", () => {
        CensusAnalyzer.stateCensusFileLoader(FILE_PATH).then((data) => {
            assert.lengthOf(data,29);
        })
    })

})
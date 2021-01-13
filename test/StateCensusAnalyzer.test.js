/**
* @description     :  Testing file where test cases implemented for validation purpose
*/
const CensusAnalyzer = require('../js/StateCensusAnalyzer');
const FILE_PATH = './resource/StateCensusData.csv';
const WRONG_FILE = './resource/StateCensusDataN.csv';    

const assert = require('chai').assert;

describe("#TestForReadingCsv", () => {
    it("givenStateCensusCsvFile_whenParse_shouldmatchCount", () => {
        let result = CensusAnalyzer.stateCensusFileLoader(FILE_PATH);
        result.then((data) => {
            assert.lengthOf(data, 29);
        })
    })

    it("givenStateCensusCsv_whenCountIsAboveThanRealCount_ShouldNotEqualCheck", () => {
        let result = CensusAnalyzer.stateCensusFileLoader(FILE_PATH);
        result.then((data) => {
            assert.notEqual(data.length, 30);
        })
    })

    it("givenStateCensusCsv_whenCountIsBelowThanRealCount_ShouldNotEqualCheck", () => {
        let result = CensusAnalyzer.stateCensusFileLoader(FILE_PATH);
        result.then((data) => {
            assert.notEqual(data.length, 28);
        })
    })
})

describe("#TestcaseforWrongCsv", () => {
    it("givenStateCensusCsvFile_whenWrong_shouldthrowexception", () => {
        CensusAnalyzer.stateCensusFileLoader(WRONG_FILE).catch(error => assert.equal(error.message, 'No Such File'));
    })
})





/**
* @description     :  Testing file where test cases implemented for validation purpose
*/
const CensusAnalyzer = require('../js/StateCensusAnalyzer');
const FILE_PATH = './resource/StateCensusData.csv';
const STATECODE_FILE_PATH = './resource/StateCode.csv';
const WRONG_FILE = './resource/StateCensusDataN.csv';
const WRONG_EXTTENSION_FILE = './resource/StateData.json';
const WRONG_DELIMETER_FILE = './resource/Data.csv';


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

    it("givenStateCensusCsvFile_whenWrongExtension_shouldthrowexception", () => {
        CensusAnalyzer.stateCensusFileLoader(WRONG_EXTTENSION_FILE).catch(error => assert.equal(error.message, 'Extension Incorrect'));
    })

    it("givenStateCensusCsvFile_whenhavingWrongDelimeter_shouldthrowexception", () => {
        CensusAnalyzer.stateCensusFileLoader(WRONG_DELIMETER_FILE).catch(error => assert.equal(error.message, 'Invalid Delimiter Arised'));
    })
    
    it('This TestCase Pases when Returned Exception is Invalid Headers', () => {
        CensusAnalyzer.stateCensusFileLoader(STATECODE_FILE_PATH).catch(error => assert.equal(error.message, 'Invalid Headers'));
    })
})





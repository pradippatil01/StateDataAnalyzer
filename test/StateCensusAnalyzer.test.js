/**
* @description     :  Testing file where test cases implemented for validation purpose
*/
const CensusAnalyzer = require('../js/StateCensusAnalyzer');
const sorting = require('../js/SortData');
const FILE_PATH = './resource/StateCensusData.csv';
const STATE_CODE_FILE = './resource/StateCode.csv';
const WRONG_FILE = './resource/StateCensusDataN.csv';
const WRONG_EXTTENSION_FILE = './resource/StateData.json';
const WRONG_DELIMETER_FILE = './resource/Data.csv';
const EMPTY_FILE = './resource/emptyfile.csv';
const assert = require('chai').assert;
const customException = require('../js/Exceptions');


describe("#TestForReadingCsv", () => {
    before(() => {
        this.result = new Promise((resolve) => {
           data = CensusAnalyzer.stateCensusFileLoader(FILE_PATH).then((data) => {
               resolve(data)
           })
       })
   })

    it("givenStateCensusCsvFile_whenParse_shouldmatchCount", () => {
        this.result.then((data) => {
            assert.lengthOf(data, 29);
        })
    })

    it("givenStateCensusCsv_whenCountIsAboveThanRealCount_ShouldNotEqualCheck", () => {
        this.result.then((data) => {
            assert.notEqual(data.length, 30);
        })
    })

    it("givenStateCensusCsv_whenCountIsBelowThanRealCount_ShouldNotEqualCheck", () => {
        this.result.then((data) => {
            assert.notEqual(data.length, 28);
        })
    })
})

describe("#TestcaseforWrongCsv", () => {
    it("givenStateCensusCsvFile_whenWrong_shouldthrowexception", () => {
        CensusAnalyzer.stateCensusFileLoader(WRONG_FILE).catch(error => assert.equal(error.message,customException.exceptions.noFile));
    })

    it("givenStateCensusCsvFile_whenWrongExtension_shouldthrowexception", () => {
        CensusAnalyzer.stateCensusFileLoader(WRONG_EXTTENSION_FILE).catch(error => assert.equal(error.message, customException.exceptions.extension));
    })

    it("givenStateCensusCsvFile_whenhavingWrongDelimeter_shouldthrowexception", () => {
        CensusAnalyzer.stateCensusFileLoader(WRONG_DELIMETER_FILE).catch(error => assert.equal(error.message, customException.exceptions.delimiter));
    })

    it("givenStateCensusCsvFile_whenEmpty_shouldthrowexception", () => {
        CensusAnalyzer.stateCensusFileLoader(EMPTY_FILE).catch(error => assert.equal(error.message,customException.exceptions.emptyFile));
    })

    it('givenStateCodeCsv_whenParse_shouldMatchCount', () => {
        CensusAnalyzer.stateCensusFileLoader(STATE_CODE_FILE).then(result => assert.lengthOf(result, 37));
    })
})

/* test cases for sort data */
describe('#testsForSortData', () => {
    it('givenStateCensusCsvFile_WhenSortDataAsPerAreaInSqKm_shouldMatchFirstElement', () => {
        sorting.SortData(FILE_PATH, 'AreaInSqKm').then(sortedArray => {
            assert.equal(sortedArray[0].State, 'Goa');
        });
    })
    
    it('givenCsvFile_WhenSortDataAsPerDensity_shouldMatchFirstElement', () => {
        sorting.SortData(FILE_PATH, 'DensityPerSqKm').then(sortedArray => {
            assert.equal(sortedArray[0].State, 'Mizoram');
        });
    })

    it('givenCsvFile_WhenSortDataAsPerPopulation_shouldMatchFirstElement', () => {
        sorting.SortData(FILE_PATH, 'Population').then(sortedArray => {
            assert.equal(sortedArray[0].State, 'Sikkim');
        });
    })

    it('givenCsvFile_WhenSortDataAsPerPerState_shouldMatchFirstElement', () => {
        sorting.SortStateData(FILE_PATH, 'State').then(sortedArray => {
            assert.equal(sortedArray[0].State, 'Andhra Pradesh')
            assert.equal(sortedArray[28].State, 'West Bengal')
        });
    })

    it('givenCsvFile_WhenSortDataAsPerPerStateCode_shouldMatchFirstElement', () => {
        sorting.SortData(STATE_CODE_FILE, 'StateCode').then(sortedArray => {
            assert.equal(sortedArray[0].State, 'JammuandKashmir');
            assert.equal(sortedArray[36].State, 'Andhra Pradesh New')
        });
    })
})





import * as headers from '../src/http/httpHeaders'

describe('headers', () => {
    it('skips "undefined" value', () => {
        let test_headers = {'test': 1}
        headers.setHeader(test_headers, 'somethingundefined', undefined)

        expect(test_headers.somethingundefined).toBeUndefined();
    });

    it('sets header internally if it does not exist', () => {
        let test_headers = {}
        headers.setHeader(test_headers, 'test', 2)

        expect(test_headers.test).toEqual(2) 
    });

    it('sets header internally overring it if exists', () => {
        let test_headers = {'test': 1}
        headers.setHeader(test_headers, 'test', '22')

        expect(test_headers.test).toEqual('22') 
    });

    //current functionality won;t allow false values!
    it('sets header internally for boolean values', () => {
        let test_headers = {'test': 1}
        headers.setHeader(test_headers, 'test', true)

        expect(test_headers.test).toEqual(true) 
    });

    it('sets header if not already set', () => {
        let test_headers = {'test': 1}
        headers.setHeaderIfNotSet(test_headers, 'test', '22')
        expect(test_headers.test).toEqual(1) 

        headers.setHeaderIfNotSet(test_headers, 'testnew', '22')
        expect(test_headers.testnew).toEqual('22') 
    });
})
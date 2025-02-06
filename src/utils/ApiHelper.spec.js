import { jest, describe, test, expect, beforeEach, afterEach } from '@jest/globals';
import fetchData from './ApiHelper'; // Adjust the import path as necessary

describe('fetchData', () => {
    beforeEach(() => {
        globalThis.fetch = jest.fn();
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    test('test_fetch_data_success', async () => {
        const mockResponse = { businesses: [] };
        globalThis.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockResponse,
        });

        const data = await fetchData('pizza', 'new york', 'best_match');
        expect(data).toEqual(mockResponse);
        expect(globalThis.fetch).toHaveBeenCalledWith(
            expect.stringContaining('term=pizza&location=new york&sort_by=best_match'),
            expect.objectContaining({
                headers: {
                    'Authorization': expect.stringContaining('Bearer'),
                },
            })
        );
    });

    test('test_fetch_data_response_not_ok', async () => {
        globalThis.fetch.mockResolvedValueOnce({
            ok: false,
        });

        await expect(fetchData('pizza', 'new york', 'best_match')).rejects.toThrow('Network response was not ok');
    });

    test('test_fetch_data_with_empty_parameters', async () => {
        const mockResponse = { businesses: [] };
        globalThis.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockResponse,
        });

        const data = await fetchData('', '', '');
        expect(data).toEqual(mockResponse);
        expect(globalThis.fetch).toHaveBeenCalledWith(
            expect.stringContaining('term=&location=&sort_by='),
            expect.objectContaining({
                headers: {
                    'Authorization': expect.stringContaining('Bearer'),
                },
            })
        );
    });
});
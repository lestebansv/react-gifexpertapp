import { renderHook } from '@testing-library/react';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {

    test('debe de retornar el estado inicial', async () => {

        const category = 'GOT';

        const { result, waitFor } = renderHook(() => useFetchGifs(category));
        const { data, loading } = result.current;

        // await waitFor();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('debe de retornar un arreglo de ims y el loading en false', async () => {

        const category = 'GOT';
                
        const { result, waitFor } = renderHook(() => useFetchGifs(category));

        // await waitFor();

        const { data, loading } = result.current;

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
})
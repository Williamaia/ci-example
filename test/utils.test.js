const { gerarNumeroAleatorio, acharCaracter } = require('../lib/utils');

describe('Utils', () => {
    describe('gerarNumeroAleatorio', () => {
        test('fim nao pode ser negativo', () => {
            expect(gerarNumeroAleatorio(20, -5))
                .toBe(-1);
        });

        test('inicio maior ou igual ao fim', () => {
            expect(gerarNumeroAleatorio(20, 5))
                .toBe(-1);
        });

        test('atribuição randomica', () => {
            expect(gerarNumeroAleatorio(1, 20))
                .toBeGreaterThanOrEqual(0);
        });

        test('inicio nao pode ser negativo', () => {
            expect(gerarNumeroAleatorio(-4, 30))
                .toBe(-1);
        });
    });

    describe('acharCaracter', () => {
        test('comprimento invalido', () => {
            expect(acharCaracter(-4, 'abcde', 'c'))
                .toBe('comprimento invalido');
        });

        test('comprimento menor', () => {
            expect(acharCaracter(2, 'abcde', 'c'))
                .toBe('comprimento fornecido diferente do comprimento real');
        });

        test('busca de caracter', () => {
            expect(acharCaracter(5, 'abcde', 'c'))
                .toBe(2);
        });

        test('busca de caracter não existente', () => {
            expect(acharCaracter(5, 'abcde', 'x'))
                .toBe('caracter não encontrado');
        });
    });    


});
import { ErrorRepository } from './../app'

let repository;

beforeEach(() => {
    repository = new ErrorRepository;
    repository.add(301, 'Unexpected error');
    repository.add(302, 'Press F');
    repository.add(401, 'Critical error');
})

test('get Unexpected error from 301', () => {
    expect(repository.translate(301)).toBe('Unexpected error');
})

test('Unknown error with no code', () => {
    expect(repository.translate(303)).toBe('Unknown error');
})
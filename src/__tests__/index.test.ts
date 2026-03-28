import { describe, test, expect } from 'vitest';
import a from '../a';
import Greeter from '../b';

describe('Basic tests', () => {
    test('a module should be defined', () => {
        expect(a).toBeDefined();
        expect(a).toBe('a');
    });

    test('Greeter should work correctly', () => {
        const greeter = new Greeter('Test');
        expect(greeter.greet()).toBe('Hello, Test!');
    });
});

const concat = require('../concat');
test('Test function concat', () => {
 expect(concat('ABC', 'efc')).not.toBe('ABCef');
 expect(concat('ABC', 'efc')).toBe('ABCefc');
});
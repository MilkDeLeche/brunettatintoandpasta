import { test } from 'node:test';
import assert from 'node:assert/strict';
import { priceOptions, priceCents, restoreSelection } from '../src/lib/menu-selection.ts';

test('separates menu sizes so $25 / $38 never becomes $2538', () => {
  assert.deepEqual(priceOptions('Piccolo $25 / Grande $38'), [
    { label: 'Piccolo', price: '$25' }, { label: 'Grande', price: '$38' },
  ]);
  assert.equal(priceCents('Piccolo $25 / Grande $38'), 0);
  assert.equal(priceCents('$38') * 2, 7600);
  assert.equal(priceCents('$12.50') * 3, 3750);
});
test('restores valid quantities using current catalog prices only', () => {
  const catalog = new Map([['Affettati Misto (Grande)', '$38']]);
  const saved = JSON.stringify([
    { name: 'Affettati Misto (Grande)', qty: 2, price: '$2538' },
    { name: 'Unknown dish', qty: 1, price: '$99' },
    { name: 'Affettati Misto (Grande)', qty: -1, price: '$38' },
  ]);
  assert.deepEqual(restoreSelection(saved, catalog), [{ name: 'Affettati Misto (Grande)', qty: 2, price: '$38' }]);
});
test('invalid and malformed storage cannot prevent opening the menu', () => {
  for (const value of [null, '{', 'null', '{}', '42', '[null]', '[{"qty":1}]']) {
    assert.deepEqual(restoreSelection(value, new Map()), []);
  }
});
test('merges duplicate stored dishes and limits extreme quantities', () => {
  const catalog = new Map([['Tiramisù', '$12']]);
  const raw = JSON.stringify([{ name: 'Tiramisù', qty: 60 }, { name: 'Tiramisù', qty: 60 }]);
  assert.deepEqual(restoreSelection(raw, catalog), [{ name: 'Tiramisù', price: '$12', qty: 99 }]);
});

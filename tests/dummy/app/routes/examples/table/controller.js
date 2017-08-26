import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

const COLUMN_COUNT = 26;
const ROW_COUNT = 100;
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default Controller.extend({
  rows: computed(function() {
    const arr = [];
    for (let i = 0; i < ROW_COUNT; i++) {
      const obj = Ember.Object.create({});
      for (let j = 0; j < COLUMN_COUNT; j++) {
        obj.set(ALPHABET[j % 26], ALPHABET[j % 26]);
      }
      arr.push(obj);
    }
    return arr;
  }),

  columns: computed(function() {
    const arr = [];
    const columnWidth = 180;

    for (let j = 0; j < COLUMN_COUNT; j++) {
      arr.push(Ember.Object.create({
        columnName: `Col ${ALPHABET[j % 26]}`,
        valuePath: ALPHABET[j % 26],
        width: columnWidth
      }));
    }

    return arr;
  }),
});

import Ember from 'ember';
const {
  Controller
} = Ember;

export default Controller.extend({
  rows: computed(function() {
    const arr = [];
    for (let i = )
    return arr;
  }),

  columns: computed(function() {
    const arr = emberA();
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const columnWidth = 180;

    arr.pushObject(EmberObject.create({
      columnName: 'Column id',
      valuePath: 'id',
      isFixedColumn: true,
      width: columnWidth
    }));

    for (let j = 0; j < 10; j++) {
      arr.pushObject(EmberObject.create({
        columnName: `Col ${alphabet[j % 26]}`,
        valuePath: alphabet[j % 26],
        width: columnWidth
      }));
    }

    return arr;
  }),
});

foam.CLASS({
  package: 'hello',
  name: 'World',

  tableColumns: [
    'id',
    'name',
    'universe'
  ],

  searchColumns: [
    'name',
    'universe'
  ],

  properties: [
    {
      name: 'id',
      class: 'String',
      createVisibility: 'HIDDEN',
      updateVisibility: 'RO'
    },
    {
      name: 'name',
      class: 'String'
    },
    {
      name: 'universe',
      class: 'String'
    }
  ],

  methods: [
    {
      name: 'toSummary',
      type: 'String',
      code: function() {
        return this.name;
      },
      javaCode: 'return getName();'
    }
  ]
});

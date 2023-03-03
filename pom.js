foam.POM({
  name: 'tryfoam',
  version: 1,
  projects: [
    { name: 'foam3/src/pom' },
    { name: 'foam3/src/foam/nanos/pom' },
    { name: 'foam3/src/foam/support/pom' },
    { name: 'foam3/src/foam/u2/wizard/pom' },
    { name: 'myproject/src/pom' }
  ],
  foobar: {
    protected: ['foam3', 'myproject'],
    generate: ['js', 'java'],
    build: {
      objectDir: 'build',
      javaOutDir: 'build/src/java',
    },
    target: {
      runDir: 'runtime'
    }
  }
});

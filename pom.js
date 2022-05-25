foam.POM({
  name: 'tryfoam',
  version: 1,
  projects: [
    { name: 'foam3/src/pom' },
    { name: 'foam3/src/foam/nanos/pom' },
    { name: 'foam3/src/foam/support/pom' },
    { name: 'myproject/src/pom' }
  ],
  foobar: {
    // new CRUNCH-based foobar
    build: {
      objectDir: 'build',
      javaOutDir: 'build/src/java'
    },
    target: {
      runDir: 'runtime'
    },
    
    // foobar first prototype
    protected: ['foam3', 'myproject'],
    generate: ['js', 'java'],
    buildOutdir: 'build',
    javaOutdir: 'build/src/java',
    runtime: 'runtime'
  }
});

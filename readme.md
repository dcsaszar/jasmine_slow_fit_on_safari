# Jasmine performance test suite

- Basis for discussion in https://github.com/jasmine/jasmine/pull/2035.
- For https://github.com/jasmine/jasmine/issues/2008 the suite is a fifty-fifty mix of focused and skipped specs.

## Measure

### Karma runner

#### Interactively

```
npm start
```

Visit http://localhost:9876/

#### Headless Chrome

MacOs:

```
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --headless=new http://localhost:9876/
```

### Jasmine browser runner

#### Interactively

```
npm start
```

Visit http://localhost:8888/

#### Command line

```
npx jasmine-browser-runner runSpecs --browser=chrome | grep Finished
npx jasmine-browser-runner runSpecs --browser=firefox | grep Finished
npx jasmine-browser-runner runSpecs --browser=safari | grep Finished
npx jasmine-browser-runner runSpecs --browser=headlessChrome | grep Finished
npx jasmine-browser-runner runSpecs --browser=headlessFirefox | grep Finished
```

#### Interactively + Headless Chrome

MacOS:

```
time (/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --virtual-time-budget=99999 --headless=new http://localhost:8888)

```

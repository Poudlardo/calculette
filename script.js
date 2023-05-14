function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

class App extends React.Component {

  constructor(props) {
    super(props);_defineProperty(this, "add",













    (a, b) => {
      return a + b;
    });_defineProperty(this, "substract",

    (a, b) => {
      return a - b;
    });_defineProperty(this, "multiply",

    (a, b) => {
      return a * b;
    });_defineProperty(this, "divide",

    (a, b) => {
      return a / b;
    });_defineProperty(this, "toutEffacer",

    () => {
      this.setState({
        display: 0 });

    });_defineProperty(this, "afficherValeurs",

    valeur => {
      let display = this.state.display;

      if (valeur === '.' && (display[display.length - 1] === '.' || display[display.length - 2] === '.')) {
        this.setState({
          display: display });

      } else if (valeur === '0' && display === '0') {
        this.setState({
          display: display });

      } else {
        this.setState({
          display: this.state.display === 0 ? valeur === '.' ? '0.' : valeur : this.state.display + valeur });

      }



    });_defineProperty(this, "operate",

    () => {
      // select numbers and operators in different strings
      const nmbrsRgx = /\d+\.?\d?/g;
      const signsRgx = /\+|-|\*|\//g;

      let display = this.state.display;
      let numbersArr = [...display.match(nmbrsRgx)];
      let operators = [...display.match(signsRgx)];

      display.match(/\D{3}/) ? display = display.replace(/\D{2}/, '') : display.match(/\+{2}/) ? display = display.replace(/\+{1}/, '') : display;

      numbersArr = [...display.match(nmbrsRgx)];
      operators = [...display.match(signsRgx)];

      for (let i = display.length + 3; i >= 0; i--) {

        if (operators.includes('*')) {

          const a = parseFloat(numbersArr[operators.indexOf('*')]);
          const b = parseFloat(numbersArr[operators.indexOf('*') + 1]);
          const result = this.multiply(a, b);
          numbersArr.splice(operators.indexOf('*'), 2, result);
          operators.splice(operators.indexOf('*'), 1);
          console.log(operators);
          console.log(numbersArr);
        } else if (operators.includes('/')) {

          const c = parseFloat(numbersArr[operators.indexOf('/')]);
          const d = parseFloat(numbersArr[operators.indexOf('/') + 1]);
          const result = this.divide(c, d);
          numbersArr.splice(operators.indexOf('/'), 2, result);
          operators.splice(operators.indexOf('/'), 1);

        } else if (operators[0] === '+') {

          const e = parseFloat(numbersArr[0]);
          const f = parseFloat(numbersArr[0 + 1]);
          const resultAdd = this.add(e, f);
          numbersArr.splice(0, 2, resultAdd);
          operators.splice(0, 1);
          console.log(operators);
          console.log(numbersArr);

        } else if (operators[0] === '-' && numbersArr.length === 1) {
          numbersArr[0] = -numbersArr[0];
        } else if (operators[0] === '-') {

          const e = parseFloat(numbersArr[0]);
          const f = parseFloat(numbersArr[0 + 1]);
          const resultSub = this.substract(e, f);
          numbersArr.splice(0, 2, resultSub);
          operators.splice(0, 1);
        } else {
          break;
        }
      }
      const result = numbersArr[0];
      this.setState({
        display: result });

    });this.state = { display: '' };this.afficherValeurs = this.afficherValeurs.bind(this);this.add = this.add.bind(this);this.substract = this.substract.bind(this);this.divide = this.divide.bind(this);this.operate = this.operate.bind(this);this.toutEffacer = this.toutEffacer.bind(this);this.multiply = this.multiply.bind(this);}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "calculatrice" }, /*#__PURE__*/
      React.createElement("div", { id: "display" }, this.state.display), /*#__PURE__*/
      React.createElement("div", { class: "bouttons" }, /*#__PURE__*/
      React.createElement("button", { id: "one", onClick: () => this.afficherValeurs('1') }, "1"), /*#__PURE__*/
      React.createElement("button", { id: "two", onClick: () => this.afficherValeurs('2') }, "2"), /*#__PURE__*/
      React.createElement("button", { id: "three", onClick: () => this.afficherValeurs('3') }, "3"), /*#__PURE__*/
      React.createElement("button", { id: "add", onClick: () => this.afficherValeurs('+') }, "+"), /*#__PURE__*/
      React.createElement("button", { id: "four", onClick: () => this.afficherValeurs('4') }, "4"), /*#__PURE__*/
      React.createElement("button", { id: "five", onClick: () => this.afficherValeurs('5') }, "5"), /*#__PURE__*/
      React.createElement("button", { id: "six", onClick: () => this.afficherValeurs('6') }, "6"), /*#__PURE__*/
      React.createElement("button", { id: "subtract", onClick: () => this.afficherValeurs('-') }, "-"), /*#__PURE__*/
      React.createElement("button", { id: "seven", onClick: () => this.afficherValeurs('7') }, "7"), /*#__PURE__*/
      React.createElement("button", { id: "eight", onClick: () => this.afficherValeurs('8') }, "8"), /*#__PURE__*/
      React.createElement("button", { id: "nine", onClick: () => this.afficherValeurs('9') }, "9"), /*#__PURE__*/
      React.createElement("button", { id: "divide", onClick: () => this.afficherValeurs('/') }, "\xF7"), /*#__PURE__*/
      React.createElement("button", { id: "zero", onClick: () => this.afficherValeurs('0') }, "0"), /*#__PURE__*/
      React.createElement("button", { id: "equals", onClick: () => this.operate() }, "="), /*#__PURE__*/
      React.createElement("button", { id: "clear", onClick: () => this.toutEffacer() }, "Effacer"), /*#__PURE__*/
      React.createElement("button", { id: "multiply", onClick: () => this.afficherValeurs('*') }, "x"), /*#__PURE__*/
      React.createElement("button", { id: "decimal", onClick: () => this.afficherValeurs('.') }, "."))));



  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('appli'));

describe('Calculator', function() {

    // inject the HTML fixture for the tests
    beforeEach(function() {
        var fixture = '<div id="fixture"><input id="first" type="text">' +
            '<input id="second" type="text">' +
            '<button id="modulus"  ></button>' +
            '<button id="fibonacci"  ></button>' +
            '<button id="multiply"  ></button>' +
            '<button id="divide"  ></button>' +
            '<button id="palindrome"  ></button>' +
            'Result: <span id="result" /></div>';

        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture);
    });

    // remove the html fixture from the DOM
    afterEach(function() {
        document.body.removeChild(document.getElementById('fixture'));
    });

    // call the init function of calculator to register DOM elements
    beforeEach(function() {
        window.operations.init();
    });

    it('should return 1 for 11 % 2', function() {
        document.getElementById('first').value = 11;
        document.getElementById('second').value = 2;
        document.getElementById('modulus').click();
        expect(document.getElementById('result').innerHTML).toBe('1');
    });


    it('should return 15 for 5(fibonacci)', function() {
        document.getElementById('first').value = 5;
        document.getElementById('fibonacci').click();
        expect(document.getElementById('result').innerHTML).toBe('15');
    });




    it('should return 5 for 50 and 10', function() {
        document.getElementById('first').value = 50;
        document.getElementById('second').value = 10;
        document.getElementById('divide').click();
        expect(document.getElementById('result').innerHTML).toBe('5');
    });

    it('should return 2 for 1 * 2', function() {
        document.getElementById('first').value = 1;
        document.getElementById('second').value = 2;
        document.getElementById('multiply').click();
        expect(document.getElementById('result').innerHTML).toBe('2');
    });

    it('should return true for  anna in input a', function() {
        document.getElementById('first').value = 'anna';
        document.getElementById('palindrome').click();
        expect(document.getElementById('result').innerHTML).toBe('true');
    });


});
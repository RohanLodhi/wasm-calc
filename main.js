// Initialize the WebAssembly module
Module().then(instance => {
    window.wasmInstance = instance;  // Store the WebAssembly instance globally

    // Function to perform the selected operation
    window.performOperation = (operation) => {
        const num1 = parseInt(document.getElementById('num1').value);
        const num2 = parseInt(document.getElementById('num2').value);
        let result;

        switch (operation) {
            case 'add':
                result = wasmInstance._add(num1, num2);
                break;
            case 'subtract':
                result = wasmInstance._subtract(num1, num2);
                break;
            case 'multiply':
                result = wasmInstance._multiply(num1, num2);
                break;
            case 'divide':
                result = wasmInstance._divide(num1, num2);
                break;
        }

        // Display the result in the HTML
        document.getElementById('result').textContent = `Result: ${result}`;
    };
});
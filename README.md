# RSA.js
**RSA.js** is a javascript RSA algorithim encryption tool, complete with key generation and functions to encrypt, decrypt, encode, and decode strings.
## Installation
This library is built primarily for browser applications. Simply download it [here](https://raw.githubusercontent.com/benjaminBrownlee/RSA/master/RSA.min.js) or just hotlink to it:
      
	<script src="https://raw.githubusercontent.com/benjaminBrownlee/RSA/master/RSA.min.js"></script>
      
Also, RSA.js relies on bigInt.js to generate, compute, and manage massive values for encryption. Keys, encoded strings, and encrypted strings will be represented as Big Integer objects.  Download bigInt.js [here](http://peterolson.github.com/BigInteger.js/BigInteger.min.js) or use the hotlink below:

	<script src="http://peterolson.github.com/BigInteger.js/BigInteger.min.js"></script>
## Usage
### `RSA.generate(keysize)`
First, generate an encryption key of a given keysize in bits. `RSA.generate()` will return an object with "n", "e", and "d" properties, standing for the publc key, public exponet, and private key respectively.  This operation will take the most computational time and power.

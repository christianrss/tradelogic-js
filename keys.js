const EC = require('elliptic').ec, ec = new EC('secp256k1');

const John_Private_Key  = '62d101759086c306848a0c1020922a78e8402e1330981afe9404d0ecc0a4be3d';
const JOHN_KEY_PAIR = ec.keyFromPrivate(John_Private_Key, 'hex');

module.exports = {
	JOHN_KEY: JOHN_KEY_PAIR
}

const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
const TargetType = require('../../extension-support/target-type');

class Scratch3YourExtension {

    constructor (runtime) {
        // put any setup for your extension here
    }

    /**
     * Returns the metadata about your extension.
     */
    getInfo () {
        return {
            // unique ID for your extension
            id: 'XOREncryptor',

            // name that will be displayed in the Scratch UI
            name: 'XOR Encryptor',

            // colours to use for your extension blocks
            color1: '#5a6077',
            color2: '#191970',

            // icons to display
            blockIconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAAAAACyOJm3AAAAFklEQVQYV2P4DwMMEMgAI/+DEUIMBgAEWB7i7uidhAAAAABJRU5ErkJggg==',
            menuIconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAAAAACyOJm3AAAAFklEQVQYV2P4DwMMEMgAI/+DEUIMBgAEWB7i7uidhAAAAABJRU5ErkJggg==',

            // your Scratch blocks
            blocks: [
                {
                    // name of the function where your block code lives
                    opcode: 'xorEncrypt',

                    // type of block - choose from:
                    //   BlockType.REPORTER - returns a value, like "direction"
                    //   BlockType.BOOLEAN - same as REPORTER but returns a true/false value
                    //   BlockType.COMMAND - a normal command block, like "move {} steps"
                    //   BlockType.HAT - starts a stack if its value changes from false to true ("edge triggered")
                    blockType: BlockType.REPORTER,

                    // label to display on the block
                    text: 'Encrypt [text] and [secretKey]',

                    // true if this block should end a stack
                    terminal: false,

                    // where this block should be available for code - choose from:
                    //   TargetType.SPRITE - for code in sprites
                    //   TargetType.STAGE  - for code on the stage / backdrop
                    // remove one of these if this block doesn't apply to both
                    filter: [ TargetType.SPRITE, TargetType.STAGE ],

                    // arguments used in the block
                    arguments: {
                        text: {
                            // default value before the user sets something
                            defaultValue: "plaintext",

                            // type/shape of the parameter - choose from:
                            //     ArgumentType.ANGLE - numeric value with an angle picker
                            //     ArgumentType.BOOLEAN - true/false value
                            //     ArgumentType.COLOR - numeric value with a colour picker
                            //     ArgumentType.NUMBER - numeric value
                            //     ArgumentType.STRING - text value
                            //     ArgumentType.NOTE - midi music value with a piano picker
                            type: ArgumentType.STRING
                        },
                        secretKey: {
                            // default value before the user sets something
                            defaultValue: 'key',

                            // type/shape of the parameter - choose from:
                            //     ArgumentType.ANGLE - numeric value with an angle picker
                            //     ArgumentType.BOOLEAN - true/false value
                            //     ArgumentType.COLOR - numeric value with a colour picker
                            //     ArgumentType.NUMBER - numeric value
                            //     ArgumentType.STRING - text value
                            //     ArgumentType.NOTE - midi music value with a piano picker
                            type: ArgumentType.STRING
                        }
                    }
                }
            ]
        };
    }


    /**
     * implementation of the block with the opcode that matches this name
     *  this will be called when the block is used
     */
    xorEncrypt ({ text, secretKey }) {
        let encryptedText = '';
        for (let i = 0; i < text.length; i++) {
            const charCode = text.charCodeAt(i);
            const encryptedCharCode = charCode ^ secretKey;
            encryptedText += String.fromCharCode(encryptedCharCode);
        }
        return encryptedText;
    }
}

module.exports = Scratch3YourExtension;

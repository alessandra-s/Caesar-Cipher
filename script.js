/*Alessandra Serrano

Julius Caesar protected his confidential information by encrypting it using a cipher. 
Caesar's cipher shifts each letter by a number of letters. If the shift takes you past
 the end of the alphabet, just rotate back to the front of the alphabet. 
In the case of a rotation by 3, w, x, y, and z would map to z, a, b and c. */

//used https://gist.github.com/mveteanu/7195798f339339e7358dca4ef911532b for guidance
// Function will implement Caesar Cipher to
// encrypt / decrypt the msg by shifting the letters
// of the message acording to the key

// encryptMessage takes in 2 parameters, originalMsg and key
function encryptMessage(originalMsg, key)
{
    //declare string for the output encrypted message
    var encrptdMessage = "";

    // loop to go through the letters in originalMsg
    for(var i = 0; i < originalMsg.length; i++)
    {
        //String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.
        //code variable declared and holds the current character from originalMessage switches it to utf-16
        var code = originalMsg.charCodeAt(i);

        // encrypt 26 letters of alphabet only for untf-16 
        if (code >= 65 && code <= 65 + 26 - 1)
        {
            
            code -= 65;
            //shift the letters from originalMsg using the key
            code = mod(code + key, 26);
            code += 65;
        }

        //add newly encrypted characters to the encrptdMessage 
        encrptdMessage += String.fromCharCode(code);
    }

    return encrptdMessage;
}


// Modulo function: n mod p
function mod(n, p)
{
    if ( n < 0 )
        n = p - Math.abs(n) % p;

    return n % p;
}

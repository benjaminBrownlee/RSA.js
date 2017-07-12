var RSA = {};
            
RSA.generate = function(keysize) 
{
    function random_prime(bits)
    {
        var min = bigInt.one.shiftLeft(bits - 1);
        var max = bigInt.one.shiftLeft(bits).prev();
        while (true)
        {
            var p = bigInt.randBetween(min, max);
            if (p.isProbablePrime(256)) return p;
        } 
    }

    var e = bigInt(65537), p, q, totient;

    do {
        p = random_prime(keysize / 2);
        q = random_prime(keysize / 2);
        totient = bigInt.lcm(p.prev(), q.prev());
    } while (bigInt.gcd(e, totient).notEquals(1) || p.minus(q).abs().shiftRight(keysize / 2 - 100).isZero());

    return {
      n: p.multiply(q),
        e: e, 
        d: e.modInv(totient)
    };
};

RSA.encrypt = function(m, n, e)
{
  return bigInt(m).modPow(e, n);   
};

RSA.decrypt = function(c, d, n)
{
  return bigInt(c).modPow(d, n);   
};

RSA.encode = function(string)
{
    var code = "";
    for(var i = 0; i < string.length; i++)
    {
        code += string.charCodeAt(i);
    }
    return bigInt(code);
};

RSA.decode = function(code)
{
    var string = "";
    code = code.toString();
    for(var i = 0; i < code.length; i += 2)
    {
        var substr = Number(code.substr(i, 2));
        if(substr <= 30)
        {
            string += String.fromCharCode(Number(code.substr(i, 3)));
            i++;
        }
        else
        {
            string += String.fromCharCode(substr);
        }
    }
    return string;
};

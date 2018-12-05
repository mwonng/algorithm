/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var len = s.length;
    if(s.length % 2 == 1) return false;
    const parantheses = { 
        ')': '(',
        '}':'{',
        ']':'['
    };

    var stack = [];
    var head = -1;
    while(len--){
        var char = s[len];
        if(parantheses[char] != null) stack[++head] = char;
        else if(parantheses[stack[head]] != char) return false;
        else head--;
    }
    return true;
}
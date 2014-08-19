function repeat(operation, num) {
    rec = function() {
        i++;
        if(i<num) repeat(function(){}, num);
    };
}

module.exports = repeat

/* official solution:
function repeat(operation, num) {
        if (num <= 0) return
        operation()
        return repeat(operation, --num)
      }
    
      module.exports = repeat
*/
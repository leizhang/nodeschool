function getShortMessages(messages) {
     return messages.filter(function(el) {
        return el.message.length<50; 
     }).map(function(el){return el.message;});
}
    
    module.exports = getShortMessages
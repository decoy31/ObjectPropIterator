/**
 * Object property iterator.
 * 
 * @param {object} obj Object to iterate through.
 * @param {boolean} deep If true, function will do a deep iteration.
 * @param {function} callback Function called for each property found
 *      whose first parameter is the property key and the second
 *      parameter is the property value. Returning false from this
 *      function will stop (i.e.: break) the iteration.
 */
function iter(obj, deep, callback) {
    if (obj && typeof obj === 'object') {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (typeof callback === 'function') {
                    var cbResult = callback(prop, obj[prop]);
                    
                    if (typeof cbResult === 'boolean' && !cbResult) {
                        // If the callback returns boolean false,
                        // discontinue the iteration.
                        break;
                    }
                }
                
                if (deep && typeof obj[prop] === 'object') {
                    iter(obj[prop], deep, callback);
                }
            }
        }
    }
}

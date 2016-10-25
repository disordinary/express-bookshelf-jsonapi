var debug = require('debug')('ebja:response');

// API Response
// This object is initially constructed from just the request object
function APIResponse(request) {
    debug('APIResponse');
    return {
        request: request,
        model: {},
        type: request.params.resourceType
    };
}

module.exports = APIResponse;
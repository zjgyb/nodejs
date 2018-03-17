var http = require('http');
var options = {
    host: 'localhost',
    port: 456,
    path: '/?file=secondary',
    method: 'GET'
};

var processPublicTimeline = function(response) {
    console.log('finished resquest');
}
// let processPublicTimeline = (response) => {
//     console.log('finished resquest');
// };

for (var i = 0; i < 200; i++) {
    http.request(options, processPublicTimeline).end();
}



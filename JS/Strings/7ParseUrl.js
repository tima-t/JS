/**
 * Created by Тито on 09/06/2015.
 */
url = 'http://telerikacademy.com/Courses/Courses/Details/239';
parseURL(url);

function parseURL(url) {
    var protocol = '',
        server = '',
        resource = '';

    protocol = url.substr(0, url.indexOf("://"));
    url = url.substr(url.indexOf("://") + 3);
    server = url.substr(0, url.indexOf("/"));
    resource = url.substr(url.indexOf("/"));

    var obj={
        protokol:protocol,
        server:server,
        resource:resource
    }
    console.log(obj);}

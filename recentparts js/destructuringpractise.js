//destructuring
function ajaxOptions({
    url = "http://some.base.url/api",
    method = "post",
    data,
    callback,
    headers: [
        headers0 = 'Content-Type: text/plain',
        ...otherHeaders
    ] = []
} = {}) {
    return {
        url, method, data, callback,
        headers: [
            headers0,
            ...otherHeaders 
        ]
    }
}


//restructuring most common approach using extend(..)
var defaults = {
    url: 'http://some.base.url/api',
    method: 'post',
    headers: [
        "Content-Type:text/plain"
    ]
};
console.log(defaults)

var settings = {
    url: "http://some.other.url/",
    data: 42,
    callback: function (resp) {/*...*/ }

};
//underscore extend(..)
ajax(_.extend({}, defaults, settings))

//or: ajax(Object.assign({},defaults,settings))

//with no arguments,returns the defaults
//as an object if necessary(better than using the extend option)
var defaults = ajaxOptions();
console.log(defaults)
    //******
var settings = {
         url: "http://some.other.url/",
    data: 42,
    callback: function (resp) {/*...*/ }
}
    //with an argument,mixes in the settings
    //w/ the defaults
    ajax(ajaxOptions(settings))



    * /



//original
function lookupRecords(store = "person-records", id = -1) {
    //...
}

//refactor
function lookuRecord({
    store = "perso-records",
    id = -1
}) {
    //..
}
lookupRecords({id:42})

module.exports = {   // */ Function to get the [day/month/year --- hour:minute:second.millisecond | Unix time]   // how to use: var tools = require('./TimeStamp');console.log(tools.time());           
    GetTime: function () {
        var Time = new Date();
        return "     [" + Time.getDate() + "/" + (Time.getMonth() + 1) + "/" + Time.getFullYear() + " --- " + Time.getHours() + ":" + Time.getMinutes() + ":" + Time.getSeconds() + "." + Time.getMilliseconds() + " | " + Time.getTime() + "]";    
    },
};

var tools = require('./TimeStamp.js');

//console.log("hello" + tools.GetTime());
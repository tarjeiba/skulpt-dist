(function(){function k(b,a){s[b]||(typeof console!=="undefined"&&typeof console.warn=="function"&&console.warn("[WARNING] "+b+" is deprecated and will be removed in version 1.0. Instead, use `"+a+"`."),s[b]=!0)}function t(b){b.localize=i.localize.bind(i);b.timezone=i.timezone.bind(i);b.utc=i.utc.bind(i)}function r(b,a,e){a&&a.days&&(e=a,a=void 0);e&&k("`"+g+"(format, [date], [locale])`","var s = "+g+".localize(locale); s(format, [date])");return(e?i.localize(e):i)(b,a)}function u(b,a,e){e?k("`"+g+
".strftime(format, [date], [locale])`","var s = "+g+".localize(locale); s(format, [date])"):k("`"+g+".strftime(format, [date])`",g+"(format, [date])");return(e?i.localize(e):i)(b,a)}function p(b,a,e){function g(b,c,h,a){for(var d="",f=null,e=!1,i=b.length,j=!1,o=0;o<i;o++){var n=b.charCodeAt(o);if(e===!0)if(n===45)f="";else if(n===95)f=" ";else if(n===48)f="0";else if(n===58)j&&typeof console!=="undefined"&&typeof console.warn=="function"&&console.warn("[WARNING] detected use of unsupported %:: or %::: modifiers to strftime"),
j=!0;else{switch(n){case 65:d+=h.days[c.getDay()];break;case 66:d+=h.months[c.getMonth()];break;case 67:d+=l(Math.floor(c.getFullYear()/100),f);break;case 68:d+=g(h.formats.D,c,h,a);break;case 70:d+=g(h.formats.F,c,h,a);break;case 72:d+=l(c.getHours(),f);break;case 73:d+=l(v(c.getHours()),f);break;case 76:d+=Math.floor(a%1E3)>99?Math.floor(a%1E3):Math.floor(a%1E3)>9?"0"+Math.floor(a%1E3):"00"+Math.floor(a%1E3);break;case 77:d+=l(c.getMinutes(),f);break;case 80:d+=c.getHours()<12?h.am:h.pm;break;case 82:d+=
g(h.formats.R,c,h,a);break;case 83:d+=l(c.getSeconds(),f);break;case 84:d+=g(h.formats.T,c,h,a);break;case 85:d+=l(w(c,"sunday"),f);break;case 87:d+=l(w(c,"monday"),f);break;case 88:d+=g(h.formats.X,c,h,a);break;case 89:d+=c.getFullYear();break;case 90:k&&m===0?d+="GMT":(f=c.toString().match(/\(([\w\s]+)\)/),d+=f&&f[1]||"");break;case 97:d+=h.shortDays[c.getDay()];break;case 98:d+=h.shortMonths[c.getMonth()];break;case 99:d+=g(h.formats.c,c,h,a);break;case 100:d+=l(c.getDate(),f);break;case 101:d+=
l(c.getDate(),f==null?" ":f);break;case 104:d+=h.shortMonths[c.getMonth()];break;case 106:f=new Date(c.getFullYear(),0,1);f=Math.ceil((c.getTime()-f.getTime())/864E5);d+=f>99?f:f>9?"0"+f:"00"+f;break;case 107:d+=l(c.getHours(),f==null?" ":f);break;case 108:d+=l(v(c.getHours()),f==null?" ":f);break;case 109:d+=l(c.getMonth()+1,f);break;case 110:d+="\n";break;case 111:d+=String(c.getDate())+A(c.getDate());break;case 112:d+=c.getHours()<12?h.AM:h.PM;break;case 114:d+=g(h.formats.r,c,h,a);break;case 115:d+=
Math.floor(a/1E3);break;case 116:d+="\t";break;case 117:f=c.getDay();d+=f===0?7:f;break;case 118:d+=g(h.formats.v,c,h,a);break;case 119:d+=c.getDay();break;case 120:d+=g(h.formats.x,c,h,a);break;case 121:d+=(""+c.getFullYear()).slice(2);break;case 122:k&&m===0?d+=j?"+00:00":"+0000":(f=m!==0?m/6E4:-c.getTimezoneOffset(),e=j?":":"",n=Math.abs(f%60),d+=(f<0?"-":"+")+l(Math.floor(Math.abs(f/60)))+e+l(n));break;default:d+=b[o]}f=null;e=!1}else n===37?e=!0:d+=b[o]}return d}var i=b||x,m=a||0,k=e||!1,j=0,
q,b=function(b,c){var a;c?(a=c.getTime(),k&&(c=new Date(c.getTime()+(c.getTimezoneOffset()||0)*6E4+m))):(a=Date.now(),a>j?(j=a,q=new Date(j),a=j,k&&(q=new Date(j+(q.getTimezoneOffset()||0)*6E4+m))):a=j,c=q);return g(b,c,i,a)};b.localize=function(a){return new p(a||i,m,k)};b.timezone=function(a){var c=m,b=k,e=typeof a;if(e==="number"||e==="string")b=!0,e==="string"?(c=a[0]==="-"?-1:1,e=parseInt(a.slice(1,3),10),a=parseInt(a.slice(3,5),10),c=c*(60*e+a)*6E4):e==="number"&&(c=a*6E4);return new p(i,c,
b)};b.utc=function(){return new p(i,m,!0)};return b}function l(b,a){if(a===""||b>9)return b;a==null&&(a="0");return a+b}function v(b){if(b===0)return 12;else if(b>12)return b-12;return b}function w(b,a){var a=a||"sunday",e=b.getDay();a==="monday"&&(e===0?e=6:e--);var g=Date.UTC(b.getFullYear(),0,1),i=Date.UTC(b.getFullYear(),b.getMonth(),b.getDate());return Math.floor((Math.floor((i-g)/864E5)+7-e)/7)}function A(b){var a=b%10;b%=100;if(b>=11&&b<=13||a===0||a>=4)return"th";switch(a){case 1:return"st";
case 2:return"nd";case 3:return"rd"}}var x={days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{D:"%m/%d/%y",F:"%Y-%m-%d",R:"%H:%M",T:"%H:%M:%S",X:"%T",c:"%a %b %d %X %Y",r:"%I:%M:%S %p",
v:"%e-%b-%Y",x:"%D"}},i=new p(x,0,!1),y=typeof module!=="undefined",j;y?(j=module.exports=r,j.strftime=u):(j=function(){return this||(0,eval)("this")}(),j.strftime=r);var g=y?"require('strftime')":"strftime",s={};j.strftimeTZ=function(b,a,e,j){if((typeof e=="number"||typeof e=="string")&&j==null)j=e,e=void 0;e?k("`"+g+".strftimeTZ(format, date, locale, tz)`","var s = "+g+".localize(locale).timezone(tz); s(format, [date])` or `var s = "+g+".localize(locale); s.timezone(tz)(format, [date])"):k("`"+
g+".strftimeTZ(format, date, tz)`","var s = "+g+".timezone(tz); s(format, [date])` or `"+g+".timezone(tz)(format, [date])");return(e?i.localize(e):i).timezone(j)(b,a)};j.strftimeUTC=function(b,a,e){e?k("`"+g+".strftimeUTC(format, date, locale)`","var s = "+g+".localize(locale).utc(); s(format, [date])"):k("`"+g+".strftimeUTC(format, [date])`","var s = "+g+".utc(); s(format, [date])");return(e?z.localize(e):z)(b,a)};j.localizedStrftime=function(b){k("`"+g+".localizedStrftime(locale)`",g+".localize(locale)");
return i.localize(b)};t(r);t(u);var z=i.utc();if(typeof Date.now!=="function")Date.now=function(){return+new Date}})();
!function(){"use strict";var strptime=function(str,format,local){return strptime.parse(str,format,local)};strptime.version="0.0.1";var namespace;if(typeof module!=="undefined"){namespace=module.exports=strptime}else{namespace=function(){return this||(1,eval)("this")}()}namespace.strptime=strptime;!function(strptime){strptime.locale={a:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],A:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],b:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],B:["January","February","March","April","May","June","July","August","September","October","November","December"],f:["Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec."],c:"%Y-%m-%d %H:%M:%S",P:["am","pm"],r:"%I:%M:%S %p",x:"%m/%d/%y",X:"%H:%M:%S",day:["Yesterday","Today","Tomorrow"],bg:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Bg:["January","February","March","April","May","June","July","August","September","October","November","December"],fg:["Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec."],Date_dBY_year_in_HM:"%#B %-d, %Y at %-H:%M",Date_dBY_year:"%#B %-d, %Y",Date_dBY:"%#B %-d, %Y",Date_AdBY:"%A, %#B %-d, %Y",Date_dBA:"%#B %-d, %A",Date_df_in_HM:"%#f, %-d at %-H:%M",Date_dfY:"%-d %#f %Y",Date_dB_in_HM:"%#B %-d at %-H:%M",Date_df:"%-d %#f"}}(strptime);!function(strptime){var inArray=Array.prototype.indexOf||function(el){var l=this.length;var i=0;while(i<l){if(el==this[i]){return i}i++}return-1};var locale=strptime.locale;var strRegNum2="[\\d\\s]?\\d";var strRegStr="\\S+";var specifiers={"%":"\\%",a:strRegStr,A:strRegStr,b:{reg:strRegStr,make:function(date,data,mod,gen){data=inArray.call(gen?locale.bg:locale.b,toLetterCaseReverse(data,mod));if(data===-1){return false}date.setUTCMonth(data);return true}},h:{reg:strRegStr,make:function(date,data,mod,gen){data=inArray.call(gen?locale.bg:locale.b,toLetterCaseReverse(data,mod));if(data===-1){return false}date.setUTCMonth(data);return true}},B:{reg:strRegStr,make:function(date,data,mod,gen){data=inArray.call(gen?locale.Bg:locale.B,toLetterCaseReverse(data,mod));if(data===-1){return false}date.setUTCMonth(data);return true}},f:{reg:strRegStr,make:function(date,data,mod,gen){data=inArray.call(gen?locale.fg:locale.f,toLetterCaseReverse(data,mod));if(data===-1){return false}date.setUTCMonth(data);return true}},g:{reg:strRegNum2,make:function(date,data){data=parseInt(data,10);if(data<0||data>99){return false}data=data+100*parseInt((new Date).getUTCFullYear()/100,10);date.setUTCFullYear(data);return true}},G:{reg:"\\d{4}",make:function(date,data){data=parseInt(data,10);date.setUTCFullYear(data);return true}},d:{reg:strRegNum2,make:function(date,data){data=parseInt(data,10);if(data<1||data>31){return false}date.setUTCDate(data);return true}},e:{reg:strRegNum2,make:function(date,data){data=parseInt(data,10);if(data<1||data>31){return false}date.setUTCDate(data);return true}},H:{reg:strRegNum2,make:function(date,data){data=parseInt(data,10);if(data<0||data>23){return false}date.setUTCHours(data);return true}},I:{reg:strRegNum2,make:function(date,data){data=parseInt(data,10);if(data<1||data>12){return false}date.setUTCHours(date.getUTCHours()+data);return true}},m:{reg:strRegNum2,make:function(date,data){data=parseInt(data,10);if(data<1||data>12){return false}date.setUTCMonth(data-1);return true}},M:{reg:strRegNum2,make:function(date,data){data=parseInt(data,10);if(data<0||data>59){return false}date.setUTCMinutes(data);return true}},n:"\\n",p:{reg:strRegStr,make:function(date,data){data=inArray.call(locale.P,data.toLowerCase());if(data===-1){return false}if(data===1){date.setUTCHours(date.getUTCHours()+12)}return true}},P:{reg:strRegStr,make:function(date,data){data=inArray.call(locale.P,data.toLowerCase());if(data===-1){return false}if(data===1){date.setUTCHours(date.getUTCHours()+12)}return true}},S:{reg:strRegNum2,make:function(date,data){data=parseInt(data,10);if(data<0||data>60){return false}date.setUTCSeconds(data);return true}},t:"\\t",u:"\\d",U:strRegNum2,w:"\\d",W:strRegNum2,y:{reg:strRegNum2,make:function(date,data){data=parseInt(data,10);if(data<0||data>99){return false}data=data+100*parseInt((new Date).getUTCFullYear()/100,10);date.setUTCFullYear(data);return true}},Y:{reg:"\\d{4}",make:function(date,data){data=parseInt(data,10);date.setUTCFullYear(data);return true}},z:{reg:"[+\\-]\\d{4}",make:function(date,data){var m=data.match(/^([+\-])(\d{2})(\d{2})$/);if(!m){return false}var offset=(parseInt(m[2],10)*60+parseInt(m[3],10))*6e4;if(m[1]==="+"){offset=-offset}date.setTime(date.getTime()+offset);return true}},l:{reg:strRegNum2,make:function(date,data){data=parseInt(data,10);if(data<1||data>12){return false}date.setUTCHours(date.getUTCHours()+data);return true}},s:{reg:"\\d+",make:function(date,data){data=parseInt(data,10);date.setTime(data*1e3);return true}},c:locale.c,r:locale.r,R:"%H:%M",T:"%H:%M:%S",x:locale.x,X:locale.X,D:"%m/%d/%y",F:"%Y-%m-%d",Date_iso:"%Y-%m-%dT%H:%M:%S",Date_dBY_year_in_HM:locale.Date_dBY_year_in_HM,Date_dBY_year:locale.Date_dBY_year,Date_dBY:locale.Date_dBY,Date_dBA:locale.Date_dBA,Date_AdBY:locale.Date_AdBY,Date_df_in_HM:locale.Date_df_in_HM,Date_dfY:locale.Date_dfY,Date_dB_in_HM:locale.Date_dB_in_HM,Date_dmY__dot:"%d.%m.%Y",Date_df:locale.Date_df,Date_FT:"%F %T",Date_dmY__minus:"%d-%m-%Y"};strptime.parse=function(str,format,local){str=String(str);format=String(format);var loop=5;while(/%(Date_[a-zA-Z0-9_]+|[cDFrRTxX])/g.test(format)&&loop){format=format.replace(/%(Date_[a-zA-Z0-9_]+|[cDFrRTxX])/,formatTransform);loop--}formatTransform.make=[];var reg=format.replace(/%(([#\^!~]{0,2})[aAbBfh]|([0\-_]?)[degHImMSVWyl]|[GnpPtuUwYzZs%])/g,formatTransform);var match=str.match(new RegExp(reg));if(!match||!formatTransform.make.length){return null}var date=new Date(Date.UTC(0,0));for(var i=0,l=formatTransform.make.length;i<l;i++){var build=formatTransform.make[i];if(!build[0](date,match[i+1],build[1],build[2])){return null}}if(local){date.setTime(date.getTime()+date.getTimezoneOffset()*6e4)}return date};function formatTransform(_,spec,mod,numPad,pos,str){spec=String(spec);mod=String(mod);spec=spec.replace(/^[#_0\^\-!~]+/,"");var s=specifiers[spec];if(!s){return _}var genitive=false;if(mod.indexOf("!")===-1&&spec.length===1&&(mod.indexOf("~")>-1||"bBf".indexOf(spec)>-1&&/%[0\-_]?d[\s]+$/.test(str.substr(0,pos)))){genitive=true}if((spec==="I"||spec==="l")&&!/%[pP]/.test(str)){throw new Error("Undefined AM/PM")}switch(typeof s){case"function":return s();case"string":return s;case"object":formatTransform.make.push([s.make,mod,genitive]);return"("+s.reg+")";default:return _}}function toLetterCaseReverse(str,mode){str=String(str);mode=String(mode);if(mode.indexOf("#")!==-1){return str.substr(0,1).toUpperCase()+str.substr(1)}if(mode.indexOf("^")!==-1){return str.substr(0,1)+str.substr(1).toLowerCase()}return str}}(strptime)}();(function (global) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var setImmediate;

    function addFromSetImmediateArguments(args) {
        tasksByHandle[nextHandle] = partiallyApplied.apply(undefined, args);
        return nextHandle++;
    }

    // This function accepts the same arguments as setImmediate, but
    // returns a function that requires no arguments.
    function partiallyApplied(handler, timeout) {
        var args = [].slice.call(arguments, 1);
        return function() {
            if (typeof handler === "function") {
                handler.apply(undefined, args);
            } else {
                (new Function("" + handler))();
            }
        };
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(partiallyApplied(runIfPresent, handle), 0);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    task();
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function installNextTickImplementation() {
        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            process.nextTick(partiallyApplied(runIfPresent, handle));
            return handle;
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            global.postMessage(messagePrefix + handle, "*");
            return handle;
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            channel.port2.postMessage(handle);
            return handle;
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
            return handle;
        };
    }

    function installSetTimeoutImplementation() {
        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            setTimeout(partiallyApplied(runIfPresent, handle), 0);
            return handle;
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));// This top level file is only used for the distribution file.
// It is used instead of main.js.

var Sk = Sk || {}; //jshint ignore:line

// No js_beautify
Sk.js_beautify = function (x) {
    return x;
};
/**
 * Global object no matter where we're running
 */
Sk.global = typeof global !== "undefined" ?
            global : // jshint ignore:line
            typeof self !== "undefined" ?
              self : // jshint ignore:line
              typeof window !== "undefined" ?
              window : // jshint ignore:line
              {};

/**
 * Export "object" to global namespace as "name".
 *
 * @param {string} name name to export the object to
 * @param {*} object object to export
 */
Sk.exportSymbol = function (name, object) {
    var parts = name.split(".");
    var curobj = Sk.global;
    var part, idx;

    for (idx = 0; idx < (parts.length - 1); idx++) {
        part = parts[idx];

        if (curobj.hasOwnProperty(part)) {
            curobj = curobj[part];
        } else {
            curobj = curobj[part] = {};
        }
    }

    if (typeof object !== "undefined") {
        part = parts[idx];
        curobj[part] = object;
    }
};

Sk.isArrayLike = function (object) {
    if ((object instanceof Array) || (object && object.length && (typeof object.length == "number"))) {
        return true;
    }
    return false;
};

Sk.exportSymbol("Sk", Sk);
Sk.exportSymbol("Sk.global", Sk.global);
Sk.exportSymbol("Sk.exportSymbol", Sk.exportSymbol);
Sk.exportSymbol("Sk.isArrayLike", Sk.isArrayLike);
Sk.asserts = {};

/** @define {boolean} */
Sk.asserts.ENABLE_ASSERTS = true;

Sk.exportSymbol("Sk.asserts.ENABLE_ASSERTS", Sk.asserts.ENABLE_ASSERTS);

/**
 * Cause assertion failure when condition is false.
 * 
 * @param {*} condition condition to check
 * @param {string=} message error message
 */
Sk.asserts.assert = function (condition, message) {
    if (Sk.asserts.ENABLE_ASSERTS && !condition) {
        var msg = "Assertion failure";
        if (message) {
            msg = msg + ": " + message;
        }
        throw new Error(msg);
    }
    return condition;
};
Sk.exportSymbol("Sk.asserts.assert", Sk.asserts.assert);

/**
 * Cause assertion failure.
 * 
 * @param {string=} message error message
 */
Sk.asserts.fail = function (message) {
    if (Sk.asserts.ENABLE_ASSERTS) {
        var msg = "Assertion failure";
        if (message) {
            msg = msg + ": " + message;
        }
        throw new Error(msg);
    }
};
Sk.exportSymbol("Sk.asserts.fail", Sk.asserts.fail);
/**
 * Base namespace for Skulpt. This is the only symbol that Skulpt adds to the
 * global namespace. Other user accessible symbols are noted and described
 * below.
 */

/**
 *
 * Set various customizable parts of Skulpt.
 *
 * output: Replacable output redirection (called from print, etc.).
 * read: Replacable function to load modules with (called via import, etc.)
 * sysargv: Setable to emulate arguments to the script. Should be an array of JS
 * strings.
 * syspath: Setable to emulate PYTHONPATH environment variable (for finding
 * modules). Should be an array of JS strings.
 * nonreadopen: Boolean - set to true to allow non-read file operations
 * fileopen: Optional function to call any time a file is opened
 * filewrite: Optional function to call when writing to a file
 *
 * Any variables that aren't set will be left alone.
 */

Sk.bool_check = function(variable, name) {
    if (variable === undefined || variable === null || typeof variable !== "boolean") {
        throw new Error("must specify " + name + " and it must be a boolean");
    }
};

Sk.python2 = {
    print_function: false,
    division: false,
    absolute_import: null,
    unicode_literals: false,
    // skulpt specific
    set_repr: false,
    class_repr: false,
    inherit_from_object: false,
    super_args: false,
    octal_number_literal: false,
    bankers_rounding: false,
    python_version: false,
    dunder_next: false,
    dunder_round: false,
    exceptions: false,
    no_long_type: false,
    ceil_floor_int: false
};

Sk.python3 = {
    print_function: true,
    division: true,
    absolute_import: null,
    unicode_literals: true,
    // skulpt specific
    set_repr: true,
    class_repr: true,
    inherit_from_object: true,
    super_args: true,
    octal_number_literal: true,
    bankers_rounding: true,
    python_version: true,
    dunder_next: true,
    dunder_round: true,
    exceptions: true,
    no_long_type: true,
    ceil_floor_int: true
};

Sk.configure = function (options) {
    "use strict";
    Sk.output = options["output"] || Sk.output;
    Sk.asserts.assert(typeof Sk.output === "function");

    Sk.debugout = options["debugout"] || Sk.debugout;
    Sk.asserts.assert(typeof Sk.debugout === "function");

    Sk.uncaughtException = options["uncaughtException"] || Sk.uncaughtException;
    Sk.asserts.assert(typeof Sk.uncaughtException === "function");

    Sk.read = options["read"] || Sk.read;
    Sk.asserts.assert(typeof Sk.read === "function");

    Sk.nonreadopen = options["nonreadopen"] || false;
    Sk.asserts.assert(typeof Sk.nonreadopen === "boolean");

    Sk.fileopen = options["fileopen"] || undefined;
    Sk.asserts.assert(typeof Sk.fileopen === "function" || typeof Sk.fileopen === "undefined");

    Sk.filewrite = options["filewrite"] || undefined;
    Sk.asserts.assert(typeof Sk.filewrite === "function" || typeof Sk.filewrite === "undefined");

    Sk.timeoutMsg = options["timeoutMsg"] || Sk.timeoutMsg;
    Sk.asserts.assert(typeof Sk.timeoutMsg === "function");
    Sk.exportSymbol("Sk.timeoutMsg", Sk.timeoutMsg);

    Sk.sysargv = options["sysargv"] || Sk.sysargv;
    Sk.asserts.assert(Sk.isArrayLike(Sk.sysargv));

    Sk.__future__ = options["__future__"] || Sk.python2;

    Sk.bool_check(Sk.__future__.print_function, "Sk.__future__.print_function");
    Sk.bool_check(Sk.__future__.division, "Sk.__future__.division");
    Sk.bool_check(Sk.__future__.unicode_literals, "Sk.__future__.unicode_literals");
    Sk.bool_check(Sk.__future__.set_repr, "Sk.__future__.set_repr");
    Sk.bool_check(Sk.__future__.class_repr, "Sk.__future__.class_repr");
    Sk.bool_check(Sk.__future__.inherit_from_object, "Sk.__future__.inherit_from_object");
    Sk.bool_check(Sk.__future__.super_args, "Sk.__future__.super_args");
    Sk.bool_check(Sk.__future__.octal_number_literal, "Sk.__future__.octal_number_literal");
    Sk.bool_check(Sk.__future__.bankers_rounding, "Sk.__future__.bankers_rounding");
    Sk.bool_check(Sk.__future__.python_version, "Sk.__future__.python_version");
    Sk.bool_check(Sk.__future__.dunder_next, "Sk.__future__.dunder_next");
    Sk.bool_check(Sk.__future__.dunder_round, "Sk.__future__.dunder_round");
    Sk.bool_check(Sk.__future__.exceptions, "Sk.__future__.exceptions");
    Sk.bool_check(Sk.__future__.no_long_type, "Sk.__future__.no_long_type");
    Sk.bool_check(Sk.__future__.ceil_floor_int, "Sk.__future__.ceil_floor_int");

    // in __future__ add checks for absolute_import

    Sk.imageProxy = options["imageProxy"] || "http://localhost:8080/320x";
    Sk.asserts.assert(typeof Sk.imageProxy === "string" || typeof Sk.imageProxy === "function");

    Sk.inputfun = options["inputfun"] || Sk.inputfun;
    Sk.asserts.assert(typeof Sk.inputfun === "function");

    Sk.inputfunTakesPrompt = options["inputfunTakesPrompt"] || false;
    Sk.asserts.assert(typeof Sk.inputfunTakesPrompt === "boolean");

    Sk.retainGlobals = options["retainglobals"] || false;
    Sk.asserts.assert(typeof Sk.retainGlobals === "boolean");

    Sk.debugging = options["debugging"] || false;
    Sk.asserts.assert(typeof Sk.debugging === "boolean");

    Sk.killableWhile = options["killableWhile"] || false;
    Sk.asserts.assert(typeof Sk.killableWhile === "boolean");

    Sk.killableFor = options["killableFor"] || false;
    Sk.asserts.assert(typeof Sk.killableFor === "boolean");

    Sk.signals = typeof options["signals"] !== undefined ? options["signals"] : null;
    if (Sk.signals === true) {
        Sk.signals = {
            listeners: [],
            addEventListener: function (handler) {
                Sk.signals.listeners.push(handler);
            },
            removeEventListener: function (handler) {
                var index = Sk.signals.listeners.indexOf(handler);
                if (index >= 0) {
                    Sk.signals.listeners.splice(index, 1); // Remove items
                }
            },
            signal: function (signal, data) {
                for (var i = 0; i < Sk.signals.listeners.length; i++) {
                    Sk.signals.listeners[i].call(null, signal, data);
                }
            }
        };
    } else {
        Sk.signals = null;
    }
    Sk.asserts.assert(typeof Sk.signals === "object");

    Sk.breakpoints = options["breakpoints"] || function() { return true; };
    Sk.asserts.assert(typeof Sk.breakpoints === "function");

    Sk.setTimeout = options["setTimeout"];
    if (Sk.setTimeout === undefined) {
        if (typeof setTimeout === "function") {
            Sk.setTimeout = function(func, delay) { setTimeout(func, delay); };
        } else {
            Sk.setTimeout = function(func, delay) { func(); };
        }
    }
    Sk.asserts.assert(typeof Sk.setTimeout === "function");

    if ("execLimit" in options) {
        Sk.execLimit = options["execLimit"];
    }

    if ("yieldLimit" in options) {
        Sk.yieldLimit = options["yieldLimit"];
    }

    if (options["syspath"]) {
        Sk.syspath = options["syspath"];
        Sk.asserts.assert(Sk.isArrayLike(Sk.syspath));
        // assume that if we're changing syspath we want to force reimports.
        // not sure how valid this is, perhaps a separate api for that.
        Sk.realsyspath = undefined;
        Sk.sysmodules = new Sk.builtin.dict([]);
    }

    Sk.misceval.softspace_ = false;

    Sk.switch_version("round$", Sk.__future__.dunder_round);
    Sk.switch_version("next$", Sk.__future__.dunder_next);

    Sk.builtin.lng.tp$name = Sk.__future__.no_long_type ? "int" : "long";
};

Sk.exportSymbol("Sk.configure", Sk.configure);

/*
* Replaceable handler for uncaught exceptions
*/
Sk.uncaughtException = function(err) {
    throw err;
};

/*
 * Replaceable handler for uncaught exceptions
 */
Sk.uncaughtException = function(err) {
    throw err;
};
Sk.exportSymbol("Sk.uncaughtException", Sk.uncaughtException);

/*
 *      Replaceable message for message timeouts
 */
Sk.timeoutMsg = function () {
    return "Program exceeded run time limit.";
};
Sk.exportSymbol("Sk.timeoutMsg", Sk.timeoutMsg);

/*
 *  Hard execution timeout, throws an error. Set to null to disable
 */
Sk.execLimit = Number.POSITIVE_INFINITY;

/*
 *  Soft execution timeout, returns a Suspension. Set to null to disable
 */
Sk.yieldLimit = Number.POSITIVE_INFINITY;

/*
 * Replacable output redirection (called from print, etc).
 */
Sk.output = function (x) {
};

/*
 * Replacable function to load modules with (called via import, etc.)
 * todo; this should be an async api
 */
Sk.read = function (x) {
    throw "Sk.read has not been implemented";
};

/*
 * Setable to emulate arguments to the script. Should be array of JS strings.
 */
Sk.sysargv = [];

// lame function for sys module
Sk.getSysArgv = function () {
    return Sk.sysargv;
};
Sk.exportSymbol("Sk.getSysArgv", Sk.getSysArgv);


/**
 * Setable to emulate PYTHONPATH environment variable (for finding modules).
 * Should be an array of JS strings.
 */
Sk.syspath = [];

Sk.inBrowser = Sk.global["document"] !== undefined;

/**
 * Internal function used for debug output.
 * @param {...} args
 */
Sk.debugout = function (args) {
};

(function () {
    // set up some sane defaults based on availability
    if (Sk.global["write"] !== undefined) {
        Sk.output = Sk.global["write"];
    } else if (Sk.global["console"] !== undefined && Sk.global["console"]["log"] !== undefined) {
        Sk.output = function (x) {
            Sk.global["console"]["log"](x);
        };
    } else if (Sk.global["print"] !== undefined) {
        Sk.output = Sk.global["print"];
    }
    if (Sk.global["console"] !== undefined && Sk.global["console"]["log"] !== undefined) {
        Sk.debugout = function (x) {
            Sk.global["console"]["log"](x);
        };
    } else if (Sk.global["print"] !== undefined) {
        Sk.debugout = Sk.global["print"];
    }
}());

Sk.inputfun = function (args) {
    return window.prompt(args);
};

// Information about method names and their internal functions for
// methods that differ (in visibility or name) between Python 2 and 3.
//
// Format:
//   internal function: {
//     "classes" : <array of affected classes>,
//     2 : <visible Python 2 method name> or null if none
//     3 : <visible Python 3 method name> or null if none
//   },
//   ...

Sk.setup_method_mappings = function () {
    return {
        "round$": {
            "classes": [Sk.builtin.float_,
                        Sk.builtin.int_,
                        Sk.builtin.nmber],
            2: null,
            3: "__round__"
        },
        "next$": {
            "classes": [Sk.builtin.dict_iter_,
                        Sk.builtin.list_iter_,
                        Sk.builtin.set_iter_,
                        Sk.builtin.str_iter_,
                        Sk.builtin.tuple_iter_,
                        Sk.builtin.generator,
                        Sk.builtin.enumerate,
                        Sk.builtin.iterator],
            2: "next",
            3: "__next__"
        }
    };
};

Sk.switch_version = function (method_to_map, python3) {
    var mapping, klass, classes, idx, len, newmeth, oldmeth, mappings;

    mappings = Sk.setup_method_mappings();

    mapping = mappings[method_to_map];

    if (python3) {
        newmeth = mapping[3];
        oldmeth = mapping[2];
    } else {
        newmeth = mapping[2];
        oldmeth = mapping[3];
    }

    classes = mapping["classes"];
    len = classes.length;
    for (idx = 0; idx < len; idx++) {
        klass = classes[idx];
        if (oldmeth && klass.prototype.hasOwnProperty(oldmeth)) {
            delete klass.prototype[oldmeth];
        }
        if (newmeth) {
            klass.prototype[newmeth] = new Sk.builtin.func(klass.prototype[method_to_map]);
        }
    }
};

Sk.exportSymbol("Sk.__future__", Sk.__future__);
Sk.exportSymbol("Sk.inputfun", Sk.inputfun);
if(Sk.builtin === undefined) {
    Sk.builtin = {};
}

/**
 * Maps Python dunder names to the Skulpt Javascript function names that
 * implement them.
 *
 * Note: __add__, __mul__, and __rmul__ can be used for either numeric or
 * sequence types. Here, they default to the numeric versions (i.e. nb$add,
 * nb$multiply, and nb$reflected_multiply). This works because Sk.abstr.binary_op_
 * checks for the numeric shortcuts and not the sequence shortcuts when computing
 * a binary operation.
 *
 * Because many of these functions are used in contexts in which Skulpt does not
 * [yet] handle suspensions, the assumption is that they must not suspend. However,
 * some of these built-in functions are acquiring 'canSuspend' arguments to signal
 * where this is not the case. These need to be spliced out of the argument list before
 * it is passed to python. Array values in this map contain [dunderName, argumentIdx],
 * where argumentIdx specifies the index of the 'canSuspend' boolean argument.
 *
 * @type {Object}
 */
Sk.dunderToSkulpt = {
    "__eq__": "ob$eq",
    "__ne__": "ob$ne",
    "__lt__": "ob$lt",
    "__le__": "ob$le",
    "__gt__": "ob$gt",
    "__ge__": "ob$ge",
    "__hash__": "tp$hash",
    "__abs__": "nb$abs",
    "__neg__": "nb$negative",
    "__pos__": "nb$positive",
    "__int__": "nb$int_",
    "__long__": "nb$lng",
    "__float__": "nb$float_",
    "__add__": "nb$add",
    "__radd__": "nb$reflected_add",
    "__sub__": "nb$subtract",
    "__rsub__": "nb$reflected_subtract",
    "__mul__": "nb$multiply",
    "__rmul__": "nb$reflected_multiply",
    "__div__": "nb$divide",
    "__rdiv__": "nb$reflected_divide",
    "__floordiv__": "nb$floor_divide",
    "__rfloordiv__": "nb$reflected_floor_divide",
    "__mod__": "nb$remainder",
    "__rmod__": "nb$reflected_remainder",
    "__divmod__": "nb$divmod",
    "__rdivmod__": "nb$reflected_divmod",
    "__pow__": "nb$power",
    "__rpow__": "nb$reflected_power",
    "__contains__": "sq$contains",
    "__len__": ["sq$length", 1],
    "__get__": ["tp$descr_get", 3],
    "__set__": ["tp$descr_set", 3]
};

/**
 *
 * @constructor
 *
 * @param {*} name name or object to get type of, if only one arg
 *
 * @param {Sk.builtin.tuple=} bases
 *
 * @param {Object=} dict
 *
 *
 * This type represents the type of `type'. *Calling* an instance of
 * this builtin type named "type" creates class objects. The resulting
 * class objects will have various tp$xyz attributes on them that allow
 * for the various operations on that object.
 *
 * calling the type or calling an instance of the type? or both?
 */
Sk.builtin.type = function (name, bases, dict) {
    var mro;
    var obj;
    var klass;
    var v;
    if (bases === undefined && dict === undefined) {
        // 1 arg version of type()
        // the argument is an object, not a name and returns a type object
        obj = name;
        return obj.ob$type;
    } else {

        // argument dict must be of type dict
        if(dict.tp$name !== "dict") {
            throw new Sk.builtin.TypeError("type() argument 3 must be dict, not " + Sk.abstr.typeName(dict));
        }

        // checks if name must be string
        if(!Sk.builtin.checkString(name)) {
            throw new Sk.builtin.TypeError("type() argument 1 must be str, not " + Sk.abstr.typeName(name));
        }

        // argument bases must be of type tuple
        if(bases.tp$name !== "tuple") {
            throw new Sk.builtin.TypeError("type() argument 2 must be tuple, not " + Sk.abstr.typeName(bases));
        }

        // type building version of type

        // dict is the result of running the classes code object
        // (basically the dict of functions). those become the prototype
        // object of the class).

        /**
        * The constructor is a stub, that gets called from object.__new__
        * @constructor
        */
        klass = function (args, kws) {
            var args_copy;

            // Call up through the chain in case there's a built-in object
            // whose constructor we need to initialise
            if (klass.prototype.tp$base !== undefined) {
                if (klass.prototype.tp$base.sk$klass) {
                    klass.prototype.tp$base.call(this, args, kws);
                } else {
                    // Call super constructor if subclass of a builtin
                    args_copy = args.slice();
                    args_copy.unshift(klass, this);
                    Sk.abstr.superConstructor.apply(undefined, args_copy);
                }
            }

            this["$d"] = new Sk.builtin.dict([]);
            this["$d"].mp$ass_subscript(new Sk.builtin.str("__dict__"), this["$d"]);
        };

        var _name = Sk.ffi.remapToJs(name); // unwrap name string to js for latter use

        var inheritsBuiltin = false;

        // Invoking the class object calls __new__() to generate a new instance,
        // then __init__() to initialise it
        klass.tp$call = function(args, kws) {
            var newf = Sk.builtin.type.typeLookup(klass, Sk.builtin.str.$new), newargs;
            var self;

            args = args || [];
            kws = kws || [];

            if (newf === undefined || newf === Sk.builtin.object.prototype["__new__"]) {
                // No override -> just call the constructor
                self = new klass(args, kws);
                newf = undefined;
            } else {
                newargs = args.slice();
                newargs.unshift(klass);
                self = Sk.misceval.applyOrSuspend(newf, undefined, undefined, kws, newargs);
            }

            return Sk.misceval.chain(self, function(s) {
                var init = Sk.builtin.type.typeLookup(s.ob$type, Sk.builtin.str.$init);

                self = s; // in case __new__ suspended

                if (init !== undefined) {
                    args.unshift(self);
                    return Sk.misceval.applyOrSuspend(init, undefined, undefined, kws, args);
                } else if (newf === undefined && (args.length !== 0 || kws.length !== 0) && !inheritsBuiltin) {
                    // We complain about spurious constructor arguments if neither __new__
                    // nor __init__ were overridden
                    throw new Sk.builtin.TypeError("__init__() got unexpected argument(s)");
                }
            }, function(r) {
                if (r !== Sk.builtin.none.none$ && r !== undefined) {
                    throw new Sk.builtin.TypeError("__init__() should return None, not " + Sk.abstr.typeName(r));
                } else {
                    return self;
                }
            });
        };

        if (bases.v.length === 0 && Sk.__future__.inherit_from_object) {
            // new style class, inherits from object by default
            bases.v.push(Sk.builtin.object);
            Sk.abstr.setUpInheritance(_name, klass, Sk.builtin.object);
        }

        var parent, it, firstAncestor, builtin_bases = [];
        // Set up inheritance from any builtins
        for (it = bases.tp$iter(), parent = it.tp$iternext(); parent !== undefined; parent = it.tp$iternext()) {
            if (firstAncestor === undefined) {
                firstAncestor = parent;
            }

            while (parent.sk$klass && parent.prototype.tp$base) {
                parent = parent.prototype.tp$base;
            }

            if (!parent.sk$klass && builtin_bases.indexOf(parent) < 0) {
                builtin_bases.push(parent);
                inheritsBuiltin = true;
            }
        }

        if (builtin_bases.length > 1) {
            throw new Sk.builtin.TypeError("Multiple inheritance with more than one builtin type is unsupported");
        }

        // Javascript does not support multiple inheritance, so only the first
        // base (if any) will directly inherit in Javascript
        if (firstAncestor !== undefined) {
            Sk.abstr.inherits(klass, firstAncestor);

            if (firstAncestor.prototype instanceof Sk.builtin.object || firstAncestor === Sk.builtin.object) {
                klass.prototype.tp$base = firstAncestor;
            }
        }

        klass.prototype.tp$name = _name;
        klass.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj(_name, klass);

        // set __module__ if not present (required by direct type(name, bases, dict) calls)
        var module_lk = new Sk.builtin.str("__module__");
        if(dict.mp$lookup(module_lk) === undefined) {
            dict.mp$ass_subscript(module_lk, Sk.globals["__name__"]);
        }

        // copy properties into our klass object
        // uses python iter methods
        var k;
        for (it = dict.tp$iter(), k = it.tp$iternext(); k !== undefined; k = it.tp$iternext()) {
            v = dict.mp$subscript(k);
            if (v === undefined) {
                v = null;
            }
            klass.prototype[k.v] = v;
            klass[k.v] = v;
        }

        klass["__class__"] = klass;
        klass["__name__"] = name;
        klass.sk$klass = true;
        klass.prototype["$r"] = function () {
            var cname;
            var mod;
            var reprf = this.tp$getattr(Sk.builtin.str.$repr);
            if (reprf !== undefined && reprf.im_func !== Sk.builtin.object.prototype["__repr__"]) {
                return Sk.misceval.apply(reprf, undefined, undefined, undefined, []);
            }

            if ((klass.prototype.tp$base !== undefined) &&
                (klass.prototype.tp$base !== Sk.builtin.object) &&
                (klass.prototype.tp$base.prototype["$r"] !== undefined)) {
                // If subclass of a builtin which is not object, use that class' repr
                return klass.prototype.tp$base.prototype["$r"].call(this);
            } else {
                // Else, use default repr for a user-defined class instance
                mod = dict.mp$subscript(module_lk); // lookup __module__
                cname = "";
                if (mod) {
                    cname = mod.v + ".";
                }
                return new Sk.builtin.str("<" + cname + _name + " object>");
            }
        };

        klass.prototype.tp$setattr = function(pyName, data, canSuspend) {
            var r, setf = Sk.builtin.object.prototype.GenericGetAttr.call(this, Sk.builtin.str.$setattr);
            if (setf !== undefined) {
                var f = /** @type {?} */ (setf);
                r = Sk.misceval.callsimOrSuspendArray(f, [pyName, data]);
                return canSuspend ? r : Sk.misceval.retryOptionalSuspensionOrThrow(r);
            }

            return Sk.builtin.object.prototype.GenericSetAttr.call(this, pyName, data, canSuspend);
        };

        klass.prototype.tp$getattr = function(pyName, canSuspend) {
            var r, descr, /** @type {(Object|undefined)} */ getf;
            // Find __getattribute__ on this type if we can
            descr = Sk.builtin.type.typeLookup(klass, Sk.builtin.str.$getattribute);

            if (descr !== undefined && descr !== null && descr.tp$descr_get !== undefined) {
                getf = descr.tp$descr_get.call(descr, this, klass);
            }

            if (getf === undefined) {
                getf = Sk.builtin.object.prototype.GenericPythonGetAttr.bind(null, this);
            }

            // Convert AttributeErrors back into 'undefined' returns to match the tp$getattr
            // convention
            r = Sk.misceval.tryCatch(function() {
                return Sk.misceval.callsimOrSuspendArray(/** @type {Object} */ (getf), [pyName]);
            }, function (e) {
                if (e instanceof Sk.builtin.AttributeError) {
                    return undefined;
                } else {
                    throw e;
                }
            });

            return canSuspend ? r : Sk.misceval.retryOptionalSuspensionOrThrow(r);
        };

        klass.prototype.tp$str = function () {
            var strf = this.tp$getattr(Sk.builtin.str.$str);
            if (strf !== undefined && strf.im_func !== Sk.builtin.object.prototype["__str__"]) {
                return Sk.misceval.apply(strf, undefined, undefined, undefined, []);
            }
            if ((klass.prototype.tp$base !== undefined) &&
                (klass.prototype.tp$base !== Sk.builtin.object) &&
                (klass.prototype.tp$base.prototype.tp$str !== undefined)) {
                // If subclass of a builtin which is not object, use that class' repr
                return klass.prototype.tp$base.prototype.tp$str.call(this);
            }
            return this["$r"]();
        };
        klass.prototype.tp$length = function (canSuspend) {
            var r = Sk.misceval.chain(Sk.abstr.gattr(this, Sk.builtin.str.$len, canSuspend), function(lenf) {
                return Sk.misceval.applyOrSuspend(lenf, undefined, undefined, undefined, []);
            });
            return canSuspend ? r : Sk.misceval.retryOptionalSuspensionOrThrow(r);
        };
        klass.prototype.tp$call = function (args, kw) {
            return Sk.misceval.chain(this.tp$getattr(Sk.builtin.str.$call, true), function(callf) {
                if (callf === undefined) {
                    throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(this) + "' object is not callable");
                }
                return Sk.misceval.applyOrSuspend(callf, undefined, undefined, kw, args);
            });
        };
        klass.prototype.tp$iter = function () {
            var iterf = this.tp$getattr(Sk.builtin.str.$iter);
            if (iterf === undefined) {
                throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(this) + "' object is not iterable");
            }
            return Sk.misceval.callsimArray(iterf);
        };
        klass.prototype.tp$iternext = function (canSuspend) {
            var self = this;
            var next;

            if (Sk.__future__.dunder_next) {
                next = Sk.builtin.str.$next3;
            } else {
                next = Sk.builtin.str.$next2;
            }
            var r = Sk.misceval.chain(self.tp$getattr(next, canSuspend), function(iternextf) {
                if (iternextf === undefined) {
                    throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(self) + "' object is not iterable");
                }

                return Sk.misceval.tryCatch(function() {
                    return Sk.misceval.callsimOrSuspendArray(iternextf);
                }, function(e) {
                    if (e instanceof Sk.builtin.StopIteration) {
                        return undefined;
                    } else {
                        throw e;
                    }
                });
            });

            return canSuspend ? r : Sk.misceval.retryOptionalSuspensionOrThrow(r);
        };

        klass.prototype.tp$getitem = function (key, canSuspend) {
            var getf = this.tp$getattr(Sk.builtin.str.$getitem, canSuspend), r;
            if (getf !== undefined) {
                r = Sk.misceval.applyOrSuspend(getf, undefined, undefined, undefined, [key]);
                return canSuspend ? r : Sk.misceval.retryOptionalSuspensionOrThrow(r);
            }
            throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(this) + "' object does not support indexing");
        };
        klass.prototype.tp$setitem = function (key, value, canSuspend) {
            var setf = this.tp$getattr(Sk.builtin.str.$setitem, canSuspend), r;
            if (setf !== undefined) {
                r = Sk.misceval.applyOrSuspend(setf, undefined, undefined, undefined, [key, value]);
                return canSuspend ? r : Sk.misceval.retryOptionalSuspensionOrThrow(r);
            }
            throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(this) + "' object does not support item assignment");
        };

        if (bases) {
            //print("building mro for", name);
            //for (var i = 0; i < bases.length; ++i)
            //print("base[" + i + "]=" + bases[i].tp$name);
            klass["$d"] = new Sk.builtin.dict([]);
            klass["$d"].mp$ass_subscript(Sk.builtin.type.basesStr_, bases);
            mro = Sk.builtin.type.buildMRO(klass);
            klass["$d"].mp$ass_subscript(Sk.builtin.type.mroStr_, mro);
            klass.tp$mro = mro;
            //print("mro result", Sk.builtin.repr(mro).v);
        }

        // fix for class attributes
        klass.tp$setattr = Sk.builtin.type.prototype.tp$setattr;

        var shortcutDunder = function (skulpt_name, magic_name, magic_func, canSuspendIdx) {
            klass.prototype[skulpt_name] = function () {
                var canSuspend = false;
                var len = arguments.length;
                var args, i, j;
                if ((canSuspendIdx !== null) && (canSuspendIdx <= len)) {
                    args = new Array(len);
                } else {
                    args = new Array(len+1);
                }

                args[0] = this;
                j = 1;
                for (i = 0; i < len; i++) {
                    if (i === (canSuspendIdx-1)) {
                        canSuspend = arguments[i];
                    } else {
                        args[j] = arguments[i];
                        j += 1;
                    }
                }

                if (canSuspend) {
                    return Sk.misceval.callsimOrSuspendArray(magic_func, args);
                } else {
                    return Sk.misceval.callsimArray(magic_func, args);
                }
            };
        };

        // Register skulpt shortcuts to magic methods defined by this class.
        // Dynamically deflined methods (eg those returned by __getattr__())
        // cannot be used by these magic functions; this is consistent with
        // how CPython handles "new-style" classes:
        // https://docs.python.org/2/reference/datamodel.html#special-method-lookup-for-old-style-classes
        var dunder, skulpt_name, canSuspendIdx;
        for (dunder in Sk.dunderToSkulpt) {
            skulpt_name = Sk.dunderToSkulpt[dunder];
            if (typeof(skulpt_name) === "string") {
                canSuspendIdx = null;
            } else {
                canSuspendIdx = skulpt_name[1];
                skulpt_name = skulpt_name[0];
            }

            if (klass[dunder]) {
                // scope workaround
                shortcutDunder(skulpt_name, dunder, klass[dunder], canSuspendIdx);
            }
        }

        return klass;
    }

};

/**
 *
 */
Sk.builtin.type.makeTypeObj = function (name, newedInstanceOfType) {
    Sk.builtin.type.makeIntoTypeObj(name, newedInstanceOfType);
    return newedInstanceOfType;
};

Sk.builtin.type.makeIntoTypeObj = function (name, t) {
    Sk.asserts.assert(name !== undefined);
    Sk.asserts.assert(t !== undefined);
    t.ob$type = Sk.builtin.type;
    t.tp$name = name;
    t["$r"] = function () {
        var ctype;
        var mod = t.__module__;
        var cname = "";
        if (mod) {
            cname = mod.v + ".";
        }
        ctype = "class";
        if (!mod && !t.sk$klass && !Sk.__future__.class_repr) {
            ctype = "type";
        }
        return new Sk.builtin.str("<" + ctype + " '" + cname + t.tp$name + "'>");
    };
    t.tp$str = undefined;
    t.tp$getattr = Sk.builtin.type.prototype.tp$getattr;
    t.tp$setattr = Sk.builtin.object.prototype.GenericSetAttr;
    t.tp$richcompare = Sk.builtin.type.prototype.tp$richcompare;
    t.sk$type = true;

    return t;
};

Sk.builtin.type.ob$type = Sk.builtin.type;
Sk.builtin.type.tp$name = "type";
Sk.builtin.type.sk$type = true;
Sk.builtin.type["$r"] = function () {
    if(Sk.__future__.class_repr) {
        return new Sk.builtin.str("<class 'type'>");
    } else {
        return new Sk.builtin.str("<type 'type'>");
    }
};

//Sk.builtin.type.prototype.tp$descr_get = function() { print("in type descr_get"); };

//Sk.builtin.type.prototype.tp$name = "type";

// basically the same as GenericGetAttr except looks in the proto instead
Sk.builtin.type.prototype.tp$getattr = function (pyName, canSuspend) {
    var res;
    var tp = this;
    var descr;
    var f;

    if (this["$d"]) {
        res = this["$d"].mp$lookup(pyName);
        if (res !== undefined) {
            return res;
        }
    }

    descr = Sk.builtin.type.typeLookup(tp, pyName);

    //print("type.tpgetattr descr", descr, descr.tp$name, descr.func_code, name);
    if (descr !== undefined && descr !== null && descr.ob$type !== undefined) {
        f = descr.tp$descr_get;
        // todo;if (f && descr.tp$descr_set) // is a data descriptor if it has a set
        // return f.call(descr, this, this.ob$type);
    }

    if (f) {
        // non-data descriptor
        return f.call(descr, Sk.builtin.none.none$, tp, canSuspend);
    }

    if (descr !== undefined) {
        return descr;
    }

    return undefined;
};

Sk.builtin.type.prototype.tp$setattr = function (pyName, value) {
    // class attributes are direct properties of the object
    var jsName = pyName.$jsstr();
    this[jsName] = value;
};

Sk.builtin.type.typeLookup = function (type, pyName) {
    var mro = type.tp$mro;
    var base;
    var res;
    var i;
    var jsName = pyName.$jsstr();

    // todo; probably should fix this, used for builtin types to get stuff
    // from prototype
    if (!mro) {
        if (type.prototype) {
            return type.prototype[jsName];
        }
        return undefined;
    }

    for (i = 0; i < mro.v.length; ++i) {
        base = mro.v[i];
        if (base.hasOwnProperty(jsName)) {
            return base[jsName];
        }
        res = base["$d"].mp$lookup(pyName);
        if (res !== undefined) {
            return res;
        }
        if (base.prototype && base.prototype[jsName] !== undefined) {
            return base.prototype[jsName];
        }
    }

    return undefined;
};

Sk.builtin.type.mroMerge_ = function (seqs) {
    /*
     var tmp = [];
     for (var i = 0; i < seqs.length; ++i)
     {
     tmp.push(new Sk.builtin.list(seqs[i]));
     }
     print(Sk.builtin.repr(new Sk.builtin.list(tmp)).v);
     */
    var seq;
    var i;
    var next;
    var k;
    var sseq;
    var j;
    var cand;
    var cands;
    var res = [];
    for (; ;) {
        for (i = 0; i < seqs.length; ++i) {
            seq = seqs[i];
            if (seq.length !== 0) {
                break;
            }
        }
        if (i === seqs.length) { // all empty
            return res;
        }
        cands = [];
        for (i = 0; i < seqs.length; ++i) {
            seq = seqs[i];
            //print("XXX", Sk.builtin.repr(new Sk.builtin.list(seq)).v);
            if (seq.length !== 0) {
                cand = seq[0];
                //print("CAND", Sk.builtin.repr(cand).v);
                OUTER:
                    for (j = 0; j < seqs.length; ++j) {
                        sseq = seqs[j];
                        for (k = 1; k < sseq.length; ++k) {
                            if (sseq[k] === cand) {
                                break OUTER;
                            }
                        }
                    }

                // cand is not in any sequences' tail -> constraint-free
                if (j === seqs.length) {
                    cands.push(cand);
                }
            }
        }

        if (cands.length === 0) {
            throw new Sk.builtin.TypeError("Inconsistent precedences in type hierarchy");
        }

        next = cands[0];
        // append next to result and remove from sequences
        res.push(next);
        for (i = 0; i < seqs.length; ++i) {
            seq = seqs[i];
            if (seq.length > 0 && seq[0] === next) {
                seq.splice(0, 1);
            }
        }
    }
};

Sk.builtin.type.buildMRO_ = function (klass) {
    // MERGE(klass + mro(bases) + bases)
    var i;
    var bases;
    var all = [
        [klass]
    ];

    //Sk.debugout("buildMRO for", klass.tp$name);

    var kbases = klass["$d"].mp$subscript(Sk.builtin.type.basesStr_);
    for (i = 0; i < kbases.v.length; ++i) {
        all.push(Sk.builtin.type.buildMRO_(kbases.v[i]));
    }

    bases = [];
    for (i = 0; i < kbases.v.length; ++i) {
        bases.push(kbases.v[i]);
    }
    all.push(bases);

    return Sk.builtin.type.mroMerge_(all);
};

/*
 * C3 MRO (aka CPL) linearization. Figures out which order to search through
 * base classes to determine what should override what. C3 does the "right
 * thing", and it's what Python has used since 2.3.
 *
 * Kind of complicated to explain, but not really that complicated in
 * implementation. Explanations:
 *
 * http://people.csail.mit.edu/jrb/goo/manual.43/goomanual_55.html
 * http://www.python.org/download/releases/2.3/mro/
 * http://192.220.96.201/dylan/linearization-oopsla96.html
 *
 * This implementation is based on a post by Samuele Pedroni on python-dev
 * (http://mail.python.org/pipermail/python-dev/2002-October/029176.html) when
 * discussing its addition to Python.
 */
Sk.builtin.type.buildMRO = function (klass) {
    return new Sk.builtin.tuple(Sk.builtin.type.buildMRO_(klass));
};

Sk.builtin.type.prototype.tp$richcompare = function (other, op) {
    var r2;
    var r1;
    if (other.ob$type != Sk.builtin.type) {
        return undefined;
    }
    if (!this["$r"] || !other["$r"]) {
        return undefined;
    }

    r1 = this["$r"]();
    r2 = other["$r"]();

    return r1.tp$richcompare(r2, op);
};

Sk.builtin.type.prototype["__format__"] = function(self, format_spec) {
    Sk.builtin.pyCheckArgsLen("__format__", arguments.length, 1, 2);
    return new Sk.builtin.str(self);
};

Sk.builtin.type.pythonFunctions = ["__format__"];
/**
 * @namespace Sk.abstr
 *
 */
Sk.abstr = {};

//
// Number
//

Sk.abstr.typeName = function (v) {
    var vtypename;
    if (v.tp$name !== undefined) {
        vtypename = v.tp$name;
    } else {
        vtypename = "<invalid type>";
    }
    return vtypename;
};

Sk.abstr.binop_type_error = function (v, w, name) {
    var vtypename = Sk.abstr.typeName(v),
        wtypename = Sk.abstr.typeName(w);

    throw new Sk.builtin.TypeError("unsupported operand type(s) for " + name + ": '" + vtypename + "' and '" + wtypename + "'");
};

Sk.abstr.unop_type_error = function (v, name) {
    var vtypename = Sk.abstr.typeName(v),
        uop = {
            "UAdd"  : "+",
            "USub"  : "-",
            "Invert": "~"
        }[name];

    throw new Sk.builtin.TypeError("bad operand type for unary " + uop + ": '" + vtypename + "'");
};

/**
 * lookup and return the LHS object slot function method.  This coudl be either a builtin slot function or a dunder method defined by the user.
 * @param obj
 * @param name
 * @returns {Object|null|undefined}
 * @private
 */
Sk.abstr.boNameToSlotFuncLhs_ = function (obj, name) {
    if (obj === null) {
        return undefined;
    }

    switch (name) {
    case "Add":
        return obj.nb$add ? obj.nb$add : obj["__add__"];
    case "Sub":
        return obj.nb$subtract ? obj.nb$subtract : obj["__sub__"];
    case "Mult":
        return obj.nb$multiply ? obj.nb$multiply : obj["__mul__"];
    case "Div":
        return obj.nb$divide ? obj.nb$divide : obj["__div__"];
    case "FloorDiv":
        return obj.nb$floor_divide ? obj.nb$floor_divide : obj["__floordiv__"];
    case "Mod":
        return obj.nb$remainder ? obj.nb$remainder : obj["__mod__"];
    case "DivMod":
        return obj.nb$divmod ? obj.nb$divmod : obj["__divmod__"];
    case "Pow":
        return obj.nb$power ? obj.nb$power : obj["__pow__"];
    case "LShift":
        return obj.nb$lshift ? obj.nb$lshift : obj["__lshift__"];
    case "RShift":
        return obj.nb$rshift ? obj.nb$rshift : obj["__rshift__"];
    case "BitAnd":
        return obj.nb$and ? obj.nb$and : obj["__and__"];
    case "BitXor":
        return obj.nb$xor ? obj.nb$xor : obj["__xor__"];
    case "BitOr":
        return obj.nb$or ? obj.nb$or : obj["__or__"];
    }
};

Sk.abstr.boNameToSlotFuncRhs_ = function (obj, name) {
    if (obj === null) {
        return undefined;
    }

    switch (name) {
    case "Add":
        return obj.nb$reflected_add ? obj.nb$reflected_add : obj["__radd__"];
    case "Sub":
        return obj.nb$reflected_subtract ? obj.nb$reflected_subtract : obj["__rsub__"];
    case "Mult":
        return obj.nb$reflected_multiply ? obj.nb$reflected_multiply : obj["__rmul__"];
    case "Div":
        return obj.nb$reflected_divide ? obj.nb$reflected_divide : obj["__rdiv__"];
    case "FloorDiv":
        return obj.nb$reflected_floor_divide ? obj.nb$reflected_floor_divide : obj["__rfloordiv__"];
    case "Mod":
        return obj.nb$reflected_remainder ? obj.nb$reflected_remainder : obj["__rmod__"];
    case "DivMod":
        return obj.nb$reflected_divmod ? obj.nb$reflected_divmod : obj["__rdivmod__"];
    case "Pow":
        return obj.nb$reflected_power ? obj.nb$reflected_power : obj["__rpow__"];
    case "LShift":
        return obj.nb$reflected_lshift ? obj.nb$reflected_lshift : obj["__rlshift__"];
    case "RShift":
        return obj.nb$reflected_rshift ? obj.nb$reflected_rshift : obj["__rrshift__"];
    case "BitAnd":
        return obj.nb$reflected_and ? obj.nb$reflected_and : obj["__rand__"];
    case "BitXor":
        return obj.nb$reflected_xor ? obj.nb$reflected_xor : obj["__rxor__"];
    case "BitOr":
        return obj.nb$reflected_or ? obj.nb$reflected_or : obj["__ror__"];
    }
};

Sk.abstr.iboNameToSlotFunc_ = function (obj, name) {
    switch (name) {
    case "Add":
        return obj.nb$inplace_add ? obj.nb$inplace_add : obj["__iadd__"];
    case "Sub":
        return obj.nb$inplace_subtract ? obj.nb$inplace_subtract : obj["__isub__"];
    case "Mult":
        return obj.nb$inplace_multiply ? obj.nb$inplace_multiply : obj["__imul__"];
    case "Div":
        return obj.nb$inplace_divide ? obj.nb$inplace_divide : obj["__idiv__"];
    case "FloorDiv":
        return obj.nb$inplace_floor_divide ? obj.nb$inplace_floor_divide : obj["__ifloordiv__"];
    case "Mod":
        return obj.nb$inplace_remainder;
    case "Pow":
        return obj.nb$inplace_power;
    case "LShift":
        return obj.nb$inplace_lshift ? obj.nb$inplace_lshift : obj["__ilshift__"];
    case "RShift":
        return obj.nb$inplace_rshift ? obj.nb$inplace_rshift : obj["__irshift__"];
    case "BitAnd":
        return obj.nb$inplace_and;
    case "BitOr":
        return obj.nb$inplace_or;
    case "BitXor":
        return obj.nb$inplace_xor ? obj.nb$inplace_xor : obj["__ixor__"];
    }
};
Sk.abstr.uoNameToSlotFunc_ = function (obj, name) {
    if (obj === null) {
        return undefined;
    }
    switch (name) {
    case "USub":
        return obj.nb$negative ? obj.nb$negative : obj["__neg__"];
    case "UAdd":
        return obj.nb$positive ? obj.nb$positive : obj["__pos__"];
    case "Invert":
        return obj.nb$invert ? obj.nb$invert : obj["__invert__"];
    }
};

Sk.abstr.binary_op_ = function (v, w, opname) {
    var wop;
    var ret;
    var vop;

    // All Python inheritance is now enforced with Javascript inheritance
    // (see Sk.abstr.setUpInheritance). This checks if w's type is a strict
    // subclass of v's type
    var w_is_subclass = w.constructor.prototype instanceof v.constructor;

    // From the Python 2.7 docs:
    //
    // "If the right operand’s type is a subclass of the left operand’s type and
    // that subclass provides the reflected method for the operation, this
    // method will be called before the left operand’s non-reflected method.
    // This behavior allows subclasses to override their ancestors’ operations."
    //
    // -- https://docs.python.org/2/reference/datamodel.html#index-92

    if (w_is_subclass) {
        wop = Sk.abstr.boNameToSlotFuncRhs_(w, opname);
        if (wop !== undefined) {
            if (wop.call) {
                ret = wop.call(w, v);
            } else {
                ret = Sk.misceval.callsimArray(wop, [w, v]);
            }
            if (ret !== undefined && ret !== Sk.builtin.NotImplemented.NotImplemented$) {
                return ret;
            }
        }
    }

    vop = Sk.abstr.boNameToSlotFuncLhs_(v, opname);
    if (vop !== undefined) {
        if (vop.call) {
            ret = vop.call(v, w);
        } else {
            ret = Sk.misceval.callsimArray(vop, [v, w]);
        }
        if (ret !== undefined && ret !== Sk.builtin.NotImplemented.NotImplemented$) {
            return ret;
        }
    }
    // Don't retry RHS if failed above
    if (!w_is_subclass) {
        wop = Sk.abstr.boNameToSlotFuncRhs_(w, opname);
        if (wop !== undefined) {
            if (wop.call) {
                ret = wop.call(w, v);
            } else {
                ret = Sk.misceval.callsimArray(wop, [w, v]);
            }
            if (ret !== undefined && ret !== Sk.builtin.NotImplemented.NotImplemented$) {
                return ret;
            }
        }
    }
    Sk.abstr.binop_type_error(v, w, opname);
};

Sk.abstr.binary_iop_ = function (v, w, opname) {
    var wop;
    var ret;
    var vop = Sk.abstr.iboNameToSlotFunc_(v, opname);
    if (vop !== undefined) {
        if (vop.call) {
            ret = vop.call(v, w);
        } else {  // assume that vop is an __xxx__ type method
            ret = Sk.misceval.callsimArray(vop, [v, w]);
        }
        if (ret !== undefined && ret !== Sk.builtin.NotImplemented.NotImplemented$) {
            return ret;
        }
    }
    // If there wasn't an in-place operation, fall back to the binop
    return Sk.abstr.binary_op_(v, w, opname);
};
Sk.abstr.unary_op_ = function (v, opname) {
    var ret;
    var vop = Sk.abstr.uoNameToSlotFunc_(v, opname);
    if (vop !== undefined) {
        if (vop.call) {
            ret = vop.call(v);
        } else {  // assume that vop is an __xxx__ type method
            ret = Sk.misceval.callsimArray(vop, [v]); //  added to be like not-in-place... is this okay?
        }
        if (ret !== undefined) {
            return ret;
        }
    }
    Sk.abstr.unop_type_error(v, opname);
};

//
// handle upconverting a/b from number to long if op causes too big/small a
// result, or if either of the ops are already longs
Sk.abstr.numOpAndPromote = function (a, b, opfn) {
    var tmp;
    var ans;
    if (a === null || b === null) {
        return undefined;
    }

    if (typeof a === "number" && typeof b === "number") {
        ans = opfn(a, b);
        // todo; handle float   Removed RNL (bugs in lng, and it should be a question of precision, not magnitude -- this was just wrong)
        if ((ans > Sk.builtin.int_.threshold$ || ans < -Sk.builtin.int_.threshold$) && Math.floor(ans) === ans) {
            return [Sk.builtin.lng.fromInt$(a), Sk.builtin.lng.fromInt$(b)];
        } else {
            return ans;
        }
    } else if (a === undefined || b === undefined) {
        throw new Sk.builtin.NameError("Undefined variable in expression");
    }

    if (a.constructor === Sk.builtin.lng) {
        return [a, b];
    } else if ((a.constructor === Sk.builtin.int_ ||
                a.constructor === Sk.builtin.float_) &&
                b.constructor === Sk.builtin.complex) {
        // special case of upconverting nmber and complex
        // can we use here the Sk.builtin.checkComplex() method?
        tmp = new Sk.builtin.complex(a);
        return [tmp, b];
    } else if (a.constructor === Sk.builtin.int_ ||
               a.constructor === Sk.builtin.float_) {
        return [a, b];
    } else if (typeof a === "number") {
        tmp = Sk.builtin.assk$(a);
        return [tmp, b];
    } else {
        return undefined;
    }
};

Sk.abstr.boNumPromote_ = {
    "Add"     : function (a, b) {
        return a + b;
    },
    "Sub"     : function (a, b) {
        return a - b;
    },
    "Mult"    : function (a, b) {
        return a * b;
    },
    "Mod"     : function (a, b) {
        var m;
        if (b === 0) {
            throw new Sk.builtin.ZeroDivisionError("division or modulo by zero");
        }
        m = a % b;
        return ((m * b) < 0 ? (m + b) : m);
    },
    "Div"     : function (a, b) {
        if (b === 0) {
            throw new Sk.builtin.ZeroDivisionError("division or modulo by zero");
        } else {
            return a / b;
        }
    },
    "FloorDiv": function (a, b) {
        if (b === 0) {
            throw new Sk.builtin.ZeroDivisionError("division or modulo by zero");
        } else {
            return Math.floor(a / b);
        } // todo; wrong? neg?
    },
    "Pow"     : Math.pow,
    "BitAnd"  : function (a, b) {
        var m = a & b;
        if (m < 0) {
            m = m + 4294967296; // convert back to unsigned
        }
        return m;
    },
    "BitOr"   : function (a, b) {
        var m = a | b;
        if (m < 0) {
            m = m + 4294967296; // convert back to unsigned
        }
        return m;
    },
    "BitXor"  : function (a, b) {
        var m = a ^ b;
        if (m < 0) {
            m = m + 4294967296; // convert back to unsigned
        }
        return m;
    },
    "LShift"  : function (a, b) {
        var m;
        if (b < 0) {
            throw new Sk.builtin.ValueError("negative shift count");
        }
        m = a << b;
        if (m > a) {
            return m;
        } else {
            // Fail, this will get recomputed with longs
            return a * Math.pow(2, b);
        }
    },
    "RShift"  : function (a, b) {
        var m;
        if (b < 0) {
            throw new Sk.builtin.ValueError("negative shift count");
        }
        m = a >> b;
        if ((a > 0) && (m < 0)) {
            // fix incorrect sign extension
            m = m & (Math.pow(2, 32 - b) - 1);
        }
        return m;
    }
};

Sk.abstr.numberBinOp = function (v, w, op) {
    var tmp;
    var numPromoteFunc = Sk.abstr.boNumPromote_[op];
    if (numPromoteFunc !== undefined) {
        tmp = Sk.abstr.numOpAndPromote(v, w, numPromoteFunc);
        if (typeof tmp === "number") {
            return tmp;
        } else if (tmp !== undefined && tmp.constructor === Sk.builtin.int_) {
            return tmp;
        } else if (tmp !== undefined && tmp.constructor === Sk.builtin.float_) {
            return tmp;
        } else if (tmp !== undefined && tmp.constructor === Sk.builtin.lng) {
            return tmp;
        } else if (tmp !== undefined) {
            v = tmp[0];
            w = tmp[1];
        }
    }

    return Sk.abstr.binary_op_(v, w, op);
};
Sk.exportSymbol("Sk.abstr.numberBinOp", Sk.abstr.numberBinOp);

Sk.abstr.numberInplaceBinOp = function (v, w, op) {
    var tmp;
    var numPromoteFunc = Sk.abstr.boNumPromote_[op];
    if (numPromoteFunc !== undefined) {
        tmp = Sk.abstr.numOpAndPromote(v, w, numPromoteFunc);
        if (typeof tmp === "number") {
            return tmp;
        } else if (tmp !== undefined && tmp.constructor === Sk.builtin.int_) {
            return tmp;
        } else if (tmp !== undefined && tmp.constructor === Sk.builtin.float_) {
            return tmp;
        } else if (tmp !== undefined && tmp.constructor === Sk.builtin.lng) {
            return tmp;
        } else if (tmp !== undefined) {
            v = tmp[0];
            w = tmp[1];
        }
    }

    return Sk.abstr.binary_iop_(v, w, op);
};
Sk.exportSymbol("Sk.abstr.numberInplaceBinOp", Sk.abstr.numberInplaceBinOp);

Sk.abstr.numberUnaryOp = function (v, op) {
    var value;
    if (op === "Not") {
        return Sk.misceval.isTrue(v) ? Sk.builtin.bool.false$ : Sk.builtin.bool.true$;
    } else if (v instanceof Sk.builtin.bool) {
        value = Sk.builtin.asnum$(v);
        if (op === "USub") {
            return new Sk.builtin.int_(-value);
        }
        if (op === "UAdd") {
            return new Sk.builtin.int_(value);
        }
        if (op === "Invert") {
            return new Sk.builtin.int_(~value);
        }
    } else {
        if (op === "USub" && v.nb$negative) {
            return v.nb$negative();
        }
        if (op === "UAdd" && v.nb$positive) {
            return v.nb$positive();
        }
        if (op === "Invert" && v.nb$invert) {
            return v.nb$invert();
        }
    }

    return Sk.abstr.unary_op_(v, op);
};
Sk.exportSymbol("Sk.abstr.numberUnaryOp", Sk.abstr.numberUnaryOp);

//
// Sequence
//

Sk.abstr.fixSeqIndex_ = function (seq, i) {
    i = Sk.builtin.asnum$(i);
    if (i < 0 && seq.sq$length) {
        i += seq.sq$length();
    }
    return i;
};

/**
 * @param {*} seq
 * @param {*} ob
 * @param {boolean=} canSuspend
 */
Sk.abstr.sequenceContains = function (seq, ob, canSuspend) {
    var seqtypename;
    var special;
    var r;

    if (seq.sq$contains) {
        return seq.sq$contains(ob);
    }

    /**
     *  Look for special method and call it, we have to distinguish between built-ins and
     *  python objects
     */
    special = Sk.abstr.lookupSpecial(seq, Sk.builtin.str.$contains);
    if (special != null) {
        // method on builtin, provide this arg
        return Sk.misceval.isTrue(Sk.misceval.callsimArray(special, [seq, ob]));
    }

    if (!Sk.builtin.checkIterable(seq)) {
        seqtypename = Sk.abstr.typeName(seq);
        throw new Sk.builtin.TypeError("argument of type '" + seqtypename + "' is not iterable");
    }

    r = Sk.misceval.iterFor(Sk.abstr.iter(seq), function(i) {
        if (Sk.misceval.richCompareBool(i, ob, "Eq")) {
            return new Sk.misceval.Break(true);
        } else {
            return false;
        }
    }, false);

    return canSuspend ? r : Sk.misceval.retryOptionalSuspensionOrThrow(r);
};

Sk.abstr.sequenceConcat = function (seq1, seq2) {
    var seq1typename;
    if (seq1.sq$concat) {
        return seq1.sq$concat(seq2);
    }
    seq1typename = Sk.abstr.typeName(seq1);
    throw new Sk.builtin.TypeError("'" + seq1typename + "' object can't be concatenated");
};

Sk.abstr.sequenceGetIndexOf = function (seq, ob) {
    var seqtypename;
    var i, it;
    var index;
    if (seq.index) {
        return Sk.misceval.callsimArray(seq.index, [seq, ob]);
    }
    if (Sk.builtin.checkIterable(seq)) {
        index = 0;
        for (it = Sk.abstr.iter(seq), i = it.tp$iternext();
             i !== undefined; i = it.tp$iternext()) {
            if (Sk.misceval.richCompareBool(ob, i, "Eq")) {
                return new Sk.builtin.int_(index);
            }
            index += 1;
        }
        throw new Sk.builtin.ValueError("sequence.index(x): x not in sequence");
    }

    seqtypename = Sk.abstr.typeName(seq);
    throw new Sk.builtin.TypeError("argument of type '" + seqtypename + "' is not iterable");
};

Sk.abstr.sequenceGetCountOf = function (seq, ob) {
    var seqtypename;
    var i, it;
    var count;
    if (seq.count) {
        return Sk.misceval.callsimArray(seq.count, [seq, ob]);
    }
    if (Sk.builtin.checkIterable(seq)) {
        count = 0;
        for (it = Sk.abstr.iter(seq), i = it.tp$iternext();
             i !== undefined; i = it.tp$iternext()) {
            if (Sk.misceval.richCompareBool(ob, i, "Eq")) {
                count += 1;
            }
        }
        return new Sk.builtin.int_(count);
    }

    seqtypename = Sk.abstr.typeName(seq);
    throw new Sk.builtin.TypeError("argument of type '" + seqtypename + "' is not iterable");
};

Sk.abstr.sequenceGetItem = function (seq, i, canSuspend) {
    var seqtypename;
    if (seq.mp$subscript) {
        return seq.mp$subscript(i);
    }

    seqtypename = Sk.abstr.typeName(seq);
    throw new Sk.builtin.TypeError("'" + seqtypename + "' object is unsubscriptable");
};

Sk.abstr.sequenceSetItem = function (seq, i, x, canSuspend) {
    var seqtypename;
    if (seq.mp$ass_subscript) {
        return seq.mp$ass_subscript(i, x);
    }

    seqtypename = Sk.abstr.typeName(seq);
    throw new Sk.builtin.TypeError("'" + seqtypename + "' object does not support item assignment");
};

Sk.abstr.sequenceDelItem = function (seq, i) {
    var seqtypename;
    if (seq.sq$del_item) {
        i = Sk.abstr.fixSeqIndex_(seq, i);
        seq.sq$del_item(i);
        return;
    }

    seqtypename = Sk.abstr.typeName(seq);
    throw new Sk.builtin.TypeError("'" + seqtypename + "' object does not support item deletion");
};

Sk.abstr.sequenceRepeat = function (f, seq, n) {
    var ntypename;
    var count;
    n = Sk.builtin.asnum$(n);
    count = Sk.misceval.asIndex(n);
    if (count === undefined) {
        ntypename = Sk.abstr.typeName(n);
        throw new Sk.builtin.TypeError("can't multiply sequence by non-int of type '" + ntypename + "'");
    }
    return f.call(seq, n);
};

Sk.abstr.sequenceGetSlice = function (seq, i1, i2) {
    var seqtypename;
    if (seq.sq$slice) {
        i1 = Sk.abstr.fixSeqIndex_(seq, i1);
        i2 = Sk.abstr.fixSeqIndex_(seq, i2);
        return seq.sq$slice(i1, i2);
    } else if (seq.mp$subscript) {
        return seq.mp$subscript(new Sk.builtin.slice(i1, i2));
    }

    seqtypename = Sk.abstr.typeName(seq);
    throw new Sk.builtin.TypeError("'" + seqtypename + "' object is unsliceable");
};

Sk.abstr.sequenceDelSlice = function (seq, i1, i2) {
    var seqtypename;
    if (seq.sq$del_slice) {
        i1 = Sk.abstr.fixSeqIndex_(seq, i1);
        i2 = Sk.abstr.fixSeqIndex_(seq, i2);
        seq.sq$del_slice(i1, i2);
        return;
    }

    seqtypename = Sk.abstr.typeName(seq);
    throw new Sk.builtin.TypeError("'" + seqtypename + "' doesn't support slice deletion");
};

Sk.abstr.sequenceSetSlice = function (seq, i1, i2, x) {
    var seqtypename;
    if (seq.sq$ass_slice) {
        i1 = Sk.abstr.fixSeqIndex_(seq, i1);
        i2 = Sk.abstr.fixSeqIndex_(seq, i2);
        seq.sq$ass_slice(i1, i2, x);
    } else if (seq.mp$ass_subscript) {
        seq.mp$ass_subscript(new Sk.builtin.slice(i1, i2), x);
    } else {
        seqtypename = Sk.abstr.typeName(seq);
        throw new Sk.builtin.TypeError("'" + seqtypename + "' object doesn't support slice assignment");
    }
};

// seq - Python object to unpack
// n   - JavaScript number of items to unpack
Sk.abstr.sequenceUnpack = function (seq, n) {
    var res = [];
    var it, i;

    if (!Sk.builtin.checkIterable(seq)) {
        throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(seq) + "' object is not iterable");
    }

    for (it = Sk.abstr.iter(seq), i = it.tp$iternext();
         (i !== undefined) && (res.length < n);
         i = it.tp$iternext()) {
        res.push(i);
    }

    if (res.length < n) {
        throw new Sk.builtin.ValueError("need more than " + res.length + " values to unpack");
    }
    if (i !== undefined) {
        throw new Sk.builtin.ValueError("too many values to unpack");
    }

    // Return Javascript array of items
    return res;
};

//
// Object
//

Sk.abstr.objectFormat = function (obj, format_spec) {
    var meth; // PyObject
    var result; // PyObject

    // Find the (unbound!) __format__ method (a borrowed reference)
    meth = Sk.abstr.lookupSpecial(obj, Sk.builtin.str.$format);
    if (meth == null) {
        throw new Sk.builtin.TypeError("Type " + Sk.abstr.typeName(obj) + " doesn't define __format__");
    }

    // And call it
    result = Sk.misceval.callsimArray(meth, [obj, format_spec]);
    if (!Sk.builtin.checkString(result)) {
        throw new Sk.builtin.TypeError("__format__ must return a str, not " + Sk.abstr.typeName(result));
    }

    return result;
};

Sk.abstr.objectAdd = function (a, b) {
    var btypename;
    var atypename;
    if (a.nb$add) {
        return a.nb$add(b);
    }

    atypename = Sk.abstr.typeName(a);
    btypename = Sk.abstr.typeName(b);
    throw new Sk.builtin.TypeError("unsupported operand type(s) for +: '" + atypename + "' and '" + btypename + "'");
};

// in Python 2.6, this behaviour seems to be defined for numbers and bools (converts bool to int)
Sk.abstr.objectNegative = function (obj) {
    var objtypename;
    var obj_asnum = Sk.builtin.asnum$(obj); // this will also convert bool type to int

    if (obj instanceof Sk.builtin.bool) {
        obj = new Sk.builtin.int_(obj_asnum);
    }

    if (obj.nb$negative) {
        return obj.nb$negative();
    }

    objtypename = Sk.abstr.typeName(obj);
    throw new Sk.builtin.TypeError("bad operand type for unary -: '" + objtypename + "'");
};

// in Python 2.6, this behaviour seems to be defined for numbers and bools (converts bool to int)
Sk.abstr.objectPositive = function (obj) {
    var objtypename = Sk.abstr.typeName(obj);
    var obj_asnum = Sk.builtin.asnum$(obj); // this will also convert bool type to int

    if (obj instanceof Sk.builtin.bool) {
        obj = new Sk.builtin.int_(obj_asnum);
    }

    if (obj.nb$negative) {
        return obj.nb$positive();
    }

    throw new Sk.builtin.TypeError("bad operand type for unary +: '" + objtypename + "'");
};

Sk.abstr.objectDelItem = function (o, key) {
    var otypename;
    var keytypename;
    var keyValue;
    if (o !== null) {
        if (o.mp$del_subscript) {
            o.mp$del_subscript(key);
            return;
        }
        if (o.sq$ass_item) {
            keyValue = Sk.misceval.asIndex(key);
            if (keyValue === undefined) {
                keytypename = Sk.abstr.typeName(key);
                throw new Sk.builtin.TypeError("sequence index must be integer, not '" + keytypename + "'");
            }
            Sk.abstr.sequenceDelItem(o, keyValue);
            return;
        }
        // if o is a slice do something else...
    }

    otypename = Sk.abstr.typeName(o);
    throw new Sk.builtin.TypeError("'" + otypename + "' object does not support item deletion");
};
Sk.exportSymbol("Sk.abstr.objectDelItem", Sk.abstr.objectDelItem);

Sk.abstr.objectGetItem = function (o, key, canSuspend) {
    var otypename;
    if (o !== null) {
        if (o.tp$getitem) {
            return o.tp$getitem(key, canSuspend);
        } else if (o.mp$subscript) {
            return o.mp$subscript(key, canSuspend);
        } else if (Sk.misceval.isIndex(key) && o.sq$item) {
            return Sk.abstr.sequenceGetItem(o, Sk.misceval.asIndex(key), canSuspend);
        }
    }

    otypename = Sk.abstr.typeName(o);
    throw new Sk.builtin.TypeError("'" + otypename + "' does not support indexing");
};
Sk.exportSymbol("Sk.abstr.objectGetItem", Sk.abstr.objectGetItem);

Sk.abstr.objectSetItem = function (o, key, v, canSuspend) {
    var otypename;
    if (o !== null) {
        if (o.tp$setitem) {
            return o.tp$setitem(key, v, canSuspend);
        } else if (o.mp$ass_subscript) {
            return o.mp$ass_subscript(key, v, canSuspend);
        } else if (Sk.misceval.isIndex(key) && o.sq$ass_item) {
            return Sk.abstr.sequenceSetItem(o, Sk.misceval.asIndex(key), v, canSuspend);
        }
    }

    otypename = Sk.abstr.typeName(o);
    throw new Sk.builtin.TypeError("'" + otypename + "' does not support item assignment");
};
Sk.exportSymbol("Sk.abstr.objectSetItem", Sk.abstr.objectSetItem);


Sk.abstr.gattr = function (obj, pyName, canSuspend) {
    var ret, f;
    var objname = Sk.abstr.typeName(obj);
    var jsName = pyName.$jsstr();

    if (obj === null) {
        throw new Sk.builtin.AttributeError("'" + objname + "' object has no attribute '" + jsName + "'");
    }

    if (obj.tp$getattr !== undefined) {
        ret = obj.tp$getattr(pyName, canSuspend);
    }

    ret = Sk.misceval.chain(ret, function(r) {
        if (r === undefined) {
            throw new Sk.builtin.AttributeError("'" + objname + "' object has no attribute '" + jsName + "'");
        }
        return r;
    });

    return canSuspend ? ret : Sk.misceval.retryOptionalSuspensionOrThrow(ret);
};
Sk.exportSymbol("Sk.abstr.gattr", Sk.abstr.gattr);


Sk.abstr.sattr = function (obj, pyName, data, canSuspend) {
    var objname = Sk.abstr.typeName(obj), r, setf;
    var jsName = pyName.$jsstr();

    if (obj === null) {
        throw new Sk.builtin.AttributeError("'" + objname + "' object has no attribute '" + jsName + "'");
    }

    if (obj.tp$setattr !== undefined) {
        return obj.tp$setattr(pyName, data, canSuspend);
    } else {
        throw new Sk.builtin.AttributeError("'" + objname + "' object has no attribute '" + jsName + "'");
    }
};
Sk.exportSymbol("Sk.abstr.sattr", Sk.abstr.sattr);


Sk.abstr.iternext = function (it, canSuspend) {
    return it.tp$iternext(canSuspend);
};
Sk.exportSymbol("Sk.abstr.iternext", Sk.abstr.iternext);


/**
 * Get the iterator for a Python object  This iterator could be one of the following.
 * This is the preferred mechanism for consistently getting the correct iterator.  You should
 * not just use tp$iter because that could lead to incorrect behavior of a user created class.
 *
 * - tp$iter
 * - A user defined `__iter__` method
 * - A user defined `__getitem__` method
 *
 * @param obj
 *
 * @throws {Sk.builtin.TypeError}
 * @returns {Object}
 */

Sk.abstr.iter = function(obj) {
    var iter;
    var getit;
    var ret;

    /**
     * Builds an iterator around classes that have a __getitem__ method.
     *
     * @constructor
     */
    var seqIter = function (obj) {
        this.idx = 0;
        this.myobj = obj;
        this.getitem = Sk.abstr.lookupSpecial(obj, Sk.builtin.str.$getitem);
        this.tp$iternext = function () {
            var ret;
            try {
                ret = Sk.misceval.callsimArray(this.getitem, [this.myobj, Sk.ffi.remapToPy(this.idx)]);
            } catch (e) {
                if (e instanceof Sk.builtin.IndexError || e instanceof Sk.builtin.StopIteration) {
                    return undefined;
                } else {
                    throw e;
                }
            }
            this.idx++;
            return ret;
        };
    };

    if (obj.tp$getattr) {
        iter =  Sk.abstr.lookupSpecial(obj, Sk.builtin.str.$iter);
        if (iter) {
            ret = Sk.misceval.callsimArray(iter, [obj]);
            if (ret.tp$iternext) {
                return ret;
            }
        }
    }
    if (obj.tp$iter) {
        try {  // catch and ignore not iterable error here.
            ret = obj.tp$iter();
            if (ret.tp$iternext) {
                return ret;
            }
        } catch (e) { }
    }
    getit = Sk.abstr.lookupSpecial(obj, Sk.builtin.str.$getitem);
    if (getit) {
        // create internal iterobject if __getitem__
        return new seqIter(obj);
    }
    throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(obj) + "' object is not iterable");
};
Sk.exportSymbol("Sk.abstr.iter", Sk.abstr.iter);

/**
 * Special method look up. First try getting the method via
 * internal dict and getattr. If getattr is not present (builtins)
 * try if method is defined on the object itself
 *
 * @returns {null|Object} Return null if not found or the function
 */
Sk.abstr.lookupSpecial = function(op, pyName) {
    var res;
    var obtp;
    if (op.ob$type) {
        obtp = op.ob$type;
    } else {
        return null;
    }

    return Sk.builtin.type.typeLookup(obtp, pyName);
};
Sk.exportSymbol("Sk.abstr.lookupSpecial", Sk.abstr.lookupSpecial);

/**
 * Mark a class as unhashable and prevent its `__hash__` function from being called.
 * @param  {*} thisClass The class to mark as unhashable.
 * @return {undefined}
 */
Sk.abstr.markUnhashable = function (thisClass) {
    var proto = thisClass.prototype;
    proto.__hash__ = Sk.builtin.none.none$;
    proto.tp$hash = Sk.builtin.none.none$;
};

/**
 * Code taken from goog.inherits
 *
 * Newer versions of the closure library add a "base"attribute,
 * which we don't want/need.  So, this code is the remainder of
 * the goog.inherits function.
 */
Sk.abstr.inherits = function (childCtor, parentCtor) {
    /** @constructor */
    function tempCtor() {}
    tempCtor.prototype = parentCtor.prototype;
    childCtor.superClass_ = parentCtor.prototype;
    childCtor.prototype = new tempCtor();
    /** @override */
    childCtor.prototype.constructor = childCtor;
};

/**
 * Set up inheritance between two Python classes. This allows only for single
 * inheritance -- multiple inheritance is not supported by Javascript.
 *
 * Javascript's inheritance is prototypal. This means that properties must
 * be defined on the superclass' prototype in order for subclasses to inherit
 * them.
 *
 * ```
 * Sk.superclass.myProperty                 # will NOT be inherited
 * Sk.superclass.prototype.myProperty       # will be inherited
 * ```
 *
 * In order for a class to be subclassable, it must (directly or indirectly)
 * inherit from Sk.builtin.object so that it will be properly initialized in
 * {@link Sk.doOneTimeInitialization} (in src/import.js). Further, all Python
 * builtins should inherit from Sk.builtin.object.
 *
 * @param {string} childName The Python name of the child (subclass).
 * @param {*} child     The subclass.
 * @param {*} parent    The superclass.
 * @return {undefined}
 */
Sk.abstr.setUpInheritance = function (childName, child, parent) {
    Sk.abstr.inherits(child, parent);
    child.prototype.tp$base = parent;
    child.prototype.tp$name = childName;
    child.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj(childName, child);
};

/**
 * Call the super constructor of the provided class, with the object `self` as
 * the `this` value of that constructor. Any arguments passed to this function
 * after `self` will be passed as-is to the constructor.
 *
 * @param  {*} thisClass The subclass.
 * @param  {Object} self      The instance of the subclas.
 * @param  {...?} args Arguments to pass to the constructor.
 * @return {undefined}
 */
Sk.abstr.superConstructor = function (thisClass, self, args) {
    var argumentsForConstructor = Array.prototype.slice.call(arguments, 2);
    thisClass.prototype.tp$base.apply(self, argumentsForConstructor);
};
/**
 * @constructor
 * Sk.builtin.object
 *
 * @description
 * Constructor for Python object. All Python classes (builtin and user-defined)
 * should inherit from this class.
 *
 * @return {Sk.builtin.object} Python object
 */
Sk.builtin.object = function () {
    if (!(this instanceof Sk.builtin.object)) {
        return new Sk.builtin.object();
    }

    return this;
};

Sk.builtin.object.prototype.__init__ = function __init__() {
    return Sk.builtin.none.none$;
};
Sk.builtin.object.prototype.__init__.co_kwargs = 1;

Sk.builtin._tryGetSubscript = function(dict, pyName) {
    try {
        return dict.mp$subscript(pyName);
    } catch (x) {
        return undefined;
    }
};
Sk.exportSymbol("Sk.builtin._tryGetSubscript", Sk.builtin._tryGetSubscript);


/**
 * Get an attribute
 * @param {Object} pyName Python string name of the attribute
 * @param {boolean=} canSuspend Can we return a suspension?
 * @return {undefined}
 */
Sk.builtin.object.prototype.GenericGetAttr = function (pyName, canSuspend) {
    var res;
    var f;
    var descr;
    var tp;
    var dict;
    var getf;
    var jsName = pyName.$jsstr();

    tp = this.ob$type;
    Sk.asserts.assert(tp !== undefined, "object has no ob$type!");

    dict = this["$d"] || this.constructor["$d"];
    //print("getattr", tp.tp$name, name);

    // todo; assert? force?
    if (dict) {
        if (dict.mp$lookup) {
            res = dict.mp$lookup(pyName);
        } else if (dict.mp$subscript) {
            res = Sk.builtin._tryGetSubscript(dict, pyName);
        } else if (typeof dict === "object") {
            res = dict[jsName];
        }
        if (res !== undefined) {
            return res;
        }
    }

    descr = Sk.builtin.type.typeLookup(tp, pyName);

    // otherwise, look in the type for a descr
    if (descr !== undefined && descr !== null) {
        f = descr.tp$descr_get;
        // todo - data descriptors (ie those with tp$descr_set too) get a different lookup priority

        if (f) {
            // non-data descriptor
            return f.call(descr, this, this.ob$type, canSuspend);
        }
    }

    if (descr !== undefined) {
        return descr;
    }

    // OK, try __getattr__

    descr = Sk.builtin.type.typeLookup(tp, Sk.builtin.str.$getattr);
    if (descr !== undefined && descr !== null) {
        f = descr.tp$descr_get;
        if (f) {
            getf = f.call(descr, this, this.ob$type);
        } else {
            getf = descr;
        }

        res = Sk.misceval.tryCatch(function() {
            return Sk.misceval.callsimOrSuspendArray(getf, [pyName]);
        }, function(e) {
            if (e instanceof Sk.builtin.AttributeError) {
                return undefined;
            } else {
                throw e;
            }
        });
        return canSuspend ? res : Sk.misceval.retryOptionalSuspensionOrThrow(res);
    }


    return undefined;
};
Sk.exportSymbol("Sk.builtin.object.prototype.GenericGetAttr", Sk.builtin.object.prototype.GenericGetAttr);

Sk.builtin.object.prototype.GenericPythonGetAttr = function(self, pyName) {
    var r = Sk.builtin.object.prototype.GenericGetAttr.call(self, pyName, true);
    if (r === undefined) {
        throw new Sk.builtin.AttributeError(pyName);
    }
    return r;
};
Sk.exportSymbol("Sk.builtin.object.prototype.GenericPythonGetAttr", Sk.builtin.object.prototype.GenericPythonGetAttr);

/**
 * @param {Object} pyName
 * @param {Object} value
 * @param {boolean=} canSuspend
 * @return {undefined}
 */
Sk.builtin.object.prototype.GenericSetAttr = function (pyName, value, canSuspend) {
    var objname = Sk.abstr.typeName(this);
    var jsName = pyName.$jsstr();
    var dict;
    var tp = this.ob$type;
    var descr;
    var f;

    Sk.asserts.assert(tp !== undefined, "object has no ob$type!");

    dict = this["$d"] || this.constructor["$d"];

    if (jsName == "__class__") {
        if (value.tp$mro === undefined || value.tp$name === undefined ||
            value.tp$name === undefined) {
            throw new Sk.builtin.TypeError(
                      "attempted to assign non-class to __class__");
        }
        this.ob$type = value;
        this.tp$name = value.tp$name;
        return;
    }

    descr = Sk.builtin.type.typeLookup(tp, pyName);

    // otherwise, look in the type for a descr
    if (descr !== undefined && descr !== null) {
        f = descr.tp$descr_set;
        // todo; is this the right lookup priority for data descriptors?
        if (f) {
            return f.call(descr, this, value, canSuspend);
        }
    }

    if (dict.mp$ass_subscript) {
        if (this instanceof Sk.builtin.object && !(this.ob$type.sk$klass) &&
            dict.mp$lookup(pyName) === undefined) {
            // Cannot add new attributes to a builtin object
            throw new Sk.builtin.AttributeError("'" + objname + "' object has no attribute '" + Sk.unfixReserved(jsName) + "'");
        }
        dict.mp$ass_subscript(pyName, value);
    } else if (typeof dict === "object") {
        dict[jsName] = value;
    }
};
Sk.exportSymbol("Sk.builtin.object.prototype.GenericSetAttr", Sk.builtin.object.prototype.GenericSetAttr);

Sk.builtin.object.prototype.GenericPythonSetAttr = function(self, pyName, value) {
    return Sk.builtin.object.prototype.GenericSetAttr.call(self, pyName, value, true);
};
Sk.exportSymbol("Sk.builtin.object.prototype.GenericPythonSetAttr", Sk.builtin.object.prototype.GenericPythonSetAttr);

Sk.builtin.object.prototype.HashNotImplemented = function () {
    throw new Sk.builtin.TypeError("unhashable type: '" + Sk.abstr.typeName(this) + "'");
};

Sk.builtin.object.prototype.tp$getattr = Sk.builtin.object.prototype.GenericGetAttr;
Sk.builtin.object.prototype.tp$setattr = Sk.builtin.object.prototype.GenericSetAttr;

// Although actual attribute-getting happens in pure Javascript via tp$getattr, classes
// overriding __getattribute__ etc need to be able to call object.__getattribute__ etc from Python
Sk.builtin.object.prototype["__getattribute__"] = Sk.builtin.object.prototype.GenericPythonGetAttr;
Sk.builtin.object.prototype["__setattr__"] = Sk.builtin.object.prototype.GenericPythonSetAttr;

/**
 * The name of this class.
 * @type {string}
 */
Sk.builtin.object.prototype.tp$name = "object";

/**
 * The type object of this class.
 * @type {Sk.builtin.type|Object}
 */
Sk.builtin.object.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj("object", Sk.builtin.object);
Sk.builtin.object.prototype.ob$type.sk$klass = undefined;   // Nonsense for closure compiler
Sk.builtin.object.prototype.tp$descr_set = undefined;   // Nonsense for closure compiler

/** Default implementations of dunder methods found in all Python objects */
/**
 * Default implementation of __new__ just calls the class constructor
 * @name  __new__
 * @memberOf Sk.builtin.object.prototype
 * @instance
 */
Sk.builtin.object.prototype["__new__"] = function (cls) {
    Sk.builtin.pyCheckArgsLen("__new__", arguments.length, 1, 1, false, false);

    return new cls([], []);
};

/**
 * Python wrapper for `__repr__` method.
 * @name  __repr__
 * @memberOf Sk.builtin.object.prototype
 * @instance
 */
Sk.builtin.object.prototype["__repr__"] = function (self) {
    Sk.builtin.pyCheckArgsLen("__repr__", arguments.length, 0, 0, false, true);

    return self["$r"]();
};


Sk.builtin.object.prototype["__format__"] = function (self, format_spec) {
    var formatstr;
    Sk.builtin.pyCheckArgsLen("__format__", arguments.length, 2, 2);

    if (!Sk.builtin.checkString(format_spec)) {
        if (Sk.__future__.exceptions) {
            throw new Sk.builtin.TypeError("format() argument 2 must be str, not " + Sk.abstr.typeName(format_spec));
        } else {
            throw new Sk.builtin.TypeError("format expects arg 2 to be string or unicode, not " + Sk.abstr.typeName(format_spec));
        }
    } else {
        formatstr = Sk.ffi.remapToJs(format_spec);
        if (formatstr !== "") {
            throw new Sk.builtin.NotImplementedError("format spec is not yet implemented");
        }
    }

    return new Sk.builtin.str(self);
};


/**
 * Python wrapper for `__str__` method.
 * @name  __str__
 * @memberOf Sk.builtin.object.prototype
 * @instance
 */
Sk.builtin.object.prototype["__str__"] = function (self) {
    Sk.builtin.pyCheckArgsLen("__str__", arguments.length, 0, 0, false, true);

    return self["$r"]();
};

/**
 * Python wrapper for `__hash__` method.
 * @name  __hash__
 * @memberOf Sk.builtin.object.prototype
 * @instance
 */
Sk.builtin.object.prototype["__hash__"] = function (self) {
    Sk.builtin.pyCheckArgsLen("__hash__", arguments.length, 0, 0, false, true);

    return self.tp$hash();
};

/**
 * Python wrapper for `__eq__` method.
 * @name  __eq__
 * @memberOf Sk.builtin.object.prototype
 * @instance
 */
Sk.builtin.object.prototype["__eq__"] = function (self, other) {
    Sk.builtin.pyCheckArgsLen("__eq__", arguments.length, 1, 1, false, true);

    return self.ob$eq(other);
};

/**
 * Python wrapper for `__ne__` method.
 * @name  __ne__
 * @memberOf Sk.builtin.object.prototype
 * @instance
 */
Sk.builtin.object.prototype["__ne__"] = function (self, other) {
    Sk.builtin.pyCheckArgsLen("__ne__", arguments.length, 1, 1, false, true);

    return self.ob$ne(other);
};

/**
 * Python wrapper for `__lt__` method.
 * @name  __lt__
 * @memberOf Sk.builtin.object.prototype
 * @instance
 */
Sk.builtin.object.prototype["__lt__"] = function (self, other) {
    Sk.builtin.pyCheckArgsLen("__lt__", arguments.length, 1, 1, false, true);

    return self.ob$lt(other);
};

/**
 * Python wrapper for `__le__` method.
 * @name  __le__
 * @memberOf Sk.builtin.object.prototype
 * @instance
 */
Sk.builtin.object.prototype["__le__"] = function (self, other) {
    Sk.builtin.pyCheckArgsLen("__le__", arguments.length, 1, 1, false, true);

    return self.ob$le(other);
};

/**
 * Python wrapper for `__gt__` method.
 * @name  __gt__
 * @memberOf Sk.builtin.object.prototype
 * @instance
 */
Sk.builtin.object.prototype["__gt__"] = function (self, other) {
    Sk.builtin.pyCheckArgsLen("__gt__", arguments.length, 1, 1, false, true);

    return self.ob$gt(other);
};

/**
 * Python wrapper for `__ge__` method.
 * @name  __ge__
 * @memberOf Sk.builtin.object.prototype
 * @instance
 */
Sk.builtin.object.prototype["__ge__"] = function (self, other) {
    Sk.builtin.pyCheckArgsLen("__ge__", arguments.length, 1, 1, false, true);

    return self.ob$ge(other);
};

/** Default implementations of Javascript functions used in dunder methods */

/**
 * Return the string representation of this instance.
 *
 * Javascript function, returns Python object.
 *
 * @name  $r
 * @memberOf Sk.builtin.object.prototype
 * @return {Sk.builtin.str} The Python string representation of this instance.
 */
Sk.builtin.object.prototype["$r"] = function () {
    return new Sk.builtin.str("<object>");
};

Sk.builtin.hashCount = 1;
Sk.builtin.idCount = 1;

/**
 * Return the hash value of this instance.
 *
 * Javascript function, returns Python object.
 *
 * @return {Sk.builtin.int_} The hash value
 */
Sk.builtin.object.prototype.tp$hash = function () {
    if (!this.$savedHash_) {
        this.$savedHash_ = new Sk.builtin.int_(Sk.builtin.hashCount++);
    }

    return this.$savedHash_;
};

/**
 * Perform equality check between this instance and a Python object (i.e. this == other).
 *
 * Implements `__eq__` dunder method.
 *
 * Javascript function, returns Python object.
 *
 * @param  {Object} other The Python object to check for equality.
 * @return {(Sk.builtin.bool|Sk.builtin.NotImplemented)} true if equal, false otherwise
 */
Sk.builtin.object.prototype.ob$eq = function (other) {
    if (this === other) {
        return Sk.builtin.bool.true$;
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/**
 * Perform non-equality check between this instance and a Python object (i.e. this != other).
 *
 * Implements `__ne__` dunder method.
 *
 * Javascript function, returns Python object.
 *
 * @param  {Object} other The Python object to check for non-equality.
 * @return {(Sk.builtin.bool|Sk.builtin.NotImplemented)} true if not equal, false otherwise
 */
Sk.builtin.object.prototype.ob$ne = function (other) {
    if (this === other) {
        return Sk.builtin.bool.false$;
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/**
 * Determine if this instance is less than a Python object (i.e. this < other).
 *
 * Implements `__lt__` dunder method.
 *
 * Javascript function, returns Python object.
 *
 * @param  {Object} other The Python object to compare.
 * @return {(Sk.builtin.bool|Sk.builtin.NotImplemented)} true if this < other, false otherwise
 */
Sk.builtin.object.prototype.ob$lt = function (other) {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

/**
 * Determine if this instance is less than or equal to a Python object (i.e. this <= other).
 *
 * Implements `__le__` dunder method.
 *
 * Javascript function, returns Python object.
 *
 * @param  {Object} other The Python object to compare.
 * @return {(Sk.builtin.bool|Sk.builtin.NotImplemented)} true if this <= other, false otherwise
 */
Sk.builtin.object.prototype.ob$le = function (other) {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

/**
 * Determine if this instance is greater than a Python object (i.e. this > other).
 *
 * Implements `__gt__` dunder method.
 *
 * Javascript function, returns Python object.
 *
 * @param  {Object} other The Python object to compare.
 * @return {(Sk.builtin.bool|Sk.builtin.NotImplemented)} true if this > other, false otherwise
 */
Sk.builtin.object.prototype.ob$gt = function (other) {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

/**
 * Determine if this instance is greater than or equal to a Python object (i.e. this >= other).
 *
 * Implements `__ge__` dunder method.
 *
 * Javascript function, returns Python object.
 *
 * @param  {Object} other The Python object to compare.
 * @return {(Sk.builtin.bool|Sk.builtin.NotImplemented)} true if this >= other, false otherwise
 */
Sk.builtin.object.prototype.ob$ge = function (other) {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

// Wrap the following functions in Sk.builtin.func once that class is initialized
/**
 * Array of all the Python functions which are methods of this class.
 * @type {Array}
 */
Sk.builtin.object.pythonFunctions = ["__repr__", "__str__", "__hash__",
                                     "__eq__", "__ne__", "__lt__", "__le__",
                                     "__gt__", "__ge__", "__getattribute__",
                                     "__setattr__", "__format__"];

/**
 * @constructor
 * Sk.builtin.none
 *
 * @extends {Sk.builtin.object}
 */
Sk.builtin.none = function () {
    this.v = null;
};
Sk.abstr.setUpInheritance("NoneType", Sk.builtin.none, Sk.builtin.object);

/** @override */
Sk.builtin.none.prototype["$r"] = function () { return new Sk.builtin.str("None"); };

/** @override */
Sk.builtin.none.prototype.tp$hash = function () {
    return new Sk.builtin.int_(0);
};

/**
 * Python None constant.
 * @type {Sk.builtin.none}
 */
Sk.builtin.none.none$ = new Sk.builtin.none();

/**
 * @constructor
 * Sk.builtin.NotImplemented
 *
 * @extends {Sk.builtin.object}
 */
Sk.builtin.NotImplemented = function() { };
Sk.abstr.setUpInheritance("NotImplementedType", Sk.builtin.NotImplemented, Sk.builtin.object);

/** @override */
Sk.builtin.NotImplemented.prototype["$r"] = function () { return new Sk.builtin.str("NotImplemented"); };

/**
 * Python NotImplemented constant.
 * @type {Sk.builtin.NotImplemented}
 */
Sk.builtin.NotImplemented.NotImplemented$ = new Sk.builtin.NotImplemented();

Sk.exportSymbol("Sk.builtin.none", Sk.builtin.none);
Sk.exportSymbol("Sk.builtin.NotImplemented", Sk.builtin.NotImplemented);
/**
 * @namespace Sk.builtin
 */


/**
 * Check arguments to Python functions to ensure the correct number of
 * arguments are passed.
 *
 * @param {string} name the name of the function
 * @param {Object} args the args passed to the function
 * @param {number} minargs the minimum number of allowable arguments
 * @param {number=} maxargs optional maximum number of allowable
 * arguments (default: Infinity)
 * @param {boolean=} kwargs optional true if kwargs, false otherwise
 * (default: false)
 * @param {boolean=} free optional true if free vars, false otherwise
 * (default: false)
 */
Sk.builtin.pyCheckArgs = function (name, args, minargs, maxargs, kwargs, free) {
    var nargs = args.length;
    var msg = "";

    if (maxargs === undefined) {
        maxargs = Infinity;
    }
    if (kwargs) {
        nargs -= 1;
    }
    if (free) {
        nargs -= 1;
    }
    if ((nargs < minargs) || (nargs > maxargs)) {
        if (minargs === maxargs) {
            msg = name + "() takes exactly " + minargs + " arguments";
        } else if (nargs < minargs) {
            msg = name + "() takes at least " + minargs + " arguments";
        } else {
            msg = name + "() takes at most " + maxargs + " arguments";
        }
        msg += " (" + nargs + " given)";
        throw new Sk.builtin.TypeError(msg);
    }
};
Sk.exportSymbol("Sk.builtin.pyCheckArgs", Sk.builtin.pyCheckArgs);

/**
 * Check arguments to Python functions to ensure the correct number of
 * arguments are passed.
 *
 * @param {string} name the name of the function
 * @param {number} nargs the args passed to the function
 * @param {number} minargs the minimum number of allowable arguments
 * @param {number=} maxargs optional maximum number of allowable
 * arguments (default: Infinity)
 * @param {boolean=} kwargs optional true if kwargs, false otherwise
 * (default: false)
 * @param {boolean=} free optional true if free vars, false otherwise
 * (default: false)
 */
Sk.builtin.pyCheckArgsLen = function (name, nargs, minargs, maxargs, kwargs, free) {
    var msg = "";

    if (maxargs === undefined) {
        maxargs = Infinity;
    }
    if (kwargs) {
        nargs -= 1;
    }
    if (free) {
        nargs -= 1;
    }
    if ((nargs < minargs) || (nargs > maxargs)) {
        if (minargs === maxargs) {
            msg = name + "() takes exactly " + minargs + " arguments";
        } else if (nargs < minargs) {
            msg = name + "() takes at least " + minargs + " arguments";
        } else {
            msg = name + "() takes at most " + maxargs + " arguments";
        }
        msg += " (" + nargs + " given)";
        throw new Sk.builtin.TypeError(msg);
    }
};

/**
 * Check type of argument to Python functions.
 *
 * @param {string} name the name of the argument
 * @param {string} exptype string of the expected type name
 * @param {boolean} check truthy if type check passes, falsy otherwise
 */
Sk.builtin.pyCheckType = function (name, exptype, check) {
    if (!check) {
        throw new Sk.builtin.TypeError(name + " must be a " + exptype);
    }
};
Sk.exportSymbol("Sk.builtin.pyCheckType", Sk.builtin.pyCheckType);

Sk.builtin.checkSequence = function (arg) {
    return (arg !== null && arg.mp$subscript !== undefined);
};
Sk.exportSymbol("Sk.builtin.checkSequence", Sk.builtin.checkSequence);

/**
 * Use this to test whether or not a Python object is iterable.  You should **not** rely
 * on the presence of tp$iter on the object as a good test, as it could be a user defined
 * class with `__iter__` defined or ``__getitem__``  This tests for all of those cases
 *
 * @param arg {Object}   A Python object
 * @returns {boolean} true if the object is iterable
 */
Sk.builtin.checkIterable = function (arg) {
    var ret = false;
    if (arg !== null ) {
        try {
            ret = Sk.abstr.iter(arg);
            if (ret) {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            if (e instanceof Sk.builtin.TypeError) {
                return false;
            } else {
                throw e;
            }
        }
    }
    return ret;
};
Sk.exportSymbol("Sk.builtin.checkIterable", Sk.builtin.checkIterable);

Sk.builtin.checkCallable = function (obj) {
    // takes care of builtin functions and methods, builtins
    if (typeof obj === "function") {
        return true;
    }
    // takes care of python function, methods and lambdas
    if (obj instanceof Sk.builtin.func) {
        return true;
    }
    // takes care of instances of methods
    if (obj instanceof Sk.builtin.method) {
        return true;
    }
    // go up the prototype chain to see if the class has a __call__ method
    if (Sk.abstr.lookupSpecial(obj, Sk.builtin.str.$call) !== undefined) {
        return true;
    }
    return false;
};

Sk.builtin.checkNumber = function (arg) {
    return (arg !== null && (typeof arg === "number" ||
        arg instanceof Sk.builtin.int_ ||
        arg instanceof Sk.builtin.float_ ||
        arg instanceof Sk.builtin.lng));
};
Sk.exportSymbol("Sk.builtin.checkNumber", Sk.builtin.checkNumber);

/**
 * Checks for complex type, delegates to internal method
 * Most skulpt users would search here!
 */
Sk.builtin.checkComplex = function (arg) {
    return Sk.builtin.complex._complex_check(arg);
};
Sk.exportSymbol("Sk.builtin.checkComplex", Sk.builtin.checkComplex);

Sk.builtin.checkInt = function (arg) {
    return (arg !== null) && ((typeof arg === "number" && arg === (arg | 0)) ||
        arg instanceof Sk.builtin.int_ ||
        arg instanceof Sk.builtin.lng);
};
Sk.exportSymbol("Sk.builtin.checkInt", Sk.builtin.checkInt);

Sk.builtin.checkFloat = function (arg) {
    return (arg !== null) && (arg instanceof Sk.builtin.float_);
};
Sk.exportSymbol("Sk.builtin.checkFloat", Sk.builtin.checkFloat);

Sk.builtin.checkString = function (arg) {
    return (arg !== null && arg.__class__ == Sk.builtin.str);
};
Sk.exportSymbol("Sk.builtin.checkString", Sk.builtin.checkString);

Sk.builtin.checkClass = function (arg) {
    return (arg !== null && arg.sk$type);
};
Sk.exportSymbol("Sk.builtin.checkClass", Sk.builtin.checkClass);

Sk.builtin.checkBool = function (arg) {
    return (arg instanceof Sk.builtin.bool);
};
Sk.exportSymbol("Sk.builtin.checkBool", Sk.builtin.checkBool);

Sk.builtin.checkNone = function (arg) {
    return (arg instanceof Sk.builtin.none);
};
Sk.exportSymbol("Sk.builtin.checkNone", Sk.builtin.checkNone);

Sk.builtin.checkFunction = function (arg) {
    return (arg !== null && arg.tp$call !== undefined);
};
Sk.exportSymbol("Sk.builtin.checkFunction", Sk.builtin.checkFunction);

/**
 * @constructor
 * Sk.builtin.func
 *
 * @description
 * This function converts a Javascript function into a Python object that is callable.  Or just
 * think of it as a Python function rather than a Javascript function now.  This is an important
 * distinction in skulpt because once you have Python function you cannot just call it.
 * You must now use Sk.misceval.callsim to call the Python function.
 *
 * @param {Function} code the javascript implementation of this function
 * @param {Object=} globals the globals where this function was defined.
 * Can be undefined (which will be stored as null) for builtins. (is
 * that ok?)
 * @param {Object=} closure dict of free variables
 * @param {Object=} closure2 another dict of free variables that will be
 * merged into 'closure'. there's 2 to simplify generated code (one is $free,
 * the other is $cell)
 *
 * closure is the cell variables from the parent scope that we need to close
 * over. closure2 is the free variables in the parent scope that we also might
 * need to access.
 *
 * NOTE: co_varnames and co_name are defined by compiled code only, so we have
 * to access them via dict-style lookup for closure.
 *
 */
Sk.builtin.func = function (code, globals, closure, closure2) {
    if (!(this instanceof Sk.builtin.func)) {
        // otherwise it assigned .func_code and .func_globals somewhere and in certain
        // situations that will cause a lot of strange errors.
        throw new Error("builtin func should be called as a class with `new`");
    }

    var k;
    this.func_code = code;
    this.func_globals = globals || null;
    if (closure2 !== undefined) {
        // todo; confirm that modification here can't cause problems
        for (k in closure2) {
            closure[k] = closure2[k];
        }
    }

    this["$d"] = {
        "__name__": code["co_name"],
        "__class__": Sk.builtin.func
    };
    this.func_closure = closure;
    this.tp$name = (this.func_code && this.func_code["co_name"] && this.func_code["co_name"].v) || this.func_code.name || "<native JS>";
    return this;
};

Sk.abstr.setUpInheritance("function", Sk.builtin.func, Sk.builtin.object);

Sk.exportSymbol("Sk.builtin.func", Sk.builtin.func);

Sk.builtin.func.prototype.tp$name = "function";

Sk.builtin.func.prototype.tp$descr_get = function (obj, objtype) {
    Sk.asserts.assert(!(obj === undefined && objtype === undefined));
    if (objtype && objtype.tp$name in Sk.builtin && Sk.builtin[objtype.tp$name] === objtype) {
        // it's a builtin
        return new Sk.builtin.method(this, obj, objtype, true);
    }
    return new Sk.builtin.method(this, obj, objtype);
};

Sk.builtin.func.pythonFunctions = ["__get__"];

Sk.builtin.func.prototype.__get__ = function __get__(self, instance, owner) {
    Sk.builtin.pyCheckArgsLen("__get__", arguments.length, 1, 2, false, true);
    if (instance === Sk.builtin.none.none$ && owner === Sk.builtin.none.none$) {
        throw new Sk.builtin.TypeError("__get__(None, None) is invalid");
    }

    return self.tp$descr_get(instance, owner);
};

Sk.builtin.func.prototype.tp$getname = function () {
    return (this.func_code && this.func_code["co_name"] && this.func_code["co_name"].v) || this.func_code.name || "<native JS>";
};

Sk.builtin.func.prototype.tp$call = function (args, kw) {
    var i;
    var kwix;
    var varnames = this.func_code.co_varnames || [];
    var defaults = this.func_code.$defaults || [];
    var kwargsarr = [];
    var expectskw = this.func_code["co_kwargs"];
    var name;
    var nargs = args.length;
    var varargs = [];
    var defaultsNeeded = varnames.length - nargs > defaults.length ? defaults.length : varnames.length - nargs;
    var offset = varnames.length - defaults.length;

    if (this.func_code["no_kw"] && kw) {
        throw new Sk.builtin.TypeError(this.tp$getname() + "() takes no keyword arguments");
    }

    if (kw) {
        for (i = 0; i < kw.length; i += 2) {
            if (varnames && ((kwix = varnames.indexOf(kw[i])) !== -1)) {
                if (kwix < nargs) {
                    name = this.tp$getname();
                    if (name in Sk.builtins && this === Sk.builtins[name]) {
                        throw new Sk.builtin.TypeError("Argument given by name ('" + kw[i] + "') and position (" + (kwix + 1) + ")");
                    }
                    throw new Sk.builtin.TypeError(name + "() got multiple values for keyword argument '" + kw[i] + "'");
                }
                varargs[kwix] = kw[i + 1];
            } else if (expectskw) {
                // build kwargs dict
                kwargsarr.push(new Sk.builtin.str(kw[i]));
                kwargsarr.push(kw[i + 1]);
            } else {
                name = this.tp$getname();
                if (name in Sk.builtins && this === Sk.builtins[name]) {
                    throw new Sk.builtin.TypeError("'" + kw[i] + "' is an invalid keyword argument for this function");
                }
                throw new Sk.builtin.TypeError(name + "() got an unexpected keyword argument '" + kw[i] + "'");
            }
        }
    }

    // add defaults if there are enough because if we add them and leave a hole in the args array, pycheckargs doesn't work correctly
    // maybe we should fix pycheckargs too though.
    if (defaultsNeeded <= defaults.length) {
        for (i = defaults.length - defaultsNeeded; i < defaults.length; i++) {
            if (!varargs[offset + i]) {
                varargs[offset + i] = defaults[i];
            }
        }
    }

    // add arguments found in varargs
    for (i = 0; i < varargs.length; i++) {
        if (varargs[i]) {
            args[i] = varargs[i];
        }
    }

    if (kw && nargs < varnames.length - defaults.length) {
        for (i = nargs; i < varnames.length - defaults.length; i++) {
            if (kw.indexOf(varnames[i]) === -1) {
                throw new Sk.builtin.TypeError(this.tp$getname() + "() takes atleast " + (varnames.length - defaults.length) + " arguments (" + (nargs + varargs.filter(function(x) { return x; }).length) +  " given)");
            }
        }
    }

    if (this.func_closure) {
        // todo; OK to modify?
        if (varnames) {
            // Make sure all default arguments are in args before adding closure
            for (i = args.length; i < varnames.length; i++) {
                args.push(undefined);
            }
        }

        args.push(this.func_closure);
    }

    if (expectskw) {
        args.unshift(kwargsarr);
    }

    // note: functions expect 'this' to be globals to avoid having to
    // slice/unshift onto the main args
    return this.func_code.apply(this.func_globals, args);
};

Sk.builtin.func.prototype["$r"] = function () {
    var name = this.tp$getname();
    if (name in Sk.builtins && this === Sk.builtins[name]) {
        return new Sk.builtin.str("<built-in function " + name + ">");
    } else {
        return new Sk.builtin.str("<function " + name + ">");
    }
};
/**
 * builtins are supposed to come from the __builtin__ module, but we don't do
 * that yet.
 * todo; these should all be func objects too, otherwise str() of them won't
 * work, etc.
 */

Sk.builtin.range = function range (start, stop, step) {
    var ret = [];
    var i;

    Sk.builtin.pyCheckArgsLen("range", arguments.length, 1, 3);
    Sk.builtin.pyCheckType("start", "integer", Sk.builtin.checkInt(start));
    if (stop !== undefined) {
        Sk.builtin.pyCheckType("stop", "integer", Sk.builtin.checkInt(stop));
    }
    if (step !== undefined) {
        Sk.builtin.pyCheckType("step", "integer", Sk.builtin.checkInt(step));
    }

    start = Sk.builtin.asnum$(start);
    stop = Sk.builtin.asnum$(stop);
    step = Sk.builtin.asnum$(step);

    if ((stop === undefined) && (step === undefined)) {
        stop = start;
        start = 0;
        step = 1;
    } else if (step === undefined) {
        step = 1;
    }

    if (step === 0) {
        throw new Sk.builtin.ValueError("range() step argument must not be zero");
    }

    if (step > 0) {
        for (i = start; i < stop; i += step) {
            ret.push(new Sk.builtin.int_(i));
        }
    } else {
        for (i = start; i > stop; i += step) {
            ret.push(new Sk.builtin.int_(i));
        }
    }

    return new Sk.builtin.list(ret);
};

Sk.builtin.asnum$ = function (a) {
    if (a === undefined) {
        return a;
    }
    if (a === null) {
        return a;
    }
    if (a instanceof Sk.builtin.none) {
        return null;
    }
    if (a instanceof Sk.builtin.bool) {
        if (a.v) {
            return 1;
        }
        return 0;
    }
    if (typeof a === "number") {
        return a;
    }
    if (typeof a === "string") {
        return a;
    }
    if (a instanceof Sk.builtin.int_) {
        return a.v;
    }
    if (a instanceof Sk.builtin.float_) {
        return a.v;
    }
    if (a instanceof Sk.builtin.lng) {
        if (a.cantBeInt()) {
            return a.str$(10, true);
        }
        return a.toInt$();
    }
    if (a.constructor === Sk.builtin.biginteger) {
        if ((a.trueCompare(new Sk.builtin.biginteger(Sk.builtin.int_.threshold$)) > 0) ||
            (a.trueCompare(new Sk.builtin.biginteger(-Sk.builtin.int_.threshold$)) < 0)) {
            return a.toString();
        }
        return a.intValue();
    }

    return a;
};

Sk.exportSymbol("Sk.builtin.asnum$", Sk.builtin.asnum$);

/**
 * Return a Python number (either float or int) from a Javascript number.
 *
 * Javacsript function, returns Python object.
 *
 * @param  {number} a Javascript number to transform into Python number.
 * @return {(Sk.builtin.int_|Sk.builtin.float_)} A Python number.
 */
Sk.builtin.assk$ = function (a) {
    if (a % 1 === 0) {
        return new Sk.builtin.int_(a);
    } else {
        return new Sk.builtin.float_(a);
    }
};
Sk.exportSymbol("Sk.builtin.assk$", Sk.builtin.assk$);

Sk.builtin.asnum$nofloat = function (a) {
    var decimal;
    var mantissa;
    var expon;
    if (a === undefined) {
        return a;
    }
    if (a === null) {
        return a;
    }
    if (a.constructor === Sk.builtin.none) {
        return null;
    }
    if (a.constructor === Sk.builtin.bool) {
        if (a.v) {
            return 1;
        }
        return 0;
    }
    if (typeof a === "number") {
        a = a.toString();
    }
    if (a.constructor === Sk.builtin.int_) {
        a = a.v.toString();
    }
    if (a.constructor === Sk.builtin.float_) {
        a = a.v.toString();
    }
    if (a.constructor === Sk.builtin.lng) {
        a = a.str$(10, true);
    }
    if (a.constructor === Sk.builtin.biginteger) {
        a = a.toString();
    }

    //  Sk.debugout("INITIAL: " + a);

    //  If not a float, great, just return this
    if (a.indexOf(".") < 0 && a.indexOf("e") < 0 && a.indexOf("E") < 0) {
        return a;
    }

    expon = 0;

    if (a.indexOf("e") >= 0) {
        mantissa = a.substr(0, a.indexOf("e"));
        expon = a.substr(a.indexOf("e") + 1);
    } else if (a.indexOf("E") >= 0) {
        mantissa = a.substr(0, a.indexOf("e"));
        expon = a.substr(a.indexOf("E") + 1);
    } else {
        mantissa = a;
    }

    expon = parseInt(expon, 10);

    decimal = mantissa.indexOf(".");

    //  Simplest case, no decimal
    if (decimal < 0) {
        if (expon >= 0) {
            // Just add more zeroes and we're done
            while (expon-- > 0) {
                mantissa += "0";
            }
            return mantissa;
        } else {
            if (mantissa.length > -expon) {
                return mantissa.substr(0, mantissa.length + expon);
            } else {
                return 0;
            }
        }
    }

    //  Negative exponent OR decimal (neg or pos exp)
    if (decimal === 0) {
        mantissa = mantissa.substr(1);
    } else if (decimal < mantissa.length) {
        mantissa = mantissa.substr(0, decimal) + mantissa.substr(decimal + 1);
    } else {
        mantissa = mantissa.substr(0, decimal);
    }

    decimal = decimal + expon;
    while (decimal > mantissa.length) {
        mantissa += "0";
    }

    if (decimal <= 0) {
        mantissa = 0;
    } else {
        mantissa = mantissa.substr(0, decimal);
    }

    return mantissa;
};
Sk.exportSymbol("Sk.builtin.asnum$nofloat", Sk.builtin.asnum$nofloat);

Sk.builtin.round = function round (number, ndigits) {
    var special;
    Sk.builtin.pyCheckArgsLen("round", arguments.length, 1, 2);

    if (!Sk.builtin.checkNumber(number)) {
        if (!Sk.builtin.checkFunction(number)) {
            throw new Sk.builtin.TypeError("a float is required");
        } else {
            if (!Sk.__future__.exceptions) {
                throw new Sk.builtin.AttributeError(Sk.abstr.typeName(number) + " instance has no attribute '__float__'");
            }
        }
    }

    if ((ndigits !== undefined) && !Sk.misceval.isIndex(ndigits)) {
        throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(ndigits) + "' object cannot be interpreted as an index");
    }

    if (!Sk.__future__.dunder_round && number.round$) {
        return number.round$(number, ndigits);
    }

    // try calling internal magic method
    special = Sk.abstr.lookupSpecial(number, Sk.builtin.str.$round);
    if (special != null) {
        // method on builtin, provide this arg
        if (!Sk.builtin.checkFunction(number)) {
            return Sk.misceval.callsimArray(special, [number, ndigits]);
        } else {
            return Sk.misceval.callsimArray(special, [number]);
        }
    } else {
        throw new Sk.builtin.TypeError("a float is required");
    }
};

Sk.builtin.len = function len (item) {
    var intcheck;
    var special;
    Sk.builtin.pyCheckArgsLen("len", arguments.length, 1, 1);

    var int_ = function(i) { return new Sk.builtin.int_(i); };
    intcheck = function(j) {
        if (Sk.builtin.checkInt(j)) {
            return int_(j);
        } else {
            if (Sk.__future__.exceptions) {
                throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(j) + "' object cannot be interpreted as an integer");
            } else {
                throw new Sk.builtin.TypeError("__len__() should return an int");
            }
        }
    };

    if (item.sq$length) {
        return Sk.misceval.chain(item.sq$length(true), intcheck);
    }

    if (item.mp$length) {
        return Sk.misceval.chain(item.mp$length(), int_);
    }

    if (item.tp$length) {
        if (Sk.builtin.checkFunction(item)) {
            special = Sk.abstr.lookupSpecial(item, Sk.builtin.str.$len);
            if (special != null) {
                return Sk.misceval.callsimArray(special, [item]);
            } else {
                if (Sk.__future__.exceptions) {
                    throw new Sk.builtin.TypeError("object of type '" + Sk.abstr.typeName(item) + "' has no len()");
                } else {
                    throw new Sk.builtin.AttributeError(Sk.abstr.typeName(item) + " instance has no attribute '__len__'");
                }
            }
        } else {
            return Sk.misceval.chain(item.tp$length(true), intcheck);
        }
    }

    throw new Sk.builtin.TypeError("object of type '" + Sk.abstr.typeName(item) + "' has no len()");
};

Sk.builtin.min = function min () {
    var i;
    var lowest;
    var args;
    Sk.builtin.pyCheckArgsLen("min", arguments.length, 1);

    args = Sk.misceval.arrayFromArguments(arguments);
    lowest = args[0];

    if (lowest === undefined) {
        throw new Sk.builtin.ValueError("min() arg is an empty sequence");
    }

    for (i = 1; i < args.length; ++i) {
        if (Sk.misceval.richCompareBool(args[i], lowest, "Lt")) {
            lowest = args[i];
        }
    }
    return lowest;
};

Sk.builtin.max = function max () {
    var i;
    var highest;
    var args;
    Sk.builtin.pyCheckArgsLen("max", arguments.length, 1);

    args = Sk.misceval.arrayFromArguments(arguments);
    highest = args[0];

    if (highest === undefined) {
        throw new Sk.builtin.ValueError("max() arg is an empty sequence");
    }

    for (i = 1; i < args.length; ++i) {
        if (Sk.misceval.richCompareBool(args[i], highest, "Gt")) {
            highest = args[i];
        }
    }
    return highest;
};

Sk.builtin.any = function any (iter) {
    var it, i;

    Sk.builtin.pyCheckArgsLen("any", arguments.length, 1, 1);
    if (!Sk.builtin.checkIterable(iter)) {
        throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(iter) +
            "' object is not iterable");
    }

    it = Sk.abstr.iter(iter);
    for (i = it.tp$iternext(); i !== undefined; i = it.tp$iternext()) {
        if (Sk.misceval.isTrue(i)) {
            return Sk.builtin.bool.true$;
        }
    }

    return Sk.builtin.bool.false$;
};

Sk.builtin.all = function all (iter) {
    var it, i;

    Sk.builtin.pyCheckArgsLen("all", arguments.length, 1, 1);
    if (!Sk.builtin.checkIterable(iter)) {
        throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(iter) +
            "' object is not iterable");
    }

    it = Sk.abstr.iter(iter);
    for (i = it.tp$iternext(); i !== undefined; i = it.tp$iternext()) {
        if (!Sk.misceval.isTrue(i)) {
            return Sk.builtin.bool.false$;
        }
    }

    return Sk.builtin.bool.true$;
};

Sk.builtin.sum = function sum (iter, start) {
    var tot;
    var intermed;
    var it, i;
    var has_float;

    Sk.builtin.pyCheckArgsLen("sum", arguments.length, 1, 2);
    Sk.builtin.pyCheckType("iter", "iterable", Sk.builtin.checkIterable(iter));
    if (start !== undefined && Sk.builtin.checkString(start)) {
        throw new Sk.builtin.TypeError("sum() can't sum strings [use ''.join(seq) instead]");
    }
    if (start === undefined) {
        tot = new Sk.builtin.int_(0);
    } else {
        tot = start;
    }

    it = Sk.abstr.iter(iter);
    for (i = it.tp$iternext(); i !== undefined; i = it.tp$iternext()) {
        if (i instanceof Sk.builtin.float_) {
            has_float = true;
            if (!(tot instanceof Sk.builtin.float_)) {
                tot = new Sk.builtin.float_(Sk.builtin.asnum$(tot));
            }
        } else if (i instanceof Sk.builtin.lng) {
            if (!has_float) {
                if (!(tot instanceof Sk.builtin.lng)) {
                    tot = new Sk.builtin.lng(tot);
                }
            }
        }

        if (tot.nb$add !== undefined) {
            intermed = tot.nb$add(i);
            if ((intermed !== undefined) && (intermed !== Sk.builtin.NotImplemented.NotImplemented$)) {
                tot = tot.nb$add(i);
                continue;
            }
        }

        throw new Sk.builtin.TypeError("unsupported operand type(s) for +: '" +
                    Sk.abstr.typeName(tot) + "' and '" +
                    Sk.abstr.typeName(i) + "'");
    }

    return tot;
};

Sk.builtin.zip = function zip () {
    var el;
    var tup;
    var done;
    var res;
    var i;
    var iters;
    if (arguments.length === 0) {
        return new Sk.builtin.list([]);
    }

    iters = [];
    for (i = 0; i < arguments.length; i++) {
        if (Sk.builtin.checkIterable(arguments[i])) {
            iters.push(Sk.abstr.iter(arguments[i]));
        } else {
            throw new Sk.builtin.TypeError("argument " + i + " must support iteration");
        }
    }
    res = [];
    done = false;
    while (!done) {
        tup = [];
        for (i = 0; i < arguments.length; i++) {
            el = iters[i].tp$iternext();
            if (el === undefined) {
                done = true;
                break;
            }
            tup.push(el);
        }
        if (!done) {
            res.push(new Sk.builtin.tuple(tup));
        }
    }
    return new Sk.builtin.list(res);
};

Sk.builtin.abs = function abs (x) {
    Sk.builtin.pyCheckArgsLen("abs", arguments.length, 1, 1);

    if (x instanceof Sk.builtin.int_) {
        return new Sk.builtin.int_(Math.abs(x.v));
    }
    if (x instanceof Sk.builtin.float_) {
        return new Sk.builtin.float_(Math.abs(x.v));
    }
    if (Sk.builtin.checkNumber(x)) {
        return Sk.builtin.assk$(Math.abs(Sk.builtin.asnum$(x)));
    } else if (Sk.builtin.checkComplex(x)) {
        return Sk.misceval.callsimArray(x.__abs__, [x]);
    }

    // call custom __abs__ methods
    if (x.tp$getattr) {
        var f = x.tp$getattr(Sk.builtin.str.$abs);
        return Sk.misceval.callsimArray(f);
    }

    throw new TypeError("bad operand type for abs(): '" + Sk.abstr.typeName(x) + "'");
};

// fabs belongs in the math module but has been a Skulpt builtin since 41665a97d (2012).
// Left in for backwards compatibility for now
Sk.builtin.fabs = function fabs(x) {
    return Sk.builtin.abs(x);
};

Sk.builtin.ord = function ord (x) {
    Sk.builtin.pyCheckArgsLen("ord", arguments.length, 1, 1);

    if (!Sk.builtin.checkString(x)) {
        throw new Sk.builtin.TypeError("ord() expected a string of length 1, but " + Sk.abstr.typeName(x) + " found");
    } else if (x.v.length !== 1) {
        throw new Sk.builtin.TypeError("ord() expected a character, but string of length " + x.v.length + " found");
    }
    return new Sk.builtin.int_((x.v).charCodeAt(0));
};

Sk.builtin.chr = function chr (x) {
    Sk.builtin.pyCheckArgsLen("chr", arguments.length, 1, 1);
    if (!Sk.builtin.checkInt(x)) {
        throw new Sk.builtin.TypeError("an integer is required");
    }
    x = Sk.builtin.asnum$(x);


    if ((x < 0) || (x > 255)) {
        throw new Sk.builtin.ValueError("chr() arg not in range(256)");
    }

    return new Sk.builtin.str(String.fromCharCode(x));
};

Sk.builtin.unichr = function unichr (x) {
    Sk.builtin.pyCheckArgsLen("chr", arguments.length, 1, 1);
    if (!Sk.builtin.checkInt(x)) {
        throw new Sk.builtin.TypeError("an integer is required");
    }
    x = Sk.builtin.asnum$(x);

    try {
        return new Sk.builtin.str(String.fromCodePoint(x));
    }
    catch (err) {
        if (err instanceof RangeError) {
            throw new Sk.builtin.ValueError(err.message);
        }
        throw err;
    }
};

Sk.builtin.int2str_ = function helper_ (x, radix, prefix) {
    var suffix;
    var str = "";
    if (x instanceof Sk.builtin.lng) {
        suffix = "";
        if (radix !== 2) {
            suffix = "L";
        }

        str = x.str$(radix, false);
        if (x.nb$isnegative()) {
            return new Sk.builtin.str("-" + prefix + str + suffix);
        }
        return new Sk.builtin.str(prefix + str + suffix);
    } else {
        x = Sk.misceval.asIndex(x);
        str = x.toString(radix);
        if (x < 0) {
            return new Sk.builtin.str("-" + prefix + str.slice(1));
        }
        return new Sk.builtin.str(prefix + str);
    }
};

Sk.builtin.hex = function hex (x) {
    Sk.builtin.pyCheckArgsLen("hex", arguments.length, 1, 1);
    if (!Sk.misceval.isIndex(x)) {
        throw new Sk.builtin.TypeError("hex() argument can't be converted to hex");
    }
    return Sk.builtin.int2str_(x, 16, "0x");
};

Sk.builtin.oct = function oct (x) {
    Sk.builtin.pyCheckArgsLen("oct", arguments.length, 1, 1);
    if (!Sk.misceval.isIndex(x)) {
        throw new Sk.builtin.TypeError("oct() argument can't be converted to hex");
    }
    if (Sk.__future__.octal_number_literal) {
        return Sk.builtin.int2str_(x, 8, "0o");
    } else {
        return Sk.builtin.int2str_(x, 8, "0");
    }
};

Sk.builtin.bin = function bin (x) {
    Sk.builtin.pyCheckArgsLen("bin", arguments.length, 1, 1);
    if (!Sk.misceval.isIndex(x)) {
        throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(x) + "' object can't be interpreted as an index");
    }
    return Sk.builtin.int2str_(x, 2, "0b");
};

Sk.builtin.dir = function dir (x) {
    var last;
    var it;
    var prop;
    var base;
    var mro;
    var i;
    var s;
    var k;
    var names;
    var getName;
    Sk.builtin.pyCheckArgsLen("dir", arguments.length, 1, 1);

    getName = function (k) {
        var s = null;
        var internal = [
            "__bases__", "__mro__", "__class__", "__name__", "GenericGetAttr",
            "GenericSetAttr", "GenericPythonGetAttr", "GenericPythonSetAttr",
            "pythonFunctions", "HashNotImplemented", "constructor", "__dict__"
        ];
        if (internal.indexOf(k) !== -1) {
            return null;
        }
        if (k.indexOf("$") !== -1) {
            s = Sk.builtin.dir.slotNameToRichName(k);
        } else if (k.charAt(k.length - 1) !== "_") {
            s = k;
        } else if (k.charAt(0) === "_") {
            s = k;
        }
        return s;
    };

    names = [];

    var _seq;

    // try calling magic method
    var special = Sk.abstr.lookupSpecial(x, Sk.builtin.str.$dir);
    if(special != null) {
        // method on builtin, provide this arg
        _seq = Sk.misceval.callsimArray(special, [x]);

        if (!Sk.builtin.checkSequence(_seq)) {
            throw new Sk.builtin.TypeError("__dir__ must return sequence.");
        }

        // proper unwrapping
        _seq = Sk.ffi.remapToJs(_seq);

        for (i = 0; i < _seq.length; ++i) {
            names.push(new Sk.builtin.str(_seq[i]));
        }
    } else {
        // Add all object properties
        for (k in x.constructor.prototype) {
            s = getName(k);
            if (s) {
                names.push(new Sk.builtin.str(s));
            }
        }

        // Add all attributes
        if (x["$d"]) {
            if (x["$d"].tp$iter) {
                // Dictionary
                it = x["$d"].tp$iter();
                for (i = it.tp$iternext(); i !== undefined; i = it.tp$iternext()) {
                    s = new Sk.builtin.str(i);
                    s = getName(s.v);
                    if (s) {
                        names.push(new Sk.builtin.str(s));
                    }
                }
            } else {
                // Object
                for (s in x["$d"]) {
                    names.push(new Sk.builtin.str(s));
                }
            }
        }

        // Add all class attributes
        mro = x.tp$mro;
        if(!mro && x.ob$type) {
            mro = x.ob$type.tp$mro;
        }
        if (mro) {
            for (i = 0; i < mro.v.length; ++i) {
                base = mro.v[i];
                for (prop in base) {
                    if (base.hasOwnProperty(prop)) {
                        s = getName(prop);
                        if (s) {
                            names.push(new Sk.builtin.str(s));
                        }
                    }
                }
            }
        }
    }

    // Sort results
    names.sort(function (a, b) {
        return (a.v > b.v) - (a.v < b.v);
    });

    // Get rid of duplicates before returning, as duplicates should
    //  only occur when they are shadowed
    last = function (value, index, self) {
        // Returns true iff the value is not the same as the next value
        return value !== self[index + 1];
    };
    return new Sk.builtin.list(names.filter(last));
};

Sk.builtin.dir.slotNameToRichName = function (k) {
    // todo; map tp$xyz to __xyz__ properly
    return undefined;
};

Sk.builtin.repr = function repr (x) {
    Sk.builtin.pyCheckArgsLen("repr", arguments.length, 1, 1);

    return Sk.misceval.objectRepr(x);
};

Sk.builtin.open = function open (filename, mode, bufsize) {
    Sk.builtin.pyCheckArgsLen("open", arguments.length, 1, 3);
    if (mode === undefined) {
        mode = new Sk.builtin.str("r");
    }

    if (/\+/.test(mode.v)) {
        throw "todo; haven't implemented read/write mode";
    } else if ((mode.v === "w" || mode.v === "wb" || mode.v === "a" || mode.v === "ab") && !Sk.nonreadopen) {
        throw "todo; haven't implemented non-read opens";
    }

    return new Sk.builtin.file(filename, mode, bufsize);
};

Sk.builtin.isinstance = function isinstance (obj, type) {
    var issubclass;
    var i;
    Sk.builtin.pyCheckArgsLen("isinstance", arguments.length, 2, 2);
    if (!Sk.builtin.checkClass(type) && !(type instanceof Sk.builtin.tuple)) {
        throw new Sk.builtin.TypeError("isinstance() arg 2 must be a class, type, or tuple of classes and types");
    }

    if (type === Sk.builtin.none.prototype.ob$type) {
        if (obj instanceof Sk.builtin.none) {
            return Sk.builtin.bool.true$;
        } else {
            return Sk.builtin.bool.false$;
        }
    }

    // Normal case
    if (obj.ob$type === type) {
        return Sk.builtin.bool.true$;
    }

    // Handle tuple type argument
    if (type instanceof Sk.builtin.tuple) {
        for (i = 0; i < type.v.length; ++i) {
            if (Sk.misceval.isTrue(Sk.builtin.isinstance(obj, type.v[i]))) {
                return Sk.builtin.bool.true$;
            }
        }
        return Sk.builtin.bool.false$;
    }

    // Check for Javascript inheritance
    if (obj instanceof type) {
        return Sk.builtin.bool.true$;
    }


    issubclass = function (klass, base) {
        var i;
        var bases;
        if (klass === base) {
            return Sk.builtin.bool.true$;
        }
        if (klass["$d"] === undefined) {
            return Sk.builtin.bool.false$;
        }
        bases = klass["$d"].mp$subscript(Sk.builtin.type.basesStr_);
        for (i = 0; i < bases.v.length; ++i) {
            if (Sk.misceval.isTrue(issubclass(bases.v[i], base))) {
                return Sk.builtin.bool.true$;
            }
        }
        return Sk.builtin.bool.false$;
    };

    return issubclass(obj.ob$type, type);
};

Sk.builtin.hash = function hash (value) {
    var junk;
    Sk.builtin.pyCheckArgsLen("hash", arguments.length, 1, 1);

    // Useless object to get compiler to allow check for __hash__ property
    junk = {__hash__: function () {
        return 0;
    }};

    if (value instanceof Object) {
        if (Sk.builtin.checkNone(value.tp$hash)) {
            // python sets the hash function to None , so we have to catch this case here
            throw new Sk.builtin.TypeError(new Sk.builtin.str("unhashable type: '" + Sk.abstr.typeName(value) + "'"));
        } else if (value.tp$hash !== undefined) {
            if (value.$savedHash_) {
                return value.$savedHash_;
            }
            value.$savedHash_ = value.tp$hash();
            return value.$savedHash_;
        } else {
            if (value.__hash === undefined) {
                Sk.builtin.hashCount += 1;
                value.__hash = Sk.builtin.hashCount;
            }
            return new Sk.builtin.int_(value.__hash);
        }
    } else if (typeof value === "number" || value === null ||
        value === true || value === false) {
        throw new Sk.builtin.TypeError("unsupported Javascript type");
    }

    return new Sk.builtin.str((typeof value) + " " + String(value));
    // todo; throw properly for unhashable types
};

Sk.builtin.getattr = function getattr (obj, pyName, default_) {
    var ret, mangledName, jsName;
    Sk.builtin.pyCheckArgsLen("getattr", arguments.length, 2, 3);
    if (!Sk.builtin.checkString(pyName)) {
        throw new Sk.builtin.TypeError("attribute name must be string");
    }

    jsName = pyName.$jsstr();
    mangledName = new Sk.builtin.str(Sk.fixReservedWords(jsName));
    ret = obj.tp$getattr(mangledName);
    if (ret === undefined) {
        if (default_ !== undefined) {
            return default_;
        } else {
            throw new Sk.builtin.AttributeError("'" + Sk.abstr.typeName(obj) + "' object has no attribute '" + jsName + "'");
        }
    }
    return ret;
};

Sk.builtin.setattr = function setattr (obj, pyName, value) {
    var jsName;
    Sk.builtin.pyCheckArgsLen("setattr", arguments.length, 3, 3);
    // cannot set or del attr from builtin type
    if (obj === undefined || obj["$r"] === undefined || obj["$r"]().v.slice(1,5) !== "type") {
        if (!Sk.builtin.checkString(pyName)) {
            throw new Sk.builtin.TypeError("attribute name must be string");
        }
        jsName = pyName.$jsstr();
        if (obj.tp$setattr) {
            obj.tp$setattr(new Sk.builtin.str(Sk.fixReservedWords(jsName)), value);
        } else {
            throw new Sk.builtin.AttributeError("object has no attribute " + jsName);
        }
        return Sk.builtin.none.none$;
    }

    throw new Sk.builtin.TypeError("can't set attributes of built-in/extension type '" + obj.tp$name + "'");
};

Sk.builtin.raw_input = function (prompt) {
    var lprompt = prompt ? prompt : "";

    return Sk.misceval.chain(Sk.importModule("sys", false, true), function (sys) {
        if (Sk.inputfunTakesPrompt) {
            return Sk.misceval.callsimOrSuspendArray(Sk.builtin.file.$readline, [sys["$d"]["stdin"], null, lprompt]);
        } else {
            return Sk.misceval.chain(undefined, function() {
                return Sk.misceval.callsimOrSuspendArray(sys["$d"]["stdout"]["write"], [sys["$d"]["stdout"], new Sk.builtin.str(lprompt)]);
            }, function () {
                return Sk.misceval.callsimOrSuspendArray(sys["$d"]["stdin"]["readline"], [sys["$d"]["stdin"]]);
            });
        }
    });
};

Sk.builtin.input = Sk.builtin.raw_input;

Sk.builtin.jseval = function jseval (evalcode) {
    var result = Sk.global["eval"](Sk.ffi.remapToJs(evalcode));
    try {
        return Sk.ffi.remapToPy(result);
    } catch (err) {
        if (err.constructor === Sk.asserts.AssertionError) {
            return Sk.builtin.none.none$;
        }

        throw err;
    }
};

Sk.builtin.jsmillis = function jsmillis () {
    var now = new Date();
    return now.valueOf();
};

Sk.builtin.eval_ = function eval_ () {
    throw new Sk.builtin.NotImplementedError("eval is not yet implemented");
};

Sk.builtin.map = function map (fun, seq) {
    var retval = [];
    var next;
    var nones;
    var args;
    var argnum;
    var i;
    var iterables;
    var combined;
    Sk.builtin.pyCheckArgsLen("map", arguments.length, 2);

    if (arguments.length > 2) {
        // Pack sequences into one list of Javascript Arrays

        combined = [];
        iterables = Array.prototype.slice.apply(arguments).slice(1);
        for (i = 0; i < iterables.length; i++) {
            if (!Sk.builtin.checkIterable(iterables[i])) {
                argnum = parseInt(i, 10) + 2;
                throw new Sk.builtin.TypeError("argument " + argnum + " to map() must support iteration");
            }
            iterables[i] = Sk.abstr.iter(iterables[i]);
        }

        while (true) {
            args = [];
            nones = 0;
            for (i = 0; i < iterables.length; i++) {
                next = iterables[i].tp$iternext();
                if (next === undefined) {
                    args.push(Sk.builtin.none.none$);
                    nones++;
                } else {
                    args.push(next);
                }
            }
            if (nones !== iterables.length) {
                combined.push(args);
            } else {
                // All iterables are done
                break;
            }
        }
        seq = new Sk.builtin.list(combined);
    }

    if (!Sk.builtin.checkIterable(seq)) {
        throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(seq) + "' object is not iterable");
    }

    return Sk.misceval.chain(Sk.misceval.iterFor(Sk.abstr.iter(seq), function (item) {

        if (fun === Sk.builtin.none.none$) {
            if (item instanceof Array) {
                // With None function and multiple sequences,
                // map should return a list of tuples
                item = new Sk.builtin.tuple(item);
            }
            retval.push(item);
        } else {
            if (!(item instanceof Array)) {
                // If there was only one iterable, convert to Javascript
                // Array for call to apply.
                item = [item];
            }

            return Sk.misceval.chain(Sk.misceval.applyOrSuspend(fun, undefined, undefined, undefined, item), function (result) {
                retval.push(result);
            });
        }
    }), function () {
        return new Sk.builtin.list(retval);
    });
};

Sk.builtin.reduce = function reduce (fun, seq, initializer) {
    var item;
    var accum_value;
    var iter;
    Sk.builtin.pyCheckArgsLen("reduce", arguments.length, 2, 3);
    if (!Sk.builtin.checkIterable(seq)) {
        throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(seq) + "' object is not iterable");
    }

    iter = Sk.abstr.iter(seq);
    if (initializer === undefined) {
        initializer = iter.tp$iternext();
        if (initializer === undefined) {
            throw new Sk.builtin.TypeError("reduce() of empty sequence with no initial value");
        }
    }
    accum_value = initializer;
    for (item = iter.tp$iternext();
         item !== undefined;
         item = iter.tp$iternext()) {
        accum_value = Sk.misceval.callsimArray(fun, [accum_value, item]);
    }

    return accum_value;
};

Sk.builtin.filter = function filter (fun, iterable) {
    var result;
    var iter, item;
    var retval;
    var ret;
    var add;
    var ctor;
    Sk.builtin.pyCheckArgsLen("filter", arguments.length, 2, 2);

    if (!Sk.builtin.checkIterable(iterable)) {
        throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(iterable) + "' object is not iterable");
    }

    ctor = function () {
        return [];
    };
    add = function (iter, item) {
        iter.push(item);
        return iter;
    };
    ret = function (iter) {
        return new Sk.builtin.list(iter);
    };

    if (iterable.__class__ === Sk.builtin.str) {
        ctor = function () {
            return new Sk.builtin.str("");
        };
        add = function (iter, item) {
            return iter.sq$concat(item);
        };
        ret = function (iter) {
            return iter;
        };
    } else if (iterable.__class__ === Sk.builtin.tuple) {
        ret = function (iter) {
            return new Sk.builtin.tuple(iter);
        };
    }

    retval = ctor();

    for (iter = Sk.abstr.iter(iterable), item = iter.tp$iternext();
         item !== undefined;
         item = iter.tp$iternext()) {
        if (fun === Sk.builtin.none.none$) {
            result = new Sk.builtin.bool( item);
        } else {
            result = Sk.misceval.callsimArray(fun, [item]);
        }

        if (Sk.misceval.isTrue(result)) {
            retval = add(retval, item);
        }
    }

    return ret(retval);
};

Sk.builtin.hasattr = function hasattr (obj, attr) {
    Sk.builtin.pyCheckArgsLen("hasattr", arguments.length, 2, 2);
    var special, ret;
    if (!Sk.builtin.checkString(attr)) {
        throw new Sk.builtin.TypeError("hasattr(): attribute name must be string");
    }

    if (obj.tp$getattr) {
        if (obj.tp$getattr(attr)) {
            return Sk.builtin.bool.true$;
        } else {
            return Sk.builtin.bool.false$;
        }
    } else {
        throw new Sk.builtin.AttributeError("Object has no tp$getattr method");
    }
};


Sk.builtin.pow = function pow (a, b, c) {
    var ret;
    var res;
    var right;
    var left;
    var c_num;
    var b_num;
    var a_num;
    Sk.builtin.pyCheckArgsLen("pow", arguments.length, 2, 3);

    if (c instanceof Sk.builtin.none) {
        c = undefined;
    }

    // add complex type hook here, builtin is messed up anyways
    if (Sk.builtin.checkComplex(a)) {
        return a.nb$power(b, c); // call complex pow function
    }

    a_num = Sk.builtin.asnum$(a);
    b_num = Sk.builtin.asnum$(b);
    c_num = Sk.builtin.asnum$(c);

    if (!Sk.builtin.checkNumber(a) || !Sk.builtin.checkNumber(b)) {
        if (c === undefined) {
            throw new Sk.builtin.TypeError("unsupported operand type(s) for pow(): '" + Sk.abstr.typeName(a) + "' and '" + Sk.abstr.typeName(b) + "'");
        }
        throw new Sk.builtin.TypeError("unsupported operand type(s) for pow(): '" + Sk.abstr.typeName(a) + "', '" + Sk.abstr.typeName(b) + "', '" + Sk.abstr.typeName(c) + "'");
    }
    if (a_num < 0 && b instanceof Sk.builtin.float_) {
        throw new Sk.builtin.ValueError("negative number cannot be raised to a fractional power");
    }

    if (c === undefined) {
        if ((a instanceof Sk.builtin.float_ || b instanceof Sk.builtin.float_) || (b_num < 0)) {
            return new Sk.builtin.float_(Math.pow(a_num, b_num));
        }

        left = new Sk.builtin.int_(a_num);
        right = new Sk.builtin.int_(b_num);
        res = left.nb$power(right);

        if (a instanceof Sk.builtin.lng || b instanceof Sk.builtin.lng) {
            return new Sk.builtin.lng(res);
        }

        return res;
    } else {
        if (!Sk.builtin.checkInt(a) || !Sk.builtin.checkInt(b) || !Sk.builtin.checkInt(c)) {
            throw new Sk.builtin.TypeError("pow() 3rd argument not allowed unless all arguments are integers");
        }
        if (b_num < 0) {
            if (Sk.__future__.exceptions) {
                throw new Sk.builtin.ValueError("pow() 2nd argument cannot be negative when 3rd argument specified");
            } else {
                throw new Sk.builtin.TypeError("pow() 2nd argument cannot be negative when 3rd argument specified");
            }
        }
        if (c_num === 0) {
            throw new Sk.builtin.ValueError("pow() 3rd argument cannot be 0");
        }
        if ((a instanceof Sk.builtin.lng || b instanceof Sk.builtin.lng || c instanceof Sk.builtin.lng) ||
            (Math.pow(a_num, b_num) === Infinity)) {
            // convert a to a long so that we can use biginteger's modPowInt method
            a = new Sk.builtin.lng(a);
            return a.nb$power(b, c);
        } else {
            ret = new Sk.builtin.int_(Math.pow(a_num, b_num));
            return ret.nb$remainder(c);
        }
    }
};

Sk.builtin.quit = function quit (msg) {
    var s = new Sk.builtin.str(msg).v;
    throw new Sk.builtin.SystemExit(s);
};


Sk.builtin.issubclass = function issubclass (c1, c2) {
    var i;
    var issubclass_internal;
    Sk.builtin.pyCheckArgsLen("issubclass", arguments.length, 2, 2);
    if (!Sk.builtin.checkClass(c1)) {
        throw new Sk.builtin.TypeError("issubclass() arg 1 must be a class");
    }

    if (!Sk.builtin.checkClass(c2) && !(c2 instanceof Sk.builtin.tuple)) {
        throw new Sk.builtin.TypeError("issubclass() arg 2 must be a class or tuple of classes");
    }

    issubclass_internal = function (klass, base) {
        var i;
        var bases;
        if (klass === base) {
            return true;
        }
        if (klass["$d"] === undefined) {
            return false;
        }
        if (klass["$d"].mp$subscript) {
            // old style classes don't have bases
            if (klass["$d"].sq$contains(Sk.builtin.type.basesStr_)) {
                bases = klass["$d"].mp$subscript(Sk.builtin.type.basesStr_);
            } else {
                return false;
            }
        } else {
            return false;
        }
        for (i = 0; i < bases.v.length; ++i) {
            if (issubclass_internal(bases.v[i], base)) {
                return true;
            }
        }
        return false;
    };

    if (Sk.builtin.checkClass(c2)) {
        /* Quick test for an exact match */
        if (c1 === c2) {
            return true;
        }

        return issubclass_internal(c1, c2);
    }

    // Handle tuple type argument
    if (c2 instanceof Sk.builtin.tuple) {
        for (i = 0; i < c2.v.length; ++i) {
            if (Sk.builtin.issubclass(c1, c2.v[i])) {
                return true;
            }
        }
        return false;
    }
};

Sk.builtin.globals = function globals () {
    var i;
    var ret = new Sk.builtin.dict([]);
    for (i in Sk["globals"]) {
        ret.mp$ass_subscript(new Sk.builtin.str(i), Sk["globals"][i]);
    }

    return ret;

};

Sk.builtin.divmod = function divmod (a, b) {
    return Sk.abstr.numberBinOp(a, b, "DivMod");
};

/**
 * Convert a value to a “formatted” representation, as controlled by format_spec. The interpretation of format_spec
 * will depend on the type of the value argument, however there is a standard formatting syntax that is used by most
 * built-in types: Format Specification Mini-Language.
 */
Sk.builtin.format = function format (value, format_spec) {
    Sk.builtin.pyCheckArgsLen("format", arguments.length, 1, 2);

    if (format_spec === undefined) {
        format_spec = Sk.builtin.str.$emptystr;
    }

    return Sk.abstr.objectFormat(value, format_spec);
};

Sk.builtin.reversed = function reversed (seq) {
    Sk.builtin.pyCheckArgsLen("reversed", arguments.length, 1, 1);

    var special = Sk.abstr.lookupSpecial(seq, Sk.builtin.str.$reversed);
    if (special != null) {
        return Sk.misceval.callsimArray(special, [seq]);
    } else {
        if (!Sk.builtin.checkSequence(seq)) {
            throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(seq) + "' object is not a sequence");
        }

        /**
         * Builds an iterator that outputs the items form last to first.
         *
         * @constructor
         */
        var reverseIter = function (obj) {
            this.idx = obj.sq$length() - 1;
            this.myobj = obj;
            this.getitem = Sk.abstr.lookupSpecial(obj, Sk.builtin.str.$getitem);
            this.tp$iter = function() {
                return this;
            },
            this.tp$iternext = function () {
                var ret;

                if (this.idx < 0) {
                    return undefined;
                }

                try {
                    ret = Sk.misceval.callsimArray(this.getitem, [this.myobj, Sk.ffi.remapToPy(this.idx)]);
                } catch (e) {
                    if (e instanceof Sk.builtin.IndexError) {
                        return undefined;
                    } else {
                        throw e;
                    }
                }
                this.idx--;
                return ret;
            };
        };

        return new reverseIter(seq);
    }
};

Sk.builtin.id = function (obj) {
    Sk.builtin.pyCheckArgsLen("id", arguments.length, 1, 1);

    if (obj.__id === undefined) {
        Sk.builtin.idCount += 1;
        obj.__id = Sk.builtin.idCount;
    }

    return new Sk.builtin.int_(obj.__id);
};

Sk.builtin.bytearray = function bytearray () {
    throw new Sk.builtin.NotImplementedError("bytearray is not yet implemented");
};

Sk.builtin.callable = function callable (obj) {
    // check num of args
    Sk.builtin.pyCheckArgsLen("callable", arguments.length, 1, 1);

    if (Sk.builtin.checkCallable(obj)) {
        return Sk.builtin.bool.true$;
    }
    return Sk.builtin.bool.false$;
};

Sk.builtin.delattr = function delattr (obj, attr) {
    Sk.builtin.pyCheckArgsLen("delattr", arguments.length, 2, 2);
    if (obj["$d"][attr.v] !== undefined) {
        var ret = Sk.misceval.tryCatch(function() {
            var try1 = Sk.builtin.setattr(obj, attr, undefined);
            return try1;
        }, function(e) {
            Sk.misceval.tryCatch(function() {
                var try2 = Sk.builtin.setattr(obj["$d"], attr, undefined);

                return try2;
            }, function(e) {
                if (e instanceof Sk.builtin.AttributeError) {
                    throw new Sk.builtin.AttributeError(Sk.abstr.typeName(obj) + " instance has no attribute '"+ attr.v+ "'");
                } else {
                    throw e;
                }
            });
        });
        return ret;
    } // cannot set or del attr from builtin type
    if (obj["$r"]().v.slice(1,5) !== "type") {
        if (obj.ob$type === Sk.builtin.type && obj[attr.v] !== undefined) {
            obj[attr.v] = undefined;
            return Sk.builtin.none.none$;
        }
        throw new Sk.builtin.AttributeError(Sk.abstr.typeName(obj) + " instance has no attribute '"+ attr.v+ "'");
    }
    throw new Sk.builtin.TypeError("can't set attributes of built-in/extension type '" + obj.tp$name + "'");
};

Sk.builtin.execfile = function execfile () {
    throw new Sk.builtin.NotImplementedError("execfile is not yet implemented");
};

Sk.builtin.frozenset = function frozenset () {
    throw new Sk.builtin.NotImplementedError("frozenset is not yet implemented");
};

Sk.builtin.help = function help () {
    throw new Sk.builtin.NotImplementedError("help is not yet implemented");
};

Sk.builtin.iter = function iter (obj, sentinel) {
    Sk.builtin.pyCheckArgsLen("iter", arguments.length, 1, 2);
    if (arguments.length === 1) {
        if (!Sk.builtin.checkIterable(obj)) {
            throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(obj) +
                "' object is not iterable");
        } else {
            return new Sk.builtin.iterator(obj);
        }
    } else {
        if (Sk.builtin.checkCallable(obj)) {
            return new Sk.builtin.iterator(obj, sentinel);
        } else {
            throw new TypeError("iter(v, w): v must be callable");
        }
    }
};

Sk.builtin.locals = function locals () {
    throw new Sk.builtin.NotImplementedError("locals is not yet implemented");
};
Sk.builtin.memoryview = function memoryview () {
    throw new Sk.builtin.NotImplementedError("memoryview is not yet implemented");
};

Sk.builtin.next_ = function next_ (iter, default_) {
    var nxt;
    Sk.builtin.pyCheckArgsLen("next", arguments.length, 1, 2);
    if (!iter.tp$iternext) {
        throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(iter) +
            "' object is not an iterator");
    }
    nxt = iter.tp$iternext();
    if (nxt === undefined) {
        if (default_) {
            return default_;
        }
        throw new Sk.builtin.StopIteration();
    }
    return nxt;
};

Sk.builtin.reload = function reload () {
    throw new Sk.builtin.NotImplementedError("reload is not yet implemented");
};
Sk.builtin.vars = function vars () {
    throw new Sk.builtin.NotImplementedError("vars is not yet implemented");
};
Sk.builtin.xrange = Sk.builtin.range;
Sk.builtin.apply_ = function apply_ () {
    throw new Sk.builtin.NotImplementedError("apply is not yet implemented");
};
Sk.builtin.buffer = function buffer_ () {
    throw new Sk.builtin.NotImplementedError("buffer is not yet implemented");
};
Sk.builtin.coerce = function coerce () {
    throw new Sk.builtin.NotImplementedError("coerce is not yet implemented");
};
Sk.builtin.intern = function intern () {
    throw new Sk.builtin.NotImplementedError("intern is not yet implemented");
};

/*
 Sk.builtinFiles = {};
 Sk.builtin.read = function read(x) {
 if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
 throw "File not found: '" + x + "'";
 return Sk.builtinFiles["files"][x];
 };
 Sk.builtinFiles = undefined;
 */
/*! https://mths.be/fromcodepoint v0.2.1 by @mathias */
if (!String.fromCodePoint) {
    (function() {
        var defineProperty = (function() {
            // IE 8 only supports `Object.defineProperty` on DOM elements
            var result;
            try {
                var object = {};
                var $defineProperty = Object.defineProperty;
                result = $defineProperty(object, "foo", object) && $defineProperty;
            } catch(error) {}
            return result;
        }());
        var stringFromCharCode = String.fromCharCode;
        var floor = Math.floor;
        var fromCodePoint = function(_) {
            var MAX_SIZE = 0x4000;
            var codeUnits = [];
            var highSurrogate;
            var lowSurrogate;
            var index = -1;
            var length = arguments.length;
            if (!length) {
                return "";
            }
            var result = "";
            while (++index < length) {
                var codePoint = Number(arguments[index]);
                if (
                    !isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
                    codePoint < 0 || // not a valid Unicode code point
                    codePoint > 0x10FFFF || // not a valid Unicode code point
                    floor(codePoint) != codePoint // not an integer
                ) {
                    throw RangeError("Invalid code point: " + codePoint);
                }
                if (codePoint <= 0xFFFF) { // BMP code point
                    codeUnits.push(codePoint);
                } else { // Astral code point; split in surrogate halves
                    // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                    codePoint -= 0x10000;
                    highSurrogate = (codePoint >> 10) + 0xD800;
                    lowSurrogate = (codePoint % 0x400) + 0xDC00;
                    codeUnits.push(highSurrogate, lowSurrogate);
                }
                if (index + 1 == length || codeUnits.length > MAX_SIZE) {
                    result += stringFromCharCode.apply(null, codeUnits);
                    codeUnits.length = 0;
                }
            }
            return result;
        };
        if (defineProperty) {
            defineProperty(String, "fromCodePoint", {
                "value": fromCodePoint,
                "configurable": true,
                "writable": true
            });
        } else {
            String.fromCodePoint = fromCodePoint;
        }
    }());
}
/*
 * The filename, line number, and column number of exceptions are
 * stored within the exception object.  Note that not all exceptions
 * clearly report the column number.  To customize the exception
 * message to use any/all of these fields, you can either modify
 * tp$str below to print the desired message, or use them in the
 * skulpt wrapper (i.e., runit) to present the exception message.
 */


/**
 * @constructor
 * @param {...Object|null} args
 */
Sk.builtin.BaseException = function (args) {
    var i, o;

    if (!(this instanceof Sk.builtin.BaseException)) {
        o = Object.create(Sk.builtin.BaseException.prototype);
        o.constructor.apply(o, arguments);
        return o;
    }

    args = Array.prototype.slice.call(arguments);
    // hackage to allow shorter throws
    for (i = 0; i < args.length; ++i) {
        if (typeof args[i] === "string") {
            args[i] = new Sk.builtin.str(args[i]);
        }
    }
    this.args = new Sk.builtin.tuple(args);
    this.traceback = [];

    // For errors occurring during normal execution, the line/col/etc
    // of the error are populated by each stack frame of the runtime code,
    // but we can seed it with the supplied parameters.
    if (this.args.sq$length() >= 3) {

        // if !this.args[1].v, this is an error, and the exception that causes it
        // probably needs to be fixed, but we mark as "<unknown>" for now
        this.traceback.push({lineno: this.args.v[2],
                             filename: this.args.v[1].v || "<unknown>"});
    }
};
Sk.abstr.setUpInheritance("BaseException", Sk.builtin.BaseException, Sk.builtin.object);

Sk.builtin.BaseException.prototype.tp$str = function () {
    var i;
    var ret = "";

    ret += this.tp$name;
    if (this.args) {
        ret += ": " + (this.args.v.length > 0 ? this.args.v[0].v : "");
    }
    if (this.traceback.length !== 0) {
        ret += " on line " + this.traceback[0].lineno;
    } else {
        ret += " at <unknown>";
    }

    if (this.args.v.length > 4) {
        ret += "\n" + this.args.v[4].v + "\n";
        for (i = 0; i < this.args.v[3]; ++i) {
            ret += " ";
        }
        ret += "^\n";
    }

    /*for (i = 0; i < this.traceback.length; i++) {
        ret += "\n  at " + this.traceback[i].filename + " line " + this.traceback[i].lineno;
        if ("colno" in this.traceback[i]) {
            ret += " column " + this.traceback[i].colno;
        }
    }*/

    return new Sk.builtin.str(ret);
};

Sk.builtin.BaseException.prototype.toString = function () {
    return this.tp$str().v;
};

// Create a descriptor to return the 'args' of an exception.
// This is a hack to get around a weird mismatch between builtin
// objects and proper types
Sk.builtin.BaseException.prototype.args = {
    "tp$descr_get": function(self, clstype) {
        return self.args;
    }
};

Sk.exportSymbol("Sk.builtin.BaseException", Sk.builtin.BaseException);

/**
 * @constructor
 * @extends Sk.builtin.BaseException
 * @param {...*} args
 */
Sk.builtin.Exception = function (args) {
    var o;
    if (!(this instanceof Sk.builtin.Exception)) {
        o = Object.create(Sk.builtin.Exception.prototype);
        o.constructor.apply(o, arguments);
        return o;
    }
    Sk.builtin.BaseException.apply(this, arguments);
};
Sk.abstr.setUpInheritance("Exception", Sk.builtin.Exception, Sk.builtin.BaseException);
Sk.exportSymbol("Sk.builtin.Exception", Sk.builtin.Exception);

/**
 * @constructor
 * @extends Sk.builtin.Exception
 * @param {...*} args
 */
Sk.builtin.StandardError = function (args) {
    var o;
    if (!(this instanceof Sk.builtin.StandardError)) {
        o = Object.create(Sk.builtin.StandardError.prototype);
        o.constructor.apply(o, arguments);
        return o;
    }
    Sk.builtin.Exception.apply(this, arguments);
};
Sk.abstr.setUpInheritance("StandardError", Sk.builtin.StandardError, Sk.builtin.Exception);
Sk.exportSymbol("Sk.builtin.StandardError", Sk.builtin.StandardError);

/**
 * @constructor
 * @extends Sk.builtin.StandardError
 * @param {...*} args
 */
Sk.builtin.AssertionError = function (args) {
    var o;
    if (!(this instanceof Sk.builtin.AssertionError)) {
        o = Object.create(Sk.builtin.AssertionError.prototype);
        o.constructor.apply(o, arguments);
        return o;
    }
    Sk.builtin.StandardError.apply(this, arguments);
};
Sk.abstr.setUpInheritance("AssertionError", Sk.builtin.AssertionError, Sk.builtin.StandardError);
Sk.exportSymbol("Sk.builtin.AssertionError", Sk.builtin.AssertionError);

/**
 * @constructor
 * @extends Sk.builtin.StandardError
 * @param {...*} args
 */
Sk.builtin.AttributeError = function (args) {
    var o;
    if (!(this instanceof Sk.builtin.AttributeError)) {
        o = Object.create(Sk.builtin.AttributeError.prototype);
        o.constructor.apply(o, arguments);
        return o;
    }
    Sk.builtin.StandardError.apply(this, arguments);
};
Sk.abstr.setUpInheritance("AttributeError", Sk.builtin.AttributeError, Sk.builtin.StandardError);

/**
 * @constructor
 * @extends Sk.builtin.StandardError
 * @param {...*} args
 */
Sk.builtin.ImportError = function (args) {
    var o;
    if (!(this instanceof Sk.builtin.ImportError)) {
        o = Object.create(Sk.builtin.ImportError.prototype);
        o.constructor.apply(o, arguments);
        return o;
    }
    Sk.builtin.StandardError.apply(this, arguments);
};
Sk.abstr.setUpInheritance("ImportError", Sk.builtin.ImportError, Sk.builtin.StandardError);

/**
 * @constructor
 * @extends Sk.builtin.StandardError
 * @param {...*} args
 */
Sk.builtin.IndentationError = function (args) {
    var o;
    if (!(this instanceof Sk.builtin.IndentationError)) {
        o = Object.create(Sk.builtin.IndentationError.prototype);
        o.constructor.apply(o, arguments);
        return o;
    }
    Sk.builtin.StandardError.apply(this, arguments);
};
Sk.abstr.setUpInheritance("IndentationError", Sk.builtin.IndentationError, Sk.builtin.StandardError);

/**
 * @constructor
 * @extends Sk.builtin.StandardError
 * @param {...*} args
 */
Sk.builtin.IndexError = function (args) {
    var o;
    if (!(this instanceof Sk.builtin.IndexError)) {
        o = Object.create(Sk.builtin.IndexError.prototype);
        o.constructor.apply(o, arguments);
        return o;
    }
    Sk.builtin.StandardError.apply(this, arguments);
};
Sk.abstr.setUpInheritance("IndexError", Sk.builtin.IndexError, Sk.builtin.StandardError);

/**
 * @constructor
 * @extends Sk.builtin.StandardError
 * @param {...*} args
 */
Sk.builtin.KeyError = function (args) {
    var o;
    if (!(this instanceof Sk.builtin.KeyError)) {
        o = Object.create(Sk.builtin.KeyError.prototype);
        o.constructor.apply(o, arguments);
        return o;
    }
    Sk.builtin.StandardError.apply(this, arguments);
};
Sk.abstr.setUpInheritance("KeyError", Sk.builtin.KeyError, Sk.builtin.StandardError);

/**
 * @constructor
 * @extends Sk.builtin.StandardError
 * @param {...*} args
 */
Sk.builtin.NameError = function (args) {
    var o;
    if (!(this instanceof Sk.builtin.NameError)) {
        o = Object.create(Sk.builtin.NameError.prototype);
        o.constructor.apply(o, arguments);
        return o;
    }
    Sk.builtin.StandardError.apply(this, arguments);
};
Sk.abstr.setUpInheritance("NameError", Sk.builtin.NameError, Sk.builtin.StandardError);

/**
 * @constructor
 * @extends Sk.builtin.StandardError
 * @param {...*} args
 */
Sk.builtin.UnboundLocalError = function (args) {
    var o;
    if (!(this instanceof Sk.builtin.UnboundLocalError)) {
        o = Object.create(Sk.builtin.UnboundLocalError.prototype);
        o.constructor.apply(o, arguments);
        return o;
    }
    Sk.builtin.StandardError.apply(this, arguments);
};
Sk.abstr.setUpInheritance("UnboundLocalError", Sk.builtin.UnboundLocalError, Sk.builtin.StandardError);

/**
 * @constructor
 * @extends Sk.builtin.StandardError
 * @param {...*} args
 */
Sk.builtin.OverflowError = function (args) {
    var o;
    if (!(this instanceof Sk.builtin.OverflowError)) {
        o = Object.create(Sk.builtin.OverflowError.prototype);
        o.constructor.apply(o, arguments);
        return o;
    }
    Sk.builtin.StandardError.apply(this, arguments);
};
Sk.abstr.setUpInheritance("OverflowError", Sk.builtin.OverflowError, Sk.builtin.StandardError);


/**
 * @constructor
 * @extends Sk.builtin.StandardError
 * @param {...*} args
 */
Sk.builtin.SyntaxError = function (args) {
    var o;
    if (!(this instanceof Sk.builtin.SyntaxError)) {
        o = Object.create(Sk.builtin.SyntaxError.prototype);
        o.constructor.apply(o, arguments);
        return o;
    }
    Sk.builtin.StandardError.apply(this, arguments);
};
Sk.abstr.setUpInheritance("SyntaxError", Sk.builtin.SyntaxError, Sk.builtin.StandardError);

/**
 * @constructor
 * @extends Sk.builtin.StandardError
 * @param {...*} args
 */
Sk.builtin.RuntimeError = function (args) {
    var o;
    if (!(this instanceof Sk.builtin.RuntimeError)) {
        o = Object.create(Sk.builtin.RuntimeError.prototype);
        o.constructor.apply(o, arguments);
        return o;
    }
    Sk.builtin.StandardError.apply(this, arguments);
};
Sk.abstr.setUpInheritance("RuntimeError", Sk.builtin.RuntimeError, Sk.builtin.StandardError);
Sk.exportSymbol("Sk.builtin.RuntimeError", Sk.builtin.RuntimeError);


/**
 * @constructor
 * @extends Sk.builtin.StandardError
 * @param {...*} args
 */
Sk.builtin.SuspensionError = function (args) {
    var o;
    if (!(this instanceof Sk.builtin.SuspensionError)) {
        o = Object.create(Sk.builtin.SuspensionError.prototype);
        o.constructor.apply(o, arguments);
        return o;
    }
    Sk.builtin.StandardError.apply(this, arguments);
};
Sk.abstr.setUpInheritance("SuspensionError", Sk.builtin.SuspensionError, Sk.builtin.StandardError);
Sk.exportSymbol("Sk.builtin.SuspensionError", Sk.builtin.SuspensionError);


/**
 * @constructor
 * @extends Sk.builtin.BaseException
 * @param {...*} args
 */
Sk.builtin.SystemExit = function (args) {
    var o;
    if (!(this instanceof Sk.builtin.SystemExit)) {
        o = Object.create(Sk.builtin.SystemExit.prototype);
        o.constructor.apply(o, arguments);
        return o;
    }
    Sk.builtin.BaseException.apply(this, arguments);
};
Sk.abstr.setUpInheritance("SystemExit", Sk.builtin.SystemExit, Sk.builtin.BaseException);
Sk.exportSymbol("Sk.builtin.SystemExit", Sk.builtin.SystemExit);


/**
 * @constructor
 * @extends Sk.builtin.StandardError
 * @param {...*} args
 */
Sk.builtin.TypeError = function (args) {
    var o;
    if (!(this instanceof Sk.builtin.TypeError)) {
        o = Object.create(Sk.builtin.TypeError.prototype);
        o.constructor.apply(o, arguments);
        return o;
    }
    Sk.builtin.StandardError.apply(this, arguments);
};
Sk.abstr.setUpInheritance("TypeError", Sk.builtin.TypeError, Sk.builtin.StandardError);
Sk.exportSymbol("Sk.builtin.TypeError", Sk.builtin.TypeError);
/**
 * @constructor
 * @extends Sk.builtin.StandardError
 * @param {...*} args
 */
Sk.builtin.ValueError = function (args) {
    var o;
    if (!(this instanceof Sk.builtin.ValueError)) {
        o = Object.create(Sk.builtin.ValueError.prototype);
        o.constructor.apply(o, arguments);
        return o;
    }
    Sk.builtin.StandardError.apply(this, arguments);
};
Sk.abstr.setUpInheritance("ValueError", Sk.builtin.ValueError, Sk.builtin.StandardError);
Sk.exportSymbol("Sk.builtin.ValueError", Sk.builtin.ValueError);

/**
 * @constructor
 * @extends Sk.builtin.StandardError
 * @param {...*} args
 */
Sk.builtin.ZeroDivisionError = function (args) {
    var o;
    if (!(this instanceof Sk.builtin.ZeroDivisionError)) {
        o = Object.create(Sk.builtin.ZeroDivisionError.prototype);
        o.constructor.apply(o, arguments);
        return o;
    }
    Sk.builtin.StandardError.apply(this, arguments);
};
Sk.abstr.setUpInheritance("ZeroDivisionError", Sk.builtin.ZeroDivisionError, Sk.builtin.StandardError);

/**
 * @constructor
 * @extends Sk.builtin.StandardError
 * @param {...*} args
 */
Sk.builtin.TimeLimitError = function (args) {
    var o;
    if (!(this instanceof Sk.builtin.TimeLimitError)) {
        o = Object.create(Sk.builtin.TimeLimitError.prototype);
        o.constructor.apply(o, arguments);
        return o;
    }
    Sk.builtin.StandardError.apply(this, arguments);
};
Sk.abstr.setUpInheritance("TimeLimitError", Sk.builtin.TimeLimitError, Sk.builtin.StandardError);
Sk.exportSymbol("Sk.builtin.TimeLimitError", Sk.builtin.TimeLimitError);

/**
 * @constructor
 * @extends Sk.builtin.StandardError
 * @param {...*} args
 */
Sk.builtin.IOError = function (args) {
    var o;
    if (!(this instanceof Sk.builtin.IOError)) {
        o = Object.create(Sk.builtin.IOError.prototype);
        o.constructor.apply(o, arguments);
        return o;
    }
    Sk.builtin.StandardError.apply(this, arguments);
};
Sk.abstr.setUpInheritance("IOError", Sk.builtin.IOError, Sk.builtin.StandardError);
Sk.exportSymbol("Sk.builtin.IOError", Sk.builtin.IOError);


/**
 * @constructor
 * @extends Sk.builtin.StandardError
 * @param {...*} args
 */
Sk.builtin.NotImplementedError = function (args) {
    var o;
    if (!(this instanceof Sk.builtin.NotImplementedError)) {
        o = Object.create(Sk.builtin.NotImplementedError.prototype);
        o.constructor.apply(o, arguments);
        return o;
    }
    Sk.builtin.StandardError.apply(this, arguments);
};
Sk.abstr.setUpInheritance("NotImplementedError", Sk.builtin.NotImplementedError, Sk.builtin.StandardError);
Sk.exportSymbol("Sk.builtin.NotImplementedError", Sk.builtin.NotImplementedError);

/**
 * @constructor
 * @extends Sk.builtin.StandardError
 * @param {...*} args
 */
Sk.builtin.NegativePowerError = function (args) {
    var o;
    if (!(this instanceof Sk.builtin.NegativePowerError)) {
        o = Object.create(Sk.builtin.NegativePowerError.prototype);
        o.constructor.apply(o, arguments);
        return o;
    }
    Sk.builtin.StandardError.apply(this, arguments);
};
Sk.abstr.setUpInheritance("NegativePowerError", Sk.builtin.NegativePowerError, Sk.builtin.StandardError);
Sk.exportSymbol("Sk.builtin.NegativePowerError", Sk.builtin.NegativePowerError);

/**
 * @constructor
 * @extends Sk.builtin.StandardError
 * @param {*} nativeError
 * @param {...*} args
 */
Sk.builtin.ExternalError = function (nativeError, args) {
    var o;
    if (!(this instanceof Sk.builtin.ExternalError)) {
        o = Object.create(Sk.builtin.ExternalError.prototype);
        o.constructor.apply(o, arguments);
        return o;
    }
    // Make the first argument a string, so it can be printed in Python without errors,
    // but save a reference to the real thing for Javascript consumption
    args = Array.prototype.slice.call(arguments);
    this.nativeError = args[0];
    if (!(args[0] instanceof Sk.builtin.str)) {
        args[0] = ""+args[0];
    }
    Sk.builtin.StandardError.apply(this, args);
};
Sk.abstr.setUpInheritance("ExternalError", Sk.builtin.ExternalError, Sk.builtin.StandardError);
Sk.exportSymbol("Sk.builtin.ExternalError", Sk.builtin.ExternalError);

/**
 * @constructor
 * @extends Sk.builtin.StandardError
 * @param {...*} args
 */
Sk.builtin.OperationError = function (args) {
    var o;
    if (!(this instanceof Sk.builtin.OperationError)) {
        o = Object.create(Sk.builtin.OperationError.prototype);
        o.constructor.apply(o, arguments);
        return o;
    }
    Sk.builtin.StandardError.apply(this, arguments);
};
Sk.abstr.setUpInheritance("OperationError", Sk.builtin.OperationError, Sk.builtin.StandardError);
Sk.exportSymbol("Sk.builtin.OperationError", Sk.builtin.OperationError);

/**
 * @constructor
 * @extends Sk.builtin.StandardError
 * @param {...*} args
 */
Sk.builtin.SystemError = function (args) {
    var o;
    if (!(this instanceof Sk.builtin.SystemError)) {
        o = Object.create(Sk.builtin.SystemError.prototype);
        o.constructor.apply(o, arguments);
        return o;
    }
    Sk.builtin.StandardError.apply(this, arguments);
};
Sk.abstr.setUpInheritance("SystemError", Sk.builtin.SystemError, Sk.builtin.StandardError);
Sk.exportSymbol("Sk.builtin.SystemError", Sk.builtin.SystemError);

/**
 * @constructor
 * @extends Sk.builtin.Exception
 * @param {...*} args
 */
Sk.builtin.StopIteration = function (args) {
    var o;
    if (!(this instanceof Sk.builtin.StopIteration)) {
        o = Object.create(Sk.builtin.StopIteration.prototype);
        o.constructor.apply(o, arguments);
        return o;
    }
    Sk.builtin.Exception.apply(this, arguments);
};
Sk.abstr.setUpInheritance("StopIteration", Sk.builtin.StopIteration, Sk.builtin.Exception);
Sk.exportSymbol("Sk.builtin.StopIteration", Sk.builtin.StopIteration);


// TODO: Extract into sys.exc_info(). Work out how the heck
// to find out what exceptions are being processed by parent stack frames...
Sk.builtin.getExcInfo = function(e) {
    var v = [e.ob$type || Sk.builtin.none.none$, e, Sk.builtin.none.none$];

    // TODO create a Traceback object for the third tuple element

    return new Sk.builtin.tuple(v);
};
// NOT exported

/**
 * @constructor
 *
 * @param {Sk.builtin.func|Sk.builtin.method} func
 * @param {Object} self
 * @param {Sk.builtin.type|Sk.builtin.none} klass
 * @param {boolean=} builtin
 * 
 * co_varnames and co_name come from generated code, must access as dict.
 */
Sk.builtin.method = function (func, self, klass, builtin) {
    if (!(this instanceof Sk.builtin.method)) {
        Sk.builtin.pyCheckArgsLen("method", arguments.length, 3, 3);
        if (!Sk.builtin.checkCallable(func)) {
            throw new Sk.builtin.TypeError("First argument must be callable");
        }
        if (self.ob$type === undefined) {
            throw new Sk.builtin.TypeError("Second argument must be object of known type");
        }
        return new Sk.builtin.method(func, self, klass);
    }
    this.tp$name = func.tp$name;
    this.im_func = func;
    this.im_self = self || Sk.builtin.none.none$;
    this.im_class = klass || Sk.builtin.none.none$;
    this.im_builtin = builtin;
    this["$d"] = {
        im_func: func,
        im_self: self,
        im_class: klass
    };
};

Sk.exportSymbol("Sk.builtin.method", Sk.builtin.method);
Sk.abstr.setUpInheritance("instancemethod", Sk.builtin.method, Sk.builtin.object);

Sk.builtin.method.prototype.tp$name = "method";

Sk.builtin.method.prototype.tp$call = function (args, kw) {
    // Sk.asserts.assert(this.im_func instanceof Sk.builtin.func);

    // 'args' and 'kw' get mucked around with heavily in applyOrSuspend();
    // changing it here is OK.
    if (this.im_self !== Sk.builtin.none.none$) {
        args.unshift(this.im_self);
    }

    // if there is no first argument or
    // if the first argument is not a subclass of the class this method belongs to we throw an error
    // unless it's a builtin method, because they shouldn't have been __get__ and left in this unbound
    // state.
    if (this.im_self === Sk.builtin.none.none$) {
        var getMessage = (function (reason) {
            return "unbound method " + this.tp$name + "() must be called with " + Sk.abstr.typeName(this.im_class) + " instance as first argument (got " + reason + " instead)";
        }).bind(this);

        if (args.length > 0) {
            if (this.im_class != Sk.builtin.none.none$ && !Sk.builtin.issubclass(args[0].ob$type, this.im_class) && !this.im_builtin) {
                throw new Sk.builtin.TypeError(getMessage(Sk.abstr.typeName(args[0].ob$type) + " instance"));
            }
        } else {
            throw new Sk.builtin.TypeError(getMessage("nothing"));
        }
    }

    // A method call is just a call to this.im_func with 'self' on the beginning of the args.
    // Do the necessary.
    return this.im_func.tp$call(args, kw);
};

Sk.builtin.method.prototype.tp$descr_get = function (obj, objtype) {
    Sk.asserts.assert(obj !== undefined && objtype !== undefined);
    return new Sk.builtin.method(this, obj, objtype, this.im_builtin);
};

Sk.builtin.method.pythonFunctions = ["__get__"];

Sk.builtin.method.prototype.__get__ = function __get__(self, instance, owner) {
    Sk.builtin.pyCheckArgsLen("__get__", arguments.length, 1, 2, false, true);
    if (instance === Sk.builtin.none.none$ && owner === Sk.builtin.none.none$) {
        throw new Sk.builtin.TypeError("__get__(None, None) is invalid");
    }

    // if the owner is specified it needs to be a a subclass of im_self
    if (owner && owner !== Sk.builtin.none.none$) {
        if (Sk.builtin.issubclass(owner, self.im_class)) {
            return self.tp$descr_get(instance, owner);
        }

        // if it's not we're not bound
        return self;
    }

    // use the original type to get a bound object
    return self.tp$descr_get(instance, Sk.builtin.none.none$);
};

Sk.builtin.method.prototype["$r"] = function () {
    if (this.im_builtin) {
        return new Sk.builtin.str("<built-in method " + this.tp$name + " of type object>");
    }

    if (this.im_self === Sk.builtin.none.none$) {
        return new Sk.builtin.str("<unbound method " + Sk.abstr.typeName(this.im_class) + "." + this.tp$name + ">");
    }

    var owner = this.im_class !== Sk.builtin.none.none$ ? Sk.abstr.typeName(this.im_class) : "?";
    return new Sk.builtin.str("<bound method " + owner  + "." + this.tp$name + " of " + Sk.ffi.remapToJs(Sk.misceval.objectRepr(this.im_self)) + ">");
};
/**
 * @namespace Sk.misceval
 *
 */
Sk.misceval = {};

/*
  Suspension object format:
  {resume: function() {...}, // the continuation - returns either another suspension or the return value
   data: <copied down from innermost level>,
   optional: <if true, can be resumed immediately (eg debug stops)>,
   child: <Suspension, or null if we are the innermost level>,
   $blk: <>, $loc: <>, $gbl: <>, $exc: <>, $err: <>, [$cell: <>],
  }
*/

/**
 *
 * Hi kids lets make a suspension...
 * @constructor
 * @param{function(?)=} resume A function to be called on resume. child is resumed first and its return value is passed to this function.
 * @param{Object=} child A child suspension. 'optional' will be copied from here if supplied.
 * @param{Object=} data Data attached to this suspension. Will be copied from child if not supplied.
 */
Sk.misceval.Suspension = function Suspension(resume, child, data) {
    this.$isSuspension = true;
    if (resume !== undefined && child !== undefined) {
        this.resume = function() { return resume(child.resume()); };
    }
    this.child = child;
    this.optional = child !== undefined && child.optional;
    if (data === undefined && child !== undefined) {
        this.data = child.data;
    } else {
        this.data = data;
    }
};
Sk.exportSymbol("Sk.misceval.Suspension", Sk.misceval.Suspension);

/**
 *
 * Well this seems pretty obvious by the name what it should do..
 *
 * @param{Sk.misceval.Suspension} susp
 * @param{string=} message
 */
Sk.misceval.retryOptionalSuspensionOrThrow = function (susp, message) {
    while (susp instanceof Sk.misceval.Suspension) {
        if (!susp.optional) {
            throw new Sk.builtin.SuspensionError(message || "Cannot call a function that blocks or suspends here");
        }
        susp = susp.resume();
    }
    return susp;
};
Sk.exportSymbol("Sk.misceval.retryOptionalSuspensionOrThrow", Sk.misceval.retryOptionalSuspensionOrThrow);

/**
 * Check if the given object is valid to use as an index. Only ints, or if the object has an `__index__` method.
 * @param o
 * @returns {boolean}
 */
Sk.misceval.isIndex = function (o) {
    if (Sk.builtin.checkInt(o)) {
        return true;
    }
    if (Sk.abstr.lookupSpecial(o, Sk.builtin.str.$index)) {
        return true;
    }
    return false;
};
Sk.exportSymbol("Sk.misceval.isIndex", Sk.misceval.isIndex);

Sk.misceval.asIndex = function (o) {
    var idxfn, ret;

    if (!Sk.misceval.isIndex(o)) {
        return undefined;
    }
    if (o === null) {
        return undefined;
    }
    if (o === true) {
        return 1;
    }
    if (o === false) {
        return 0;
    }
    if (typeof o === "number") {
        return o;
    }
    if (o.constructor === Sk.builtin.int_) {
        return o.v;
    }
    if (o.constructor === Sk.builtin.lng) {
        return o.tp$index();
    }
    if (o.constructor === Sk.builtin.bool) {
        return Sk.builtin.asnum$(o);
    }
    idxfn = Sk.abstr.lookupSpecial(o, Sk.builtin.str.$index);
    if (idxfn) {
        ret = Sk.misceval.callsimArray(idxfn, [o]);
        if (!Sk.builtin.checkInt(ret)) {
            throw new Sk.builtin.TypeError("__index__ returned non-(int,long) (type " +
                                           Sk.abstr.typeName(ret) + ")");
        }
        return Sk.builtin.asnum$(ret);
    }
    Sk.asserts.fail("todo asIndex;");
};

/**
 * return u[v:w]
 */
Sk.misceval.applySlice = function (u, v, w, canSuspend) {
    var ihigh;
    var ilow;
    if (u.sq$slice && Sk.misceval.isIndex(v) && Sk.misceval.isIndex(w)) {
        ilow = Sk.misceval.asIndex(v);
        if (ilow === undefined) {
            ilow = 0;
        }
        ihigh = Sk.misceval.asIndex(w);
        if (ihigh === undefined) {
            ihigh = 1e100;
        }
        return Sk.abstr.sequenceGetSlice(u, ilow, ihigh);
    }
    return Sk.abstr.objectGetItem(u, new Sk.builtin.slice(v, w, null), canSuspend);
};
Sk.exportSymbol("Sk.misceval.applySlice", Sk.misceval.applySlice);

/**
 * u[v:w] = x
 */
Sk.misceval.assignSlice = function (u, v, w, x, canSuspend) {
    var slice;
    var ihigh;
    var ilow;
    if (u.sq$ass_slice && Sk.misceval.isIndex(v) && Sk.misceval.isIndex(w)) {
        ilow = Sk.misceval.asIndex(v) || 0;
        ihigh = Sk.misceval.asIndex(w) || 1e100;
        if (x === null) {
            Sk.abstr.sequenceDelSlice(u, ilow, ihigh);
        } else {
            Sk.abstr.sequenceSetSlice(u, ilow, ihigh, x);
        }
    } else {
        slice = new Sk.builtin.slice(v, w);
        if (x === null) {
            return Sk.abstr.objectDelItem(u, slice);
        } else {
            return Sk.abstr.objectSetItem(u, slice, x, canSuspend);
        }
    }
};
Sk.exportSymbol("Sk.misceval.assignSlice", Sk.misceval.assignSlice);

/**
 * Used by min() and max() to get an array from arbitrary input.
 * Note that this does no validation, just coercion.
 */
Sk.misceval.arrayFromArguments = function (args) {
    // If args is not a single thing return as is
    var it, i;
    var res;
    var arg;
    if (args.length != 1) {
        return args;
    }
    arg = args[0];
    if (arg instanceof Sk.builtin.set) {
        // this is a Sk.builtin.set
        arg = arg.tp$iter().$obj;
    } else if (arg instanceof Sk.builtin.dict) {
        // this is a Sk.builtin.list
        arg = Sk.builtin.dict.prototype["keys"].func_code(arg);
    }

    // shouldn't else if here as the above may output lists to arg.
    if (arg instanceof Sk.builtin.list || arg instanceof Sk.builtin.tuple) {
        return arg.v;
    } else if (Sk.builtin.checkIterable(arg)) {
        // handle arbitrary iterable (strings, generators, etc.)
        res = [];
        for (it = Sk.abstr.iter(arg), i = it.tp$iternext();
             i !== undefined; i = it.tp$iternext()) {
            res.push(i);
        }
        return res;
    }

    throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(arg) + "' object is not iterable");
};
Sk.exportSymbol("Sk.misceval.arrayFromArguments", Sk.misceval.arrayFromArguments);

/**
 * for reversed comparison: Gt -> Lt, etc.
 */
Sk.misceval.swappedOp_ = {
    "Eq"   : "Eq",
    "NotEq": "NotEq",
    "Lt"   : "GtE",
    "LtE"  : "Gt",
    "Gt"   : "LtE",
    "GtE"  : "Lt",
    "Is"   : "IsNot",
    "IsNot": "Is",
    "In_"  : "NotIn",
    "NotIn": "In_"
};

/**
* @param{*} v
* @param{*} w
* @param{string} op
* @param{boolean=} canSuspend
 */
Sk.misceval.richCompareBool = function (v, w, op, canSuspend) {
    // v and w must be Python objects. will return Javascript true or false for internal use only
    // if you want to return a value from richCompareBool to Python you must wrap as Sk.builtin.bool first
    var wname,
        vname,
        ret,
        swapped_method,
        method,
        swapped_shortcut,
        shortcut,
        v_has_shortcut,
        w_has_shortcut,
        op2shortcut,
        vcmp,
        wcmp,
        w_seq_type,
        w_num_type,
        v_seq_type,
        v_num_type,
        sequence_types,
        numeric_types,
        w_type,
        v_type;

    Sk.asserts.assert((v !== null) && (v !== undefined), "passed null or undefined parameter to Sk.misceval.richCompareBool");
    Sk.asserts.assert((w !== null) && (w !== undefined), "passed null or undefined parameter to Sk.misceval.richCompareBool");

    v_type = new Sk.builtin.type(v);
    w_type = new Sk.builtin.type(w);

    // Python has specific rules when comparing two different builtin types
    // currently, this code will execute even if the objects are not builtin types
    // but will fall through and not return anything in this section
    if ((v_type !== w_type) &&
        (op === "GtE" || op === "Gt" || op === "LtE" || op === "Lt")) {
        // note: sets are omitted here because they can only be compared to other sets
        numeric_types = [Sk.builtin.float_.prototype.ob$type,
            Sk.builtin.int_.prototype.ob$type,
            Sk.builtin.lng.prototype.ob$type,
            Sk.builtin.bool.prototype.ob$type];
        sequence_types = [Sk.builtin.dict.prototype.ob$type,
            Sk.builtin.enumerate.prototype.ob$type,
            Sk.builtin.list.prototype.ob$type,
            Sk.builtin.str.prototype.ob$type,
            Sk.builtin.tuple.prototype.ob$type];

        v_num_type = numeric_types.indexOf(v_type);
        v_seq_type = sequence_types.indexOf(v_type);
        w_num_type = numeric_types.indexOf(w_type);
        w_seq_type = sequence_types.indexOf(w_type);

        // NoneTypes are considered less than any other type in Python
        // note: this only handles comparing NoneType with any non-NoneType.
        // Comparing NoneType with NoneType is handled further down.
        if (v_type === Sk.builtin.none.prototype.ob$type) {
            switch (op) {
                case "Lt":
                    return true;
                case "LtE":
                    return true;
                case "Gt":
                    return false;
                case "GtE":
                    return false;
            }
        }

        if (w_type === Sk.builtin.none.prototype.ob$type) {
            switch (op) {
                case "Lt":
                    return false;
                case "LtE":
                    return false;
                case "Gt":
                    return true;
                case "GtE":
                    return true;
            }
        }

        // numeric types are always considered smaller than sequence types in Python
        if (v_num_type !== -1 && w_seq_type !== -1) {
            switch (op) {
                case "Lt":
                    return true;
                case "LtE":
                    return true;
                case "Gt":
                    return false;
                case "GtE":
                    return false;
            }
        }

        if (v_seq_type !== -1 && w_num_type !== -1) {
            switch (op) {
                case "Lt":
                    return false;
                case "LtE":
                    return false;
                case "Gt":
                    return true;
                case "GtE":
                    return true;
            }
        }

        // in Python, different sequence types are ordered alphabetically
        // by name so that dict < list < str < tuple
        if (v_seq_type !== -1 && w_seq_type !== -1) {
            switch (op) {
                case "Lt":
                    return v_seq_type < w_seq_type;
                case "LtE":
                    return v_seq_type <= w_seq_type;
                case "Gt":
                    return v_seq_type > w_seq_type;
                case "GtE":
                    return v_seq_type >= w_seq_type;
            }
        }
    }


    // handle identity and membership comparisons
    if (op === "Is") {
        if (v instanceof Sk.builtin.int_ && w instanceof Sk.builtin.int_) {
            return v.numberCompare(w) === 0;
        } else if (v instanceof Sk.builtin.float_ && w instanceof Sk.builtin.float_) {
            return v.numberCompare(w) === 0;
        } else if (v instanceof Sk.builtin.lng && w instanceof Sk.builtin.lng) {
            return v.longCompare(w) === 0;
        }

        return v === w;
    }

    if (op === "IsNot") {
        if (v instanceof Sk.builtin.int_ && w instanceof Sk.builtin.int_) {
            return v.numberCompare(w) !== 0;
        } else if (v instanceof Sk.builtin.float_ && w instanceof Sk.builtin.float_) {
            return v.numberCompare(w) !== 0;
        }else if (v instanceof Sk.builtin.lng && w instanceof Sk.builtin.lng) {
            return v.longCompare(w) !== 0;
        }

        return v !== w;
    }

    if (op === "In") {
        return Sk.misceval.chain(Sk.abstr.sequenceContains(w, v, canSuspend), Sk.misceval.isTrue);
    }
    if (op === "NotIn") {
        return Sk.misceval.chain(Sk.abstr.sequenceContains(w, v, canSuspend),
                                 function(x) { return !Sk.misceval.isTrue(x); });
    }

    // Call Javascript shortcut method if exists for either object

    op2shortcut = {
        "Eq"   : "ob$eq",
        "NotEq": "ob$ne",
        "Gt"   : "ob$gt",
        "GtE"  : "ob$ge",
        "Lt"   : "ob$lt",
        "LtE"  : "ob$le"
    };

    shortcut = op2shortcut[op];
    v_has_shortcut = v.constructor.prototype.hasOwnProperty(shortcut);
    if (v_has_shortcut) {
        if ((ret = v[shortcut](w)) !== Sk.builtin.NotImplemented.NotImplemented$) {
            return Sk.misceval.isTrue(ret);
        }
    }

    swapped_shortcut = op2shortcut[Sk.misceval.swappedOp_[op]];
    w_has_shortcut = w.constructor.prototype.hasOwnProperty(swapped_shortcut);
    if (w_has_shortcut) {

        if ((ret = w[swapped_shortcut](v)) !== Sk.builtin.NotImplemented.NotImplemented$) {
            return Sk.misceval.isTrue(ret);
        }
    }

    // use comparison methods if they are given for either object
    if (v.tp$richcompare && (ret = v.tp$richcompare(w, op)) !== undefined) {
        if (ret != Sk.builtin.NotImplemented.NotImplemented$) {
            return Sk.misceval.isTrue(ret);
        }
    }

    if (w.tp$richcompare && (ret = w.tp$richcompare(v, Sk.misceval.swappedOp_[op])) !== undefined) {
        if (ret != Sk.builtin.NotImplemented.NotImplemented$) {
            return Sk.misceval.isTrue(ret);
        }
    }


    // depending on the op, try left:op:right, and if not, then
    // right:reversed-top:left

    method = Sk.abstr.lookupSpecial(v, Sk.misceval.op2method_[op]);
    if (method && !v_has_shortcut) {
        ret = Sk.misceval.callsimArray(method, [v, w]);
        if (ret != Sk.builtin.NotImplemented.NotImplemented$) {
            return Sk.misceval.isTrue(ret);
        }
    }

    swapped_method = Sk.abstr.lookupSpecial(w, Sk.misceval.op2method_[Sk.misceval.swappedOp_[op]]);
    if (swapped_method && !w_has_shortcut) {
        ret = Sk.misceval.callsimArray(swapped_method, [w, v]);
        if (ret != Sk.builtin.NotImplemented.NotImplemented$) {
            return Sk.misceval.isTrue(ret);
        }
    }

    vcmp = Sk.abstr.lookupSpecial(v, Sk.builtin.str.$cmp);
    if (vcmp) {
        try {
            ret = Sk.misceval.callsimArray(vcmp, [v, w]);
            if (Sk.builtin.checkNumber(ret)) {
                ret = Sk.builtin.asnum$(ret);
                if (op === "Eq") {
                    return ret === 0;
                } else if (op === "NotEq") {
                    return ret !== 0;
                } else if (op === "Lt") {
                    return ret < 0;
                } else if (op === "Gt") {
                    return ret > 0;
                } else if (op === "LtE") {
                    return ret <= 0;
                } else if (op === "GtE") {
                    return ret >= 0;
                }
            }

            if (ret !== Sk.builtin.NotImplemented.NotImplemented$) {
                throw new Sk.builtin.TypeError("comparison did not return an int");
            }
        } catch (e) {
            throw new Sk.builtin.TypeError("comparison did not return an int");
        }
    }

    wcmp = Sk.abstr.lookupSpecial(w, Sk.builtin.str.$cmp);
    if (wcmp) {
        // note, flipped on return value and call
        try {
            ret = Sk.misceval.callsimArray(wcmp, [w, v]);
            if (Sk.builtin.checkNumber(ret)) {
                ret = Sk.builtin.asnum$(ret);
                if (op === "Eq") {
                    return ret === 0;
                } else if (op === "NotEq") {
                    return ret !== 0;
                } else if (op === "Lt") {
                    return ret > 0;
                } else if (op === "Gt") {
                    return ret < 0;
                } else if (op === "LtE") {
                    return ret >= 0;
                } else if (op === "GtE") {
                    return ret <= 0;
                }
            }

            if (ret !== Sk.builtin.NotImplemented.NotImplemented$) {
                throw new Sk.builtin.TypeError("comparison did not return an int");
            }
        } catch (e) {
            throw new Sk.builtin.TypeError("comparison did not return an int");
        }
    }

    // handle special cases for comparing None with None or Bool with Bool
    if (((v instanceof Sk.builtin.none) && (w instanceof Sk.builtin.none)) ||
        ((v instanceof Sk.builtin.bool) && (w instanceof Sk.builtin.bool))) {
        // Javascript happens to return the same values when comparing null
        // with null or true/false with true/false as Python does when
        // comparing None with None or True/False with True/False

        if (op === "Eq") {
            return v.v === w.v;
        }
        if (op === "NotEq") {
            return v.v !== w.v;
        }
        if (op === "Gt") {
            return v.v > w.v;
        }
        if (op === "GtE") {
            return v.v >= w.v;
        }
        if (op === "Lt") {
            return v.v < w.v;
        }
        if (op === "LtE") {
            return v.v <= w.v;
        }
    }


    // handle equality comparisons for any remaining objects
    if (op === "Eq") {
        if ((v instanceof Sk.builtin.str) && (w instanceof Sk.builtin.str)) {
            return v.v === w.v;
        }
        return v === w;
    }
    if (op === "NotEq") {
        if ((v instanceof Sk.builtin.str) && (w instanceof Sk.builtin.str)) {
            return v.v !== w.v;
        }
        return v !== w;
    }

    vname = Sk.abstr.typeName(v);
    wname = Sk.abstr.typeName(w);
    throw new Sk.builtin.ValueError("don't know how to compare '" + vname + "' and '" + wname + "'");
};
Sk.exportSymbol("Sk.misceval.richCompareBool", Sk.misceval.richCompareBool);

Sk.misceval.objectRepr = function (v) {
    Sk.asserts.assert(v !== undefined, "trying to repr undefined");
    if ((v === null) || (v instanceof Sk.builtin.none)) {
        return new Sk.builtin.str("None");
    } else if (v === true) {
        // todo; these should be consts
        return new Sk.builtin.str("True");
    } else if (v === false) {
        return new Sk.builtin.str("False");
    } else if (typeof v === "number") {
        return new Sk.builtin.str("" + v);
    } else if (typeof v === "string") {
        return new Sk.builtin.str(v);
    } else if (!v["$r"]) {
        if (v.tp$name) {
            return new Sk.builtin.str("<" + v.tp$name + " object>");
        } else {
            return new Sk.builtin.str("<unknown>");
        }
    } else if (v.constructor === Sk.builtin.float_) {
        if (v.v === Infinity) {
            return new Sk.builtin.str("inf");
        } else if (v.v === -Infinity) {
            return new Sk.builtin.str("-inf");
        } else {
            return v["$r"]();
        }
    } else if (v.constructor === Sk.builtin.int_) {
        return v["$r"]();
    } else {
        return v["$r"]();
    }
};
Sk.exportSymbol("Sk.misceval.objectRepr", Sk.misceval.objectRepr);

Sk.misceval.opAllowsEquality = function (op) {
    switch (op) {
        case "LtE":
        case "Eq":
        case "GtE":
            return true;
    }
    return false;
};
Sk.exportSymbol("Sk.misceval.opAllowsEquality", Sk.misceval.opAllowsEquality);

Sk.misceval.isTrue = function (x) {
    var ret;
    if (x === true) {
        return true;
    }
    if (x === false) {
        return false;
    }
    if (x === null) {
        return false;
    }
    if (x.constructor === Sk.builtin.none) {
        return false;
    }

    if (x.constructor === Sk.builtin.NotImplemented) {
        return false;
    }

    if (x.constructor === Sk.builtin.bool) {
        return x.v;
    }
    if (typeof x === "number") {
        return x !== 0;
    }
    if (x instanceof Sk.builtin.lng) {
        return x.nb$nonzero();
    }
    if (x.constructor === Sk.builtin.int_) {
        return x.v !== 0;
    }
    if (x.constructor === Sk.builtin.float_) {
        return x.v !== 0;
    }
    if (x["__nonzero__"]) {
        ret = Sk.misceval.callsimArray(x["__nonzero__"], [x]);
        if (!Sk.builtin.checkInt(ret)) {
            throw new Sk.builtin.TypeError("__nonzero__ should return an int");
        }
        return Sk.builtin.asnum$(ret) !== 0;
    }
    if (x["__len__"]) {
        ret = Sk.misceval.callsimArray(x["__len__"], [x]);
        if (!Sk.builtin.checkInt(ret)) {
            throw new Sk.builtin.TypeError("__len__ should return an int");
        }
        return Sk.builtin.asnum$(ret) !== 0;
    }
    if (x.mp$length) {
        return Sk.builtin.asnum$(x.mp$length()) !== 0;
    }
    if (x.sq$length) {
        return Sk.builtin.asnum$(x.sq$length()) !== 0;
    }
    return true;
};
Sk.exportSymbol("Sk.misceval.isTrue", Sk.misceval.isTrue);

Sk.misceval.softspace_ = false;
Sk.misceval.print_ = function (x) {
    var s;

    function isspace(c) {
        return c === "\n" || c === "\t" || c === "\r";
    }

    if (Sk.misceval.softspace_) {
        if (x !== "\n") {
            Sk.output(" ");
        }
        Sk.misceval.softspace_ = false;
    }

    s = new Sk.builtin.str(x);

    return Sk.misceval.chain(Sk.importModule("sys", false, true), function(sys) {
        return Sk.misceval.apply(sys["$d"]["stdout"]["write"], undefined, undefined, undefined, [sys["$d"]["stdout"], s]);
    }, function () {
        if (s.v.length === 0 || !isspace(s.v[s.v.length - 1]) || s.v[s.v.length - 1] === " ") {
            Sk.misceval.softspace_ = true;
        }
    });
};
Sk.exportSymbol("Sk.misceval.print_", Sk.misceval.print_);

/**
 * @param {string} name
 * @param {Object=} other generally globals
 */
Sk.misceval.loadname = function (name, other) {
    var bi;
    var v = other[name];
    if (v !== undefined) {
        if (typeof v === "function" && v["$d"] === undefined && v["tp$name"] === undefined) {
            return v();
        }
        return v;
    }

    bi = Sk.builtins[name];
    if (bi !== undefined) {
        return bi;
    }

    throw new Sk.builtin.NameError("name '" + Sk.unfixReserved(name) + "' is not defined");
};
Sk.exportSymbol("Sk.misceval.loadname", Sk.misceval.loadname);

/**
 *
 * Notes on necessity for 'call()':
 *
 * Classes are callable in python to create an instance of the class. If
 * we're calling "C()" we cannot tell at the call site whether we're
 * calling a standard function, or instantiating a class.
 *
 * JS does not support user-level callables. So, we can't use the normal
 * prototype hierarchy to make the class inherit from a 'class' type
 * where the various tp$getattr, etc. methods would live.
 *
 * Instead, we must copy all the methods from the prototype of our class
 * type onto every instance of the class constructor function object.
 * That way, both "C()" and "C.tp$getattr(...)" can still work. This is
 * of course quite expensive.
 *
 * The alternative would be to indirect all calls (whether classes or
 * regular functions) through something like C.$call(...). In the case
 * of class construction, $call could then call the constructor after
 * munging arguments to pass them on. This would impose a penalty on
 * regular function calls unfortunately, as they would have to do the
 * same thing.
 *
 * Note that the same problem exists for function objects too (a "def"
 * creates a function object that also has properties). It just happens
 * that attributes on classes in python are much more useful and common
 * that the attributes on functions.
 *
 * Also note, that for full python compatibility we have to do the $call
 * method because any python object could have a __call__ method which
 * makes the python object callable too. So, unless we were to make
 * *all* objects simply (function(){...}) and use the dict to create
 * hierarchy, there would be no way to call that python user function. I
 * think I'm prepared to sacrifice __call__ support, or only support it
 * post-ECMA5 or something.
 *
 * Is using (function(){...}) as the only object type too crazy?
 * Probably. Better or worse than having two levels of function
 * invocation for every function call?
 *
 * For a class `C' with instance `inst' we have the following cases:
 *
 * 1. C.attr
 *
 * 2. C.staticmeth()
 *
 * 3. x = C.staticmeth; x()
 *
 * 4. inst = C()
 *
 * 5. inst.attr
 *
 * 6. inst.meth()
 *
 * 7. x = inst.meth; x()
 *
 * 8. inst(), where C defines a __call__
 *
 * Because in general these are accomplished by a helper function
 * (tp$getattr/setattr/slice/ass_slice/etc.) it seems appropriate to add
 * a call that generally just calls through, but sometimes handles the
 * unusual cases. Once ECMA-5 is more broadly supported we can revisit
 * and hopefully optimize.
 *
 * @param {Object} func the thing to call
 * @param {Object=} kwdict **kwargs
 * @param {Object=} varargseq **args
 * @param {Object=} kws keyword args or undef
 * @param {...*} args stuff to pass it
 *
 *
 * TODO I think all the above is out of date.
 */
Sk.misceval.call = function (func, kwdict, varargseq, kws, args) {
    args = Array.prototype.slice.call(arguments, 4);
    // todo; possibly inline apply to avoid extra stack frame creation
    return Sk.misceval.apply(func, kwdict, varargseq, kws, args);
};
Sk.exportSymbol("Sk.misceval.call", Sk.misceval.call);

/**
 * @param {?Object} suspensionHandlers
 * @param {Object} func the thing to call
 * @param {Object=} kwdict **kwargs
 * @param {Object=} varargseq **args
 * @param {Object=} kws keyword args or undef
 * @param {...*} args stuff to pass it
 *
 *
 * TODO I think all the above is out of date.
 */

Sk.misceval.callAsync = function (suspensionHandlers, func, kwdict, varargseq, kws, args) {
    args = Array.prototype.slice.call(arguments, 5);
    // todo; possibly inline apply to avoid extra stack frame creation
    return Sk.misceval.applyAsync(suspensionHandlers, func, kwdict, varargseq, kws, args);
};
Sk.exportSymbol("Sk.misceval.callAsync", Sk.misceval.callAsync);


Sk.misceval.callOrSuspend = function (func, kwdict, varargseq, kws, args) {
    args = Array.prototype.slice.call(arguments, 4);
    // todo; possibly inline apply to avoid extra stack frame creation
    return Sk.misceval.applyOrSuspend(func, kwdict, varargseq, kws, args);
};
Sk.exportSymbol("Sk.misceval.callOrSuspend", Sk.misceval.callOrSuspend);

/**
 * @param {Object} func the thing to call
 * @param {...*} args stuff to pass it
 */
Sk.misceval.callsim = function (func, args) {
    args = Array.prototype.slice.call(arguments, 1);
    return Sk.misceval.apply(func, undefined, undefined, undefined, args);
};
Sk.exportSymbol("Sk.misceval.callsim", Sk.misceval.callsim);

/**
 * @param {Object} func the thing to call
 * @param {Array=} args an array of arguments to pass to the func
 *
 * Does the same thing as callsim without expensive call to Array.slice.
 * Requires args to be a Javascript array.
 */
Sk.misceval.callsimArray = function(func, args) {
    var argarray = args ? args : [];
    return Sk.misceval.apply(func, undefined, undefined, undefined, argarray);
};
Sk.exportSymbol("Sk.misceval.callsimArray", Sk.misceval.callsimArray);

/**
 * @param {?Object} suspensionHandlers any custom suspension handlers
 * @param {Object} func the thing to call
 * @param {...*} args stuff to pass it
 */
Sk.misceval.callsimAsync = function (suspensionHandlers, func, args) {
    args = Array.prototype.slice.call(arguments, 2);
    return Sk.misceval.applyAsync(suspensionHandlers, func, undefined, undefined, undefined, args);
};
Sk.exportSymbol("Sk.misceval.callsimAsync", Sk.misceval.callsimAsync);


/**
 * @param {Object} func the thing to call
 * @param {...*} args stuff to pass it
 */
Sk.misceval.callsimOrSuspend = function (func, args) {
    args = Array.prototype.slice.call(arguments, 1);
    return Sk.misceval.applyOrSuspend(func, undefined, undefined, undefined, args);
};
Sk.exportSymbol("Sk.misceval.callsimOrSuspend", Sk.misceval.callsimOrSuspend);

/**
 * @param {Object} func the thing to call
 * @param {Array=} args an array of arguments to pass to the func
 *
 * Does the same thing as callsimOrSuspend without expensive call to
 * Array.slice.  Requires args to be a Javascript array.
 */
Sk.misceval.callsimOrSuspendArray = function (func, args) {
    var argarray = args ? args : [];
    return Sk.misceval.applyOrSuspend(func, undefined, undefined, undefined, argarray);
};
Sk.exportSymbol("Sk.misceval.callsimOrSuspendArray", Sk.misceval.callsimOrSuspendArray);

/**
 * Wrap Sk.misceval.applyOrSuspend, but throw an error if we suspend
 */
Sk.misceval.apply = function (func, kwdict, varargseq, kws, args) {
    var r = Sk.misceval.applyOrSuspend(func, kwdict, varargseq, kws, args);
    if (r instanceof Sk.misceval.Suspension) {
        return Sk.misceval.retryOptionalSuspensionOrThrow(r);
    } else {
        return r;
    }
};
Sk.exportSymbol("Sk.misceval.apply", Sk.misceval.apply);

/**
 * Wraps anything that can return an Sk.misceval.Suspension, and returns a
 * JS Promise with the result. Also takes an object map of suspension handlers:
 * pass in {"suspType": function (susp) {} }, and your function will be called
 * with the Suspension object if susp.type=="suspType". The type "*" will match
 * all otherwise unhandled suspensions.
 *
 * A suspension handler should return a Promise yielding the return value of
 * r.resume() - ie, either the final return value of this call or another
 * Suspension. That is, the null suspension handler is:
 *
 *     function handler(susp) {
 *       return new Promise(function(resolve, reject) {
 *         try {
 *           resolve(susp.resume());
 *         } catch(e) {
 *           reject(e);
 *         }
 *       });
 *     }
 *
 * Alternatively, a handler can return null to perform the default action for
 * that suspension type.
 *
 * (Note: do *not* call asyncToPromise() in a suspension handler; this will
 * create a new Promise object for each such suspension that occurs)
 *
 * asyncToPromise() returns a Promise that will be resolved with the final
 * return value, or rejected with an exception if one is thrown.
 *
 * @param{function()} suspendablefn returns either a result or a Suspension
 * @param{Object=} suspHandlers an object map of suspension handlers
 */
Sk.misceval.asyncToPromise = function(suspendablefn, suspHandlers) {
    return new Promise(function(resolve, reject) {
        try {
            var r = suspendablefn();

            (function handleResponse (r) {
                try {
                    // jsh*nt insists these be defined outside the loop
                    var resume = function() {
                        try {
                            handleResponse(r.resume());
                        } catch (e) {
                            reject(e);
                        }
                    };
                    var resumeWithData = function resolved(x) {
                        try {
                            r.data["result"] = x;
                            resume();
                        } catch(e) {
                            reject(e);
                        }
                    };
                    var resumeWithError = function rejected(e) {
                        try {
                            r.data["error"] = e;
                            resume();
                        } catch(ex) {
                            reject(ex);
                        }
                    };


                    while (r instanceof Sk.misceval.Suspension) {

                        var handler = suspHandlers && (suspHandlers[r.data["type"]] || suspHandlers["*"]);

                        if (handler) {
                            var handlerPromise = handler(r);
                            if (handlerPromise) {
                                handlerPromise.then(handleResponse, reject);
                                return;
                            }
                        }

                        if (r.data["type"] == "Sk.promise") {
                            r.data["promise"].then(resumeWithData, resumeWithError);
                            return;

                        } else if (r.data["type"] == "Sk.yield") {
                            // Assumes all yields are optional, as Sk.setTimeout might
                            // not be able to yield.
                            //Sk.setTimeout(resume, 0);
                            setImmediate(resume);
                            return;

                        } else if (r.data["type"] == "Sk.delay") {
                            //Sk.setTimeout(resume, 1);
                            setImmediate(resume);
                            return;

                        } else if (r.optional) {
                            // Unhandled optional suspensions just get
                            // resumed immediately, and we go around the loop again.
                            r = r.resume();

                        } else {
                            // Unhandled, non-optional suspension.
                            throw new Sk.builtin.SuspensionError("Unhandled non-optional suspension of type '"+r.data["type"]+"'");
                        }
                    }

                    resolve(r);
                } catch(e) {
                    reject(e);
                }
            })(r);

        } catch (e) {
            reject(e);
        }
    });
};
Sk.exportSymbol("Sk.misceval.asyncToPromise", Sk.misceval.asyncToPromise);

Sk.misceval.applyAsync = function (suspHandlers, func, kwdict, varargseq, kws, args) {
    return Sk.misceval.asyncToPromise(function() {
        return Sk.misceval.applyOrSuspend(func, kwdict, varargseq, kws, args);
    }, suspHandlers);
};
Sk.exportSymbol("Sk.misceval.applyAsync", Sk.misceval.applyAsync);

/**
 * Chain together a set of functions, each of which might return a value or
 * an Sk.misceval.Suspension. Each function is called with the return value of
 * the preceding function, but does not see any suspensions. If a function suspends,
 * Sk.misceval.chain() returns a suspension that will resume the chain once an actual
 * return value is available.
 *
 * The idea is to allow a Promise-like chaining of possibly-suspending steps without
 * repeating boilerplate suspend-and-resume code.
 *
 * For example, imagine we call Sk.misceval.chain(x, f).
 *  - If x is a value, we return f(x).
 *  - If x is a suspension, we suspend. We will suspend and resume until we get a
 *    return value, and then we will return f(<resumed-value).
 * This can be expanded to an arbitrary number of functions
 * (eg Sk.misceval.chain(x, f, g), which is equivalent to chain(chain(x, f), g).)
 * @template T
 * @param {T}              initialValue
 * @param {...function(T)} chainedFns
 */

Sk.misceval.chain = function (initialValue, chainedFns) {
    // We try to minimse overhead when nothing suspends (the common case)
    var i = 1, value = initialValue, j, fs;

    while (true) {
        if (i == arguments.length) {
            return value;
        }
        if (value && value.$isSuspension) { break; } // oops, slow case
        value = arguments[i](value);
        i++;
    }

    // Okay, we've suspended at least once, so we're taking the slow(er) path.

    // Copy our remaining arguments into an array (inline, because passing
    // "arguments" out of a function kills the V8 optimiser).
    // (discussion: https://github.com/skulpt/skulpt/pull/552)
    fs = new Array(arguments.length - i);

    for (j = 0; j < arguments.length - i; j++) {
        fs[j] = arguments[i+j];
    }

    j = 0;

    return (function nextStep(r) {
        while (j < fs.length) {
            if (r instanceof Sk.misceval.Suspension) {
                return new Sk.misceval.Suspension(nextStep, r);
            }

            r = fs[j](r);
            j++;
        }

        return r;
    })(value);
};
Sk.exportSymbol("Sk.misceval.chain", Sk.misceval.chain);


/**
 * Catch any exceptions thrown by a function, or by resuming any suspension it
 * returns.
 *
 *     var result = Sk.misceval.tryCatch(asyncFunc, function(err) {
 *       console.log(err);
 *     });
 *
 * Because exceptions are returned asynchronously aswell you can't catch them
 * with a try/catch. That's what this function is for.
 */
Sk.misceval.tryCatch = function (tryFn, catchFn) {
    var r;

    try {
        r = tryFn();
    } catch(e) {
        return catchFn(e);
    }

    if (r instanceof Sk.misceval.Suspension) {
        var susp = new Sk.misceval.Suspension(undefined, r);
        susp.resume = function() { return Sk.misceval.tryCatch(r.resume, catchFn); };
        return susp;
    } else {
        return r;
    }
};
Sk.exportSymbol("Sk.misceval.tryCatch", Sk.misceval.tryCatch);

/**
 * Perform a suspension-aware for-each on an iterator, without
 * blowing up the stack.
 * forFn() is called for each element in the iterator, with two
 * arguments: the current element and the previous return value
 * of forFn() (or initialValue on the first call). In this way,
 * iterFor() can be used as a simple for loop, or alternatively
 * as a 'reduce' operation. The return value of the final call to
 * forFn() will be the return value of iterFor() (after all
 * suspensions are resumed, that is; if the iterator is empty then
 * initialValue will be returned.)
 *
 * The iteration can be terminated early, by returning
 * an instance of Sk.misceval.Break. If an argument is given to
 * the Sk.misceval.Break() constructor, that value will be
 * returned from iterFor(). It is therefore possible to use
 * iterFor() on infinite iterators.
 *
 * @param {*} iter
 * @param {function(*,*=)} forFn
 * @param {*=} initialValue
 */
Sk.misceval.iterFor = function (iter, forFn, initialValue) {
    var prevValue = initialValue;

    var breakOrIterNext = function(r) {
        prevValue = r;
        return (r instanceof Sk.misceval.Break) ? r : iter.tp$iternext(true);
    };

    return (function nextStep(i) {
        while (i !== undefined) {
            if (i instanceof Sk.misceval.Suspension) {
                return new Sk.misceval.Suspension(nextStep, i);
            }

            if (i === Sk.misceval.Break || i instanceof Sk.misceval.Break) {
                return i.brValue;
            }

            i = Sk.misceval.chain(
                forFn(i, prevValue),
                breakOrIterNext
            );
        }
        return prevValue;
    })(iter.tp$iternext(true));
};
Sk.exportSymbol("Sk.misceval.iterFor", Sk.misceval.iterFor);

/**
 * A special value to return from an iterFor() function,
 * to abort the iteration. Optionally supply a value for iterFor() to return
 * (defaults to 'undefined')
 *
 * @constructor
 * @param {*=}  brValue
 */
Sk.misceval.Break = function(brValue) {
    if (!(this instanceof Sk.misceval.Break)) {
        return new Sk.misceval.Break(brValue);
    }

    this.brValue = brValue;
};
Sk.exportSymbol("Sk.misceval.Break", Sk.misceval.Break);

/**
 * same as Sk.misceval.call except args is an actual array, rather than
 * varargs.
 */
Sk.misceval.applyOrSuspend = function (func, kwdict, varargseq, kws, args) {
    var fcall;
    var it, i;

    if (func === null || func instanceof Sk.builtin.none) {
        throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(func) + "' object is not callable");
    }

    if (typeof func === "function" && func.tp$call === undefined) {
        func = new Sk.builtin.func(func);
    }

    fcall = func.tp$call;
    if (fcall !== undefined) {
        if (varargseq) {
            for (it = varargseq.tp$iter(), i = it.tp$iternext(); i !== undefined; i = it.tp$iternext()) {
                args.push(i);
            }
        }

        if (kwdict) {
            for (it = Sk.abstr.iter(kwdict), i = it.tp$iternext(); i!== undefined; i = it.tp$iternext()) {
                if (!Sk.builtin.checkString(i)) {
                    throw new Sk.builtin.TypeError("Function keywords must be strings");
                }
                kws.push(i.v);
                kws.push(Sk.abstr.objectGetItem(kwdict, i, false));
            }
        }
        return fcall.call(func, args, kws, kwdict);
    }

    // todo; can we push this into a tp$call somewhere so there's
    // not redundant checks everywhere for all of these __x__ ones?
    fcall = func.__call__;
    if (fcall !== undefined) {
        // func is actually the object here because we got __call__
        // from it. todo; should probably use descr_get here
        args.unshift(func);
        return Sk.misceval.apply(fcall, kwdict, varargseq, kws, args);
    }

    throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(func) + "' object is not callable");
};
Sk.exportSymbol("Sk.misceval.applyOrSuspend", Sk.misceval.applyOrSuspend);

/**
 * Do the boilerplate suspension stuff.
 */
Sk.misceval.promiseToSuspension = function(promise) {
    var suspension = new Sk.misceval.Suspension();

    suspension.resume = function() {
        if (suspension.data["error"]) {
            throw suspension.data["error"];
        }

        return suspension.data["result"];
    };

    suspension.data = {
        type: "Sk.promise",
        promise: promise
    };

    return suspension;
};
Sk.exportSymbol("Sk.misceval.promiseToSuspension", Sk.misceval.promiseToSuspension);

/**
 * Constructs a class object given a code object representing the body
 * of the class, the name of the class, and the list of bases.
 *
 * There are no "old-style" classes in Skulpt, so use the user-specified
 * metaclass (todo;) if there is one, the type of the 0th base class if
 * there's bases, or otherwise the 'type' type.
 *
 * The func code object is passed a (js) dict for its locals which it
 * stores everything into.
 *
 * The metaclass is then called as metaclass(name, bases, locals) and
 * should return a newly constructed class object.
 *
 */
Sk.misceval.buildClass = function (globals, func, name, bases, cell) {
    // todo; metaclass
    var klass;
    var meta = Sk.builtin.type;

    var l_cell = cell === undefined ? {} : cell;
    var locals = {};

    // init the dict for the class
    func(globals, locals, l_cell);
    // ToDo: check if func contains the __meta__ attribute
    // or if the bases contain __meta__
    // new Syntax would be different

    // file's __name__ is class's __module__
    locals.__module__ = globals["__name__"];
    var _name = new Sk.builtin.str(name);
    var _bases = new Sk.builtin.tuple(bases);
    var _locals = [];
    var key;

    // build array for python dict
    for (key in locals) {
        if (!locals.hasOwnProperty(key)) {
            //The current property key not a direct property of p
            continue;
        }
        _locals.push(new Sk.builtin.str(key)); // push key
        _locals.push(locals[key]); // push associated value
    }
    _locals = new Sk.builtin.dict(_locals);

    klass = Sk.misceval.callsimArray(meta, [_name, _bases, _locals]);

    return klass;
};
Sk.exportSymbol("Sk.misceval.buildClass", Sk.misceval.buildClass);
/**
 * @constructor
 * Sk.builtin.seqtype
 *
 * @description
 * Abstract class for Python sequence types.
 *
 * @extends {Sk.builtin.object}
 *
 * @return {undefined} Cannot instantiate a Sk.builtin.seqtype object
 */
Sk.builtin.seqtype = function () {

    throw new Sk.builtin.ExternalError("Cannot instantiate abstract Sk.builtin.seqtype class");

};

Sk.abstr.setUpInheritance("SequenceType", Sk.builtin.seqtype, Sk.builtin.object);

Sk.builtin.seqtype.sk$abstract = true;

/**
 * Python wrapper of `__len__` method.
 *
 * @name  __len__
 * @instance
 * @memberOf Sk.builtin.seqtype.prototype
 */
Sk.builtin.seqtype.prototype["__len__"] = new Sk.builtin.func(function (self) {

    Sk.builtin.pyCheckArgsLen("__len__", arguments.length, 0, 0, false, true);

    return new Sk.builtin.int_(self.sq$length());    

});

/**
 * Python wrapper of `__iter__` method.
 *
 * @name  __iter__
 * @instance
 * @memberOf Sk.builtin.seqtype.prototype
 */
Sk.builtin.seqtype.prototype["__iter__"] = new Sk.builtin.func(function (self) {

    Sk.builtin.pyCheckArgsLen("__iter__", arguments.length, 0, 0, false, true);

    return self.tp$iter();

});

/**
 * Python wrapper of `__contains__` method.
 *
 * @name  __contains__
 * @instance
 * @memberOf Sk.builtin.seqtype.prototype
 */
Sk.builtin.seqtype.prototype["__contains__"] = new Sk.builtin.func(function (self, item) {

    Sk.builtin.pyCheckArgsLen("__contains__", arguments.length, 1, 1, false, true);

    if (self.sq$contains(item)) {
        return Sk.builtin.bool.true$;
    } else {
        return Sk.builtin.bool.false$;
    }

});

/**
 * Python wrapper of `__getitem__` method.
 *
 * @name  __getitem__
 * @instance
 * @memberOf Sk.builtin.seqtype.prototype
 */
Sk.builtin.seqtype.prototype["__getitem__"] = new Sk.builtin.func(function (self, key) {

    Sk.builtin.pyCheckArgsLen("__getitem__", arguments.length, 1, 1, false, true);

    return self.mp$subscript(key);

});

/**
 * Python wrapper of `__add__` method.
 *
 * @name  __add__
 * @instance
 * @memberOf Sk.builtin.seqtype.prototype
 */
Sk.builtin.seqtype.prototype["__add__"] = new Sk.builtin.func(function (self, other) {

    Sk.builtin.pyCheckArgsLen("__add__", arguments.length, 1, 1, false, true);

    return self.sq$concat(other);

});

/**
 * Python wrapper of `__mul__` method.
 *
 * @name  __mul__
 * @instance
 * @memberOf Sk.builtin.seqtype.prototype
 */
Sk.builtin.seqtype.prototype["__mul__"] = new Sk.builtin.func(function (self, n) {

    Sk.builtin.pyCheckArgsLen("__mul__", arguments.length, 1, 1, false, true);

    if (!Sk.misceval.isIndex(n)) {
        throw new Sk.builtin.TypeError("can't multiply sequence by non-int of type '" + Sk.abstr.typeName(n) + "'");
    }

    return self.sq$repeat(n);

});

/**
 * Python wrapper of `__rmul__` method.
 *
 * @name  __rmul__
 * @instance
 * @memberOf Sk.builtin.seqtype.prototype
 */
Sk.builtin.seqtype.prototype["__rmul__"] = new Sk.builtin.func(function (self, n) {

    Sk.builtin.pyCheckArgsLen("__rmul__", arguments.length, 1, 1, false, true);

    return self.sq$repeat(n);    

});
/**
 * @constructor
 * @param {Array.<Object>=} L
 * @param {boolean=} canSuspend (defaults to true in this case, as list() is used directly from Python)
 * @extends Sk.builtin.object
 */
Sk.builtin.list = function (L, canSuspend) {
    var v, it, thisList;

    if (this instanceof Sk.builtin.list) {
        canSuspend = canSuspend || false;
    } else {
        // Default to true in this case, because 'list' gets called directly from Python
        return new Sk.builtin.list(L, canSuspend || true);
    }

    this.__class__ = Sk.builtin.list;

    if (L === undefined) {
        v = [];
    } else if (Object.prototype.toString.apply(L) === "[object Array]") {
        v = L;
    } else if (Sk.builtin.checkIterable(L)) {
        v = [];
        it = Sk.abstr.iter(L);

        thisList = this;

        return (function next(i) {
            while(true) {
                if (i instanceof Sk.misceval.Suspension) {
                    return new Sk.misceval.Suspension(next, i);
                } else if (i === undefined) {
                    // done!
                    thisList.v = v;
                    return thisList;
                } else {
                    v.push(i);
                    i = it.tp$iternext(canSuspend);
                }
            }
        })(it.tp$iternext(canSuspend));
    } else {
        throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(L)+ "' " +"object is not iterable");
    }

    this["v"] = this.v = v;
    return this;
};

Sk.abstr.setUpInheritance("list", Sk.builtin.list, Sk.builtin.seqtype);
Sk.abstr.markUnhashable(Sk.builtin.list);

Sk.builtin.list.prototype.list_concat_ = function (other) {
    // other not a list
    var i;
    var ret;
    if (!other.__class__ || other.__class__ != Sk.builtin.list) {
        throw new Sk.builtin.TypeError("can only concatenate list to list");
    }

    ret = this.v.slice();
    for (i = 0; i < other.v.length; ++i) {
        ret.push(other.v[i]);
    }
    return new Sk.builtin.list(ret, false);
};

Sk.builtin.list.prototype.list_extend_ = function (other) {
    var it, i;
    var newb;
    if (!Sk.builtin.checkIterable(other)) {
        throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(other) +
            "' object is not iterable");
    }

    if (this == other) {
        // Handle extending list with itself
        newb = [];
        for (it = Sk.abstr.iter(other), i = it.tp$iternext(); i !== undefined; i = it.tp$iternext()) {
            newb.push(i);
        }

        // Concatenate
        this.v.push.apply(this.v, newb);
    } else {
        for (it = Sk.abstr.iter(other), i = it.tp$iternext(); i !== undefined; i = it.tp$iternext()) {
            this.v.push(i);
        }
    }

    return this;
};

Sk.builtin.list.prototype.list_del_item_ = function (i) {
    i = Sk.builtin.asnum$(i);
    if (i < 0 || i >= this.v.length) {
        throw new Sk.builtin.IndexError("list assignment index out of range");
    }
    this.list_del_slice_(i, i + 1);
};

Sk.builtin.list.prototype.list_del_slice_ = function (ilow, ihigh) {
    var args;
    ilow = Sk.builtin.asnum$(ilow);
    ihigh = Sk.builtin.asnum$(ihigh);
    args = [];
    args.unshift(ihigh - ilow);
    args.unshift(ilow);
    this.v.splice.apply(this.v, args);
};

Sk.builtin.list.prototype.list_ass_item_ = function (i, v) {
    i = Sk.builtin.asnum$(i);
    if (i < 0 || i >= this.v.length) {
        throw new Sk.builtin.IndexError("list assignment index out of range");
    }
    this.v[i] = v;
};

Sk.builtin.list.prototype.list_ass_slice_ = function (ilow, ihigh, v) {
    var args;
    ilow = Sk.builtin.asnum$(ilow);
    ihigh = Sk.builtin.asnum$(ihigh);

    if (Sk.builtin.checkIterable(v)) {
        args = new Sk.builtin.list(v, false).v.slice(0);
    } else {
        throw new Sk.builtin.TypeError("can only assign an iterable");
    }
    args.unshift(ihigh - ilow);
    args.unshift(ilow);
    this.v.splice.apply(this.v, args);
};

Sk.builtin.list.prototype["$r"] = function () {
    var it, i;
    var ret = [];
    for (it = Sk.abstr.iter(this), i = it.tp$iternext(); i !== undefined; i = it.tp$iternext()) {
        if(i === this) {
            ret.push("[...]");
        } else {
            ret.push(Sk.misceval.objectRepr(i).v);
        }
    }
    return new Sk.builtin.str("[" + ret.join(", ") + "]");
};

Sk.builtin.list.prototype.tp$richcompare = function (w, op) {
    // todo; can't figure out where cpy handles this silly case (test/run/t96.py)
    // perhaps by trapping a stack overflow? otherwise i'm not sure for more
    // complicated cases. bleh
    //
    // if the comparison allows for equality then short-circuit it here
    var k;
    var i;
    var wl;
    var vl;
    var v;
    if (this === w && Sk.misceval.opAllowsEquality(op)) {
        return true;
    }

    // w not a list
    if (!w.__class__ || w.__class__ != Sk.builtin.list) {
        // shortcuts for eq/not
        if (op === "Eq") {
            return false;
        }
        if (op === "NotEq") {
            return true;
        }

        // todo; other types should have an arbitrary order
        return false;
    }

    v = this.v;
    w = w.v;
    vl = v.length;
    wl = w.length;

    for (i = 0; i < vl && i < wl; ++i) {
        k = Sk.misceval.richCompareBool(v[i], w[i], "Eq");
        if (!k) {
            break;
        }
    }

    if (i >= vl || i >= wl) {
        // no more items to compare, compare sizes
        switch (op) {
            case "Lt":
                return vl < wl;
            case "LtE":
                return vl <= wl;
            case "Eq":
                return vl === wl;
            case "NotEq":
                return vl !== wl;
            case "Gt":
                return vl > wl;
            case "GtE":
                return vl >= wl;
            default:
                Sk.asserts.fail();
        }
    }

    // we have an item that's different

    // shortcuts for eq/not
    if (op === "Eq") {
        return false;
    }
    if (op === "NotEq") {
        return true;
    }

    // or, compare the differing element using the proper operator
    return Sk.misceval.richCompareBool(v[i], w[i], op);
};

Sk.builtin.list.prototype.__iter__ = new Sk.builtin.func(function (self) {
    Sk.builtin.pyCheckArgsLen("__iter__", arguments.length, 0, 0, true, false);
    return new Sk.builtin.list_iter_(self);
});

Sk.builtin.list.prototype.tp$iter = function () {
    return new Sk.builtin.list_iter_(this);
};

Sk.builtin.list.prototype.sq$length = function () {
    return this.v.length;
};
Sk.builtin.list.prototype.sq$concat = Sk.builtin.list.prototype.list_concat_;
Sk.builtin.list.prototype.nb$add = Sk.builtin.list.prototype.list_concat_;
Sk.builtin.list.prototype.nb$inplace_add = Sk.builtin.list.prototype.list_extend_;
Sk.builtin.list.prototype.sq$repeat = function (n) {
    var j;
    var i;
    var ret;
    if (!Sk.misceval.isIndex(n)) {
        throw new Sk.builtin.TypeError("can't multiply sequence by non-int of type '" + Sk.abstr.typeName(n) + "'");
    }

    n = Sk.misceval.asIndex(n);
    ret = [];
    for (i = 0; i < n; ++i) {
        for (j = 0; j < this.v.length; ++j) {
            ret.push(this.v[j]);
        }
    }
    return new Sk.builtin.list(ret, false);
};
Sk.builtin.list.prototype.nb$multiply = Sk.builtin.list.prototype.sq$repeat;
Sk.builtin.list.prototype.nb$inplace_multiply = function(n) {
    var j;
    var i;
    var len;
    if (!Sk.misceval.isIndex(n)) {
        throw new Sk.builtin.TypeError("can't multiply sequence by non-int of type '" + Sk.abstr.typeName(n) + "'");
    }

    // works on list itself --> inplace
    n = Sk.misceval.asIndex(n);
    len = this.v.length;
    for (i = 1; i < n; ++i) {
        for (j = 0; j < len; ++j) {
            this.v.push(this.v[j]);
        }
    }

    return this;
};

/*
 Sk.builtin.list.prototype.sq$item = list_item;
 Sk.builtin.list.prototype.sq$slice = list_slice;
 */
Sk.builtin.list.prototype.sq$ass_item = Sk.builtin.list.prototype.list_ass_item_;
Sk.builtin.list.prototype.sq$del_item = Sk.builtin.list.prototype.list_del_item_;
Sk.builtin.list.prototype.sq$ass_slice = Sk.builtin.list.prototype.list_ass_slice_;
Sk.builtin.list.prototype.sq$del_slice = Sk.builtin.list.prototype.list_del_slice_;

Sk.builtin.list.prototype.sq$contains = function (item) {
    var it, i;

    for (it = this.tp$iter(), i = it.tp$iternext(); i !== undefined; i = it.tp$iternext()) {
        if (Sk.misceval.richCompareBool(i, item, "Eq")) {
            return true;
        }
    }
    return false;
};

Sk.builtin.list.prototype.__contains__ = new Sk.builtin.func(function(self, item) {
    Sk.builtin.pyCheckArgsLen("__contains__", arguments.length, 2, 2);
    return new Sk.builtin.bool(self.sq$contains(item));
});

/*
 Sk.builtin.list.prototype.sq$inplace_concat = list_inplace_concat;
 Sk.builtin.list.prototype.sq$inplace_repeat = list_inplace_repeat;
 */

Sk.builtin.list.prototype.list_subscript_ = function (index) {
    var ret;
    var i;
    if (Sk.misceval.isIndex(index)) {
        i = Sk.misceval.asIndex(index);
        if (i !== undefined) {
            if (i < 0) {
                i = this.v.length + i;
            }
            if (i < 0 || i >= this.v.length) {
                throw new Sk.builtin.IndexError("list index out of range");
            }
            return this.v[i];
        }
    } else if (index instanceof Sk.builtin.slice) {
        ret = [];
        index.sssiter$(this, function (i, wrt) {
            ret.push(wrt.v[i]);
        });
        return new Sk.builtin.list(ret, false);
    }

    throw new Sk.builtin.TypeError("list indices must be integers, not " + Sk.abstr.typeName(index));
};

Sk.builtin.list.prototype.list_ass_subscript_ = function (index, value) {
    var i;
    var j;
    var tosub;
    var indices;
    if (Sk.misceval.isIndex(index)) {
        i = Sk.misceval.asIndex(index);
        if (i !== undefined) {
            if (i < 0) {
                i = this.v.length + i;
            }
            this.list_ass_item_(i, value);
            return;
        }
    } else if (index instanceof Sk.builtin.slice) {
        indices = index.slice_indices_(this.v.length);
        if (indices[2] === 1) {
            this.list_ass_slice_(indices[0], indices[1], value);
        } else {
            tosub = [];
            index.sssiter$(this, function (i, wrt) {
                tosub.push(i);
            });
            j = 0;
            if (tosub.length !== value.v.length) {
                throw new Sk.builtin.ValueError("attempt to assign sequence of size " + value.v.length + " to extended slice of size " + tosub.length);
            }
            for (i = 0; i < tosub.length; ++i) {
                this.v.splice(tosub[i], 1, value.v[j]);
                j += 1;
            }
        }
        return;
    }

    throw new Sk.builtin.TypeError("list indices must be integers, not " + Sk.abstr.typeName(index));
};

Sk.builtin.list.prototype.list_del_subscript_ = function (index) {
    var offdir;
    var dec;
    var self;
    var indices;
    var i;
    if (Sk.misceval.isIndex(index)) {
        i = Sk.misceval.asIndex(index);
        if (i !== undefined) {
            if (i < 0) {
                i = this.v.length + i;
            }
            this.list_del_item_(i);
            return;
        }
    } else if (index instanceof Sk.builtin.slice) {
        indices = index.slice_indices_(this.v.length);
        if (indices[2] === 1) {
            this.list_del_slice_(indices[0], indices[1]);
        } else {
            self = this;
            dec = 0; // offset of removal for next index (because we'll have removed, but the iterator is giving orig indices)
            offdir = indices[2] > 0 ? 1 : 0;
            index.sssiter$(this, function (i, wrt) {
                self.v.splice(i - dec, 1);
                dec += offdir;
            });
        }
        return;
    }

    throw new Sk.builtin.TypeError("list indices must be integers, not " + typeof index);
};

Sk.builtin.list.prototype.mp$subscript = Sk.builtin.list.prototype.list_subscript_;
Sk.builtin.list.prototype.mp$ass_subscript = Sk.builtin.list.prototype.list_ass_subscript_;
Sk.builtin.list.prototype.mp$del_subscript = Sk.builtin.list.prototype.list_del_subscript_;

Sk.builtin.list.prototype.__getitem__ = new Sk.builtin.func(function (self, index) {
    return Sk.builtin.list.prototype.list_subscript_.call(self, index);
});

Sk.builtin.list.prototype.__setitem__ = new Sk.builtin.func(function (self, index, val) {
    return Sk.builtin.list.prototype.list_ass_subscript_.call(self, index, val);
});

Sk.builtin.list.prototype.__delitem__ = new Sk.builtin.func(function (self, index) {
    return Sk.builtin.list.prototype.list_del_subscript_.call(self, index);
});

/**
 * @param {?=} self
 * @param {?=} cmp optional
 * @param {?=} key optional
 * @param {?=} reverse optional
 */
Sk.builtin.list.prototype.list_sort_ = function sort(self, cmp, key, reverse) {
    var mucked;
    var j;
    var keyvalue;
    var item;
    var i;
    var zero;
    var timsort;
    var has_key = key !== undefined && key !== null && key !== Sk.builtin.none.none$;
    var has_cmp = cmp !== undefined && cmp !== null && cmp !== Sk.builtin.none.none$;
    var rev;

    if (reverse === undefined) {
        rev = false;
    } else if (reverse === Sk.builtin.none.none$) {
        throw new Sk.builtin.TypeError("an integer is required");
    } else {
        rev = Sk.misceval.isTrue(reverse);
    }

    timsort = new Sk.builtin.timSort(self);

    self.v = [];
    zero = new Sk.builtin.int_(0);

    if (has_key) {
        if (has_cmp) {
            timsort.lt = function (a, b) {
                var res = Sk.misceval.callsimArray(cmp, [a[0], b[0]]);
                return Sk.misceval.richCompareBool(res, zero, "Lt");
            };
        } else {
            timsort.lt = function (a, b) {
                return Sk.misceval.richCompareBool(a[0], b[0], "Lt");
            };
        }
        for (i = 0; i < timsort.listlength; i++) {
            item = timsort.list.v[i];
            keyvalue = Sk.misceval.callsimArray(key, [item]);
            timsort.list.v[i] = [keyvalue, item];
        }
    } else if (has_cmp) {
        timsort.lt = function (a, b) {
            var res = Sk.misceval.callsimArray(cmp, [a, b]);
            return Sk.misceval.richCompareBool(res, zero, "Lt");
        };
    }

    if (rev) {
        timsort.list.list_reverse_(timsort.list);
    }

    timsort.sort();

    if (rev) {
        timsort.list.list_reverse_(timsort.list);
    }

    if (has_key) {
        for (j = 0; j < timsort.listlength; j++) {
            item = timsort.list.v[j][1];
            timsort.list.v[j] = item;
        }
    }

    mucked = self.sq$length() > 0;

    self.v = timsort.list.v;

    if (mucked) {
        throw new Sk.builtin.OperationError("list modified during sort");
    }

    return Sk.builtin.none.none$;
};
Sk.builtin.list.prototype.list_sort_.co_varnames = ["__self__", "cmp", "key", "reverse"];
Sk.builtin.list.prototype.list_sort_.$defaults = [Sk.builtin.none.none$, Sk.builtin.none.none$, false];

/**
 * @param {Sk.builtin.list=} self optional
 **/
Sk.builtin.list.prototype.list_reverse_ = function (self) {
    var i;
    var newarr;
    var old;
    var len;
    Sk.builtin.pyCheckArgsLen("reverse", arguments.length, 1, 1);

    len = self.v.length;
    old = self.v;
    newarr = [];
    for (i = len - 1; i > -1; --i) {
        newarr.push(old[i]);
    }
    self["v"] = newarr;
    return Sk.builtin.none.none$;
};

//Sk.builtin.list.prototype.__reversed__ = todo;

Sk.builtin.list.prototype["append"] = new Sk.builtin.func(function (self, item) {
    Sk.builtin.pyCheckArgsLen("append", arguments.length, 2, 2);

    self.v.push(item);
    return Sk.builtin.none.none$;
});

Sk.builtin.list.prototype["insert"] = new Sk.builtin.func(function (self, i, x) {
    Sk.builtin.pyCheckArgsLen("insert", arguments.length, 3, 3);
    if (!Sk.builtin.checkNumber(i)) {
        throw new Sk.builtin.TypeError("an integer is required");
    }

    i = Sk.builtin.asnum$(i);
    if (i < 0) {
        i = i + self.v.length;
    }
    if (i < 0) {
        i = 0;
    } else if (i > self.v.length) {
        i = self.v.length;
    }
    self.v.splice(i, 0, x);
    return Sk.builtin.none.none$;
});

Sk.builtin.list.prototype["extend"] = new Sk.builtin.func(function (self, b) {
    Sk.builtin.pyCheckArgsLen("extend", arguments.length, 2, 2);
    self.list_extend_(b);
    return Sk.builtin.none.none$;
});

Sk.builtin.list.prototype["pop"] = new Sk.builtin.func(function (self, i) {
    var ret;
    Sk.builtin.pyCheckArgsLen("pop", arguments.length, 1, 2);
    if (i === undefined) {
        i = self.v.length - 1;
    }

    if (!Sk.builtin.checkNumber(i)) {
        throw new Sk.builtin.TypeError("an integer is required");
    }

    i = Sk.builtin.asnum$(i);
    if (i < 0) {
        i = i + self.v.length;
    }
    if ((i < 0) || (i >= self.v.length)) {
        throw new Sk.builtin.IndexError("pop index out of range");
    }
    ret = self.v[i];
    self.v.splice(i, 1);
    return ret;
});

Sk.builtin.list.prototype["remove"] = new Sk.builtin.func(function (self, item) {
    var idx;
    Sk.builtin.pyCheckArgsLen("remove", arguments.length, 2, 2);

    idx = Sk.builtin.list.prototype["index"].func_code(self, item);
    self.v.splice(Sk.builtin.asnum$(idx), 1);
    return Sk.builtin.none.none$;
});

Sk.builtin.list.prototype["index"] = new Sk.builtin.func(function (self, item, start, stop) {
    var i;
    var obj;
    var len;
    Sk.builtin.pyCheckArgsLen("index", arguments.length, 2, 4);
    if (start !== undefined && !Sk.builtin.checkInt(start)) {
        throw new Sk.builtin.TypeError("slice indices must be integers");
    }
    if (stop !== undefined && !Sk.builtin.checkInt(stop)) {
        throw new Sk.builtin.TypeError("slice indices must be integers");
    }

    len = self.v.length;
    obj = self.v;

    start = (start === undefined) ? 0 : start.v;
    if (start < 0) {
        start = ((start + len) >= 0) ? start + len : 0;
    }

    stop = (stop === undefined) ? len : stop.v;
    if (stop < 0) {
        stop = ((stop + len) >= 0) ? stop + len : 0;
    }

    for (i = start; i < stop; ++i) {
        if (Sk.misceval.richCompareBool(obj[i], item, "Eq")) {
            return new Sk.builtin.int_(i);
        }
    }
    throw new Sk.builtin.ValueError("list.index(x): x not in list");
});

Sk.builtin.list.prototype["count"] = new Sk.builtin.func(function (self, item) {
    var i;
    var count;
    var obj;
    var len;
    Sk.builtin.pyCheckArgsLen("count", arguments.length, 2, 2);

    len = self.v.length;
    obj = self.v;
    count = 0;
    for (i = 0; i < len; ++i) {
        if (Sk.misceval.richCompareBool(obj[i], item, "Eq")) {
            count += 1;
        }
    }
    return new Sk.builtin.int_(count);
});

Sk.builtin.list.prototype["reverse"] = new Sk.builtin.func(Sk.builtin.list.prototype.list_reverse_);
Sk.builtin.list.prototype["sort"] = new Sk.builtin.func(Sk.builtin.list.prototype.list_sort_);

Sk.exportSymbol("Sk.builtin.list", Sk.builtin.list);

/**
 * @constructor
 * @param {Object} lst
 */
Sk.builtin.list_iter_ = function (lst) {
    if (!(this instanceof Sk.builtin.list_iter_)) {
        return new Sk.builtin.list_iter_(lst);
    }
    this.$index = 0;
    this.lst = lst.v.slice();
    this.sq$length = this.lst.length;
    this.tp$iter = this;
    this.tp$iternext = function () {
        if (this.$index >= this.sq$length) {
            return undefined;
        }
        return this.lst[this.$index++];
    };
    this.$r = function () {
        return new Sk.builtin.str("listiterator");
    };
    return this;
};

Sk.abstr.setUpInheritance("listiterator", Sk.builtin.list_iter_, Sk.builtin.object);

Sk.builtin.list_iter_.prototype.__class__ = Sk.builtin.list_iter_;

Sk.builtin.list_iter_.prototype.__iter__ = new Sk.builtin.func(function (self) {
    return self;
});

Sk.builtin.list_iter_.prototype.next$ = function (self) {
    var ret = self.tp$iternext();
    if (ret === undefined) {
        throw new Sk.builtin.StopIteration();
    }
    return ret;
};
Sk.builtin.interned = {};

/**
 * @constructor
 * @param {*} x
 * @extends Sk.builtin.object
 */
Sk.builtin.str = function (x) {
    var ret;

    Sk.builtin.pyCheckArgsLen("str", arguments.length, 0, 1);

    if (x === undefined) {
        x = "";
    }
    if (x instanceof Sk.builtin.str) {
        return x;
    }
    if (!(this instanceof Sk.builtin.str)) {
        return new Sk.builtin.str(x);
    }


    // convert to js string
    if (x === true) {
        ret = "True";
    } else if (x === false) {
        ret = "False";
    } else if ((x === null) || (x instanceof Sk.builtin.none)) {
        ret = "None";
    } else if (x instanceof Sk.builtin.bool) {
        if (x.v) {
            ret = "True";
        } else {
            ret = "False";
        }
    } else if (typeof x === "number") {
        ret = x.toString();
        if (ret === "Infinity") {
            ret = "inf";
        } else if (ret === "-Infinity") {
            ret = "-inf";
        }
    } else if (typeof x === "string") {
        ret = x;
    } else if (x.tp$str !== undefined) {
        ret = x.tp$str();
        if (!(ret instanceof Sk.builtin.str)) {
            throw new Sk.builtin.ValueError("__str__ didn't return a str");
        }
        return ret;
    } else {
        return Sk.misceval.objectRepr(x);
    }

    // interning required for strings in py
    if (Sk.builtin.interned["1" + ret]) {
        return Sk.builtin.interned["1" + ret];
    }

    this.__class__ = Sk.builtin.str;
    this.v = ret;
    this["v"] = this.v;
    Sk.builtin.interned["1" + ret] = this;
    return this;

};
Sk.exportSymbol("Sk.builtin.str", Sk.builtin.str);

Sk.abstr.setUpInheritance("str", Sk.builtin.str, Sk.builtin.seqtype);

Sk.builtin.str.prototype.$jsstr = function () {
    return this.v;
};

Sk.builtin.str.prototype.mp$subscript = function (index) {
    var ret;
    if (Sk.misceval.isIndex(index)) {
        index = Sk.misceval.asIndex(index);
        if (index < 0) {
            index = this.v.length + index;
        }
        if (index < 0 || index >= this.v.length) {
            throw new Sk.builtin.IndexError("string index out of range");
        }
        return new Sk.builtin.str(this.v.charAt(index));
    } else if (index instanceof Sk.builtin.slice) {
        ret = "";
        index.sssiter$(this, function (i, wrt) {
            if (i >= 0 && i < wrt.v.length) {
                ret += wrt.v.charAt(i);
            }
        });
        return new Sk.builtin.str(ret);
    } else {
        throw new Sk.builtin.TypeError("string indices must be integers, not " + Sk.abstr.typeName(index));
    }
};

Sk.builtin.str.prototype.sq$length = function () {
    return this.v.length;
};
Sk.builtin.str.prototype.sq$concat = function (other) {
    var otypename;
    if (!other || !Sk.builtin.checkString(other)) {
        otypename = Sk.abstr.typeName(other);
        throw new Sk.builtin.TypeError("cannot concatenate 'str' and '" + otypename + "' objects");
    }
    return new Sk.builtin.str(this.v + other.v);
};
Sk.builtin.str.prototype.nb$add = Sk.builtin.str.prototype.sq$concat;
Sk.builtin.str.prototype.nb$inplace_add = Sk.builtin.str.prototype.sq$concat;
Sk.builtin.str.prototype.sq$repeat = function (n) {
    var i;
    var ret;

    if (!Sk.misceval.isIndex(n)) {
        throw new Sk.builtin.TypeError("can't multiply sequence by non-int of type '" + Sk.abstr.typeName(n) + "'");
    }

    n = Sk.misceval.asIndex(n);
    ret = "";
    for (i = 0; i < n; ++i) {
        ret += this.v;
    }
    return new Sk.builtin.str(ret);
};
Sk.builtin.str.prototype.nb$multiply = Sk.builtin.str.prototype.sq$repeat;
Sk.builtin.str.prototype.nb$inplace_multiply = Sk.builtin.str.prototype.sq$repeat;
Sk.builtin.str.prototype.sq$item = function () {
    Sk.asserts.fail();
};
Sk.builtin.str.prototype.sq$slice = function (i1, i2) {
    i1 = Sk.builtin.asnum$(i1);
    i2 = Sk.builtin.asnum$(i2);
    if (i1 < 0) {
        i1 = 0;
    }
    return new Sk.builtin.str(this.v.substr(i1, i2 - i1));
};

Sk.builtin.str.prototype.sq$contains = function (ob) {
    if (!(ob instanceof Sk.builtin.str)) {
        throw new Sk.builtin.TypeError("TypeError: 'In <string> requires string as left operand");
    }
    return this.v.indexOf(ob.v) != -1;
};

Sk.builtin.str.prototype.__iter__ = new Sk.builtin.func(function (self) {
    return new Sk.builtin.str_iter_(self);
});

Sk.builtin.str.prototype.tp$iter = function () {
    return new Sk.builtin.str_iter_(this);
};

Sk.builtin.str.prototype.tp$richcompare = function (other, op) {
    if (!(other instanceof Sk.builtin.str)) {
        return undefined;
    }

    switch (op) {
        case "Lt":
            return this.v < other.v;
        case "LtE":
            return this.v <= other.v;
        case "Eq":
            return this.v === other.v;
        case "NotEq":
            return this.v !== other.v;
        case "Gt":
            return this.v > other.v;
        case "GtE":
            return this.v >= other.v;
        default:
            Sk.asserts.fail();
    }
};

Sk.builtin.str.prototype["$r"] = function () {
    // single is preferred
    var ashex;
    var c;
    var i;
    var ret;
    var len;
    var quote = "'";
    //jshint ignore:start
    if (this.v.indexOf("'") !== -1 && this.v.indexOf('"') === -1) {
        quote = '"';
    }
    //jshint ignore:end
    len = this.v.length;
    ret = quote;
    for (i = 0; i < len; ++i) {
        c = this.v.charAt(i);
        if (c === quote || c === "\\") {
            ret += "\\" + c;
        } else if (c === "\t") {
            ret += "\\t";
        } else if (c === "\n") {
            ret += "\\n";
        } else if (c === "\r") {
            ret += "\\r";
        } else if (c < " " || c >= 0x7f) {
            ashex = c.charCodeAt(0).toString(16);
            if (ashex.length < 2) {
                ashex = "0" + ashex;
            }
            ret += "\\x" + ashex;
        } else {
            ret += c;
        }
    }
    ret += quote;
    return new Sk.builtin.str(ret);
};


Sk.builtin.str.re_escape_ = function (s) {
    var c;
    var i;
    var ret = [];
    var re = /^[A-Za-z0-9]+$/;
    for (i = 0; i < s.length; ++i) {
        c = s.charAt(i);

        if (re.test(c)) {
            ret.push(c);
        } else {
            if (c === "\\000") {
                ret.push("\\000");
            } else {
                ret.push("\\" + c);
            }
        }
    }
    return ret.join("");
};

Sk.builtin.str.prototype["lower"] = new Sk.builtin.func(function (self) {
    Sk.builtin.pyCheckArgsLen("lower", arguments.length, 1, 1);
    return new Sk.builtin.str(self.v.toLowerCase());
});

Sk.builtin.str.prototype["upper"] = new Sk.builtin.func(function (self) {
    Sk.builtin.pyCheckArgsLen("upper", arguments.length, 1, 1);
    return new Sk.builtin.str(self.v.toUpperCase());
});

Sk.builtin.str.prototype["capitalize"] = new Sk.builtin.func(function (self) {
    var i;
    var cap;
    var orig;
    Sk.builtin.pyCheckArgsLen("capitalize", arguments.length, 1, 1);
    orig = self.v;

    if (orig.length === 0) {
        return new Sk.builtin.str("");
    }
    cap = orig.charAt(0).toUpperCase();

    for (i = 1; i < orig.length; i++) {
        cap += orig.charAt(i).toLowerCase();
    }
    return new Sk.builtin.str(cap);
});

Sk.builtin.str.prototype["join"] = new Sk.builtin.func(function (self, seq) {
    var it, i;
    var arrOfStrs;
    Sk.builtin.pyCheckArgsLen("join", arguments.length, 2, 2);
    Sk.builtin.pyCheckType("seq", "iterable", Sk.builtin.checkIterable(seq));
    arrOfStrs = [];
    for (it = seq.tp$iter(), i = it.tp$iternext(); i !== undefined; i = it.tp$iternext()) {
        if (i.constructor !== Sk.builtin.str) {
            throw new Sk.builtin.TypeError("TypeError: sequence item " + arrOfStrs.length + ": expected string, " + typeof i + " found");
        }
        arrOfStrs.push(i.v);
    }
    return new Sk.builtin.str(arrOfStrs.join(self.v));
});

Sk.builtin.str.prototype["split"] = new Sk.builtin.func(function (self, on, howmany) {
    var splits;
    var index;
    var match;
    var result;
    var s;
    var str;
    var regex;
    Sk.builtin.pyCheckArgsLen("split", arguments.length, 1, 3);
    if ((on === undefined) || (on instanceof Sk.builtin.none)) {
        on = null;
    }
    if ((on !== null) && !Sk.builtin.checkString(on)) {
        throw new Sk.builtin.TypeError("expected a string");
    }
    if ((on !== null) && on.v === "") {
        throw new Sk.builtin.ValueError("empty separator");
    }
    if ((howmany !== undefined) && !Sk.builtin.checkInt(howmany)) {
        throw new Sk.builtin.TypeError("an integer is required");
    }

    howmany = Sk.builtin.asnum$(howmany);
    regex = /[\s\xa0]+/g;
    str = self.v;
    if (on === null) {
        // Remove leading whitespace
        str = str.replace(/^[\s\xa0]+/, "");
    } else {
        // Escape special characters in "on" so we can use a regexp
        s = on.v.replace(/([.*+?=|\\\/()\[\]\{\}^$])/g, "\\$1");
        regex = new RegExp(s, "g");
    }

    // This is almost identical to re.split,
    // except how the regexp is constructed

    result = [];
    index = 0;
    splits = 0;
    while ((match = regex.exec(str)) != null) {
        if (match.index === regex.lastIndex) {
            // empty match
            break;
        }
        result.push(new Sk.builtin.str(str.substring(index, match.index)));
        index = regex.lastIndex;
        splits += 1;
        if (howmany && (splits >= howmany)) {
            break;
        }
    }
    str = str.substring(index);
    if (on !== null || (str.length > 0)) {
        result.push(new Sk.builtin.str(str));
    }

    return new Sk.builtin.list(result);
});

Sk.builtin.str.prototype["strip"] = new Sk.builtin.func(function (self, chars) {
    var regex;
    var pattern;
    Sk.builtin.pyCheckArgsLen("strip", arguments.length, 1, 2);
    if ((chars !== undefined) && !Sk.builtin.checkString(chars)) {
        throw new Sk.builtin.TypeError("strip arg must be None or str");
    }
    if (chars === undefined) {
        pattern = /^\s+|\s+$/g;
    } else {
        regex = Sk.builtin.str.re_escape_(chars.v);
        pattern = new RegExp("^[" + regex + "]+|[" + regex + "]+$", "g");
    }
    return new Sk.builtin.str(self.v.replace(pattern, ""));
});

Sk.builtin.str.prototype["lstrip"] = new Sk.builtin.func(function (self, chars) {
    var regex;
    var pattern;
    Sk.builtin.pyCheckArgsLen("lstrip", arguments.length, 1, 2);
    if ((chars !== undefined) && !Sk.builtin.checkString(chars)) {
        throw new Sk.builtin.TypeError("lstrip arg must be None or str");
    }
    if (chars === undefined) {
        pattern = /^\s+/g;
    } else {
        regex = Sk.builtin.str.re_escape_(chars.v);
        pattern = new RegExp("^[" + regex + "]+", "g");
    }
    return new Sk.builtin.str(self.v.replace(pattern, ""));
});

Sk.builtin.str.prototype["rstrip"] = new Sk.builtin.func(function (self, chars) {
    var regex;
    var pattern;
    Sk.builtin.pyCheckArgsLen("rstrip", arguments.length, 1, 2);
    if ((chars !== undefined) && !Sk.builtin.checkString(chars)) {
        throw new Sk.builtin.TypeError("rstrip arg must be None or str");
    }
    if (chars === undefined) {
        pattern = /\s+$/g;
    } else {
        regex = Sk.builtin.str.re_escape_(chars.v);
        pattern = new RegExp("[" + regex + "]+$", "g");
    }
    return new Sk.builtin.str(self.v.replace(pattern, ""));
});

Sk.builtin.str.prototype["__format__"] = new Sk.builtin.func(function (self, format_spec) {
    var formatstr;
    Sk.builtin.pyCheckArgsLen("__format__", arguments.length, 2, 2);

    if (!Sk.builtin.checkString(format_spec)) {
        if (Sk.__future__.exceptions) {
            throw new Sk.builtin.TypeError("format() argument 2 must be str, not " + Sk.abstr.typeName(format_spec));
        } else {
            throw new Sk.builtin.TypeError("format expects arg 2 to be string or unicode, not " + Sk.abstr.typeName(format_spec));
        }
    } else {
        formatstr = Sk.ffi.remapToJs(format_spec);
        if (formatstr !== "" && formatstr !== "s") {
            throw new Sk.builtin.NotImplementedError("format spec is not yet implemented");
        }
    }

    return new Sk.builtin.str(self);
});

Sk.builtin.str.prototype["partition"] = new Sk.builtin.func(function (self, sep) {
    var pos;
    var sepStr;
    Sk.builtin.pyCheckArgsLen("partition", arguments.length, 2, 2);
    Sk.builtin.pyCheckType("sep", "string", Sk.builtin.checkString(sep));
    sepStr = new Sk.builtin.str(sep);
    pos = self.v.indexOf(sepStr.v);
    if (pos < 0) {
        return new Sk.builtin.tuple([self, Sk.builtin.str.$emptystr, Sk.builtin.str.$emptystr]);
    }

    return new Sk.builtin.tuple([
        new Sk.builtin.str(self.v.substring(0, pos)),
        sepStr,
        new Sk.builtin.str(self.v.substring(pos + sepStr.v.length))]);
});

Sk.builtin.str.prototype["rpartition"] = new Sk.builtin.func(function (self, sep) {
    var pos;
    var sepStr;
    Sk.builtin.pyCheckArgsLen("rpartition", arguments.length, 2, 2);
    Sk.builtin.pyCheckType("sep", "string", Sk.builtin.checkString(sep));
    sepStr = new Sk.builtin.str(sep);
    pos = self.v.lastIndexOf(sepStr.v);
    if (pos < 0) {
        return new Sk.builtin.tuple([Sk.builtin.str.$emptystr, Sk.builtin.str.$emptystr, self]);
    }

    return new Sk.builtin.tuple([
        new Sk.builtin.str(self.v.substring(0, pos)),
        sepStr,
        new Sk.builtin.str(self.v.substring(pos + sepStr.v.length))]);
});

Sk.builtin.str.prototype["count"] = new Sk.builtin.func(function (self, pat, start, end) {
    var normaltext;
    var ctl;
    var slice;
    var m;
    Sk.builtin.pyCheckArgsLen("count", arguments.length, 2, 4);
    if (!Sk.builtin.checkString(pat)) {
        throw new Sk.builtin.TypeError("expected a character buffer object");
    }
    if ((start !== undefined) && !Sk.builtin.checkInt(start)) {
        throw new Sk.builtin.TypeError("slice indices must be integers or None or have an __index__ method");
    }
    if ((end !== undefined) && !Sk.builtin.checkInt(end)) {
        throw new Sk.builtin.TypeError("slice indices must be integers or None or have an __index__ method");
    }

    if (start === undefined) {
        start = 0;
    } else {
        start = Sk.builtin.asnum$(start);
        start = start >= 0 ? start : self.v.length + start;
    }

    if (end === undefined) {
        end = self.v.length;
    } else {
        end = Sk.builtin.asnum$(end);
        end = end >= 0 ? end : self.v.length + end;
    }

    normaltext = pat.v.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    m = new RegExp(normaltext, "g");
    slice = self.v.slice(start, end);
    ctl = slice.match(m);
    if (!ctl) {
        return  new Sk.builtin.int_(0);
    } else {
        return new Sk.builtin.int_(ctl.length);
    }

});

Sk.builtin.str.prototype["ljust"] = new Sk.builtin.func(function (self, len, fillchar) {
    var newstr;
    Sk.builtin.pyCheckArgsLen("ljust", arguments.length, 2, 3);
    if (!Sk.builtin.checkInt(len)) {
        throw new Sk.builtin.TypeError("integer argument exepcted, got " + Sk.abstr.typeName(len));
    }
    if ((fillchar !== undefined) && (!Sk.builtin.checkString(fillchar) || fillchar.v.length !== 1)) {
        throw new Sk.builtin.TypeError("must be char, not " + Sk.abstr.typeName(fillchar));
    }
    if (fillchar === undefined) {
        fillchar = " ";
    } else {
        fillchar = fillchar.v;
    }
    len = Sk.builtin.asnum$(len);
    if (self.v.length >= len) {
        return self;
    } else {
        newstr = Array.prototype.join.call({length: Math.floor(len - self.v.length) + 1}, fillchar);
        return new Sk.builtin.str(self.v + newstr);
    }
});

Sk.builtin.str.prototype["rjust"] = new Sk.builtin.func(function (self, len, fillchar) {
    var newstr;
    Sk.builtin.pyCheckArgsLen("rjust", arguments.length, 2, 3);
    if (!Sk.builtin.checkInt(len)) {
        throw new Sk.builtin.TypeError("integer argument exepcted, got " + Sk.abstr.typeName(len));
    }
    if ((fillchar !== undefined) && (!Sk.builtin.checkString(fillchar) || fillchar.v.length !== 1)) {
        throw new Sk.builtin.TypeError("must be char, not " + Sk.abstr.typeName(fillchar));
    }
    if (fillchar === undefined) {
        fillchar = " ";
    } else {
        fillchar = fillchar.v;
    }
    len = Sk.builtin.asnum$(len);
    if (self.v.length >= len) {
        return self;
    } else {
        newstr = Array.prototype.join.call({length: Math.floor(len - self.v.length) + 1}, fillchar);
        return new Sk.builtin.str(newstr + self.v);
    }

});

Sk.builtin.str.prototype["center"] = new Sk.builtin.func(function (self, len, fillchar) {
    var newstr;
    var newstr1;
    Sk.builtin.pyCheckArgsLen("center", arguments.length, 2, 3);
    if (!Sk.builtin.checkInt(len)) {
        throw new Sk.builtin.TypeError("integer argument exepcted, got " + Sk.abstr.typeName(len));
    }
    if ((fillchar !== undefined) && (!Sk.builtin.checkString(fillchar) || fillchar.v.length !== 1)) {
        throw new Sk.builtin.TypeError("must be char, not " + Sk.abstr.typeName(fillchar));
    }
    if (fillchar === undefined) {
        fillchar = " ";
    } else {
        fillchar = fillchar.v;
    }
    len = Sk.builtin.asnum$(len);
    if (self.v.length >= len) {
        return self;
    } else {
        newstr1 = Array.prototype.join.call({length: Math.floor((len - self.v.length) / 2) + 1}, fillchar);
        newstr = newstr1 + self.v + newstr1;
        if (newstr.length < len) {
            newstr = newstr + fillchar;
        }
        return new Sk.builtin.str(newstr);
    }

});

Sk.builtin.str.prototype["find"] = new Sk.builtin.func(function (self, tgt, start, end) {
    var idx;
    Sk.builtin.pyCheckArgsLen("find", arguments.length, 2, 4);
    if (!Sk.builtin.checkString(tgt)) {
        throw new Sk.builtin.TypeError("expected a character buffer object");
    }
    if ((start !== undefined) && !Sk.builtin.checkInt(start)) {
        throw new Sk.builtin.TypeError("slice indices must be integers or None or have an __index__ method");
    }
    if ((end !== undefined) && !Sk.builtin.checkInt(end)) {
        throw new Sk.builtin.TypeError("slice indices must be integers or None or have an __index__ method");
    }

    if (start === undefined) {
        start = 0;
    } else {
        start = Sk.builtin.asnum$(start);
        start = start >= 0 ? start : self.v.length + start;
    }

    if (end === undefined) {
        end = self.v.length;
    } else {
        end = Sk.builtin.asnum$(end);
        end = end >= 0 ? end : self.v.length + end;
    }

    idx = self.v.indexOf(tgt.v, start);
    idx = ((idx >= start) && (idx < end)) ? idx : -1;

    return new Sk.builtin.int_(idx);
});

Sk.builtin.str.prototype["index"] = new Sk.builtin.func(function (self, tgt, start, end) {
    var idx;
    Sk.builtin.pyCheckArgsLen("index", arguments.length, 2, 4);
    idx = Sk.misceval.callsimArray(self["find"], [self, tgt, start, end]);
    if (Sk.builtin.asnum$(idx) === -1) {
        throw new Sk.builtin.ValueError("substring not found");
    }
    return idx;
});

Sk.builtin.str.prototype["rfind"] = new Sk.builtin.func(function (self, tgt, start, end) {
    var idx;
    Sk.builtin.pyCheckArgsLen("rfind", arguments.length, 2, 4);
    if (!Sk.builtin.checkString(tgt)) {
        throw new Sk.builtin.TypeError("expected a character buffer object");
    }
    if ((start !== undefined) && !Sk.builtin.checkInt(start)) {
        throw new Sk.builtin.TypeError("slice indices must be integers or None or have an __index__ method");
    }
    if ((end !== undefined) && !Sk.builtin.checkInt(end)) {
        throw new Sk.builtin.TypeError("slice indices must be integers or None or have an __index__ method");
    }

    if (start === undefined) {
        start = 0;
    } else {
        start = Sk.builtin.asnum$(start);
        start = start >= 0 ? start : self.v.length + start;
    }

    if (end === undefined) {
        end = self.v.length;
    } else {
        end = Sk.builtin.asnum$(end);
        end = end >= 0 ? end : self.v.length + end;
    }

    idx = self.v.lastIndexOf(tgt.v, end);
    idx = (idx !== end) ? idx : self.v.lastIndexOf(tgt.v, end - 1);
    idx = ((idx >= start) && (idx < end)) ? idx : -1;

    return new Sk.builtin.int_(idx);
});

Sk.builtin.str.prototype["rindex"] = new Sk.builtin.func(function (self, tgt, start, end) {
    var idx;
    Sk.builtin.pyCheckArgsLen("rindex", arguments.length, 2, 4);
    idx = Sk.misceval.callsimArray(self["rfind"], [self, tgt, start, end]);
    if (Sk.builtin.asnum$(idx) === -1) {
        throw new Sk.builtin.ValueError("substring not found");
    }
    return idx;
});

Sk.builtin.str.prototype["startswith"] = new Sk.builtin.func(function (self, tgt) {
    Sk.builtin.pyCheckArgsLen("startswith", arguments.length, 2, 2);
    Sk.builtin.pyCheckType("tgt", "string", Sk.builtin.checkString(tgt));
    return new Sk.builtin.bool( self.v.indexOf(tgt.v) === 0);
});

// http://stackoverflow.com/questions/280634/endswith-in-javascript
Sk.builtin.str.prototype["endswith"] = new Sk.builtin.func(function (self, tgt) {
    Sk.builtin.pyCheckArgsLen("endswith", arguments.length, 2, 2);
    Sk.builtin.pyCheckType("tgt", "string", Sk.builtin.checkString(tgt));
    return new Sk.builtin.bool( self.v.indexOf(tgt.v, self.v.length - tgt.v.length) !== -1);
});

Sk.builtin.str.prototype["replace"] = new Sk.builtin.func(function (self, oldS, newS, count) {
    var c;
    var patt;
    Sk.builtin.pyCheckArgsLen("replace", arguments.length, 3, 4);
    Sk.builtin.pyCheckType("oldS", "string", Sk.builtin.checkString(oldS));
    Sk.builtin.pyCheckType("newS", "string", Sk.builtin.checkString(newS));
    if ((count !== undefined) && !Sk.builtin.checkInt(count)) {
        throw new Sk.builtin.TypeError("integer argument expected, got " +
            Sk.abstr.typeName(count));
    }
    count = Sk.builtin.asnum$(count);
    patt = new RegExp(Sk.builtin.str.re_escape_(oldS.v), "g");

    if ((count === undefined) || (count < 0)) {
        return new Sk.builtin.str(self.v.replace(patt, newS.v));
    }

    c = 0;

    function replacer (match) {
        c++;
        if (c <= count) {
            return newS.v;
        }
        return match;
    }

    return new Sk.builtin.str(self.v.replace(patt, replacer));
});

Sk.builtin.str.prototype["zfill"] = new Sk.builtin.func(function (self, len) {
    var str = self.v;
    var ret;
    var zeroes;
    var offset;
    var pad = "";

    Sk.builtin.pyCheckArgsLen("zfill", arguments.length, 2, 2);
    if (! Sk.builtin.checkInt(len)) {
        throw new Sk.builtin.TypeError("integer argument exepected, got " + Sk.abstr.typeName(len));
    }

    // figure out how many zeroes are needed to make the proper length
    zeroes = len.v - str.length;
    // offset by 1 if there is a +/- at the beginning of the string
    offset = (str[0] === "+" || str[0] === "-") ? 1 : 0;
    for(var i = 0; i < zeroes; i++){
        pad += "0";
    }
    // combine the string and the zeroes
    ret = str.substr(0, offset) + pad + str.substr(offset);
    return new Sk.builtin.str(ret);


});

Sk.builtin.str.prototype["isdigit"] = new Sk.builtin.func(function (self) {
    Sk.builtin.pyCheckArgsLen("isdigit", arguments.length, 1, 1);
    return new Sk.builtin.bool( /^\d+$/.test(self.v));
});

Sk.builtin.str.prototype["isspace"] = new Sk.builtin.func(function (self) {
    Sk.builtin.pyCheckArgsLen("isspace", arguments.length, 1, 1);
    return new Sk.builtin.bool( /^\s+$/.test(self.v));
});


Sk.builtin.str.prototype["expandtabs"] = new Sk.builtin.func(function (self, tabsize) {
    // var input = self.v;
    // var expanded = "";
    // var split;
    // var spacestr = "";
    // var spacerem;


    var spaces;
    var expanded;

    Sk.builtin.pyCheckArgsLen("expandtabs", arguments.length, 1, 2);


    if ((tabsize !== undefined) && ! Sk.builtin.checkInt(tabsize)) {
        throw new Sk.builtin.TypeError("integer argument exepected, got " + Sk.abstr.typeName(tabsize));
    }
    if (tabsize === undefined) {
        tabsize = 8;
    } else {
        tabsize = Sk.builtin.asnum$(tabsize);
    }

    spaces = (new Array(tabsize + 1)).join(" ");
    expanded = self.v.replace(/([^\r\n\t]*)\t/g, function(a, b) {
        return b + spaces.slice(b.length % tabsize);
    });
    return new Sk.builtin.str(expanded);
});

Sk.builtin.str.prototype["swapcase"] = new Sk.builtin.func(function (self) {
    var ret;
    Sk.builtin.pyCheckArgsLen("swapcase", arguments.length, 1, 1);


    ret = self.v.replace(/[a-z]/gi, function(c) {
        var lc = c.toLowerCase();
        return lc === c ? c.toUpperCase() : lc;
    });

    return new Sk.builtin.str(ret);
});

Sk.builtin.str.prototype["splitlines"] = new Sk.builtin.func(function (self, keepends) {
    var data = self.v;
    var i = 0;
    var j = i;
    var selflen = self.v.length;
    var strs_w = [];
    var ch;
    var eol;
    var sol = 0;
    var slice;
    Sk.builtin.pyCheckArgsLen("splitlines", arguments.length, 1, 2);
    if ((keepends !== undefined) && ! Sk.builtin.checkBool(keepends)) {
        throw new Sk.builtin.TypeError("boolean argument expected, got " + Sk.abstr.typeName(keepends));
    }
    if (keepends === undefined) {
        keepends = false;
    } else {
        keepends = keepends.v;
    }


    for (i = 0; i < selflen; i ++) {
        ch = data.charAt(i);
        if (data.charAt(i + 1) === "\n" && ch === "\r") {
            eol = i + 2;
            slice = data.slice(sol, eol);
            if (! keepends) {
                slice = slice.replace(/(\r|\n)/g, "");
            }
            strs_w.push(new Sk.builtin.str(slice));
            sol = eol;
        } else if ((ch === "\n" && data.charAt(i - 1) !== "\r") || ch === "\r") {
            eol = i + 1;
            slice = data.slice(sol, eol);
            if (! keepends) {
                slice = slice.replace(/(\r|\n)/g, "");
            }
            strs_w.push(new Sk.builtin.str(slice));
            sol = eol;
        }

    }
    if (sol < selflen) {
        eol = selflen;
        slice = data.slice(sol, eol);
        if (! keepends) {
            slice = slice.replace(/(\r|\n)/g, "");
        }
        strs_w.push(new Sk.builtin.str(slice));
    }
    return new Sk.builtin.list(strs_w);
});

Sk.builtin.str.prototype["title"] = new Sk.builtin.func(function (self) {
    var ret;

    Sk.builtin.pyCheckArgsLen("title", arguments.length, 1, 1);

    ret = self.v.replace(/[a-z][a-z]*/gi, function(str) {
        return str[0].toUpperCase() + str.substr(1).toLowerCase();
    });

    return new Sk.builtin.str(ret);
});

Sk.builtin.str.prototype["isalpha"] = new Sk.builtin.func(function (self) {
    Sk.builtin.pyCheckArgsLen("isalpha", arguments.length, 1, 1);
    return new Sk.builtin.bool( self.v.length && !/[^a-zA-Z]/.test(self.v));
});

Sk.builtin.str.prototype["isalnum"] = new Sk.builtin.func(function (self) {
    Sk.builtin.pyCheckArgsLen("isalnum", arguments.length, 1, 1);
    return new Sk.builtin.bool( self.v.length && !/[^a-zA-Z0-9]/.test(self.v));
});

// does not account for unicode numeric values
Sk.builtin.str.prototype["isnumeric"] = new Sk.builtin.func(function (self) {
    Sk.builtin.pyCheckArgsLen("isnumeric", arguments.length, 1, 1);
    return new Sk.builtin.bool( self.v.length && !/[^0-9]/.test(self.v));
});

Sk.builtin.str.prototype["islower"] = new Sk.builtin.func(function (self) {
    Sk.builtin.pyCheckArgsLen("islower", arguments.length, 1, 1);
    return new Sk.builtin.bool( self.v.length && /[a-z]/.test(self.v) && !/[A-Z]/.test(self.v));
});

Sk.builtin.str.prototype["isupper"] = new Sk.builtin.func(function (self) {
    Sk.builtin.pyCheckArgsLen("isupper", arguments.length, 1, 1);
    return new Sk.builtin.bool( self.v.length && !/[a-z]/.test(self.v) && /[A-Z]/.test(self.v));
});

Sk.builtin.str.prototype["istitle"] = new Sk.builtin.func(function (self) {
    // Comparing to str.title() seems the most intuitive thing, but it fails on "",
    // Other empty-ish strings with no change.
    var input = self.v;
    var cased = false;
    var previous_is_cased = false;
    var pos;
    var ch;
    Sk.builtin.pyCheckArgsLen("istitle", arguments.length, 1, 1);
    for (pos = 0; pos < input.length; pos ++) {
        ch = input.charAt(pos);
        if (! /[a-z]/.test(ch) && /[A-Z]/.test(ch)) {
            if (previous_is_cased) {
                return new Sk.builtin.bool( false);
            }
            previous_is_cased = true;
            cased = true;
        } else if (/[a-z]/.test(ch) && ! /[A-Z]/.test(ch)) {
            if (! previous_is_cased) {
                return new Sk.builtin.bool( false);
            }
            cased = true;
        } else {
            previous_is_cased = false;
        }
    }
    return new Sk.builtin.bool( cased);
});

Sk.builtin.str.prototype.nb$remainder = function (rhs) {
    // % format op. rhs can be a value, a tuple, or something with __getitem__ (dict)

    // From http://docs.python.org/library/stdtypes.html#string-formatting the
    // format looks like:
    // 1. The '%' character, which marks the start of the specifier.
    // 2. Mapping key (optional), consisting of a parenthesised sequence of characters (for example, (somename)).
    // 3. Conversion flags (optional), which affect the result of some conversion types.
    // 4. Minimum field width (optional). If specified as an '*' (asterisk), the actual width is read from the next
    // element of the tuple in values, and the object to convert comes after the minimum field width and optional
    // precision. 5. Precision (optional), given as a '.' (dot) followed by the precision. If specified as '*' (an
    // asterisk), the actual width is read from the next element of the tuple in values, and the value to convert comes
    // after the precision. 6. Length modifier (optional). 7. Conversion type.  length modifier is ignored

    var ret;
    var replFunc;
    var index;
    var regex;
    if (rhs.constructor !== Sk.builtin.tuple && (rhs.mp$subscript === undefined || rhs.constructor === Sk.builtin.str)) {
        rhs = new Sk.builtin.tuple([rhs]);
    }

    // general approach is to use a regex that matches the format above, and
    // do an re.sub with a function as replacement to make the subs.

    //           1 2222222222222222   33333333   444444444   5555555555555  66666  777777777777777777
    regex = /%(\([a-zA-Z0-9]+\))?([#0 +\-]+)?(\*|[0-9]+)?(\.(\*|[0-9]+))?[hlL]?([diouxXeEfFgGcrs%])/g;
    index = 0;
    replFunc = function (substring, mappingKey, conversionFlags, fieldWidth, precision, precbody, conversionType) {
        var result;
        var convName;
        var convValue;
        var base;
        var r;
        var mk;
        var value;
        var handleWidth;
        var formatNumber;
        var alternateForm;
        var precedeWithSign;
        var blankBeforePositive;
        var leftAdjust;
        var zeroPad;
        var i;
        fieldWidth = Sk.builtin.asnum$(fieldWidth);
        precision = Sk.builtin.asnum$(precision);

        if (mappingKey === undefined || mappingKey === "") {
            i = index++;
        } // ff passes '' not undef for some reason

        if (precision === "") { // ff passes '' here aswell causing problems with G,g, etc.
            precision = undefined;
        }

        zeroPad = false;
        leftAdjust = false;
        blankBeforePositive = false;
        precedeWithSign = false;
        alternateForm = false;
        if (conversionFlags) {
            if (conversionFlags.indexOf("-") !== -1) {
                leftAdjust = true;
            } else if (conversionFlags.indexOf("0") !== -1) {
                zeroPad = true;
            }

            if (conversionFlags.indexOf("+") !== -1) {
                precedeWithSign = true;
            } else if (conversionFlags.indexOf(" ") !== -1) {
                blankBeforePositive = true;
            }

            alternateForm = conversionFlags.indexOf("#") !== -1;
        }

        if (precision) {
            precision = parseInt(precision.substr(1), 10);
        }

        formatNumber = function (n, base) {
            var precZeroPadded;
            var prefix;
            var didSign;
            var neg;
            var r;
            var j;
            base = Sk.builtin.asnum$(base);
            neg = false;
            didSign = false;
            if (typeof n === "number") {
                if (n < 0) {
                    n = -n;
                    neg = true;
                }
                r = n.toString(base);
            } else if (n instanceof Sk.builtin.float_) {
                r = n.str$(base, false);
                if (r.length > 2 && r.substr(-2) === ".0") {
                    r = r.substr(0, r.length - 2);
                }
                neg = n.nb$isnegative();
            } else if (n instanceof Sk.builtin.int_) {
                r = n.str$(base, false);
                neg = n.nb$isnegative();
            } else if (n instanceof Sk.builtin.lng) {
                r = n.str$(base, false);
                neg = n.nb$isnegative();
            }

            Sk.asserts.assert(r !== undefined, "unhandled number format");

            precZeroPadded = false;

            if (precision) {
                //print("r.length",r.length,"precision",precision);
                for (j = r.length; j < precision; ++j) {
                    r = "0" + r;
                    precZeroPadded = true;
                }
            }

            prefix = "";

            if (neg) {
                prefix = "-";
            } else if (precedeWithSign) {
                prefix = "+" + prefix;
            } else if (blankBeforePositive) {
                prefix = " " + prefix;
            }

            if (alternateForm) {
                if (base === 16) {
                    prefix += "0x";
                } else if (base === 8 && !precZeroPadded && r !== "0") {
                    prefix += "0";
                }
            }

            return [prefix, r];
        };

        handleWidth = function (args) {
            var totLen;
            var prefix = args[0];
            var r = args[1];
            var j;
            if (fieldWidth) {
                fieldWidth = parseInt(fieldWidth, 10);
                totLen = r.length + prefix.length;
                if (zeroPad) {
                    for (j = totLen; j < fieldWidth; ++j) {
                        r = "0" + r;
                    }
                } else if (leftAdjust) {
                    for (j = totLen; j < fieldWidth; ++j) {
                        r = r + " ";
                    }
                } else {
                    for (j = totLen; j < fieldWidth; ++j) {
                        prefix = " " + prefix;
                    }
                }
            }
            return prefix + r;
        };

        //print("Rhs:",rhs, "ctor", rhs.constructor);
        if (rhs.constructor === Sk.builtin.tuple) {
            value = rhs.v[i];
        } else if (rhs.mp$subscript !== undefined && mappingKey !== undefined) {
            mk = mappingKey.substring(1, mappingKey.length - 1);
            //print("mk",mk);
            value = rhs.mp$subscript(new Sk.builtin.str(mk));
        } else if (rhs.constructor === Sk.builtin.dict || rhs.constructor === Sk.builtin.list) {
            // new case where only one argument is provided
            value = rhs;
        } else {
            throw new Sk.builtin.AttributeError(rhs.tp$name + " instance has no attribute 'mp$subscript'");
        }
        base = 10;
        if (conversionType === "d" || conversionType === "i") {
            return handleWidth(formatNumber(value, 10));
        } else if (conversionType === "o") {
            return handleWidth(formatNumber(value, 8));
        } else if (conversionType === "x") {
            return handleWidth(formatNumber(value, 16));
        } else if (conversionType === "X") {
            return handleWidth(formatNumber(value, 16)).toUpperCase();
        } else if (conversionType === "f" || conversionType === "F" || conversionType === "e" || conversionType === "E" || conversionType === "g" || conversionType === "G") {
            convValue = Sk.builtin.asnum$(value);
            if (typeof convValue === "string") {
                convValue = Number(convValue);
            }
            if (convValue === Infinity) {
                return "inf";
            }
            if (convValue === -Infinity) {
                return "-inf";
            }
            if (isNaN(convValue)) {
                return "nan";
            }
            convName = ["toExponential", "toFixed", "toPrecision"]["efg".indexOf(conversionType.toLowerCase())];
            if (precision === undefined || precision === "") {
                if (conversionType === "e" || conversionType === "E") {
                    precision = 6;
                } else if (conversionType === "f" || conversionType === "F") {
                    precision = 7;
                }
            }
            result = (convValue)[convName](precision); // possible loose of negative zero sign

            // apply sign to negative zeros, floats only!
            if(Sk.builtin.checkFloat(value)) {
                if(convValue === 0 && 1/convValue === -Infinity) {
                    result = "-" + result; // add sign for zero
                }
            }

            if ("EFG".indexOf(conversionType) !== -1) {
                result = result.toUpperCase();
            }
            return handleWidth(["", result]);
        } else if (conversionType === "c") {
            if (typeof value === "number") {
                return String.fromCharCode(value);
            } else if (value instanceof Sk.builtin.int_) {
                return String.fromCharCode(value.v);
            } else if (value instanceof Sk.builtin.float_) {
                return String.fromCharCode(value.v);
            } else if (value instanceof Sk.builtin.lng) {
                return String.fromCharCode(value.str$(10, false)[0]);
            } else if (value.constructor === Sk.builtin.str) {
                return value.v.substr(0, 1);
            } else {
                throw new Sk.builtin.TypeError("an integer is required");
            }
        } else if (conversionType === "r") {
            r = Sk.builtin.repr(value);
            if (precision) {
                return r.v.substr(0, precision);
            }
            return r.v;
        } else if (conversionType === "s") {
            r = new Sk.builtin.str(value);
            r = r.$jsstr();
            if (precision) {
                return r.substr(0, precision);
            }
            if(fieldWidth) {
                r = handleWidth([" ", r]);
            }
            return r;
        } else if (conversionType === "%") {
            return "%";
        }
    };

    ret = this.v.replace(regex, replFunc);
    return new Sk.builtin.str(ret);
};

/**
 * @constructor
 * @param {Object} obj
 */
Sk.builtin.str_iter_ = function (obj) {
    if (!(this instanceof Sk.builtin.str_iter_)) {
        return new Sk.builtin.str_iter_(obj);
    }
    this.$index = 0;
    this.$obj = obj.v.slice();
    this.sq$length = this.$obj.length;
    this.tp$iter = this;
    this.tp$iternext = function () {
        if (this.$index >= this.sq$length) {
            return undefined;
        }
        return new Sk.builtin.str(this.$obj.substr(this.$index++, 1));
    };
    this.$r = function () {
        return new Sk.builtin.str("iterator");
    };
    return this;
};

Sk.abstr.setUpInheritance("iterator", Sk.builtin.str_iter_, Sk.builtin.object);

Sk.builtin.str_iter_.prototype.__class__ = Sk.builtin.str_iter_;

Sk.builtin.str_iter_.prototype.__iter__ = new Sk.builtin.func(function (self) {
    Sk.builtin.pyCheckArgsLen("__iter__", arguments.length, 0, 0, true, false);
    return self;
});

Sk.builtin.str_iter_.prototype.next$ = function (self) {
    var ret = self.tp$iternext();
    if (ret === undefined) {
        throw new Sk.builtin.StopIteration();
    }
    return ret;
};
var format = function (kwa) {
    // following PEP 3101

    var a, args, key, kwargs;
    var ret;
    var regex;
    var index;
    var replFunc;
    var arg_dict = {};

    Sk.builtin.pyCheckArgsLen("format", arguments.length, 0, Infinity, true, true);

    args = new Sk.builtins["tuple"](Array.prototype.slice.call(arguments, 1)); /*vararg*/
    kwargs = new Sk.builtins["dict"](kwa);

    if (arguments[1] === undefined) {
        return args.v;
    }
    index = 0;
    regex = /{(((?:\d+)|(?:\w+))?((?:\.(\w+))|(?:\[((?:\d+)|(?:\w+))\])?))?(?:\!([rs]))?(?:\:((?:(.)?([<\>\=\^]))?([\+\-\s])?(#)?(0)?(\d+)?(,)?(?:\.(\d+))?([bcdeEfFgGnosxX%])?))?}/g;
    // ex: {o.name!r:*^+#030,.9b}
    // Field 1, Field_name, o.name
    // Field 2, arg_name, o
    // Field 3, attribute_name/Element_index , .name
    // Field 4, Attribute name, name
    // Field 5, element_index, [0]
    // Field 6, conversion, r
    // Field 7, format_spec,*^+#030,.9b
    // Field 9, fill_character,*
    // Field 10, fill_align, ^
    // Field 11, sign, +
    // Field 12, 0x, #
    // Filed 13, sign-aware 0 padding, 0
    // Field 14, width, 30
    // Field 15, comma, ,
    // Field 16, precision, .9
    // Field 17, conversionType, b

    // Detect empty/int/complex name
    // retrive field value
    // hand off format spec
    // return resulting spec to function


    if(kwargs.size !== 0){

        var kwItems = Sk.misceval.callsimArray(Sk.builtin.dict.prototype["items"], [kwargs]);

        for (var n in kwItems.v){
            arg_dict[kwItems.v[n].v[0].v] = kwItems.v[n].v[1];
        }
    }
    for(var i in args.v){
        if(i !== "0") {
            arg_dict[i-1] = args.v[i];
        }
    }

    replFunc = function (substring, field_name, arg_name, attr_name, attribute_name, element_index, conversion, format_spec, fill_char, fill_align, sign, zero_pad, sign_aware, fieldWidth, comma, precision, conversionType,
                            offset, str_whole){
        var return_str;
        var formatNumber;
        var formatFormat;
        var result;
        var base;
        var value;
        var handleWidth;
        var alternateForm;
        var precedeWithSign;
        var blankBeforePositive;
        var leftAdjust;
        var centerAdjust;
        var zeroPad;
        var convName;
        var convValue;
        var percent;
        var container;
        fieldWidth = Sk.builtin.asnum$(fieldWidth);
        precision = Sk.builtin.asnum$(precision);

        if(element_index !== undefined && element_index !== ""){
            container = arg_dict[arg_name];
            if (container.constructor === Array) {
                value = container[element_index];
            } else {
                if (container instanceof Sk.builtin.dict) {
                    value = Sk.abstr.objectGetItem(container, new Sk.builtin.str(element_index), false);
                } else {
                    value = Sk.abstr.objectGetItem(container, new Sk.builtin.int_(parseInt(element_index, 10)), false);
                }
            }
            index++;
        } else if(attribute_name !== undefined && attribute_name !== ""){
            value = arg_dict[arg_name][attribute_name];
            index++;
        } else if(arg_name !== undefined && arg_name !== ""){
            value = arg_dict[arg_name];
            index++;
        } else if(field_name === undefined || field_name === ""){
            return_str = arg_dict[index];
            index++;
            value = return_str;
        } else if(field_name instanceof Sk.builtin.int_ ||
                  field_name instanceof Sk.builtin.float_ ||
                  field_name instanceof Sk.builtin.lng || !isNaN(parseInt(field_name, 10))){
            return_str = arg_dict[field_name];
            index++;
            value = return_str;
        }

        if (precision === "") { // ff passes '' here aswell causing problems with G,g, etc.
            precision = undefined;
        }
        if(fill_char === undefined || fill_char === ""){
            fill_char = " ";
        }

        zeroPad = false;
        leftAdjust = false;
        centerAdjust = false;
        blankBeforePositive = false;
        precedeWithSign = false;
        alternateForm = false;
        if (format_spec) {
            if(sign !== undefined && sign !== ""){
                if ("-".indexOf(sign) !== -1) {
                    leftAdjust = true;
                } else if ("+".indexOf(sign) !== -1) {
                    precedeWithSign = true;
                } else if (" ".indexOf(sign) !== -1) {
                    blankBeforePositive = true;
                }
            }
            if(zero_pad){
                alternateForm = "#".indexOf(zero_pad) !== -1;
            }
            if(fieldWidth !== undefined && fieldWidth !== ""){
                if(fill_char === undefined || fill_char === ""){
                    fill_char = " ";
                }
            }
            if("%".indexOf(conversionType) !== -1){
                percent = true;
            }
        }
        if (precision) {
            precision = parseInt(precision, 10);
        }

        formatFormat = function(value){
            var r;
            var s;
            if(conversion === undefined || conversion === "" || conversion == "s"){
                s = new Sk.builtin.str(value);
                return s.v;
            } else if(conversion == "r"){
                r = Sk.builtin.repr(value);
                return r.v;
            }

        };

        handleWidth = function (prefix, r) {
            // print(prefix);
            var totLen;
            r = Sk.ffi.remapToJs(r);

            var j;
            if(percent){
                r = r +"%";
            }
            if (fieldWidth !== undefined && fieldWidth !== "") {
                fieldWidth = parseInt(fieldWidth, 10);
                totLen = r.length + prefix.length;
                if (zeroPad) {
                    for (j = totLen; j < fieldWidth; ++j) {
                        r = "0" + r;
                    }
                } else if (leftAdjust) {
                    for (j = totLen; j < fieldWidth; ++j) {
                        r = r + fill_char;
                    }
                } else if(">".indexOf(fill_align) !== -1){
                    for (j = totLen; j < fieldWidth; ++j) {
                        prefix = fill_char + prefix;
                    }
                } else if("^".indexOf(fill_align) !== -1){
                    for (j = totLen; j < fieldWidth; ++j) {
                        if(j % 2 === 0){
                            prefix = fill_char + prefix;
                        } else if ( j % 2 === 1){
                            r = r + fill_char;
                        }
                    }
                } else if("=".indexOf(fill_align) !== -1){
                    for (j = totLen; j < fieldWidth; ++j) {
                        r =  fill_char + r;
                    }
                } else{
                    for (j = totLen; j < fieldWidth; ++j) {
                        r = r + fill_char;
                    }
                }
            }
            return formatFormat(prefix + r);
        };

        formatNumber = function(n, base){
            var precZeroPadded;
            var prefix;
            var neg;
            var r;

            base = Sk.builtin.asnum$(base);
            neg = false;

            if(format_spec === undefined){
                return formatFormat(value);
            }

            if (typeof n === "number") {
                if (n < 0) {
                    n = -n;
                    neg = true;
                }
                r = n.toString(base);
            } else if (n instanceof Sk.builtin.float_) {
                r = n.str$(base, false);
                if (r.length > 2 && r.substr(-2) === ".0") {
                    r = r.substr(0, r.length - 2);
                }
                neg = n.nb$isnegative();
            } else if (n instanceof Sk.builtin.int_) {
                r = n.str$(base, false);
                neg = n.nb$isnegative();
            } else if (n instanceof Sk.builtin.lng) {
                r = n.str$(base, false);
                neg = n.nb$isnegative();    //  neg = n.size$ < 0;  RNL long.js change
            } else{
                r = n;
            }

            if (precision) {
                n = Number(r);
                if (n < 0) {
                    n = -n;
                    neg = true;
                }
                r = n.toFixed(precision);
            }

            precZeroPadded = false;
            prefix = "";

            if (neg) {
                prefix = "-";
            } else if (precedeWithSign) {
                prefix = "+" ;
            } else if (blankBeforePositive) {
                prefix = " " ;
            }

            if (alternateForm) {
                if (base === 16) {
                    prefix += "0x";
                } else if (base === 8 && !precZeroPadded && r !== "0") {
                    prefix += "0o";
                } else if (base === 2 && !precZeroPadded && r !== "0"){
                    prefix += "0b";
                }
            }

            if(conversionType === "n"){
                r=r.toLocaleString();
            } else if(",".indexOf(comma) !== -1){
                var parts = r.toString().split(".");
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                r = parts.join(".");
            }
            return handleWidth(prefix, r);
        };

        base = 10;
        if(conversionType === "d" || conversionType === "n" || conversionType === "" || conversionType === undefined){
            return formatNumber(value, 10);
        }else if (conversionType === "b") {
            return formatNumber(value, 2);
        }else if (conversionType === "o") {
            return formatNumber(value, 8);
        } else if (conversionType === "x") {
            return formatNumber(value, 16);
        } else if (conversionType === "X") {
            return formatNumber(value, 16).toUpperCase();
        } else if (conversionType === "f" || conversionType === "F" || conversionType === "e" || conversionType === "E" || conversionType === "g" || conversionType === "G") {
            if(alternateForm){
                throw new Sk.builtin.ValueError("Alternate form (#) not allowed in float format specifier");
            }
            convValue = Sk.builtin.asnum$(value);
            if (typeof convValue === "string") {
                convValue = Number(convValue);
            }
            if (convValue === Infinity) {
                return handleWidth("","inf");
            }
            if (convValue === -Infinity) {
                return handleWidth("-","inf");
            }
            if (isNaN(convValue)) {
                return handleWidth("","nan");
            }
            convName = ["toExponential", "toFixed", "toPrecision"]["efg".indexOf(conversionType.toLowerCase())];
            if (precision === undefined || precision === "") {
                if (conversionType === "e" || conversionType === "E" || conversionType === "%") {
                    precision = parseInt(6, 10);
                } else if (conversionType === "f" || conversionType === "F") {
                    precision = parseInt(6, 10);
                }
            }
            result = (convValue)[convName](precision);
            if ("EFG".indexOf(conversionType) !== -1) {
                result = result.toUpperCase();
            }
            return formatNumber(result, 10);
        } else if (conversionType === "c") {
            if (typeof value === "number") {
                return handleWidth("", String.fromCharCode(value));
            } else if (value instanceof Sk.builtin.int_) {
                return handleWidth("", String.fromCharCode(value.v));
            } else if (value instanceof Sk.builtin.float_) {
                return handleWidth("", String.fromCharCode(value.v));
            } else if (value instanceof Sk.builtin.lng) {
                return handleWidth("", String.fromCharCode(value.str$(10, false)[0]));
            } else if (value.constructor === Sk.builtin.str) {
                return handleWidth("", value.v.substr(0, 1));
            } else {
                throw new Sk.builtin.TypeError("an integer is required");
            }
        } else if (percent) {
            if(precision === undefined){precision = parseInt(7,10);}
            return formatNumber(value.nb$multiply(new Sk.builtin.int_(100)), 10);
        }

    };

    ret = args.v[0].v.replace(regex, replFunc);
    return new Sk.builtin.str(ret);
};

format["co_kwargs"] = true;
Sk.builtin.str.prototype["format"] = new Sk.builtin.func(format);
/**
 * @constructor
 * @param {Array.<Object>|Object} L
 */
Sk.builtin.tuple = function (L) {
    var it, i;
    if (!(this instanceof Sk.builtin.tuple)) {
        Sk.builtin.pyCheckArgsLen("tuple", arguments.length, 0, 1);
        return new Sk.builtin.tuple(L);
    }


    if (L === undefined) {
        L = [];
    }

    if (Object.prototype.toString.apply(L) === "[object Array]") {
        this.v = L;
    } else {
        if (Sk.builtin.checkIterable(L)) {
            this.v = [];
            for (it = Sk.abstr.iter(L), i = it.tp$iternext(); i !== undefined; i = it.tp$iternext()) {
                this.v.push(i);
            }
        } else {
            throw new Sk.builtin.TypeError("expecting Array or iterable");
        }
    }

    this.__class__ = Sk.builtin.tuple;

    this["v"] = this.v;
    return this;
};

Sk.abstr.setUpInheritance("tuple", Sk.builtin.tuple, Sk.builtin.seqtype);

Sk.builtin.tuple.prototype["$r"] = function () {
    var ret;
    var i;
    var bits;
    if (this.v.length === 0) {
        return new Sk.builtin.str("()");
    }
    bits = [];
    for (i = 0; i < this.v.length; ++i) {
        bits[i] = Sk.misceval.objectRepr(this.v[i]).v;
    }
    ret = bits.join(", ");
    if (this.v.length === 1) {
        ret += ",";
    }
    return new Sk.builtin.str("(" + ret + ")");
};

Sk.builtin.tuple.prototype.mp$subscript = function (index) {
    var ret;
    var i;
    if (Sk.misceval.isIndex(index)) {
        i = Sk.misceval.asIndex(index);
        if (i !== undefined) {
            if (i < 0) {
                i = this.v.length + i;
            }
            if (i < 0 || i >= this.v.length) {
                throw new Sk.builtin.IndexError("tuple index out of range");
            }
            return this.v[i];
        }
    } else if (index instanceof Sk.builtin.slice) {
        ret = [];
        index.sssiter$(this, function (i, wrt) {
            ret.push(wrt.v[i]);
        });
        return new Sk.builtin.tuple(ret);
    }

    throw new Sk.builtin.TypeError("tuple indices must be integers, not " + Sk.abstr.typeName(index));
};

// todo; the numbers and order are taken from python, but the answer's
// obviously not the same because there's no int wrapping. shouldn't matter,
// but would be nice to make the hash() values the same if it's not too
// expensive to simplify tests.
Sk.builtin.tuple.prototype.tp$hash = function () {
    var y;
    var i;
    var mult = 1000003;
    var x = 0x345678;
    var len = this.v.length;
    for (i = 0; i < len; ++i) {
        y = Sk.builtin.hash(this.v[i]).v;
        if (y === -1) {
            return new Sk.builtin.int_(-1);
        }
        x = (x ^ y) * mult;
        mult += 82520 + len + len;
    }
    x += 97531;
    if (x === -1) {
        x = -2;
    }
    return new Sk.builtin.int_(x | 0);
};

Sk.builtin.tuple.prototype.sq$repeat = function (n) {
    var j;
    var i;
    var ret;

    n = Sk.misceval.asIndex(n);
    ret = [];
    for (i = 0; i < n; ++i) {
        for (j = 0; j < this.v.length; ++j) {
            ret.push(this.v[j]);
        }
    }
    return new Sk.builtin.tuple(ret);
};
Sk.builtin.tuple.prototype.nb$multiply = Sk.builtin.tuple.prototype.sq$repeat;
Sk.builtin.tuple.prototype.nb$inplace_multiply = Sk.builtin.tuple.prototype.sq$repeat;

Sk.builtin.tuple.prototype.__iter__ = new Sk.builtin.func(function (self) {
    Sk.builtin.pyCheckArgsLen("__iter__", arguments.length, 1, 1);
    return new Sk.builtin.tuple_iter_(self);
});

Sk.builtin.tuple.prototype.tp$iter = function () {
    return new Sk.builtin.tuple_iter_(this);
};

Sk.builtin.tuple.prototype.tp$richcompare = function (w, op) {
    //print("  tup rc", JSON.stringify(this.v), JSON.stringify(w), op);

    // w not a tuple
    var k;
    var i;
    var wl;
    var vl;
    var v;
    if (!w.__class__ ||
        !Sk.misceval.isTrue(Sk.builtin.isinstance(w, Sk.builtin.tuple))) {
        // shortcuts for eq/not
        if (op === "Eq") {
            return false;
        }
        if (op === "NotEq") {
            return true;
        }

        // todo; other types should have an arbitrary order
        return false;
    }

    v = this.v;
    w = w.v;
    vl = v.length;
    wl = w.length;

    for (i = 0; i < vl && i < wl; ++i) {
        k = Sk.misceval.richCompareBool(v[i], w[i], "Eq");
        if (!k) {
            break;
        }
    }

    if (i >= vl || i >= wl) {
        // no more items to compare, compare sizes
        switch (op) {
            case "Lt":
                return vl < wl;
            case "LtE":
                return vl <= wl;
            case "Eq":
                return vl === wl;
            case "NotEq":
                return vl !== wl;
            case "Gt":
                return vl > wl;
            case "GtE":
                return vl >= wl;
            default:
                Sk.asserts.fail();
        }
    }

    // we have an item that's different

    // shortcuts for eq/not
    if (op === "Eq") {
        return false;
    }
    if (op === "NotEq") {
        return true;
    }

    // or, compare the differing element using the proper operator
    //print("  tup rcb end", i, v[i] instanceof Sk.builtin.str, JSON.stringify(v[i]), w[i] instanceof Sk.builtin.str, JSON.stringify(w[i]), op);
    return Sk.misceval.richCompareBool(v[i], w[i], op);
};

Sk.builtin.tuple.prototype.sq$concat = function (other) {
    var msg;
    if (other.__class__ != Sk.builtin.tuple) {
        msg = "can only concatenate tuple (not \"";
        msg += Sk.abstr.typeName(other) + "\") to tuple";
        throw new Sk.builtin.TypeError(msg);
    }

    return new Sk.builtin.tuple(this.v.concat(other.v));
};

Sk.builtin.tuple.prototype.sq$contains = function (ob) {
    var it, i;

    for (it = this.tp$iter(), i = it.tp$iternext(); i !== undefined; i = it.tp$iternext()) {
        if (Sk.misceval.richCompareBool(i, ob, "Eq")) {
            return true;
        }
    }

    return false;
};

Sk.builtin.tuple.prototype.nb$add = Sk.builtin.tuple.prototype.sq$concat;
Sk.builtin.tuple.prototype.nb$inplace_add = Sk.builtin.tuple.prototype.sq$concat;

Sk.builtin.tuple.prototype.sq$length = function () {
    return this.v.length;
};


Sk.builtin.tuple.prototype["index"] = new Sk.builtin.func(function (self, item) {
    var i;
    var len = self.v.length;
    var obj = self.v;
    for (i = 0; i < len; ++i) {
        if (Sk.misceval.richCompareBool(obj[i], item, "Eq")) {
            return new Sk.builtin.int_(i);
        }
    }
    throw new Sk.builtin.ValueError("tuple.index(x): x not in tuple");
});

Sk.builtin.tuple.prototype["count"] = new Sk.builtin.func(function (self, item) {
    var i;
    var len = self.v.length;
    var obj = self.v;
    var count = 0;
    for (i = 0; i < len; ++i) {
        if (Sk.misceval.richCompareBool(obj[i], item, "Eq")) {
            count += 1;
        }
    }
    return  new Sk.builtin.int_(count);
});

Sk.exportSymbol("Sk.builtin.tuple", Sk.builtin.tuple);

/**
 * @constructor
 * @param {Object} obj
 */
Sk.builtin.tuple_iter_ = function (obj) {
    if (!(this instanceof Sk.builtin.tuple_iter_)) {
        return new Sk.builtin.tuple_iter_(obj);
    }
    this.$index = 0;
    this.$obj = obj.v.slice();
    this.sq$length = this.$obj.length;
    this.tp$iter = this;
    this.tp$iternext = function () {
        if (this.$index >= this.sq$length) {
            return undefined;
        }
        return this.$obj[this.$index++];
    };
    this.$r = function () {
        return new Sk.builtin.str("tupleiterator");
    };
    return this;
};

Sk.abstr.setUpInheritance("tupleiterator", Sk.builtin.tuple_iter_, Sk.builtin.object);

Sk.builtin.tuple_iter_.prototype.__class__ = Sk.builtin.tuple_iter_;

Sk.builtin.tuple_iter_.prototype.__iter__ = new Sk.builtin.func(function (self) {
    return self;
});

Sk.builtin.tuple_iter_.prototype.next$ = function (self) {
    var ret = self.tp$iternext();
    if (ret === undefined) {
        throw new Sk.builtin.StopIteration();
    }
    return ret;
};
/**
 * @constructor
 * @param {Array.<Object>} L
 */
Sk.builtin.dict = function dict (L) {
    var v;
    var it, k;
    var i;
    if (!(this instanceof Sk.builtin.dict)) {
        return new Sk.builtin.dict(L);
    }


    if (L === undefined) {
        L = [];
    }

    this.size = 0;
    this.buckets = {};

    if (Object.prototype.toString.apply(L) === "[object Array]") {
        // Handle dictionary literals
        for (i = 0; i < L.length; i += 2) {
            this.mp$ass_subscript(L[i], L[i + 1]);
        }
    } else if (L instanceof Sk.builtin.dict) {
        // Handle calls of type "dict(mapping)" from Python code
        for (it = Sk.abstr.iter(L), k = it.tp$iternext();
             k !== undefined;
             k = it.tp$iternext()) {
            v = L.mp$subscript(k);
            if (v === undefined) {
                //print(k, "had undefined v");
                v = null;
            }
            this.mp$ass_subscript(k, v);
        }
    } else if (Sk.builtin.checkIterable(L)) {
        // Handle calls of type "dict(iterable)" from Python code
        for (it = Sk.abstr.iter(L), i = it.tp$iternext(); i !== undefined; i = it.tp$iternext()) {
            if (i.mp$subscript) {
                this.mp$ass_subscript(i.mp$subscript(0), i.mp$subscript(1));
            } else {
                throw new Sk.builtin.TypeError("element " + this.size + " is not a sequence");
            }
        }
    } else {
        throw new Sk.builtin.TypeError("object is not iterable");
    }

    this.__class__ = Sk.builtin.dict;
    this.tp$call = undefined; // Not callable, even though constructor is

    return this;
};

Sk.builtin.dict.tp$call = function(args, kw) {
    var d, i;
    Sk.builtin.pyCheckArgsLen("dict", args, 0, 1);
    d = new Sk.builtin.dict(args[0]);
    if (kw) {
        for (i = 0; i < kw.length; i += 2) {
            d.mp$ass_subscript(new Sk.builtin.str(kw[i]), kw[i+1]);
        }
    }
    return d;
};

Sk.abstr.setUpInheritance("dict", Sk.builtin.dict, Sk.builtin.object);
Sk.abstr.markUnhashable(Sk.builtin.dict);

var kf = Sk.builtin.hash;

Sk.builtin.dict.prototype.key$lookup = function (bucket, key) {
    var item;
    var eq;
    var i;

    for (i = 0; i < bucket.items.length; i++) {
        item = bucket.items[i];
        eq = Sk.misceval.richCompareBool(item.lhs, key, "Eq");
        if (eq) {
            return item;
        }
    }

    return null;
};

Sk.builtin.dict.prototype.key$pop = function (bucket, key) {
    var item;
    var eq;
    var i;

    for (i = 0; i < bucket.items.length; i++) {
        item = bucket.items[i];
        eq = Sk.misceval.richCompareBool(item.lhs, key, "Eq");
        if (eq) {
            bucket.items.splice(i, 1);
            this.size -= 1;
            return item;
        }
    }
    return undefined;
};

// Perform dictionary lookup, either return value or undefined if key not in dictionary
Sk.builtin.dict.prototype.mp$lookup = function (key) {
    var k = kf(key);
    var bucket = this.buckets[k.v];
    var item;

    // todo; does this need to go through mp$ma_lookup

    if (bucket !== undefined) {
        item = this.key$lookup(bucket, key);
        if (item) {
            return item.rhs;
        }
    }

    // Not found in dictionary
    return undefined;
};

Sk.builtin.dict.prototype.mp$subscript = function (key) {
    Sk.builtin.pyCheckArgsLen("[]", arguments.length, 1, 2, false, false);
    var s;
    var res = this.mp$lookup(key);

    if (res !== undefined) {
        // Found in dictionary
        return res;
    } else {
        // Not found in dictionary
        s = new Sk.builtin.str(key);
        throw new Sk.builtin.KeyError(s.v);
    }
};

Sk.builtin.dict.prototype.sq$contains = function (ob) {
    var res = this.mp$lookup(ob);

    return (res !== undefined);
};

Sk.builtin.dict.prototype.mp$ass_subscript = function (key, w) {
    var k = kf(key);
    var bucket = this.buckets[k.v];
    var item;

    if (bucket === undefined) {
        // New bucket
        bucket = {$hash: k, items: [
            {lhs: key, rhs: w}
        ]};
        this.buckets[k.v] = bucket;
        this.size += 1;
        return;
    }

    item = this.key$lookup(bucket, key);
    if (item) {
        item.rhs = w;
        return;
    }

    // Not found in dictionary
    bucket.items.push({lhs: key, rhs: w});
    this.size += 1;
};

Sk.builtin.dict.prototype.mp$del_subscript = function (key) {
    Sk.builtin.pyCheckArgsLen("del", arguments.length, 1, 1, false, false);
    var k = kf(key);
    var bucket = this.buckets[k.v];
    var item;
    var s;

    // todo; does this need to go through mp$ma_lookup

    if (bucket !== undefined) {
        item = this.key$pop(bucket, key);
        if (item !== undefined) {
            return;
        }
    }

    // Not found in dictionary
    s = new Sk.builtin.str(key);
    throw new Sk.builtin.KeyError(s.v);
};

Sk.builtin.dict.prototype["$r"] = function () {
    var v;
    var iter, k;
    var ret = [];
    for (iter = Sk.abstr.iter(this), k = iter.tp$iternext();
         k !== undefined;
         k = iter.tp$iternext()) {
        v = this.mp$subscript(k);
        if (v === undefined) {
            //print(k, "had undefined v");
            v = null;
        }

        // we need to check if value is same as object
        // otherwise it would cause an stack overflow
        if(v === this) {
            ret.push(Sk.misceval.objectRepr(k).v + ": {...}");
        } else {
            ret.push(Sk.misceval.objectRepr(k).v + ": " + Sk.misceval.objectRepr(v).v);
        }
    }
    return new Sk.builtin.str("{" + ret.join(", ") + "}");
};

Sk.builtin.dict.prototype.mp$length = function () {
    return this.size;
};

Sk.builtin.dict.prototype["get"] = new Sk.builtin.func(function (self, k, d) {
    Sk.builtin.pyCheckArgsLen("get()", arguments.length, 1, 2, false, true);
    var ret;

    if (d === undefined) {
        d = Sk.builtin.none.none$;
    }

    ret = self.mp$lookup(k);
    if (ret === undefined) {
        ret = d;
    }

    return ret;
});

Sk.builtin.dict.prototype["pop"] = new Sk.builtin.func(function (self, key, d) {
    Sk.builtin.pyCheckArgsLen("pop()", arguments.length, 1, 2, false, true);
    var k = kf(key);
    var bucket = self.buckets[k.v];
    var item;
    var s;

    // todo; does this need to go through mp$ma_lookup
    if (bucket !== undefined) {
        item = self.key$pop(bucket, key);
        if (item !== undefined) {
            return item.rhs;
        }
    }

    // Not found in dictionary
    if (d !== undefined) {
        return d;
    }

    s = new Sk.builtin.str(key);
    throw new Sk.builtin.KeyError(s.v);
});

Sk.builtin.dict.prototype["has_key"] = new Sk.builtin.func(function (self, k) {
    Sk.builtin.pyCheckArgsLen("has_key()", arguments.length, 1, 1, false, true);
    return new Sk.builtin.bool( self.sq$contains(k));
});

Sk.builtin.dict.prototype["items"] = new Sk.builtin.func(function (self) {
    Sk.builtin.pyCheckArgsLen("items()", arguments.length, 0, 0, false, true);
    var v;
    var iter, k;
    var ret = [];

    for (iter = Sk.abstr.iter(self), k = iter.tp$iternext();
         k !== undefined;
         k = iter.tp$iternext()) {
        v = self.mp$subscript(k);
        if (v === undefined) {
            //print(k, "had undefined v");
            v = null;
        }
        ret.push(new Sk.builtin.tuple([k, v]));
    }
    return new Sk.builtin.list(ret);
});

Sk.builtin.dict.prototype["keys"] = new Sk.builtin.func(function (self) {
    Sk.builtin.pyCheckArgsLen("keys()", arguments.length, 0, 0, false, true);
    var iter, k;
    var ret = [];

    for (iter = Sk.abstr.iter(self), k = iter.tp$iternext();
         k !== undefined;
         k = iter.tp$iternext()) {
        ret.push(k);
    }
    return new Sk.builtin.list(ret);
});

Sk.builtin.dict.prototype["values"] = new Sk.builtin.func(function (self) {
    Sk.builtin.pyCheckArgsLen("values()", arguments.length, 0, 0, false, true);
    var v;
    var iter, k;
    var ret = [];

    for (iter = Sk.abstr.iter(self), k = iter.tp$iternext();
         k !== undefined;
         k = iter.tp$iternext()) {
        v = self.mp$subscript(k);
        if (v === undefined) {
            v = null;
        }
        ret.push(v);
    }
    return new Sk.builtin.list(ret);
});

Sk.builtin.dict.prototype["clear"] = new Sk.builtin.func(function (self) {
    Sk.builtin.pyCheckArgsLen("clear()", arguments.length, 0, 0, false, true);
    var k;
    var iter;

    for (iter = Sk.abstr.iter(self), k = iter.tp$iternext();
         k !== undefined;
         k = iter.tp$iternext()) {
        self.mp$del_subscript(k);
    }
});

Sk.builtin.dict.prototype["setdefault"] = new Sk.builtin.func(function (self, key, default_) {
    try {
        return self.mp$subscript(key);
    }
    catch (e) {
        if (default_ === undefined) {
            default_ = Sk.builtin.none.none$;
        }
        self.mp$ass_subscript(key, default_);
        return default_;
    }
});

/*
    this function mimics the cpython implementation, which is also the reason for the
    almost similar code, this may be changed in future
*/
Sk.builtin.dict.prototype.dict_merge = function(b) {
    var iter;
    var k, v;
    if(b instanceof Sk.builtin.dict) {
        // fast way
        for (iter = b.tp$iter(), k = iter.tp$iternext(); k !== undefined; k = iter.tp$iternext()) {
            v = b.mp$subscript(k);
            if (v === undefined) {
                throw new Sk.builtin.AttributeError("cannot get item for key: " + k.v);
            }
            this.mp$ass_subscript(k, v);
        }
    } else {
        // generic slower way
        var keys = Sk.misceval.callsimArray(b["keys"], [b]);
        for (iter = Sk.abstr.iter(keys), k = iter.tp$iternext(); k !== undefined; k = iter.tp$iternext()) {
            v = b.tp$getitem(k); // get value
            if (v === undefined) {
                throw new Sk.builtin.AttributeError("cannot get item for key: " + k.v);
            }
            this.mp$ass_subscript(k, v);
        }
    }
};

/**
 *   update() accepts either another dictionary object or an iterable of key/value pairs (as tuples or other iterables of length two).
 *   If keyword arguments are specified, the dictionary is then updated with those key/value pairs: d.update(red=1, blue=2).
 *   https://hg.python.org/cpython/file/4ff865976bb9/Objects/dictobject.c
 */
var update_f = function (kwargs, self, other) {
    // case another dict or obj with keys and getitem has been provided
    if(other !== undefined && (other.tp$name === "dict" || other["keys"])) {
        self.dict_merge(other); // we merge with override
    } else if(other !== undefined && Sk.builtin.checkIterable(other)) {
        // 2nd case, we expect an iterable that contains another iterable of length 2
        var iter;
        var k, v;
        var seq_i = 0; // index of current sequence item
        for (iter = Sk.abstr.iter(other), k = iter.tp$iternext(); k !== undefined; k = iter.tp$iternext(), seq_i++) {
            // check if value is iter
            if (!Sk.builtin.checkIterable(k)) {
                throw new Sk.builtin.TypeError("cannot convert dictionary update sequence element #" + seq_i + " to a sequence");
            }

            // cpython impl. would transform iterable into sequence
            // we just call iternext twice if k has length of 2
            if(k.sq$length() === 2) {
                var k_iter = Sk.abstr.iter(k);
                var k_key = k_iter.tp$iternext();
                var k_value = k_iter.tp$iternext();
                self.mp$ass_subscript(k_key, k_value);
            } else {
                // throw exception
                throw new Sk.builtin.ValueError("dictionary update sequence element #" + seq_i + " has length " + k.sq$length() + "; 2 is required");
            }
        }
    } else if(other !== undefined) {
        // other is not a dict or iterable
        throw new Sk.builtin.TypeError("'" +Sk.abstr.typeName(other) + "' object is not iterable");
    }

    // apply all key/value pairs of kwargs
    // create here kwargs_dict, there could be exceptions in other cases before
    var kwargs_dict = new Sk.builtins.dict(kwargs);
    self.dict_merge(kwargs_dict);

    // returns none, when successful or throws exception
    return  Sk.builtin.none.none$;
};

update_f.co_kwargs = true;
Sk.builtin.dict.prototype.update = new Sk.builtin.func(update_f);

Sk.builtin.dict.prototype.__contains__ = new Sk.builtin.func(function (self, item) {
    Sk.builtin.pyCheckArgsLen("__contains__", arguments.length, 2, 2);
    return new Sk.builtin.bool(self.sq$contains(item));
});

Sk.builtin.dict.prototype.__cmp__ = new Sk.builtin.func(function (self, other, op) {
    // __cmp__ cannot be supported until dict lt/le/gt/ge operations are supported
    return Sk.builtin.NotImplemented.NotImplemented$;
});

Sk.builtin.dict.prototype.__delitem__ = new Sk.builtin.func(function (self, item) {
    Sk.builtin.pyCheckArgsLen("__delitem__", arguments.length, 1, 1, false, true);
    return Sk.builtin.dict.prototype.mp$del_subscript.call(self, item);
});

Sk.builtin.dict.prototype.__getitem__ = new Sk.builtin.func(function (self, item) {
    Sk.builtin.pyCheckArgsLen("__getitem__", arguments.length, 1, 1, false, true);
    return Sk.builtin.dict.prototype.mp$subscript.call(self, item);
});

Sk.builtin.dict.prototype.__setitem__ = new Sk.builtin.func(function (self, item, value) {
    Sk.builtin.pyCheckArgsLen("__setitem__", arguments.length, 2, 2, false, true);
    return Sk.builtin.dict.prototype.mp$ass_subscript.call(self, item, value);
});

Sk.builtin.dict.prototype.__hash__ = new Sk.builtin.func(function (self) {
    Sk.builtin.pyCheckArgsLen("__hash__", arguments.length, 0, 0, false, true);
    return Sk.builtin.dict.prototype.tp$hash.call(self);
});

Sk.builtin.dict.prototype.__len__ = new Sk.builtin.func(function (self) {
    Sk.builtin.pyCheckArgsLen("__len__", arguments.length, 0, 0, false, true);
    return Sk.builtin.dict.prototype.mp$length.call(self);
});

Sk.builtin.dict.prototype.__getattribute__ = new Sk.builtin.func(function (self, attr) {
    Sk.builtin.pyCheckArgsLen("__getattribute__", arguments.length, 1, 1, false, true);
    if (!Sk.builtin.checkString(attr)) { throw new Sk.builtin.TypeError("__getattribute__ requires a string"); }
    return Sk.builtin.dict.prototype.tp$getattr.call(self, attr);
});

Sk.builtin.dict.prototype.__iter__ = new Sk.builtin.func(function (self) {
    Sk.builtin.pyCheckArgsLen("__iter__", arguments.length, 0, 0, false, true);

    return new Sk.builtin.dict_iter_(self);
});

Sk.builtin.dict.prototype.tp$iter = function () {
    return new Sk.builtin.dict_iter_(this);
};

Sk.builtin.dict.prototype.__repr__ = new Sk.builtin.func(function (self) {
    Sk.builtin.pyCheckArgsLen("__repr__", arguments.length, 0, 0, false, true);
    return Sk.builtin.dict.prototype["$r"].call(self);
});

/* python3 recommends implementing simple ops */
Sk.builtin.dict.prototype.ob$eq = function (other) {

    var iter, k, v, otherv;

    if (this === other) {
        return Sk.builtin.bool.true$;
    }

    if (!(other instanceof Sk.builtin.dict)) {
        return Sk.builtin.NotImplemented.NotImplemented$;
    }

    if (this.size !== other.size) {
        return Sk.builtin.bool.false$;
    }

    for (iter = this.tp$iter(), k = iter.tp$iternext();
         k !== undefined;
         k = iter.tp$iternext()) {
        v = this.mp$subscript(k);
        otherv = other.mp$subscript(k);

        if (!Sk.misceval.richCompareBool(v, otherv, "Eq")) {
            return Sk.builtin.bool.false$;
        }
    }

    return Sk.builtin.bool.true$;
};

Sk.builtin.dict.prototype.ob$ne = function (other) {

    var isEqual = this.ob$eq(other);

    if (isEqual instanceof Sk.builtin.NotImplemented) {
        return isEqual;
    } else if (isEqual.v) {
        return Sk.builtin.bool.false$;
    } else {
        return Sk.builtin.bool.true$;
    }

};

Sk.builtin.dict.prototype["copy"] = new Sk.builtin.func(function (self) {
    Sk.builtin.pyCheckArgsLen("copy", arguments.length, 0, 0, false, true);

    var it; // Iterator
    var k; // Key of dict item
    var v; // Value of dict item
    var newCopy = new Sk.builtin.dict([]);

    for (it = Sk.abstr.iter(self), k = it.tp$iternext();
            k !== undefined;
            k = it.tp$iternext()) {
        v = self.mp$subscript(k);
        if (v === undefined) {
            v = null;
        }
        newCopy.mp$ass_subscript(k, v);
    }

    return newCopy;
});

Sk.builtin.dict.$fromkeys = function fromkeys(self, seq, value) {
    var k, iter, val, res, iterable;

    if (self instanceof Sk.builtin.dict) {
        // instance call
        Sk.builtin.pyCheckArgsLen("fromkeys", arguments.length, 1, 2, false, true);

        res = self;
        iterable = seq;
        val = value === undefined ? Sk.builtin.none.none$ : value;
    } else {
        // static call
        Sk.builtin.pyCheckArgsLen("fromkeys", arguments.length, 1, 2, false, false);

        res = new Sk.builtin.dict([]);
        iterable = self;
        val = seq === undefined ? Sk.builtin.none.none$ : seq;
    }

    if (!Sk.builtin.checkIterable(iterable)) {
        throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(iterable) + "' object is not iterable");
    }

    for (iter = Sk.abstr.iter(iterable), k = iter.tp$iternext();
            k !== undefined;
            k = iter.tp$iternext()) {
        res.mp$ass_subscript(k, val);
    }

    return res;
};


Sk.builtin.dict.prototype["iteritems"] = new Sk.builtin.func(function (self) {
    throw new Sk.builtin.NotImplementedError("dict.iteritems is not yet implemented in Skulpt");
});

Sk.builtin.dict.prototype["iterkeys"] = new Sk.builtin.func(function (self) {
    throw new Sk.builtin.NotImplementedError("dict.iterkeys is not yet implemented in Skulpt");
});

Sk.builtin.dict.prototype["itervalues"] = new Sk.builtin.func(function (self) {
    throw new Sk.builtin.NotImplementedError("dict.itervalues is not yet implemented in Skulpt");
});

Sk.builtin.dict.prototype["popitem"] = new Sk.builtin.func(function (self) {
    throw new Sk.builtin.NotImplementedError("dict.popitem is not yet implemented in Skulpt");
});

Sk.builtin.dict.prototype["viewitems"] = new Sk.builtin.func(function (self) {
    throw new Sk.builtin.NotImplementedError("dict.viewitems is not yet implemented in Skulpt");
});

Sk.builtin.dict.prototype["viewkeys"] = new Sk.builtin.func(function (self) {
    throw new Sk.builtin.NotImplementedError("dict.viewkeys is not yet implemented in Skulpt");
});

Sk.builtin.dict.prototype["viewvalues"] = new Sk.builtin.func(function (self) {
    throw new Sk.builtin.NotImplementedError("dict.viewvalues is not yet implemented in Skulpt");
});

Sk.exportSymbol("Sk.builtin.dict", Sk.builtin.dict);

/**
 * @constructor
 * @param {Object} obj
 */
Sk.builtin.dict_iter_ = function (obj) {
    var k, i, bucket, allkeys, buckets;
    if (!(this instanceof Sk.builtin.dict_iter_)) {
        return new Sk.builtin.dict_iter_(obj);
    }
    this.$index = 0;
    this.$obj = obj;
    allkeys = [];
    buckets = obj.buckets;
    for (k in buckets) {
        if (buckets.hasOwnProperty(k)) {
            bucket = buckets[k];
            if (bucket && bucket.$hash !== undefined && bucket.items !== undefined) {
                // skip internal stuff. todo; merge pyobj and this
                for (i = 0; i < bucket.items.length; i++) {
                    allkeys.push(bucket.items[i].lhs);
                }
            }
        }
    }
    this.$keys = allkeys;
    this.tp$iter = this;
    this.tp$iternext = function () {
        // todo; StopIteration
        if (this.$index >= this.$keys.length) {
            return undefined;
        }
        return this.$keys[this.$index++];
        // return this.$obj[this.$keys[this.$index++]].lhs;
    };
    this.$r = function () {
        return new Sk.builtin.str("dictionary-keyiterator");
    };
    return this;
};

Sk.abstr.setUpInheritance("dictionary-keyiterator", Sk.builtin.dict_iter_, Sk.builtin.object);

Sk.builtin.dict_iter_.prototype.__class__ = Sk.builtin.dict_iter_;

Sk.builtin.dict_iter_.prototype.__iter__ = new Sk.builtin.func(function (self) {
    return self;
});

Sk.builtin.dict_iter_.prototype.next$ = function (self) {
    var ret = self.tp$iternext();
    if (ret === undefined) {
        throw new Sk.builtin.StopIteration();
    }
    return ret;
};
/**
 * @constructor
 * Sk.builtin.numtype
 *
 * @description
 * Abstract class for Python numeric types.
 *
 * @extends {Sk.builtin.object}
 *
 * @return {undefined} Cannot instantiate a Sk.builtin.numtype object
 */
Sk.builtin.numtype = function () {

    throw new Sk.builtin.ExternalError("Cannot instantiate abstract Sk.builtin.numtype class");

};

Sk.abstr.setUpInheritance("NumericType", Sk.builtin.numtype, Sk.builtin.object);

Sk.builtin.numtype.sk$abstract = true;

/**
 * Python wrapper of `__abs__` method.
 *
 * @name  __abs__
 * @instance
 * @memberOf Sk.builtin.numtype.prototype
 */
Sk.builtin.numtype.prototype["__abs__"] = new Sk.builtin.func(function (self) {

    if (self.nb$abs === undefined) {
        throw new Sk.builtin.NotImplementedError("__abs__ is not yet implemented");
    }

    Sk.builtin.pyCheckArgsLen("__abs__", arguments.length, 0, 0, false, true);
    return self.nb$abs();

});

/**
 * Python wrapper of `__neg__` method.
 *
 * @name  __neg__
 * @instance
 * @memberOf Sk.builtin.numtype.prototype
 */
Sk.builtin.numtype.prototype["__neg__"] = new Sk.builtin.func(function (self) {

    if (self.nb$negative === undefined) {
        throw new Sk.builtin.NotImplementedError("__neg__ is not yet implemented");
    }

    Sk.builtin.pyCheckArgsLen("__neg__", arguments.length, 0, 0, false, true);
    return self.nb$negative();

});

/**
 * Python wrapper of `__pos__` method.
 *
 * @name  __pos__
 * @instance
 * @memberOf Sk.builtin.numtype.prototype
 */
Sk.builtin.numtype.prototype["__pos__"] = new Sk.builtin.func(function (self) {

    if (self.nb$positive === undefined) {
        throw new Sk.builtin.NotImplementedError("__pos__ is not yet implemented");
    }

    Sk.builtin.pyCheckArgsLen("__pos__", arguments.length, 0, 0, false, true);
    return self.nb$positive();

});

/**
 * Python wrapper of `__int__` method.
 *
 * @name  __int__
 * @instance
 * @memberOf Sk.builtin.numtype.prototype
 */
Sk.builtin.numtype.prototype["__int__"] = new Sk.builtin.func(function (self) {

    if (self.nb$int_ === undefined) {
        throw new Sk.builtin.NotImplementedError("__int__ is not yet implemented");
    }

    Sk.builtin.pyCheckArgsLen("__int__", arguments.length, 0, 0, false, true);
    return self.nb$int_();

});

/**
 * Python wrapper of `__long__` method.
 *
 * @name  __long__
 * @instance
 * @memberOf Sk.builtin.numtype.prototype
 */
Sk.builtin.numtype.prototype["__long__"] = new Sk.builtin.func(function (self) {

    if (self.nb$lng === undefined) {
        throw new Sk.builtin.NotImplementedError("__long__ is not yet implemented");
    }

    Sk.builtin.pyCheckArgsLen("__long__", arguments.length, 0, 0, false, true);
    return self.nb$lng();

});

/**
 * Python wrapper of `__float__` method.
 *
 * @name  __float__
 * @instance
 * @memberOf Sk.builtin.numtype.prototype
 */
Sk.builtin.numtype.prototype["__float__"] = new Sk.builtin.func(function (self) {

    if (self.nb$float_ === undefined) {
        throw new Sk.builtin.NotImplementedError("__float__ is not yet implemented");
    }

    Sk.builtin.pyCheckArgsLen("__float__", arguments.length, 0, 0, false, true);
    return self.nb$float_();

});

/**
 * Python wrapper of `__add__` method.
 *
 * @name  __add__
 * @instance
 * @memberOf Sk.builtin.numtype.prototype
 */
Sk.builtin.numtype.prototype["__add__"] = new Sk.builtin.func(function (self, other) {

    if (self.nb$add === undefined) {
        throw new Sk.builtin.NotImplementedError("__add__ is not yet implemented");
    }

    Sk.builtin.pyCheckArgsLen("__add__", arguments.length, 1, 1, false, true);
    return self.nb$add(other);

});

/**
 * Python wrapper of `__radd__` method.
 *
 * @name  __radd__
 * @instance
 * @memberOf Sk.builtin.numtype.prototype
 */
Sk.builtin.numtype.prototype["__radd__"] = new Sk.builtin.func(function (self, other) {

    if (self.nb$reflected_add === undefined) {
        throw new Sk.builtin.NotImplementedError("__radd__ is not yet implemented");
    }

    Sk.builtin.pyCheckArgsLen("__radd__", arguments.length, 1, 1, false, true);
    return self.nb$reflected_add(other);

});

/**
 * Python wrapper of `__sub__` method.
 *
 * @name  __sub__
 * @instance
 * @memberOf Sk.builtin.numtype.prototype
 */
Sk.builtin.numtype.prototype["__sub__"] = new Sk.builtin.func(function (self, other) {

    if (self.nb$subtract === undefined) {
        throw new Sk.builtin.NotImplementedError("__sub__ is not yet implemented");
    }

    Sk.builtin.pyCheckArgsLen("__sub__", arguments.length, 1, 1, false, true);
    return self.nb$subtract(other);

});

/**
 * Python wrapper of `__rsub__` method.
 *
 * @name  __rsub__
 * @instance
 * @memberOf Sk.builtin.numtype.prototype
 */
Sk.builtin.numtype.prototype["__rsub__"] = new Sk.builtin.func(function (self, other) {

    if (self.nb$reflected_subtract === undefined) {
        throw new Sk.builtin.NotImplementedError("__rsub__ is not yet implemented");
    }

    Sk.builtin.pyCheckArgsLen("__rsub__", arguments.length, 1, 1, false, true);
    return self.nb$reflected_subtract(other);

});

/**
 * Python wrapper of `__mul__` method.
 *
 * @name  __mul__
 * @instance
 * @memberOf Sk.builtin.numtype.prototype
 */
Sk.builtin.numtype.prototype["__mul__"] = new Sk.builtin.func(function (self, other) {

    if (self.nb$multiply === undefined) {
        throw new Sk.builtin.NotImplementedError("__mul__ is not yet implemented");
    }

    Sk.builtin.pyCheckArgsLen("__mul__", arguments.length, 1, 1, false, true);
    return self.nb$multiply(other);

});

/**
 * Python wrapper of `__rmul__` method.
 *
 * @name  __rmul__
 * @instance
 * @memberOf Sk.builtin.numtype.prototype
 */
Sk.builtin.numtype.prototype["__rmul__"] = new Sk.builtin.func(function (self, other) {

    if (self.nb$reflected_multiply === undefined) {
        throw new Sk.builtin.NotImplementedError("__rmul__ is not yet implemented");
    }

    Sk.builtin.pyCheckArgsLen("__rmul__", arguments.length, 1, 1, false, true);
    return self.nb$reflected_multiply(other);

});

/**
 * Python wrapper of `__div__` method.
 *
 * @name  __div__
 * @instance
 * @memberOf Sk.builtin.numtype.prototype
 */
Sk.builtin.numtype.prototype["__div__"] = new Sk.builtin.func(function (self, other) {

    if (self.nb$divide === undefined) {
        throw new Sk.builtin.NotImplementedError("__div__ is not yet implemented");
    }

    Sk.builtin.pyCheckArgsLen("__div__", arguments.length, 1, 1, false, true);
    return self.nb$divide(other);

});

/**
 * Python wrapper of `__rdiv__` method.
 *
 * @name  __rdiv__
 * @instance
 * @memberOf Sk.builtin.numtype.prototype
 */
Sk.builtin.numtype.prototype["__rdiv__"] = new Sk.builtin.func(function (self, other) {

    if (self.nb$reflected_divide === undefined) {
        throw new Sk.builtin.NotImplementedError("__rdiv__ is not yet implemented");
    }

    Sk.builtin.pyCheckArgsLen("__rdiv__", arguments.length, 1, 1, false, true);
    return self.nb$reflected_divide(other);

});

/**
 * Python wrapper of `__floordiv__` method.
 *
 * @name  __floordiv__
 * @instance
 * @memberOf Sk.builtin.numtype.prototype
 */
Sk.builtin.numtype.prototype["__floordiv__"] = new Sk.builtin.func(function (self, other) {

    if (self.nb$floor_divide === undefined) {
        throw new Sk.builtin.NotImplementedError("__floordiv__ is not yet implemented");
    }

    Sk.builtin.pyCheckArgsLen("__floordiv__", arguments.length, 1, 1, false, true);
    return self.nb$floor_divide(other);

});

/**
 * Python wrapper of `__rfloordiv__` method.
 *
 * @name  __rfloordiv__
 * @instance
 * @memberOf Sk.builtin.numtype.prototype
 */
Sk.builtin.numtype.prototype["__rfloordiv__"] = new Sk.builtin.func(function (self, other) {

    if (self.nb$reflected_floor_divide === undefined) {
        throw new Sk.builtin.NotImplementedError("__rfloordiv__ is not yet implemented");
    }

    Sk.builtin.pyCheckArgsLen("__rfloordiv__", arguments.length, 1, 1, false, true);
    return self.nb$reflected_floor_divide(other);

});

/**
 * Python wrapper of `__mod__` method.
 *
 * @name  __mod__
 * @instance
 * @memberOf Sk.builtin.numtype.prototype
 */
Sk.builtin.numtype.prototype["__mod__"] = new Sk.builtin.func(function (self, other) {

    if (self.nb$remainder === undefined) {
        throw new Sk.builtin.NotImplementedError("__mod__ is not yet implemented");
    }

    Sk.builtin.pyCheckArgsLen("__mod__", arguments.length, 1, 1, false, true);
    return self.nb$remainder(other);

});

/**
 * Python wrapper of `__rmod__` method.
 *
 * @name  __rmod__
 * @instance
 * @memberOf Sk.builtin.numtype.prototype
 */
Sk.builtin.numtype.prototype["__rmod__"] = new Sk.builtin.func(function (self, other) {

    if (self.nb$reflected_remainder === undefined) {
        throw new Sk.builtin.NotImplementedError("__rmod__ is not yet implemented");
    }

    Sk.builtin.pyCheckArgsLen("__rmod__", arguments.length, 1, 1, false, true);
    return self.nb$reflected_remainder(other);

});

/**
 * Python wrapper of `__divmod__` method.
 *
 * @name  __divmod__
 * @instance
 * @memberOf Sk.builtin.numtype.prototype
 */
Sk.builtin.numtype.prototype["__divmod__"] = new Sk.builtin.func(function (self, other) {

    if (self.nb$divmod === undefined) {
        throw new Sk.builtin.NotImplementedError("__divmod__ is not yet implemented");
    }

    Sk.builtin.pyCheckArgsLen("__divmod__", arguments.length, 1, 1, false, true);
    return self.nb$divmod(other);

});

/**
 * Python wrapper of `__rdivmod__` method.
 *
 * @name  __rdivmod__
 * @instance
 * @memberOf Sk.builtin.numtype.prototype
 */
Sk.builtin.numtype.prototype["__rdivmod__"] = new Sk.builtin.func(function (self, other) {

    if (self.nb$reflected_divmod === undefined) {
        throw new Sk.builtin.NotImplementedError("__rdivmod__ is not yet implemented");
    }

    Sk.builtin.pyCheckArgsLen("__rdivmod__", arguments.length, 1, 1, false, true);
    return self.nb$reflected_divmod(other);

});

/**
 * Python wrapper of `__pow__` method.
 *
 * @name  __pow__
 * @instance
 * @memberOf Sk.builtin.numtype.prototype
 */
Sk.builtin.numtype.prototype["__pow__"] = new Sk.builtin.func(function (self, other) {

    if (self.nb$power === undefined) {
        throw new Sk.builtin.NotImplementedError("__pow__ is not yet implemented");
    }

    Sk.builtin.pyCheckArgsLen("__pow__", arguments.length, 1, 1, false, true);
    return self.nb$power(other);

});

/**
 * Python wrapper of `__rpow__` method.
 *
 * @name  __rpow__
 * @instance
 * @memberOf Sk.builtin.numtype.prototype
 */
Sk.builtin.numtype.prototype["__rpow__"] = new Sk.builtin.func(function (self, other) {

    if (self.nb$reflected_power === undefined) {
        throw new Sk.builtin.NotImplementedError("__rpow__ is not yet implemented");
    }

    Sk.builtin.pyCheckArgsLen("__rpow__", arguments.length, 1, 1, false, true);
    return self.nb$reflected_power(other);

});

/**
 * Python wrapper of `__coerce__` method.
 *
 * @name  __coerce__
 * @instance
 * @memberOf Sk.builtin.numtype.prototype
 */
Sk.builtin.numtype.prototype["__coerce__"] = new Sk.builtin.func(function (self, other) {

    throw new Sk.builtin.NotImplementedError("__coerce__ is not yet implemented");

});

/**
 * Add a Python object to this instance and return the result (i.e. this + other).
 *
 * Returns NotImplemented if addition between this type and other type is unsupported.
 *
 * Javscript function, returns Python object.
 *
 * @param  {!Sk.builtin.object} other The Python object to add.
 * @return {(Sk.builtin.numtype|Sk.builtin.NotImplemented)} The result of the addition.
 */
Sk.builtin.numtype.prototype.nb$add = function (other) {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.numtype.prototype.nb$reflected_add = function (other) {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.numtype.prototype.nb$inplace_add = function (other) {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

/**
 * Subtract a Python object from this instance and return the result (i.e. this - other).
 *
 * Returns NotImplemented if subtraction between this type and other type is unsupported.
 *
 * Javscript function, returns Python object.
 *
 * @param  {!Sk.builtin.object} other The Python object to subtract.
 * @return {(Sk.builtin.numtype|Sk.builtin.NotImplemented)} The result of the subtraction.
 */
Sk.builtin.numtype.prototype.nb$subtract = function (other) {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.numtype.prototype.nb$reflected_subtract = function (other) {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.numtype.prototype.nb$inplace_subtract = function (other) {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

/**
 * Multiply this instance by a Python object and return the result (i.e. this * other).
 *
 * Returns NotImplemented if multiplication between this type and other type is unsupported.
 *
 * Javscript function, returns Python object.
 *
 * @param  {!Sk.builtin.object} other The multiplier, which must be a Python object.
 * @return {(Sk.builtin.numtype|Sk.builtin.NotImplemented)} The result of the multiplication
 */
Sk.builtin.numtype.prototype.nb$multiply = function (other) {
    return Sk.builtin.NotImplemented.NotImplemented$;
};


Sk.builtin.numtype.prototype.nb$reflected_multiply = function (other) {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.numtype.prototype.nb$inplace_multiply = function (other) {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

/**
 * Divide this instance by a Python object and return the result (i.e this / other).
 *
 * Returns NotImplemented if division between this type and other type is unsupported.
 *
 * Javscript function, returns Python object.
 *
 * @param  {!Sk.builtin.object} other The divisor, which must be a Python object.
 * @return {(Sk.builtin.numtype|Sk.builtin.NotImplemented)} The result of the division
 */
Sk.builtin.numtype.prototype.nb$divide = function (other) {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.numtype.prototype.nb$reflected_divide = function (other) {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.numtype.prototype.nb$inplace_divide = function (other) {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

/**
 * Floor divide this instance by a Python object and return the result (i.e. this // other).
 *
 * Returns NotImplemented if floor division between this type and other type is unsupported.
 *
 * Javscript function, returns Python object.
 *
 * @param  {!Sk.builtin.object} other The divisor, which must be a Python object.
 * @return {(Sk.builtin.numtype|Sk.builtin.NotImplemented)} The result of the floor division
 */
Sk.builtin.numtype.prototype.nb$floor_divide = function (other) {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.numtype.prototype.nb$reflected_floor_divide = function (other) {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.numtype.prototype.nb$inplace_floor_divide = function (other) {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

/**
 * Modulo this instance by a Python object and return the result (i.e. this % other).
 *
 * Returns NotImplemented if modulation between this type and other type is unsupported.
 *
 * Javscript function, returns Python object.
 *
 * @param  {!Sk.builtin.object} other The divisor, which must be a Python object.
 * @return {(Sk.builtin.numtype|Sk.builtin.NotImplemented)} The result of the modulation
 */
Sk.builtin.numtype.prototype.nb$remainder = function (other) {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.numtype.prototype.nb$reflected_remainder = function (other) {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.numtype.prototype.nb$inplace_remainder = function (other) {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

/**
 * Compute the quotient and the remainder of this instance and a given Python object and return the result.
 *
 * Returns NotImplemented if division or modulo operations between this type and other type are unsupported.
 *
 * Javscript function, returns Python object.
 *
 * @param  {!Sk.builtin.object} other The divisor, which must be a Python object.
 * @return {(Sk.builtin.tuple|Sk.builtin.NotImplemented)} The result of the operation.
 * If both operations are supported, a Python tuple containing (quotient, remainder) in that order.
 */
Sk.builtin.numtype.prototype.nb$divmod = function (other) {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.numtype.prototype.nb$reflected_divmod = function (other) {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

/**
 * Raise this instance by a Python object, optionally modulo the exponent, and return the final result.
 *
 * If mod is undefined, return this \*\* other. Else, return (this \*\* other) % mod.
 *
 * Returns NotImplemented if exponentiation or modulation between this type and other type is unsupported.
 *
 * Javscript function, returns Python object.
 *
 * @param  {!Sk.builtin.object} other The exponent, which must be a Python object.
 * @param  {!Sk.builtin.object=} mod The optional divisor, which must be a Python object if defined.
 * @return {(Sk.builtin.numtype|Sk.builtin.NotImplemented)} The result of the exponentiation.
 */
Sk.builtin.numtype.prototype.nb$power = function (other, mod) {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.numtype.prototype.nb$reflected_power = function (other, mod) {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.numtype.prototype.nb$inplace_power = function (other) {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

/**
 * Compute the absolute value of this instance and return.
 *
 * Javascript function, returns Python object.
 *
 * @return {(Sk.builtin.numtype|Sk.builtin.NotImplemented)} The absolute value
 */
Sk.builtin.numtype.prototype.nb$abs = function () {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

/**
 * Compute the unary negative of this instance (i.e. -this).
 *
 * Javscript function, returns Python object.
 *
 * @return {(Sk.builtin.numtype|Sk.builtin.NotImplemented)} A copy of this instance with the value negated
 */
Sk.builtin.numtype.prototype.nb$negative = function () {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

/**
 * Compute the unary positive of this instance (i.e. +this).
 *
 * Javscript function, returns Python object.
 *
 * @return {(Sk.builtin.numtype|Sk.builtin.NotImplemented)} A copy of this instance with the value unchanged
 */
Sk.builtin.numtype.prototype.nb$positive = function () {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

/**
 * Determine if this instance is nonzero.
 *
 * Javscript function, returns Javascript object or Sk.builtin.NotImplemented.
 *
 * @return {(boolean|Sk.builtin.NotImplemented)} true if this instance is not equal to zero, false otherwise
 */
Sk.builtin.numtype.prototype.nb$nonzero = function () {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

/**
 * Determine if this instance is negative.
 *
 * Javscript function, returns Javascript object or Sk.builtin.NotImplemented.
 *
 * @return {(boolean|Sk.builtin.NotImplemented)} true if this instance is negative, false otherwise
 */
Sk.builtin.numtype.prototype.nb$isnegative = function () {
    return Sk.builtin.NotImplemented.NotImplemented$;
};

/**
 * Determine if this instance is positive.
 *
 * Javscript function, returns Javascript object or Sk.builtin.NotImplemented.
 *
 * @return {(boolean|Sk.builtin.NotImplemented)} true if this instance is positive, false otherwise
 */
Sk.builtin.numtype.prototype.nb$ispositive = function () {
    return Sk.builtin.NotImplemented.NotImplemented$;
};
/**
 * @fileoverview
 * @suppress {checkTypes}
 */

/*
 * Basic JavaScript BN library - subset useful for RSA encryption.
 *
 * Copyright (c) 2003-2005  Tom Wu
 * All Rights Reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS-IS" AND WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS, IMPLIED OR OTHERWISE, INCLUDING WITHOUT LIMITATION, ANY
 * WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
 *
 * IN NO EVENT SHALL TOM WU BE LIABLE FOR ANY SPECIAL, INCIDENTAL,
 * INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER
 * RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER OR NOT ADVISED OF
 * THE POSSIBILITY OF DAMAGE, AND ON ANY THEORY OF LIABILITY, ARISING OUT
 * OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * In addition, the following condition applies:
 *
 * All redistributions must retain an intact copy of this copyright notice
 * and disclaimer.
 */


// (public) Constructor
/**
 * @constructor
 * @param {number|string|null} a
 * @param {number=} b
 * @param {*=} c
 */
Sk.builtin.biginteger = function (a, b, c) {
    if (a != null) {
        if ("number" == typeof a) {
            this.fromNumber(a, b, c);
        } else if (b == null && "string" != typeof a) {
            this.fromString(a, 256);
        } else {
            this.fromString(a, b);
        }
    }
};

// Bits per digit
//Sk.builtin.biginteger.dbits;

// JavaScript engine analysis
Sk.builtin.biginteger.canary = 0xdeadbeefcafe;
Sk.builtin.biginteger.j_lm = ((Sk.builtin.biginteger.canary & 0xffffff) == 0xefcafe);

// return new, unset Sk.builtin.biginteger
Sk.builtin.biginteger.nbi = function () {
    return new Sk.builtin.biginteger(null);
};

// am: Compute w_j += (x*this_i), propagate carries,
// c is initial carry, returns final carry.
// c < 3*dvalue, x < 2*dvalue, this_i < dvalue
// We need to select the fastest one that works in this environment.

// am1: use a single mult and divide to get the high bits,
// max digit bits should be 26 because
// max internal value = 2*dvalue^2-2*dvalue (< 2^53)
Sk.builtin.biginteger.prototype.am1 = function (i, x, w, j, c, n) {
    var v;
    while (--n >= 0) {
        v = x * this[i++] + w[j] + c;
        c = Math.floor(v / 0x4000000);
        w[j++] = v & 0x3ffffff;
    }
    return c;
};
// am2 avoids a big mult-and-extract completely.
// Max digit bits should be <= 30 because we do bitwise ops
// on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
Sk.builtin.biginteger.prototype.am2 = function (i, x, w, j, c, n) {
    var m;
    var h;
    var l;
    var xl = x & 0x7fff, xh = x >> 15;
    while (--n >= 0) {
        l = this[i] & 0x7fff;
        h = this[i++] >> 15;
        m = xh * l + h * xl;
        l = xl * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff);
        c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
        w[j++] = l & 0x3fffffff;
    }
    return c;
};
// Alternately, set max digit bits to 28 since some
// browsers slow down when dealing with 32-bit numbers.
Sk.builtin.biginteger.prototype.am3 = function (i, x, w, j, c, n) {
    var m;
    var h;
    var l;
    var xl = x & 0x3fff, xh = x >> 14;
    while (--n >= 0) {
        l = this[i] & 0x3fff;
        h = this[i++] >> 14;
        m = xh * l + h * xl;
        l = xl * l + ((m & 0x3fff) << 14) + w[j] + c;
        c = (l >> 28) + (m >> 14) + xh * h;
        w[j++] = l & 0xfffffff;
    }
    return c;
};

// We need to select the fastest one that works in this environment.
//if (Sk.builtin.biginteger.j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
//	Sk.builtin.biginteger.prototype.am = am2;
//	Sk.builtin.biginteger.dbits = 30;
//} else if (Sk.builtin.biginteger.j_lm && (navigator.appName != "Netscape")) {
//	Sk.builtin.biginteger.prototype.am = am1;
//	Sk.builtin.biginteger.dbits = 26;
//} else { // Mozilla/Netscape seems to prefer am3
//	Sk.builtin.biginteger.prototype.am = am3;
//	Sk.builtin.biginteger.dbits = 28;
//}

// For node.js, we pick am3 with max Sk.builtin.biginteger.dbits to 28.
Sk.builtin.biginteger.prototype.am = Sk.builtin.biginteger.prototype.am3;
Sk.builtin.biginteger.dbits = 28;

Sk.builtin.biginteger.prototype.DB = Sk.builtin.biginteger.dbits;
Sk.builtin.biginteger.prototype.DM = ((1 << Sk.builtin.biginteger.dbits) - 1);
Sk.builtin.biginteger.prototype.DV = (1 << Sk.builtin.biginteger.dbits);

Sk.builtin.biginteger.BI_FP = 52;
Sk.builtin.biginteger.prototype.FV = Math.pow(2, Sk.builtin.biginteger.BI_FP);
Sk.builtin.biginteger.prototype.F1 = Sk.builtin.biginteger.BI_FP - Sk.builtin.biginteger.dbits;
Sk.builtin.biginteger.prototype.F2 = 2 * Sk.builtin.biginteger.dbits - Sk.builtin.biginteger.BI_FP;

// Digit conversions
Sk.builtin.biginteger.BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
Sk.builtin.biginteger.BI_RC = [];
var rr, vv;
rr = "0".charCodeAt(0);
for (vv = 0; vv <= 9; ++vv) {
    Sk.builtin.biginteger.BI_RC[rr++] = vv;
}
rr = "a".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) {
    Sk.builtin.biginteger.BI_RC[rr++] = vv;
}
rr = "A".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) {
    Sk.builtin.biginteger.BI_RC[rr++] = vv;
}

Sk.builtin.biginteger.int2char = function (n) {
    return Sk.builtin.biginteger.BI_RM.charAt(n);
};
Sk.builtin.biginteger.intAt = function (s, i) {
    var c = Sk.builtin.biginteger.BI_RC[s.charCodeAt(i)];
    return (c == null) ? -1 : c;
};

// (protected) copy this to r
Sk.builtin.biginteger.prototype.bnpCopyTo = function (r) {
    var i;
    for (i = this.t - 1; i >= 0; --i) {
        r[i] = this[i];
    }
    r.t = this.t;
    r.s = this.s;
};

// (protected) set from integer value x, -DV <= x < DV
Sk.builtin.biginteger.prototype.bnpFromInt = function (x) {
    this.t = 1;
    this.s = (x < 0) ? -1 : 0;
    if (x > 0) {
        this[0] = x;
    } else if (x < -1) {
        this[0] = x + this.DV;
    } else {
        this.t = 0;
    }
};

// return bigint initialized to value
Sk.builtin.biginteger.nbv = function (i) {
    var r = new Sk.builtin.biginteger(null);
    r.bnpFromInt(i);
    return r;
};

// (protected) set from string and radix
Sk.builtin.biginteger.prototype.bnpFromString = function (s, b) {
    var x;
    var i, mi, sh;
    var k;
    if (b == 16) {
        k = 4;
    } else if (b == 8) {
        k = 3;
    } else if (b == 256) {
        k = 8;
    }  else if (b == 2) {
        // byte array
        k = 1;
    } else if (b == 32) {
        k = 5;
    } else if (b == 4) {
        k = 2;
    } else {
        this.fromRadix(s, b);
        return;
    }
    this.t = 0;
    this.s = 0;
    i = s.length;
    mi = false;
    sh = 0;
    while (--i >= 0) {
        x = (k == 8) ? s[i] & 0xff : Sk.builtin.biginteger.intAt(s, i);
        if (x < 0) {
            if (s.charAt(i) == "-") {
                mi = true;
            }
            continue;
        }
        mi = false;
        if (sh === 0) {
            this[this.t++] = x;
        } else if (sh + k > this.DB) {
            this[this.t - 1] |= (x & ((1 << (this.DB - sh)) - 1)) << sh;
            this[this.t++] = (x >> (this.DB - sh));
        } else {
            this[this.t - 1] |= x << sh;
        }
        sh += k;
        if (sh >= this.DB) {
            sh -= this.DB;
        }
    }
    if (k == 8 && (s[0] & 0x80) !== 0) {
        this.s = -1;
        if (sh > 0) {
            this[this.t - 1] |= ((1 << (this.DB - sh)) - 1) << sh;
        }
    }
    this.clamp();
    if (mi) {
        Sk.builtin.biginteger.ZERO.subTo(this, this);
    }
};

// (protected) clamp off excess high words
Sk.builtin.biginteger.prototype.bnpClamp = function () {
    var c = this.s & this.DM;
    while (this.t > 0 && this[this.t - 1] == c) {
        --this.t;
    }
};

// (public) return string representation in given radix
Sk.builtin.biginteger.prototype.bnToString = function (b) {
    var p;
    var km, d, m, r, i;
    var k;
    if (this.s < 0) {
        return "-" + this.negate().toString(b);
    }
    if (b == 16) {
        k = 4;
    } else if (b == 8) {
        k = 3;
    } else if (b == 2) {
        k = 1;
    } else if (b == 32) {
        k = 5;
    } else if (b == 4) {
        k = 2;
    } else {
        return this.toRadix(b);
    }
    km = (1 << k) - 1, m = false, r = "", i = this.t;
    p = this.DB - (i * this.DB) % k;
    if (i-- > 0) {
        if (p < this.DB && (d = this[i] >> p) > 0) {
            m = true;
            r = Sk.builtin.biginteger.int2char(d);
        }
        while (i >= 0) {
            if (p < k) {
                d = (this[i] & ((1 << p) - 1)) << (k - p);
                d |= this[--i] >> (p += this.DB - k);
            } else {
                d = (this[i] >> (p -= k)) & km;
                if (p <= 0) {
                    p += this.DB;
                    --i;
                }
            }
            if (d > 0) {
                m = true;
            }
            if (m) {
                r += Sk.builtin.biginteger.int2char(d);
            }
        }
    }
    return m ? r : "0";
};

// (public) -this
Sk.builtin.biginteger.prototype.bnNegate = function () {
    var r = Sk.builtin.biginteger.nbi();
    Sk.builtin.biginteger.ZERO.subTo(this, r);
    return r;
};

// (public) |this|
Sk.builtin.biginteger.prototype.bnAbs = function () {
    return (this.s < 0) ? this.negate() : this;
};

// (public) return + if this > a, - if this < a, 0 if equal
Sk.builtin.biginteger.prototype.bnCompareTo = function (a) {
    var i;
    var r = this.s - a.s;
    if (r !== 0) {
        return r;
    }
    i = this.t;
    r = i - a.t;
    if (r !== 0) {
        return (this.s < 0) ? -r : r;
    }
    while (--i >= 0) {
        if ((r = this[i] - a[i]) !== 0) {
            return r;
        }
    }
    return 0;
};

// returns bit length of the integer x
Sk.builtin.biginteger.nbits = function (x) {
    var r = 1, t;
    if ((t = x >>> 16) !== 0) {
        x = t;
        r += 16;
    }
    if ((t = x >> 8) !== 0) {
        x = t;
        r += 8;
    }
    if ((t = x >> 4) !== 0) {
        x = t;
        r += 4;
    }
    if ((t = x >> 2) !== 0) {
        x = t;
        r += 2;
    }
    if ((t = x >> 1) !== 0) {
        x = t;
        r += 1;
    }
    return r;
};

// (public) return the number of bits in "this"
Sk.builtin.biginteger.prototype.bnBitLength = function () {
    if (this.t <= 0) {
        return 0;
    }
    return this.DB * (this.t - 1) + Sk.builtin.biginteger.nbits(this[this.t - 1] ^ (this.s & this.DM));
};

// (protected) r = this << n*DB
Sk.builtin.biginteger.prototype.bnpDLShiftTo = function (n, r) {
    var i;
    for (i = this.t - 1; i >= 0; --i) {
        r[i + n] = this[i];
    }
    for (i = n - 1; i >= 0; --i) {
        r[i] = 0;
    }
    r.t = this.t + n;
    r.s = this.s;
};

// (protected) r = this >> n*DB
Sk.builtin.biginteger.prototype.bnpDRShiftTo = function (n, r) {
    var i;
    for (i = n; i < this.t; ++i) {
        r[i - n] = this[i];
    }
    r.t = Math.max(this.t - n, 0);
    r.s = this.s;
};

// (protected) r = this << n
Sk.builtin.biginteger.prototype.bnpLShiftTo = function (n, r) {
    var bs = n % this.DB;
    var cbs = this.DB - bs;
    var bm = (1 << cbs) - 1;
    var ds = Math.floor(n / this.DB), c = (this.s << bs) & this.DM, i;
    for (i = this.t - 1; i >= 0; --i) {
        r[i + ds + 1] = (this[i] >> cbs) | c;
        c = (this[i] & bm) << bs;
    }
    for (i = ds - 1; i >= 0; --i) {
        r[i] = 0;
    }
    r[ds] = c;
    r.t = this.t + ds + 1;
    r.s = this.s;
    r.clamp();
};

// (protected) r = this >> n
Sk.builtin.biginteger.prototype.bnpRShiftTo = function (n, r) {
    var i;
    var bm;
    var cbs;
    var bs;
    var ds;
    r.s = this.s;
    ds = Math.floor(n / this.DB);
    if (ds >= this.t) {
        r.t = 0;
        return;
    }
    bs = n % this.DB;
    cbs = this.DB - bs;
    bm = (1 << bs) - 1;
    r[0] = this[ds] >> bs;
    for (i = ds + 1; i < this.t; ++i) {
        r[i - ds - 1] |= (this[i] & bm) << cbs;
        r[i - ds] = this[i] >> bs;
    }
    if (bs > 0) {
        r[this.t - ds - 1] |= (this.s & bm) << cbs;
    }
    r.t = this.t - ds;
    r.clamp();
};

// (protected) r = this - a
Sk.builtin.biginteger.prototype.bnpSubTo = function (a, r) {
    var i = 0, c = 0, m = Math.min(a.t, this.t);
    while (i < m) {
        c += this[i] - a[i];
        r[i++] = c & this.DM;
        c >>= this.DB;
    }
    if (a.t < this.t) {
        c -= a.s;
        while (i < this.t) {
            c += this[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
        }
        c += this.s;
    } else {
        c += this.s;
        while (i < a.t) {
            c -= a[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
        }
        c -= a.s;
    }
    r.s = (c < 0) ? -1 : 0;
    if (c < -1) {
        r[i++] = this.DV + c;
    } else if (c > 0) {
        r[i++] = c;
    }
    r.t = i;
    r.clamp();
};

// (protected) r = this * a, r != this,a (HAC 14.12)
// "this" should be the larger one if appropriate.
Sk.builtin.biginteger.prototype.bnpMultiplyTo = function (a, r) {
    var x = this.abs(), y = a.abs();
    var i = x.t;
    r.t = i + y.t;
    while (--i >= 0) {
        r[i] = 0;
    }
    for (i = 0; i < y.t; ++i) {
        r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
    }
    r.s = 0;
    r.clamp();
    if (this.s != a.s) {
        Sk.builtin.biginteger.ZERO.subTo(r, r);
    }
};

// (protected) r = this^2, r != this (HAC 14.16)
Sk.builtin.biginteger.prototype.bnpSquareTo = function (r) {
    var c;
    var x = this.abs();
    var i = r.t = 2 * x.t;
    while (--i >= 0) {
        r[i] = 0;
    }
    for (i = 0; i < x.t - 1; ++i) {
        c = x.am(i, x[i], r, 2 * i, 0, 1);
        if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
            r[i + x.t] -= x.DV;
            r[i + x.t + 1] = 1;
        }
    }
    if (r.t > 0) {
        r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
    }
    r.s = 0;
    r.clamp();
};

// (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
// r != q, this != m.  q or r may be null.
Sk.builtin.biginteger.prototype.bnpDivRemTo = function (m, q, r) {
    var qd;
    var i, j, t;
    var d1, d2, e;
    var yt;
    var y0;
    var ys;
    var nsh;
    var y, ts, ms;
    var pt;
    var pm = m.abs();
    if (pm.t <= 0) {
        return;
    }
    pt = this.abs();
    if (pt.t < pm.t) {
        if (q != null) {
            q.fromInt(0);
        }
        if (r != null) {
            this.copyTo(r);
        }
        return;
    }
    if (r == null) {
        r = Sk.builtin.biginteger.nbi();
    }
    y = Sk.builtin.biginteger.nbi();
    ts = this.s;
    ms = m.s;
    nsh = this.DB - Sk.builtin.biginteger.nbits(pm[pm.t - 1]);	// normalize modulus
    if (nsh > 0) {
        pm.lShiftTo(nsh, y);
        pt.lShiftTo(nsh, r);
    } else {
        pm.copyTo(y);
        pt.copyTo(r);
    }
    ys = y.t;
    y0 = y[ys - 1];
    if (y0 === 0) {
        return;
    }
    yt = y0 * (1 << this.F1) + ((ys > 1) ? y[ys - 2] >> this.F2 : 0);
    d1 = this.FV / yt, d2 = (1 << this.F1) / yt;
    e = 1 << this.F2;
    i = r.t, j = i - ys;
    t = (q == null) ? Sk.builtin.biginteger.nbi() : q;
    y.dlShiftTo(j, t);
    if (r.compareTo(t) >= 0) {
        r[r.t++] = 1;
        r.subTo(t, r);
    }
    Sk.builtin.biginteger.ONE.dlShiftTo(ys, t);
    t.subTo(y, y);	// "negative" y so we can replace sub with am later
    while (y.t < ys) {
        y[y.t++] = 0;
    }
    while (--j >= 0) {
        // Estimate quotient digit
        qd = (r[--i] == y0) ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
        if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) {	// Try it out
            y.dlShiftTo(j, t);
            r.subTo(t, r);
            while (r[i] < --qd) {
                r.subTo(t, r);
            }
        }
    }
    if (q != null) {
        r.drShiftTo(ys, q);
        if (ts != ms) {
            Sk.builtin.biginteger.ZERO.subTo(q, q);
        }
    }
    r.t = ys;
    r.clamp();
    if (nsh > 0) {
        r.rShiftTo(nsh, r);
    }	// Denormalize remainder
    if (ts < 0) {
        Sk.builtin.biginteger.ZERO.subTo(r, r);
    }
};

// (public) this mod a
Sk.builtin.biginteger.prototype.bnMod = function (a) {
    var r = Sk.builtin.biginteger.nbi();
    this.abs().divRemTo(a, null, r);
    if (this.s < 0 && r.compareTo(Sk.builtin.biginteger.ZERO) > 0) {
        a.subTo(r, r);
    }
    return r;
};

// Modular reduction using "classic" algorithm
/**
 * @constructor
 * @extends Sk.builtin.biginteger
 */
Sk.builtin.biginteger.Classic = function (m) {
    this.m = m;
};
Sk.builtin.biginteger.prototype.cConvert = function (x) {
    if (x.s < 0 || x.compareTo(this.m) >= 0) {
        return x.mod(this.m);
    } else {
        return x;
    }
};
Sk.builtin.biginteger.prototype.cRevert = function (x) {
    return x;
};
Sk.builtin.biginteger.prototype.cReduce = function (x) {
    x.divRemTo(this.m, null, x);
};
Sk.builtin.biginteger.prototype.cMulTo = function (x, y, r) {
    x.multiplyTo(y, r);
    this.reduce(r);
};
Sk.builtin.biginteger.prototype.cSqrTo = function (x, r) {
    x.squareTo(r);
    this.reduce(r);
};

Sk.builtin.biginteger.Classic.prototype.convert = Sk.builtin.biginteger.prototype.cConvert;
Sk.builtin.biginteger.Classic.prototype.revert = Sk.builtin.biginteger.prototype.cRevert;
Sk.builtin.biginteger.Classic.prototype.reduce = Sk.builtin.biginteger.prototype.cReduce;
Sk.builtin.biginteger.Classic.prototype.mulTo = Sk.builtin.biginteger.prototype.cMulTo;
Sk.builtin.biginteger.Classic.prototype.sqrTo = Sk.builtin.biginteger.prototype.cSqrTo;

// (protected) return "-1/this % 2^DB"; useful for Mont. reduction
// justification:
//         xy == 1 (mod m)
//         xy =  1+km
//   xy(2-xy) = (1+km)(1-km)
// x[y(2-xy)] = 1-k^2m^2
// x[y(2-xy)] == 1 (mod m^2)
// if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
// should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
// JS multiply "overflows" differently from C/C++, so care is needed here.
Sk.builtin.biginteger.prototype.bnpInvDigit = function () {
    var y;
    var x;
    if (this.t < 1) {
        return 0;
    }
    x = this[0];
    if ((x & 1) === 0) {
        return 0;
    }
    y = x & 3;		// y == 1/x mod 2^2
    y = (y * (2 - (x & 0xf) * y)) & 0xf;	// y == 1/x mod 2^4
    y = (y * (2 - (x & 0xff) * y)) & 0xff;	// y == 1/x mod 2^8
    y = (y * (2 - (((x & 0xffff) * y) & 0xffff))) & 0xffff;	// y == 1/x mod 2^16
    // last step - calculate inverse mod DV directly;
    // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
    y = (y * (2 - x * y % this.DV)) % this.DV;		// y == 1/x mod 2^Sk.builtin.biginteger.dbits
    // we really want the negative inverse, and -DV < y < DV
    return (y > 0) ? this.DV - y : -y;
};

// Sk.builtin.Montgomery reduction
/**
 * @constructor
 * @extends Sk.builtin.biginteger
 */
Sk.builtin.biginteger.Montgomery = function (m) {
    this.m = m;
    this.mp = m.invDigit();
    this.mpl = this.mp & 0x7fff;
    this.mph = this.mp >> 15;
    this.um = (1 << (m.DB - 15)) - 1;
    this.mt2 = 2 * m.t;
};

// xR mod m
Sk.builtin.biginteger.prototype.montConvert = function (x) {
    var r = Sk.builtin.biginteger.nbi();
    x.abs().dlShiftTo(this.m.t, r);
    r.divRemTo(this.m, null, r);
    if (x.s < 0 && r.compareTo(Sk.builtin.biginteger.ZERO) > 0) {
        this.m.subTo(r, r);
    }
    return r;
};

// x/R mod m
Sk.builtin.biginteger.prototype.montRevert = function (x) {
    var r = Sk.builtin.biginteger.nbi();
    x.copyTo(r);
    this.reduce(r);
    return r;
};

// x = x/R mod m (HAC 14.32)
Sk.builtin.biginteger.prototype.montReduce = function (x) {
    var u0;
    var j;
    var i;
    while (x.t <= this.mt2) {
        // pad x so am has enough room later
        x[x.t++] = 0;
    }
    for (i = 0; i < this.m.t; ++i) {
        // faster way of calculating u0 = x[i]*mp mod DV
        j = x[i] & 0x7fff;
        u0 = (j * this.mpl + (((j * this.mph + (x[i] >> 15) * this.mpl) & this.um) << 15)) & x.DM;
        // use am to combine the multiply-shift-add into one call
        j = i + this.m.t;
        x[j] += this.m.am(0, u0, x, i, 0, this.m.t);
        // propagate carry
        while (x[j] >= x.DV) {
            x[j] -= x.DV;
            x[++j]++;
        }
    }
    x.clamp();
    x.drShiftTo(this.m.t, x);
    if (x.compareTo(this.m) >= 0) {
        x.subTo(this.m, x);
    }
};

// r = "x^2/R mod m"; x != r
Sk.builtin.biginteger.prototype.montSqrTo = function (x, r) {
    x.squareTo(r);
    this.reduce(r);
};

// r = "xy/R mod m"; x,y != r
Sk.builtin.biginteger.prototype.montMulTo = function (x, y, r) {
    x.multiplyTo(y, r);
    this.reduce(r);
};

Sk.builtin.biginteger.Montgomery.prototype.convert = Sk.builtin.biginteger.prototype.montConvert;
Sk.builtin.biginteger.Montgomery.prototype.revert = Sk.builtin.biginteger.prototype.montRevert;
Sk.builtin.biginteger.Montgomery.prototype.reduce = Sk.builtin.biginteger.prototype.montReduce;
Sk.builtin.biginteger.Montgomery.prototype.mulTo = Sk.builtin.biginteger.prototype.montMulTo;
Sk.builtin.biginteger.Montgomery.prototype.sqrTo = Sk.builtin.biginteger.prototype.montSqrTo;

// (protected) true iff this is even
Sk.builtin.biginteger.prototype.bnpIsEven = function () {
    return ((this.t > 0) ? (this[0] & 1) : this.s) === 0;
};

// (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
Sk.builtin.biginteger.prototype.bnpExp = function (e, z) {
    var t;
    var r, r2, g, i;
    if (e > 0xffffffff || e < 1) {
        return Sk.builtin.biginteger.ONE;
    }
    r = Sk.builtin.biginteger.nbi();
    r2 = Sk.builtin.biginteger.nbi();
    g = z.convert(this);
    i = Sk.builtin.biginteger.nbits(e) - 1;
    g.copyTo(r);
    while (--i >= 0) {
        z.sqrTo(r, r2);
        if ((e & (1 << i)) > 0) {
            z.mulTo(r2, g, r);
        } else {
            t = r;
            r = r2;
            r2 = t;
        }
    }
    return z.revert(r);
};

// (public) this^e % m, 0 <= e < 2^32
Sk.builtin.biginteger.prototype.bnModPowInt = function (e, m) {
    var z;
    if (e < 256 || m.isEven()) {
        z = new Sk.builtin.biginteger.Classic(m);
    } else {
        z = new Sk.builtin.biginteger.Montgomery(m);
    }
    return this.exp(e, z);
};

// protected
Sk.builtin.biginteger.prototype.copyTo = Sk.builtin.biginteger.prototype.bnpCopyTo;
Sk.builtin.biginteger.prototype.fromInt = Sk.builtin.biginteger.prototype.bnpFromInt;
Sk.builtin.biginteger.prototype.fromString = Sk.builtin.biginteger.prototype.bnpFromString;
Sk.builtin.biginteger.prototype.clamp = Sk.builtin.biginteger.prototype.bnpClamp;
Sk.builtin.biginteger.prototype.dlShiftTo = Sk.builtin.biginteger.prototype.bnpDLShiftTo;
Sk.builtin.biginteger.prototype.drShiftTo = Sk.builtin.biginteger.prototype.bnpDRShiftTo;
Sk.builtin.biginteger.prototype.lShiftTo = Sk.builtin.biginteger.prototype.bnpLShiftTo;
Sk.builtin.biginteger.prototype.rShiftTo = Sk.builtin.biginteger.prototype.bnpRShiftTo;
Sk.builtin.biginteger.prototype.subTo = Sk.builtin.biginteger.prototype.bnpSubTo;
Sk.builtin.biginteger.prototype.multiplyTo = Sk.builtin.biginteger.prototype.bnpMultiplyTo;
Sk.builtin.biginteger.prototype.squareTo = Sk.builtin.biginteger.prototype.bnpSquareTo;
Sk.builtin.biginteger.prototype.divRemTo = Sk.builtin.biginteger.prototype.bnpDivRemTo;
Sk.builtin.biginteger.prototype.invDigit = Sk.builtin.biginteger.prototype.bnpInvDigit;
Sk.builtin.biginteger.prototype.isEven = Sk.builtin.biginteger.prototype.bnpIsEven;
Sk.builtin.biginteger.prototype.exp = Sk.builtin.biginteger.prototype.bnpExp;

// public
Sk.builtin.biginteger.prototype.toString = Sk.builtin.biginteger.prototype.bnToString;
Sk.builtin.biginteger.prototype.negate = Sk.builtin.biginteger.prototype.bnNegate;
Sk.builtin.biginteger.prototype.abs = Sk.builtin.biginteger.prototype.bnAbs;
Sk.builtin.biginteger.prototype.compareTo = Sk.builtin.biginteger.prototype.bnCompareTo;
Sk.builtin.biginteger.prototype.bitLength = Sk.builtin.biginteger.prototype.bnBitLength;
Sk.builtin.biginteger.prototype.mod = Sk.builtin.biginteger.prototype.bnMod;
Sk.builtin.biginteger.prototype.modPowInt = Sk.builtin.biginteger.prototype.bnModPowInt;

// "constants"
Sk.builtin.biginteger.ZERO = Sk.builtin.biginteger.nbv(0);
Sk.builtin.biginteger.ONE = Sk.builtin.biginteger.nbv(1);

//Copyright (c) 2005-2009  Tom Wu
//All Rights Reserved.
//See "LICENSE" for details.

//Extended JavaScript BN functions, required for RSA private ops.

//Version 1.1: new Sk.builtin.biginteger("0", 10) returns "proper" zero

//(public)
Sk.builtin.biginteger.prototype.bnClone = function () {
    var r = Sk.builtin.biginteger.nbi();
    this.copyTo(r);
    return r;
};

//(public) return value as integer
Sk.builtin.biginteger.prototype.bnIntValue = function () {
    if (this.s < 0) {
        if (this.t == 1) {
            return this[0] - this.DV;
        } else if (this.t === 0) {
            return -1;
        }
    } else if (this.t == 1) {
        return this[0];
    } else if (this.t === 0) {
        return 0;
    }
    return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
};

//(public) return value as byte
Sk.builtin.biginteger.prototype.bnByteValue = function () {
    return (this.t === 0) ? this.s : (this[0] << 24) >> 24;
};

//(public) return value as short (assumes DB>=16)
Sk.builtin.biginteger.prototype.bnShortValue = function () {
    return (this.t === 0) ? this.s : (this[0] << 16) >> 16;
};

//(protected) return x s.t. r^x < DV
Sk.builtin.biginteger.prototype.bnpChunkSize = function (r) {
    return Math.floor(Math.LN2 * this.DB / Math.log(r));
};

//(public) 0 if this == 0, 1 if this > 0
Sk.builtin.biginteger.prototype.bnSigNum = function () {
    if (this.s < 0) {
        return -1;
    } else if (this.t <= 0 || (this.t == 1 && this[0] <= 0)) {
        return 0;
    } else {
        return 1;
    }
};

//(protected) convert to radix string
Sk.builtin.biginteger.prototype.bnpToRadix = function (b) {
    var d, y, z, r;
    var a;
    var cs;
    if (b == null) {
        b = 10;
    }
    if (this.signum() === 0 || b < 2 || b > 36) {
        return "0";
    }
    cs = this.chunkSize(b);
    a = Math.pow(b, cs);
    d = Sk.builtin.biginteger.nbv(a);
    y = Sk.builtin.biginteger.nbi(); z = Sk.builtin.biginteger.nbi();
    r = "";
    this.divRemTo(d, y, z);
    while (y.signum() > 0) {
        r = (a + z.intValue()).toString(b).substr(1) + r;
        y.divRemTo(d, y, z);
    }
    return z.intValue().toString(b) + r;
};

//(protected) convert from radix string
Sk.builtin.biginteger.prototype.bnpFromRadix = function (s, b) {
    var x;
    var i;
    var d, mi, j, w;
    var cs;
    this.fromInt(0);
    if (b == null) {
        b = 10;
    }
    cs = this.chunkSize(b);
    d = Math.pow(b, cs);
    mi = false;
    j = 0;
    w = 0;
    for (i = 0; i < s.length; ++i) {
        x = Sk.builtin.biginteger.intAt(s, i);
        if (x < 0) {
            if (s.charAt(i) == "-" && this.signum() === 0) {
                mi = true;
            }
            if (s.charAt(i) == ".") {
                break;
            }
            continue;
        }
        w = b * w + x;
        if (++j >= cs) {
            this.dMultiply(d);
            this.dAddOffset(w, 0);
            j = 0;
            w = 0;
        }
    }
    if (j > 0) {
        this.dMultiply(Math.pow(b, j));
        this.dAddOffset(w, 0);
    }
    if (mi) {
        Sk.builtin.biginteger.ZERO.subTo(this, this);
    }
};

//(protected) alternate constructor
Sk.builtin.biginteger.prototype.bnpFromNumber = function (a, b, c) {
    if ("number" == typeof b) {
        // new Sk.builtin.biginteger(int,int,RNG)
        if (a < 2) {
            this.fromInt(1);
        } else {
            this.fromNumber(a, c);
            if (!this.testBit(a - 1))	{
                // force MSB set
                this.bitwiseTo(Sk.builtin.biginteger.ONE.shiftLeft(a - 1), Sk.builtin.biginteger.op_or, this);
            }
            if (this.isEven()) {
                this.dAddOffset(1, 0);
            } // force odd
            while (!this.isProbablePrime(b)) {
                this.dAddOffset(2, 0);
                if (this.bitLength() > a) {
                    this.subTo(Sk.builtin.biginteger.ONE.shiftLeft(a - 1), this);
                }
            }
        }
    }
    //	Constructor to support Java BigInteger random generation.  Forget it.
    this.fromString(a + "");
};

//(public) convert to bigendian byte array
Sk.builtin.biginteger.prototype.bnToByteArray = function () {
    var p, d, k;
    var i = this.t, r = [];
    r[0] = this.s;
    p = this.DB - (i * this.DB) % 8;
    k = 0;
    if (i-- > 0) {
        if (p < this.DB && (d = this[i] >> p) != (this.s & this.DM) >> p) {
            r[k++] = d | (this.s << (this.DB - p));
        }
        while (i >= 0) {
            if (p < 8) {
                d = (this[i] & ((1 << p) - 1)) << (8 - p);
                d |= this[--i] >> (p += this.DB - 8);
            } else {
                d = (this[i] >> (p -= 8)) & 0xff;
                if (p <= 0) {
                    p += this.DB;
                    --i;
                }
            }
            if ((d & 0x80) !== 0) {
                d |= -256;
            }
            if (k === 0 && (this.s & 0x80) != (d & 0x80)) {
                ++k;
            }
            if (k > 0 || d != this.s) {
                r[k++] = d;
            }
        }
    }
    return r;
};

Sk.builtin.biginteger.prototype.bnEquals = function (a) {
    return(this.compareTo(a) === 0);
};
Sk.builtin.biginteger.prototype.bnMin = function (a) {
    return(this.compareTo(a) < 0) ? this : a;
};
Sk.builtin.biginteger.prototype.bnMax = function (a) {
    return(this.compareTo(a) > 0) ? this : a;
};

//(protected) r = this op a (bitwise)
Sk.builtin.biginteger.prototype.bnpBitwiseTo = function (a, op, r) {
    var i, f, m = Math.min(a.t, this.t);
    for (i = 0; i < m; ++i) {
        r[i] = op(this[i], a[i]);
    }
    if (a.t < this.t) {
        f = a.s & this.DM;
        for (i = m; i < this.t; ++i) {
            r[i] = op(this[i], f);
        }
        r.t = this.t;
    } else {
        f = this.s & this.DM;
        for (i = m; i < a.t; ++i) {
            r[i] = op(f, a[i]);
        }
        r.t = a.t;
    }
    r.s = op(this.s, a.s);
    r.clamp();
};

//(public) this & a
Sk.builtin.biginteger.op_and = function (x, y) {
    return x & y;
};
Sk.builtin.biginteger.prototype.bnAnd = function (a) {
    var r = Sk.builtin.biginteger.nbi();
    this.bitwiseTo(a, Sk.builtin.biginteger.op_and, r);
    return r;
};

//(public) this | a
Sk.builtin.biginteger.op_or = function (x, y) {
    return x | y;
};
Sk.builtin.biginteger.prototype.bnOr = function (a) {
    var r = Sk.builtin.biginteger.nbi();
    this.bitwiseTo(a, Sk.builtin.biginteger.op_or, r);
    return r;
};

//(public) this ^ a
Sk.builtin.biginteger.op_xor = function (x, y) {
    return x ^ y;
};
Sk.builtin.biginteger.prototype.bnXor = function (a) {
    var r = Sk.builtin.biginteger.nbi();
    this.bitwiseTo(a, Sk.builtin.biginteger.op_xor, r);
    return r;
};

//(public) this & ~a
Sk.builtin.biginteger.op_andnot = function (x, y) {
    return x & ~y;
};
Sk.builtin.biginteger.prototype.bnAndNot = function (a) {
    var r = Sk.builtin.biginteger.nbi();
    this.bitwiseTo(a, Sk.builtin.biginteger.op_andnot, r);
    return r;
};

//(public) ~this
Sk.builtin.biginteger.prototype.bnNot = function () {
    var i;
    var r = Sk.builtin.biginteger.nbi();
    for (i = 0; i < this.t; ++i) {
        r[i] = this.DM & ~this[i];
    }
    r.t = this.t;
    r.s = ~this.s;
    return r;
};

//(public) this << n
Sk.builtin.biginteger.prototype.bnShiftLeft = function (n) {
    var r = Sk.builtin.biginteger.nbi();
    if (n < 0) {
        this.rShiftTo(-n, r);
    } else {
        this.lShiftTo(n, r);
    }
    return r;
};

//(public) this >> n
Sk.builtin.biginteger.prototype.bnShiftRight = function (n) {
    var r = Sk.builtin.biginteger.nbi();
    if (n < 0) {
        this.lShiftTo(-n, r);
    } else {
        this.rShiftTo(n, r);
    }
    return r;
};

//return index of lowest 1-bit in x, x < 2^31
Sk.builtin.biginteger.lbit = function (x) {
    var r;
    if (x === 0) {
        return -1;
    }
    r = 0;
    if ((x & 0xffff) === 0) {
        x >>= 16;
        r += 16;
    }
    if ((x & 0xff) === 0) {
        x >>= 8;
        r += 8;
    }
    if ((x & 0xf) === 0) {
        x >>= 4;
        r += 4;
    }
    if ((x & 3) === 0) {
        x >>= 2;
        r += 2;
    }
    if ((x & 1) === 0) {
        ++r;
    }
    return r;
};

//(public) returns index of lowest 1-bit (or -1 if none)
Sk.builtin.biginteger.prototype.bnGetLowestSetBit = function () {
    var i;
    for (i = 0; i < this.t; ++i) {
        if (this[i] !== 0) {
            return i * this.DB + Sk.builtin.biginteger.lbit(this[i]);
        }
    }
    if (this.s < 0) {
        return this.t * this.DB;
    }
    return -1;
};

//return number of 1 bits in x
Sk.builtin.biginteger.cbit = function (x) {
    var r = 0;
    while (x !== 0) {
        x &= x - 1;
        ++r;
    }
    return r;
};

//(public) return number of set bits
Sk.builtin.biginteger.prototype.bnBitCount = function () {
    var i;
    var r = 0, x = this.s & this.DM;
    for (i = 0; i < this.t; ++i) {
        r += Sk.builtin.biginteger.cbit(this[i] ^ x);
    }
    return r;
};

//(public) true iff nth bit is set
Sk.builtin.biginteger.prototype.bnTestBit = function (n) {
    var j = Math.floor(n / this.DB);
    if (j >= this.t) {
        return(this.s !== 0);
    }
    return((this[j] & (1 << (n % this.DB))) !== 0);
};

//(protected) this op (1<<n)
Sk.builtin.biginteger.prototype.bnpChangeBit = function (n, op) {
    var r = Sk.builtin.biginteger.ONE.shiftLeft(n);
    this.bitwiseTo(r, op, r);
    return r;
};

//(public) this | (1<<n)
Sk.builtin.biginteger.prototype.bnSetBit = function (n) {
    return this.changeBit(n, Sk.builtin.biginteger.op_or);
};

//(public) this & ~(1<<n)
Sk.builtin.biginteger.prototype.bnClearBit = function (n) {
    return this.changeBit(n, Sk.builtin.biginteger.op_andnot);
};

//(public) this ^ (1<<n)
Sk.builtin.biginteger.prototype.bnFlipBit = function (n) {
    return this.changeBit(n, Sk.builtin.biginteger.op_xor);
};

//(protected) r = this + a
Sk.builtin.biginteger.prototype.bnpAddTo = function (a, r) {
    var i = 0, c = 0, m = Math.min(a.t, this.t);
    while (i < m) {
        c += this[i] + a[i];
        r[i++] = c & this.DM;
        c >>= this.DB;
    }
    if (a.t < this.t) {
        c += a.s;
        while (i < this.t) {
            c += this[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
        }
        c += this.s;
    } else {
        c += this.s;
        while (i < a.t) {
            c += a[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
        }
        c += a.s;
    }
    r.s = (c < 0) ? -1 : 0;
    if (c > 0) {
        r[i++] = c;
    } else if (c < -1) {
        r[i++] = this.DV + c;
    }
    r.t = i;
    r.clamp();
};

//(public) this + a
Sk.builtin.biginteger.prototype.bnAdd = function (a) {
    var r = Sk.builtin.biginteger.nbi();
    this.addTo(a, r);
    return r;
};

//(public) this - a
Sk.builtin.biginteger.prototype.bnSubtract = function (a) {
    var r = Sk.builtin.biginteger.nbi();
    this.subTo(a, r);
    return r;
};

//(public) this * a
Sk.builtin.biginteger.prototype.bnMultiply = function (a) {
    var r = Sk.builtin.biginteger.nbi();
    this.multiplyTo(a, r);
    return r;
};

//(public) this / a
Sk.builtin.biginteger.prototype.bnDivide = function (a) {
    var r = Sk.builtin.biginteger.nbi();
    this.divRemTo(a, r, null);
    return r;
};

//(public) this % a
Sk.builtin.biginteger.prototype.bnRemainder = function (a) {
    var r = Sk.builtin.biginteger.nbi();
    this.divRemTo(a, null, r);
    return r;
};

//(public) [this/a,this%a]
Sk.builtin.biginteger.prototype.bnDivideAndRemainder = function (a) {
    var q = Sk.builtin.biginteger.nbi(), r = Sk.builtin.biginteger.nbi();
    this.divRemTo(a, q, r);
    return new Array(q, r);
};

//(protected) this *= n, this >= 0, 1 < n < DV
Sk.builtin.biginteger.prototype.bnpDMultiply = function (n) {
    this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
    ++this.t;
    this.clamp();
};

//(protected) this += n << w words, this >= 0
Sk.builtin.biginteger.prototype.bnpDAddOffset = function (n, w) {
    if (n === 0) {
        return;
    }
    while (this.t <= w) {
        this[this.t++] = 0;
    }
    this[w] += n;
    while (this[w] >= this.DV) {
        this[w] -= this.DV;
        if (++w >= this.t) {
            this[this.t++] = 0;
        }
        ++this[w];
    }
};

//A "null" reducer
/**
 * @constructor
 * @extends Sk.builtin.biginteger
 */
Sk.builtin.biginteger.NullExp = function () {
};
Sk.builtin.biginteger.prototype.nNop = function (x) {
    return x;
};
Sk.builtin.biginteger.prototype.nMulTo = function (x, y, r) {
    x.multiplyTo(y, r);
};
Sk.builtin.biginteger.prototype.nSqrTo = function (x, r) {
    x.squareTo(r);
};

Sk.builtin.biginteger.NullExp.prototype.convert = Sk.builtin.biginteger.prototype.nNop;
Sk.builtin.biginteger.NullExp.prototype.revert = Sk.builtin.biginteger.prototype.nNop;
Sk.builtin.biginteger.NullExp.prototype.mulTo = Sk.builtin.biginteger.prototype.nMulTo;
Sk.builtin.biginteger.NullExp.prototype.sqrTo = Sk.builtin.biginteger.prototype.nSqrTo;

//(public) this^e
Sk.builtin.biginteger.prototype.bnPow = function (e) {
    return this.exp(e, new Sk.builtin.biginteger.NullExp());
};

//(protected) r = lower n words of "this * a", a.t <= n
//"this" should be the larger one if appropriate.
Sk.builtin.biginteger.prototype.bnpMultiplyLowerTo = function (a, n, r) {
    var j;
    var i = Math.min(this.t + a.t, n);
    r.s = 0; // assumes a,this >= 0
    r.t = i;
    while (i > 0) {
        r[--i] = 0;
    }
    for (j = r.t - this.t; i < j; ++i) {
        r[i + this.t] = this.am(0, a[i], r, i, 0, this.t);
    }
    for (j = Math.min(a.t, n); i < j; ++i) {
        this.am(0, a[i], r, i, 0, n - i);
    }
    r.clamp();
};

//(protected) r = "this * a" without lower n words, n > 0
//"this" should be the larger one if appropriate.
Sk.builtin.biginteger.prototype.bnpMultiplyUpperTo = function (a, n, r) {
    var i;
    --n;
    i = r.t = this.t + a.t - n;
    r.s = 0; // assumes a,this >= 0
    while (--i >= 0) {
        r[i] = 0;
    }
    for (i = Math.max(n - this.t, 0); i < a.t; ++i) {
        r[this.t + i - n] = this.am(n - i, a[i], r, 0, 0, this.t + i - n);
    }
    r.clamp();
    r.drShiftTo(1, r);
};

//Barrett modular reduction
/**
 * @constructor
 * @extends Sk.builtin.biginteger
 */
Sk.builtin.biginteger.Barrett = function (m) {
    this.r2 = Sk.builtin.biginteger.nbi();
    this.q3 = Sk.builtin.biginteger.nbi();
    Sk.builtin.biginteger.ONE.dlShiftTo(2 * m.t, this.r2);
    this.mu = this.r2.divide(m);
    this.m = m;
};

Sk.builtin.biginteger.prototype.barrettConvert = function (x) {
    var r;
    if (x.s < 0 || x.t > 2 * this.m.t) {
        return x.mod(this.m);
    } else if (x.compareTo(this.m) < 0) {
        return x;
    } else {
        r = Sk.builtin.biginteger.nbi();
        x.copyTo(r);
        this.reduce(r);
        return r;
    }
};

Sk.builtin.biginteger.prototype.barrettRevert = function (x) {
    return x;
};

//x = x mod m (HAC 14.42)
Sk.builtin.biginteger.prototype.barrettReduce = function (x) {
    x.drShiftTo(this.m.t - 1, this.r2);
    if (x.t > this.m.t + 1) {
        x.t = this.m.t + 1;
        x.clamp();
    }
    this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
    this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
    while (x.compareTo(this.r2) < 0) {
        x.dAddOffset(1, this.m.t + 1);
    }
    x.subTo(this.r2, x);
    while (x.compareTo(this.m) >= 0) {
        x.subTo(this.m, x);
    }
};

//r = x^2 mod m; x != r
Sk.builtin.biginteger.prototype.barrettSqrTo = function (x, r) {
    x.squareTo(r);
    this.reduce(r);
};

//r = x*y mod m; x,y != r
Sk.builtin.biginteger.prototype.barrettMulTo = function (x, y, r) {
    x.multiplyTo(y, r);
    this.reduce(r);
};

Sk.builtin.biginteger.Barrett.prototype.convert = Sk.builtin.biginteger.prototype.barrettConvert;
Sk.builtin.biginteger.Barrett.prototype.revert = Sk.builtin.biginteger.prototype.barrettRevert;
Sk.builtin.biginteger.Barrett.prototype.reduce = Sk.builtin.biginteger.prototype.barrettReduce;
Sk.builtin.biginteger.Barrett.prototype.mulTo = Sk.builtin.biginteger.prototype.barrettMulTo;
Sk.builtin.biginteger.Barrett.prototype.sqrTo = Sk.builtin.biginteger.prototype.barrettSqrTo;

//(public) this^e % m (HAC 14.85)
Sk.builtin.biginteger.prototype.bnModPow = function (e, m) {
    var j, w, is1, r2, t;
    var g2;
    var g, n, k1, km;
    var i = e.bitLength(), k, r = Sk.builtin.biginteger.nbv(1), z;
    if (i <= 0) {
        return r;
    } else if (i < 18) {
        k = 1;
    } else if (i < 48) {
        k = 3;
    } else if (i < 144) {
        k = 4;
    } else if (i < 768) {
        k = 5;
    } else {
        k = 6;
    }
    if (i < 8) {
        z = new Sk.builtin.biginteger.Classic(m);
    } else if (m.isEven()) {
        z = new Sk.builtin.biginteger.Barrett(m);
    } else {
        z = new Sk.builtin.biginteger.Montgomery(m);
    }

    g = [];
    n = 3;
    k1 = k - 1;
    km = (1 << k) - 1;
    g[1] = z.convert(this);
    if (k > 1) {
        g2 = Sk.builtin.biginteger.nbi();
        z.sqrTo(g[1], g2);
        while (n <= km) {
            g[n] = Sk.builtin.biginteger.nbi();
            z.mulTo(g2, g[n - 2], g[n]);
            n += 2;
        }
    }

    j = e.t - 1;
    is1 = true;
    r2 = Sk.builtin.biginteger.nbi();
    i = Sk.builtin.biginteger.nbits(e[j]) - 1;
    while (j >= 0) {
        if (i >= k1) {
            w = (e[j] >> (i - k1)) & km;
        } else {
            w = (e[j] & ((1 << (i + 1)) - 1)) << (k1 - i);
            if (j > 0) {
                w |= e[j - 1] >> (this.DB + i - k1);
            }
        }

        n = k;
        while ((w & 1) === 0) {
            w >>= 1;
            --n;
        }
        if ((i -= n) < 0) {
            i += this.DB;
            --j;
        }
        if (is1) {	// ret == 1, don't bother squaring or multiplying it
            g[w].copyTo(r);
            is1 = false;
        } else {
            while (n > 1) {
                z.sqrTo(r, r2);
                z.sqrTo(r2, r);
                n -= 2;
            }
            if (n > 0) {
                z.sqrTo(r, r2);
            } else {
                t = r;
                r = r2;
                r2 = t;
            }
            z.mulTo(r2, g[w], r);
        }

        while (j >= 0 && (e[j] & (1 << i)) === 0) {
            z.sqrTo(r, r2);
            t = r;
            r = r2;
            r2 = t;
            if (--i < 0) {
                i = this.DB - 1;
                --j;
            }
        }
    }
    return z.revert(r);
};

//(public) gcd(this,a) (HAC 14.54)
Sk.builtin.biginteger.prototype.bnGCD = function (a) {
    var i, g;
    var t;
    var x = (this.s < 0) ? this.negate() : this.clone();
    var y = (a.s < 0) ? a.negate() : a.clone();
    if (x.compareTo(y) < 0) {
        t = x;
        x = y;
        y = t;
    }
    i = x.getLowestSetBit();
    g = y.getLowestSetBit();
    if (g < 0) {
        return x;
    }
    if (i < g) {
        g = i;
    }
    if (g > 0) {
        x.rShiftTo(g, x);
        y.rShiftTo(g, y);
    }
    while (x.signum() > 0) {
        if ((i = x.getLowestSetBit()) > 0) {
            x.rShiftTo(i, x);
        }
        if ((i = y.getLowestSetBit()) > 0) {
            y.rShiftTo(i, y);
        }
        if (x.compareTo(y) >= 0) {
            x.subTo(y, x);
            x.rShiftTo(1, x);
        } else {
            y.subTo(x, y);
            y.rShiftTo(1, y);
        }
    }
    if (g > 0) {
        y.lShiftTo(g, y);
    }
    return y;
};

//(protected) this % n, n < 2^26
Sk.builtin.biginteger.prototype.bnpModInt = function (n) {
    var i;
    var d, r;
    if (n <= 0) {
        return 0;
    }
    d = this.DV % n;
    r = (this.s < 0) ? n - 1 : 0;
    if (this.t > 0) {
        if (d === 0) {
            r = this[0] % n;
        } else {
            for (i = this.t - 1; i >= 0; --i) {
                r = (d * r + this[i]) % n;
            }
        }
    }
    return r;
};

//(public) 1/this % m (HAC 14.61)
Sk.builtin.biginteger.prototype.bnModInverse = function (m) {
    var a, b, c, d;
    var u, v;
    var ac = m.isEven();
    if ((this.isEven() && ac) || m.signum() === 0) {
        return Sk.builtin.biginteger.ZERO;
    }
    u = m.clone();
    v = this.clone();
    a = Sk.builtin.biginteger.nbv(1);
    b = Sk.builtin.biginteger.nbv(0);
    c = Sk.builtin.biginteger.nbv(0);
    d = Sk.builtin.biginteger.nbv(1);
    while (u.signum() !== 0) {
        while (u.isEven()) {
            u.rShiftTo(1, u);
            if (ac) {
                if (!a.isEven() || !b.isEven()) {
                    a.addTo(this, a);
                    b.subTo(m, b);
                }
                a.rShiftTo(1, a);
            } else if (!b.isEven()) {
                b.subTo(m, b);
            }
            b.rShiftTo(1, b);
        }
        while (v.isEven()) {
            v.rShiftTo(1, v);
            if (ac) {
                if (!c.isEven() || !d.isEven()) {
                    c.addTo(this, c);
                    d.subTo(m, d);
                }
                c.rShiftTo(1, c);
            } else if (!d.isEven()) {
                d.subTo(m, d);
            }
            d.rShiftTo(1, d);
        }
        if (u.compareTo(v) >= 0) {
            u.subTo(v, u);
            if (ac) {
                a.subTo(c, a);
            }
            b.subTo(d, b);
        } else {
            v.subTo(u, v);
            if (ac) {
                c.subTo(a, c);
            }
            d.subTo(b, d);
        }
    }
    if (v.compareTo(Sk.builtin.biginteger.ONE) !== 0) {
        return Sk.builtin.biginteger.ZERO;
    }
    if (d.compareTo(m) >= 0) {
        return d.subtract(m);
    }
    if (d.signum() < 0) {
        d.addTo(m, d);
    } else {
        return d;
    }
    if (d.signum() < 0) {
        return d.add(m);
    } else {
        return d;
    }
};

Sk.builtin.biginteger.lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509];
Sk.builtin.biginteger.lplim = (1 << 26) / Sk.builtin.biginteger.lowprimes[Sk.builtin.biginteger.lowprimes.length - 1];

//(public) test primality with certainty >= 1-.5^t
Sk.builtin.biginteger.prototype.bnIsProbablePrime = function (t) {
    var m, j;
    var i, x = this.abs();
    if (x.t == 1 && x[0] <= Sk.builtin.biginteger.lowprimes[Sk.builtin.biginteger.lowprimes.length - 1]) {
        for (i = 0; i < Sk.builtin.biginteger.lowprimes.length; ++i) {
            if (x[0] == Sk.builtin.biginteger.lowprimes[i]) {
                return true;
            }
        }
        return false;
    }
    if (x.isEven()) {
        return false;
    }
    i = 1;
    while (i < Sk.builtin.biginteger.lowprimes.length) {
        m = Sk.builtin.biginteger.lowprimes[i];
        j = i + 1;
        while (j < Sk.builtin.biginteger.lowprimes.length && m < Sk.builtin.biginteger.lplim) {
            m *= Sk.builtin.biginteger.lowprimes[j++];
        }
        m = x.modInt(m);
        while (i < j) {
            if (m % Sk.builtin.biginteger.lowprimes[i++] === 0) {
                return false;
            }
        }
    }
    return x.millerRabin(t);
};

//(protected) true if probably prime (HAC 4.24, Miller-Rabin)
Sk.builtin.biginteger.prototype.bnpMillerRabin = function (t) {
    var j;
    var y;
    var i;
    var a;
    var r;
    var n1 = this.subtract(Sk.builtin.biginteger.ONE);
    var k = n1.getLowestSetBit();
    if (k <= 0) {
        return false;
    }
    r = n1.shiftRight(k);
    t = (t + 1) >> 1;
    if (t > Sk.builtin.biginteger.lowprimes.length) {
        t = Sk.builtin.biginteger.lowprimes.length;
    }
    a = Sk.builtin.biginteger.nbi();
    for (i = 0; i < t; ++i) {
        a.fromInt(Sk.builtin.biginteger.lowprimes[i]);
        y = a.modPow(r, this);
        if (y.compareTo(Sk.builtin.biginteger.ONE) !== 0 && y.compareTo(n1) !== 0) {
            j = 1;
            while (j++ < k && y.compareTo(n1) !== 0) {
                y = y.modPowInt(2, this);
                if (y.compareTo(Sk.builtin.biginteger.ONE) === 0) {
                    return false;
                }
            }
            if (y.compareTo(n1) !== 0) {
                return false;
            }
        }
    }
    return true;
};

Sk.builtin.biginteger.prototype.isnegative = function () {
    return this.s < 0;
};
Sk.builtin.biginteger.prototype.ispositive = function () {
    return this.s >= 0;
};
Sk.builtin.biginteger.prototype.trueCompare = function (a) {
    if (this.s >= 0 && a.s < 0) {
        return 1;
    }
    if (this.s < 0 && a.s >= 0) {
        return -1;
    }
    return this.compare(a);
};

//protected
Sk.builtin.biginteger.prototype.chunkSize = Sk.builtin.biginteger.prototype.bnpChunkSize;
Sk.builtin.biginteger.prototype.toRadix = Sk.builtin.biginteger.prototype.bnpToRadix;
Sk.builtin.biginteger.prototype.fromRadix = Sk.builtin.biginteger.prototype.bnpFromRadix;
Sk.builtin.biginteger.prototype.fromNumber = Sk.builtin.biginteger.prototype.bnpFromNumber;
Sk.builtin.biginteger.prototype.bitwiseTo = Sk.builtin.biginteger.prototype.bnpBitwiseTo;
Sk.builtin.biginteger.prototype.changeBit = Sk.builtin.biginteger.prototype.bnpChangeBit;
Sk.builtin.biginteger.prototype.addTo = Sk.builtin.biginteger.prototype.bnpAddTo;
Sk.builtin.biginteger.prototype.dMultiply = Sk.builtin.biginteger.prototype.bnpDMultiply;
Sk.builtin.biginteger.prototype.dAddOffset = Sk.builtin.biginteger.prototype.bnpDAddOffset;
Sk.builtin.biginteger.prototype.multiplyLowerTo = Sk.builtin.biginteger.prototype.bnpMultiplyLowerTo;
Sk.builtin.biginteger.prototype.multiplyUpperTo = Sk.builtin.biginteger.prototype.bnpMultiplyUpperTo;
Sk.builtin.biginteger.prototype.modInt = Sk.builtin.biginteger.prototype.bnpModInt;
Sk.builtin.biginteger.prototype.millerRabin = Sk.builtin.biginteger.prototype.bnpMillerRabin;

//public
Sk.builtin.biginteger.prototype.clone = Sk.builtin.biginteger.prototype.bnClone;
Sk.builtin.biginteger.prototype.intValue = Sk.builtin.biginteger.prototype.bnIntValue;
Sk.builtin.biginteger.prototype.byteValue = Sk.builtin.biginteger.prototype.bnByteValue;
Sk.builtin.biginteger.prototype.shortValue = Sk.builtin.biginteger.prototype.bnShortValue;
Sk.builtin.biginteger.prototype.signum = Sk.builtin.biginteger.prototype.bnSigNum;
Sk.builtin.biginteger.prototype.toByteArray = Sk.builtin.biginteger.prototype.bnToByteArray;
Sk.builtin.biginteger.prototype.equals = Sk.builtin.biginteger.prototype.bnEquals;
Sk.builtin.biginteger.prototype.compare = Sk.builtin.biginteger.prototype.compareTo;
Sk.builtin.biginteger.prototype.min = Sk.builtin.biginteger.prototype.bnMin;
Sk.builtin.biginteger.prototype.max = Sk.builtin.biginteger.prototype.bnMax;
Sk.builtin.biginteger.prototype.and = Sk.builtin.biginteger.prototype.bnAnd;
Sk.builtin.biginteger.prototype.or = Sk.builtin.biginteger.prototype.bnOr;
Sk.builtin.biginteger.prototype.xor = Sk.builtin.biginteger.prototype.bnXor;
Sk.builtin.biginteger.prototype.andNot = Sk.builtin.biginteger.prototype.bnAndNot;
Sk.builtin.biginteger.prototype.not = Sk.builtin.biginteger.prototype.bnNot;
Sk.builtin.biginteger.prototype.shiftLeft = Sk.builtin.biginteger.prototype.bnShiftLeft;
Sk.builtin.biginteger.prototype.shiftRight = Sk.builtin.biginteger.prototype.bnShiftRight;
Sk.builtin.biginteger.prototype.getLowestSetBit = Sk.builtin.biginteger.prototype.bnGetLowestSetBit;
Sk.builtin.biginteger.prototype.bitCount = Sk.builtin.biginteger.prototype.bnBitCount;
Sk.builtin.biginteger.prototype.testBit = Sk.builtin.biginteger.prototype.bnTestBit;
Sk.builtin.biginteger.prototype.setBit = Sk.builtin.biginteger.prototype.bnSetBit;
Sk.builtin.biginteger.prototype.clearBit = Sk.builtin.biginteger.prototype.bnClearBit;
Sk.builtin.biginteger.prototype.flipBit = Sk.builtin.biginteger.prototype.bnFlipBit;
Sk.builtin.biginteger.prototype.add = Sk.builtin.biginteger.prototype.bnAdd;
Sk.builtin.biginteger.prototype.subtract = Sk.builtin.biginteger.prototype.bnSubtract;
Sk.builtin.biginteger.prototype.multiply = Sk.builtin.biginteger.prototype.bnMultiply;
Sk.builtin.biginteger.prototype.divide = Sk.builtin.biginteger.prototype.bnDivide;
Sk.builtin.biginteger.prototype.remainder = Sk.builtin.biginteger.prototype.bnRemainder;
Sk.builtin.biginteger.prototype.divideAndRemainder = Sk.builtin.biginteger.prototype.bnDivideAndRemainder;
Sk.builtin.biginteger.prototype.modPow = Sk.builtin.biginteger.prototype.bnModPow;
Sk.builtin.biginteger.prototype.modInverse = Sk.builtin.biginteger.prototype.bnModInverse;
Sk.builtin.biginteger.prototype.pow = Sk.builtin.biginteger.prototype.bnPow;
Sk.builtin.biginteger.prototype.gcd = Sk.builtin.biginteger.prototype.bnGCD;
Sk.builtin.biginteger.prototype.isProbablePrime = Sk.builtin.biginteger.prototype.bnIsProbablePrime;
//Sk.builtin.biginteger.int2char = int2char;

//Sk.builtin.biginteger interfaces not implemented in jsbn:

//Sk.builtin.biginteger(int signum, byte[] magnitude)
//double doubleValue()
//float floatValue()
//int hashCode()
//long longValue()
//static Sk.builtin.biginteger valueOf(long val)

//module.exports = Sk.builtin.biginteger;
/* jslint nomen: true, bitwise: true */
/* global Sk: true */

/**
 * @namespace Sk.builtin
 */

/**
 * @constructor
 * Sk.builtin.int_
 *
 * @description
 * Constructor for Python int. If provided number is greater than integer threshold, will return a Python long instead.
 *
 * type int, all integers are created with this method, it is also used
 * for the builtin int()
 *
 * Takes also implemented `__int__` and `__trunc__` methods for x into account
 * and tries to use `__index__` and/or `__int__` if base is not a number
 *
 * @extends {Sk.builtin.numtype}
 *
 * @param  {!(Object|number)} x    Python object or Javascript number to convert to Python int
 * @param  {!(Object|number|Sk.builtin.none)=} base Optional base, can only be used when x is Sk.builtin.str
 * @return {(Sk.builtin.int_|Sk.builtin.lng)}      Python int (or long, if overflow)
 */
Sk.builtin.int_ = function (x, base) {
    var val;
    var func;
    var ret; // return value
    var magicName; // name of magic method

    if (!(this instanceof Sk.builtin.int_)) {
        return new Sk.builtin.int_(x, base);
    }


    if (this instanceof Sk.builtin.bool) {
        return this;
    }

    if (x instanceof Sk.builtin.int_ && base === undefined) {
        this.v = x.v;
        return this;
    }

    // if base is not of type int, try calling .__index__
    if(base !== Sk.builtin.none.none$ && base !== undefined && !Sk.builtin.checkInt(base)) {
        if (Sk.builtin.checkFloat(base)) {
            throw new Sk.builtin.TypeError("integer argument expected, got " + Sk.abstr.typeName(base));
        } else if (base.__index__) {
            base = Sk.misceval.callsimArray(base.__index__, [base]);
        } else if(base.__int__) {
            base = Sk.misceval.callsimArray(base.__int__, [base]);
        } else {
            throw new Sk.builtin.AttributeError(Sk.abstr.typeName(base) + " instance has no attribute '__index__' or '__int__'");
        }
    }

    if (x instanceof Sk.builtin.str) {
        base = Sk.builtin.asnum$(base);
        if (base === Sk.builtin.none.none$) {
            base = 10;
        }

        val = Sk.str2number(x.v, base, parseInt, function (x) {
            return -x;
        }, "int");

        if ((val > Sk.builtin.int_.threshold$) || (val < -Sk.builtin.int_.threshold$)) {
            // Too big for int, convert to long
            return new Sk.builtin.lng(x, base);
        }

        this.v = val;
        return this;
    }

    if (base !== undefined && base !== Sk.builtin.none.none$) {
        throw new Sk.builtin.TypeError("int() can't convert non-string with explicit base");
    }

    if (x === undefined || x === Sk.builtin.none) {
        x = 0;
    }

    /**
     * try calling special methods:
     *  1. __int__
     *  2. __trunc__
     */
    if(x !== undefined && (x.tp$getattr && (func = x.tp$getattr(Sk.builtin.str.$int_)))) {
        // calling a method which contains im_self and im_func
        // causes skulpt to automatically map the im_self as first argument
        ret = Sk.misceval.callsimArray(func);
        magicName = "__int__";
    } else if(x !== undefined && x.__int__) {
        // required for internal types
        // __int__ method is on prototype
        ret = Sk.misceval.callsimArray(x.__int__, [x]);
        magicName = "__int__";
    } else if(x !== undefined && (x.tp$getattr && (func = x.tp$getattr(Sk.builtin.str.$trunc)))) {
        ret = Sk.misceval.callsimArray(func);
        magicName = "__trunc__";
    } else if(x !== undefined && x.__trunc__) {
        ret = Sk.misceval.callsimArray(x.__trunc__, [x]);
        magicName = "__trunc__";
    }

    // check return type of magic methods
    if(ret !== undefined && !Sk.builtin.checkInt(ret)) {
        throw new Sk.builtin.TypeError(magicName + " returned non-Integral (type " + Sk.abstr.typeName(ret)+")");
    } else if(ret !== undefined){
        x = ret; // valid return value, proceed in function
    }

    // check type even without magic numbers
    if(!Sk.builtin.checkNumber(x)) {
        throw new Sk.builtin.TypeError("int() argument must be a string or a number, not '" + Sk.abstr.typeName(x) + "'");
    }

    x = Sk.builtin.asnum$(x);
    if (x > Sk.builtin.int_.threshold$ || x < -Sk.builtin.int_.threshold$) {
        return new Sk.builtin.lng(x);
    }
    if ((x > -1) && (x < 1)) {
        x = 0;
    }

    this.v = parseInt(x, base);
    return this;
};

Sk.builtin.int_.$shiftconsts = [0.5, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304, 8388608, 16777216, 33554432, 67108864, 134217728, 268435456, 536870912, 1073741824, 2147483648, 4294967296, 8589934592, 17179869184, 34359738368, 68719476736, 137438953472, 274877906944, 549755813888, 1099511627776, 2199023255552, 4398046511104, 8796093022208, 17592186044416, 35184372088832, 70368744177664, 140737488355328, 281474976710656, 562949953421312, 1125899906842624, 2251799813685248, 4503599627370496, 9007199254740992];

Sk.abstr.setUpInheritance("int", Sk.builtin.int_, Sk.builtin.numtype);

/* NOTE: See constants used for kwargs in constants.js */

Sk.builtin.int_.prototype.nb$int_ = function () {
    return this;
};

Sk.builtin.int_.prototype.nb$float_ = function() {
    return new Sk.builtin.float_(this.v);
};

Sk.builtin.int_.prototype.nb$lng = function () {
    return new Sk.builtin.lng(this.v);
};

/**
 * Python wrapper of `__trunc__` dunder method.
 *
 * @instance
 */
Sk.builtin.int_.prototype.__trunc__ = new Sk.builtin.func(function(self) {
    return self;
});

/**
 * Python wrapper of `__index__` dunder method.
 *
 * @instance
 */
Sk.builtin.int_.prototype.__index__ = new Sk.builtin.func(function(self) {
    return self;
});

/**
 * Python wrapper of `__complex__` dunder method.
 *
 * @instance
 */
Sk.builtin.int_.prototype.__complex__ = new Sk.builtin.func(function(self) {
    return Sk.builtin.NotImplemented.NotImplemented$;
});

/**
 * Return this instance's Javascript value.
 *
 * Javascript function, returns Javascript object.
 *
 * @return {number} This instance's value.
 */
Sk.builtin.int_.prototype.tp$index = function () {
    return this.v;
};

/** @override */
Sk.builtin.int_.prototype.tp$hash = function () {
    //the hash of all numbers should be an int and since javascript doesn't really
    //care every number can be an int.
    return new Sk.builtin.int_(this.v);
};

/**
 * Threshold to determine when types should be converted to long.
 *
 * Note: be sure to check against threshold in both positive and negative directions.
 *
 * @type {number}
 */
Sk.builtin.int_.threshold$ = Math.pow(2, 53) - 1;

/**
 * Returns a copy of this instance.
 *
 * Javascript function, returns Python object.
 *
 * @return {Sk.builtin.int_} The copy
 */
Sk.builtin.int_.prototype.clone = function () {
    return new Sk.builtin.int_(this.v);
};

/** @override */
Sk.builtin.int_.prototype.nb$add = function (other) {
    var thisAsLong, thisAsFloat;
    var result;

    if (other instanceof Sk.builtin.int_) {
        result = this.v + other.v;
        if (result > Sk.builtin.int_.threshold$ ||
            result < -Sk.builtin.int_.threshold$) {
            thisAsLong = new Sk.builtin.lng(this.v);
            return thisAsLong.nb$add(other);
        }
        return new Sk.builtin.int_(result);
    }

    if (other instanceof Sk.builtin.lng) {
        thisAsLong = new Sk.builtin.lng(this.v);
        return thisAsLong.nb$add(other);
    }

    if (other instanceof Sk.builtin.float_) {
        thisAsFloat = new Sk.builtin.float_(this.v);
        return thisAsFloat.nb$add(other);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/** @override */
Sk.builtin.int_.prototype.nb$reflected_add = function (other) {
    // Should not automatically call this.nb$add, as nb$add may have
    // been overridden by a subclass
    return Sk.builtin.int_.prototype.nb$add.call(this, other);
};

/** @override */
Sk.builtin.int_.prototype.nb$subtract = function (other) {
    var thisAsLong, thisAsFloat;
    var result;

    if (other instanceof Sk.builtin.int_) {
        result = this.v - other.v;
        if (result > Sk.builtin.int_.threshold$ ||
            result < -Sk.builtin.int_.threshold$) {
            thisAsLong = new Sk.builtin.lng(this.v);
            return thisAsLong.nb$subtract(other);
        }
        return new Sk.builtin.int_(result);
    }

    if (other instanceof Sk.builtin.lng) {
        thisAsLong = new Sk.builtin.lng(this.v);
        return thisAsLong.nb$subtract(other);
    }

    if (other instanceof Sk.builtin.float_) {
        thisAsFloat = new Sk.builtin.float_(this.v);
        return thisAsFloat.nb$subtract(other);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/** @override */
Sk.builtin.int_.prototype.nb$reflected_subtract = function (other) {
    // Should not automatically call this.nb$add, as nb$add may have
    // been overridden by a subclass
    var negative_this = this.nb$negative();
    return Sk.builtin.int_.prototype.nb$add.call(negative_this, other);
};

/** @override */
Sk.builtin.int_.prototype.nb$multiply = function (other) {
    var product, thisAsLong, thisAsFloat;

    if (other instanceof Sk.builtin.int_) {
        product = this.v * other.v;

        if (product > Sk.builtin.int_.threshold$ ||
            product < -Sk.builtin.int_.threshold$) {
            thisAsLong = new Sk.builtin.lng(this.v);
            return thisAsLong.nb$multiply(other);
        } else {
            return new Sk.builtin.int_(product);
        }
    }

    if (other instanceof Sk.builtin.lng) {
        thisAsLong = new Sk.builtin.lng(this.v);
        return thisAsLong.nb$multiply(other);
    }

    if (other instanceof Sk.builtin.float_) {
        thisAsFloat = new Sk.builtin.float_(this.v);
        return thisAsFloat.nb$multiply(other);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/** @override */
Sk.builtin.int_.prototype.nb$reflected_multiply = function (other) {
    // Should not automatically call this.nb$multiply, as nb$multiply may have
    // been overridden by a subclass
    return Sk.builtin.int_.prototype.nb$multiply.call(this, other);
};

/** @override */
Sk.builtin.int_.prototype.nb$divide = function (other) {
    var thisAsLong, thisAsFloat;
    if (Sk.__future__.division) {
        thisAsFloat = new Sk.builtin.float_(this.v);
        return thisAsFloat.nb$divide(other);
    }

    if (other instanceof Sk.builtin.int_) {
        return this.nb$floor_divide(other);
    }

    if (other instanceof Sk.builtin.lng) {
        thisAsLong = new Sk.builtin.lng(this.v);
        return thisAsLong.nb$divide(other);
    }

    if (other instanceof Sk.builtin.float_) {
        thisAsFloat = new Sk.builtin.float_(this.v);
        return thisAsFloat.nb$divide(other);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/** @override */
Sk.builtin.int_.prototype.nb$reflected_divide = function (other) {
    return this.nb$reflected_floor_divide(other);
};

/** @override */
Sk.builtin.int_.prototype.nb$floor_divide = function (other) {
    var thisAsLong, thisAsFloat;

    if (other instanceof Sk.builtin.int_) {

        if (other.v === 0) {
            throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");
        }

        return new Sk.builtin.int_(Math.floor(this.v / other.v));
    }

    if (other instanceof Sk.builtin.lng) {
        thisAsLong = new Sk.builtin.lng(this.v);
        return thisAsLong.nb$floor_divide(other);
    }

    if (other instanceof Sk.builtin.float_) {
        thisAsFloat = new Sk.builtin.float_(this.v);
        return thisAsFloat.nb$floor_divide(other);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/** @override */
Sk.builtin.int_.prototype.nb$reflected_floor_divide = function (other) {
    if (other instanceof Sk.builtin.int_) {
        return other.nb$divide(this);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/** @override */
Sk.builtin.int_.prototype.nb$remainder = function (other) {
    var thisAsLong, thisAsFloat;
    var tmp;
    var divResult;

    if (other instanceof Sk.builtin.int_) {
        //  Javacript logic on negatives doesn't work for Python... do this instead
        divResult = Sk.abstr.numberBinOp(this, other, "FloorDiv");
        tmp = Sk.abstr.numberBinOp(divResult, other, "Mult");
        tmp = Sk.abstr.numberBinOp(this, tmp, "Sub");
        tmp = tmp.v;

        if (other.v < 0 && tmp === 0) {
            tmp = -0.0; // otherwise the sign gets lost by javascript modulo
        } else if (tmp === 0 && Infinity/tmp === -Infinity) {
            tmp = 0.0;
        }

        return new Sk.builtin.int_(tmp);
    }

    if (other instanceof Sk.builtin.lng) {
        thisAsLong = new Sk.builtin.lng(this.v);
        return thisAsLong.nb$remainder(other);
    }

    if (other instanceof Sk.builtin.float_) {
        thisAsFloat = new Sk.builtin.float_(this.v);
        return thisAsFloat.nb$remainder(other);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/** @override */
Sk.builtin.int_.prototype.nb$reflected_remainder = function (other) {
    if (other instanceof Sk.builtin.int_) {
        return other.nb$remainder(this);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/** @override */
Sk.builtin.int_.prototype.nb$divmod = function (other) {
    var thisAsLong, thisAsFloat;

    if (other instanceof Sk.builtin.int_) {
        return new Sk.builtin.tuple([
            this.nb$floor_divide(other),
            this.nb$remainder(other)
        ]);
    }

    if (other instanceof Sk.builtin.lng) {
        thisAsLong = new Sk.builtin.lng(this.v);
        return thisAsLong.nb$divmod(other);
    }

    if (other instanceof Sk.builtin.float_) {
        thisAsFloat = new Sk.builtin.float_(this.v);
        return thisAsFloat.nb$divmod(other);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/** @override */
Sk.builtin.int_.prototype.nb$reflected_divmod = function (other) {
    if (other instanceof Sk.builtin.int_) {
        return new Sk.builtin.tuple([
            other.nb$floor_divide(this),
            other.nb$remainder(this)
        ]);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/** @override */
Sk.builtin.int_.prototype.nb$power = function (other, mod) {
    var power, ret, thisAsLong, thisAsFloat;

    if (other instanceof Sk.builtin.int_ && (mod === undefined || mod instanceof Sk.builtin.int_)) {

        power = Math.pow(this.v, other.v);

        if (power > Sk.builtin.int_.threshold$ ||
            power < -Sk.builtin.int_.threshold$) {
            thisAsLong = new Sk.builtin.lng(this.v);
            ret = thisAsLong.nb$power(other, mod);
        } else if (other.v < 0) {
            ret = new Sk.builtin.float_(power);
        } else {
            ret = new Sk.builtin.int_(power);
        }

        if (mod !== undefined) {
            if (other.v < 0) {
                throw new Sk.builtin.TypeError("pow() 2nd argument cannot be negative when 3rd argument specified");
            }

            return ret.nb$remainder(mod);
        } else {
            return ret;
        }
    }

    if (other instanceof Sk.builtin.lng) {
        thisAsLong = new Sk.builtin.lng(this.v);
        return thisAsLong.nb$power(other);
    }

    if (other instanceof Sk.builtin.float_) {
        thisAsFloat = new Sk.builtin.float_(this.v);
        return thisAsFloat.nb$power(other);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/** @override */
Sk.builtin.int_.prototype.nb$reflected_power = function (other, mod) {
    if (other instanceof Sk.builtin.int_) {
        return other.nb$power(this, mod);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/** @override */
Sk.builtin.int_.prototype.nb$abs = function () {
    return new Sk.builtin.int_(Math.abs(this.v));
};

/**
 * Compute the bitwise AND of this instance and a Python object (i.e. this & other).
 *
 * Returns NotImplemented if bitwise AND operation between int and other type is unsupported.
 *
 * Javscript function, returns Python object.
 *
 * @param  {!Sk.builtin.object} other The Python object to AND with this one
 * @return {(Sk.builtin.int_|Sk.builtin.lng|Sk.builtin.NotImplemented)} The result of the conjunction
 */
Sk.builtin.int_.prototype.nb$and = function (other) {
    var thisAsLong, thisAsFloat;

    if (other instanceof Sk.builtin.int_) {
        var tmp;
        other = Sk.builtin.asnum$(other);
        tmp = this.v & other;
        if ((tmp !== undefined) && (tmp < 0)) {
            tmp = tmp + 4294967296; // convert back to unsigned
        }

        if (tmp !== undefined) {
            return new Sk.builtin.int_(tmp);
        }
    }

    if (other instanceof Sk.builtin.lng) {
        thisAsLong = new Sk.builtin.lng(this.v);
        return thisAsLong.nb$and(other);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.int_.prototype.nb$reflected_and = Sk.builtin.int_.prototype.nb$and;

/**
 * Compute the bitwise OR of this instance and a Python object (i.e. this | other).
 *
 * Returns NotImplemented if bitwise OR operation between int and other type is unsupported.
 *
 * Javscript function, returns Python object.
 *
 * @param  {!Sk.builtin.object} other The Python object to OR with this one
 * @return {(Sk.builtin.int_|Sk.builtin.lng|Sk.builtin.NotImplemented)} The result of the disjunction
 */
Sk.builtin.int_.prototype.nb$or = function (other) {
    var thisAsLong;

    if (other instanceof Sk.builtin.int_) {
        var tmp;
        other = Sk.builtin.asnum$(other);
        tmp = this.v | other;
        if ((tmp !== undefined) && (tmp < 0)) {
            tmp = tmp + 4294967296; // convert back to unsigned
        }

        if (tmp !== undefined) {
            return new Sk.builtin.int_(tmp);
        }
    }

    if (other instanceof Sk.builtin.lng) {
        thisAsLong = new Sk.builtin.lng(this.v);
        return thisAsLong.nb$and(other);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.int_.prototype.nb$reflected_or = Sk.builtin.int_.prototype.nb$or;

/**
 * Compute the bitwise XOR of this instance and a Python object (i.e. this ^ other).
 *
 * Returns NotImplemented if bitwise XOR operation between int and other type is unsupported.
 *
 * Javscript function, returns Python object.
 *
 * @param  {!Sk.builtin.object} other The Python object to XOR with this one
 * @return {(Sk.builtin.int_|Sk.builtin.lng|Sk.builtin.NotImplemented)} The result of the exclusive disjunction
 */
Sk.builtin.int_.prototype.nb$xor = function (other) {
    var thisAsLong;

    if (other instanceof Sk.builtin.int_) {
        var tmp;
        other = Sk.builtin.asnum$(other);
        tmp = this.v ^ other;
        if ((tmp !== undefined) && (tmp < 0)) {
            tmp = tmp + 4294967296; // convert back to unsigned
        }

        if (tmp !== undefined) {
            return new Sk.builtin.int_(tmp);
        }
    }

    if (other instanceof Sk.builtin.lng) {
        thisAsLong = new Sk.builtin.lng(this.v);
        return thisAsLong.nb$xor(other);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.int_.prototype.nb$reflected_xor = Sk.builtin.int_.prototype.nb$xor;

/**
 * Compute the bitwise left shift of this instance by a Python object (i.e. this << other).
 *
 * Returns NotImplemented if bitwise left shift operation between int and other type is unsupported.
 *
 * Javscript function, returns Python object.
 *
 * @param  {!Sk.builtin.object} other The Python object by which to left shift
 * @return {(Sk.builtin.int_|Sk.builtin.lng|Sk.builtin.NotImplemented)} The result of the left shift
 */
Sk.builtin.int_.prototype.nb$lshift = function (other) {
    var thisAsLong;

    if (this.v === 0) {
        return this;
    }

    if (other instanceof Sk.builtin.int_) {
        var tmp;
        var shift = Sk.builtin.asnum$(other);

        if (shift !== undefined) {
            if (shift < 0) {
                throw new Sk.builtin.ValueError("negative shift count");
            }

            if (shift > 53) {
                return new Sk.builtin.lng(this.v).nb$lshift(new Sk.builtin.int_(shift));
            }

            tmp = this.v * 2 * Sk.builtin.int_.$shiftconsts[shift];
            if (tmp > Sk.builtin.int_.threshold$ || tmp < -Sk.builtin.int_.threshold$) {
                // Fail, recompute with longs
                return new Sk.builtin.lng(tmp);
            }
        }

        if (tmp !== undefined) {
            tmp = /** @type {number} */ (tmp);
            return new Sk.builtin.int_(tmp);
        }
    }

    if (other instanceof Sk.builtin.lng) {
        thisAsLong = new Sk.builtin.lng(this.v);
        return thisAsLong.nb$lshift(other);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.int_.prototype.nb$reflected_lshift = function (other) {
    if (other instanceof Sk.builtin.int_) {
        return other.nb$lshift(this);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/**
 * Compute the bitwise right shift of this instance by a Python object (i.e. this >> other).
 *
 * Returns NotImplemented if bitwise right shift operation between int and other type is unsupported.
 *
 * Javscript function, returns Python object.
 *
 * @param  {!Sk.builtin.object} other The Python object by which to right shift
 * @return {(Sk.builtin.int_|Sk.builtin.lng|Sk.builtin.NotImplemented)} The result of the right shift
 */
Sk.builtin.int_.prototype.nb$rshift = function (other) {
    var thisAsLong;

    if (other instanceof Sk.builtin.int_) {
        var tmp;
        var shift = Sk.builtin.asnum$(other);

        if (shift !== undefined) {
            if (shift < 0) {
                throw new Sk.builtin.ValueError("negative shift count");
            }
            tmp = this.v >> shift;
            if ((this.v > 0) && (tmp < 0)) {
                // Fix incorrect sign extension
                tmp = tmp & (Math.pow(2, 32 - shift) - 1);
            }
        }

        if (tmp !== undefined) {
            tmp = /** @type {number} */ (tmp);
            return new Sk.builtin.int_(tmp);
        }
    }

    if (other instanceof Sk.builtin.lng) {
        thisAsLong = new Sk.builtin.lng(this.v);
        return thisAsLong.nb$rshift(other);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.int_.prototype.nb$reflected_rshift = function (other) {
    if (other instanceof Sk.builtin.int_) {
        return other.nb$rshift(this);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/**
 * Compute the bitwise inverse of this instance (i.e. ~this).
 *
 * Javscript function, returns Python object.
 *
 * @return {Sk.builtin.int_} The result of the inversion
 */
Sk.builtin.int_.prototype.nb$invert = function () {
    return new Sk.builtin.int_(~this.v);
};

/** @override */
Sk.builtin.int_.prototype.nb$inplace_add = Sk.builtin.int_.prototype.nb$add;

/** @override */
Sk.builtin.int_.prototype.nb$inplace_subtract = Sk.builtin.int_.prototype.nb$subtract;

/** @override */
Sk.builtin.int_.prototype.nb$inplace_multiply = Sk.builtin.int_.prototype.nb$multiply;

/** @override */
Sk.builtin.int_.prototype.nb$inplace_divide = Sk.builtin.int_.prototype.nb$divide;

/** @override */
Sk.builtin.int_.prototype.nb$inplace_remainder = Sk.builtin.int_.prototype.nb$remainder;

/** @override */
Sk.builtin.int_.prototype.nb$inplace_floor_divide = Sk.builtin.int_.prototype.nb$floor_divide;

/** @override */
Sk.builtin.int_.prototype.nb$inplace_power = Sk.builtin.int_.prototype.nb$power;

/**
 * @function
 * @name  nb$inplace_and
 * @memberOf Sk.builtin.int_.prototype
 * @description
 * Compute the bitwise AND of this instance and a Python object (i.e. this &= other).
 *
 * Returns NotImplemented if inplace bitwise AND operation between int and other type is unsupported.
 *
 * Javscript function, returns Python object.
 *
 * @param  {!Sk.builtin.object} other The Python object to AND with this one
 * @return {(Sk.builtin.int_|Sk.builtin.lng|Sk.builtin.NotImplemented)} The result of the conjunction
 */
Sk.builtin.int_.prototype.nb$inplace_and = Sk.builtin.int_.prototype.nb$and;

/**
 * @function
 * @name  nb$inplace_or
 * @memberOf Sk.builtin.int_.prototype
 * @description
 * Compute the bitwise OR of this instance and a Python object (i.e. this |= other).
 *
 * Returns NotImplemented if inplace bitwise OR operation between int and other type is unsupported.
 *
 * Javscript function, returns Python object.
 *
 * @param  {!Sk.builtin.object} other The Python object to OR with this one
 * @return {(Sk.builtin.int_|Sk.builtin.lng|Sk.builtin.NotImplemented)} The result of the disjunction
 */
Sk.builtin.int_.prototype.nb$inplace_or = Sk.builtin.int_.prototype.nb$or;

/**
 * @function
 * @name  nb$inplace_xor
 * @memberOf Sk.builtin.int_.prototype
 * @description
 * Compute the bitwise XOR of this instance and a Python object (i.e. this ^= other).
 *
 * Returns NotImplemented if inplace bitwise XOR operation between int and other type is unsupported.
 *
 * Javscript function, returns Python object.
 *
 * @param  {!Sk.builtin.object} other The Python object to XOR with this one
 * @return {(Sk.builtin.int_|Sk.builtin.lng|Sk.builtin.NotImplemented)} The result of the exclusive disjunction
 */
Sk.builtin.int_.prototype.nb$inplace_xor = Sk.builtin.int_.prototype.nb$xor;

/**
 * @function
 * @name  nb$inplace_lshift
 * @memberOf Sk.builtin.int_.prototype
 * @description
 * Compute the bitwise left shift of this instance by a Python object (i.e. this <<= other).
 *
 * Returns NotImplemented if inplace bitwise left shift operation between int and other type is unsupported.
 *
 * Javscript function, returns Python object.
 *
 * @param  {!Sk.builtin.object} other The Python object by which to left shift
 * @return {(Sk.builtin.int_|Sk.builtin.lng|Sk.builtin.NotImplemented)} The result of the left shift
 */
Sk.builtin.int_.prototype.nb$inplace_lshift = Sk.builtin.int_.prototype.nb$lshift;

/**
 * @function
 * @name  nb$inplace_rshift
 * @memberOf Sk.builtin.int_.prototype
 * @description
 * Compute the bitwise right shift of this instance by a Python object (i.e. this >>= other).
 *
 * Returns NotImplemented if inplace bitwise right shift operation between int and other type is unsupported.
 *
 * Javscript function, returns Python object.
 *
 * @param  {!Sk.builtin.object} other The Python object by which to right shift
 * @return {(Sk.builtin.int_|Sk.builtin.lng|Sk.builtin.NotImplemented)} The result of the right shift
 */
Sk.builtin.int_.prototype.nb$inplace_rshift = Sk.builtin.int_.prototype.nb$rshift;

/**
 * @override
 *
 * @return {Sk.builtin.int_} A copy of this instance with the value negated.
 */
Sk.builtin.int_.prototype.nb$negative = function () {
    return new Sk.builtin.int_(-this.v);
};

/** @override */
Sk.builtin.int_.prototype.nb$positive = function () {
    return this.clone();
};

/** @override */
Sk.builtin.int_.prototype.nb$nonzero = function () {
    return this.v !== 0;
};

/** @override */
Sk.builtin.int_.prototype.nb$isnegative = function () {
    return this.v < 0;
};

/** @override */
Sk.builtin.int_.prototype.nb$ispositive = function () {
    return this.v >= 0;
};

/**
 * Compare this instance's value to another Python object's value.
 *
 * Returns NotImplemented if comparison between int and other type is unsupported.
 *
 * Javscript function, returns Javascript object or Sk.builtin.NotImplemented.
 *
 * @return {(number|Sk.builtin.NotImplemented)} negative if this < other, zero if this == other, positive if this > other
 */
Sk.builtin.int_.prototype.numberCompare = function (other) {
    if (other instanceof Sk.builtin.int_) {
        return this.v - other.v;
    }

    if (other instanceof Sk.builtin.lng) {
        return -other.longCompare(this);
    }

    if (other instanceof Sk.builtin.float_) {
        return -other.numberCompare(this);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

// Despite what jshint may want us to do, these two  functions need to remain
// as == and !=  Unless you modify the logic of numberCompare do not change
// these.

/** @override */
Sk.builtin.int_.prototype.ob$eq = function (other) {
    if (other instanceof Sk.builtin.int_ || other instanceof Sk.builtin.lng ||
        other instanceof Sk.builtin.float_) {
        return new Sk.builtin.bool(this.numberCompare(other) == 0); //jshint ignore:line
    } else if (other instanceof Sk.builtin.none) {
        return Sk.builtin.bool.false$;
    } else {
        return Sk.builtin.NotImplemented.NotImplemented$;
    }
};

/** @override */
Sk.builtin.int_.prototype.ob$ne = function (other) {
    if (other instanceof Sk.builtin.int_ || other instanceof Sk.builtin.lng ||
        other instanceof Sk.builtin.float_) {
        return new Sk.builtin.bool(this.numberCompare(other) != 0); //jshint ignore:line
    } else if (other instanceof Sk.builtin.none) {
        return Sk.builtin.bool.true$;
    } else {
        return Sk.builtin.NotImplemented.NotImplemented$;
    }
};

/** @override */
Sk.builtin.int_.prototype.ob$lt = function (other) {
    if (other instanceof Sk.builtin.int_ || other instanceof Sk.builtin.lng ||
        other instanceof Sk.builtin.float_) {
        return new Sk.builtin.bool(this.numberCompare(other) < 0);
    } else {
        return Sk.builtin.NotImplemented.NotImplemented$;
    }
};

/** @override */
Sk.builtin.int_.prototype.ob$le = function (other) {
    if (other instanceof Sk.builtin.int_ || other instanceof Sk.builtin.lng ||
        other instanceof Sk.builtin.float_) {
        return new Sk.builtin.bool(this.numberCompare(other) <= 0);
    } else {
        return Sk.builtin.NotImplemented.NotImplemented$;
    }
};

/** @override */
Sk.builtin.int_.prototype.ob$gt = function (other) {
    if (other instanceof Sk.builtin.int_ || other instanceof Sk.builtin.lng ||
        other instanceof Sk.builtin.float_) {
        return new Sk.builtin.bool(this.numberCompare(other) > 0);
    } else {
        return Sk.builtin.NotImplemented.NotImplemented$;
    }
};

/** @override */
Sk.builtin.int_.prototype.ob$ge = function (other) {
    if (other instanceof Sk.builtin.int_ || other instanceof Sk.builtin.lng ||
        other instanceof Sk.builtin.float_) {
        return new Sk.builtin.bool(this.numberCompare(other) >= 0);
    } else {
        return Sk.builtin.NotImplemented.NotImplemented$;
    }
};

/**
 * Round this instance to a given number of digits, or zero if omitted.
 *
 * Implements `__round__` dunder method.
 *
 * Javascript function, returns Python object.
 *
 * @param  {Sk.builtin.int_} self This instance.
 * @param  {Object|number=} ndigits The number of digits after the decimal point to which to round.
 * @return {Sk.builtin.int_} The rounded integer.
 */
Sk.builtin.int_.prototype.round$ = function (self, ndigits) {
    Sk.builtin.pyCheckArgsLen("__round__", arguments.length, 1, 2);

    var result, multiplier, number, num10, rounded, bankRound, ndigs;

    if ((ndigits !== undefined) && !Sk.misceval.isIndex(ndigits)) {
        throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(ndigits) + "' object cannot be interpreted as an index");
    }

    number = Sk.builtin.asnum$(self);
    if (ndigits === undefined) {
        ndigs = 0;
    } else {
        ndigs = Sk.misceval.asIndex(ndigits);
    }

    if (Sk.__future__.bankers_rounding) {
        num10 = number * Math.pow(10, ndigs);
        rounded = Math.round(num10);
        bankRound = (((((num10>0)?num10:(-num10))%1)===0.5)?(((0===(rounded%2)))?rounded:(rounded-1)):rounded);
        result = bankRound / Math.pow(10, ndigs);
        return new Sk.builtin.int_(result);
    } else {
        multiplier = Math.pow(10, ndigs);
        result = Math.round(number * multiplier) / multiplier;

        return new Sk.builtin.int_(result);
    }
};

Sk.builtin.int_.prototype.__format__= function (obj, format_spec) {
    var formatstr;
    Sk.builtin.pyCheckArgsLen("__format__", arguments.length, 2, 2);

    if (!Sk.builtin.checkString(format_spec)) {
        if (Sk.__future__.exceptions) {
            throw new Sk.builtin.TypeError("format() argument 2 must be str, not " + Sk.abstr.typeName(format_spec));
        } else {
            throw new Sk.builtin.TypeError("format expects arg 2 to be string or unicode, not " + Sk.abstr.typeName(format_spec));
        }
    } else {
        formatstr = Sk.ffi.remapToJs(format_spec);
        if (formatstr !== "") {
            throw new Sk.builtin.NotImplementedError("format spec is not yet implemented");
        }
    }

    return new Sk.builtin.str(obj);
};

Sk.builtin.int_.prototype.conjugate = new Sk.builtin.func(function (self) {
    return new Sk.builtin.int_(self.v);
});

/** @override */
Sk.builtin.int_.prototype["$r"] = function () {
    return new Sk.builtin.str(this.str$(10, true));
};

/**
 * Return the string representation of this instance.
 *
 * Javascript function, returns Python object.
 *
 * @return {Sk.builtin.str} The Python string representation of this instance.
 */
Sk.builtin.int_.prototype.tp$str = function () {
    return new Sk.builtin.str(this.str$(10, true));
};

/**
 * Convert this instance's value to a Javascript string.
 *
 * Javascript function, returns Javascript object.
 *
 * @param {number} base The base of the value.
 * @param {boolean} sign true if the value should be signed, false otherwise.
 * @return {string} The Javascript string representation of this instance.
 */
Sk.builtin.int_.prototype.str$ = function (base, sign) {
    var tmp;
    var work;

    if (sign === undefined) {
        sign = true;
    }

    work = sign ? this.v : Math.abs(this.v);

    if (base === undefined || base === 10) {
        tmp = work.toString();
    } else {
        tmp = work.toString(base);
    }

    return tmp;
};

/**
 * Takes a JavaScript string and returns a number using the parser and negater
 *  functions (for int/long right now)
 * @param  {string} s       Javascript string to convert to a number.
 * @param  {(number)} base    The base of the number.
 * @param  {function(*, (number|undefined)): number} parser  Function which should take
 *  a string that is a postive number which only contains characters that are
 *  valid in the given base and a base and return a number.
 * @param  {function((number|Sk.builtin.biginteger)): number} negater Function which should take a
 *  number and return its negation
 * @param  {string} fname   The name of the calling function, to be used in error messages
 * @return {number}         The number equivalent of the string in the given base
 */
Sk.str2number = function (s, base, parser, negater, fname) {
    var origs = s,
        neg = false,
        i,
        ch,
        val;

    // strip whitespace from ends
    // s = s.trim();
    s = s.replace(/^\s+|\s+$/g, "");

    // check for minus sign
    if (s.charAt(0) === "-") {
        neg = true;
        s = s.substring(1);
    }

    // check for plus sign
    if (s.charAt(0) === "+") {
        s = s.substring(1);
    }

    if (base === null || base === undefined) {
        base = 10;
    } // default radix is 10, not dwim

    if (base < 2 || base > 36) {
        if (base !== 0) {
            throw new Sk.builtin.ValueError(fname + "() base must be >= 2 and <= 36");
        }
    }

    if (s.substring(0, 2).toLowerCase() === "0x") {
        if (base === 16 || base === 0) {
            s = s.substring(2);
            base = 16;
        } else if (base < 34) {
            throw new Sk.builtin.ValueError("invalid literal for " + fname + "() with base " + base + ": '" + origs + "'");
        }
    } else if (s.substring(0, 2).toLowerCase() === "0b") {
        if (base === 2 || base === 0) {
            s = s.substring(2);
            base = 2;
        } else if (base < 12) {
            throw new Sk.builtin.ValueError("invalid literal for " + fname + "() with base " + base + ": '" + origs + "'");
        }
    } else if (s.substring(0, 2).toLowerCase() === "0o") {
        if (base === 8 || base === 0) {
            s = s.substring(2);
            base = 8;
        } else if (base < 25) {
            throw new Sk.builtin.ValueError("invalid literal for " + fname + "() with base " + base + ": '" + origs + "'");
        }
    } else if (s.charAt(0) === "0") {
        if (s === "0") {
            return 0;
        }
        if (base === 8 || base === 0) {
            base = 8;
        }
    }

    if (base === 0) {
        base = 10;
    }

    if (s.length === 0) {
        throw new Sk.builtin.ValueError("invalid literal for " + fname + "() with base " + base + ": '" + origs + "'");
    }

    // check all characters are valid
    for (i = 0; i < s.length; i = i + 1) {
        ch = s.charCodeAt(i);
        val = base;
        if ((ch >= 48) && (ch <= 57)) {
            // 0-9
            val = ch - 48;
        } else if ((ch >= 65) && (ch <= 90)) {
            // A-Z
            val = ch - 65 + 10;
        } else if ((ch >= 97) && (ch <= 122)) {
            // a-z
            val = ch - 97 + 10;
        }

        if (val >= base) {
            throw new Sk.builtin.ValueError("invalid literal for " + fname + "() with base " + base + ": '" + origs + "'");
        }
    }

    // parse number
    val = parser(s, base);
    if (neg) {
        val = negater(val);
    }
    return val;
};

Sk.exportSymbol("Sk.builtin.int_", Sk.builtin.int_);
/**
 * @constructor
 * Sk.builtin.bool
 *
 * @description
 * Constructor for Python bool. Also used for builtin bool() function.
 *
 * Where possible, do not create a new instance but use the constants 
 * Sk.builtin.bool.true$ or Sk.builtin.bool.false$. These are defined in src/constant.js
 *
 * @extends {Sk.builtin.object}
 * 
 * @param  {(Object|number|boolean)} x Value to evaluate as true or false
 * @return {Sk.builtin.bool} Sk.builtin.bool.true$ if x is true, Sk.builtin.bool.false$ otherwise
 */
Sk.builtin.bool = function (x) {
    Sk.builtin.pyCheckArgsLen("bool", arguments.length, 1);
    if (Sk.misceval.isTrue(x)) {
        return Sk.builtin.bool.true$;
    } else {
        return Sk.builtin.bool.false$;
    }
};

Sk.abstr.setUpInheritance("bool", Sk.builtin.bool, Sk.builtin.int_);

Sk.builtin.bool.prototype["$r"] = function () {
    if (this.v) {
        return new Sk.builtin.str("True");
    }
    return new Sk.builtin.str("False");
};

Sk.builtin.bool.prototype.tp$hash = function () {
    return new Sk.builtin.int_(this.v);
};

Sk.builtin.bool.prototype.__int__ = new Sk.builtin.func(function(self) {
    var v = Sk.builtin.asnum$(self);

    return new Sk.builtin.int_(v);
});

Sk.builtin.bool.prototype.__float__ = new Sk.builtin.func(function(self) {
    return new Sk.builtin.float_(Sk.ffi.remapToJs(self));
});

Sk.exportSymbol("Sk.builtin.bool", Sk.builtin.bool);
/**
 * @namespace Sk.builtin
 */

/**
 * @constructor
 * Sk.builtin.float_
 *
 * @description
 * Constructor for Python float. Also used for builtin float().
 *
 * @extends {Sk.builtin.numtype}
 *
 * @param {!(Object|number|string)} x Object or number to convert to Python float.
 * @return {Sk.builtin.float_} Python float
 */
Sk.builtin.float_ = function (x) {
    var tmp;
    if (x === undefined) {
        return new Sk.builtin.float_(0.0);
    }

    if (!(this instanceof Sk.builtin.float_)) {
        return new Sk.builtin.float_(x);
    }


    if (x instanceof Sk.builtin.str) {
        return Sk.builtin._str_to_float(x.v);
    }

    // Floats are just numbers
    if (typeof x === "number" || x instanceof Sk.builtin.int_ || x instanceof Sk.builtin.lng || x instanceof Sk.builtin.float_) {
        tmp = Sk.builtin.asnum$(x);
        if (typeof tmp === "string") {
            return Sk.builtin._str_to_float(tmp);
        }
        this.v = tmp;
        return this;
    }

    // Convert booleans
    if (x instanceof Sk.builtin.bool) {
        this.v = Sk.builtin.asnum$(x);
        return this;
    }

    // this is a special internal case
    if(typeof x === "boolean") {
        this.v = x ? 1.0 : 0.0;
        return this;
    }

    if (typeof x === "string") {
        this.v = parseFloat(x);
        return this;
    }

    // try calling __float__
    var special = Sk.abstr.lookupSpecial(x, Sk.builtin.str.$float_);
    if (special != null) {
        // method on builtin, provide this arg
        return Sk.misceval.callsimArray(special, [x]);
    }

    throw new Sk.builtin.TypeError("float() argument must be a string or a number");
};

Sk.abstr.setUpInheritance("float", Sk.builtin.float_, Sk.builtin.numtype);

Sk.builtin._str_to_float = function (str) {
    var tmp;

    if (str.match(/^-inf$/i)) {
        tmp = -Infinity;
    } else if (str.match(/^[+]?inf$/i)) {
        tmp = Infinity;
    } else if (str.match(/^[-+]?nan$/i)) {
        tmp = NaN;
    } else if (!isNaN(str)) {
        tmp = parseFloat(str);
    } else {
        throw new Sk.builtin.ValueError("float: Argument: " + str + " is not number");
    }
    return new Sk.builtin.float_(tmp);
};

Sk.builtin.float_.prototype.nb$int_ = function () {
    var v = this.v;

    if (v < 0) {
        v = Math.ceil(v);
    } else {
        v = Math.floor(v);
    }

    // this should take care of int/long fitting
    return new Sk.builtin.int_(v);
};

Sk.builtin.float_.prototype.nb$float_ = function() {
    return this;
};

Sk.builtin.float_.prototype.nb$lng = function () {
    return new Sk.builtin.lng(this.v);
};

/**
 * Checks for float subtypes, though skulpt does not allow to
 * extend them for now.
 *
 * Javascript function, returns Javascript object.
 * @param {Object} op The object to check as subtype.
 * @return {boolean} true if op is a subtype of Sk.builtin.float_, false otherwise
 */
Sk.builtin.float_.PyFloat_Check = function (op) {
    if (op === undefined) {
        return false;
    }

    // this is a little bit hacky
    // ToDo: subclassable builtins do not require this
    if (Sk.builtin.checkNumber(op)) {
        return true;
    }

    if (Sk.builtin.checkFloat(op)) {
        return true;
    }

    if (Sk.builtin.issubclass(op.ob$type, Sk.builtin.float_)) {
        return true;
    }

    return false;
};

/**
 * Checks if ob is a Python float.
 *
 * This method is just a wrapper, but uses the correct cpython API name.
 *
 * Javascript function, returns Javascript object.
 * @param {Object} op The object to check.
 * @return {boolean} true if op is an instance of Sk.builtin.float_, false otherwise
 */
Sk.builtin.float_.PyFloat_Check_Exact = function (op) {
    return Sk.builtin.checkFloat(op);
};

Sk.builtin.float_.PyFloat_AsDouble = function (op) {
    var f; // nb_float;
    var fo; // PyFloatObject *fo;
    var val;

    // it is a subclass or direct float
    if (op && Sk.builtin.float_.PyFloat_Check(op)) {
        return Sk.ffi.remapToJs(op);
    }

    if (op == null) {
        throw new Error("bad argument for internal PyFloat_AsDouble function");
    }

    // check if special method exists (nb_float is not implemented in skulpt, hence we use __float__)
    f = Sk.builtin.type.typeLookup(op.ob$type, Sk.builtin.str.$float_);
    if (f == null) {
        throw new Sk.builtin.TypeError("a float is required");
    }

    // call internal float method
    fo = Sk.misceval.callsimArray(f, [op]);

    // return value of __float__ must be a python float
    if (!Sk.builtin.float_.PyFloat_Check(fo)) {
        throw new Sk.builtin.TypeError("nb_float should return float object");
    }

    val = Sk.ffi.remapToJs(fo);

    return val;
};

/**
 * Return this instance's Javascript value.
 *
 * Javascript function, returns Javascript object.
 *
 * @return {number} This instance's value.
 */
Sk.builtin.float_.prototype.tp$index = function () {
    return this.v;
};

/** @override */
Sk.builtin.float_.prototype.tp$hash = function () {
    //the hash of all numbers should be an int and since javascript doesn't really
    //care every number can be an int.
    return this.nb$int_();
};


/**
 * Returns a copy of this instance.
 *
 * Javascript function, returns Python object.
 *
 * @return {Sk.builtin.float_} The copy
 */
Sk.builtin.float_.prototype.clone = function () {
    return new Sk.builtin.float_(this.v);
};

/**
 * Returns this instance's value as a string formatted using fixed-point notation.
 *
 * Javascript function, returns Javascript object.
 *
 * @param  {Object|number} x The numer of digits to appear after the decimal point.
 * @return {string}   The string representation of this instance's value.
 */
Sk.builtin.float_.prototype.toFixed = function (x) {
    x = Sk.builtin.asnum$(x);
    return this.v.toFixed(x);
};

/** @override */
Sk.builtin.float_.prototype.nb$add = function (other) {
    if (other instanceof Sk.builtin.int_ || other instanceof Sk.builtin.float_) {
        return new Sk.builtin.float_(this.v + other.v);
    } else if (other instanceof Sk.builtin.lng) {
        return new Sk.builtin.float_(this.v + parseFloat(other.str$(10, true)));
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/** @override */
Sk.builtin.float_.prototype.nb$reflected_add = function (other) {
    // Should not automatically call this.nb$add, as nb$add may have
    // been overridden by a subclass
    return Sk.builtin.float_.prototype.nb$add.call(this, other);
};

/** @override */
Sk.builtin.float_.prototype.nb$subtract = function (other) {
    if (other instanceof Sk.builtin.int_ || other instanceof Sk.builtin.float_) {
        return new Sk.builtin.float_(this.v - other.v);
    } else if (other instanceof Sk.builtin.lng) {
        return new Sk.builtin.float_(this.v - parseFloat(other.str$(10, true)));
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/** @override */
Sk.builtin.float_.prototype.nb$reflected_subtract = function (other) {
    // Should not automatically call this.nb$add, as nb$add may have
    // been overridden by a subclass
    var negative_this = this.nb$negative();
    return Sk.builtin.float_.prototype.nb$add.call(negative_this, other);
};

/** @override */
Sk.builtin.float_.prototype.nb$multiply = function (other) {
    if (other instanceof Sk.builtin.int_ || other instanceof Sk.builtin.float_) {
        return new Sk.builtin.float_(this.v * other.v);
    } else if (other instanceof Sk.builtin.lng) {
        return new Sk.builtin.float_(this.v * parseFloat(other.str$(10, true)));
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/** @override */
Sk.builtin.float_.prototype.nb$reflected_multiply = function (other) {
    // Should not automatically call this.nb$multiply, as nb$multiply may have
    // been overridden by a subclass
    return Sk.builtin.float_.prototype.nb$multiply.call(this, other);
};

/** @override */
Sk.builtin.float_.prototype.nb$divide = function (other) {
    if (other instanceof Sk.builtin.int_ || other instanceof Sk.builtin.float_) {

        if (other.v === 0) {
            throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");
        }

        if (this.v === Infinity) {
            if (other.v === Infinity || other.v === -Infinity) {
                return new Sk.builtin.float_(NaN);
            } else if (other.nb$isnegative()) {
                return new Sk.builtin.float_(-Infinity);
            } else {
                return new Sk.builtin.float_(Infinity);
            }
        }
        if (this.v === -Infinity) {
            if (other.v === Infinity || other.v === -Infinity) {
                return new Sk.builtin.float_(NaN);
            } else if (other.nb$isnegative()) {
                return new Sk.builtin.float_(Infinity);
            } else {
                return new Sk.builtin.float_(-Infinity);
            }
        }

        return new Sk.builtin.float_(this.v / other.v);
    }

    if (other instanceof Sk.builtin.lng) {
        if (other.longCompare(Sk.builtin.biginteger.ZERO) === 0) {
            throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");
        }

        if (this.v === Infinity) {
            if (other.nb$isnegative()) {
                return new Sk.builtin.float_(-Infinity);
            } else {
                return new Sk.builtin.float_(Infinity);
            }
        }
        if (this.v === -Infinity) {
            if (other.nb$isnegative()) {
                return new Sk.builtin.float_(Infinity);
            } else {
                return new Sk.builtin.float_(-Infinity);
            }
        }

        return new Sk.builtin.float_(this.v / parseFloat(other.str$(10, true)));
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/** @override */
Sk.builtin.float_.prototype.nb$reflected_divide = function (other) {
    if (other instanceof Sk.builtin.int_ ||
        other instanceof Sk.builtin.lng) {
        other = new Sk.builtin.float_(other);
    }

    if (other instanceof Sk.builtin.float_) {
        return other.nb$divide(this);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/** @override */
Sk.builtin.float_.prototype.nb$floor_divide = function (other) {

    if (other instanceof Sk.builtin.int_ || other instanceof Sk.builtin.float_) {

        if (this.v === Infinity || this.v === -Infinity) {
            return new Sk.builtin.float_(NaN);
        }

        if (other.v === 0) {
            throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");
        }

        if (other.v === Infinity) {
            if (this.nb$isnegative()) {
                return new Sk.builtin.float_(-1);
            } else {
                return new Sk.builtin.float_(0);
            }
        }
        if (other.v === -Infinity) {
            if (this.nb$isnegative() || !this.nb$nonzero()) {
                return new Sk.builtin.float_(0);
            } else {
                return new Sk.builtin.float_(-1);
            }
        }

        return new Sk.builtin.float_(Math.floor(this.v / other.v));
    }

    if (other instanceof Sk.builtin.lng) {
        if (other.longCompare(Sk.builtin.biginteger.ZERO) === 0) {
            throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");
        }

        if (this.v === Infinity || this.v === -Infinity) {
            return new Sk.builtin.float_(NaN);
        }

        return new Sk.builtin.float_(Math.floor(this.v / parseFloat(other.str$(10, true))));
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/** @override */
Sk.builtin.float_.prototype.nb$reflected_floor_divide = function (other) {
    if (other instanceof Sk.builtin.int_ ||
        other instanceof Sk.builtin.lng) {
        other = new Sk.builtin.float_(other);
    }

    if (other instanceof Sk.builtin.float_) {
        return other.nb$floor_divide(this);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/** @override */
Sk.builtin.float_.prototype.nb$remainder = function (other) {
    var thisAsLong;
    var op2;
    var tmp;
    var result;

    if (other instanceof Sk.builtin.int_ || other instanceof Sk.builtin.float_) {

        if (other.v === 0) {
            throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");
        }

        if (this.v === 0) {
            return new Sk.builtin.float_(0);
        }

        if (other.v === Infinity) {
            if (this.v === Infinity || this.v === -Infinity) {
                return new Sk.builtin.float_(NaN);
            } else if (this.nb$ispositive()) {
                return new Sk.builtin.float_(this.v);
            } else {
                return new Sk.builtin.float_(Infinity);
            }
        }

        //  Javacript logic on negatives doesn't work for Python... do this instead
        tmp = this.v % other.v;

        if (this.v < 0) {
            if (other.v > 0 && tmp < 0) {
                tmp = tmp + other.v;
            }
        } else {
            if (other.v < 0 && tmp !== 0) {
                tmp = tmp + other.v;
            }
        }

        if (other.v < 0 && tmp === 0) {
            tmp = -0.0; // otherwise the sign gets lost by javascript modulo
        } else if (tmp === 0 && Infinity/tmp === -Infinity) {
            tmp = 0.0;
        }

        return new Sk.builtin.float_(tmp);
    }

    if (other instanceof Sk.builtin.lng) {
        if (other.longCompare(Sk.builtin.biginteger.ZERO) === 0) {
            throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");
        }

        if (this.v === 0) {
            return new Sk.builtin.float_(0);
        }

        op2 = parseFloat(other.str$(10, true));
        tmp = this.v % op2;

        if (tmp < 0) {
            if (op2 > 0 && tmp !== 0) {
                tmp = tmp + op2;
            }
        } else {
            if (op2 < 0 && tmp !== 0) {
                tmp = tmp + op2;
            }
        }

        if (other.nb$isnegative() && tmp === 0) {
            tmp = -0.0; // otherwise the sign gets lost by javascript modulo
        } else if (tmp === 0 && Infinity/tmp === -Infinity) {
            tmp = 0.0;
        }

        return new Sk.builtin.float_(tmp);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/** @override */
Sk.builtin.float_.prototype.nb$reflected_remainder = function (other) {
    if (other instanceof Sk.builtin.int_ ||
        other instanceof Sk.builtin.lng) {
        other = new Sk.builtin.float_(other);
    }

    if (other instanceof Sk.builtin.float_) {
        return other.nb$remainder(this);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/** @override */
Sk.builtin.float_.prototype.nb$divmod = function (other) {
    if (other instanceof Sk.builtin.int_ ||
        other instanceof Sk.builtin.lng) {
        other = new Sk.builtin.float_(other);
    }

    if (other instanceof Sk.builtin.float_) {
        return new Sk.builtin.tuple([
            this.nb$floor_divide(other),
            this.nb$remainder(other)
        ]);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/** @override */
Sk.builtin.float_.prototype.nb$reflected_divmod = function (other) {
    if (other instanceof Sk.builtin.int_ ||
        other instanceof Sk.builtin.lng) {
        other = new Sk.builtin.float_(other);
    }

    if (other instanceof Sk.builtin.float_) {
        return new Sk.builtin.tuple([
            other.nb$floor_divide(this),
            other.nb$remainder(this)
        ]);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/** @override */
Sk.builtin.float_.prototype.nb$power = function (other, mod) {
    var thisAsLong;
    var result;

    if (other instanceof Sk.builtin.int_ || other instanceof Sk.builtin.float_) {
        if (this.v < 0 && other.v % 1 !== 0) {
            throw new Sk.builtin.NegativePowerError("cannot raise a negative number to a fractional power");
        }
        if (this.v === 0 && other.v < 0) {
            throw new Sk.builtin.NegativePowerError("cannot raise zero to a negative power");
        }

        result = new Sk.builtin.float_(Math.pow(this.v, other.v));

        if ((Math.abs(result.v) === Infinity) &&
            (Math.abs(this.v) !== Infinity) &&
            (Math.abs(other.v) !== Infinity)) {
            throw new Sk.builtin.OverflowError("Numerical result out of range");
        }
        return result;
    }

    if (other instanceof Sk.builtin.lng) {
        if (this.v === 0 && other.longCompare(Sk.builtin.biginteger.ZERO) < 0) {
            throw new Sk.builtin.NegativePowerError("cannot raise zero to a negative power");
        }

        return new Sk.builtin.float_(Math.pow(this.v, parseFloat(other.str$(10, true))));
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/** @override */
Sk.builtin.float_.prototype.nb$reflected_power = function (n, mod) {
    if (n instanceof Sk.builtin.int_ ||
        n instanceof Sk.builtin.lng) {
        n = new Sk.builtin.float_(n);
    }

    if (n instanceof Sk.builtin.float_) {
        return n.nb$power(this, mod);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/** @override */
Sk.builtin.float_.prototype.nb$abs = function () {
    return new Sk.builtin.float_(Math.abs(this.v));
};

/** @override */
Sk.builtin.float_.prototype.nb$inplace_add = Sk.builtin.float_.prototype.nb$add;

/** @override */
Sk.builtin.float_.prototype.nb$inplace_subtract = Sk.builtin.float_.prototype.nb$subtract;

/** @override */
Sk.builtin.float_.prototype.nb$inplace_multiply = Sk.builtin.float_.prototype.nb$multiply;

/** @override */
Sk.builtin.float_.prototype.nb$inplace_divide = Sk.builtin.float_.prototype.nb$divide;

/** @override */
Sk.builtin.float_.prototype.nb$inplace_remainder = Sk.builtin.float_.prototype.nb$remainder;

/** @override */
Sk.builtin.float_.prototype.nb$inplace_floor_divide = Sk.builtin.float_.prototype.nb$floor_divide;

/** @override */
Sk.builtin.float_.prototype.nb$inplace_power = Sk.builtin.float_.prototype.nb$power;

/**
 * @override
 *
 * @return {Sk.builtin.float_} A copy of this instance with the value negated.
 */
Sk.builtin.float_.prototype.nb$negative = function () {
    return new Sk.builtin.float_(-this.v);
};

/** @override */
Sk.builtin.float_.prototype.nb$positive = function () {
    return this.clone();
};

/** @override */
Sk.builtin.float_.prototype.nb$nonzero = function () {
    return this.v !== 0;
};

/** @override */
Sk.builtin.float_.prototype.nb$isnegative = function () {
    return this.v < 0;
};

/** @override */
Sk.builtin.float_.prototype.nb$ispositive = function () {
    return this.v >= 0;
};

/**
 * Compare this instance's value to another Python object's value.
 *
 * Returns NotImplemented if comparison between float and other type is unsupported.
 *
 * Javscript function, returns Javascript object or Sk.builtin.NotImplemented.
 *
 * @return {(number|Sk.builtin.NotImplemented)} negative if this < other, zero if this == other, positive if this > other
 */
Sk.builtin.float_.prototype.numberCompare = function (other) {
    var diff;
    var tmp;
    var thisAsLong;

    if (other instanceof Sk.builtin.int_ || other instanceof Sk.builtin.float_) {
        if (this.v == Infinity && other.v == Infinity) {
            return 0;
        }
        if (this.v == -Infinity && other.v == -Infinity) {
            return 0;
        }
        return this.v - other.v;
    }

    if (other instanceof Sk.builtin.lng) {
        if (this.v % 1 === 0) {
            thisAsLong = new Sk.builtin.lng(this.v);
            tmp = thisAsLong.longCompare(other);
            return tmp;
        }
        diff = this.nb$subtract(other);
        if (diff instanceof Sk.builtin.float_) {
            return diff.v;
        } else if (diff instanceof Sk.builtin.lng) {
            return diff.longCompare(Sk.builtin.biginteger.ZERO);
        }
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

// Despite what jshint may want us to do, these two  functions need to remain
// as == and !=  Unless you modify the logic of numberCompare do not change
// these.

/** @override */
Sk.builtin.float_.prototype.ob$eq = function (other) {
    if (other instanceof Sk.builtin.int_ ||
        other instanceof Sk.builtin.lng ||
        other instanceof Sk.builtin.float_) {
        return new Sk.builtin.bool(this.numberCompare(other) == 0); //jshint ignore:line
    } else if (other instanceof Sk.builtin.none) {
        return Sk.builtin.bool.false$;
    } else {
        return Sk.builtin.NotImplemented.NotImplemented$;
    }
};

/** @override */
Sk.builtin.float_.prototype.ob$ne = function (other) {
    if (other instanceof Sk.builtin.int_ ||
        other instanceof Sk.builtin.lng ||
        other instanceof Sk.builtin.float_) {
        return new Sk.builtin.bool(this.numberCompare(other) != 0); //jshint ignore:line
    } else if (other instanceof Sk.builtin.none) {
        return Sk.builtin.bool.true$;
    } else {
        return Sk.builtin.NotImplemented.NotImplemented$;
    }
};

/** @override */
Sk.builtin.float_.prototype.ob$lt = function (other) {
    if (other instanceof Sk.builtin.int_ ||
        other instanceof Sk.builtin.lng ||
        other instanceof Sk.builtin.float_) {
        return new Sk.builtin.bool(this.numberCompare(other) < 0);
    } else {
        return Sk.builtin.NotImplemented.NotImplemented$;
    }
};

/** @override */
Sk.builtin.float_.prototype.ob$le = function (other) {
    if (other instanceof Sk.builtin.int_ ||
        other instanceof Sk.builtin.lng ||
        other instanceof Sk.builtin.float_) {
        return new Sk.builtin.bool(this.numberCompare(other) <= 0);
    } else {
        return Sk.builtin.NotImplemented.NotImplemented$;
    }
};

/** @override */
Sk.builtin.float_.prototype.ob$gt = function (other) {
    if (other instanceof Sk.builtin.int_ ||
        other instanceof Sk.builtin.lng ||
        other instanceof Sk.builtin.float_) {
        return new Sk.builtin.bool(this.numberCompare(other) > 0);
    } else {
        return Sk.builtin.NotImplemented.NotImplemented$;
    }
};

/** @override */
Sk.builtin.float_.prototype.ob$ge = function (other) {
    if (other instanceof Sk.builtin.int_ ||
        other instanceof Sk.builtin.lng ||
        other instanceof Sk.builtin.float_) {
        return new Sk.builtin.bool(this.numberCompare(other) >= 0);
    } else {
        return Sk.builtin.NotImplemented.NotImplemented$;
    }
};

/**
 * Round this instance to a given number of digits, or zero if omitted.
 *
 * Implements `__round__` dunder method.
 *
 * Javascript function, returns Python object.
 *
 * @param  {Sk.builtin.int_} self This instance.
 * @param  {Object|number=} ndigits The number of digits after the decimal point to which to round.
 * @return {Sk.builtin.float_|Sk.builtin.int_} The rounded float.
 */
Sk.builtin.float_.prototype.round$ = function (self, ndigits) {
    Sk.builtin.pyCheckArgsLen("__round__", arguments.length, 1, 2);

    var result, multiplier, number, num10, rounded, bankRound, ndigs;

    if ((ndigits !== undefined) && !Sk.misceval.isIndex(ndigits)) {
        throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(ndigits) + "' object cannot be interpreted as an index");
    }

    number = Sk.builtin.asnum$(self);
    if (ndigits === undefined) {
        ndigs = 0;
    } else {
        ndigs = Sk.misceval.asIndex(ndigits);
    }

    if (Sk.__future__.bankers_rounding) {
        num10 = number * Math.pow(10, ndigs);
        rounded = Math.round(num10);
        bankRound = (((((num10>0)?num10:(-num10))%1)===0.5)?(((0===(rounded%2)))?rounded:(rounded-1)):rounded);
        result = bankRound / Math.pow(10, ndigs);
        if (ndigits === undefined) {
            return new Sk.builtin.int_(result);
        } else {
            return new Sk.builtin.float_(result);
        }
    } else {
        multiplier = Math.pow(10, ndigs);
        result = Math.round(number * multiplier) / multiplier;

        return new Sk.builtin.float_(result);
    }
};

Sk.builtin.float_.prototype.__format__= function (obj, format_spec) {
    var formatstr;
    Sk.builtin.pyCheckArgsLen("__format__", arguments.length, 2, 2);

    if (!Sk.builtin.checkString(format_spec)) {
        if (Sk.__future__.exceptions) {
            throw new Sk.builtin.TypeError("format() argument 2 must be str, not " + Sk.abstr.typeName(format_spec));
        } else {
            throw new Sk.builtin.TypeError("format expects arg 2 to be string or unicode, not " + Sk.abstr.typeName(format_spec));
        }
    } else {
        formatstr = Sk.ffi.remapToJs(format_spec);
        if (formatstr !== "") {
            throw new Sk.builtin.NotImplementedError("format spec is not yet implemented");
        }
    }

    return new Sk.builtin.str(obj);
};


Sk.builtin.float_.prototype.conjugate = new Sk.builtin.func(function (self) {
    return new Sk.builtin.float_(self.v);
});

/** @override */
Sk.builtin.float_.prototype["$r"] = function () {
    return new Sk.builtin.str(this.str$(10, true));
};

/**
 * Return the string representation of this instance.
 *
 * Javascript function, returns Python object.
 *
 * @return {Sk.builtin.str} The Python string representation of this instance.
 */
Sk.builtin.float_.prototype.tp$str = function () {
    return new Sk.builtin.str(this.str$(10, true));
};

/**
 * Convert this instance's value to a Javascript string.
 *
 * Javascript function, returns Javascript object.
 *
 * @param {number} base The base of the value.
 * @param {boolean} sign true if the value should be signed, false otherwise.
 * @return {string} The Javascript string representation of this instance.
 */
Sk.builtin.float_.prototype.str$ = function (base, sign) {
    var post;
    var pre;
    var idx;
    var tmp;
    var work;

    if (isNaN(this.v)) {
        return "nan";
    }

    if (sign === undefined) {
        sign = true;
    }

    if (this.v == Infinity) {
        return "inf";
    }
    if (this.v == -Infinity && sign) {
        return "-inf";
    }
    if (this.v == -Infinity && !sign) {
        return "inf";
    }

    work = sign ? this.v : Math.abs(this.v);


    if (base === undefined || base === 10) {
        tmp = work.toPrecision(12);

        // transform fractions with 4 or more leading zeroes into exponents
        idx = tmp.indexOf(".");
        pre = work.toString().slice(0, idx);
        post = work.toString().slice(idx);

        if (pre.match(/^-?0$/) && post.slice(1).match(/^0{4,}/)) {
            if (tmp.length < 12) {
                tmp = work.toExponential();
            } else {
                tmp = work.toExponential(11);
            }
        }

        if (tmp.indexOf("e") < 0 && tmp.indexOf(".") >= 0) {
            while (tmp.charAt(tmp.length-1) == "0") {
                tmp = tmp.substring(0,tmp.length-1);
            }
            if (tmp.charAt(tmp.length-1) == ".") {
                tmp = tmp + "0";
            }
        }

        tmp = tmp.replace(new RegExp("\\.0+e"), "e", "i");
        // make exponent two digits instead of one (ie e+09 not e+9)
        tmp = tmp.replace(/(e[-+])([1-9])$/, "$10$2");
        // remove trailing zeroes before the exponent
        tmp = tmp.replace(/0+(e.*)/, "$1");
    } else {
        tmp = work.toString(base);
    }

    // restore negative zero sign
    if(this.v === 0 && 1/this.v === -Infinity) {
        tmp = "-" + tmp;
    }

    if (tmp.indexOf(".") < 0 && tmp.indexOf("E") < 0 && tmp.indexOf("e") < 0) {
        tmp = tmp + ".0";
    }

    return tmp;
};
var deprecatedError = new Sk.builtin.ExternalError("Sk.builtin.nmber is deprecated.");

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ constructors instead.
 * If you do not know at complile time which type of number, use Sk.builtin.assk$.
 */
Sk.builtin.nmber = function (x, skType)    /* number is a reserved word */ {
    throw new Sk.builtin.ExternalError("Sk.builtin.nmber is deprecated. Please replace with Sk.builtin.int_, Sk.builtin.float_, or Sk.builtin.assk$.");
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.tp$index = function () {
    return this.v;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.tp$hash = function () {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.fromInt$ = function (ival) {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.clone = function () {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.toFixed = function (x) {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$add = function (other) {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$subtract = function (other) {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$multiply = function (other) {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$divide = function (other) {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$floor_divide = function (other) {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$remainder = function (other) {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$divmod = function (other) {
    throw deprecatedError;

};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$power = function (other) {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$and = function (other) {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$or = function (other) {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$xor = function (other) {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$lshift = function (other) {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$rshift = function (other) {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$inplace_add = Sk.builtin.nmber.prototype.nb$add;

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$inplace_subtract = Sk.builtin.nmber.prototype.nb$subtract;

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$inplace_multiply = Sk.builtin.nmber.prototype.nb$multiply;

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$inplace_divide = Sk.builtin.nmber.prototype.nb$divide;

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$inplace_remainder = Sk.builtin.nmber.prototype.nb$remainder;

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$inplace_floor_divide = Sk.builtin.nmber.prototype.nb$floor_divide;

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$inplace_power = Sk.builtin.nmber.prototype.nb$power;

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$inplace_and = Sk.builtin.nmber.prototype.nb$and;

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$inplace_or = Sk.builtin.nmber.prototype.nb$or;

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$inplace_xor = Sk.builtin.nmber.prototype.nb$xor;

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$inplace_lshift = Sk.builtin.nmber.prototype.nb$lshift;

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$inplace_rshift = Sk.builtin.nmber.prototype.nb$rshift;

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$negative = function () {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$positive = function () {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$nonzero = function () {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$isnegative = function () {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.nb$ispositive = function () {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.numberCompare = function (other) {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.__eq__ = function (me, other) {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.__ne__ = function (me, other) {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.__lt__ = function (me, other) {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.__le__ = function (me, other) {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.__gt__ = function (me, other) {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.__ge__ = function (me, other) {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.round$ = function (self, ndigits) {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype["$r"] = function () {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.tp$str = function () {
    throw deprecatedError;
};

/**
 * @deprecated Please use Sk.builtin.int_ or Sk.builtin.float_ instead.
 */
Sk.builtin.nmber.prototype.str$ = function (base, sign) {
    throw deprecatedError;
};

Sk.exportSymbol("Sk.builtin.nmber", Sk.builtin.nmber);
/* global Sk: true, goog:true */

// long aka "bignumber" implementation
//
//  Using javascript BigInteger by Tom Wu
/**
 * @constructor
 * Sk.builtin.lng
 *
 * @description
 * Constructor for Python long. Also used for builtin long().
 *
 * @extends {Sk.builtin.numtype}
 *
 * @param {*} x Object or number to convert to Python long.
 * @param {number=} base Optional base.
 * @return {Sk.builtin.lng} Python long
 */
Sk.builtin.lng = function (x, base) {   /* long is a reserved word */
    base = Sk.builtin.asnum$(base);
    if (!(this instanceof Sk.builtin.lng)) {
        return new Sk.builtin.lng(x, base);
    }


    if (x === undefined) {
        this.biginteger = new Sk.builtin.biginteger(0);
        return this;
    }
    if (x instanceof Sk.builtin.lng) {
        this.biginteger = x.biginteger.clone();
        return this;
    }
    if (x instanceof Sk.builtin.biginteger) {
        this.biginteger = x;
        return this;
    }
    if (x instanceof String || typeof x === "string") {
        return Sk.longFromStr(x, base);
    }
    if (x instanceof Sk.builtin.str) {
        return Sk.longFromStr(x.v, base);
    }

    if ((x !== undefined) && (!Sk.builtin.checkString(x) && !Sk.builtin.checkNumber(x))) {
        if (x === true) {
            x = 1;
        } else if (x === false) {
            x = 0;
        } else {
            throw new Sk.builtin.TypeError("long() argument must be a string or a number, not '" + Sk.abstr.typeName(x) + "'");
        }
    }

    x = Sk.builtin.asnum$nofloat(x);
    this.biginteger = new Sk.builtin.biginteger(x);
    return this;
};

Sk.abstr.setUpInheritance("long", Sk.builtin.lng, Sk.builtin.numtype);

/* NOTE: See constants used for kwargs in constants.js */

Sk.builtin.lng.prototype.tp$index = function () {
    return parseInt(this.str$(10, true), 10);
};

Sk.builtin.lng.prototype.tp$hash = function () {
    return new Sk.builtin.int_(this.tp$index());
};

Sk.builtin.lng.prototype.nb$int_ = function() {
    if (this.cantBeInt()) {
        return new Sk.builtin.lng(this);
    }

    return new Sk.builtin.int_(this.toInt$());
};

Sk.builtin.lng.prototype.__format__= function (obj, format_spec) {
    var formatstr;
    Sk.builtin.pyCheckArgsLen("__format__", arguments.length, 2, 2);

    if (!Sk.builtin.checkString(format_spec)) {
        if (Sk.__future__.exceptions) {
            throw new Sk.builtin.TypeError("format() argument 2 must be str, not " + Sk.abstr.typeName(format_spec));
        } else {
            throw new Sk.builtin.TypeError("format expects arg 2 to be string or unicode, not " + Sk.abstr.typeName(format_spec));
        }
    } else {
        formatstr = Sk.ffi.remapToJs(format_spec);
        if (formatstr !== "") {
            throw new Sk.builtin.NotImplementedError("format spec is not yet implemented");
        }
    }

    return new Sk.builtin.str(obj);
};

Sk.builtin.lng.prototype.round$ = function (self, ndigits) {
    Sk.builtin.pyCheckArgsLen("__round__", arguments.length, 1, 2);

    var result, multiplier, number, num10, rounded, bankRound, ndigs;

    if ((ndigits !== undefined) && !Sk.misceval.isIndex(ndigits)) {
        throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(ndigits) + "' object cannot be interpreted as an index");
    }

    number = Sk.builtin.asnum$(self);
    if (ndigits === undefined) {
        ndigs = 0;
    } else {
        ndigs = Sk.misceval.asIndex(ndigits);
    }

    if (Sk.__future__.bankers_rounding) {
        num10 = number * Math.pow(10, ndigs);
        rounded = Math.round(num10);
        bankRound = (((((num10>0)?num10:(-num10))%1)===0.5)?(((0===(rounded%2)))?rounded:(rounded-1)):rounded);
        result = bankRound / Math.pow(10, ndigs);
        return new Sk.builtin.lng(result);
    } else {
        multiplier = Math.pow(10, ndigs);
        result = Math.round(number * multiplier) / multiplier;

        return new Sk.builtin.lng(result);
    }
};

Sk.builtin.lng.prototype.__index__ = new Sk.builtin.func(function(self) {
    return self.nb$int_(self);
});

Sk.builtin.lng.prototype.nb$lng_ = function () {
    return this;
};

Sk.builtin.lng.prototype.nb$float_ = function() {
    return new Sk.builtin.float_(Sk.ffi.remapToJs(this));
};

//    Threshold to determine when types should be converted to long
//Sk.builtin.lng.threshold$ = Sk.builtin.int_.threshold$;

Sk.builtin.lng.MAX_INT$ = new Sk.builtin.lng(Sk.builtin.int_.threshold$);
Sk.builtin.lng.MIN_INT$ = new Sk.builtin.lng(-Sk.builtin.int_.threshold$);

Sk.builtin.lng.prototype.cantBeInt = function () {
    return (this.longCompare(Sk.builtin.lng.MAX_INT$) > 0) || (this.longCompare(Sk.builtin.lng.MIN_INT$) < 0);
};

Sk.builtin.lng.fromInt$ = function (ival) {
    return new Sk.builtin.lng(ival);
};

// js string (not Sk.builtin.str) -> long. used to create longs in transformer, respects
// 0x, 0o, 0b, etc.
Sk.longFromStr = function (s, base) {
    // l/L are valid digits with base >= 22
    // Sk.asserts.assert(s.charAt(s.length - 1) !== "L" && s.charAt(s.length - 1) !== 'l', "L suffix should be removed before here");

    var parser = function (s, base) {
            if (base === 10) {
                return new Sk.builtin.biginteger(s);
            }
            return new Sk.builtin.biginteger(s, base);
        },
        biginteger = Sk.str2number(s, base, parser, function (x) {
            return x.negate();
        }, "long");

    return new Sk.builtin.lng(biginteger);
};
Sk.exportSymbol("Sk.longFromStr", Sk.longFromStr);

Sk.builtin.lng.prototype.toInt$ = function () {
    return this.biginteger.intValue();
};

Sk.builtin.lng.prototype.clone = function () {
    return new Sk.builtin.lng(this);
};

Sk.builtin.lng.prototype.conjugate = new Sk.builtin.func(function (self) {
    return self.clone();
});

Sk.builtin.lng.prototype.nb$add = function (other) {
    var thisAsFloat;

    if (other instanceof Sk.builtin.float_) {
        thisAsFloat = new Sk.builtin.float_(this.str$(10, true));
        return thisAsFloat.nb$add(other);
    }

    if (other instanceof Sk.builtin.int_) {
        //    Promote an int to long
        other = new Sk.builtin.lng(other.v);
    }

    if (other instanceof Sk.builtin.lng) {
        return new Sk.builtin.lng(this.biginteger.add(other.biginteger));
    }

    if (other instanceof Sk.builtin.biginteger) {
        return new Sk.builtin.lng(this.biginteger.add(other));
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/** @override */
Sk.builtin.lng.prototype.nb$reflected_add = function (other) {
    // Should not automatically call this.nb$add, as nb$add may have
    // been overridden by a subclass
    return Sk.builtin.lng.prototype.nb$add.call(this, other);
};

Sk.builtin.lng.prototype.nb$inplace_add = Sk.builtin.lng.prototype.nb$add;

Sk.builtin.lng.prototype.nb$subtract = function (other) {
    var thisAsFloat;

    if (other instanceof Sk.builtin.float_) {
        thisAsFloat = new Sk.builtin.float_(this.str$(10, true));
        return thisAsFloat.nb$subtract(other);
    }

    if (other instanceof Sk.builtin.int_) {
        //    Promote an int to long
        other = new Sk.builtin.lng(other.v);
    }

    if (other instanceof Sk.builtin.lng) {
        return new Sk.builtin.lng(this.biginteger.subtract(other.biginteger));
    }

    if (other instanceof Sk.builtin.biginteger) {
        return new Sk.builtin.lng(this.biginteger.subtract(other));
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/** @override */
Sk.builtin.lng.prototype.nb$reflected_subtract = function (other) {
    // Should not automatically call this.nb$add, as nb$add may have
    // been overridden by a subclass
    var negative_this = this.nb$negative();
    return Sk.builtin.lng.prototype.nb$add.call(negative_this, other);
};

Sk.builtin.lng.prototype.nb$inplace_subtract = Sk.builtin.lng.prototype.nb$subtract;

Sk.builtin.lng.prototype.nb$multiply = function (other) {
    var thisAsFloat;

    if (other instanceof Sk.builtin.float_) {
        thisAsFloat = new Sk.builtin.float_(this.str$(10, true));
        return thisAsFloat.nb$multiply(other);
    }

    if (other instanceof Sk.builtin.int_) {
        other = new Sk.builtin.lng(other.v);
    }

    if (other instanceof Sk.builtin.lng) {
        return new Sk.builtin.lng(this.biginteger.multiply(other.biginteger));
    }

    if (other instanceof Sk.builtin.biginteger) {
        return new Sk.builtin.lng(this.biginteger.multiply(other));
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/** @override */
Sk.builtin.lng.prototype.nb$reflected_multiply = function (other) {
    // Should not automatically call this.nb$multiply, as nb$multiply may have
    // been overridden by a subclass
    return Sk.builtin.lng.prototype.nb$multiply.call(this, other);
};

Sk.builtin.lng.prototype.nb$inplace_multiply = Sk.builtin.lng.prototype.nb$multiply;

Sk.builtin.lng.prototype.nb$divide = function (other) {
    var thisAsFloat, thisneg, otherneg, result;

    if (other instanceof Sk.builtin.float_) {
        thisAsFloat = new Sk.builtin.float_(this.str$(10, true));
        return thisAsFloat.nb$divide(other);
    }

    if (other instanceof Sk.builtin.int_) {
        //    Promote an int to long
        other = new Sk.builtin.lng(other.v);
    }

    //    Standard, long result mode

    if (other instanceof Sk.builtin.lng) {
        //    Special logic to round DOWN towards negative infinity for negative results
        thisneg = this.nb$isnegative();
        otherneg = other.nb$isnegative();
        if ((thisneg && !otherneg) || (otherneg && !thisneg)) {
            result = this.biginteger.divideAndRemainder(other.biginteger);
            //    If remainder is zero or positive, just return division result
            if (result[1].trueCompare(Sk.builtin.biginteger.ZERO) === 0) {
                //    No remainder, just return result
                return new Sk.builtin.lng(result[0]);
            }
            //    Reminder... subtract 1 from the result (like rounding to neg infinity)
            result = result[0].subtract(Sk.builtin.biginteger.ONE);
            return new Sk.builtin.lng(result);
        }
        return new Sk.builtin.lng(this.biginteger.divide(other.biginteger));
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.lng.prototype.nb$reflected_divide = function (other) {
    var thisneg, otherneg, result;

    if (other instanceof Sk.builtin.int_) {
        //  Promote an int to long
        other = new Sk.builtin.lng(other.v);
    }

    //    Standard, long result mode
    if (other instanceof Sk.builtin.lng) {
        return other.nb$divide(this);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.lng.prototype.nb$floor_divide = function (other) {
    var thisAsFloat;

    if (other instanceof Sk.builtin.float_) {
        thisAsFloat = new Sk.builtin.float_(this.str$(10, true));
        return thisAsFloat.nb$floor_divide(other);
    }

    if (other instanceof Sk.builtin.int_) {
        //  Promote an int to long
        other = new Sk.builtin.lng(other.v);
    }

    //    Standard, long result mode
    if (other instanceof Sk.builtin.lng) {
        return other.nb$divide(this);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.lng.prototype.nb$divmod = function (other) {
    if (other instanceof Sk.builtin.int_) {
        // Promote an int to long
        other = new Sk.builtin.lng(other.v);
    }

    if (other instanceof Sk.builtin.lng) {
        return new Sk.builtin.tuple([
            this.nb$floor_divide(other),
            this.nb$remainder(other)
        ]);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.lng.prototype.nb$reflected_divmod = function (other) {
    if (other instanceof Sk.builtin.int_) {
        // Promote an int to long
        other = new Sk.builtin.lng(other.v);
    }

    if (other instanceof Sk.builtin.lng) {
        return new Sk.builtin.tuple([
            other.nb$floor_divide(this),
            other.nb$remainder(this)
        ]);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.lng.prototype.nb$inplace_divide = Sk.builtin.lng.prototype.nb$divide;

Sk.builtin.lng.prototype.nb$floor_divide = Sk.builtin.lng.prototype.nb$divide;

Sk.builtin.lng.prototype.nb$reflected_floor_divide = Sk.builtin.lng.prototype.nb$reflected_divide;

Sk.builtin.lng.prototype.nb$inplace_floor_divide = Sk.builtin.lng.prototype.nb$floor_divide;

Sk.builtin.lng.prototype.nb$remainder = function (other) {
    var thisAsFloat, tmp;

    if (this.biginteger.trueCompare(Sk.builtin.biginteger.ZERO) === 0) {
        if (other instanceof Sk.builtin.float_) {
            return new Sk.builtin.float_(0);
        }
        return new Sk.builtin.lng(0);
    }

    if (other instanceof Sk.builtin.float_) {
        thisAsFloat = new Sk.builtin.float_(this.str$(10, true));
        return thisAsFloat.nb$remainder(other);
    }

    if (other instanceof Sk.builtin.int_) {
        //    Promote an int to long
        other = new Sk.builtin.lng(other.v);
    }

    if (other instanceof Sk.builtin.lng) {

        tmp = new Sk.builtin.lng(this.biginteger.remainder(other.biginteger));
        if (this.nb$isnegative()) {
            if (other.nb$ispositive() && tmp.nb$nonzero()) {
                tmp = tmp.nb$add(other).nb$remainder(other);
            }
        } else {
            if (other.nb$isnegative() && tmp.nb$nonzero()) {
                tmp = tmp.nb$add(other);
            }
        }
        return tmp;
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.lng.prototype.nb$reflected_remainder = function (other) {
    if (other instanceof Sk.builtin.int_) {
        other = new Sk.builtin.lng(other.v);
    }

    if (other instanceof Sk.builtin.lng) {
        return other.nb$remainder(this);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.lng.prototype.nb$inplace_remainder = Sk.builtin.lng.prototype.nb$remainder;

Sk.builtin.lng.prototype.nb$divmod = function (other) {
    var thisAsFloat;

    if (other === Sk.builtin.bool.true$) {
        other = new Sk.builtin.lng(1);
    }

    if (other === Sk.builtin.bool.false$) {
        other = new Sk.builtin.lng(0);
    }

    if (other instanceof Sk.builtin.int_) {
        other = new Sk.builtin.lng(other.v);
    }

    if (other instanceof Sk.builtin.lng) {
        return new Sk.builtin.tuple([
            this.nb$floor_divide(other),
            this.nb$remainder(other)
        ]);
    }

    if (other instanceof Sk.builtin.float_) {
        thisAsFloat = new Sk.builtin.float_(this.str$(10, true));
        return thisAsFloat.nb$divmod(other);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

/**
 * @param {number|Object} n
 * @param {number|Object=} mod
 * @suppress {checkTypes}
 */
Sk.builtin.lng.prototype.nb$power = function (n, mod) {
    var thisAsFloat;
    if (mod !== undefined) {
        n = new Sk.builtin.biginteger(Sk.builtin.asnum$(n));
        mod = new Sk.builtin.biginteger(Sk.builtin.asnum$(mod));

        return new Sk.builtin.lng(this.biginteger.modPowInt(n, mod));
    }

    if (n instanceof Sk.builtin.float_ ||
        (n instanceof Sk.builtin.int_ && n.v < 0)) {
        thisAsFloat = new Sk.builtin.float_(this.str$(10, true));
        return thisAsFloat.nb$power(n);
    }

    if (n instanceof Sk.builtin.int_) {
        //    Promote an int to long
        n = new Sk.builtin.lng(n.v);
    }

    if (n instanceof Sk.builtin.lng) {
        if (mod !== undefined) {
            n = new Sk.builtin.biginteger(Sk.builtin.asnum$(n));
            mod = new Sk.builtin.biginteger(Sk.builtin.asnum$(mod));

            return new Sk.builtin.lng(this.biginteger.modPowInt(n, mod));
        }

        if (n.nb$isnegative()) {
            thisAsFloat = new Sk.builtin.float_(this.str$(10, true));
            return thisAsFloat.nb$power(n);
        }
        return new Sk.builtin.lng(this.biginteger.pow(n.biginteger));
    }

    if (n instanceof Sk.builtin.biginteger) {
        if (mod !== undefined) {
            mod = new Sk.builtin.biginteger(Sk.builtin.asnum$(mod));

            return new Sk.builtin.lng(this.biginteger.modPowInt(n, mod));
        }

        if (n.isnegative()) {
            thisAsFloat = new Sk.builtin.float_(this.str$(10, true));
            return thisAsFloat.nb$power(n);
        }
        return new Sk.builtin.lng(this.biginteger.pow(n));
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.lng.prototype.nb$reflected_power = function (n, mod) {
    if (n instanceof Sk.builtin.int_) {
        // Promote an int to long
        n = new Sk.builtin.lng(n.v);
    }

    if (n instanceof Sk.builtin.lng) {
        return n.nb$power(this, mod);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.lng.prototype.nb$inplace_power = Sk.builtin.lng.prototype.nb$power;

/**
 * Compute the absolute value of this instance and return.
 *
 * Javascript function, returns Python object.
 *
 * @return {Sk.builtin.lng} The absolute value
 */
Sk.builtin.lng.prototype.nb$abs = function () {
    return new Sk.builtin.lng(this.biginteger.bnAbs());
};

Sk.builtin.lng.prototype.nb$lshift = function (other) {

    if (other instanceof Sk.builtin.int_) {
        //  Promote an int to long
        other = new Sk.builtin.lng(other.v);
    }

    if (other instanceof Sk.builtin.lng) {
        if (other.biginteger.signum() < 0) {
            throw new Sk.builtin.ValueError("negative shift count");
        }
        return new Sk.builtin.lng(this.biginteger.shiftLeft(other.biginteger));
    }
    if (other instanceof Sk.builtin.biginteger) {
        if (other.signum() < 0) {
            throw new Sk.builtin.ValueError("negative shift count");
        }
        return new Sk.builtin.lng(this.biginteger.shiftLeft(other));
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.lng.prototype.nb$reflected_lshift = function (other) {
    if (other instanceof Sk.builtin.int_) {
        // Promote an int to long
        other = new Sk.builtin.lng(other.v);
    }

    if (other instanceof Sk.builtin.lng) {
        return other.nb$lshift(this);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.lng.prototype.nb$inplace_lshift = Sk.builtin.lng.prototype.nb$lshift;

Sk.builtin.lng.prototype.nb$rshift = function (other) {
    if (other instanceof Sk.builtin.int_) {
        //  Promote an int to long
        other = new Sk.builtin.lng(other.v);
    }

    if (other instanceof Sk.builtin.lng) {
        if (other.biginteger.signum() < 0) {
            throw new Sk.builtin.ValueError("negative shift count");
        }
        return new Sk.builtin.lng(this.biginteger.shiftRight(other.biginteger));
    }
    if (other instanceof Sk.builtin.biginteger) {
        if (other.signum() < 0) {
            throw new Sk.builtin.ValueError("negative shift count");
        }
        return new Sk.builtin.lng(this.biginteger.shiftRight(other));
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.lng.prototype.nb$reflected_rshift = function (other) {
    if (other instanceof Sk.builtin.int_) {
        // Promote an int to long
        other = new Sk.builtin.lng(other.v);
    }

    if (other instanceof Sk.builtin.lng) {
        return other.nb$rshift(this);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.lng.prototype.nb$inplace_rshift = Sk.builtin.lng.prototype.nb$rshift;

Sk.builtin.lng.prototype.nb$and = function (other) {
    if (other instanceof Sk.builtin.int_) {
        //  Promote an int to long
        other = new Sk.builtin.lng(other.v);
    }

    if (other instanceof Sk.builtin.lng) {
        return new Sk.builtin.lng(this.biginteger.and(other.biginteger));
    }
    if (other instanceof Sk.builtin.biginteger) {
        return new Sk.builtin.lng(this.biginteger.and(other));
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.lng.prototype.nb$reflected_and = Sk.builtin.lng.prototype.nb$and;

Sk.builtin.lng.prototype.nb$inplace_and = Sk.builtin.lng.prototype.nb$and;

Sk.builtin.lng.prototype.nb$or = function (other) {
    if (other instanceof Sk.builtin.int_) {
        //  Promote an int to long
        other = new Sk.builtin.lng(other.v);
    }

    if (other instanceof Sk.builtin.lng) {
        return new Sk.builtin.lng(this.biginteger.or(other.biginteger));
    }
    if (other instanceof Sk.builtin.biginteger) {
        return new Sk.builtin.lng(this.biginteger.or(other));
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};


Sk.builtin.lng.prototype.nb$reflected_or = Sk.builtin.lng.prototype.nb$or;

Sk.builtin.lng.prototype.nb$inplace_or = Sk.builtin.lng.prototype.nb$or;

Sk.builtin.lng.prototype.nb$xor = function (other) {
    if (other instanceof Sk.builtin.int_) {
        //  Promote an int to long
        other = new Sk.builtin.lng(other.v);
    }

    if (other instanceof Sk.builtin.lng) {
        return new Sk.builtin.lng(this.biginteger.xor(other.biginteger));
    }
    if (other instanceof Sk.builtin.biginteger) {
        return new Sk.builtin.lng(this.biginteger.xor(other));
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

Sk.builtin.lng.prototype.nb$reflected_xor = Sk.builtin.lng.prototype.nb$xor;

Sk.builtin.lng.prototype.nb$inplace_xor = Sk.builtin.lng.prototype.nb$xor;

/**
 * @override
 *
 * @return {Sk.builtin.lng} A copy of this instance with the value negated.
 */
Sk.builtin.lng.prototype.nb$negative = function () {
    return new Sk.builtin.lng(this.biginteger.negate());
};

Sk.builtin.lng.prototype.nb$invert = function () {
    return new Sk.builtin.lng(this.biginteger.not());
};

Sk.builtin.lng.prototype.nb$positive = function () {
    return this.clone();
};

Sk.builtin.lng.prototype.nb$nonzero = function () {
    return this.biginteger.trueCompare(Sk.builtin.biginteger.ZERO) !== 0;
};

Sk.builtin.lng.prototype.nb$isnegative = function () {
    return this.biginteger.isnegative();
};

Sk.builtin.lng.prototype.nb$ispositive = function () {
    return !this.biginteger.isnegative();
};

Sk.builtin.lng.prototype.longCompare = function (other) {
    var otherAsLong, thisAsFloat;

    if (typeof other === "number") {
        other = new Sk.builtin.lng(other);
    }

    if (other instanceof Sk.builtin.int_ ||
        (other instanceof Sk.builtin.float_ && other.v % 1 === 0)) {
        otherAsLong = new Sk.builtin.lng(other.v);
        return this.longCompare(otherAsLong);
    }

    if (other instanceof Sk.builtin.float_) {
        thisAsFloat = new Sk.builtin.float_(this);
        return thisAsFloat.numberCompare(other);
    }

    if (other instanceof Sk.builtin.lng) {
        return this.biginteger.subtract(other.biginteger);
    } else if (other instanceof Sk.builtin.biginteger) {
        return this.biginteger.subtract(other);
    }

    return Sk.builtin.NotImplemented.NotImplemented$;
};

//tests fail if ===
Sk.builtin.lng.prototype.ob$eq = function (other) {
    if (other instanceof Sk.builtin.int_ || other instanceof Sk.builtin.lng ||
        other instanceof Sk.builtin.float_) {
        return new Sk.builtin.bool(this.longCompare(other) == 0); //jshint ignore:line
    } else if (other instanceof Sk.builtin.none) {
        return Sk.builtin.bool.false$;
    } else {
        return Sk.builtin.NotImplemented.NotImplemented$;
    }
};

Sk.builtin.lng.prototype.ob$ne = function (other) {
    if (other instanceof Sk.builtin.int_ || other instanceof Sk.builtin.lng ||
        other instanceof Sk.builtin.float_) {
        return new Sk.builtin.bool(this.longCompare(other) != 0); //jshint ignore:line
    } else if (other instanceof Sk.builtin.none) {
        return Sk.builtin.bool.true$;
    } else {
        return Sk.builtin.NotImplemented.NotImplemented$;
    }
};

Sk.builtin.lng.prototype.ob$lt = function (other) {
    if (other instanceof Sk.builtin.int_ || other instanceof Sk.builtin.lng ||
        other instanceof Sk.builtin.float_) {
        return new Sk.builtin.bool(this.longCompare(other) < 0);
    } else {
        return Sk.builtin.NotImplemented.NotImplemented$;
    }
};

Sk.builtin.lng.prototype.ob$le = function (other) {
    if (other instanceof Sk.builtin.int_ || other instanceof Sk.builtin.lng ||
        other instanceof Sk.builtin.float_) {
        return new Sk.builtin.bool(this.longCompare(other) <= 0);
    } else {
        return Sk.builtin.NotImplemented.NotImplemented$;
    }
};

Sk.builtin.lng.prototype.ob$gt = function (other) {
    if (other instanceof Sk.builtin.int_ || other instanceof Sk.builtin.lng ||
        other instanceof Sk.builtin.float_) {
        return new Sk.builtin.bool(this.longCompare(other) > 0);
    } else {
        return Sk.builtin.NotImplemented.NotImplemented$;
    }
};

Sk.builtin.lng.prototype.ob$ge = function (other) {
    if (other instanceof Sk.builtin.int_ || other instanceof Sk.builtin.lng ||
        other instanceof Sk.builtin.float_) {
        return new Sk.builtin.bool(this.longCompare(other) >= 0);
    } else {
        return Sk.builtin.NotImplemented.NotImplemented$;
    }
};

Sk.builtin.lng.prototype.$r = function () {
    return new Sk.builtin.str(this.str$(10, true) + "L");
};

Sk.builtin.lng.prototype.tp$str = function () {
    return new Sk.builtin.str(this.str$(10, true));
};

Sk.builtin.lng.prototype.str$ = function (base, sign) {
    var work;
    if (sign === undefined) {
        sign = true;
    }

    work = sign ? this.biginteger : this.biginteger.abs();

    if (base === undefined || base === 10) {
        return work.toString();
    }

    //    Another base... convert...
    return work.toString(base);
};
/**
 * hypot is a ESCMA6 function and maybe not available across all browsers
 */
Math.hypot = Math.hypot || function() {
    var y = 0;
    var length = arguments.length;

    for (var i = 0; i < length; i++) {
        if (arguments[i] === Infinity || arguments[i] === -Infinity) {
            return Infinity;
        }
        y += arguments[i] * arguments[i];
    }
    return Math.sqrt(y);
};

/**
 * complex_new see https://hg.python.org/cpython/file/f0e2caad4200/Objects/complexobject.c#l911
 * @constructor
 * @param {Object} real part of the complex number
 * @param {?Object=} imag part of the complex number
 * @this {Sk.builtin.object}
 *
 * Prefering here == instead of ===, otherwise also undefined has to be matched explicitly
 *
 * FIXME: it seems that we somehow need to call __float__/__int__ if arguments provide those methods
 *
 */
Sk.builtin.complex = function (real, imag) {
    Sk.builtin.pyCheckArgsLen("complex", arguments.length, 0, 2);

    var r, i, tmp; // PyObject
    var nbr, nbi; // real, imag as numbers
    var own_r = false;
    var cr = {}; // PyComplexObject
    var ci = {}; // PyComplexObject
    var cr_is_complex = false;
    var ci_is_complex = false;

    // not sure why this is required
    if (!(this instanceof Sk.builtin.complex)) {
        return new Sk.builtin.complex(real, imag);
    }


    // check if kwargs
    // ToDo: this is only a temporary replacement
    r = real == null ? Sk.builtin.bool.false$ : real; // r = Py_False;
    i = imag;

    // handle case if passed in arguments are of type complex
    if (r instanceof Sk.builtin.complex && i == null) {
        return real;
    }

    if (r != null && Sk.builtin.checkString(r)) {
        if(i != null) {
            throw new Sk.builtin.TypeError("complex() can't take second arg if first is a string");
        }

        return Sk.builtin.complex.complex_subtype_from_string(r);
    }

    if (i != null && Sk.builtin.checkString(i)) {
        throw new Sk.builtin.TypeError("complex() second arg can't be a string");
    }


    // try_complex_special_method
    tmp = Sk.builtin.complex.try_complex_special_method(r);
    if (tmp != null && tmp !== Sk.builtin.NotImplemented.NotImplemented$) {
        if (!Sk.builtin.checkComplex(tmp)) {
            throw new Sk.builtin.TypeError("__complex__ should return a complex object");
        }

        r = tmp;
    }

    // this check either returns a javascript number or the passed object
    // but it actually, should check for r->ob_type->tp_as_number
    // this check is useless
    nbr = Sk.builtin.asnum$(r);
    if (i != null) {
        nbi = Sk.builtin.asnum$(i);
    }

    // this function mimics the tp_as_number->nb_float check in cpython
    var nb_float = function(op) {
        if(Sk.builtin.checkNumber(op)) {
            return true;
        }

        if(Sk.builtin.type.typeLookup(op.ob$type, Sk.builtin.str.$float_) !== undefined) {
            return true;
        }
    };

    // check for valid arguments
    if (nbr == null || (!nb_float(r) && !Sk.builtin.checkComplex(r)) || ((i != null) && (nbi == null || (!nb_float(i) && !Sk.builtin.checkComplex(i))))) {
        throw new Sk.builtin.TypeError("complex() argument must be a string or number");
    }

    /* If we get this far, then the "real" and "imag" parts should
       both be treated as numbers, and the constructor should return a
       complex number equal to (real + imag*1j).

       Note that we do NOT assume the input to already be in canonical
       form; the "real" and "imag" parts might themselves be complex
       numbers, which slightly complicates the code below. */

    if (Sk.builtin.complex._complex_check(r)) {
        /* Note that if r is of a complex subtype, we're only
        retaining its real & imag parts here, and the return
        value is (properly) of the builtin complex type. */
        cr.real = r.real.v;
        cr.imag = r.imag.v;
        cr_is_complex = true;
    } else {
        /* The "real" part really is entirely real, and contributes
        nothing in the imaginary direction.
        Just treat it as a double. */
        tmp = Sk.builtin.float_.PyFloat_AsDouble(r); // tmp = PyNumber_Float(r);

        if (tmp == null) {
            return null;
        }

        cr.real = tmp;
        cr.imag = 0.0;
    }

    if (i == null) {
        ci.real = 0.0;
    } else if (Sk.builtin.complex._complex_check(i)) {
        ci.real = i.real.v;
        ci.imag = i.imag.v;
        ci_is_complex = true;
    } else {
        /* The "imag" part really is entirely imaginary, and
        contributes nothing in the real direction.
        Just treat it as a double. */
        tmp = Sk.builtin.float_.PyFloat_AsDouble(i);

        if (tmp == null) {
            return null;
        }

        ci.real = tmp;
        ci.imag = 0.0;
    }

    /*  If the input was in canonical form, then the "real" and "imag"
    parts are real numbers, so that ci.imag and cr.imag are zero.
    We need this correction in case they were not real numbers. */

    if (ci_is_complex === true) {
        cr.real -= ci.imag;
    }

    if (cr_is_complex === true) {
        ci.real += cr.imag;
    }

    // adjust for negated imaginary literal
    if (cr.real === 0 && (ci.real < 0 || Sk.builtin.complex._isNegativeZero(ci.real))) {
        cr.real = -0;
    }

    // save them as properties
    this.real = new Sk.builtin.float_(cr.real);
    this.imag = new Sk.builtin.float_(ci.real);

    return this;
};

Sk.abstr.setUpInheritance("complex", Sk.builtin.complex, Sk.builtin.numtype);
//Sk.builtin.complex.co_kwargs = true;

Sk.builtin.complex.prototype.__class__ = Sk.builtin.complex;

Sk.builtin.complex.prototype.nb$int_ = function () {
    throw new Sk.builtin.TypeError("can't convert complex to int");
};

Sk.builtin.complex.prototype.nb$float_ = function() {
    throw new Sk.builtin.TypeError("can't convert complex to float");
};

Sk.builtin.complex.prototype.nb$lng = function () {
    throw new Sk.builtin.TypeError("can't convert complex to long");
};

Sk.builtin.complex.prototype.__doc__ = new Sk.builtin.str("complex(real[, imag]) -> complex number\n\nCreate a complex number from a real part and an optional imaginary part.\nThis is equivalent to (real + imag*1j) where imag defaults to 0.");

Sk.builtin.complex._isNegativeZero = function (val) {
    if (val !== 0) {
        return false;
    }

    return 1/val === -Infinity;
};

/**
 * Internal method to check if op has __complex__
 */
Sk.builtin.complex.try_complex_special_method = function (op) {
    var f; // PyObject
    var res;

    // return early
    if (op == null) {
        return null;
    }

    // the lookup special method does already all the magic
    f = Sk.abstr.lookupSpecial(op, Sk.builtin.str.$complex);

    if (f != null) {
        // method on builtin, provide this arg
        res = Sk.misceval.callsimArray(f, [op]);

        return res;
    }

    return null;
};

/**
    Check if given argument is number or complex and always
    returns complex type.
 */
Sk.builtin.complex.check_number_or_complex = function (other) {
    /* exit early */
    if (!Sk.builtin.checkNumber(other) && other.tp$name !== "complex") {
        throw new Sk.builtin.TypeError("unsupported operand type(s) for +: 'complex' and '" + Sk.abstr.typeName(other) + "'");
    }

    /* converting to complex allows us to use always only one formula */
    if (Sk.builtin.checkNumber(other)) {
        other = new Sk.builtin.complex(other); // create complex
    }

    return other;
};

/**
    Parses a string repr of a complex number
 */
Sk.builtin.complex.complex_subtype_from_string = function (val) {
    var index;
    var start;
    var val_wws;              // val with removed beginning ws and (
    var x = 0.0, y = 0.0;     // real, imag parts
    var got_bracket = false;  // flag for braces
    var len;                  // total length of val
    var match;                // regex result

    // first check if val is javascript string or python string
    if (Sk.builtin.checkString(val)) {
        val = Sk.ffi.remapToJs(val);
    } else if (typeof val !== "string") {
        throw new TypeError("provided unsupported string-alike argument");
    }

    /* This is an python specific error, this does not do any harm in js, but we want
     * to be as close to the orginial impl. as possible.
     *
     * Check also for empty strings. They are not allowed.
     */
    if (val.indexOf("\0") !== -1 || val.length === 0 || val === "") {
        throw new Sk.builtin.ValueError("complex() arg is a malformed string");
    }

    // transform to unicode
    // ToDo: do we need this?
    index = 0; // first char

    // do some replacements for javascript floats
    val = val.replace(/inf|infinity/gi, "Infinity");
    val = val.replace(/nan/gi, "NaN");

    /* position on first nonblank */
    start = 0;
    while (val[index] === " ") {
        index++;
    }

    if (val[index] === "(") {
        /* skip over possible bracket from repr(). */
        got_bracket = true;
        index++;
        while (val[index] === " ") {
            index++;
        }
    }

    /* a valid complex string usually takes one of the three forms:

        <float>                - real part only
        <float>j               - imaginary part only
        <float><signed-float>j - real and imaginary parts

        where <float> represents any numeric string that's accepted by the
        float constructor (including 'nan', 'inf', 'infinity', etc.), and
        <signed-float> is any string of the form <float> whose first character
        is '+' or '-'.

        For backwards compatibility, the extra forms

          <float><sign>j
          <sign>j
          j

        are also accepted, though support for these forms my be removed from
        a future version of Python.
     *      This is a complete regular expression for matching any valid python floats, e.g.:
     *          - 1.0
     *          - 0.
     *          - .1
     *          - nan/inf/infinity
     *          - +-1.0
     *          - +3.E-3
     *
     *      In order to work, this pattern requires only lower case characters
     *      There is case insensitive group option in js.
     *
     *      the [eE] could be refactored to soley e
     */
    var float_regex2 = /^(?:[+-]?(?:(?:(?:\d*\.\d+)|(?:\d+\.?))(?:[eE][+-]?\d+)?|NaN|Infinity))/;
    val_wws = val.substr(index); // val with removed whitespace and "("

    /* first try to match a float at the beginning */
    match = val_wws.match(float_regex2);
    if (match !== null) {
        // one of the first 4 cases
        index += match[0].length;

        /* <float>j */
        if (val[index] === "j" || val[index] === "J") {
            y = parseFloat(match[0]);
            index++;
        } else if(val[index] === "+" || val[index] === "-") {
            /* <float><signed-float>j | <float><sign>j */
            x = parseFloat(match[0]);

            match = val.substr(index).match(float_regex2);
            if (match !== null) {
                /* <float><signed-float>j */
                y = parseFloat(match[0]);
                index += match[0].length;
            } else {
                /* <float><sign>j */
                y = val[index] === "+" ? 1.0 : -1.0;
                index++;
            }

            if (val[index] !== "j" && val[index] !== "J") {
                throw new Sk.builtin.ValueError("complex() arg is malformed string");
            }

            index++;
        } else {
            /* <float> */
            x = parseFloat(match[0]);
        }
    } else {
        // maybe <sign>j or j
        match = match = val_wws.match(/^([+-]?[jJ])/);
        if (match !== null) {
            if (match[0].length === 1) {
                y = 1.0; // must be j
            } else {
                y = match[0][0] === "+" ? 1.0 : -1.0;
            }

            index += match[0].length;
        }
    }

    while (val[index] === " ") {
        index++;
    }

    if (got_bracket) {
        /* if there was an opening parenthesis, then the corresponding
           closing parenthesis should be right here */
        if (val[index] !== ")") {
            throw new Sk.builtin.ValueError("complex() arg is malformed string");
        }

        index++;

        while (val[index] === " ") {
            index++;
        }
    }

    /* we should now be at the end of the string */
    if (val.length !== index) {
        throw new Sk.builtin.ValueError("complex() arg is malformed string");
    }

    // return here complex number parts
    return new Sk.builtin.complex(new Sk.builtin.float_(x), new Sk.builtin.float_(y));
};

/**
    _PyHASH_IMAG refers to _PyHASH_MULTIPLIER which refers to 1000003
 */
Sk.builtin.complex.prototype.tp$hash = function () {
    return new Sk.builtin.int_(this.tp$getattr(Sk.builtin.str.$imag).v * 1000003 + this.tp$getattr(Sk.builtin.str.$real).v);
};

Sk.builtin.complex.prototype.nb$add = function (other) {
    var real;
    var imag;

    other = Sk.builtin.complex.check_number_or_complex(other);

    real = this.tp$getattr(Sk.builtin.str.$real).v + other.tp$getattr(Sk.builtin.str.$real).v;
    imag = this.tp$getattr(Sk.builtin.str.$imag).v + other.tp$getattr(Sk.builtin.str.$imag).v;

    return new Sk.builtin.complex(new Sk.builtin.float_(real), new Sk.builtin.float_(imag));
};

/* internal subtract/diff function that calls internal float diff */
Sk.builtin.complex._c_diff = function (a, b) {
    var r, i; // Py_Float
    r = a.real.nb$subtract.call(a.real, b.real);
    i = a.imag.nb$subtract.call(a.imag, b.imag);

    return new Sk.builtin.complex(r, i);
};

Sk.builtin.complex.prototype.nb$subtract = function (other) {
    var result; // Py_complex
    var a, b; // Py_complex

    a = Sk.builtin.complex.check_number_or_complex(this);
    b = Sk.builtin.complex.check_number_or_complex(other);

    result = Sk.builtin.complex._c_diff(a, b);

    return result;
};

Sk.builtin.complex.prototype.nb$multiply = function (other) {
    var real;
    var imag;
    var a, b; // Py_complex

    a = this;
    b = Sk.builtin.complex.check_number_or_complex(other);

    real = a.real.v * b.real.v - a.imag.v * b.imag.v;
    imag = a.real.v * b.imag.v + a.imag.v * b.real.v;

    return new Sk.builtin.complex(new Sk.builtin.float_(real), new Sk.builtin.float_(imag));
};

/**
 * Otherwise google closure complains about ZeroDivisionError not being
 * defined
 * @suppress {missingProperties}
 *
 * implementation based on complexobject.c:c_quot
 */
Sk.builtin.complex.prototype.nb$divide = function (other) {
    var real;
    var imag;

    other = Sk.builtin.complex.check_number_or_complex(other);

    var ratio;
    var denom;

    // other == b
    var breal = other.real.v;
    var bimag = other.imag.v;
    // this == a
    var areal = this.real.v;
    var aimag = this.imag.v;

    var abs_breal = Math.abs(breal);
    var abs_bimag = Math.abs(bimag);

    if (abs_breal >= abs_bimag) {
        // divide tops and bottom by breal
        if (abs_breal === 0.0) {
            throw new Sk.builtin.ZeroDivisionError("complex division by zero");
        } else {
            ratio = bimag / breal;
            denom = breal + bimag * ratio;
            real = (areal + aimag * ratio) / denom;
            imag = (aimag - areal * ratio) / denom;
        }
    } else if (abs_bimag >= abs_breal) {
        // divide tops and bottom by b.imag
        ratio = breal / bimag;
        denom = breal * ratio + bimag;
        Sk.asserts.assert(bimag !== 0.0);
        real = (areal * ratio + aimag) / denom;
        imag = (aimag * ratio - areal) / denom;
    } else {
        // At least one of b.real or b.imag is a NaN
        real = NaN;
        imag = NaN;
    }

    return new Sk.builtin.complex(new Sk.builtin.float_(real), new Sk.builtin.float_(imag));
};

Sk.builtin.complex.prototype.nb$floor_divide = function (other) {
    throw new Sk.builtin.TypeError("can't take floor of complex number.");
};

Sk.builtin.complex.prototype.nb$remainder = function (other) {
    throw new Sk.builtin.TypeError("can't mod complex numbers.");
};

/**
 * @param {?Object=} z, modulo operation
 */
Sk.builtin.complex.prototype.nb$power = function (other, z) {
    var p;
    var exponent;
    var int_exponent;
    var a, b;

    // none is allowed
    if (z != null && !Sk.builtin.checkNone(z)) {
        throw new Sk.builtin.ValueError("complex modulo");
    }

    a = this;
    b = Sk.builtin.complex.check_number_or_complex(other);

    exponent = b;
    int_exponent = b.real.v | 0; // js convert to int
    if (exponent.imag.v === 0.0 && exponent.real.v === int_exponent) {
        p = Sk.builtin.complex.c_powi(a, int_exponent);
    } else {
        p = Sk.builtin.complex.c_pow(a, exponent);
    }

    return p;
};

// power of complex a and complex exponent b
Sk.builtin.complex.c_pow = function (a, b) {
    var real, imag; // Py_complex

    var vabs;
    var len;
    var at;
    var phase;

    // other == b
    var breal = b.real.v;
    var bimag = b.imag.v;
    // this == a
    var areal = a.real.v;
    var aimag = a.imag.v;

    if (breal === 0.0 && bimag === 0.0) {
        real = 1.0;
        imag = 0.0;
    } else if (areal === 0.0 && aimag === 0.0) {
        if(bimag !== 0.0 || breal < 0.0) {
            throw new Sk.builtin.ZeroDivisionError("complex division by zero");
        }

        real = 0.0;
        imag = 0.0;
    } else {
        vabs = Math.hypot(areal, aimag);
        len = Math.pow(vabs, breal);
        at = Math.atan2(aimag, areal);
        phase = at * breal;

        if(bimag !== 0.0) {
            len /= Math.exp(at * bimag);
            phase += bimag * Math.log(vabs);
        }

        real = len * Math.cos(phase);
        imag = len * Math.sin(phase);
    }

    return new Sk.builtin.complex(new Sk.builtin.float_(real), new Sk.builtin.float_(imag));
};

// power of complex x and integer exponent n
Sk.builtin.complex.c_powi = function (x, n) {
    var cn; // Py_complex
    var c1;

    if (n > 100 || n < -100) {
        cn = new Sk.builtin.complex(new Sk.builtin.float_(n), new Sk.builtin.float_(0.0));
        return Sk.builtin.complex.c_pow(x, cn);
    } else if (n > 0) {
        return Sk.builtin.complex.c_powu(x, n);
    } else {
        //  return c_quot(c_1,c_powu(x,-n));
        c1 = new Sk.builtin.complex(new Sk.builtin.float_(1.0), new Sk.builtin.float_(0.0));
        return c1.nb$divide(Sk.builtin.complex.c_powu(x,-n));
    }
};

Sk.builtin.complex.c_powu = function (x, n) {
    var r, p; // Py_complex
    var mask = 1;
    r = new Sk.builtin.complex(new Sk.builtin.float_(1.0), new Sk.builtin.float_(0.0));
    p = x;

    while (mask > 0 && n >= mask) {
        if (n & mask) {
            r = r.nb$multiply(p);
        }

        mask <<= 1;
        p = p.nb$multiply(p);
    }

    return r;
};


Sk.builtin.complex.prototype.nb$inplace_add = Sk.builtin.complex.prototype.nb$add;

Sk.builtin.complex.prototype.nb$inplace_subtract = Sk.builtin.complex.prototype.nb$subtract;

Sk.builtin.complex.prototype.nb$inplace_multiply = Sk.builtin.complex.prototype.nb$multiply;

Sk.builtin.complex.prototype.nb$inplace_divide = Sk.builtin.complex.prototype.nb$divide;

Sk.builtin.complex.prototype.nb$inplace_remainder = Sk.builtin.complex.prototype.nb$remainder;

Sk.builtin.complex.prototype.nb$inplace_floor_divide = Sk.builtin.complex.prototype.nb$floor_divide;

Sk.builtin.complex.prototype.nb$inplace_power = Sk.builtin.complex.prototype.nb$power;

Sk.builtin.complex.prototype.nb$negative = function () {
    var real;
    var imag;
    // this == a
    var areal = this.real.v;
    var aimag = this.imag.v;

    real = -areal;
    imag = -aimag;

    return new Sk.builtin.complex(new Sk.builtin.float_(real), new Sk.builtin.float_(imag));
};

Sk.builtin.complex.prototype.nb$positive = function () {
    return Sk.builtin.complex.check_number_or_complex(this);
};

/**
 *  check if op is instance of complex or a sub-type
 */
Sk.builtin.complex._complex_check = function (op) {
    if (op === undefined) {
        return false;
    }

    if (op instanceof Sk.builtin.complex || (op.tp$name && op.tp$name === "complex")) {
        return true;
    }

    // check if type of ob is a subclass
    if (Sk.builtin.issubclass(new Sk.builtin.type(op), Sk.builtin.complex)) {
        return true;
    }

    return false;
};

Sk.builtin.complex.prototype.tp$richcompare = function (w, op) {
    var result;
    var equal;
    var i;

    if (op !== "Eq" && op !== "NotEq") {
        if(Sk.builtin.checkNumber(w) || Sk.builtin.complex._complex_check(w)) {
            throw new Sk.builtin.TypeError("no ordering relation is defined for complex numbers");
        }

        return Sk.builtin.NotImplemented.NotImplemented$;
    }

    // assert(PyComplex_Check(v)));
    i = Sk.builtin.complex.check_number_or_complex(this);
    var _real = i.tp$getattr(Sk.builtin.str.$real).v;
    var _imag = i.tp$getattr(Sk.builtin.str.$imag).v;

    if (Sk.builtin.checkInt(w)) {
        /* Check for 0.0 imaginary part first to avoid the rich
         * comparison when possible.
         */

        // if true, the complex number has just a real part
        if (_imag === 0.0) {
            equal = Sk.misceval.richCompareBool(new Sk.builtin.float_(_real), w, op);
            result = new Sk.builtin.bool(equal);
            return result;
        } else {
            equal = false;
        }
    } else if (Sk.builtin.checkFloat(w)) {
        equal = (_real === Sk.builtin.float_.PyFloat_AsDouble(w) && _imag === 0.0);
    } else if (Sk.builtin.complex._complex_check(w)) {
        // ToDo: figure if we need to call to_complex
        var w_real = w.tp$getattr(Sk.builtin.str.$real).v;
        var w_imag = w.tp$getattr(Sk.builtin.str.$imag).v;
        equal = _real === w_real && _imag === w_imag;
    } else {
        return Sk.builtin.NotImplemented.NotImplemented$;
    }

    // invert result if op == NotEq
    if(op === "NotEq") {
        equal = !equal;
    }

    // wrap as bool
    result = new Sk.builtin.bool(equal);

    return result;
};

// Despite what jshint may want us to do, these two  functions need to remain
// as == and !=  Unless you modify the logic of numberCompare do not change
// these.
Sk.builtin.complex.prototype.__eq__ = function (me, other) {
    return Sk.builtin.complex.prototype.tp$richcompare.call(me, other, "Eq");
};

Sk.builtin.complex.prototype.__ne__ = function (me, other) {
    return Sk.builtin.complex.prototype.tp$richcompare.call(me, other, "NotEq");
};

/**
 * Do we really need to implement those? Otherwise I can't find in Sk.abstr a place where this particular
 * expcetion is thrown.git co
 */
Sk.builtin.complex.prototype.__lt__ = function (me, other) {
    throw new Sk.builtin.TypeError("unorderable types: " + Sk.abstr.typeName(me) + " < " + Sk.abstr.typeName(other));
};

Sk.builtin.complex.prototype.__le__ = function (me, other) {
    throw new Sk.builtin.TypeError("unorderable types: " + Sk.abstr.typeName(me) + " <= " + Sk.abstr.typeName(other));
};

Sk.builtin.complex.prototype.__gt__ = function (me, other) {
    throw new Sk.builtin.TypeError("unorderable types: " + Sk.abstr.typeName(me) + " > " + Sk.abstr.typeName(other));
};

Sk.builtin.complex.prototype.__ge__ = function (me, other) {
    throw new Sk.builtin.TypeError("unorderable types: " + Sk.abstr.typeName(me) + " >= " + Sk.abstr.typeName(other));
};

Sk.builtin.complex.prototype.__float__ = function (self) {
    throw new Sk.builtin.TypeError("can't convert complex to float");
};

Sk.builtin.complex.prototype.__int__ = function (self) {
    throw new Sk.builtin.TypeError("can't convert complex to int");
};


Sk.builtin.complex.prototype._internalGenericGetAttr = Sk.builtin.object.prototype.GenericGetAttr;

/**
 * Custom getattr impl. to get the c.real and c.imag to work. Though we should
 * consider to implement tp$members that always are attributs on the class and
 * will be used in the genericgetattr method.
 * Would be super easy to implement the readonly stuff too.
 *
 */
Sk.builtin.complex.prototype.tp$getattr = function (name) {
    if (name != null && (Sk.builtin.checkString(name) || typeof name === "string")) {
        var _name = name;

        // get javascript string
        if (Sk.builtin.checkString(name)) {
            _name = Sk.ffi.remapToJs(name);
        }

        if (_name === "real" || _name === "imag") {
            return this[_name];
        }
    }

    // if we have not returned yet, try the genericgetattr
    return this._internalGenericGetAttr(name);
};


Sk.builtin.complex.prototype.tp$setattr = function (name, value) {
    if (name != null && (Sk.builtin.checkString(name) || typeof name === "string")) {
        var _name = name;

        // get javascript string
        if (Sk.builtin.checkString(name)) {
            _name = Sk.ffi.remapToJs(name);
        }

        if (_name === "real" || _name === "imag") {
            throw new Sk.builtin.AttributeError("readonly attribute");
        }
    }

    // builtin: --> all is readonly (I am not happy with this)
    throw new Sk.builtin.AttributeError("'complex' object attribute '" + name + "' is readonly");
};

/**
 * Internal format function for repr and str
 * It is not intended for __format__ calls
 *
 * This functions assumes, that v is always instance of Sk.builtin.complex
 */
Sk.builtin.complex.complex_format = function (v, precision, format_code){
    function copysign (a, b) {
        return b < 0 ? -Math.abs(a) : Math.abs(a);
    }

    if (v == null || !Sk.builtin.complex._complex_check(v)) {
        throw new Error("Invalid internal method call: Sk.complex.complex_format() called with invalid value type.");
    }

    var result; // PyObject

    var pre = "";
    var im = "";
    var re = null;
    var lead = "";
    var tail = "";

    if (v.real.v === 0.0 && copysign(1.0, v.real.v) == 1.0) {
        re = "";
        im = Sk.builtin.complex.PyOS_double_to_string(v.imag.v, format_code, precision, 0, null);
        // im = v.imag.v;
    } else {
        /* Format imaginary part with sign, real part without */
        pre = Sk.builtin.complex.PyOS_double_to_string(v.real.v, format_code, precision, 0, null);
        re = pre;

        im = Sk.builtin.complex.PyOS_double_to_string(v.imag.v, format_code, precision, Sk.builtin.complex.PyOS_double_to_string.Py_DTSF_SIGN, null);

        if (v.imag.v === 0 && 1/v.imag.v === -Infinity && im && im[0] !== "-"){
            im = "-" + im; // force negative zero sign
        }

        lead = "(";
        tail = ")";
    }

    result = "" + lead + re + im + "j" + tail; // concat all parts

    return new Sk.builtin.str(result);
};

Sk.builtin.complex.prototype["$r"] = function () {
    return Sk.builtin.complex.complex_format(this, 0, "r");
};

Sk.builtin.complex.prototype.tp$str = function () {
    return Sk.builtin.complex.complex_format(this, null, "g"); // g, 12 == Py_Float_STR_PRECISION
};

/**
 * https://hg.python.org/cpython/file/3cf2990d19ab/Objects/complexobject.c#l907
 * also see _PyComplex_FormatAdvanced
 *
 * We currently use the signature (self, format_spec) instead of (self, args). So we do
 * not need to unwrap the args.
 */
Sk.builtin.complex.prototype.int$format = function __format__(self, format_spec){
    var result; // PyObject

    if (format_spec == null) {
        return null;
    }

    if (Sk.builtin.checkString(format_spec)) {
        result = Sk.builtin.complex._PyComplex_FormatAdvanced(self, format_spec);

        return result;
    }


    throw new Sk.builtin.TypeError("__format__ requires str or unicode");
};
Sk.builtin.complex.prototype.int$format.co_name = new Sk.builtin.str("__format__");
Sk.builtin.complex.prototype.__format__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$format);

Sk.builtin.complex._PyComplex_FormatAdvanced = function(self, format_spec) {
    throw new Sk.builtin.NotImplementedError("__format__ is not implemented for complex type.");
};

/**
    Return true if float or double are is neither infinite nor NAN, else false
    Value is already a Javascript object
 */
Sk.builtin.complex._is_finite = function (val) {
    return !isNaN(val) && val !== Infinity && val !== -Infinity;
};

Sk.builtin.complex._is_infinity = function (val) {
    return val === Infinity || val === -Infinity;
};

/**
 * @suppress {missingProperties}
 */
Sk.builtin.complex.prototype.int$abs = function __abs__(self) {
    var result;
    var _real = self.real.v;
    var _imag = self.imag.v;

    if (!Sk.builtin.complex._is_finite(_real) || !Sk.builtin.complex._is_finite(_imag)) {
        /* C99 rules: if either the real or the imaginary part is an
           infinity, return infinity, even if the other part is a
           NaN.
        */

        if (Sk.builtin.complex._is_infinity(_real)) {
            result = Math.abs(_real);
            return new Sk.builtin.float_(result);
        }

        if (Sk.builtin.complex._is_infinity(_imag)) {
            result = Math.abs(_imag);
            return new Sk.builtin.float_(result);
        }

        /* either the real or imaginary part is a NaN,
           and neither is infinite. Result should be NaN. */

        return new Sk.builtin.float_(NaN);
    }

    result = Math.hypot(_real, _imag);

    if (!Sk.builtin.complex._is_finite(result)) {
        throw new Sk.builtin.OverflowError("absolute value too large");
    }

    return new Sk.builtin.float_(result);
};
Sk.builtin.complex.prototype.int$abs.co_name = new Sk.builtin.str("__abs__");
Sk.builtin.complex.prototype.__abs__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$abs);

Sk.builtin.complex.prototype.int$bool = function __bool__(self) {
    return new Sk.builtin.bool(self.tp$getattr(Sk.builtin.str.$real).v || self.tp$getattr(Sk.builtin.str.$real).v);
};
Sk.builtin.complex.prototype.int$bool.co_name = new Sk.builtin.str("__bool__");
Sk.builtin.complex.prototype.__bool__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$bool);

Sk.builtin.complex.prototype.int$truediv = function __truediv__(self, other){
    Sk.builtin.pyCheckArgsLen("__truediv__", arguments.length, 1, 1, true);
    return self.nb$divide.call(self, other);
};
Sk.builtin.complex.prototype.int$truediv.co_name = new Sk.builtin.str("__truediv__");
Sk.builtin.complex.prototype.__truediv__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$truediv);

Sk.builtin.complex.prototype.int$hash = function __hash__(self){
    Sk.builtin.pyCheckArgsLen("__hash__", arguments.length, 0, 0, true);

    return self.tp$hash.call(self);
};
Sk.builtin.complex.prototype.int$hash.co_name = new Sk.builtin.str("__hash__");
Sk.builtin.complex.prototype.__hash__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$hash);

Sk.builtin.complex.prototype.int$add = function __add__(self, other){
    Sk.builtin.pyCheckArgsLen("__add__", arguments.length, 1, 1, true);
    return self.nb$add.call(self, other);
};
Sk.builtin.complex.prototype.int$add.co_name = new Sk.builtin.str("__add__");
Sk.builtin.complex.prototype.__add__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$add);


Sk.builtin.complex.prototype.int$repr = function __repr__(self){
    Sk.builtin.pyCheckArgsLen("__repr__", arguments.length, 0, 0, true);

    return self["r$"].call(self);
};
Sk.builtin.complex.prototype.int$repr.co_name = new Sk.builtin.str("__repr__");
Sk.builtin.complex.prototype.__repr__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$repr);

Sk.builtin.complex.prototype.int$str = function __str__(self){
    Sk.builtin.pyCheckArgsLen("__str__", arguments.length, 0, 0, true);

    return self.tp$str.call(self);
};
Sk.builtin.complex.prototype.int$str.co_name = new Sk.builtin.str("__str__");
Sk.builtin.complex.prototype.__str__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$str);

Sk.builtin.complex.prototype.int$sub = function __sub__(self, other){
    Sk.builtin.pyCheckArgsLen("__sub__", arguments.length, 1, 1, true);
    return self.nb$subtract.call(self, other);
};
Sk.builtin.complex.prototype.int$sub.co_name = new Sk.builtin.str("__sub__");
Sk.builtin.complex.prototype.__sub__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$sub);

Sk.builtin.complex.prototype.int$mul = function __mul__(self, other){
    Sk.builtin.pyCheckArgsLen("__mul__", arguments.length, 1, 1, true);
    return self.nb$multiply.call(self, other);
};
Sk.builtin.complex.prototype.int$mul.co_name = new Sk.builtin.str("__mul__");
Sk.builtin.complex.prototype.__mul__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$mul);

Sk.builtin.complex.prototype.int$div = function __div__(self, other){
    Sk.builtin.pyCheckArgsLen("__div__", arguments.length, 1, 1, true);
    return self.nb$divide.call(self, other);
};
Sk.builtin.complex.prototype.int$div.co_name = new Sk.builtin.str("__div__");
Sk.builtin.complex.prototype.__div__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$div);

Sk.builtin.complex.prototype.int$floordiv = function __floordiv__(self, other){
    Sk.builtin.pyCheckArgsLen("__floordiv__", arguments.length, 1, 1, true);
    return self.nb$floor_divide.call(self, other);
};
Sk.builtin.complex.prototype.int$floordiv.co_name = new Sk.builtin.str("__floordiv__");
Sk.builtin.complex.prototype.__floordiv__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$floordiv);

Sk.builtin.complex.prototype.int$mod = function __mod__(self, other){
    Sk.builtin.pyCheckArgsLen("__mod__", arguments.length, 1, 1, true);
    return self.nb$remainder.call(self, other);
};
Sk.builtin.complex.prototype.int$mod.co_name = new Sk.builtin.str("__mod__");
Sk.builtin.complex.prototype.__mod__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$mod);

Sk.builtin.complex.prototype.int$pow = function __pow__(self, other, z){
    Sk.builtin.pyCheckArgsLen("__pow__", arguments.length, 1, 2, true);
    return self.nb$power.call(self, other, z);
};
Sk.builtin.complex.prototype.int$pow.co_name = new Sk.builtin.str("__pow__");
Sk.builtin.complex.prototype.__pow__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$pow);

Sk.builtin.complex.prototype.int$neg = function __neg__(self){
    Sk.builtin.pyCheckArgsLen("__neg__", arguments.length, 0, 0, true);
    return self.nb$negative.call(self);
};
Sk.builtin.complex.prototype.__neg__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$neg);

Sk.builtin.complex.prototype.int$pos = function __pos__(self){
    Sk.builtin.pyCheckArgsLen("__pos__", arguments.length, 0, 0, true);
    return self.nb$positive.call(self);
};
Sk.builtin.complex.prototype.int$pos.co_name = new Sk.builtin.str("__pos__");
Sk.builtin.complex.prototype.__pos__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$pos);

Sk.builtin.complex.prototype.int$conjugate = function conjugate(self){
    Sk.builtin.pyCheckArgsLen("conjugate", arguments.length, 0, 0, true);
    var _imag = self.imag.v;
    _imag = -_imag;

    return new Sk.builtin.complex(self.real, new Sk.builtin.float_(_imag));
};
Sk.builtin.complex.prototype.int$conjugate.co_name = new Sk.builtin.str("conjugate");
Sk.builtin.complex.prototype.conjugate = new Sk.builtin.func(Sk.builtin.complex.prototype.int$conjugate);

// deprecated
Sk.builtin.complex.prototype.int$divmod = function __divmod__(self, other){
    Sk.builtin.pyCheckArgsLen("__divmod__", arguments.length, 1, 1, true);

    var div, mod; // Py_complex
    var d, m, z; // PyObject
    var a, b; // Py_complex
    a = Sk.builtin.complex.check_number_or_complex(self);
    b = Sk.builtin.complex.check_number_or_complex(other);

    div = a.nb$divide.call(a, b); // the raw divisor value

    div.real = new Sk.builtin.float_(Math.floor(div.real.v));
    div.imag = new Sk.builtin.float_(0.0);

    mod = a.nb$subtract.call(a, b.nb$multiply.call(b, div));

    z = new Sk.builtin.tuple([div, mod]);

    return z;
};
Sk.builtin.complex.prototype.int$divmod.co_name = new Sk.builtin.str("__divmod__");
Sk.builtin.complex.prototype.__divmod__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$divmod);

Sk.builtin.complex.prototype.int$getnewargs = function __getnewargs__(self){
    Sk.builtin.pyCheckArgsLen("__getnewargs__", arguments.length, 0, 0, true);

    return new Sk.builtin.tuple([self.real, self.imag]);
};
Sk.builtin.complex.prototype.int$getnewargs.co_name = new Sk.builtin.str("__getnewargs__");
Sk.builtin.complex.prototype.__getnewargs__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$getnewargs);

Sk.builtin.complex.prototype.int$nonzero = function __nonzero__(self){
    Sk.builtin.pyCheckArgsLen("__nonzero__", arguments.length, 0, 0, true);

    if(self.real.v !== 0.0 || self.imag.v !== 0.0) {
        return Sk.builtin.bool.true$;
    } else {
        return Sk.builtin.bool.false$;
    }
};
Sk.builtin.complex.prototype.int$nonzero.co_name = new Sk.builtin.str("__nonzero__");
Sk.builtin.complex.prototype.__nonzero__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$nonzero);


// ToDo: think about inplace methods too
Sk.exportSymbol("Sk.builtin.complex", Sk.builtin.complex);


/**
 * Convert a double val to a string using supplied format_code, precision, and flags.
 *
 * format_code must be one of 'e', 'E', 'f', 'F', 'g', 'G' or 'r'. For 'r', the supplied precision must be 0 and is ignored. The 'r' format code specifies the standard repr() format.
 *
 * flags can be zero or more of the values Py_DTSF_SIGN, Py_DTSF_ADD_DOT_0, or Py_DTSF_ALT, or-ed together:
 *
 * Py_DTSF_SIGN means to always precede the returned string with a sign character, even if val is non-negative.
 * Py_DTSF_ADD_DOT_0 means to ensure that the returned string will not look like an integer.
 * Py_DTSF_ALT means to apply “alternate” formatting rules. See the documentation for the PyOS_snprintf() '#' specifier for details.
 * If ptype is non-NULL, then the value it points to will be set to one of Py_DTST_FINITE, Py_DTST_INFINITE, or Py_DTST_NAN, signifying that val is a finite number, an
 * infinite number, or not a number, respectively.
 */
Sk.builtin.complex.PyOS_double_to_string = function(val, format_code, precision, flags, type) {
    var format;
    var buf;
    var t;
    var exp;
    var upper = false;

    // Validate format code, and map upper and lower case
    switch(format_code) {
        case "e": /* exponent */
        case "f": /* fixed */
        case "g": /* general */
            break;
        case "E":
            upper = true;
            format_code = "e";
            break;
        case "F":
            upper = true;
            format_code = "f";
            break;
        case "r": /* repr format */
            // Supplied precision is unused, must be 0.
            if(precision !== 0) {
                throw new Error("Bad internall call"); // only happens when somebody messes up calling this in js
            }

            // repr() precision is 17 significant decimal digits
            precision = 17;
            format_code = "g";
            break;
        default:
            throw new Error("Bad internall call");
    }

    // no need for buffer size calculation like in cpython

    // Handle nan and inf
    if(isNaN(val)) {
        buf = "nan";
        t = Sk.builtin.complex.PyOS_double_to_string.Py_DTST_NAN;
    } else if (val === Infinity) {
        buf = "inf";
        t = Sk.builtin.complex.PyOS_double_to_string.Py_DTST_INFINITE;
    } else if (val === -Infinity) {
        buf = "-inf";
        t = Sk.builtin.complex.PyOS_double_to_string.Py_DTST_INFINITE;
    } else {
        t = Sk.builtin.complex.PyOS_double_to_string.Py_DTST_FINITE;
        if(flags & Sk.builtin.complex.PyOS_double_to_string.Py_DTSF_ADD_DOT_0) {
            format_code = "g"; // "Z"; _PyOS_ascii_formatd converts "Z" to "g"
        }

        // ToDo: call snprintf here
        // ToDo: call ascii_formatd
        var format_str = "%";
        format_str += flags & Sk.builtin.complex.PyOS_double_to_string.Py_DTSF_ALT ? "#" : "";

        if(precision != null) {
            format_str += ".";
            format_str += precision;
        }

        format_str += format_code;
        format_str = new Sk.builtin.str(format_str);

        /**
         * We cann call nb$remainder with val, because it gets unwrapped and it doesn't matter if it is
         * already a javascript number. If we do not pass a float, we can't distinguish between ints and floats
         * and therefore we can't adjust the sign of the zero accordingly
         */
        buf = format_str.nb$remainder(new Sk.builtin.float_(val));
        buf = buf.v; // get javascript string
    }

    /**
     * Add sign when requested. It's convenient (esp. when formatting complex numbers) to
     * include sign even for inf and nan.
     */
    if(flags & Sk.builtin.complex.PyOS_double_to_string.Py_DTSF_SIGN && buf[0] !== "-") {
        buf = "+" + buf;
    }

    if(upper) {
        // Convert to upper case
        buf = buf.toUpperCase();
    }

    return buf;
};

/* PyOS_double_to_string's "flags" parameter can be set to 0 or more of: */
Sk.builtin.complex.PyOS_double_to_string.Py_DTSF_SIGN = 0x01; // always add the sign
Sk.builtin.complex.PyOS_double_to_string.Py_DTSF_ADD_DOT_0 = 0x02; // if the result is an integer add ".0"
Sk.builtin.complex.PyOS_double_to_string.Py_DTSF_ALT = 0x04; // "alternate" formatting. it's format_code specific

/* PyOS_double_to_string's "type", if non-NULL, will be set to one of: */
Sk.builtin.complex.PyOS_double_to_string.Py_DTST_FINITE = 0;
Sk.builtin.complex.PyOS_double_to_string.Py_DTST_INFINITE = 1;
Sk.builtin.complex.PyOS_double_to_string.Py_DTST_NAN = 2;
/**
 * @constructor
 * @param {Object} start
 * @param {Object=} stop
 * @param {Object=} step
 */
Sk.builtin.slice = function slice (start, stop, step) {
    Sk.builtin.pyCheckArgsLen("slice", arguments.length, 1, 3, false, false);

    if ((step !== undefined) && Sk.misceval.isIndex(step) && (Sk.misceval.asIndex(step) === 0)) {
        throw new Sk.builtin.ValueError("slice step cannot be zero");
    }

    if (!(this instanceof Sk.builtin.slice)) {
        return new Sk.builtin.slice(start, stop, step);
    }


    if (stop === undefined && step === undefined) {
        stop = start;
        start = Sk.builtin.none.none$;
    }
    if (stop === undefined) {
        stop = Sk.builtin.none.none$;
    }
    if (step === undefined) {
        step = Sk.builtin.none.none$;
    }
    this.start = start;
    this.stop = stop;
    this.step = step;

    this.__class__ = Sk.builtin.slice;

    this["$d"] = new Sk.builtin.dict([Sk.builtin.slice$start, this.start,
        Sk.builtin.slice$stop, this.stop,
        Sk.builtin.slice$step, this.step]);

    return this;
};

Sk.abstr.setUpInheritance("slice", Sk.builtin.slice, Sk.builtin.object);

Sk.builtin.slice.prototype["$r"] = function () {
    var a = Sk.builtin.repr(this.start).v;
    var b = Sk.builtin.repr(this.stop).v;
    var c = Sk.builtin.repr(this.step).v;
    return new Sk.builtin.str("slice(" + a + ", " + b + ", " + c + ")");
};

Sk.builtin.slice.prototype.tp$richcompare = function (w, op) {
    // w not a slice
    var t1, t2;
    if (!w.__class__ || w.__class__ != Sk.builtin.slice) {
        // shortcuts for eq/not
        if (op === "Eq") {
            return false;
        }
        if (op === "NotEq") {
            return true;
        }

        // todo; other types should have an arbitrary order
        return false;
    }

    // This is how CPython does it
    t1 = new Sk.builtin.tuple([this.start, this.stop, this.step]);
    t2 = new Sk.builtin.tuple([w.start, w.stop, w.step]);

    return t1.tp$richcompare(t2, op);
};

/* Internal indices function */
Sk.builtin.slice.prototype.slice_indices_ = function (length) {
    var start, stop, step;

    if (Sk.builtin.checkNone(this.start)) {
        start = null;
    } else if (Sk.misceval.isIndex(this.start)) {
        start = Sk.misceval.asIndex(this.start);
    } else {
        throw new Sk.builtin.TypeError("slice indices must be integers or None");
    }

    if (Sk.builtin.checkNone(this.stop)) {
        stop = null;
    } else if (Sk.misceval.isIndex(this.stop)) {
        stop = Sk.misceval.asIndex(this.stop);
    } else {
        throw new Sk.builtin.TypeError("slice indices must be integers or None");
    }

    if (Sk.builtin.checkNone(this.step)) {
        step = null;
    } else if (Sk.misceval.isIndex(this.step)) {
        step = Sk.misceval.asIndex(this.step);
    } else {
        throw new Sk.builtin.TypeError("slice indices must be integers or None");
    }

    // this seems ugly, better way?
    if (step === null) {
        step = 1;
    }
    if (step > 0) {
        if (start === null) {
            start = 0;
        }
        if (stop === null) {
            stop = length;
        }
        if (stop > length) {
            stop = length;
        }
        if (start < 0) {
            start = length + start;
            if (start < 0) {
                start = 0;
            }
        }
        if (stop < 0) {
            stop = length + stop;
        }
    } else {
        if (start === null) {
            start = length - 1;
        }
        if (start >= length) {
            start = length - 1;
        }
        if (stop === null) {
            stop = -1;
        } else if (stop < 0) {
            stop = length + stop;
            if (stop < 0) {
                stop = -1;
            }
        }
        if (start < 0) {
            start = length + start;
        }
    }

    return [start, stop, step];
};

Sk.builtin.slice.prototype["indices"] = new Sk.builtin.func(function (self, length) {
    Sk.builtin.pyCheckArgsLen("indices", arguments.length, 2, 2, false, false);

    length = Sk.builtin.asnum$(length);
    var sss = self.slice_indices_(length);

    return new Sk.builtin.tuple([new Sk.builtin.int_(sss[0]), 
                                 new Sk.builtin.int_(sss[1]), 
                                 new Sk.builtin.int_(sss[2])]);
});

Sk.builtin.slice.prototype.sssiter$ = function (wrt, f) {
    var i;
    var wrtv = Sk.builtin.asnum$(wrt);
    var sss = this.slice_indices_(typeof wrtv === "number" ? wrtv : wrt.v.length);
    if (sss[2] > 0) {
        for (i = sss[0]; i < sss[1]; i += sss[2]) {
            if (f(i, wrtv) === false) {
                return;
            }
        }	//	wrt or wrtv? RNL
    } else {
        for (i = sss[0]; i > sss[1]; i += sss[2]) {
            if (f(i, wrtv) === false) {
                return;
            }
        }	//	wrt or wrtv? RNL

    }
};

Sk.builtin.slice$start = new Sk.builtin.str("start");
Sk.builtin.slice$stop = new Sk.builtin.str("stop");
Sk.builtin.slice$step = new Sk.builtin.str("step");
/**
 * @constructor
 * @param {Array.<Object>} S
 */
Sk.builtin.set = function (S) {
    var it, i;
    var S_list;
    if (!(this instanceof Sk.builtin.set)) {
        Sk.builtin.pyCheckArgsLen("set", arguments.length, 0, 1);
        return new Sk.builtin.set(S);
    }


    if (typeof(S) === "undefined") {
        S = [];
    }

    this.set_reset_();
    S_list = new Sk.builtin.list(S);
    // python sorts sets on init, but not thereafter.
    // Skulpt seems to init a new set each time you add/remove something
    //Sk.builtin.list.prototype['sort'].func_code(S);
    for (it = Sk.abstr.iter(S_list), i = it.tp$iternext(); i !== undefined; i = it.tp$iternext()) {
        Sk.builtin.set.prototype["add"].func_code(this, i);
    }

    this.__class__ = Sk.builtin.set;

    this["v"] = this.v;
    return this;
};
Sk.abstr.setUpInheritance("set", Sk.builtin.set, Sk.builtin.object);
Sk.abstr.markUnhashable(Sk.builtin.set);

Sk.builtin.set.prototype.set_reset_ = function () {
    this.v = new Sk.builtin.dict([]);
};

Sk.builtin.set.prototype["$r"] = function () {
    var it, i;
    var ret = [];
    for (it = Sk.abstr.iter(this), i = it.tp$iternext(); i !== undefined; i = it.tp$iternext()) {
        ret.push(Sk.misceval.objectRepr(i).v);
    }

    if(Sk.__future__.set_repr) {
        return new Sk.builtin.str("{" + ret.join(", ") + "}");
    } else {
        return new Sk.builtin.str("set([" + ret.join(", ") + "])");
    }
};

Sk.builtin.set.prototype.ob$eq = function (other) {

    if (this === other) {
        return Sk.builtin.bool.true$;
    }

    if (!(other instanceof Sk.builtin.set)) {
        return Sk.builtin.bool.false$;
    }

    if (Sk.builtin.set.prototype.sq$length.call(this) !==
        Sk.builtin.set.prototype.sq$length.call(other)) {
        return Sk.builtin.bool.false$;
    }

    return this["issubset"].func_code(this, other);
};

Sk.builtin.set.prototype.ob$ne = function (other) {

    if (this === other) {
        return Sk.builtin.bool.false$;
    }

    if (!(other instanceof Sk.builtin.set)) {
        return Sk.builtin.bool.true$;
    }

    if (Sk.builtin.set.prototype.sq$length.call(this) !==
        Sk.builtin.set.prototype.sq$length.call(other)) {
        return Sk.builtin.bool.true$;
    }

    if (this["issubset"].func_code(this, other).v) {
        return Sk.builtin.bool.false$;
    } else {
        return Sk.builtin.bool.true$;
    }
};

Sk.builtin.set.prototype.ob$lt = function (other) {

    if (this === other) {
        return Sk.builtin.bool.false$;
    }

    if (Sk.builtin.set.prototype.sq$length.call(this) >=
        Sk.builtin.set.prototype.sq$length.call(other)) {
        return Sk.builtin.bool.false$;
    }

    return this["issubset"].func_code(this, other);
};

Sk.builtin.set.prototype.ob$le = function (other) {

    if (this === other) {
        return Sk.builtin.bool.true$;
    }

    if (Sk.builtin.set.prototype.sq$length.call(this) >
        Sk.builtin.set.prototype.sq$length.call(other)) {
        return Sk.builtin.bool.false$;
    }

    return this["issubset"].func_code(this, other);
};

Sk.builtin.set.prototype.ob$gt = function (other) {

    if (this === other) {
        return Sk.builtin.bool.false$;
    }

    if (Sk.builtin.set.prototype.sq$length.call(this) <=
        Sk.builtin.set.prototype.sq$length.call(other)) {
        return Sk.builtin.bool.false$;
    }

    return this["issuperset"].func_code(this, other);
};

Sk.builtin.set.prototype.ob$ge = function (other) {

    if (this === other) {
        return Sk.builtin.bool.true$;
    }

    if (Sk.builtin.set.prototype.sq$length.call(this) <
        Sk.builtin.set.prototype.sq$length.call(other)) {
        return Sk.builtin.bool.false$;
    }

    return this["issuperset"].func_code(this, other);
};

Sk.builtin.set.prototype.nb$and = function(other){
    return this["intersection"].func_code(this, other);
};

Sk.builtin.set.prototype.nb$or = function(other){
    return this["union"].func_code(this, other);
};

Sk.builtin.set.prototype.nb$xor = function(other){
    return this["symmetric_difference"].func_code(this, other);
};

Sk.builtin.set.prototype.nb$subtract = function(other){
    return this["difference"].func_code(this, other);
};

Sk.builtin.set.prototype["__iter__"] = new Sk.builtin.func(function (self) {
    Sk.builtin.pyCheckArgsLen("__iter__", arguments.length, 0, 0, false, true);
    return new Sk.builtin.set_iter_(self);
});

Sk.builtin.set.prototype.tp$iter = function () {
    return new Sk.builtin.set_iter_(this);
};

Sk.builtin.set.prototype.sq$length = function () {
    return this["v"].mp$length();
};

Sk.builtin.set.prototype.sq$contains = function(ob) {
    return this["v"].sq$contains(ob);
};

Sk.builtin.set.prototype["isdisjoint"] = new Sk.builtin.func(function (self, other) {
    // requires all items in self to not be in other
    var isIn;
    var it, item;

    Sk.builtin.pyCheckArgsLen("isdisjoint", arguments.length, 2, 2);
    if (!Sk.builtin.checkIterable(other)) {
        throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(other) + "' object is not iterable");
    }

    for (it = Sk.abstr.iter(self), item = it.tp$iternext(); item !== undefined; item = it.tp$iternext()) {
        isIn = Sk.abstr.sequenceContains(other, item);
        if (isIn) {
            return Sk.builtin.bool.false$;
        }
    }
    return Sk.builtin.bool.true$;
});

Sk.builtin.set.prototype["issubset"] = new Sk.builtin.func(function (self, other) {
    var isIn;
    var it, item;
    var selfLength, otherLength;

    Sk.builtin.pyCheckArgsLen("issubset", arguments.length, 2, 2);
    if (!Sk.builtin.checkIterable(other)) {
        throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(other) + "' object is not iterable");
    }

    selfLength = self.sq$length();
    otherLength = other.sq$length();

    if (selfLength > otherLength) {
        // every item in this set can't be in other if it's shorter!
        return Sk.builtin.bool.false$;
    }
    for (it = Sk.abstr.iter(self), item = it.tp$iternext(); item !== undefined; item = it.tp$iternext()) {
        isIn = Sk.abstr.sequenceContains(other, item);
        if (!isIn) {
            return Sk.builtin.bool.false$;
        }
    }
    return Sk.builtin.bool.true$;
});

Sk.builtin.set.prototype["issuperset"] = new Sk.builtin.func(function (self, other) {
    Sk.builtin.pyCheckArgsLen("issuperset", arguments.length, 2, 2);
    return Sk.builtin.set.prototype["issubset"].func_code(other, self);
});

Sk.builtin.set.prototype["union"] = new Sk.builtin.func(function (self) {
    var S, i, new_args;

    Sk.builtin.pyCheckArgsLen("union", arguments.length, 1);

    S = Sk.builtin.set.prototype["copy"].func_code(self);
    new_args = [S];
    for (i = 1; i < arguments.length; i++) {
        new_args.push(arguments[i]);
    }

    Sk.builtin.set.prototype["update"].func_code.apply(null, new_args);
    return S;
});

Sk.builtin.set.prototype["intersection"] = new Sk.builtin.func(function (self) {
    var S, i, new_args;

    Sk.builtin.pyCheckArgsLen("intersection", arguments.length, 1);

    S = Sk.builtin.set.prototype["copy"].func_code(self);
    new_args = [S];
    for (i = 1; i < arguments.length; i++) {
        new_args.push(arguments[i]);
    }

    Sk.builtin.set.prototype["intersection_update"].func_code.apply(null, new_args);
    return S;
});

Sk.builtin.set.prototype["difference"] = new Sk.builtin.func(function (self, other) {
    var S, i, new_args;

    Sk.builtin.pyCheckArgsLen("difference", arguments.length, 2);

    S = Sk.builtin.set.prototype["copy"].func_code(self);
    new_args = [S];
    for (i = 1; i < arguments.length; i++) {
        new_args.push(arguments[i]);
    }

    Sk.builtin.set.prototype["difference_update"].func_code.apply(null, new_args);
    return S;
});

Sk.builtin.set.prototype["symmetric_difference"] = new Sk.builtin.func(function (self, other) {
    var it, item, S;

    Sk.builtin.pyCheckArgsLen("symmetric_difference", arguments.length, 2, 2);

    S = Sk.builtin.set.prototype["union"].func_code(self, other);
    for (it = Sk.abstr.iter(S), item = it.tp$iternext(); item !== undefined; item = it.tp$iternext()) {
        if (Sk.abstr.sequenceContains(self, item) && Sk.abstr.sequenceContains(other, item)) {
            Sk.builtin.set.prototype["discard"].func_code(S, item);
        }
    }
    return S;
});

Sk.builtin.set.prototype["copy"] = new Sk.builtin.func(function (self) {
    Sk.builtin.pyCheckArgsLen("copy", arguments.length, 1, 1);
    return new Sk.builtin.set(self);
});

Sk.builtin.set.prototype["update"] = new Sk.builtin.func(function (self, other) {
    var i, it, item, arg;

    Sk.builtin.pyCheckArgsLen("update", arguments.length, 2);

    for (i = 1; i < arguments.length; i++) {
        arg = arguments[i];
        if (!Sk.builtin.checkIterable(arg)) {
            throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(arg) + "' object is not iterable");
        }
        for (it = Sk.abstr.iter(arg), item = it.tp$iternext();
             item !== undefined;
             item = it.tp$iternext()) {
            Sk.builtin.set.prototype["add"].func_code(self, item);
        }
    }

    return Sk.builtin.none.none$;
});

Sk.builtin.set.prototype["intersection_update"] = new Sk.builtin.func(function (self, other) {
    var i, it, item;

    Sk.builtin.pyCheckArgsLen("intersection_update", arguments.length, 2);
    for (i = 1; i < arguments.length; i++) {
        if (!Sk.builtin.checkIterable(arguments[i])) {
            throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(arguments[i]) +
                                           "' object is not iterable");
        }
    }

    for (it = Sk.abstr.iter(self), item = it.tp$iternext(); item !== undefined; item = it.tp$iternext()) {
        for (i = 1; i < arguments.length; i++) {
            if (!Sk.abstr.sequenceContains(arguments[i], item)) {
                Sk.builtin.set.prototype["discard"].func_code(self, item);
                break;
            }
        }
    }
    return Sk.builtin.none.none$;
});

Sk.builtin.set.prototype["difference_update"] = new Sk.builtin.func(function (self, other) {
    var i, it, item;

    Sk.builtin.pyCheckArgsLen("difference_update", arguments.length, 2);
    for (i = 1; i < arguments.length; i++) {
        if (!Sk.builtin.checkIterable(arguments[i])) {
            throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(arguments[i]) +
                                           "' object is not iterable");
        }
    }

    for (it = Sk.abstr.iter(self), item = it.tp$iternext(); item !== undefined; item = it.tp$iternext()) {
        for (i = 1; i < arguments.length; i++) {
            if (Sk.abstr.sequenceContains(arguments[i], item)) {
                Sk.builtin.set.prototype["discard"].func_code(self, item);
                break;
            }
        }
    }
    return Sk.builtin.none.none$;
});

Sk.builtin.set.prototype["symmetric_difference_update"] = new Sk.builtin.func(function (self, other) {
    Sk.builtin.pyCheckArgsLen("symmetric_difference_update", arguments.length, 2, 2);

    var sd = Sk.builtin.set.prototype["symmetric_difference"].func_code(self, other);
    self.set_reset_();
    Sk.builtin.set.prototype["update"].func_code(self, sd);
    return Sk.builtin.none.none$;
});


Sk.builtin.set.prototype["add"] = new Sk.builtin.func(function (self, item) {
    Sk.builtin.pyCheckArgsLen("add", arguments.length, 2, 2);

    self.v.mp$ass_subscript(item, true);
    return Sk.builtin.none.none$;
});

Sk.builtin.set.prototype["discard"] = new Sk.builtin.func(function (self, item) {
    Sk.builtin.pyCheckArgsLen("discard", arguments.length, 2, 2);

    Sk.builtin.dict.prototype["pop"].func_code(self.v, item,
        Sk.builtin.none.none$);
    return Sk.builtin.none.none$;
});

Sk.builtin.set.prototype["pop"] = new Sk.builtin.func(function (self) {
    var it, item;

    Sk.builtin.pyCheckArgsLen("pop", arguments.length, 1, 1);

    if (self.sq$length() === 0) {
        throw new Sk.builtin.KeyError("pop from an empty set");
    }

    it = Sk.abstr.iter(self);
    item = it.tp$iternext();
    Sk.builtin.set.prototype["discard"].func_code(self, item);
    return item;
});

Sk.builtin.set.prototype["remove"] = new Sk.builtin.func(function (self, item) {
    Sk.builtin.pyCheckArgsLen("remove", arguments.length, 2, 2);

    self.v.mp$del_subscript(item);
    return Sk.builtin.none.none$;
});

Sk.exportSymbol("Sk.builtin.set", Sk.builtin.set);

/**
 * @constructor
 * @param {Object} obj
 */
Sk.builtin.set_iter_ = function (obj) {
    var allkeys, k, i, bucket, buckets;
    if (!(this instanceof Sk.builtin.set_iter_)) {
        return new Sk.builtin.set_iter_(obj);
    }
    this.$obj = obj;
    this.tp$iter = this;
    allkeys = [];
    buckets = obj.v.buckets;
    for (k in buckets) {
        if (buckets.hasOwnProperty(k)) {
            bucket = buckets[k];
            if (bucket && bucket.$hash !== undefined && bucket.items !== undefined) {
                // skip internal stuff. todo; merge pyobj and this
                for (i = 0; i < bucket.items.length; i++) {
                    allkeys.push(bucket.items[i].lhs);
                }
            }
        }
    }
    this.$index = 0;
    this.$keys = allkeys;
    this.tp$iternext = function () {
        if (this.$index >= this.$keys.length) {
            return undefined;
        }
        return this.$keys[this.$index++];
    };
    this.$r = function () {
        return new Sk.builtin.str("setiterator");
    };
    return this;
};

Sk.abstr.setUpInheritance("setiterator", Sk.builtin.set_iter_, Sk.builtin.object);

Sk.builtin.set_iter_.prototype.__class__ = Sk.builtin.set_iter_;

Sk.builtin.set_iter_.prototype.__iter__ = new Sk.builtin.func(function (self) {
    Sk.builtin.pyCheckArgsLen("__iter__", arguments.length, 0, 0, true, false);
    return self;
});

Sk.builtin.set_iter_.prototype.next$ = function (self) {
    var ret = self.tp$iternext();
    if (ret === undefined) {
        throw new Sk.builtin.StopIteration();
    }
    return ret;
};
/*
	Implementation of the Python3 print version. Due to Python2 grammar we have
	to mimic the named keywords after *args as kwargs. Though this does not change
	anything for the internal implementation

*/
var print_f = function function_print(kwa) {
    Sk.builtin.pyCheckArgsLen("print", arguments.length, 0, Infinity, true, false);
    var args = Array.prototype.slice.call(arguments, 1);
    var kwargs = new Sk.builtins.dict(kwa);
    var _kwargs = Sk.ffi.remapToJs(kwargs);

    // defaults, null for None
    var kw_list = {
        "sep": " ",
        "end": "\n",
        "file": null
    };

    var remap_val;
    var is_none;

    // check for sep; string or None
    remap_val = kwargs.mp$lookup(new Sk.builtin.str("sep"));
    if(remap_val !== undefined) {
        is_none = Sk.builtin.checkNone(remap_val);
        if(Sk.builtin.checkString(remap_val) || is_none) {
            kw_list["sep"] = is_none ? kw_list["sep"] : Sk.ffi.remapToJs(remap_val); // only reassign for string
        } else {
            throw new Sk.builtin.TypeError("sep must be None or a string, not " + Sk.abstr.typeName(remap_val));
        }
    }

    // check for end; string or None
    remap_val = kwargs.mp$lookup(new Sk.builtin.str("end"));
    if(remap_val !== undefined) {
        is_none = Sk.builtin.checkNone(remap_val);
        if(Sk.builtin.checkString(remap_val) || is_none) {
            kw_list["end"] = is_none ? kw_list["end"] : Sk.ffi.remapToJs(remap_val); // only reassign for string
        } else {
            throw new Sk.builtin.TypeError("end must be None or a string, not " + Sk.abstr.typeName(remap_val));
        }
    }

    // check for file
    // allow None, though just keep null or check if value has attribute write
    remap_val = kwargs.mp$lookup(new Sk.builtin.str("file"));
    if(remap_val !== undefined) {
        is_none = Sk.builtin.checkNone(remap_val);
        if(is_none || remap_val.tp$getattr("write") !== undefined) {
            kw_list["file"] = is_none ? kw_list["file"] : remap_val;
        } else {
            throw new Sk.builtin.AttributeError("'" + Sk.abstr.typeName(remap_val) + "' object has no attribute 'write'");
        }
    }

    // loop through outputs and create output string
    var s = "";
    var i;
    for(i = 0; i < args.length; i++) {
        s += (new Sk.builtin.str(args[i])).v; // get str repr
        s += kw_list.sep;
    }

    if(args.length > 0 && kw_list.sep.length > 0) {
        s = s.substring(0, s.length-kw_list.sep.length);
    }

    s += kw_list.end;

    if(kw_list.file !== null) {
        // currently not tested, though it seems that we need to see how we should access the write function in a correct manner
        Sk.misceval.callsimArray(kw_list.file.write, [kw_list.file, new Sk.builtin.str(s)]); // callsim to write function
    } else {
        return Sk.misceval.chain(Sk.importModule("sys", false, true), function(sys) {
            return Sk.misceval.apply(sys["$d"]["stdout"]["write"], undefined, undefined, undefined, [sys["$d"]["stdout"], new Sk.builtin.str(s)]);
        });
    }
    // ToDo:
    // cpython print function may receive another flush kwarg that flushes the output stream immediatelly
};

print_f.co_kwargs = true;
Sk.builtin.print = new Sk.builtin.func(print_f);

Sk.builtin.print.__doc__ = new Sk.builtin.str("print(value, ..., sep=' ', end='\\n', file=sys.stdout, flush=False)\n\nPrints the values to a stream, or to sys.stdout by default.\nOptional keyword arguments:\nfile:  a file-like object (stream); defaults to the current sys.stdout.\nsep:   string inserted between values, default a space.\nend:   string appended after the last value, default a newline.\nflush: whether to forcibly flush the stream.");
/**
 * @constructor
 */
Sk.builtin.module = function module () {
};
Sk.exportSymbol("Sk.builtin.module", Sk.builtin.module);

Sk.builtin.module.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj("module", Sk.builtin.module);
Sk.builtin.module.prototype.tp$getattr = Sk.builtin.object.prototype.GenericGetAttr;
Sk.builtin.module.prototype.tp$setattr = Sk.builtin.object.prototype.GenericSetAttr;
Sk.builtin.module.prototype.tp$name = "module";
Sk.builtin.structseq_types = {};

Sk.builtin.make_structseq = function (module, name, fields, doc) {
    var nm = module + "." + name;
    var flds = [];
    var docs = [];
    var i;
    for (var key in fields) {
        flds.push(key);
        docs.push(fields[key]);
    }

    /**
     * @constructor
     * @extends Sk.builtin.tuple
     * @param {!Array<Object>|Object} arg
     */
    var cons = function structseq_constructor(arg) {
        Sk.builtin.pyCheckArgsLen(nm, arguments.length, 1, 1);
        var o;
        var it, i, /** @type {!Array<Object>} */v;
        if (!(this instanceof Sk.builtin.structseq_types[nm])) {
            o = Object.create(Sk.builtin.structseq_types[nm].prototype);
            o.constructor.apply(o, arguments);
            return o;
        }

        if (Array.isArray(arg)) {
            v = arg;
        } else {
            v = [];
            for (it = Sk.abstr.iter(arg), i = it.tp$iternext(); i !== undefined; i = it.tp$iternext()) {
                v.push(i);
            }
            if (v.length != flds.length) {
                throw new Sk.builtin.TypeError(nm + "() takes a " + flds.length + "-sequence (" + v.length + "-sequence given)");
            }
        }

        Sk.builtin.tuple.call(this, v);

        this.__class__ = Sk.builtin.structseq_types[nm];
    };

    Sk.builtin.structseq_types[nm] = cons;

    Sk.abstr.inherits(cons, Sk.builtin.tuple);
    if (doc) {
        cons.prototype.__doc__ = doc;
    }
    cons.prototype.tp$name = nm;
    cons.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj(nm, Sk.builtin.structseq_types[nm]);
    cons.prototype.ob$type["$d"] = new Sk.builtin.dict([]);
    cons.prototype.ob$type["$d"].mp$ass_subscript(Sk.builtin.type.basesStr_, new Sk.builtin.tuple([Sk.builtin.tuple]));
    //var mro = Sk.builtin.type.buildMRO(cons.prototype.ob$type);
    //cons.prototype.ob$type["$d"].mp$ass_subscript(Sk.builtin.type.mroStr_, mro);
    //cons.prototype.ob$type.tp$mro = mro;
    cons.prototype.__getitem__ = new Sk.builtin.func(function (self, index) {
        return Sk.builtin.tuple.prototype.mp$subscript.call(self, index);
    });
    cons.prototype.__reduce__ = new Sk.builtin.func(function (self) {
        throw new Sk.builtin.Exception("__reduce__ is not implemented");
    });

    cons.prototype["$r"] = function () {
        var ret;
        var i;
        var bits;
        if (this.v.length === 0) {
            return new Sk.builtin.str(nm + "()");
        }
        bits = [];
        for (i = 0; i < this.v.length; ++i) {
            bits[i] = flds[i] + "=" + Sk.misceval.objectRepr(this.v[i]).v;
        }
        ret = bits.join(", ");
        if (this.v.length === 1) {
            ret += ",";
        }
        return new Sk.builtin.str(nm + "(" + ret + ")");
    };
    cons.prototype.tp$setattr = function (pyName, value) {
        throw new Sk.builtin.AttributeError("readonly property");
    };

    cons.prototype.tp$getattr = function (pyName) {
        var jsName = pyName.$jsstr();
        var i = flds.indexOf(jsName);
        if (i >= 0) {
            return this.v[i];
        } else {
            return  Sk.builtin.object.prototype.GenericGetAttr(pyName);
        }
    };

    return cons;
};
Sk.exportSymbol("Sk.builtin.make_structseq", Sk.builtin.make_structseq);
/**
 * @constructor
 * @param {Function} code javascript code object for the function
 * @param {Object} globals where this function was defined
 * @param {Object} args arguments to the original call (stored into locals for
 * the generator to reenter)
 * @param {Object=} closure dict of free variables
 * @param {Object=} closure2 another dict of free variables that will be
 * merged into 'closure'. there's 2 to simplify generated code (one is $free,
 * the other is $cell)
 *
 * co_varnames and co_name come from generated code, must access as dict.
 */
Sk.builtin.generator = function (code, globals, args, closure, closure2) {
    var k;
    var i;
    if (!code) {
        return;
    } // ctor hack

    if (!(this instanceof Sk.builtin.generator)) {
        return new Sk.builtin.generator(code, globals, args, closure, closure2);
    }


    this.func_code = code;
    this.func_globals = globals || null;
    this["gi$running"] = false;
    this["gi$resumeat"] = 0;
    this["gi$sentvalue"] = undefined;
    this["gi$locals"] = {};
    this["gi$cells"] = {};
    if (args.length > 0) {
        // store arguments into locals because they have to be maintained
        // too. 'fast' var lookups are locals in generator functions.
        for (i = 0; i < code["co_varnames"].length; ++i) {
            this["gi$locals"][code["co_varnames"][i]] = args[i];
        }
    }
    if (closure2 !== undefined) {
        // todo; confirm that modification here can't cause problems
        for (k in closure2) {
            closure[k] = closure2[k];
        }
    }
    //print(JSON.stringify(closure));
    this.func_closure = closure;
    return this;
};
Sk.exportSymbol("Sk.builtin.generator", Sk.builtin.generator);

Sk.abstr.setUpInheritance("generator", Sk.builtin.generator, Sk.builtin.object);


Sk.builtin.generator.prototype.tp$iter = function () {
    return this;
};

Sk.builtin.generator.prototype.tp$iternext = function (canSuspend, yielded) {
    var ret;
    var args;
    var self = this;
    this["gi$running"] = true;
    if (yielded === undefined) {
        yielded = null;
    }
    this["gi$sentvalue"] = yielded;

    // note: functions expect 'this' to be globals to avoid having to
    // slice/unshift onto the main args
    args = [ this ];
    if (this.func_closure) {
        args.push(this.func_closure);
    }
    ret = this.func_code.apply(this.func_globals, args);
    return (function finishIteration(ret) {
        if (ret instanceof Sk.misceval.Suspension) {
            if (canSuspend) {
                return new Sk.misceval.Suspension(finishIteration, ret);
            } else {
                ret = Sk.misceval.retryOptionalSuspensionOrThrow(ret);
            }
        }
        //print("ret", JSON.stringify(ret));
        self["gi$running"] = false;
        Sk.asserts.assert(ret !== undefined);
        if (ret !== Sk.builtin.none.none$) {
            // returns a pair: resume target and yielded value
            self["gi$resumeat"] = ret[0];
            ret = ret[1];
        } else {
            // todo; StopIteration
            return undefined;
        }
        //print("returning:", JSON.stringify(ret));
        return ret;
    })(ret);
};

Sk.builtin.generator.prototype.next$ = function (self) {
    return self.tp$iternext(true);
};

Sk.builtin.generator.prototype["$r"] = function () {
    return new Sk.builtin.str("<generator object " + this.func_code["co_name"].v + ">");
};

Sk.builtin.generator.prototype["send"] = new Sk.builtin.func(function (self, value) {
    return self.tp$iternext(true, value);
});

/**
 * Creates a generator with the specified next function and additional
 * instance data. Useful in Javascript-implemented modules to implement
 * the __iter__ method.
 */
Sk.builtin.makeGenerator = function (next, data) {
    var key;
    var gen = new Sk.builtin.generator(null, null, null);
    gen.tp$iternext = next;

    for (key in data) {
        if (data.hasOwnProperty(key)) {
            gen[key] = data[key];
        }
    }

    return gen;
};
Sk.exportSymbol("Sk.builtin.makeGenerator", Sk.builtin.makeGenerator);
/**
 * @constructor
 * @param {Sk.builtin.str} name
 * @param {Sk.builtin.str} mode
 * @param {Object} buffering
 */
Sk.builtin.file = function (name, mode, buffering) {
    var i;
    var elem;

    if (!(this instanceof Sk.builtin.file)) {
        return new Sk.builtin.file(name, mode, buffering);
    }

    this.mode = mode;
    this.name = Sk.ffi.remapToJs(name);
    this.closed = false;

    if (this.name === "/dev/stdout") {
        this.data$ = Sk.builtin.none.none$;
        this.fileno = 1;
    } else if (this.name === "/dev/stdin") {
        this.fileno = 0;
    } else if (this.name === "/dev/stderr") {
        this.fileno = 2;
    } else {
        if (Sk.inBrowser) {  // todo:  Maybe provide a replaceable function for non-import files
            this.fileno = 10;
            elem = document.getElementById(name.v);
            if (elem == null) {
                if (mode.v == "w" || mode.v == "a") {
                    this.data$ = "";
                } else {
                    throw new Sk.builtin.IOError("[Errno 2] No such file or directory: '" + name.v + "'");
                }
            } else {
                if (elem.nodeName.toLowerCase() == "textarea") {
                    this.data$ = elem.value;
                } else {
                    this.data$ = elem.textContent;
                }
            }
        } else {
            this.fileno = 11;
            this.data$ = Sk.read(name.v);
        }

        this.lineList = this.data$.split("\n");
        this.lineList = this.lineList.slice(0, -1);

        for (i in this.lineList) {
            this.lineList[i] = this.lineList[i] + "\n";
        }
        this.currentLine = 0;
    }
    this.pos$ = 0;

    this.__class__ = Sk.builtin.file;

    if (Sk.fileopen && this.fileno >= 10) {
        Sk.fileopen(this);
    }

    return this;
};

Sk.abstr.setUpInheritance("file", Sk.builtin.file, Sk.builtin.object);

Sk.builtin.file.prototype["$r"] = function () {
    return new Sk.builtin.str("<" +
        (this.closed ? "closed" : "open") +
        "file '" +
        this.name +
        "', mode '" +
        Sk.ffi.remapToJs(this.mode) +
        "'>");
};

Sk.builtin.file.prototype["__enter__"] = new Sk.builtin.func(function __enter__(self) {
    return self;
});

Sk.builtin.file.prototype["__exit__"] = new Sk.builtin.func(function __exit__(self) {
    return Sk.misceval.callsimArray(Sk.builtin.file.prototype["close"], [self]);
});

Sk.builtin.file.prototype.tp$iter = function () {
    var allLines = this.lineList;
    var currentLine = this.currentLine;

    var ret =
    {
        tp$iter    : function () {
            return ret;
        },
        $obj       : this,
        $index     : currentLine,
        $lines     : allLines,
        tp$iternext: function () {
            if (ret.$index >= ret.$lines.length) {
                return undefined;
            }
            return new Sk.builtin.str(ret.$lines[ret.$index++]);
        }
    };
    return ret;
};

Sk.builtin.file.prototype["close"] = new Sk.builtin.func(function close(self) {
    self.closed = true;
    return Sk.builtin.none.none$;
});

Sk.builtin.file.prototype["flush"] = new Sk.builtin.func(function flush(self) {
});

Sk.builtin.file.prototype["fileno"] = new Sk.builtin.func(function fileno(self) {
    return this.fileno;
}); // > 0, not 1/2/3

Sk.builtin.file.prototype["isatty"] = new Sk.builtin.func(function isatty(self) {
    return false;
});

Sk.builtin.file.prototype["read"] = new Sk.builtin.func(function read(self, size) {
    var ret;
    var len = self.data$.length;
    var l_size;
    if (self.closed) {
        throw new Sk.builtin.ValueError("I/O operation on closed file");
    }

    if (size === undefined) {
        l_size = len;
    } else {
        l_size = Sk.ffi.remapToJs(size);
    }

    ret = new Sk.builtin.str(self.data$.substr(self.pos$, l_size));
    if(size === undefined){
        self.pos$ = len;
    }else{
        self.pos$ += Sk.ffi.remapToJs(size);
    }
    if (self.pos$ >= len) {
        self.pos$ = len;
    }

    return ret;
});

Sk.builtin.file.$readline = function (self, size, prompt) {
    if (self.fileno === 0) {
        var x, susp;

        var lprompt = Sk.ffi.remapToJs(prompt);

        lprompt = lprompt ? lprompt : "";

        x = Sk.inputfun(lprompt);

        if (x instanceof Promise) {
            susp = new Sk.misceval.Suspension();

            susp.resume = function() {
                if (susp.data.error) {
                    throw susp.data.error;
                }

                return new Sk.builtin.str(susp.data.result);
            };

            susp.data = {
                type: "Sk.promise",
                promise: x
            };

            return susp;
        } else {
            return new Sk.builtin.str(x);
        }
    } else {
        var line = "";
        if (self.currentLine < self.lineList.length) {
            line = self.lineList[self.currentLine];
            self.currentLine++;
        }
        return new Sk.builtin.str(line);
    }
};

Sk.builtin.file.prototype["readline"] = new Sk.builtin.func(function readline(self, size) {
    return Sk.builtin.file.$readline(self, size, undefined);
});

Sk.builtin.file.prototype["readlines"] = new Sk.builtin.func(function readlines(self, sizehint) {
    if (self.fileno === 0) {
        return new Sk.builtin.NotImplementedError("readlines ins't implemented because the web doesn't support Ctrl+D");
    }

    var i;
    var arr = [];
    for (i = self.currentLine; i < self.lineList.length; i++) {
        arr.push(new Sk.builtin.str(self.lineList[i]));
    }
    return new Sk.builtin.list(arr);
});

Sk.builtin.file.prototype["seek"] = new Sk.builtin.func(function seek(self, offset, whence) {
    var l_offset =  Sk.ffi.remapToJs(offset);

    if (whence === undefined) {
        whence = 0;
    }
    if (whence === 0) {
        self.pos$ = l_offset;
    } else if (whence == 1) {
        self.pos$ = self.data$.length + l_offset;
    } else if (whence == 2) {
        self.pos$ = self.data$.length + l_offset;
    }

    return Sk.builtin.none.none$;
});

Sk.builtin.file.prototype["tell"] = new Sk.builtin.func(function tell(self) {
    return Sk.ffi.remapToPy(self.pos$);
});

Sk.builtin.file.prototype["truncate"] = new Sk.builtin.func(function truncate(self, size) {
    Sk.asserts.fail();
});

Sk.builtin.file.prototype["write"] = new Sk.builtin.func(function write(self, str) {
    var mode = Sk.ffi.remapToJs(self.mode);
    if (mode === "w" || mode === "wb" || mode === "a" || mode === "ab") {
        if (Sk.filewrite) {
            if (self.closed) {
                throw new Sk.builtin.ValueError("I/O operation on closed file");
            }

            if (self.fileno === 1) {
                Sk.output(Sk.ffi.remapToJs(str));
            } else {
                Sk.filewrite(self, str);
            }
        } else {
            if (self.fileno === 1) {
                Sk.output(Sk.ffi.remapToJs(str));
            } else {
                Sk.asserts.fail();
            }
        }
    } else {
        throw new Sk.builtin.IOError("File not open for writing");
    }
});


Sk.exportSymbol("Sk.builtin.file", Sk.builtin.file);
/**
 * @namespace Sk.ffi
 *
 */

Sk.ffi = Sk.ffi || {};

/**
 * maps from Javascript Object/Array/string to Python dict/list/str.
 *
 * only works on basic objects that are being used as storage, doesn't handle
 * functions, etc.
 */
Sk.ffi.remapToPy = function (obj) {
    var k;
    var kvs;
    var i;
    var arr;

    if (obj === null || typeof obj === "undefined") {
        return Sk.builtin.none.none$;
    }

    if (obj.ob$type) {
        return obj;
    }

    if (obj instanceof Sk.misceval.Suspension) {
        return obj;
    }

    if (Object.prototype.toString.call(obj) === "[object Array]") {
        arr = [];
        for (i = 0; i < obj.length; ++i) {
            arr.push(Sk.ffi.remapToPy(obj[i]));
        }
        return new Sk.builtin.list(arr);
    }

    if (typeof obj === "object") {
        kvs = [];
        for (k in obj) {
            kvs.push(Sk.ffi.remapToPy(k));
            kvs.push(Sk.ffi.remapToPy(obj[k]));
        }
        return new Sk.builtin.dict(kvs);
    }

    if (typeof obj === "string") {
        return new Sk.builtin.str(obj);
    }

    if (typeof obj === "number") {
        return Sk.builtin.assk$(obj);
    }

    if (typeof obj === "boolean") {
        return new Sk.builtin.bool(obj);
    } else if (typeof obj === "undefined") {
        return Sk.builtin.none.none$;
    }

    if (typeof obj === "function") {
        return new Sk.builtin.func(obj);
    }

    Sk.asserts.fail("unhandled remap type " + typeof(obj));
};
Sk.exportSymbol("Sk.ffi.remapToPy", Sk.ffi.remapToPy);

/**
 * Maps from Python dict/list/str/number to Javascript Object/Array/string/number.
 *
 * If obj is a
 *
 * @param obj {Object}  Any Python object (except a function)
 *
 */
Sk.ffi.remapToJs = function (obj) {
    var i;
    var kAsJs;
    var v;
    var iter, k;
    var ret;
    if (obj instanceof Sk.builtin.dict) {
        ret = {};
        for (iter = obj.tp$iter(), k = iter.tp$iternext();
             k !== undefined;
             k = iter.tp$iternext()) {
            v = obj.mp$subscript(k);
            if (v === undefined) {
                v = null;
            }
            kAsJs = Sk.ffi.remapToJs(k);
            // todo; assert that this is a reasonble lhs?
            ret[kAsJs] = Sk.ffi.remapToJs(v);
        }
        return ret;
    } else if (obj instanceof Sk.builtin.list || obj instanceof Sk.builtin.tuple) {
        ret = [];
        for (i = 0; i < obj.v.length; ++i) {
            ret.push(Sk.ffi.remapToJs(obj.v[i]));
        }
        return ret;
    } else if (obj instanceof Sk.builtin.bool) {
        return obj.v ? true : false;
    } else if (obj instanceof Sk.builtin.int_) {
        return Sk.builtin.asnum$(obj);
    } else if (obj instanceof Sk.builtin.float_) {
        return Sk.builtin.asnum$(obj);
    } else if (obj instanceof Sk.builtin.lng) {
        return Sk.builtin.asnum$(obj);
    } else if (typeof obj === "number" || typeof obj === "boolean" || typeof obj === "string") {
        return obj;
    } else if (obj === undefined) {
        return undefined;
    } else {
        return obj.v;
    }
};
Sk.exportSymbol("Sk.ffi.remapToJs", Sk.ffi.remapToJs);

Sk.ffi.callback = function (fn) {
    if (fn === undefined) {
        return fn;
    }
    return function () {
        return Sk.misceval.apply(fn, undefined, undefined, undefined, Array.prototype.slice.call(arguments, 0));
    };
};
Sk.exportSymbol("Sk.ffi.callback", Sk.ffi.callback);

Sk.ffi.stdwrap = function (type, towrap) {
    var inst = new type();
    inst["v"] = towrap;
    return inst;
};
Sk.exportSymbol("Sk.ffi.stdwrap", Sk.ffi.stdwrap);

/**
 * for when the return type might be one of a variety of basic types.
 * number|string, etc.
 */
Sk.ffi.basicwrap = function (obj) {
    if (obj instanceof Sk.builtin.int_) {
        return Sk.builtin.asnum$(obj);
    }
    if (obj instanceof Sk.builtin.float_) {
        return Sk.builtin.asnum$(obj);
    }
    if (obj instanceof Sk.builtin.lng) {
        return Sk.builtin.asnum$(obj);
    }
    if (typeof obj === "number" || typeof obj === "boolean") {
        return obj;
    }
    if (typeof obj === "string") {
        return new Sk.builtin.str(obj);
    }
    Sk.asserts.fail("unexpected type for basicwrap");
};
Sk.exportSymbol("Sk.ffi.basicwrap", Sk.ffi.basicwrap);

Sk.ffi.unwrapo = function (obj) {
    if (obj === undefined) {
        return undefined;
    }
    return obj["v"];
};
Sk.exportSymbol("Sk.ffi.unwrapo", Sk.ffi.unwrapo);

Sk.ffi.unwrapn = function (obj) {
    if (obj === null) {
        return null;
    }
    return obj["v"];
};
Sk.exportSymbol("Sk.ffi.unwrapn", Sk.ffi.unwrapn);
/**
  * Builds an iterator that outputs the items from the inputted object
  * @constructor
  * @param {*} obj must support iter protocol (has __iter__ and next methods), if sentinel defined:
  * obj must be callable
  * @param {*=} sentinel optional if defined returns an object that makes a call to obj until
  * sentinel is reached
  * @extends Sk.builtin.object
  *
  * @description
  * Constructor for Python iterator.
  *
  */
Sk.builtin.iterator = function (obj, sentinel) {
    var objit;
    if (obj instanceof Sk.builtin.generator) {
        return obj;
    }
    objit = Sk.abstr.lookupSpecial(obj, Sk.builtin.str.$iter);
    if (objit) {
        return Sk.misceval.callsimArray(objit, [obj]);
    }
    this.sentinel = sentinel;
    this.flag = false;
    this.idx = 0;
    this.obj = obj;
    if (sentinel === undefined) {
        this.getitem = Sk.abstr.lookupSpecial(obj, Sk.builtin.str.$getitem);
        this.$r = function () {
            return new Sk.builtin.str("<iterator object>");
        };
    } else {
        this.call = Sk.abstr.lookupSpecial(obj, Sk.builtin.str.$call);
        this.$r = function () {
            return new Sk.builtin.str("<callable-iterator object>");
        };
    }
    return this;
};

Sk.abstr.setUpInheritance("iterator", Sk.builtin.iterator, Sk.builtin.object);

Sk.builtin.iterator.prototype.__class__ = Sk.builtin.iterator;

Sk.builtin.iterator.prototype.__iter__ = new Sk.builtin.func(function (self) {
    return self.tp$iter();
});

Sk.builtin.iterator.prototype.tp$iter =  function () {
    return this;
};

Sk.builtin.iterator.prototype.tp$iternext = function (canSuspend) {
    var r;
    var self = this;

    if (this.flag === true) {
        // Iterator has already completed
        return undefined;
    }

    if (this.getitem) {
        r = Sk.misceval.tryCatch(function() {
            return Sk.misceval.callsimOrSuspendArray(self.getitem, [self.obj, Sk.ffi.remapToPy(self.idx++)]);
        }, function(e) {
            if (e instanceof Sk.builtin.StopIteration || e instanceof Sk.builtin.IndexError) {
                return undefined;
            } else {
                throw e;
            }
        });
        return canSuspend ? r : Sk.misceval.retryOptionalSuspensionOrThrow(r);
    }

    var checkSentinel = function (ret) {
        // Iteration is complete if ret value is the sentinel
        if (Sk.misceval.richCompareBool(ret, self.sentinel, "Eq")) {
            self.flag = true;
            return undefined;
        }
        return ret;
    };

    if (this.call) {
        r = Sk.misceval.chain(Sk.misceval.callsimOrSuspendArray(this.call, [this.obj]), checkSentinel);
    } else {
        var obj = /** @type {Object} */ (this.obj);
        r = Sk.misceval.chain(Sk.misceval.callsimOrSuspendArray(obj), checkSentinel);
    }

    return canSuspend ? r : Sk.misceval.retryOptionalSuspensionOrThrow(r);
};

Sk.builtin.iterator.prototype.next$ = function (self) {
    var ret = self.tp$iternext();
    if (!ret) {
        throw new Sk.builtin.StopIteration();
    }
    return ret;
};

Sk.exportSymbol("Sk.builtin.iterator", Sk.builtin.iterator);
/**
 * @constructor
 * @param {Object} iterable
 * @param {number=} start
 * @extends Sk.builtin.object
 */
Sk.builtin.enumerate = function (iterable, start) {
    var it;
    if (!(this instanceof Sk.builtin.enumerate)) {
        return new Sk.builtin.enumerate(iterable, start);
    }


    Sk.builtin.pyCheckArgsLen("enumerate", arguments.length, 1, 2);
    if (!Sk.builtin.checkIterable(iterable)) {
        throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(iterable) + "' object is not iterable");
    }
    if (start !== undefined) {
        if (!Sk.misceval.isIndex(start)) {
            throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(start) + "' object cannot be interpreted as an index");
        } else {
            start = Sk.misceval.asIndex(start);
        }
    } else {
        start = 0;
    }

    it = iterable.tp$iter();

    this.tp$iter = function () {
        return this;
    };
    this.$index = start;
    this.tp$iternext = function () {
        // todo; StopIteration
        var idx;
        var next = it.tp$iternext();
        if (next === undefined) {
            return undefined;
        }
        idx = new Sk.builtin.int_(this.$index++);
        return new Sk.builtin.tuple([idx, next]);
    };

    this.__class__ = Sk.builtin.enumerate;

    return this;
};

Sk.abstr.setUpInheritance("enumerate", Sk.builtin.enumerate, Sk.builtin.object);

Sk.builtin.enumerate.prototype["__iter__"] = new Sk.builtin.func(function (self) {
    return self.tp$iter();
});

Sk.builtin.enumerate.prototype.next$ = function (self) {
    return self.tp$iternext();
};

Sk.builtin.enumerate.prototype["$r"] = function () {
    return new Sk.builtin.str("<enumerate object>");
};
/*
 * This is a port of tokenize.py by Ka-Ping Yee.
 *
 * each call to readline should return one line of input as a string, or
 * undefined if it's finished.
 *
 * callback is called for each token with 5 args:
 * 1. the token type
 * 2. the token string
 * 3. [ start_row, start_col ]
 * 4. [ end_row, end_col ]
 * 5. logical line where the token was found, including continuation lines
 *
 * callback can return true to abort.
 *
 */

/**
 * @constructor
 */
Sk.Tokenizer = function (filename, interactive, callback) {
    this.filename = filename;
    this.callback = callback;
    this.lnum = 0;
    this.parenlev = 0;
    this.continued = false;
    this.namechars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_";
    this.numchars = "0123456789";
    this.contstr = "";
    this.needcont = false;
    this.contline = undefined;
    this.indents = [0];
    this.endprog = /.*/;
    this.strstart = [-1, -1];
    this.interactive = interactive;
    this.doneFunc = function () {
        var i;
        for (i = 1; i < this.indents.length; ++i) // pop remaining indent levels
        {
            if (this.callback(Sk.Tokenizer.Tokens.T_DEDENT, "", [this.lnum, 0], [this.lnum, 0], "")) {
                return "done";
            }
        }
        if (this.callback(Sk.Tokenizer.Tokens.T_ENDMARKER, "", [this.lnum, 0], [this.lnum, 0], "")) {
            return "done";
        }

        return "failed";
    };

};

/**
 * @enum {number}
 */
Sk.Tokenizer.Tokens = {
    T_ENDMARKER       : 0,
    T_NAME            : 1,
    T_NUMBER          : 2,
    T_STRING          : 3,
    T_NEWLINE         : 4,
    T_INDENT          : 5,
    T_DEDENT          : 6,
    T_LPAR            : 7,
    T_RPAR            : 8,
    T_LSQB            : 9,
    T_RSQB            : 10,
    T_COLON           : 11,
    T_COMMA           : 12,
    T_SEMI            : 13,
    T_PLUS            : 14,
    T_MINUS           : 15,
    T_STAR            : 16,
    T_SLASH           : 17,
    T_VBAR            : 18,
    T_AMPER           : 19,
    T_LESS            : 20,
    T_GREATER         : 21,
    T_EQUAL           : 22,
    T_DOT             : 23,
    T_PERCENT         : 24,
    T_BACKQUOTE       : 25,
    T_LBRACE          : 26,
    T_RBRACE          : 27,
    T_EQEQUAL         : 28,
    T_NOTEQUAL        : 29,
    T_LESSEQUAL       : 30,
    T_GREATEREQUAL    : 31,
    T_TILDE           : 32,
    T_CIRCUMFLEX      : 33,
    T_LEFTSHIFT       : 34,
    T_RIGHTSHIFT      : 35,
    T_DOUBLESTAR      : 36,
    T_PLUSEQUAL       : 37,
    T_MINEQUAL        : 38,
    T_STAREQUAL       : 39,
    T_SLASHEQUAL      : 40,
    T_PERCENTEQUAL    : 41,
    T_AMPEREQUAL      : 42,
    T_VBAREQUAL       : 43,
    T_CIRCUMFLEXEQUAL : 44,
    T_LEFTSHIFTEQUAL  : 45,
    T_RIGHTSHIFTEQUAL : 46,
    T_DOUBLESTAREQUAL : 47,
    T_DOUBLESLASH     : 48,
    T_DOUBLESLASHEQUAL: 49,
    T_AT              : 50,
    T_OP              : 51,
    T_COMMENT         : 52,
    T_NL              : 53,
    T_RARROW          : 54,
    T_ERRORTOKEN      : 55,
    T_N_TOKENS        : 56,
    T_NT_OFFSET       : 256
};

/** @param {...*} x */
function group (x) {
    var args = Array.prototype.slice.call(arguments);
    return "(" + args.join("|") + ")";
}

/** @param {...*} x */
function any (x) {
    return group.apply(null, arguments) + "*";
}

/** @param {...*} x */
function maybe (x) {
    return group.apply(null, arguments) + "?";
}

/* we have to use string and ctor to be able to build patterns up. + on /.../
 * does something strange. */
var Whitespace = "[ \\f\\t]*";
var Comment_ = "#[^\\r\\n]*";
var Ident = "[a-zA-Z_]\\w*";

var Binnumber = "0[bB][01]*";
var Hexnumber = "0[xX][\\da-fA-F]*[lL]?";
var Octnumber = "0[oO]?[0-7]*[lL]?";
var Decnumber = "[1-9]\\d*[lL]?";
var Intnumber = group(Binnumber, Hexnumber, Octnumber, Decnumber);

var Exponent = "[eE][-+]?\\d+";
var Pointfloat = group("\\d+\\.\\d*", "\\.\\d+") + maybe(Exponent);
var Expfloat = "\\d+" + Exponent;
var Floatnumber = group(Pointfloat, Expfloat);
var Imagnumber = group("\\d+[jJ]", Floatnumber + "[jJ]");
var Number_ = group(Imagnumber, Floatnumber, Intnumber);

// tail end of ' string
var Single = "^[^'\\\\]*(?:\\\\.[^'\\\\]*)*'";
// tail end of " string
var Double_ = '^[^"\\\\]*(?:\\\\.[^"\\\\]*)*"';
// tail end of ''' string
var Single3 = "[^'\\\\]*(?:(?:\\\\.|'(?!''))[^'\\\\]*)*'''";
// tail end of """ string
var Double3 = '[^"\\\\]*(?:(?:\\\\.|"(?!""))[^"\\\\]*)*"""';
var Triple = group("[ubUB]?[rR]?'''", '[ubUB]?[rR]?"""');
var String_ = group("[uU]?[rR]?'[^\\n'\\\\]*(?:\\\\.[^\\n'\\\\]*)*'",
    '[uU]?[rR]?"[^\\n"\\\\]*(?:\\\\.[^\\n"\\\\]*)*"');

// Because of leftmost-then-longest match semantics, be sure to put the
// longest operators first (e.g., if = came before ==, == would get
// recognized as two instances of =).
var Operator = group("\\*\\*=?", ">>=?", "<<=?", "<>", "!=",
    "//=?", "->",
    "[+\\-*/%&|^=<>]=?",
    "~");

var Bracket = "[\\][(){}]";
var Special = group("\\r?\\n", "[:;.,`@]");
var Funny = group(Operator, Bracket, Special);

var ContStr = group("[uUbB]?[rR]?'[^\\n'\\\\]*(?:\\\\.[^\\n'\\\\]*)*" +
        group("'", "\\\\\\r?\\n"),
        "[uUbB]?[rR]?\"[^\\n\"\\\\]*(?:\\\\.[^\\n\"\\\\]*)*" +
        group("\"", "\\\\\\r?\\n"));
var PseudoExtras = group("\\\\\\r?\\n", Comment_, Triple);
// Need to prefix with "^" as we only want to match what's next
var PseudoToken = "^" + group(PseudoExtras, Number_, Funny, ContStr, Ident);


var triple_quoted = {
    "'''"  : true, '"""': true,
    "r'''" : true, 'r"""': true, "R'''": true, 'R"""': true,
    "u'''" : true, 'u"""': true, "U'''": true, 'U"""': true,
    "b'''" : true, 'b"""': true, "B'''": true, 'B"""': true,
    "ur'''": true, 'ur"""': true, "Ur'''": true, 'Ur"""': true,
    "uR'''": true, 'uR"""': true, "UR'''": true, 'UR"""': true,
    "br'''": true, 'br"""': true, "Br'''": true, 'Br"""': true,
    "bR'''": true, 'bR"""': true, "BR'''": true, 'BR"""': true
};

var single_quoted = {
    "'"  : true, '"': true,
    "r'" : true, 'r"': true, "R'": true, 'R"': true,
    "u'" : true, 'u"': true, "U'": true, 'U"': true,
    "b'" : true, 'b"': true, "B'": true, 'B"': true,
    "ur'": true, 'ur"': true, "Ur'": true, 'Ur"': true,
    "uR'": true, 'uR"': true, "UR'": true, 'UR"': true,
    "br'": true, 'br"': true, "Br'": true, 'Br"': true,
    "bR'": true, 'bR"': true, "BR'": true, 'BR"': true
};

// hack to make closure keep those objects. not sure what a better way is.
(function () {
    var k;
    for (k in triple_quoted) {
    }
    for (k in single_quoted) {
    }
}());


var tabsize = 8;

function contains (a, obj) {
    var i = a.length;
    while (i--) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}

function rstrip (input, what) {
    var i;
    for (i = input.length; i > 0; --i) {
        if (what.indexOf(input.charAt(i - 1)) === -1) {
            break;
        }
    }
    return input.substring(0, i);
}

Sk.Tokenizer.prototype.generateTokens = function (line) {
    var nl_pos;
    var newl;
    var initial;
    var token;
    var epos;
    var spos;
    var start;
    var pseudomatch;
    var capos;
    var comment_token;
    var endmatch, pos, column, end, max;


    // bnm - Move these definitions in this function otherwise test state is preserved between
    // calls on single3prog and double3prog causing weird errors with having multiple instances
    // of triple quoted strings in the same program.

    var pseudoprog = new RegExp(PseudoToken);
    var single3prog = new RegExp(Single3, "g");
    var double3prog = new RegExp(Double3, "g");

    var endprogs = {     "'": new RegExp(Single, "g"), "\"": new RegExp(Double_, "g"),
        "'''"               : single3prog, '"""': double3prog,
        "r'''"              : single3prog, 'r"""': double3prog,
        "u'''"              : single3prog, 'u"""': double3prog,
        "b'''"              : single3prog, 'b"""': double3prog,
        "ur'''"             : single3prog, 'ur"""': double3prog,
        "br'''"             : single3prog, 'br"""': double3prog,
        "R'''"              : single3prog, 'R"""': double3prog,
        "U'''"              : single3prog, 'U"""': double3prog,
        "B'''"              : single3prog, 'B"""': double3prog,
        "uR'''"             : single3prog, 'uR"""': double3prog,
        "Ur'''"             : single3prog, 'Ur"""': double3prog,
        "UR'''"             : single3prog, 'UR"""': double3prog,
        "bR'''"             : single3prog, 'bR"""': double3prog,
        "Br'''"             : single3prog, 'Br"""': double3prog,
        "BR'''"             : single3prog, 'BR"""': double3prog,
        'r'                 : null, 'R': null,
        'u'                 : null, 'U': null,
        'b'                 : null, 'B': null
    };


    if (!line) {
        line = '';
    }
    //print("LINE:'"+line+"'");

    this.lnum += 1;
    pos = 0;
    max = line.length;

    if (this.contstr.length > 0) {
        if (!line) {
            throw new Sk.builtin.SyntaxError("EOF in multi-line string", this.filename, this.strstart[0], this.strstart[1], this.contline);
        }
        this.endprog.lastIndex = 0;
        endmatch = this.endprog.test(line);
        if (endmatch) {
            pos = end = this.endprog.lastIndex;
            if (this.callback(Sk.Tokenizer.Tokens.T_STRING, this.contstr + line.substring(0, end),
                this.strstart, [this.lnum, end], this.contline + line)) {
                return 'done';
            }
            this.contstr = '';
            this.needcont = false;
            this.contline = undefined;
        }
        else if (this.needcont && line.substring(line.length - 2) !== "\\\n" && line.substring(line.length - 3) !== "\\\r\n") {
            if (this.callback(Sk.Tokenizer.Tokens.T_ERRORTOKEN, this.contstr + line,
                this.strstart, [this.lnum, line.length], this.contline)) {
                return 'done';
            }
            this.contstr = '';
            this.contline = undefined;
            return false;
        }
        else {
            this.contstr += line;
            this.contline = this.contline + line;
            return false;
        }
    }
    else if (this.parenlev === 0 && !this.continued) {
        if (!line) {
            return this.doneFunc();
        }
        column = 0;
        while (pos < max) {
            if (line.charAt(pos) === ' ') {
                column += 1;
            }
            else if (line.charAt(pos) === '\t') {
                column = (column / tabsize + 1) * tabsize;
            }
            else if (line.charAt(pos) === '\f') {
                column = 0;
            }
            else {
                break;
            }
            pos = pos + 1;
        }
        if (pos === max) {
            return this.doneFunc();
        }

        if ("#\r\n".indexOf(line.charAt(pos)) !== -1) // skip comments or blank lines
        {
            if (line.charAt(pos) === '#') {
                comment_token = rstrip(line.substring(pos), '\r\n');
                nl_pos = pos + comment_token.length;
                if (this.callback(Sk.Tokenizer.Tokens.T_COMMENT, comment_token,
                    [this.lnum, pos], [this.lnum, pos + comment_token.length], line)) {
                    return 'done';
                }
                //print("HERE:1");
                if (this.callback(Sk.Tokenizer.Tokens.T_NL, line.substring(nl_pos),
                    [this.lnum, nl_pos], [this.lnum, line.length], line)) {
                    return 'done';
                }
                return false;
            }
            else {
                //print("HERE:2");
                if (this.callback(Sk.Tokenizer.Tokens.T_NL, line.substring(pos),
                    [this.lnum, pos], [this.lnum, line.length], line)) {
                    return 'done';
                }
                if (!this.interactive) {
                    return false;
                }
            }
        }

        if (column > this.indents[this.indents.length - 1]) // count indents or dedents
        {
            this.indents.push(column);
            if (this.callback(Sk.Tokenizer.Tokens.T_INDENT, line.substring(0, pos), [this.lnum, 0], [this.lnum, pos], line)) {
                return 'done';
            }
        }
        while (column < this.indents[this.indents.length - 1]) {
            if (!contains(this.indents, column)) {
                throw new Sk.builtin.IndentationError("unindent does not match any outer indentation level",
                    this.filename, this.lnum, pos, line);
            }
            this.indents.splice(this.indents.length - 1, 1);
            //print("dedent here");
            if (this.callback(Sk.Tokenizer.Tokens.T_DEDENT, '', [this.lnum, pos], [this.lnum, pos], line)) {
                return 'done';
            }
        }
    }
    else // continued statement
    {
        if (!line) {
            throw new Sk.builtin.SyntaxError("EOF in multi-line statement", this.filename, this.lnum, 0, line);
        }
        this.continued = false;
    }

    while (pos < max) {
        //print("pos:"+pos+":"+max);
        // js regexes don't return any info about matches, other than the
        // content. we'd like to put a \w+ before pseudomatch, but then we
        // can't get any data
        capos = line.charAt(pos);
        while (capos === ' ' || capos === '\f' || capos === '\t') {
            pos += 1;
            capos = line.charAt(pos);
        }
        pseudoprog.lastIndex = 0;
        pseudomatch = pseudoprog.exec(line.substring(pos));
        if (pseudomatch) {
            start = pos;
            end = start + pseudomatch[1].length;
            spos = [this.lnum, start];
            epos = [this.lnum, end];
            pos = end;
            token = line.substring(start, end);
            initial = line.charAt(start);
            //Sk.debugout("token:",token, "initial:",initial, start, end);
            if (this.numchars.indexOf(initial) !== -1 || (initial === '.' && token !== '.')) {
                if (this.callback(Sk.Tokenizer.Tokens.T_NUMBER, token, spos, epos, line)) {
                    return 'done';
                }
            }
            else if (initial === '\r' || initial === '\n') {
                newl = Sk.Tokenizer.Tokens.T_NEWLINE;
                //print("HERE:3");
                if (this.parenlev > 0) {
                    newl = Sk.Tokenizer.Tokens.T_NL;
                }
                if (this.callback(newl, token, spos, epos, line)) {
                    return 'done';
                }
            }
            else if (initial === '#') {
                if (this.callback(Sk.Tokenizer.Tokens.T_COMMENT, token, spos, epos, line)) {
                    return 'done';
                }
            }
            else if (triple_quoted.hasOwnProperty(token)) {
                this.endprog = endprogs[token];
                this.endprog.lastIndex = 0;
                endmatch = this.endprog.test(line.substring(pos));
                if (endmatch) {
                    pos = this.endprog.lastIndex + pos;
                    token = line.substring(start, pos);
                    if (this.callback(Sk.Tokenizer.Tokens.T_STRING, token, spos, [this.lnum, pos], line)) {
                        return 'done';
                    }
                }
                else {
                    this.strstart = [this.lnum, start];
                    this.contstr = line.substring(start);
                    this.contline = line;
                    return false;
                }
            }
            else if (single_quoted.hasOwnProperty(initial) ||
                single_quoted.hasOwnProperty(token.substring(0, 2)) ||
                single_quoted.hasOwnProperty(token.substring(0, 3))) {
                if (token[token.length - 1] === '\n') {
                    this.strstart = [this.lnum, start];
                    this.endprog = endprogs[initial] || endprogs[token[1]] || endprogs[token[2]];
                    this.contstr = line.substring(start);
                    this.needcont = true;
                    this.contline = line;
                    //print("i, t1, t2", initial, token[1], token[2]);
                    //print("ep, cs", this.endprog, this.contstr);
                    return false;
                }
                else {
                    if (this.callback(Sk.Tokenizer.Tokens.T_STRING, token, spos, epos, line)) {
                        return 'done';
                    }
                }
            }
            else if (this.namechars.indexOf(initial) !== -1) {
                if (this.callback(Sk.Tokenizer.Tokens.T_NAME, token, spos, epos, line)) {
                    return 'done';
                }
            }
            else if (initial === '\\') {
                //print("HERE:4");
                if (this.callback(Sk.Tokenizer.Tokens.T_NL, token, spos, [this.lnum, pos], line)) {
                    return 'done';
                }
                this.continued = true;
            }
            else {
                if ('([{'.indexOf(initial) !== -1) {
                    this.parenlev += 1;
                }
                else if (')]}'.indexOf(initial) !== -1) {
                    this.parenlev -= 1;
                }
                if (this.callback(Sk.Tokenizer.Tokens.T_OP, token, spos, epos, line)) {
                    return 'done';
                }
            }
        }
        else {
            if (this.callback(Sk.Tokenizer.Tokens.T_ERRORTOKEN, line.charAt(pos),
                [this.lnum, pos], [this.lnum, pos + 1], line)) {
                return 'done';
            }
            pos += 1;
        }
    }

    return false;
};

Sk.Tokenizer.tokenNames = {
    0  : 'T_ENDMARKER', 1: 'T_NAME', 2: 'T_NUMBER', 3: 'T_STRING', 4: 'T_NEWLINE',
    5  : 'T_INDENT', 6: 'T_DEDENT', 7: 'T_LPAR', 8: 'T_RPAR', 9: 'T_LSQB',
    10 : 'T_RSQB', 11: 'T_COLON', 12: 'T_COMMA', 13: 'T_SEMI', 14: 'T_PLUS',
    15 : 'T_MINUS', 16: 'T_STAR', 17: 'T_SLASH', 18: 'T_VBAR', 19: 'T_AMPER',
    20 : 'T_LESS', 21: 'T_GREATER', 22: 'T_EQUAL', 23: 'T_DOT', 24: 'T_PERCENT',
    25 : 'T_BACKQUOTE', 26: 'T_LBRACE', 27: 'T_RBRACE', 28: 'T_EQEQUAL', 29: 'T_NOTEQUAL',
    30 : 'T_LESSEQUAL', 31: 'T_GREATEREQUAL', 32: 'T_TILDE', 33: 'T_CIRCUMFLEX', 34: 'T_LEFTSHIFT',
    35 : 'T_RIGHTSHIFT', 36: 'T_DOUBLESTAR', 37: 'T_PLUSEQUAL', 38: 'T_MINEQUAL', 39: 'T_STAREQUAL',
    40 : 'T_SLASHEQUAL', 41: 'T_PERCENTEQUAL', 42: 'T_AMPEREQUAL', 43: 'T_VBAREQUAL', 44: 'T_CIRCUMFLEXEQUAL',
    45 : 'T_LEFTSHIFTEQUAL', 46: 'T_RIGHTSHIFTEQUAL', 47: 'T_DOUBLESTAREQUAL', 48: 'T_DOUBLESLASH', 49: 'T_DOUBLESLASHEQUAL',
    50 : 'T_AT', 51: 'T_OP', 52: 'T_COMMENT', 53: 'T_NL', 54: 'T_RARROW',
    55 : 'T_ERRORTOKEN', 56: 'T_N_TOKENS',
    256: 'T_NT_OFFSET'
};

Sk.exportSymbol("Sk.Tokenizer", Sk.Tokenizer);
Sk.exportSymbol("Sk.Tokenizer.prototype.generateTokens", Sk.Tokenizer.prototype.generateTokens);
Sk.exportSymbol("Sk.Tokenizer.tokenNames", Sk.Tokenizer.tokenNames);
// generated by pgen/main.py
Sk.OpMap = {
"(": Sk.Tokenizer.Tokens.T_LPAR,
")": Sk.Tokenizer.Tokens.T_RPAR,
"[": Sk.Tokenizer.Tokens.T_LSQB,
"]": Sk.Tokenizer.Tokens.T_RSQB,
":": Sk.Tokenizer.Tokens.T_COLON,
",": Sk.Tokenizer.Tokens.T_COMMA,
";": Sk.Tokenizer.Tokens.T_SEMI,
"+": Sk.Tokenizer.Tokens.T_PLUS,
"-": Sk.Tokenizer.Tokens.T_MINUS,
"*": Sk.Tokenizer.Tokens.T_STAR,
"/": Sk.Tokenizer.Tokens.T_SLASH,
"|": Sk.Tokenizer.Tokens.T_VBAR,
"&": Sk.Tokenizer.Tokens.T_AMPER,
"<": Sk.Tokenizer.Tokens.T_LESS,
">": Sk.Tokenizer.Tokens.T_GREATER,
"=": Sk.Tokenizer.Tokens.T_EQUAL,
".": Sk.Tokenizer.Tokens.T_DOT,
"%": Sk.Tokenizer.Tokens.T_PERCENT,
"`": Sk.Tokenizer.Tokens.T_BACKQUOTE,
"{": Sk.Tokenizer.Tokens.T_LBRACE,
"}": Sk.Tokenizer.Tokens.T_RBRACE,
"@": Sk.Tokenizer.Tokens.T_AT,
"==": Sk.Tokenizer.Tokens.T_EQEQUAL,
"!=": Sk.Tokenizer.Tokens.T_NOTEQUAL,
"<>": Sk.Tokenizer.Tokens.T_NOTEQUAL,
"<=": Sk.Tokenizer.Tokens.T_LESSEQUAL,
">=": Sk.Tokenizer.Tokens.T_GREATEREQUAL,
"~": Sk.Tokenizer.Tokens.T_TILDE,
"^": Sk.Tokenizer.Tokens.T_CIRCUMFLEX,
"<<": Sk.Tokenizer.Tokens.T_LEFTSHIFT,
">>": Sk.Tokenizer.Tokens.T_RIGHTSHIFT,
"**": Sk.Tokenizer.Tokens.T_DOUBLESTAR,
"+=": Sk.Tokenizer.Tokens.T_PLUSEQUAL,
"-=": Sk.Tokenizer.Tokens.T_MINEQUAL,
"*=": Sk.Tokenizer.Tokens.T_STAREQUAL,
"/=": Sk.Tokenizer.Tokens.T_SLASHEQUAL,
"%=": Sk.Tokenizer.Tokens.T_PERCENTEQUAL,
"&=": Sk.Tokenizer.Tokens.T_AMPEREQUAL,
"|=": Sk.Tokenizer.Tokens.T_VBAREQUAL,
"^=": Sk.Tokenizer.Tokens.T_CIRCUMFLEXEQUAL,
"<<=": Sk.Tokenizer.Tokens.T_LEFTSHIFTEQUAL,
">>=": Sk.Tokenizer.Tokens.T_RIGHTSHIFTEQUAL,
"**=": Sk.Tokenizer.Tokens.T_DOUBLESTAREQUAL,
"//": Sk.Tokenizer.Tokens.T_DOUBLESLASH,
"//=": Sk.Tokenizer.Tokens.T_DOUBLESLASHEQUAL,
"->": Sk.Tokenizer.Tokens.T_RARROW
};
Sk.ParseTables = {
sym:
{and_expr: 257,
 and_test: 258,
 arglist: 259,
 argument: 260,
 arith_expr: 261,
 assert_stmt: 262,
 atom: 263,
 augassign: 264,
 break_stmt: 265,
 classdef: 266,
 comp_for: 267,
 comp_if: 268,
 comp_iter: 269,
 comp_op: 270,
 comparison: 271,
 compound_stmt: 272,
 continue_stmt: 273,
 debugger_stmt: 274,
 decorated: 275,
 decorator: 276,
 decorators: 277,
 del_stmt: 278,
 dictorsetmaker: 279,
 dotted_as_name: 280,
 dotted_as_names: 281,
 dotted_name: 282,
 encoding_decl: 283,
 eval_input: 284,
 except_clause: 285,
 exec_stmt: 286,
 expr: 287,
 expr_stmt: 288,
 exprlist: 289,
 factor: 290,
 file_input: 291,
 flow_stmt: 292,
 for_stmt: 293,
 fpdef: 294,
 fplist: 295,
 funcdef: 296,
 global_stmt: 297,
 if_stmt: 298,
 import_as_name: 299,
 import_as_names: 300,
 import_from: 301,
 import_name: 302,
 import_stmt: 303,
 lambdef: 304,
 list_for: 305,
 list_if: 306,
 list_iter: 307,
 listmaker: 308,
 not_test: 309,
 old_lambdef: 310,
 old_test: 311,
 or_test: 312,
 parameters: 313,
 pass_stmt: 314,
 power: 315,
 print_stmt: 316,
 raise_stmt: 317,
 return_stmt: 318,
 shift_expr: 319,
 simple_stmt: 320,
 single_input: 256,
 sliceop: 321,
 small_stmt: 322,
 stmt: 323,
 subscript: 324,
 subscriptlist: 325,
 suite: 326,
 term: 327,
 test: 328,
 testlist: 329,
 testlist1: 330,
 testlist_comp: 331,
 testlist_safe: 332,
 trailer: 333,
 try_stmt: 334,
 varargslist: 335,
 while_stmt: 336,
 with_item: 337,
 with_stmt: 338,
 xor_expr: 339,
 yield_expr: 340,
 yield_stmt: 341},
number2symbol:
{256: 'single_input',
 257: 'and_expr',
 258: 'and_test',
 259: 'arglist',
 260: 'argument',
 261: 'arith_expr',
 262: 'assert_stmt',
 263: 'atom',
 264: 'augassign',
 265: 'break_stmt',
 266: 'classdef',
 267: 'comp_for',
 268: 'comp_if',
 269: 'comp_iter',
 270: 'comp_op',
 271: 'comparison',
 272: 'compound_stmt',
 273: 'continue_stmt',
 274: 'debugger_stmt',
 275: 'decorated',
 276: 'decorator',
 277: 'decorators',
 278: 'del_stmt',
 279: 'dictorsetmaker',
 280: 'dotted_as_name',
 281: 'dotted_as_names',
 282: 'dotted_name',
 283: 'encoding_decl',
 284: 'eval_input',
 285: 'except_clause',
 286: 'exec_stmt',
 287: 'expr',
 288: 'expr_stmt',
 289: 'exprlist',
 290: 'factor',
 291: 'file_input',
 292: 'flow_stmt',
 293: 'for_stmt',
 294: 'fpdef',
 295: 'fplist',
 296: 'funcdef',
 297: 'global_stmt',
 298: 'if_stmt',
 299: 'import_as_name',
 300: 'import_as_names',
 301: 'import_from',
 302: 'import_name',
 303: 'import_stmt',
 304: 'lambdef',
 305: 'list_for',
 306: 'list_if',
 307: 'list_iter',
 308: 'listmaker',
 309: 'not_test',
 310: 'old_lambdef',
 311: 'old_test',
 312: 'or_test',
 313: 'parameters',
 314: 'pass_stmt',
 315: 'power',
 316: 'print_stmt',
 317: 'raise_stmt',
 318: 'return_stmt',
 319: 'shift_expr',
 320: 'simple_stmt',
 321: 'sliceop',
 322: 'small_stmt',
 323: 'stmt',
 324: 'subscript',
 325: 'subscriptlist',
 326: 'suite',
 327: 'term',
 328: 'test',
 329: 'testlist',
 330: 'testlist1',
 331: 'testlist_comp',
 332: 'testlist_safe',
 333: 'trailer',
 334: 'try_stmt',
 335: 'varargslist',
 336: 'while_stmt',
 337: 'with_item',
 338: 'with_stmt',
 339: 'xor_expr',
 340: 'yield_expr',
 341: 'yield_stmt'},
dfas:
{256: [[[[1, 1], [2, 1], [3, 2]], [[0, 1]], [[2, 1]]],
       {2: 1,
        4: 1,
        5: 1,
        6: 1,
        7: 1,
        8: 1,
        9: 1,
        10: 1,
        11: 1,
        12: 1,
        13: 1,
        14: 1,
        15: 1,
        16: 1,
        17: 1,
        18: 1,
        19: 1,
        20: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        25: 1,
        26: 1,
        27: 1,
        28: 1,
        29: 1,
        30: 1,
        31: 1,
        32: 1,
        33: 1,
        34: 1,
        35: 1,
        36: 1,
        37: 1}],
 257: [[[[38, 1]], [[39, 0], [0, 1]]],
       {6: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1}],
 258: [[[[40, 1]], [[41, 0], [0, 1]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        14: 1,
        15: 1,
        19: 1,
        22: 1,
        26: 1,
        30: 1,
        37: 1}],
 259: [[[[42, 1], [43, 2], [44, 3]],
        [[45, 4]],
        [[46, 5], [0, 2]],
        [[45, 6]],
        [[46, 7], [0, 4]],
        [[42, 1], [43, 2], [44, 3], [0, 5]],
        [[0, 6]],
        [[43, 4], [44, 3]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        15: 1,
        19: 1,
        22: 1,
        26: 1,
        30: 1,
        37: 1,
        42: 1,
        44: 1}],
 260: [[[[45, 1]], [[47, 2], [48, 3], [0, 1]], [[45, 3]], [[0, 3]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        15: 1,
        19: 1,
        22: 1,
        26: 1,
        30: 1,
        37: 1}],
 261: [[[[49, 1]], [[26, 0], [37, 0], [0, 1]]],
       {6: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1}],
 262: [[[[21, 1]], [[45, 2]], [[46, 3], [0, 2]], [[45, 4]], [[0, 4]]],
       {21: 1}],
 263: [[[[19, 1], [8, 2], [9, 5], [30, 4], [14, 3], [15, 6], [22, 2]],
        [[19, 1], [0, 1]],
        [[0, 2]],
        [[50, 7], [51, 2]],
        [[52, 2], [53, 8], [54, 8]],
        [[55, 2], [56, 9]],
        [[57, 10]],
        [[51, 2]],
        [[52, 2]],
        [[55, 2]],
        [[15, 2]]],
       {8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 30: 1}],
 264: [[[[58, 1],
         [59, 1],
         [60, 1],
         [61, 1],
         [62, 1],
         [63, 1],
         [64, 1],
         [65, 1],
         [66, 1],
         [67, 1],
         [68, 1],
         [69, 1]],
        [[0, 1]]],
       {58: 1,
        59: 1,
        60: 1,
        61: 1,
        62: 1,
        63: 1,
        64: 1,
        65: 1,
        66: 1,
        67: 1,
        68: 1,
        69: 1}],
 265: [[[[33, 1]], [[0, 1]]], {33: 1}],
 266: [[[[10, 1]],
        [[22, 2]],
        [[70, 3], [30, 4]],
        [[71, 5]],
        [[52, 6], [72, 7]],
        [[0, 5]],
        [[70, 3]],
        [[52, 6]]],
       {10: 1}],
 267: [[[[29, 1]],
        [[73, 2]],
        [[74, 3]],
        [[75, 4]],
        [[76, 5], [0, 4]],
        [[0, 5]]],
       {29: 1}],
 268: [[[[32, 1]], [[77, 2]], [[76, 3], [0, 2]], [[0, 3]]], {32: 1}],
 269: [[[[78, 1], [48, 1]], [[0, 1]]], {29: 1, 32: 1}],
 270: [[[[79, 1],
         [80, 1],
         [7, 2],
         [81, 1],
         [79, 1],
         [74, 1],
         [82, 1],
         [83, 3],
         [84, 1],
         [85, 1]],
        [[0, 1]],
        [[74, 1]],
        [[7, 1], [0, 3]]],
       {7: 1, 74: 1, 79: 1, 80: 1, 81: 1, 82: 1, 83: 1, 84: 1, 85: 1}],
 271: [[[[86, 1]], [[87, 0], [0, 1]]],
       {6: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1}],
 272: [[[[88, 1],
         [89, 1],
         [90, 1],
         [91, 1],
         [92, 1],
         [93, 1],
         [94, 1],
         [95, 1]],
        [[0, 1]]],
       {4: 1, 10: 1, 16: 1, 18: 1, 29: 1, 32: 1, 35: 1, 36: 1}],
 273: [[[[34, 1]], [[0, 1]]], {34: 1}],
 274: [[[[13, 1]], [[0, 1]]], {13: 1}],
 275: [[[[96, 1]], [[94, 2], [91, 2]], [[0, 2]]], {35: 1}],
 276: [[[[35, 1]],
        [[97, 2]],
        [[2, 4], [30, 3]],
        [[52, 5], [98, 6]],
        [[0, 4]],
        [[2, 4]],
        [[52, 5]]],
       {35: 1}],
 277: [[[[99, 1]], [[99, 1], [0, 1]]], {35: 1}],
 278: [[[[23, 1]], [[73, 2]], [[0, 2]]], {23: 1}],
 279: [[[[45, 1]],
        [[70, 2], [48, 3], [46, 4], [0, 1]],
        [[45, 5]],
        [[0, 3]],
        [[45, 6], [0, 4]],
        [[48, 3], [46, 7], [0, 5]],
        [[46, 4], [0, 6]],
        [[45, 8], [0, 7]],
        [[70, 9]],
        [[45, 10]],
        [[46, 7], [0, 10]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        15: 1,
        19: 1,
        22: 1,
        26: 1,
        30: 1,
        37: 1}],
 280: [[[[97, 1]], [[100, 2], [0, 1]], [[22, 3]], [[0, 3]]], {22: 1}],
 281: [[[[101, 1]], [[46, 0], [0, 1]]], {22: 1}],
 282: [[[[22, 1]], [[102, 0], [0, 1]]], {22: 1}],
 283: [[[[22, 1]], [[0, 1]]], {22: 1}],
 284: [[[[72, 1]], [[2, 1], [103, 2]], [[0, 2]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        15: 1,
        19: 1,
        22: 1,
        26: 1,
        30: 1,
        37: 1}],
 285: [[[[104, 1]],
        [[45, 2], [0, 1]],
        [[100, 3], [46, 3], [0, 2]],
        [[45, 4]],
        [[0, 4]]],
       {104: 1}],
 286: [[[[17, 1]],
        [[86, 2]],
        [[74, 3], [0, 2]],
        [[45, 4]],
        [[46, 5], [0, 4]],
        [[45, 6]],
        [[0, 6]]],
       {17: 1}],
 287: [[[[105, 1]], [[106, 0], [0, 1]]],
       {6: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1}],
 288: [[[[72, 1]],
        [[107, 2], [47, 3], [0, 1]],
        [[72, 4], [53, 4]],
        [[72, 5], [53, 5]],
        [[0, 4]],
        [[47, 3], [0, 5]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        15: 1,
        19: 1,
        22: 1,
        26: 1,
        30: 1,
        37: 1}],
 289: [[[[86, 1]], [[46, 2], [0, 1]], [[86, 1], [0, 2]]],
       {6: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1}],
 290: [[[[37, 2], [26, 2], [6, 2], [108, 1]], [[0, 1]], [[109, 1]]],
       {6: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1}],
 291: [[[[2, 0], [103, 1], [110, 0]], [[0, 1]]],
       {2: 1,
        4: 1,
        5: 1,
        6: 1,
        7: 1,
        8: 1,
        9: 1,
        10: 1,
        11: 1,
        12: 1,
        13: 1,
        14: 1,
        15: 1,
        16: 1,
        17: 1,
        18: 1,
        19: 1,
        20: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        25: 1,
        26: 1,
        27: 1,
        28: 1,
        29: 1,
        30: 1,
        31: 1,
        32: 1,
        33: 1,
        34: 1,
        35: 1,
        36: 1,
        37: 1,
        103: 1}],
 292: [[[[111, 1], [112, 1], [113, 1], [114, 1], [115, 1]], [[0, 1]]],
       {5: 1, 20: 1, 27: 1, 33: 1, 34: 1}],
 293: [[[[29, 1]],
        [[73, 2]],
        [[74, 3]],
        [[72, 4]],
        [[70, 5]],
        [[71, 6]],
        [[116, 7], [0, 6]],
        [[70, 8]],
        [[71, 9]],
        [[0, 9]]],
       {29: 1}],
 294: [[[[30, 1], [22, 2]], [[117, 3]], [[0, 2]], [[52, 2]]], {22: 1, 30: 1}],
 295: [[[[118, 1]], [[46, 2], [0, 1]], [[118, 1], [0, 2]]], {22: 1, 30: 1}],
 296: [[[[4, 1]], [[22, 2]], [[119, 3]], [[70, 4]], [[71, 5]], [[0, 5]]],
       {4: 1}],
 297: [[[[28, 1]], [[22, 2]], [[46, 1], [0, 2]]], {28: 1}],
 298: [[[[32, 1]],
        [[45, 2]],
        [[70, 3]],
        [[71, 4]],
        [[116, 5], [120, 1], [0, 4]],
        [[70, 6]],
        [[71, 7]],
        [[0, 7]]],
       {32: 1}],
 299: [[[[22, 1]], [[100, 2], [0, 1]], [[22, 3]], [[0, 3]]], {22: 1}],
 300: [[[[121, 1]], [[46, 2], [0, 1]], [[121, 1], [0, 2]]], {22: 1}],
 301: [[[[31, 1]],
        [[97, 2], [102, 3]],
        [[25, 4]],
        [[97, 2], [25, 4], [102, 3]],
        [[122, 5], [42, 5], [30, 6]],
        [[0, 5]],
        [[122, 7]],
        [[52, 5]]],
       {31: 1}],
 302: [[[[25, 1]], [[123, 2]], [[0, 2]]], {25: 1}],
 303: [[[[124, 1], [125, 1]], [[0, 1]]], {25: 1, 31: 1}],
 304: [[[[11, 1]], [[70, 2], [126, 3]], [[45, 4]], [[70, 2]], [[0, 4]]],
       {11: 1}],
 305: [[[[29, 1]],
        [[73, 2]],
        [[74, 3]],
        [[127, 4]],
        [[128, 5], [0, 4]],
        [[0, 5]]],
       {29: 1}],
 306: [[[[32, 1]], [[77, 2]], [[128, 3], [0, 2]], [[0, 3]]], {32: 1}],
 307: [[[[129, 1], [130, 1]], [[0, 1]]], {29: 1, 32: 1}],
 308: [[[[45, 1]],
        [[129, 2], [46, 3], [0, 1]],
        [[0, 2]],
        [[45, 4], [0, 3]],
        [[46, 3], [0, 4]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        15: 1,
        19: 1,
        22: 1,
        26: 1,
        30: 1,
        37: 1}],
 309: [[[[7, 1], [131, 2]], [[40, 2]], [[0, 2]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        14: 1,
        15: 1,
        19: 1,
        22: 1,
        26: 1,
        30: 1,
        37: 1}],
 310: [[[[11, 1]], [[70, 2], [126, 3]], [[77, 4]], [[70, 2]], [[0, 4]]],
       {11: 1}],
 311: [[[[132, 1], [75, 1]], [[0, 1]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        15: 1,
        19: 1,
        22: 1,
        26: 1,
        30: 1,
        37: 1}],
 312: [[[[133, 1]], [[134, 0], [0, 1]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        14: 1,
        15: 1,
        19: 1,
        22: 1,
        26: 1,
        30: 1,
        37: 1}],
 313: [[[[30, 1]], [[52, 2], [126, 3]], [[0, 2]], [[52, 2]]], {30: 1}],
 314: [[[[24, 1]], [[0, 1]]], {24: 1}],
 315: [[[[135, 1]], [[44, 2], [136, 1], [0, 1]], [[109, 3]], [[0, 3]]],
       {8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 30: 1}],
 316: [[[[12, 1]],
        [[45, 2], [137, 3], [0, 1]],
        [[46, 4], [0, 2]],
        [[45, 5]],
        [[45, 2], [0, 4]],
        [[46, 6], [0, 5]],
        [[45, 7]],
        [[46, 8], [0, 7]],
        [[45, 7], [0, 8]]],
       {12: 1}],
 317: [[[[5, 1]],
        [[45, 2], [0, 1]],
        [[46, 3], [0, 2]],
        [[45, 4]],
        [[46, 5], [0, 4]],
        [[45, 6]],
        [[0, 6]]],
       {5: 1}],
 318: [[[[20, 1]], [[72, 2], [0, 1]], [[0, 2]]], {20: 1}],
 319: [[[[138, 1]], [[139, 0], [137, 0], [0, 1]]],
       {6: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1}],
 320: [[[[140, 1]], [[2, 2], [141, 3]], [[0, 2]], [[140, 1], [2, 2]]],
       {5: 1,
        6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        12: 1,
        13: 1,
        14: 1,
        15: 1,
        17: 1,
        19: 1,
        20: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        25: 1,
        26: 1,
        27: 1,
        28: 1,
        30: 1,
        31: 1,
        33: 1,
        34: 1,
        37: 1}],
 321: [[[[70, 1]], [[45, 2], [0, 1]], [[0, 2]]], {70: 1}],
 322: [[[[142, 1],
         [143, 1],
         [144, 1],
         [145, 1],
         [146, 1],
         [147, 1],
         [148, 1],
         [149, 1],
         [150, 1],
         [151, 1]],
        [[0, 1]]],
       {5: 1,
        6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        12: 1,
        13: 1,
        14: 1,
        15: 1,
        17: 1,
        19: 1,
        20: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        25: 1,
        26: 1,
        27: 1,
        28: 1,
        30: 1,
        31: 1,
        33: 1,
        34: 1,
        37: 1}],
 323: [[[[1, 1], [3, 1]], [[0, 1]]],
       {4: 1,
        5: 1,
        6: 1,
        7: 1,
        8: 1,
        9: 1,
        10: 1,
        11: 1,
        12: 1,
        13: 1,
        14: 1,
        15: 1,
        16: 1,
        17: 1,
        18: 1,
        19: 1,
        20: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        25: 1,
        26: 1,
        27: 1,
        28: 1,
        29: 1,
        30: 1,
        31: 1,
        32: 1,
        33: 1,
        34: 1,
        35: 1,
        36: 1,
        37: 1}],
 324: [[[[45, 1], [70, 2], [102, 3]],
        [[70, 2], [0, 1]],
        [[45, 4], [152, 5], [0, 2]],
        [[102, 6]],
        [[152, 5], [0, 4]],
        [[0, 5]],
        [[102, 5]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        15: 1,
        19: 1,
        22: 1,
        26: 1,
        30: 1,
        37: 1,
        70: 1,
        102: 1}],
 325: [[[[153, 1]], [[46, 2], [0, 1]], [[153, 1], [0, 2]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        15: 1,
        19: 1,
        22: 1,
        26: 1,
        30: 1,
        37: 1,
        70: 1,
        102: 1}],
 326: [[[[1, 1], [2, 2]],
        [[0, 1]],
        [[154, 3]],
        [[110, 4]],
        [[155, 1], [110, 4]]],
       {2: 1,
        5: 1,
        6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        12: 1,
        13: 1,
        14: 1,
        15: 1,
        17: 1,
        19: 1,
        20: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        25: 1,
        26: 1,
        27: 1,
        28: 1,
        30: 1,
        31: 1,
        33: 1,
        34: 1,
        37: 1}],
 327: [[[[109, 1]], [[156, 0], [42, 0], [157, 0], [158, 0], [0, 1]]],
       {6: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1}],
 328: [[[[75, 1], [159, 2]],
        [[32, 3], [0, 1]],
        [[0, 2]],
        [[75, 4]],
        [[116, 5]],
        [[45, 2]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        15: 1,
        19: 1,
        22: 1,
        26: 1,
        30: 1,
        37: 1}],
 329: [[[[45, 1]], [[46, 2], [0, 1]], [[45, 1], [0, 2]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        15: 1,
        19: 1,
        22: 1,
        26: 1,
        30: 1,
        37: 1}],
 330: [[[[45, 1]], [[46, 0], [0, 1]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        15: 1,
        19: 1,
        22: 1,
        26: 1,
        30: 1,
        37: 1}],
 331: [[[[45, 1]],
        [[48, 2], [46, 3], [0, 1]],
        [[0, 2]],
        [[45, 4], [0, 3]],
        [[46, 3], [0, 4]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        15: 1,
        19: 1,
        22: 1,
        26: 1,
        30: 1,
        37: 1}],
 332: [[[[77, 1]],
        [[46, 2], [0, 1]],
        [[77, 3]],
        [[46, 4], [0, 3]],
        [[77, 3], [0, 4]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        15: 1,
        19: 1,
        22: 1,
        26: 1,
        30: 1,
        37: 1}],
 333: [[[[30, 1], [102, 2], [14, 3]],
        [[52, 4], [98, 5]],
        [[22, 4]],
        [[160, 6]],
        [[0, 4]],
        [[52, 4]],
        [[51, 4]]],
       {14: 1, 30: 1, 102: 1}],
 334: [[[[16, 1]],
        [[70, 2]],
        [[71, 3]],
        [[161, 4], [162, 5]],
        [[70, 6]],
        [[70, 7]],
        [[71, 8]],
        [[71, 9]],
        [[161, 4], [116, 10], [162, 5], [0, 8]],
        [[0, 9]],
        [[70, 11]],
        [[71, 12]],
        [[162, 5], [0, 12]]],
       {16: 1}],
 335: [[[[42, 1], [118, 2], [44, 3]],
        [[22, 4]],
        [[47, 5], [46, 6], [0, 2]],
        [[22, 7]],
        [[46, 8], [0, 4]],
        [[45, 9]],
        [[42, 1], [118, 2], [44, 3], [0, 6]],
        [[0, 7]],
        [[44, 3]],
        [[46, 6], [0, 9]]],
       {22: 1, 30: 1, 42: 1, 44: 1}],
 336: [[[[18, 1]],
        [[45, 2]],
        [[70, 3]],
        [[71, 4]],
        [[116, 5], [0, 4]],
        [[70, 6]],
        [[71, 7]],
        [[0, 7]]],
       {18: 1}],
 337: [[[[45, 1]], [[100, 2], [0, 1]], [[86, 3]], [[0, 3]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        15: 1,
        19: 1,
        22: 1,
        26: 1,
        30: 1,
        37: 1}],
 338: [[[[36, 1]], [[163, 2]], [[70, 3], [46, 1]], [[71, 4]], [[0, 4]]],
       {36: 1}],
 339: [[[[164, 1]], [[165, 0], [0, 1]]],
       {6: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1}],
 340: [[[[27, 1]], [[72, 2], [0, 1]], [[0, 2]]], {27: 1}],
 341: [[[[53, 1]], [[0, 1]]], {27: 1}]},
states:
[[[[1, 1], [2, 1], [3, 2]], [[0, 1]], [[2, 1]]],
 [[[38, 1]], [[39, 0], [0, 1]]],
 [[[40, 1]], [[41, 0], [0, 1]]],
 [[[42, 1], [43, 2], [44, 3]],
  [[45, 4]],
  [[46, 5], [0, 2]],
  [[45, 6]],
  [[46, 7], [0, 4]],
  [[42, 1], [43, 2], [44, 3], [0, 5]],
  [[0, 6]],
  [[43, 4], [44, 3]]],
 [[[45, 1]], [[47, 2], [48, 3], [0, 1]], [[45, 3]], [[0, 3]]],
 [[[49, 1]], [[26, 0], [37, 0], [0, 1]]],
 [[[21, 1]], [[45, 2]], [[46, 3], [0, 2]], [[45, 4]], [[0, 4]]],
 [[[19, 1], [8, 2], [9, 5], [30, 4], [14, 3], [15, 6], [22, 2]],
  [[19, 1], [0, 1]],
  [[0, 2]],
  [[50, 7], [51, 2]],
  [[52, 2], [53, 8], [54, 8]],
  [[55, 2], [56, 9]],
  [[57, 10]],
  [[51, 2]],
  [[52, 2]],
  [[55, 2]],
  [[15, 2]]],
 [[[58, 1],
   [59, 1],
   [60, 1],
   [61, 1],
   [62, 1],
   [63, 1],
   [64, 1],
   [65, 1],
   [66, 1],
   [67, 1],
   [68, 1],
   [69, 1]],
  [[0, 1]]],
 [[[33, 1]], [[0, 1]]],
 [[[10, 1]],
  [[22, 2]],
  [[70, 3], [30, 4]],
  [[71, 5]],
  [[52, 6], [72, 7]],
  [[0, 5]],
  [[70, 3]],
  [[52, 6]]],
 [[[29, 1]], [[73, 2]], [[74, 3]], [[75, 4]], [[76, 5], [0, 4]], [[0, 5]]],
 [[[32, 1]], [[77, 2]], [[76, 3], [0, 2]], [[0, 3]]],
 [[[78, 1], [48, 1]], [[0, 1]]],
 [[[79, 1],
   [80, 1],
   [7, 2],
   [81, 1],
   [79, 1],
   [74, 1],
   [82, 1],
   [83, 3],
   [84, 1],
   [85, 1]],
  [[0, 1]],
  [[74, 1]],
  [[7, 1], [0, 3]]],
 [[[86, 1]], [[87, 0], [0, 1]]],
 [[[88, 1], [89, 1], [90, 1], [91, 1], [92, 1], [93, 1], [94, 1], [95, 1]],
  [[0, 1]]],
 [[[34, 1]], [[0, 1]]],
 [[[13, 1]], [[0, 1]]],
 [[[96, 1]], [[94, 2], [91, 2]], [[0, 2]]],
 [[[35, 1]],
  [[97, 2]],
  [[2, 4], [30, 3]],
  [[52, 5], [98, 6]],
  [[0, 4]],
  [[2, 4]],
  [[52, 5]]],
 [[[99, 1]], [[99, 1], [0, 1]]],
 [[[23, 1]], [[73, 2]], [[0, 2]]],
 [[[45, 1]],
  [[70, 2], [48, 3], [46, 4], [0, 1]],
  [[45, 5]],
  [[0, 3]],
  [[45, 6], [0, 4]],
  [[48, 3], [46, 7], [0, 5]],
  [[46, 4], [0, 6]],
  [[45, 8], [0, 7]],
  [[70, 9]],
  [[45, 10]],
  [[46, 7], [0, 10]]],
 [[[97, 1]], [[100, 2], [0, 1]], [[22, 3]], [[0, 3]]],
 [[[101, 1]], [[46, 0], [0, 1]]],
 [[[22, 1]], [[102, 0], [0, 1]]],
 [[[22, 1]], [[0, 1]]],
 [[[72, 1]], [[2, 1], [103, 2]], [[0, 2]]],
 [[[104, 1]],
  [[45, 2], [0, 1]],
  [[100, 3], [46, 3], [0, 2]],
  [[45, 4]],
  [[0, 4]]],
 [[[17, 1]],
  [[86, 2]],
  [[74, 3], [0, 2]],
  [[45, 4]],
  [[46, 5], [0, 4]],
  [[45, 6]],
  [[0, 6]]],
 [[[105, 1]], [[106, 0], [0, 1]]],
 [[[72, 1]],
  [[107, 2], [47, 3], [0, 1]],
  [[72, 4], [53, 4]],
  [[72, 5], [53, 5]],
  [[0, 4]],
  [[47, 3], [0, 5]]],
 [[[86, 1]], [[46, 2], [0, 1]], [[86, 1], [0, 2]]],
 [[[37, 2], [26, 2], [6, 2], [108, 1]], [[0, 1]], [[109, 1]]],
 [[[2, 0], [103, 1], [110, 0]], [[0, 1]]],
 [[[111, 1], [112, 1], [113, 1], [114, 1], [115, 1]], [[0, 1]]],
 [[[29, 1]],
  [[73, 2]],
  [[74, 3]],
  [[72, 4]],
  [[70, 5]],
  [[71, 6]],
  [[116, 7], [0, 6]],
  [[70, 8]],
  [[71, 9]],
  [[0, 9]]],
 [[[30, 1], [22, 2]], [[117, 3]], [[0, 2]], [[52, 2]]],
 [[[118, 1]], [[46, 2], [0, 1]], [[118, 1], [0, 2]]],
 [[[4, 1]], [[22, 2]], [[119, 3]], [[70, 4]], [[71, 5]], [[0, 5]]],
 [[[28, 1]], [[22, 2]], [[46, 1], [0, 2]]],
 [[[32, 1]],
  [[45, 2]],
  [[70, 3]],
  [[71, 4]],
  [[116, 5], [120, 1], [0, 4]],
  [[70, 6]],
  [[71, 7]],
  [[0, 7]]],
 [[[22, 1]], [[100, 2], [0, 1]], [[22, 3]], [[0, 3]]],
 [[[121, 1]], [[46, 2], [0, 1]], [[121, 1], [0, 2]]],
 [[[31, 1]],
  [[97, 2], [102, 3]],
  [[25, 4]],
  [[97, 2], [25, 4], [102, 3]],
  [[122, 5], [42, 5], [30, 6]],
  [[0, 5]],
  [[122, 7]],
  [[52, 5]]],
 [[[25, 1]], [[123, 2]], [[0, 2]]],
 [[[124, 1], [125, 1]], [[0, 1]]],
 [[[11, 1]], [[70, 2], [126, 3]], [[45, 4]], [[70, 2]], [[0, 4]]],
 [[[29, 1]], [[73, 2]], [[74, 3]], [[127, 4]], [[128, 5], [0, 4]], [[0, 5]]],
 [[[32, 1]], [[77, 2]], [[128, 3], [0, 2]], [[0, 3]]],
 [[[129, 1], [130, 1]], [[0, 1]]],
 [[[45, 1]],
  [[129, 2], [46, 3], [0, 1]],
  [[0, 2]],
  [[45, 4], [0, 3]],
  [[46, 3], [0, 4]]],
 [[[7, 1], [131, 2]], [[40, 2]], [[0, 2]]],
 [[[11, 1]], [[70, 2], [126, 3]], [[77, 4]], [[70, 2]], [[0, 4]]],
 [[[132, 1], [75, 1]], [[0, 1]]],
 [[[133, 1]], [[134, 0], [0, 1]]],
 [[[30, 1]], [[52, 2], [126, 3]], [[0, 2]], [[52, 2]]],
 [[[24, 1]], [[0, 1]]],
 [[[135, 1]], [[44, 2], [136, 1], [0, 1]], [[109, 3]], [[0, 3]]],
 [[[12, 1]],
  [[45, 2], [137, 3], [0, 1]],
  [[46, 4], [0, 2]],
  [[45, 5]],
  [[45, 2], [0, 4]],
  [[46, 6], [0, 5]],
  [[45, 7]],
  [[46, 8], [0, 7]],
  [[45, 7], [0, 8]]],
 [[[5, 1]],
  [[45, 2], [0, 1]],
  [[46, 3], [0, 2]],
  [[45, 4]],
  [[46, 5], [0, 4]],
  [[45, 6]],
  [[0, 6]]],
 [[[20, 1]], [[72, 2], [0, 1]], [[0, 2]]],
 [[[138, 1]], [[139, 0], [137, 0], [0, 1]]],
 [[[140, 1]], [[2, 2], [141, 3]], [[0, 2]], [[140, 1], [2, 2]]],
 [[[70, 1]], [[45, 2], [0, 1]], [[0, 2]]],
 [[[142, 1],
   [143, 1],
   [144, 1],
   [145, 1],
   [146, 1],
   [147, 1],
   [148, 1],
   [149, 1],
   [150, 1],
   [151, 1]],
  [[0, 1]]],
 [[[1, 1], [3, 1]], [[0, 1]]],
 [[[45, 1], [70, 2], [102, 3]],
  [[70, 2], [0, 1]],
  [[45, 4], [152, 5], [0, 2]],
  [[102, 6]],
  [[152, 5], [0, 4]],
  [[0, 5]],
  [[102, 5]]],
 [[[153, 1]], [[46, 2], [0, 1]], [[153, 1], [0, 2]]],
 [[[1, 1], [2, 2]], [[0, 1]], [[154, 3]], [[110, 4]], [[155, 1], [110, 4]]],
 [[[109, 1]], [[156, 0], [42, 0], [157, 0], [158, 0], [0, 1]]],
 [[[75, 1], [159, 2]],
  [[32, 3], [0, 1]],
  [[0, 2]],
  [[75, 4]],
  [[116, 5]],
  [[45, 2]]],
 [[[45, 1]], [[46, 2], [0, 1]], [[45, 1], [0, 2]]],
 [[[45, 1]], [[46, 0], [0, 1]]],
 [[[45, 1]],
  [[48, 2], [46, 3], [0, 1]],
  [[0, 2]],
  [[45, 4], [0, 3]],
  [[46, 3], [0, 4]]],
 [[[77, 1]],
  [[46, 2], [0, 1]],
  [[77, 3]],
  [[46, 4], [0, 3]],
  [[77, 3], [0, 4]]],
 [[[30, 1], [102, 2], [14, 3]],
  [[52, 4], [98, 5]],
  [[22, 4]],
  [[160, 6]],
  [[0, 4]],
  [[52, 4]],
  [[51, 4]]],
 [[[16, 1]],
  [[70, 2]],
  [[71, 3]],
  [[161, 4], [162, 5]],
  [[70, 6]],
  [[70, 7]],
  [[71, 8]],
  [[71, 9]],
  [[161, 4], [116, 10], [162, 5], [0, 8]],
  [[0, 9]],
  [[70, 11]],
  [[71, 12]],
  [[162, 5], [0, 12]]],
 [[[42, 1], [118, 2], [44, 3]],
  [[22, 4]],
  [[47, 5], [46, 6], [0, 2]],
  [[22, 7]],
  [[46, 8], [0, 4]],
  [[45, 9]],
  [[42, 1], [118, 2], [44, 3], [0, 6]],
  [[0, 7]],
  [[44, 3]],
  [[46, 6], [0, 9]]],
 [[[18, 1]],
  [[45, 2]],
  [[70, 3]],
  [[71, 4]],
  [[116, 5], [0, 4]],
  [[70, 6]],
  [[71, 7]],
  [[0, 7]]],
 [[[45, 1]], [[100, 2], [0, 1]], [[86, 3]], [[0, 3]]],
 [[[36, 1]], [[163, 2]], [[70, 3], [46, 1]], [[71, 4]], [[0, 4]]],
 [[[164, 1]], [[165, 0], [0, 1]]],
 [[[27, 1]], [[72, 2], [0, 1]], [[0, 2]]],
 [[[53, 1]], [[0, 1]]]],
labels:
[[0, 'EMPTY'],
 [320, null],
 [4, null],
 [272, null],
 [1, 'def'],
 [1, 'raise'],
 [32, null],
 [1, 'not'],
 [2, null],
 [26, null],
 [1, 'class'],
 [1, 'lambda'],
 [1, 'print'],
 [1, 'debugger'],
 [9, null],
 [25, null],
 [1, 'try'],
 [1, 'exec'],
 [1, 'while'],
 [3, null],
 [1, 'return'],
 [1, 'assert'],
 [1, null],
 [1, 'del'],
 [1, 'pass'],
 [1, 'import'],
 [15, null],
 [1, 'yield'],
 [1, 'global'],
 [1, 'for'],
 [7, null],
 [1, 'from'],
 [1, 'if'],
 [1, 'break'],
 [1, 'continue'],
 [50, null],
 [1, 'with'],
 [14, null],
 [319, null],
 [19, null],
 [309, null],
 [1, 'and'],
 [16, null],
 [260, null],
 [36, null],
 [328, null],
 [12, null],
 [22, null],
 [267, null],
 [327, null],
 [308, null],
 [10, null],
 [8, null],
 [340, null],
 [331, null],
 [27, null],
 [279, null],
 [330, null],
 [46, null],
 [39, null],
 [41, null],
 [47, null],
 [42, null],
 [43, null],
 [37, null],
 [44, null],
 [49, null],
 [45, null],
 [38, null],
 [40, null],
 [11, null],
 [326, null],
 [329, null],
 [289, null],
 [1, 'in'],
 [312, null],
 [269, null],
 [311, null],
 [268, null],
 [29, null],
 [21, null],
 [28, null],
 [30, null],
 [1, 'is'],
 [31, null],
 [20, null],
 [287, null],
 [270, null],
 [334, null],
 [298, null],
 [293, null],
 [266, null],
 [338, null],
 [336, null],
 [296, null],
 [275, null],
 [277, null],
 [282, null],
 [259, null],
 [276, null],
 [1, 'as'],
 [280, null],
 [23, null],
 [0, null],
 [1, 'except'],
 [339, null],
 [18, null],
 [264, null],
 [315, null],
 [290, null],
 [323, null],
 [265, null],
 [273, null],
 [317, null],
 [318, null],
 [341, null],
 [1, 'else'],
 [295, null],
 [294, null],
 [313, null],
 [1, 'elif'],
 [299, null],
 [300, null],
 [281, null],
 [302, null],
 [301, null],
 [335, null],
 [332, null],
 [307, null],
 [305, null],
 [306, null],
 [271, null],
 [310, null],
 [258, null],
 [1, 'or'],
 [263, null],
 [333, null],
 [35, null],
 [261, null],
 [34, null],
 [322, null],
 [13, null],
 [292, null],
 [278, null],
 [288, null],
 [314, null],
 [316, null],
 [262, null],
 [286, null],
 [297, null],
 [303, null],
 [274, null],
 [321, null],
 [324, null],
 [5, null],
 [6, null],
 [48, null],
 [17, null],
 [24, null],
 [304, null],
 [325, null],
 [285, null],
 [1, 'finally'],
 [337, null],
 [257, null],
 [33, null]],
keywords:
{'and': 41,
 'as': 100,
 'assert': 21,
 'break': 33,
 'class': 10,
 'continue': 34,
 'debugger': 13,
 'def': 4,
 'del': 23,
 'elif': 120,
 'else': 116,
 'except': 104,
 'exec': 17,
 'finally': 162,
 'for': 29,
 'from': 31,
 'global': 28,
 'if': 32,
 'import': 25,
 'in': 74,
 'is': 83,
 'lambda': 11,
 'not': 7,
 'or': 134,
 'pass': 24,
 'print': 12,
 'raise': 5,
 'return': 20,
 'try': 16,
 'while': 18,
 'with': 36,
 'yield': 27},
tokens:
{0: 103,
 1: 22,
 2: 8,
 3: 19,
 4: 2,
 5: 154,
 6: 155,
 7: 30,
 8: 52,
 9: 14,
 10: 51,
 11: 70,
 12: 46,
 13: 141,
 14: 37,
 15: 26,
 16: 42,
 17: 157,
 18: 106,
 19: 39,
 20: 85,
 21: 80,
 22: 47,
 23: 102,
 24: 158,
 25: 15,
 26: 9,
 27: 55,
 28: 81,
 29: 79,
 30: 82,
 31: 84,
 32: 6,
 33: 165,
 34: 139,
 35: 137,
 36: 44,
 37: 64,
 38: 68,
 39: 59,
 40: 69,
 41: 60,
 42: 62,
 43: 63,
 44: 65,
 45: 67,
 46: 58,
 47: 61,
 48: 156,
 49: 66,
 50: 35},
start: 256
};
// low level parser to a concrete syntax tree, derived from cpython's lib2to3

/**
 *
 * @constructor
 * @param {Object} grammar
 *
 * p = new Parser(grammar);
 * p.setup([start]);
 * foreach input token:
 *     if p.addtoken(...):
 *         break
 * root = p.rootnode
 *
 * can throw SyntaxError
 */
function Parser (filename, grammar) {
    this.filename = filename;
    this.grammar = grammar;
    this.p_flags = 0;
    return this;
}

// all possible parser flags
Parser.FUTURE_PRINT_FUNCTION = "print_function";
Parser.FUTURE_UNICODE_LITERALS = "unicode_literals";
Parser.FUTURE_DIVISION = "division";
Parser.FUTURE_ABSOLUTE_IMPORT = "absolute_import";
Parser.FUTURE_WITH_STATEMENT = "with_statement";
Parser.FUTURE_NESTED_SCOPES = "nested_scopes";
Parser.FUTURE_GENERATORS = "generators";
Parser.CO_FUTURE_PRINT_FUNCTION = 0x10000;
Parser.CO_FUTURE_UNICODE_LITERALS = 0x20000;
Parser.CO_FUTURE_DIVISON = 0x2000;
Parser.CO_FUTURE_ABSOLUTE_IMPORT = 0x4000;
Parser.CO_FUTURE_WITH_STATEMENT = 0x8000;

Parser.prototype.setup = function (start) {
    var stackentry;
    var newnode;
    start = start || this.grammar.start;
    //print("START:"+start);

    newnode =
    {
        type    : start,
        value   : null,
        context : null,
        children: []
    };
    stackentry =
    {
        dfa  : this.grammar.dfas[start],
        state: 0,
        node : newnode
    };
    this.stack = [stackentry];
    this.used_names = {};
};

function findInDfa (a, obj) {
    var i = a.length;
    while (i--) {
        if (a[i][0] === obj[0] && a[i][1] === obj[1]) {
            return true;
        }
    }
    return false;
}


// Add a token; return true if we're done
Parser.prototype.addtoken = function (type, value, context) {
    var errline;
    var itsfirst;
    var itsdfa;
    var state;
    var v;
    var t;
    var newstate;
    var i;
    var a;
    var arcs;
    var first;
    var states;
    var tp;
    var ilabel = this.classify(type, value, context);
    //print("ilabel:"+ilabel);

    OUTERWHILE:
    while (true) {
        tp = this.stack[this.stack.length - 1];
        states = tp.dfa[0];
        first = tp.dfa[1];
        arcs = states[tp.state];

        // look for a state with this label
        for (a = 0; a < arcs.length; ++a) {
            i = arcs[a][0];
            newstate = arcs[a][1];
            t = this.grammar.labels[i][0];
            v = this.grammar.labels[i][1];
            if (ilabel === i) {
                // look it up in the list of labels
                Sk.asserts.assert(t < 256);
                // shift a token; we're done with it
                this.shift(type, value, newstate, context);
                // pop while we are in an accept-only state
                state = newstate;
                //print("before:"+JSON.stringify(states[state]) + ":state:"+state+":"+JSON.stringify(states[state]));
                /* jshint ignore:start */
                while (states[state].length === 1
                    && states[state][0][0] === 0
                    && states[state][0][1] === state) {
                    // states[state] == [(0, state)])
                    this.pop();
                    //print("in after pop:"+JSON.stringify(states[state]) + ":state:"+state+":"+JSON.stringify(states[state]));
                    if (this.stack.length === 0) {
                        // done!
                        return true;
                    }
                    tp = this.stack[this.stack.length - 1];
                    state = tp.state;
                    states = tp.dfa[0];
                    first = tp.dfa[1];
                    //print(JSON.stringify(states), JSON.stringify(first));
                    //print("bottom:"+JSON.stringify(states[state]) + ":state:"+state+":"+JSON.stringify(states[state]));
                }
                /* jshint ignore:end */
                // done with this token
                //print("DONE, return false");
                return false;
            } else if (t >= 256) {
                itsdfa = this.grammar.dfas[t];
                itsfirst = itsdfa[1];
                if (itsfirst.hasOwnProperty(ilabel)) {
                    // push a symbol
                    this.push(t, this.grammar.dfas[t], newstate, context);
                    continue OUTERWHILE;
                }
            }
        }

        //print("findInDfa: " + JSON.stringify(arcs)+" vs. " + tp.state);
        if (findInDfa(arcs, [0, tp.state])) {
            // an accepting state, pop it and try somethign else
            //print("WAA");
            this.pop();
            if (this.stack.length === 0) {
                throw new Sk.builtin.SyntaxError("too much input", this.filename);
            }
        } else {
            // no transition
            errline = context[0][0];
            throw new Sk.builtin.SyntaxError("bad input", this.filename, errline, context);
        }
    }
};

// turn a token into a label
Parser.prototype.classify = function (type, value, context) {
    var ilabel;
    if (type === Sk.Tokenizer.Tokens.T_NAME) {
        this.used_names[value] = true;
        ilabel = this.grammar.keywords.hasOwnProperty(value) && this.grammar.keywords[value];

        /* Check for handling print as an builtin function */
        if(value === "print" && (this.p_flags & Parser.CO_FUTURE_PRINT_FUNCTION || Sk.__future__.print_function === true)) {
            ilabel = false; // ilabel determines if the value is a keyword
        }

        if (ilabel) {
            //print("is keyword");
            return ilabel;
        }
    }
    ilabel = this.grammar.tokens.hasOwnProperty(type) && this.grammar.tokens[type];
    if (!ilabel) {
        // throw new Sk.builtin.SyntaxError("bad token", type, value, context);
        // Questionable modification to put line number in position 2
        // like everywhere else and filename in position 1.
        throw new Sk.builtin.SyntaxError("bad token", this.filename, context[0][0], context);
    }
    return ilabel;
};

// shift a token
Parser.prototype.shift = function (type, value, newstate, context) {
    var dfa = this.stack[this.stack.length - 1].dfa;
    var state = this.stack[this.stack.length - 1].state;
    var node = this.stack[this.stack.length - 1].node;
    //print("context", context);
    var newnode = {
        type      : type,
        value     : value,
        lineno    : context[0][0],         // throwing away end here to match cpython
        col_offset: context[0][1],
        children  : null
    };
    if (newnode) {
        node.children.push(newnode);
    }
    this.stack[this.stack.length - 1] = {
        dfa  : dfa,
        state: newstate,
        node : node
    };
};

// push a nonterminal
Parser.prototype.push = function (type, newdfa, newstate, context) {
    var dfa = this.stack[this.stack.length - 1].dfa;
    var node = this.stack[this.stack.length - 1].node;
    var newnode = {
        type      : type,
        value     : null,
        lineno    : context[0][0],      // throwing away end here to match cpython
        col_offset: context[0][1],
        children  : []
    };
    this.stack[this.stack.length - 1] = {
        dfa  : dfa,
        state: newstate,
        node : node
    };
    this.stack.push({
        dfa  : newdfa,
        state: 0,
        node : newnode
    });
};

//var ac = 0;
//var bc = 0;

// pop a nonterminal
Parser.prototype.pop = function () {
    var node;
    var pop = this.stack.pop();
    var newnode = pop.node;
    //print("POP");
    if (newnode) {
        //print("A", ac++, newnode.type);
        //print("stacklen:"+this.stack.length);
        if (this.stack.length !== 0) {
            //print("B", bc++);
            node = this.stack[this.stack.length - 1].node;
            node.children.push(newnode);
        } else {
            //print("C");
            this.rootnode = newnode;
            this.rootnode.used_names = this.used_names;
        }
    }
};

/**
 * parser for interactive input. returns a function that should be called with
 * lines of input as they are entered. the function will return false
 * until the input is complete, when it will return the rootnode of the parse.
 *
 * @param {string} filename
 * @param {string=} style root of parse tree (optional)
 */
function makeParser (filename, style) {
    var tokenizer;
    var T_OP;
    var T_NL;
    var T_COMMENT;
    var prefix;
    var column;
    var lineno;
    var p;
    if (style === undefined) {
        style = "file_input";
    }
    p = new Parser(filename, Sk.ParseTables);
    // for closure's benefit
    if (style === "file_input") {
        p.setup(Sk.ParseTables.sym.file_input);
    } else {
        Sk.asserts.fail("todo;");
    }
    lineno = 1;
    column = 0;
    prefix = "";
    T_COMMENT = Sk.Tokenizer.Tokens.T_COMMENT;
    T_NL = Sk.Tokenizer.Tokens.T_NL;
    T_OP = Sk.Tokenizer.Tokens.T_OP;
    tokenizer = new Sk.Tokenizer(filename, style === "single_input", function (type, value, start, end, line) {
        var s_lineno = start[0];
        var s_column = start[1];
        /*
         if (s_lineno !== lineno && s_column !== column)
         {
         // todo; update prefix and line/col
         }
         */
        if (type === T_COMMENT || type === T_NL) {
            prefix += value;
            lineno = end[0];
            column = end[1];
            if (value[value.length - 1] === "\n") {
                lineno += 1;
                column = 0;
            }
            //print("  not calling addtoken");
            return undefined;
        }
        if (type === T_OP) {
            type = Sk.OpMap[value];
        }
        if (p.addtoken(type, value, [start, end, line])) {
            return true;
        }
    });

    // create parser function
    var parseFunc = function (line) {
        var ret = tokenizer.generateTokens(line);
        //print("tok:"+ret);
        if (ret) {
            if (ret !== "done") {
                throw new Sk.builtin.SyntaxError("incomplete input", this.filename);
            }
            return p.rootnode;
        }
        return false;
    }.bind(this);

    // set flags, and return
    parseFunc.p_flags = p.p_flags;
    return parseFunc;
}

Sk.parse = function parse (filename, input) {
    var i;
    var ret;
    var lines;
    var parseFunc = makeParser(filename);
    if (input.substr(input.length - 1, 1) !== "\n") {
        input += "\n";
    }
    //print("input:"+input);
    lines = input.split("\n");
    for (i = 0; i < lines.length; ++i) {
        ret = parseFunc(lines[i] + ((i === lines.length - 1) ? "" : "\n"));
    }

    /*
     * Small adjustments here in order to return th flags and the cst
     */
    return {"cst": ret, "flags": parseFunc.p_flags};
};

Sk.parseTreeDump = function parseTreeDump (n, indent) {
    //return JSON.stringify(n, null, 2);
    var i;
    var ret;
    indent = indent || "";
    ret = "";
    ret += indent;
    if (n.type >= 256) { // non-term
        ret += Sk.ParseTables.number2symbol[n.type] + "\n";
        for (i = 0; i < n.children.length; ++i) {
            ret += Sk.parseTreeDump(n.children[i], indent + "  ");
        }
    } else {
        ret += Sk.Tokenizer.tokenNames[n.type] + ": " + new Sk.builtin.str(n.value)["$r"]().v + "\n";
    }
    return ret;
};


Sk.exportSymbol("Parser", Parser);
Sk.exportSymbol("Sk.parse", Sk.parse);
Sk.exportSymbol("Sk.parseTreeDump", Sk.parseTreeDump);
/* File automatically generated by asdl_js.py. */

/* Object that holds all nodes */
Sk.astnodes = {};

/* ----- expr_context ----- */
/** @constructor */
Sk.astnodes.Load = function Load() {}
/** @constructor */
Sk.astnodes.Store = function Store() {}
/** @constructor */
Sk.astnodes.Del = function Del() {}
/** @constructor */
Sk.astnodes.AugLoad = function AugLoad() {}
/** @constructor */
Sk.astnodes.AugStore = function AugStore() {}
/** @constructor */
Sk.astnodes.Param = function Param() {}

/* ----- boolop ----- */
/** @constructor */
Sk.astnodes.And = function And() {}
/** @constructor */
Sk.astnodes.Or = function Or() {}

/* ----- operator ----- */
/** @constructor */
Sk.astnodes.Add = function Add() {}
/** @constructor */
Sk.astnodes.Sub = function Sub() {}
/** @constructor */
Sk.astnodes.Mult = function Mult() {}
/** @constructor */
Sk.astnodes.Div = function Div() {}
/** @constructor */
Sk.astnodes.Mod = function Mod() {}
/** @constructor */
Sk.astnodes.Pow = function Pow() {}
/** @constructor */
Sk.astnodes.LShift = function LShift() {}
/** @constructor */
Sk.astnodes.RShift = function RShift() {}
/** @constructor */
Sk.astnodes.BitOr = function BitOr() {}
/** @constructor */
Sk.astnodes.BitXor = function BitXor() {}
/** @constructor */
Sk.astnodes.BitAnd = function BitAnd() {}
/** @constructor */
Sk.astnodes.FloorDiv = function FloorDiv() {}

/* ----- unaryop ----- */
/** @constructor */
Sk.astnodes.Invert = function Invert() {}
/** @constructor */
Sk.astnodes.Not = function Not() {}
/** @constructor */
Sk.astnodes.UAdd = function UAdd() {}
/** @constructor */
Sk.astnodes.USub = function USub() {}

/* ----- cmpop ----- */
/** @constructor */
Sk.astnodes.Eq = function Eq() {}
/** @constructor */
Sk.astnodes.NotEq = function NotEq() {}
/** @constructor */
Sk.astnodes.Lt = function Lt() {}
/** @constructor */
Sk.astnodes.LtE = function LtE() {}
/** @constructor */
Sk.astnodes.Gt = function Gt() {}
/** @constructor */
Sk.astnodes.GtE = function GtE() {}
/** @constructor */
Sk.astnodes.Is = function Is() {}
/** @constructor */
Sk.astnodes.IsNot = function IsNot() {}
/** @constructor */
Sk.astnodes.In_ = function In_() {}
/** @constructor */
Sk.astnodes.NotIn = function NotIn() {}







/* ---------------------- */
/* constructors for nodes */
/* ---------------------- */





/** @constructor */
Sk.astnodes.Module = function Module(/* {asdl_seq *} */ body)
{
    this.body = body;
    return this;
}

/** @constructor */
Sk.astnodes.Interactive = function Interactive(/* {asdl_seq *} */ body)
{
    this.body = body;
    return this;
}

/** @constructor */
Sk.astnodes.Expression = function Expression(/* {expr_ty} */ body)
{
    Sk.asserts.assert(body !== null && body !== undefined);
    this.body = body;
    return this;
}

/** @constructor */
Sk.astnodes.Suite = function Suite(/* {asdl_seq *} */ body)
{
    this.body = body;
    return this;
}

/** @constructor */
Sk.astnodes.FunctionDef = function FunctionDef(/* {identifier} */ name, /*
                                                    {arguments__ty} */ args, /*
                                                    {asdl_seq *} */ body, /*
                                                    {asdl_seq *} */
                                                    decorator_list, /* {int} */
                                                    lineno, /* {int} */
                                                    col_offset)
{
    Sk.asserts.assert(name !== null && name !== undefined);
    Sk.asserts.assert(args !== null && args !== undefined);
    this.name = name;
    this.args = args;
    this.body = body;
    this.decorator_list = decorator_list;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.ClassDef = function ClassDef(/* {identifier} */ name, /* {asdl_seq
                                              *} */ bases, /* {asdl_seq *} */
                                              body, /* {asdl_seq *} */
                                              decorator_list, /* {int} */
                                              lineno, /* {int} */ col_offset)
{
    Sk.asserts.assert(name !== null && name !== undefined);
    this.name = name;
    this.bases = bases;
    this.body = body;
    this.decorator_list = decorator_list;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.Return_ = function Return_(/* {expr_ty} */ value, /* {int} */
                                            lineno, /* {int} */ col_offset)
{
    this.value = value;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.Delete_ = function Delete_(/* {asdl_seq *} */ targets, /* {int} */
                                            lineno, /* {int} */ col_offset)
{
    this.targets = targets;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.Assign = function Assign(/* {asdl_seq *} */ targets, /* {expr_ty}
                                          */ value, /* {int} */ lineno, /*
                                          {int} */ col_offset)
{
    Sk.asserts.assert(value !== null && value !== undefined);
    this.targets = targets;
    this.value = value;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.AugAssign = function AugAssign(/* {expr_ty} */ target, /*
                                                {operator_ty} */ op, /*
                                                {expr_ty} */ value, /* {int} */
                                                lineno, /* {int} */ col_offset)
{
    Sk.asserts.assert(target !== null && target !== undefined);
    Sk.asserts.assert(op !== null && op !== undefined);
    Sk.asserts.assert(value !== null && value !== undefined);
    this.target = target;
    this.op = op;
    this.value = value;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.Print = function Print(/* {expr_ty} */ dest, /* {asdl_seq *} */
                                        values, /* {bool} */ nl, /* {int} */
                                        lineno, /* {int} */ col_offset)
{
    this.dest = dest;
    this.values = values;
    this.nl = nl;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.For_ = function For_(/* {expr_ty} */ target, /* {expr_ty} */ iter,
                                      /* {asdl_seq *} */ body, /* {asdl_seq *}
                                      */ orelse, /* {int} */ lineno, /* {int}
                                      */ col_offset)
{
    Sk.asserts.assert(target !== null && target !== undefined);
    Sk.asserts.assert(iter !== null && iter !== undefined);
    this.target = target;
    this.iter = iter;
    this.body = body;
    this.orelse = orelse;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.While_ = function While_(/* {expr_ty} */ test, /* {asdl_seq *} */
                                          body, /* {asdl_seq *} */ orelse, /*
                                          {int} */ lineno, /* {int} */
                                          col_offset)
{
    Sk.asserts.assert(test !== null && test !== undefined);
    this.test = test;
    this.body = body;
    this.orelse = orelse;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.If_ = function If_(/* {expr_ty} */ test, /* {asdl_seq *} */ body,
                                    /* {asdl_seq *} */ orelse, /* {int} */
                                    lineno, /* {int} */ col_offset)
{
    Sk.asserts.assert(test !== null && test !== undefined);
    this.test = test;
    this.body = body;
    this.orelse = orelse;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.With_ = function With_(/* {expr_ty} */ context_expr, /* {expr_ty}
                                        */ optional_vars, /* {asdl_seq *} */
                                        body, /* {int} */ lineno, /* {int} */
                                        col_offset)
{
    Sk.asserts.assert(context_expr !== null && context_expr !== undefined);
    this.context_expr = context_expr;
    this.optional_vars = optional_vars;
    this.body = body;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.Raise = function Raise(/* {expr_ty} */ type, /* {expr_ty} */ inst,
                                        /* {expr_ty} */ tback, /* {int} */
                                        lineno, /* {int} */ col_offset)
{
    this.type = type;
    this.inst = inst;
    this.tback = tback;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.TryExcept = function TryExcept(/* {asdl_seq *} */ body, /*
                                                {asdl_seq *} */ handlers, /*
                                                {asdl_seq *} */ orelse, /*
                                                {int} */ lineno, /* {int} */
                                                col_offset)
{
    this.body = body;
    this.handlers = handlers;
    this.orelse = orelse;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.TryFinally = function TryFinally(/* {asdl_seq *} */ body, /*
                                                  {asdl_seq *} */ finalbody, /*
                                                  {int} */ lineno, /* {int} */
                                                  col_offset)
{
    this.body = body;
    this.finalbody = finalbody;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.Assert = function Assert(/* {expr_ty} */ test, /* {expr_ty} */ msg,
                                          /* {int} */ lineno, /* {int} */
                                          col_offset)
{
    Sk.asserts.assert(test !== null && test !== undefined);
    this.test = test;
    this.msg = msg;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.Import_ = function Import_(/* {asdl_seq *} */ names, /* {int} */
                                            lineno, /* {int} */ col_offset)
{
    this.names = names;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.ImportFrom = function ImportFrom(/* {identifier} */ module, /*
                                                  {asdl_seq *} */ names, /*
                                                  {int} */ level, /* {int} */
                                                  lineno, /* {int} */
                                                  col_offset)
{
    Sk.asserts.assert(module !== null && module !== undefined);
    this.module = module;
    this.names = names;
    this.level = level;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.Exec = function Exec(/* {expr_ty} */ body, /* {expr_ty} */ globals,
                                      /* {expr_ty} */ locals, /* {int} */
                                      lineno, /* {int} */ col_offset)
{
    Sk.asserts.assert(body !== null && body !== undefined);
    this.body = body;
    this.globals = globals;
    this.locals = locals;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.Global = function Global(/* {asdl_seq *} */ names, /* {int} */
                                          lineno, /* {int} */ col_offset)
{
    this.names = names;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.Expr = function Expr(/* {expr_ty} */ value, /* {int} */ lineno, /*
                                      {int} */ col_offset)
{
    Sk.asserts.assert(value !== null && value !== undefined);
    this.value = value;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.Pass = function Pass(/* {int} */ lineno, /* {int} */ col_offset)
{
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.Break_ = function Break_(/* {int} */ lineno, /* {int} */ col_offset)
{
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.Continue_ = function Continue_(/* {int} */ lineno, /* {int} */
                                                col_offset)
{
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.Debugger_ = function Debugger_(/* {int} */ lineno, /* {int} */
                                                col_offset)
{
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.BoolOp = function BoolOp(/* {boolop_ty} */ op, /* {asdl_seq *} */
                                          values, /* {int} */ lineno, /* {int}
                                          */ col_offset)
{
    Sk.asserts.assert(op !== null && op !== undefined);
    this.op = op;
    this.values = values;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.BinOp = function BinOp(/* {expr_ty} */ left, /* {operator_ty} */
                                        op, /* {expr_ty} */ right, /* {int} */
                                        lineno, /* {int} */ col_offset)
{
    Sk.asserts.assert(left !== null && left !== undefined);
    Sk.asserts.assert(op !== null && op !== undefined);
    Sk.asserts.assert(right !== null && right !== undefined);
    this.left = left;
    this.op = op;
    this.right = right;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.UnaryOp = function UnaryOp(/* {unaryop_ty} */ op, /* {expr_ty} */
                                            operand, /* {int} */ lineno, /*
                                            {int} */ col_offset)
{
    Sk.asserts.assert(op !== null && op !== undefined);
    Sk.asserts.assert(operand !== null && operand !== undefined);
    this.op = op;
    this.operand = operand;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.Lambda = function Lambda(/* {arguments__ty} */ args, /* {expr_ty}
                                          */ body, /* {int} */ lineno, /* {int}
                                          */ col_offset)
{
    Sk.asserts.assert(args !== null && args !== undefined);
    Sk.asserts.assert(body !== null && body !== undefined);
    this.args = args;
    this.body = body;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.IfExp = function IfExp(/* {expr_ty} */ test, /* {expr_ty} */ body,
                                        /* {expr_ty} */ orelse, /* {int} */
                                        lineno, /* {int} */ col_offset)
{
    Sk.asserts.assert(test !== null && test !== undefined);
    Sk.asserts.assert(body !== null && body !== undefined);
    Sk.asserts.assert(orelse !== null && orelse !== undefined);
    this.test = test;
    this.body = body;
    this.orelse = orelse;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.Dict = function Dict(/* {asdl_seq *} */ keys, /* {asdl_seq *} */
                                      values, /* {int} */ lineno, /* {int} */
                                      col_offset)
{
    this.keys = keys;
    this.values = values;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.Set = function Set(/* {asdl_seq *} */ elts, /* {int} */ lineno, /*
                                    {int} */ col_offset)
{
    this.elts = elts;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.ListComp = function ListComp(/* {expr_ty} */ elt, /* {asdl_seq *}
                                              */ generators, /* {int} */
                                              lineno, /* {int} */ col_offset)
{
    Sk.asserts.assert(elt !== null && elt !== undefined);
    this.elt = elt;
    this.generators = generators;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.SetComp = function SetComp(/* {expr_ty} */ elt, /* {asdl_seq *} */
                                            generators, /* {int} */ lineno, /*
                                            {int} */ col_offset)
{
    Sk.asserts.assert(elt !== null && elt !== undefined);
    this.elt = elt;
    this.generators = generators;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.DictComp = function DictComp(/* {expr_ty} */ key, /* {expr_ty} */
                                              value, /* {asdl_seq *} */
                                              generators, /* {int} */ lineno,
                                              /* {int} */ col_offset)
{
    Sk.asserts.assert(key !== null && key !== undefined);
    Sk.asserts.assert(value !== null && value !== undefined);
    this.key = key;
    this.value = value;
    this.generators = generators;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.GeneratorExp = function GeneratorExp(/* {expr_ty} */ elt, /*
                                                      {asdl_seq *} */
                                                      generators, /* {int} */
                                                      lineno, /* {int} */
                                                      col_offset)
{
    Sk.asserts.assert(elt !== null && elt !== undefined);
    this.elt = elt;
    this.generators = generators;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.Yield = function Yield(/* {expr_ty} */ value, /* {int} */ lineno,
                                        /* {int} */ col_offset)
{
    this.value = value;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.Compare = function Compare(/* {expr_ty} */ left, /* {asdl_int_seq
                                            *} */ ops, /* {asdl_seq *} */
                                            comparators, /* {int} */ lineno, /*
                                            {int} */ col_offset)
{
    Sk.asserts.assert(left !== null && left !== undefined);
    this.left = left;
    this.ops = ops;
    this.comparators = comparators;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.Call = function Call(/* {expr_ty} */ func, /* {asdl_seq *} */ args,
                                      /* {asdl_seq *} */ keywords, /* {expr_ty}
                                      */ starargs, /* {expr_ty} */ kwargs, /*
                                      {int} */ lineno, /* {int} */ col_offset)
{
    Sk.asserts.assert(func !== null && func !== undefined);
    this.func = func;
    this.args = args;
    this.keywords = keywords;
    this.starargs = starargs;
    this.kwargs = kwargs;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.Repr = function Repr(/* {expr_ty} */ value, /* {int} */ lineno, /*
                                      {int} */ col_offset)
{
    Sk.asserts.assert(value !== null && value !== undefined);
    this.value = value;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.Num = function Num(/* {object} */ n, /* {int} */ lineno, /* {int}
                                    */ col_offset)
{
    Sk.asserts.assert(n !== null && n !== undefined);
    this.n = n;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.Str = function Str(/* {string} */ s, /* {int} */ lineno, /* {int}
                                    */ col_offset)
{
    Sk.asserts.assert(s !== null && s !== undefined);
    this.s = s;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.Attribute = function Attribute(/* {expr_ty} */ value, /*
                                                {identifier} */ attr, /*
                                                {expr_context_ty} */ ctx, /*
                                                {int} */ lineno, /* {int} */
                                                col_offset)
{
    Sk.asserts.assert(value !== null && value !== undefined);
    Sk.asserts.assert(attr !== null && attr !== undefined);
    Sk.asserts.assert(ctx !== null && ctx !== undefined);
    this.value = value;
    this.attr = attr;
    this.ctx = ctx;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.Subscript = function Subscript(/* {expr_ty} */ value, /* {slice_ty}
                                                */ slice, /* {expr_context_ty}
                                                */ ctx, /* {int} */ lineno, /*
                                                {int} */ col_offset)
{
    Sk.asserts.assert(value !== null && value !== undefined);
    Sk.asserts.assert(slice !== null && slice !== undefined);
    Sk.asserts.assert(ctx !== null && ctx !== undefined);
    this.value = value;
    this.slice = slice;
    this.ctx = ctx;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.Name = function Name(/* {identifier} */ id, /* {expr_context_ty} */
                                      ctx, /* {int} */ lineno, /* {int} */
                                      col_offset)
{
    Sk.asserts.assert(id !== null && id !== undefined);
    Sk.asserts.assert(ctx !== null && ctx !== undefined);
    this.id = id;
    this.ctx = ctx;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.List = function List(/* {asdl_seq *} */ elts, /* {expr_context_ty}
                                      */ ctx, /* {int} */ lineno, /* {int} */
                                      col_offset)
{
    Sk.asserts.assert(ctx !== null && ctx !== undefined);
    this.elts = elts;
    this.ctx = ctx;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.Tuple = function Tuple(/* {asdl_seq *} */ elts, /*
                                        {expr_context_ty} */ ctx, /* {int} */
                                        lineno, /* {int} */ col_offset)
{
    Sk.asserts.assert(ctx !== null && ctx !== undefined);
    this.elts = elts;
    this.ctx = ctx;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.Ellipsis = function Ellipsis()
{
    return this;
}

/** @constructor */
Sk.astnodes.Slice = function Slice(/* {expr_ty} */ lower, /* {expr_ty} */
                                        upper, /* {expr_ty} */ step)
{
    this.lower = lower;
    this.upper = upper;
    this.step = step;
    return this;
}

/** @constructor */
Sk.astnodes.ExtSlice = function ExtSlice(/* {asdl_seq *} */ dims)
{
    this.dims = dims;
    return this;
}

/** @constructor */
Sk.astnodes.Index = function Index(/* {expr_ty} */ value)
{
    Sk.asserts.assert(value !== null && value !== undefined);
    this.value = value;
    return this;
}

/** @constructor */
Sk.astnodes.comprehension = function comprehension(/* {expr_ty} */ target, /*
                                                        {expr_ty} */ iter, /*
                                                        {asdl_seq *} */ ifs)
{
    Sk.asserts.assert(target !== null && target !== undefined);
    Sk.asserts.assert(iter !== null && iter !== undefined);
    this.target = target;
    this.iter = iter;
    this.ifs = ifs;
    return this;
}

/** @constructor */
Sk.astnodes.ExceptHandler = function ExceptHandler(/* {expr_ty} */ type, /*
                                                        {expr_ty} */ name, /*
                                                        {asdl_seq *} */ body,
                                                        /* {int} */ lineno, /*
                                                        {int} */ col_offset)
{
    this.type = type;
    this.name = name;
    this.body = body;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
Sk.astnodes.arguments_ = function arguments_(/* {asdl_seq *} */ args, /*
                                                  {identifier} */ vararg, /*
                                                  {identifier} */ kwarg, /*
                                                  {asdl_seq *} */ defaults)
{
    this.args = args;
    this.vararg = vararg;
    this.kwarg = kwarg;
    this.defaults = defaults;
    return this;
}

/** @constructor */
Sk.astnodes.keyword = function keyword(/* {identifier} */ arg, /* {expr_ty} */
                                            value)
{
    Sk.asserts.assert(arg !== null && arg !== undefined);
    Sk.asserts.assert(value !== null && value !== undefined);
    this.arg = arg;
    this.value = value;
    return this;
}

/** @constructor */
Sk.astnodes.alias = function alias(/* {identifier} */ name, /* {identifier} */
                                        asname)
{
    Sk.asserts.assert(name !== null && name !== undefined);
    this.name = name;
    this.asname = asname;
    return this;
}


Sk.astnodes.Module.prototype._astname = "Module";
Sk.astnodes.Module.prototype._fields = [
    "body", function(n) { return n.body; }
];
Sk.astnodes.Interactive.prototype._astname = "Interactive";
Sk.astnodes.Interactive.prototype._fields = [
    "body", function(n) { return n.body; }
];
Sk.astnodes.Expression.prototype._astname = "Expression";
Sk.astnodes.Expression.prototype._fields = [
    "body", function(n) { return n.body; }
];
Sk.astnodes.Suite.prototype._astname = "Suite";
Sk.astnodes.Suite.prototype._fields = [
    "body", function(n) { return n.body; }
];
Sk.astnodes.FunctionDef.prototype._astname = "FunctionDef";
Sk.astnodes.FunctionDef.prototype._fields = [
    "name", function(n) { return n.name; },
    "args", function(n) { return n.args; },
    "body", function(n) { return n.body; },
    "decorator_list", function(n) { return n.decorator_list; }
];
Sk.astnodes.ClassDef.prototype._astname = "ClassDef";
Sk.astnodes.ClassDef.prototype._fields = [
    "name", function(n) { return n.name; },
    "bases", function(n) { return n.bases; },
    "body", function(n) { return n.body; },
    "decorator_list", function(n) { return n.decorator_list; }
];
Sk.astnodes.Return_.prototype._astname = "Return";
Sk.astnodes.Return_.prototype._fields = [
    "value", function(n) { return n.value; }
];
Sk.astnodes.Delete_.prototype._astname = "Delete";
Sk.astnodes.Delete_.prototype._fields = [
    "targets", function(n) { return n.targets; }
];
Sk.astnodes.Assign.prototype._astname = "Assign";
Sk.astnodes.Assign.prototype._fields = [
    "targets", function(n) { return n.targets; },
    "value", function(n) { return n.value; }
];
Sk.astnodes.AugAssign.prototype._astname = "AugAssign";
Sk.astnodes.AugAssign.prototype._fields = [
    "target", function(n) { return n.target; },
    "op", function(n) { return n.op; },
    "value", function(n) { return n.value; }
];
Sk.astnodes.Print.prototype._astname = "Print";
Sk.astnodes.Print.prototype._fields = [
    "dest", function(n) { return n.dest; },
    "values", function(n) { return n.values; },
    "nl", function(n) { return n.nl; }
];
Sk.astnodes.For_.prototype._astname = "For";
Sk.astnodes.For_.prototype._fields = [
    "target", function(n) { return n.target; },
    "iter", function(n) { return n.iter; },
    "body", function(n) { return n.body; },
    "orelse", function(n) { return n.orelse; }
];
Sk.astnodes.While_.prototype._astname = "While";
Sk.astnodes.While_.prototype._fields = [
    "test", function(n) { return n.test; },
    "body", function(n) { return n.body; },
    "orelse", function(n) { return n.orelse; }
];
Sk.astnodes.If_.prototype._astname = "If";
Sk.astnodes.If_.prototype._fields = [
    "test", function(n) { return n.test; },
    "body", function(n) { return n.body; },
    "orelse", function(n) { return n.orelse; }
];
Sk.astnodes.With_.prototype._astname = "With";
Sk.astnodes.With_.prototype._fields = [
    "context_expr", function(n) { return n.context_expr; },
    "optional_vars", function(n) { return n.optional_vars; },
    "body", function(n) { return n.body; }
];
Sk.astnodes.Raise.prototype._astname = "Raise";
Sk.astnodes.Raise.prototype._fields = [
    "type", function(n) { return n.type; },
    "inst", function(n) { return n.inst; },
    "tback", function(n) { return n.tback; }
];
Sk.astnodes.TryExcept.prototype._astname = "TryExcept";
Sk.astnodes.TryExcept.prototype._fields = [
    "body", function(n) { return n.body; },
    "handlers", function(n) { return n.handlers; },
    "orelse", function(n) { return n.orelse; }
];
Sk.astnodes.TryFinally.prototype._astname = "TryFinally";
Sk.astnodes.TryFinally.prototype._fields = [
    "body", function(n) { return n.body; },
    "finalbody", function(n) { return n.finalbody; }
];
Sk.astnodes.Assert.prototype._astname = "Assert";
Sk.astnodes.Assert.prototype._fields = [
    "test", function(n) { return n.test; },
    "msg", function(n) { return n.msg; }
];
Sk.astnodes.Import_.prototype._astname = "Import";
Sk.astnodes.Import_.prototype._fields = [
    "names", function(n) { return n.names; }
];
Sk.astnodes.ImportFrom.prototype._astname = "ImportFrom";
Sk.astnodes.ImportFrom.prototype._fields = [
    "module", function(n) { return n.module; },
    "names", function(n) { return n.names; },
    "level", function(n) { return n.level; }
];
Sk.astnodes.Exec.prototype._astname = "Exec";
Sk.astnodes.Exec.prototype._fields = [
    "body", function(n) { return n.body; },
    "globals", function(n) { return n.globals; },
    "locals", function(n) { return n.locals; }
];
Sk.astnodes.Global.prototype._astname = "Global";
Sk.astnodes.Global.prototype._fields = [
    "names", function(n) { return n.names; }
];
Sk.astnodes.Expr.prototype._astname = "Expr";
Sk.astnodes.Expr.prototype._fields = [
    "value", function(n) { return n.value; }
];
Sk.astnodes.Pass.prototype._astname = "Pass";
Sk.astnodes.Pass.prototype._fields = [
];
Sk.astnodes.Break_.prototype._astname = "Break";
Sk.astnodes.Break_.prototype._fields = [
];
Sk.astnodes.Continue_.prototype._astname = "Continue";
Sk.astnodes.Continue_.prototype._fields = [
];
Sk.astnodes.Debugger_.prototype._astname = "Debugger";
Sk.astnodes.Debugger_.prototype._fields = [
];
Sk.astnodes.BoolOp.prototype._astname = "BoolOp";
Sk.astnodes.BoolOp.prototype._fields = [
    "op", function(n) { return n.op; },
    "values", function(n) { return n.values; }
];
Sk.astnodes.BinOp.prototype._astname = "BinOp";
Sk.astnodes.BinOp.prototype._fields = [
    "left", function(n) { return n.left; },
    "op", function(n) { return n.op; },
    "right", function(n) { return n.right; }
];
Sk.astnodes.UnaryOp.prototype._astname = "UnaryOp";
Sk.astnodes.UnaryOp.prototype._fields = [
    "op", function(n) { return n.op; },
    "operand", function(n) { return n.operand; }
];
Sk.astnodes.Lambda.prototype._astname = "Lambda";
Sk.astnodes.Lambda.prototype._fields = [
    "args", function(n) { return n.args; },
    "body", function(n) { return n.body; }
];
Sk.astnodes.IfExp.prototype._astname = "IfExp";
Sk.astnodes.IfExp.prototype._fields = [
    "test", function(n) { return n.test; },
    "body", function(n) { return n.body; },
    "orelse", function(n) { return n.orelse; }
];
Sk.astnodes.Dict.prototype._astname = "Dict";
Sk.astnodes.Dict.prototype._fields = [
    "keys", function(n) { return n.keys; },
    "values", function(n) { return n.values; }
];
Sk.astnodes.Set.prototype._astname = "Set";
Sk.astnodes.Set.prototype._fields = [
    "elts", function(n) { return n.elts; }
];
Sk.astnodes.ListComp.prototype._astname = "ListComp";
Sk.astnodes.ListComp.prototype._fields = [
    "elt", function(n) { return n.elt; },
    "generators", function(n) { return n.generators; }
];
Sk.astnodes.SetComp.prototype._astname = "SetComp";
Sk.astnodes.SetComp.prototype._fields = [
    "elt", function(n) { return n.elt; },
    "generators", function(n) { return n.generators; }
];
Sk.astnodes.DictComp.prototype._astname = "DictComp";
Sk.astnodes.DictComp.prototype._fields = [
    "key", function(n) { return n.key; },
    "value", function(n) { return n.value; },
    "generators", function(n) { return n.generators; }
];
Sk.astnodes.GeneratorExp.prototype._astname = "GeneratorExp";
Sk.astnodes.GeneratorExp.prototype._fields = [
    "elt", function(n) { return n.elt; },
    "generators", function(n) { return n.generators; }
];
Sk.astnodes.Yield.prototype._astname = "Yield";
Sk.astnodes.Yield.prototype._fields = [
    "value", function(n) { return n.value; }
];
Sk.astnodes.Compare.prototype._astname = "Compare";
Sk.astnodes.Compare.prototype._fields = [
    "left", function(n) { return n.left; },
    "ops", function(n) { return n.ops; },
    "comparators", function(n) { return n.comparators; }
];
Sk.astnodes.Call.prototype._astname = "Call";
Sk.astnodes.Call.prototype._fields = [
    "func", function(n) { return n.func; },
    "args", function(n) { return n.args; },
    "keywords", function(n) { return n.keywords; },
    "starargs", function(n) { return n.starargs; },
    "kwargs", function(n) { return n.kwargs; }
];
Sk.astnodes.Repr.prototype._astname = "Repr";
Sk.astnodes.Repr.prototype._fields = [
    "value", function(n) { return n.value; }
];
Sk.astnodes.Num.prototype._astname = "Num";
Sk.astnodes.Num.prototype._fields = [
    "n", function(n) { return n.n; }
];
Sk.astnodes.Str.prototype._astname = "Str";
Sk.astnodes.Str.prototype._fields = [
    "s", function(n) { return n.s; }
];
Sk.astnodes.Attribute.prototype._astname = "Attribute";
Sk.astnodes.Attribute.prototype._fields = [
    "value", function(n) { return n.value; },
    "attr", function(n) { return n.attr; },
    "ctx", function(n) { return n.ctx; }
];
Sk.astnodes.Subscript.prototype._astname = "Subscript";
Sk.astnodes.Subscript.prototype._fields = [
    "value", function(n) { return n.value; },
    "slice", function(n) { return n.slice; },
    "ctx", function(n) { return n.ctx; }
];
Sk.astnodes.Name.prototype._astname = "Name";
Sk.astnodes.Name.prototype._fields = [
    "id", function(n) { return n.id; },
    "ctx", function(n) { return n.ctx; }
];
Sk.astnodes.List.prototype._astname = "List";
Sk.astnodes.List.prototype._fields = [
    "elts", function(n) { return n.elts; },
    "ctx", function(n) { return n.ctx; }
];
Sk.astnodes.Tuple.prototype._astname = "Tuple";
Sk.astnodes.Tuple.prototype._fields = [
    "elts", function(n) { return n.elts; },
    "ctx", function(n) { return n.ctx; }
];
Sk.astnodes.Load.prototype._astname = "Load";
Sk.astnodes.Load.prototype._isenum = true;
Sk.astnodes.Store.prototype._astname = "Store";
Sk.astnodes.Store.prototype._isenum = true;
Sk.astnodes.Del.prototype._astname = "Del";
Sk.astnodes.Del.prototype._isenum = true;
Sk.astnodes.AugLoad.prototype._astname = "AugLoad";
Sk.astnodes.AugLoad.prototype._isenum = true;
Sk.astnodes.AugStore.prototype._astname = "AugStore";
Sk.astnodes.AugStore.prototype._isenum = true;
Sk.astnodes.Param.prototype._astname = "Param";
Sk.astnodes.Param.prototype._isenum = true;
Sk.astnodes.Ellipsis.prototype._astname = "Ellipsis";
Sk.astnodes.Ellipsis.prototype._fields = [
];
Sk.astnodes.Slice.prototype._astname = "Slice";
Sk.astnodes.Slice.prototype._fields = [
    "lower", function(n) { return n.lower; },
    "upper", function(n) { return n.upper; },
    "step", function(n) { return n.step; }
];
Sk.astnodes.ExtSlice.prototype._astname = "ExtSlice";
Sk.astnodes.ExtSlice.prototype._fields = [
    "dims", function(n) { return n.dims; }
];
Sk.astnodes.Index.prototype._astname = "Index";
Sk.astnodes.Index.prototype._fields = [
    "value", function(n) { return n.value; }
];
Sk.astnodes.And.prototype._astname = "And";
Sk.astnodes.And.prototype._isenum = true;
Sk.astnodes.Or.prototype._astname = "Or";
Sk.astnodes.Or.prototype._isenum = true;
Sk.astnodes.Add.prototype._astname = "Add";
Sk.astnodes.Add.prototype._isenum = true;
Sk.astnodes.Sub.prototype._astname = "Sub";
Sk.astnodes.Sub.prototype._isenum = true;
Sk.astnodes.Mult.prototype._astname = "Mult";
Sk.astnodes.Mult.prototype._isenum = true;
Sk.astnodes.Div.prototype._astname = "Div";
Sk.astnodes.Div.prototype._isenum = true;
Sk.astnodes.Mod.prototype._astname = "Mod";
Sk.astnodes.Mod.prototype._isenum = true;
Sk.astnodes.Pow.prototype._astname = "Pow";
Sk.astnodes.Pow.prototype._isenum = true;
Sk.astnodes.LShift.prototype._astname = "LShift";
Sk.astnodes.LShift.prototype._isenum = true;
Sk.astnodes.RShift.prototype._astname = "RShift";
Sk.astnodes.RShift.prototype._isenum = true;
Sk.astnodes.BitOr.prototype._astname = "BitOr";
Sk.astnodes.BitOr.prototype._isenum = true;
Sk.astnodes.BitXor.prototype._astname = "BitXor";
Sk.astnodes.BitXor.prototype._isenum = true;
Sk.astnodes.BitAnd.prototype._astname = "BitAnd";
Sk.astnodes.BitAnd.prototype._isenum = true;
Sk.astnodes.FloorDiv.prototype._astname = "FloorDiv";
Sk.astnodes.FloorDiv.prototype._isenum = true;
Sk.astnodes.Invert.prototype._astname = "Invert";
Sk.astnodes.Invert.prototype._isenum = true;
Sk.astnodes.Not.prototype._astname = "Not";
Sk.astnodes.Not.prototype._isenum = true;
Sk.astnodes.UAdd.prototype._astname = "UAdd";
Sk.astnodes.UAdd.prototype._isenum = true;
Sk.astnodes.USub.prototype._astname = "USub";
Sk.astnodes.USub.prototype._isenum = true;
Sk.astnodes.Eq.prototype._astname = "Eq";
Sk.astnodes.Eq.prototype._isenum = true;
Sk.astnodes.NotEq.prototype._astname = "NotEq";
Sk.astnodes.NotEq.prototype._isenum = true;
Sk.astnodes.Lt.prototype._astname = "Lt";
Sk.astnodes.Lt.prototype._isenum = true;
Sk.astnodes.LtE.prototype._astname = "LtE";
Sk.astnodes.LtE.prototype._isenum = true;
Sk.astnodes.Gt.prototype._astname = "Gt";
Sk.astnodes.Gt.prototype._isenum = true;
Sk.astnodes.GtE.prototype._astname = "GtE";
Sk.astnodes.GtE.prototype._isenum = true;
Sk.astnodes.Is.prototype._astname = "Is";
Sk.astnodes.Is.prototype._isenum = true;
Sk.astnodes.IsNot.prototype._astname = "IsNot";
Sk.astnodes.IsNot.prototype._isenum = true;
Sk.astnodes.In_.prototype._astname = "In";
Sk.astnodes.In_.prototype._isenum = true;
Sk.astnodes.NotIn.prototype._astname = "NotIn";
Sk.astnodes.NotIn.prototype._isenum = true;
Sk.astnodes.comprehension.prototype._astname = "comprehension";
Sk.astnodes.comprehension.prototype._fields = [
    "target", function(n) { return n.target; },
    "iter", function(n) { return n.iter; },
    "ifs", function(n) { return n.ifs; }
];
Sk.astnodes.ExceptHandler.prototype._astname = "ExceptHandler";
Sk.astnodes.ExceptHandler.prototype._fields = [
    "type", function(n) { return n.type; },
    "name", function(n) { return n.name; },
    "body", function(n) { return n.body; }
];
Sk.astnodes.arguments_.prototype._astname = "arguments";
Sk.astnodes.arguments_.prototype._fields = [
    "args", function(n) { return n.args; },
    "vararg", function(n) { return n.vararg; },
    "kwarg", function(n) { return n.kwarg; },
    "defaults", function(n) { return n.defaults; }
];
Sk.astnodes.keyword.prototype._astname = "keyword";
Sk.astnodes.keyword.prototype._fields = [
    "arg", function(n) { return n.arg; },
    "value", function(n) { return n.value; }
];
Sk.astnodes.alias.prototype._astname = "alias";
Sk.astnodes.alias.prototype._fields = [
    "name", function(n) { return n.name; },
    "asname", function(n) { return n.asname; }
];

Sk.exportSymbol("Sk.astnodes", Sk.astnodes);
//
// This is pretty much a straight port of ast.c from CPython 2.6.5.
//
// The previous version was easier to work with and more JS-ish, but having a
// somewhat different ast structure than cpython makes testing more difficult.
//
// This way, we can use a dump from the ast module on any arbitrary python
// code and know that we're the same up to ast level, at least.
//

var SYM = Sk.ParseTables.sym;
var TOK = Sk.Tokenizer.Tokens;
var COMP_GENEXP = 0;
var COMP_SETCOMP = 1;

/** @constructor */
function Compiling (encoding, filename, c_flags) {
    this.c_encoding = encoding;
    this.c_filename = filename;
    this.c_flags = c_flags || 0;
}

/**
 * @return {number}
 */
function NCH (n) {
    Sk.asserts.assert(n !== undefined);
    if (n.children === null) {
        return 0;
    }
    return n.children.length;
}

function CHILD (n, i) {
    Sk.asserts.assert(n !== undefined);
    Sk.asserts.assert(i !== undefined);
    return n.children[i];
}

function REQ (n, type) {
    Sk.asserts.assert(n.type === type, "node wasn't expected type");
}

function strobj (s) {
    Sk.asserts.assert(typeof s === "string", "expecting string, got " + (typeof s));
    return new Sk.builtin.str(s);
}

/** @return {number} */
function numStmts (n) {
    var ch;
    var i;
    var cnt;
    switch (n.type) {
        case SYM.single_input:
            if (CHILD(n, 0).type === TOK.T_NEWLINE) {
                return 0;
            }
            else {
                return numStmts(CHILD(n, 0));
            }
        case SYM.file_input:
            cnt = 0;
            for (i = 0; i < NCH(n); ++i) {
                ch = CHILD(n, i);
                if (ch.type === SYM.stmt) {
                    cnt += numStmts(ch);
                }
            }
            return cnt;
        case SYM.stmt:
            return numStmts(CHILD(n, 0));
        case SYM.compound_stmt:
            return 1;
        case SYM.simple_stmt:
            return Math.floor(NCH(n) / 2); // div 2 is to remove count of ;s
        case SYM.suite:
            if (NCH(n) === 1) {
                return numStmts(CHILD(n, 0));
            }
            else {
                cnt = 0;
                for (i = 2; i < NCH(n) - 1; ++i) {
                    cnt += numStmts(CHILD(n, i));
                }
                return cnt;
            }
            break;
        default:
            Sk.asserts.fail("Non-statement found");
    }
    return 0;
}

function forbiddenCheck (c, n, x, lineno) {
    if (x === "None") {
        throw new Sk.builtin.SyntaxError("assignment to None", c.c_filename, lineno);
    }
    if (x === "True" || x === "False") {
        throw new Sk.builtin.SyntaxError("assignment to True or False is forbidden", c.c_filename, lineno);
    }
}

/**
 * Set the context ctx for e, recursively traversing e.
 *
 * Only sets context for expr kinds that can appear in assignment context as
 * per the asdl file.
 */
function setContext (c, e, ctx, n) {
    var i;
    var exprName;
    var s;
    Sk.asserts.assert(ctx !== Sk.astnodes.AugStore && ctx !== Sk.astnodes.AugLoad);
    s = null;
    exprName = null;

    switch (e.constructor) {
        case Sk.astnodes.Attribute:
        case Sk.astnodes.Name:
            if (ctx === Sk.astnodes.Store) {
                forbiddenCheck(c, n, e.attr, n.lineno);
            }
            e.ctx = ctx;
            break;
        case Sk.astnodes.Subscript:
            e.ctx = ctx;
            break;
        case Sk.astnodes.List:
            e.ctx = ctx;
            s = e.elts;
            break;
        case Sk.astnodes.Tuple:
            if (e.elts.length === 0) {
                throw new Sk.builtin.SyntaxError("can't assign to ()", c.c_filename, n.lineno);
            }
            e.ctx = ctx;
            s = e.elts;
            break;
        case Sk.astnodes.Lambda:
            exprName = "lambda";
            break;
        case Sk.astnodes.Call:
            exprName = "function call";
            break;
        case Sk.astnodes.BoolOp:
        case Sk.astnodes.BinOp:
        case Sk.astnodes.UnaryOp:
            exprName = "operator";
            break;
        case Sk.astnodes.GeneratorExp:
            exprName = "generator expression";
            break;
        case Sk.astnodes.Yield:
            exprName = "yield expression";
            break;
        case Sk.astnodes.ListComp:
            exprName = "list comprehension";
            break;
        case Sk.astnodes.SetComp:
            exprName = "set comprehension";
            break;
        case Sk.astnodes.DictComp:
            exprName = "dict comprehension";
            break;
        case Sk.astnodes.Dict:
        case Sk.astnodes.Set:
        case Sk.astnodes.Num:
        case Sk.astnodes.Str:
            exprName = "literal";
            break;
        case Sk.astnodes.Compare:
            exprName = "comparison";
            break;
        case Sk.astnodes.Repr:
            exprName = "repr";
            break;
        case Sk.astnodes.IfExp:
            exprName = "conditional expression";
            break;
        default:
            Sk.asserts.fail("unhandled expression in assignment");
    }
    if (exprName) {
        throw new Sk.builtin.SyntaxError("can't " + (ctx === Sk.astnodes.Store ? "assign to" : "delete") + " " + exprName, c.c_filename, n.lineno);
    }

    if (s) {
        for (i = 0; i < s.length; ++i) {
            setContext(c, s[i], ctx, n);
        }
    }
}

var operatorMap = {};
(function () {
    operatorMap[TOK.T_VBAR] = Sk.astnodes.BitOr;
    operatorMap[TOK.T_CIRCUMFLEX] = Sk.astnodes.BitXor;
    operatorMap[TOK.T_AMPER] = Sk.astnodes.BitAnd;
    operatorMap[TOK.T_LEFTSHIFT] = Sk.astnodes.LShift;
    operatorMap[TOK.T_RIGHTSHIFT] = Sk.astnodes.RShift;
    operatorMap[TOK.T_PLUS] = Sk.astnodes.Add;
    operatorMap[TOK.T_MINUS] = Sk.astnodes.Sub;
    operatorMap[TOK.T_STAR] = Sk.astnodes.Mult;
    operatorMap[TOK.T_SLASH] = Sk.astnodes.Div;
    operatorMap[TOK.T_DOUBLESLASH] = Sk.astnodes.FloorDiv;
    operatorMap[TOK.T_PERCENT] = Sk.astnodes.Mod;
}());

function getOperator (n) {
    Sk.asserts.assert(operatorMap[n.type] !== undefined);
    return operatorMap[n.type];
}

function astForCompOp (c, n) {
    /* comp_op: '<'|'>'|'=='|'>='|'<='|'<>'|'!='|'in'|'not' 'in'|'is'
     |'is' 'not'
     */
    REQ(n, SYM.comp_op);
    if (NCH(n) === 1) {
        n = CHILD(n, 0);
        switch (n.type) {
            case TOK.T_LESS:
                return Sk.astnodes.Lt;
            case TOK.T_GREATER:
                return Sk.astnodes.Gt;
            case TOK.T_EQEQUAL:
                return Sk.astnodes.Eq;
            case TOK.T_LESSEQUAL:
                return Sk.astnodes.LtE;
            case TOK.T_GREATEREQUAL:
                return Sk.astnodes.GtE;
            case TOK.T_NOTEQUAL:
                return Sk.astnodes.NotEq;
            case TOK.T_NAME:
                if (n.value === "in") {
                    return Sk.astnodes.In_;
                }
                if (n.value === "is") {
                    return Sk.astnodes.Is;
                }
        }
    }
    else if (NCH(n) === 2) {
        if (CHILD(n, 0).type === TOK.T_NAME) {
            if (CHILD(n, 1).value === "in") {
                return Sk.astnodes.NotIn;
            }
            if (CHILD(n, 0).value === "is") {
                return Sk.astnodes.IsNot;
            }
        }
    }
    Sk.asserts.fail("invalid comp_op");
}

function seqForTestlist (c, n) {
    /* testlist: test (',' test)* [','] */
    var i;
    var seq = [];
    Sk.asserts.assert(n.type === SYM.testlist ||
        n.type === SYM.listmaker ||
        n.type === SYM.testlist_comp ||
        n.type === SYM.testlist_safe ||
        n.type === SYM.testlist1);
    for (i = 0; i < NCH(n); i += 2) {
        Sk.asserts.assert(CHILD(n, i).type === SYM.test || CHILD(n, i).type === SYM.old_test);
        seq[i / 2] = astForExpr(c, CHILD(n, i));
    }
    return seq;
}

function astForSuite (c, n) {
    /* suite: simple_stmt | NEWLINE INDENT stmt+ DEDENT */
    var j;
    var num;
    var i;
    var end;
    var ch;
    var pos;
    var seq;
    REQ(n, SYM.suite);
    seq = [];
    pos = 0;
    if (CHILD(n, 0).type === SYM.simple_stmt) {
        n = CHILD(n, 0);
        /* simple_stmt always ends with an NEWLINE and may have a trailing
         * SEMI. */
        end = NCH(n) - 1;
        if (CHILD(n, end - 1).type === TOK.T_SEMI) {
            end -= 1;
        }
        for (i = 0; i < end; i += 2) // by 2 to skip ;
        {
            seq[pos++] = astForStmt(c, CHILD(n, i));
        }
    }
    else {
        for (i = 2; i < NCH(n) - 1; ++i) {
            ch = CHILD(n, i);
            REQ(ch, SYM.stmt);
            num = numStmts(ch);
            if (num === 1) {
                // small_stmt or compound_stmt w/ only 1 child
                seq[pos++] = astForStmt(c, ch);
            }
            else {
                ch = CHILD(ch, 0);
                REQ(ch, SYM.simple_stmt);
                for (j = 0; j < NCH(ch); j += 2) {
                    if (NCH(CHILD(ch, j)) === 0) {
                        Sk.asserts.assert(j + 1 === NCH(ch));
                        break;
                    }
                    seq[pos++] = astForStmt(c, CHILD(ch, j));
                }
            }
        }
    }
    Sk.asserts.assert(pos === numStmts(n));
    return seq;
}

function astForExceptClause (c, exc, body) {
    /* except_clause: 'except' [test [(',' | 'as') test]] */
    var e;
    REQ(exc, SYM.except_clause);
    REQ(body, SYM.suite);
    if (NCH(exc) === 1) {
        return new Sk.astnodes.ExceptHandler(null, null, astForSuite(c, body), exc.lineno, exc.col_offset);
    }
    else if (NCH(exc) === 2) {
        return new Sk.astnodes.ExceptHandler(astForExpr(c, CHILD(exc, 1)), null, astForSuite(c, body), exc.lineno, exc.col_offset);
    }
    else if (NCH(exc) === 4) {
        e = astForExpr(c, CHILD(exc, 3));
        setContext(c, e, Sk.astnodes.Store, CHILD(exc, 3));
        return new Sk.astnodes.ExceptHandler(astForExpr(c, CHILD(exc, 1)), e, astForSuite(c, body), exc.lineno, exc.col_offset);
    }
    Sk.asserts.fail("wrong number of children for except clause");
}

function astForTryStmt (c, n) {
    var exceptSt;
    var i;
    var handlers;
    var nc = NCH(n);
    var nexcept = (nc - 3) / 3;
    var body, orelse = [],
        finally_ = null;

    REQ(n, SYM.try_stmt);
    body = astForSuite(c, CHILD(n, 2));
    if (CHILD(n, nc - 3).type === TOK.T_NAME) {
        if (CHILD(n, nc - 3).value === "finally") {
            if (nc >= 9 && CHILD(n, nc - 6).type === TOK.T_NAME) {
                /* we can assume it's an "else",
                 because nc >= 9 for try-else-finally and
                 it would otherwise have a type of except_clause */
                orelse = astForSuite(c, CHILD(n, nc - 4));
                nexcept--;
            }

            finally_ = astForSuite(c, CHILD(n, nc - 1));
            nexcept--;
        }
        else {
            /* we can assume it's an "else",
             otherwise it would have a type of except_clause */
            orelse = astForSuite(c, CHILD(n, nc - 1));
            nexcept--;
        }
    }
    else if (CHILD(n, nc - 3).type !== SYM.except_clause) {
        throw new Sk.builtin.SyntaxError("malformed 'try' statement", c.c_filename, n.lineno);
    }

    if (nexcept > 0) {
        handlers = [];
        for (i = 0; i < nexcept; ++i) {
            handlers[i] = astForExceptClause(c, CHILD(n, 3 + i * 3), CHILD(n, 5 + i * 3));
        }
        exceptSt = new Sk.astnodes.TryExcept(body, handlers, orelse, n.lineno, n.col_offset);

        if (!finally_) {
            return exceptSt;
        }

        /* if a 'finally' is present too, we nest the TryExcept within a
         TryFinally to emulate try ... except ... finally */
        body = [exceptSt];
    }

    Sk.asserts.assert(finally_ !== null);
    return new Sk.astnodes.TryFinally(body, finally_, n.lineno, n.col_offset);
}


function astForDottedName (c, n) {
    var i;
    var e;
    var id;
    var col_offset;
    var lineno;
    REQ(n, SYM.dotted_name);
    lineno = n.lineno;
    col_offset = n.col_offset;
    id = strobj(CHILD(n, 0).value);
    e = new Sk.astnodes.Name(id, Sk.astnodes.Load, lineno, col_offset);
    for (i = 2; i < NCH(n); i += 2) {
        id = strobj(CHILD(n, i).value);
        e = new Sk.astnodes.Attribute(e, id, Sk.astnodes.Load, lineno, col_offset);
    }
    return e;
}

function astForDecorator (c, n) {
    /* decorator: '@' dotted_name [ '(' [arglist] ')' ] NEWLINE */
    var nameExpr;
    REQ(n, SYM.decorator);
    REQ(CHILD(n, 0), TOK.T_AT);
    REQ(CHILD(n, NCH(n) - 1), TOK.T_NEWLINE);
    nameExpr = astForDottedName(c, CHILD(n, 1));
    if (NCH(n) === 3) // no args
    {
        return nameExpr;
    }
    else if (NCH(n) === 5) // call with no args
    {
        return new Sk.astnodes.Call(nameExpr, [], [], null, null, n.lineno, n.col_offset);
    }
    else {
        return astForCall(c, CHILD(n, 3), nameExpr);
    }
}

function astForDecorators (c, n) {
    var i;
    var decoratorSeq;
    REQ(n, SYM.decorators);
    decoratorSeq = [];
    for (i = 0; i < NCH(n); ++i) {
        decoratorSeq[i] = astForDecorator(c, CHILD(n, i));
    }
    return decoratorSeq;
}

function astForDecorated (c, n) {
    var thing;
    var decoratorSeq;
    REQ(n, SYM.decorated);
    decoratorSeq = astForDecorators(c, CHILD(n, 0));
    Sk.asserts.assert(CHILD(n, 1).type === SYM.funcdef || CHILD(n, 1).type === SYM.classdef);

    thing = null;
    if (CHILD(n, 1).type === SYM.funcdef) {
        thing = astForFuncdef(c, CHILD(n, 1), decoratorSeq);
    }
    else if (CHILD(n, 1) === SYM.classdef) {
        thing = astForClassdef(c, CHILD(n, 1), decoratorSeq);
    }
    if (thing) {
        thing.lineno = n.lineno;
        thing.col_offset = n.col_offset;
    }
    return thing;
}


/* with_item: test ['as' expr] */
function astForWithItem (c, n, content) {
    var expr_ty, context_expr, optional_vars;
    REQ(n, SYM.with_item);
    context_expr = astForExpr(c, CHILD(n, 0));
    if (NCH(n) == 3) {
        optional_vars = astForExpr(c, CHILD(n, 2));
        setContext(c, optional_vars, Sk.astnodes.Store, n);
    }

    return new Sk.astnodes.With_(context_expr, optional_vars, content, n.lineno, n.col_offset);
}

function astForWithStmt (c, n) {
    /* with_stmt: 'with' with_item (',' with_item)* ':' suite */
    var i;
    var ret
    var inner;

    REQ(n, SYM.with_stmt)

    /* process the with items inside-out */
    i = NCH(n) -1 
    /* the suite of the innermost with item is the suite of the with stmt */
    inner = astForSuite(c, CHILD(n,i));

    while (true) {
        i-=2;
        ret = astForWithItem(c, CHILD(n, i), inner)
        /* was this the last item? */
        if (i == 1) {
            break;
        }

        inner = [ret];
    } 

    return ret
}

function astForExecStmt (c, n) {
    var expr1, globals = null, locals = null;
    var nchildren = NCH(n);
    Sk.asserts.assert(nchildren === 2 || nchildren === 4 || nchildren === 6);

    /* exec_stmt: 'exec' expr ['in' test [',' test]] */
    REQ(n, SYM.exec_stmt);
    expr1 = astForExpr(c, CHILD(n, 1));
    if (nchildren >= 4) {
        globals = astForExpr(c, CHILD(n, 3));
    }
    if (nchildren === 6) {
        locals = astForExpr(c, CHILD(n, 5));
    }
    return new Sk.astnodes.Exec(expr1, globals, locals, n.lineno, n.col_offset);
}

function astForIfStmt (c, n) {
    /* if_stmt: 'if' test ':' suite ('elif' test ':' suite)*
     ['else' ':' suite]
     */
    var off;
    var i;
    var orelse;
    var hasElse;
    var nElif;
    var decider;
    var s;
    REQ(n, SYM.if_stmt);
    if (NCH(n) === 4) {
        return new Sk.astnodes.If_(
            astForExpr(c, CHILD(n, 1)),
            astForSuite(c, CHILD(n, 3)),
            [], n.lineno, n.col_offset);
    }

    s = CHILD(n, 4).value;
    decider = s.charAt(2); // elSe or elIf
    if (decider === "s") {
        return new Sk.astnodes.If_(
            astForExpr(c, CHILD(n, 1)),
            astForSuite(c, CHILD(n, 3)),
            astForSuite(c, CHILD(n, 6)),
            n.lineno, n.col_offset);
    }
    else if (decider === "i") {
        nElif = NCH(n) - 4;
        hasElse = false;
        orelse = [];

        /* must reference the child nElif+1 since 'else' token is third, not
         * fourth child from the end. */
        if (CHILD(n, nElif + 1).type === TOK.T_NAME &&
            CHILD(n, nElif + 1).value.charAt(2) === "s") {
            hasElse = true;
            nElif -= 3;
        }
        nElif /= 4;

        if (hasElse) {
            orelse = [
                new Sk.astnodes.If_(
                    astForExpr(c, CHILD(n, NCH(n) - 6)),
                    astForSuite(c, CHILD(n, NCH(n) - 4)),
                    astForSuite(c, CHILD(n, NCH(n) - 1)),
                    CHILD(n, NCH(n) - 6).lineno,
                    CHILD(n, NCH(n) - 6).col_offset)];
            nElif--;
        }

        for (i = 0; i < nElif; ++i) {
            off = 5 + (nElif - i - 1) * 4;
            orelse = [
                new Sk.astnodes.If_(
                    astForExpr(c, CHILD(n, off)),
                    astForSuite(c, CHILD(n, off + 2)),
                    orelse,
                    CHILD(n, off).lineno,
                    CHILD(n, off).col_offset)];
        }
        return new Sk.astnodes.If_(
            astForExpr(c, CHILD(n, 1)),
            astForSuite(c, CHILD(n, 3)),
            orelse, n.lineno, n.col_offset);
    }

    Sk.asserts.fail("unexpected token in 'if' statement");
}

function astForExprlist (c, n, context) {
    var e;
    var i;
    var seq;
    REQ(n, SYM.exprlist);
    seq = [];
    for (i = 0; i < NCH(n); i += 2) {
        e = astForExpr(c, CHILD(n, i));
        seq[i / 2] = e;
        if (context) {
            setContext(c, e, context, CHILD(n, i));
        }
    }
    return seq;
}

function astForDelStmt (c, n) {
    /* del_stmt: 'del' exprlist */
    REQ(n, SYM.del_stmt);
    return new Sk.astnodes.Delete_(astForExprlist(c, CHILD(n, 1), Sk.astnodes.Del), n.lineno, n.col_offset);
}

function astForGlobalStmt (c, n) {
    /* global_stmt: 'global' NAME (',' NAME)* */
    var i;
    var s = [];
    REQ(n, SYM.global_stmt);
    for (i = 1; i < NCH(n); i += 2) {
        s[(i - 1) / 2] = strobj(CHILD(n, i).value);
    }
    return new Sk.astnodes.Global(s, n.lineno, n.col_offset);
}

function astForAssertStmt (c, n) {
    /* assert_stmt: 'assert' test [',' test] */
    REQ(n, SYM.assert_stmt);
    if (NCH(n) === 2) {
        return new Sk.astnodes.Assert(astForExpr(c, CHILD(n, 1)), null, n.lineno, n.col_offset);
    }
    else if (NCH(n) === 4) {
        return new Sk.astnodes.Assert(astForExpr(c, CHILD(n, 1)), astForExpr(c, CHILD(n, 3)), n.lineno, n.col_offset);
    }
    Sk.asserts.fail("improper number of parts to assert stmt");
}

function aliasForImportName (c, n) {
    /*
     import_as_name: NAME ['as' NAME]
     dotted_as_name: dotted_name ['as' NAME]
     dotted_name: NAME ('.' NAME)*
     */

    var i;
    var a;
    var name;
    var str;
    loop: while (true) {
        switch (n.type) {
            case SYM.import_as_name:
                str = null;
                name = strobj(CHILD(n, 0).value);
                if (NCH(n) === 3) {
                    str = CHILD(n, 2).value;
                }
                return new Sk.astnodes.alias(name, str == null ? null : strobj(str));
            case SYM.dotted_as_name:
                if (NCH(n) === 1) {
                    n = CHILD(n, 0);
                    continue loop;
                }
                else {
                    a = aliasForImportName(c, CHILD(n, 0));
                    Sk.asserts.assert(!a.asname);
                    a.asname = strobj(CHILD(n, 2).value);
                    return a;
                }
                break;
            case SYM.dotted_name:
                if (NCH(n) === 1) {
                    return new Sk.astnodes.alias(strobj(CHILD(n, 0).value), null);
                }
                else {
                    // create a string of the form a.b.c
                    str = "";
                    for (i = 0; i < NCH(n); i += 2) {
                        str += CHILD(n, i).value + ".";
                    }
                    return new Sk.astnodes.alias(strobj(str.substr(0, str.length - 1)), null);
                }
                break;
            case TOK.T_STAR:
                return new Sk.astnodes.alias(strobj("*"), null);
            default:
                throw new Sk.builtin.SyntaxError("unexpected import name", c.c_filename, n.lineno);
        }
        break;
    }
}

function astForImportStmt (c, n) {
    /*
     import_stmt: import_name | import_from
     import_name: 'import' dotted_as_names
     import_from: 'from' ('.'* dotted_name | '.') 'import'
     ('*' | '(' import_as_names ')' | import_as_names)
     */
    var modname;
    var idx;
    var nchildren;
    var ndots;
    var mod;
    var i;
    var aliases;
    var col_offset;
    var lineno;
    REQ(n, SYM.import_stmt);
    lineno = n.lineno;
    col_offset = n.col_offset;
    n = CHILD(n, 0);
    if (n.type === SYM.import_name) {
        n = CHILD(n, 1);
        REQ(n, SYM.dotted_as_names);
        aliases = [];
        for (i = 0; i < NCH(n); i += 2) {
            aliases[i / 2] = aliasForImportName(c, CHILD(n, i));
        }
        return new Sk.astnodes.Import_(aliases, lineno, col_offset);
    }
    else if (n.type === SYM.import_from) {
        mod = null;
        ndots = 0;

        for (idx = 1; idx < NCH(n); ++idx) {
            if (CHILD(n, idx).type === SYM.dotted_name) {
                mod = aliasForImportName(c, CHILD(n, idx));
                idx++;
                break;
            }
            else if (CHILD(n, idx).type !== TOK.T_DOT) {
                break;
            }
            ndots++;
        }
        ++idx; // skip the import keyword
        switch (CHILD(n, idx).type) {
            case TOK.T_STAR:
                // from ... import
                n = CHILD(n, idx);
                nchildren = 1;
                break;
            case TOK.T_LPAR:
                // from ... import (x, y, z)
                n = CHILD(n, idx + 1);
                nchildren = NCH(n);
                break;
            case SYM.import_as_names:
                // from ... import x, y, z
                n = CHILD(n, idx);
                nchildren = NCH(n);
                if (nchildren % 2 === 0) {
                    throw new Sk.builtin.SyntaxError("trailing comma not allowed without surrounding parentheses", c.c_filename, n.lineno);
                }
                break;
            default:
                throw new Sk.builtin.SyntaxError("Unexpected node-type in from-import", c.c_filename, n.lineno);
        }
        aliases = [];
        if (n.type === TOK.T_STAR) {
            aliases[0] = aliasForImportName(c, n);
        }
        else {
            for (i = 0; i < NCH(n); i += 2) {
                aliases[i / 2] = aliasForImportName(c, CHILD(n, i));
            }
        }
        modname = mod ? mod.name.v : "";
        return new Sk.astnodes.ImportFrom(strobj(modname), aliases, ndots, lineno, col_offset);
    }
    throw new Sk.builtin.SyntaxError("unknown import statement", c.c_filename, n.lineno);
}

function astForTestlistComp(c, n) {
    /* testlist_comp: test ( comp_for | (',' test)* [','] ) */
    /* argument: test [comp_for] */
    Sk.asserts.assert(n.type === SYM.testlist_comp || n.type === SYM.argument);
    if (NCH(n) > 1 && CHILD(n, 1).type === SYM.comp_for) {
        return astForGenExpr(c, n);
    }
    return astForTestlist(c, n);
}

function astForListcomp (c, n) {
    /* listmaker: test ( list_for | (',' test)* [','] )
     list_for: 'for' exprlist 'in' testlist_safe [list_iter]
     list_iter: list_for | list_if
     list_if: 'if' test [list_iter]
     testlist_safe: test [(',' test)+ [',']]
     */

    function countListFors (c, n) {
        var nfors = 0;
        var ch = CHILD(n, 1);
        count_list_for: while (true) {
            nfors++;
            REQ(ch, SYM.list_for);
            if (NCH(ch) === 5) {
                ch = CHILD(ch, 4);
            }
            else {
                return nfors;
            }
            count_list_iter: while (true) {
                REQ(ch, SYM.list_iter);
                ch = CHILD(ch, 0);
                if (ch.type === SYM.list_for) {
                    continue count_list_for;
                }
                else if (ch.type === SYM.list_if) {
                    if (NCH(ch) === 3) {
                        ch = CHILD(ch, 2);
                        continue count_list_iter;
                    }
                    else {
                        return nfors;
                    }
                }
                break;
            }
            break;
        }
    }

    function countListIfs (c, n) {
        var nifs = 0;
        while (true) {
            REQ(n, SYM.list_iter);
            if (CHILD(n, 0).type === SYM.list_for) {
                return nifs;
            }
            n = CHILD(n, 0);
            REQ(n, SYM.list_if);
            nifs++;
            if (NCH(n) == 2) {
                return nifs;
            }
            n = CHILD(n, 2);
        }
    }

    var j;
    var ifs;
    var nifs;
    var lc;
    var expression;
    var t;
    var forch;
    var i;
    var ch;
    var listcomps;
    var nfors;
    var elt;
    REQ(n, SYM.listmaker);
    Sk.asserts.assert(NCH(n) > 1);
    elt = astForExpr(c, CHILD(n, 0));
    nfors = countListFors(c, n);
    listcomps = [];
    ch = CHILD(n, 1);
    for (i = 0; i < nfors; ++i) {
        REQ(ch, SYM.list_for);
        forch = CHILD(ch, 1);
        t = astForExprlist(c, forch, Sk.astnodes.Store);
        expression = astForTestlist(c, CHILD(ch, 3));
        if (NCH(forch) === 1) {
            lc = new Sk.astnodes.comprehension(t[0], expression, []);
        }
        else {
            lc = new Sk.astnodes.comprehension(new Sk.astnodes.Tuple(t, Sk.astnodes.Store, ch.lineno, ch.col_offset), expression, []);
        }

        if (NCH(ch) === 5) {
            ch = CHILD(ch, 4);
            nifs = countListIfs(c, ch);
            ifs = [];
            for (j = 0; j < nifs; ++j) {
                REQ(ch, SYM.list_iter);
                ch = CHILD(ch, 0);
                REQ(ch, SYM.list_if);
                ifs[j] = astForExpr(c, CHILD(ch, 1));
                if (NCH(ch) === 3) {
                    ch = CHILD(ch, 2);
                }
            }
            if (ch.type === SYM.list_iter) {
                ch = CHILD(ch, 0);
            }
            lc.ifs = ifs;
        }
        listcomps[i] = lc;
    }
    return new Sk.astnodes.ListComp(elt, listcomps, n.lineno, n.col_offset);
}

function astForFactor (c, n) {
    /* some random peephole thing that cpy does */
    var expression;
    var pnum;
    var patom;
    var ppower;
    var pfactor;
    if (CHILD(n, 0).type === TOK.T_MINUS && NCH(n) === 2) {
        pfactor = CHILD(n, 1);
        if (pfactor.type === SYM.factor && NCH(pfactor) === 1) {
            ppower = CHILD(pfactor, 0);
            if (ppower.type === SYM.power && NCH(ppower) === 1) {
                patom = CHILD(ppower, 0);
                if (patom.type === SYM.atom) {
                    pnum = CHILD(patom, 0);
                    if (pnum.type === TOK.T_NUMBER) {
                        pnum.value = "-" + pnum.value;
                        return astForAtom(c, patom);
                    }
                }
            }
        }
    }

    expression = astForExpr(c, CHILD(n, 1));
    switch (CHILD(n, 0).type) {
        case TOK.T_PLUS:
            return new Sk.astnodes.UnaryOp(Sk.astnodes.UAdd, expression, n.lineno, n.col_offset);
        case TOK.T_MINUS:
            return new Sk.astnodes.UnaryOp(Sk.astnodes.USub, expression, n.lineno, n.col_offset);
        case TOK.T_TILDE:
            return new Sk.astnodes.UnaryOp(Sk.astnodes.Invert, expression, n.lineno, n.col_offset);
    }

    Sk.asserts.fail("unhandled factor");
}

function astForForStmt (c, n) {
    /* for_stmt: 'for' exprlist 'in' testlist ':' suite ['else' ':' suite] */
    var target;
    var _target;
    var nodeTarget;
    var seq = [];
    REQ(n, SYM.for_stmt);
    if (NCH(n) === 9) {
        seq = astForSuite(c, CHILD(n, 8));
    }
    nodeTarget = CHILD(n, 1);
    _target = astForExprlist(c, nodeTarget, Sk.astnodes.Store);
    if (NCH(nodeTarget) === 1) {
        target = _target[0];
    }
    else {
        target = new Sk.astnodes.Tuple(_target, Sk.astnodes.Store, n.lineno, n.col_offset);
    }

    return new Sk.astnodes.For_(target,
        astForTestlist(c, CHILD(n, 3)),
        astForSuite(c, CHILD(n, 5)),
        seq, n.lineno, n.col_offset);
}

function astForCall (c, n, func) {
    /*
      arglist: (argument ',')* (argument [',']| '*' test [',' '**' test]
               | '**' test)
      argument: test [comp_for] | test '=' test       # Really [keyword '='] test
    */
    var tmp;
    var k;
    var key;
    var e;
    var kwarg;
    var vararg;
    var keywords;
    var args;
    var ch;
    var i;
    var ngens;
    var nkeywords;
    var nargs;

    REQ(n, SYM.arglist);
    nargs = 0;
    nkeywords = 0;
    ngens = 0;
    for (i = 0; i < NCH(n); i++) {
        ch = CHILD(n, i);
        if (ch.type === SYM.argument) {
            if (NCH(ch) === 1) {
                nargs++;
            }
            else if (CHILD(ch, 1).type === SYM.comp_for) {
                ngens++;
            }
            else {
                nkeywords++;
            }
        }
    }
    if (ngens > 1 || (ngens && (nargs || nkeywords))) {
        throw new Sk.builtin.SyntaxError("Generator expression must be parenthesized if not sole argument", c.c_filename, n.lineno);
    }
    if (nargs + nkeywords + ngens > 255) {
        throw new Sk.builtin.SyntaxError("more than 255 arguments", c.c_filename, n.lineno);
    }
    args = [];
    keywords = [];
    nargs = 0;
    nkeywords = 0;
    vararg = null;
    kwarg = null;
    for (i = 0; i < NCH(n); i++) {
        ch = CHILD(n, i);
        if (ch.type === SYM.argument) {
            if (NCH(ch) === 1) {
                if (nkeywords) {
                    throw new Sk.builtin.SyntaxError("non-keyword arg after keyword arg", c.c_filename, n.lineno);
                }
                if (vararg) {
                    throw new Sk.builtin.SyntaxError("only named arguments may follow *expression", c.c_filename, n.lineno);
                }
                args[nargs++] = astForExpr(c, CHILD(ch, 0));
            }
            else if (CHILD(ch, 1).type === SYM.comp_for) {
                args[nargs++] = astForGenExpr(c, ch);
            }
            else {
                e = astForExpr(c, CHILD(ch, 0));
                if (e.constructor === Sk.astnodes.Lambda) {
                    throw new Sk.builtin.SyntaxError("lambda cannot contain assignment", c.c_filename, n.lineno);
                }
                else if (e.constructor !== Sk.astnodes.Name) {
                    throw new Sk.builtin.SyntaxError("keyword can't be an expression", c.c_filename, n.lineno);
                }
                key = e.id;
                forbiddenCheck(c, CHILD(ch, 0), key, n.lineno);
                for (k = 0; k < nkeywords; ++k) {
                    tmp = keywords[k].arg;
                    if (tmp === key) {
                        throw new Sk.builtin.SyntaxError("keyword argument repeated", c.c_filename, n.lineno);
                    }
                }
                keywords[nkeywords++] = new Sk.astnodes.keyword(key, astForExpr(c, CHILD(ch, 2)));
            }
        }
        else if (ch.type === TOK.T_STAR) {
            vararg = astForExpr(c, CHILD(n, ++i));
        }
        else if (ch.type === TOK.T_DOUBLESTAR) {
            kwarg = astForExpr(c, CHILD(n, ++i));
        }
    }
    return new Sk.astnodes.Call(func, args, keywords, vararg, kwarg, func.lineno, func.col_offset);
}

function astForTrailer (c, n, leftExpr) {
    /* trailer: '(' [arglist] ')' | '[' subscriptlist ']' | '.' NAME 
     subscriptlist: subscript (',' subscript)* [',']
     subscript: '.' '.' '.' | test | [test] ':' [test] [sliceop]
     */
    var e;
    var elts;
    var slc;
    var j;
    var slices;
    var simple;
    REQ(n, SYM.trailer);
    if (CHILD(n, 0).type === TOK.T_LPAR) {
        if (NCH(n) === 2) {
            return new Sk.astnodes.Call(leftExpr, [], [], null, null, n.lineno, n.col_offset);
        }
        else {
            return astForCall(c, CHILD(n, 1), leftExpr);
        }
    }
    else if (CHILD(n, 0).type === TOK.T_DOT) {
        return new Sk.astnodes.Attribute(leftExpr, strobj(CHILD(n, 1).value), Sk.astnodes.Load, n.lineno, n.col_offset);
    }
    else {
        REQ(CHILD(n, 0), TOK.T_LSQB);
        REQ(CHILD(n, 2), TOK.T_RSQB);
        n = CHILD(n, 1);
        if (NCH(n) === 1) {
            return new Sk.astnodes.Subscript(leftExpr, astForSlice(c, CHILD(n, 0)), Sk.astnodes.Load, n.lineno, n.col_offset);
        }
        else {
            /* The grammar is ambiguous here. The ambiguity is resolved 
             by treating the sequence as a tuple literal if there are
             no slice features.
             */
            simple = true;
            slices = [];
            for (j = 0; j < NCH(n); j += 2) {
                slc = astForSlice(c, CHILD(n, j));
                if (slc.constructor !== Sk.astnodes.Index) {
                    simple = false;
                }
                slices[j / 2] = slc;
            }
            if (!simple) {
                return new Sk.astnodes.Subscript(leftExpr, new Sk.astnodes.ExtSlice(slices), Sk.astnodes.Load, n.lineno, n.col_offset);
            }
            elts = [];
            for (j = 0; j < slices.length; ++j) {
                slc = slices[j];
                Sk.asserts.assert(slc.constructor === Sk.astnodes.Index && slc.value !== null && slc.value !== undefined);
                elts[j] = slc.value;
            }
            e = new Sk.astnodes.Tuple(elts, Sk.astnodes.Load, n.lineno, n.col_offset);
            return new Sk.astnodes.Subscript(leftExpr, new Sk.astnodes.Index(e), Sk.astnodes.Load, n.lineno, n.col_offset);
        }
    }
}

function astForFlowStmt (c, n) {
    /*
     flow_stmt: break_stmt | continue_stmt | return_stmt | raise_stmt
     | yield_stmt
     break_stmt: 'break'
     continue_stmt: 'continue'
     return_stmt: 'return' [testlist]
     yield_stmt: yield_expr
     yield_expr: 'yield' testlist
     raise_stmt: 'raise' [test [',' test [',' test]]]
     */
    var ch;
    REQ(n, SYM.flow_stmt);
    ch = CHILD(n, 0);
    switch (ch.type) {
        case SYM.break_stmt:
            return new Sk.astnodes.Break_(n.lineno, n.col_offset);
        case SYM.continue_stmt:
            return new Sk.astnodes.Continue_(n.lineno, n.col_offset);
        case SYM.yield_stmt:
            return new Sk.astnodes.Expr(astForExpr(c, CHILD(ch, 0)), n.lineno, n.col_offset);
        case SYM.return_stmt:
            if (NCH(ch) === 1) {
                return new Sk.astnodes.Return_(null, n.lineno, n.col_offset);
            }
            else {
                return new Sk.astnodes.Return_(astForTestlist(c, CHILD(ch, 1)), n.lineno, n.col_offset);
            }
            break;
        case SYM.raise_stmt:
            if (NCH(ch) === 1) {
                return new Sk.astnodes.Raise(null, null, null, n.lineno, n.col_offset);
            }
            else if (NCH(ch) === 2) {
                return new Sk.astnodes.Raise(astForExpr(c, CHILD(ch, 1)), null, null, n.lineno, n.col_offset);
            }
            else if (NCH(ch) === 4) {
                return new Sk.astnodes.Raise(
                    astForExpr(c, CHILD(ch, 1)),
                    astForExpr(c, CHILD(ch, 3)),
                    null, n.lineno, n.col_offset);
            }
            else if (NCH(ch) === 6) {
                return new Sk.astnodes.Raise(
                    astForExpr(c, CHILD(ch, 1)),
                    astForExpr(c, CHILD(ch, 3)),
                    astForExpr(c, CHILD(ch, 5)),
                    n.lineno, n.col_offset);
            }
            break;
        default:
            Sk.asserts.fail("unexpected flow_stmt");
    }
    Sk.asserts.fail("unhandled flow statement");
}

function astForArguments (c, n) {
    /* parameters: '(' [varargslist] ')'
     varargslist: (fpdef ['=' test] ',')* ('*' NAME [',' '**' NAME]
     | '**' NAME) | fpdef ['=' test] (',' fpdef ['=' test])* [',']
     */
    var parenthesized;
    var id;
    var complexArgs;
    var k;
    var j;
    var i;
    var foundDefault;
    var defaults;
    var args;
    var ch;
    var vararg = null;
    var kwarg = null;
    if (n.type === SYM.parameters) {
        if (NCH(n) === 2) // () as arglist
        {
            return new Sk.astnodes.arguments_([], null, null, []);
        }
        n = CHILD(n, 1);
    }
    REQ(n, SYM.varargslist);

    args = [];
    defaults = [];

    /* fpdef: NAME | '(' fplist ')'
     fplist: fpdef (',' fpdef)* [',']
     */
    foundDefault = false;
    i = 0;
    j = 0; // index for defaults
    k = 0; // index for args
    while (i < NCH(n)) {
        ch = CHILD(n, i);
        switch (ch.type) {
            case SYM.fpdef:
                complexArgs = 0;
                parenthesized = 0;
                handle_fpdef: while (true) {
                    if (i + 1 < NCH(n) && CHILD(n, i + 1).type === TOK.T_EQUAL) {
                        defaults[j++] = astForExpr(c, CHILD(n, i + 2));
                        i += 2;
                        foundDefault = true;
                    }
                    else if (foundDefault) {
                        /* def f((x)=4): pass should raise an error.
                         def f((x, (y))): pass will just incur the tuple unpacking warning. */
                        if (parenthesized && !complexArgs) {
                            throw new Sk.builtin.SyntaxError("parenthesized arg with default", c.c_filename, n.lineno);
                        }
                        throw new Sk.builtin.SyntaxError("non-default argument follows default argument", c.c_filename, n.lineno);
                    }

                    if (NCH(ch) === 3) {
                        ch = CHILD(ch, 1);
                        // def foo((x)): is not complex, special case.
                        if (NCH(ch) !== 1) {
                            throw new Sk.builtin.SyntaxError("tuple parameter unpacking has been removed", c.c_filename, n.lineno);
                        }
                        else {
                            /* def foo((x)): setup for checking NAME below. */
                            /* Loop because there can be many parens and tuple
                             unpacking mixed in. */
                            parenthesized = true;
                            ch = CHILD(ch, 0);
                            Sk.asserts.assert(ch.type === SYM.fpdef);
                            continue handle_fpdef;
                        }
                    }
                    if (CHILD(ch, 0).type === TOK.T_NAME) {
                        forbiddenCheck(c, n, CHILD(ch, 0).value, n.lineno);
                        id = strobj(CHILD(ch, 0).value);
                        args[k++] = new Sk.astnodes.Name(id, Sk.astnodes.Param, ch.lineno, ch.col_offset);
                    }
                    i += 2;
                    if (parenthesized) {
                        throw new Sk.builtin.SyntaxError("parenthesized argument names are invalid", c.c_filename, n.lineno);
                    }
                    break;
                }
                break;
            case TOK.T_STAR:
                forbiddenCheck(c, CHILD(n, i + 1), CHILD(n, i + 1).value, n.lineno);
                vararg = strobj(CHILD(n, i + 1).value);
                i += 3;
                break;
            case TOK.T_DOUBLESTAR:
                forbiddenCheck(c, CHILD(n, i + 1), CHILD(n, i + 1).value, n.lineno);
                kwarg = strobj(CHILD(n, i + 1).value);
                i += 3;
                break;
            default:
                Sk.asserts.fail("unexpected node in varargslist");
        }
    }
    return new Sk.astnodes.arguments_(args, vararg, kwarg, defaults);
}

function astForFuncdef (c, n, decoratorSeq) {
    /* funcdef: 'def' NAME parameters ':' suite */
    var body;
    var args;
    var name;
    REQ(n, SYM.funcdef);
    name = strobj(CHILD(n, 1).value);
    forbiddenCheck(c, CHILD(n, 1), CHILD(n, 1).value, n.lineno);
    args = astForArguments(c, CHILD(n, 2));
    body = astForSuite(c, CHILD(n, 4));
    return new Sk.astnodes.FunctionDef(name, args, body, decoratorSeq, n.lineno, n.col_offset);
}

function astForClassBases (c, n) {
    /* testlist: test (',' test)* [','] */
    Sk.asserts.assert(NCH(n) > 0);
    REQ(n, SYM.testlist);
    if (NCH(n) === 1) {
        return [ astForExpr(c, CHILD(n, 0)) ];
    }
    return seqForTestlist(c, n);
}

function astForClassdef (c, n, decoratorSeq) {
    /* classdef: 'class' NAME ['(' testlist ')'] ':' suite */
    var s;
    var bases;
    var classname;
    REQ(n, SYM.classdef);
    forbiddenCheck(c, n, CHILD(n, 1).value, n.lineno);
    classname = strobj(CHILD(n, 1).value);
    if (NCH(n) === 4) {
        return new Sk.astnodes.ClassDef(classname, [], astForSuite(c, CHILD(n, 3)), decoratorSeq, n.lineno, n.col_offset);
    }
    if (CHILD(n, 3).type === TOK.T_RPAR) {
        return new Sk.astnodes.ClassDef(classname, [], astForSuite(c, CHILD(n, 5)), decoratorSeq, n.lineno, n.col_offset);
    }

    bases = astForClassBases(c, CHILD(n, 3));
    s = astForSuite(c, CHILD(n, 6));
    return new Sk.astnodes.ClassDef(classname, bases, s, decoratorSeq, n.lineno, n.col_offset);
}

function astForLambdef (c, n) {
    /* lambdef: 'lambda' [varargslist] ':' test */
    var args;
    var expression;
    if (NCH(n) === 3) {
        args = new Sk.astnodes.arguments_([], null, null, []);
        expression = astForExpr(c, CHILD(n, 2));
    }
    else {
        args = astForArguments(c, CHILD(n, 1));
        expression = astForExpr(c, CHILD(n, 3));
    }
    return new Sk.astnodes.Lambda(args, expression, n.lineno, n.col_offset);
}

function astForComprehension(c, n) {
    /* testlist_comp: test ( comp_for | (',' test)* [','] )
       argument: test [comp_for] | test '=' test       # Really [keyword '='] test */
    
    var j;
    var ifs;
    var nifs;
    var ge;
    var expression;
    var t;
    var forch;
    var i;
    var ch;
    var genexps;
    var nfors;
    var elt;
    var comps;
    var comp;

    function countCompFors(c, n) {
        var nfors = 0;
        count_comp_for: while (true) {
            nfors++;
            REQ(n, SYM.comp_for);
            if (NCH(n) === 5) {
                n = CHILD(n, 4);
            } else {
                return nfors;
            }
            count_comp_iter: while (true) {
                REQ(n, SYM.comp_iter);
                n = CHILD(n, 0);
                if (n.type === SYM.comp_for) {
                    continue count_comp_for;
                } else if (n.type === SYM.comp_if) {
                    if (NCH(n) === 3) {
                        n = CHILD(n, 2);
                        continue count_comp_iter;
                    } else {
                        return nfors;
                    }
                }
                break;
            }
            break;
        }
        Sk.asserts.fail("logic error in countCompFors");
    }

    function countCompIfs(c, n) {
        var nifs = 0;
        while (true) {
            REQ(n, SYM.comp_iter);
            if (CHILD(n, 0).type === SYM.comp_for) {
                return nifs;
            }
            n = CHILD(n, 0);
            REQ(n, SYM.comp_if);
            nifs++;
            if (NCH(n) == 2) {
                return nifs;
            }
            n = CHILD(n, 2);
        }
    }

    nfors = countCompFors(c, n);
    comps = [];
    for (i = 0; i < nfors; ++i) {
        REQ(n, SYM.comp_for);
        forch = CHILD(n, 1);
        t = astForExprlist(c, forch, Sk.astnodes.Store);
        expression = astForExpr(c, CHILD(n, 3));
        if (NCH(forch) === 1) {
            comp = new Sk.astnodes.comprehension(t[0], expression, []);
        } else {
            comp = new Sk.astnodes.comprehension(new Sk.astnodes.Tuple(t, Sk.astnodes.Store, n.lineno, n.col_offset), expression, []);
        }
        if (NCH(n) === 5) {
            n = CHILD(n, 4);
            nifs = countCompIfs(c, n);
            ifs = [];
            for (j = 0; j < nifs; ++j) {
                REQ(n, SYM.comp_iter);
                n = CHILD(n, 0);
                REQ(n, SYM.comp_if);
                expression = astForExpr(c, CHILD(n, 1));
                ifs[j] = expression;
                if (NCH(n) === 3) {
                    n = CHILD(n, 2);
                }
            }
            if (n.type === SYM.comp_iter) {
                n = CHILD(n, 0);
            }
            comp.ifs = ifs;
        }
        comps[i] = comp;
    }
    return comps;
}

function astForIterComp(c, n, type) {
    var elt, comps;
    Sk.asserts.assert(NCH(n) > 1);
    elt = astForExpr(c, CHILD(n, 0));
    comps = astForComprehension(c, CHILD(n, 1));
    if (type === COMP_GENEXP) {
        return new Sk.astnodes.GeneratorExp(elt, comps, n.lineno, n.col_offset);
    } else if (type === COMP_SETCOMP) {
        return new Sk.astnodes.SetComp(elt, comps, n.lineno, n.col_offset);
    }
}

function astForDictComp(c, n) {
    var key, value;
    var comps = [];
    Sk.asserts.assert(NCH(n) > 3);
    REQ(CHILD(n, 1), TOK.T_COLON);
    key = astForExpr(c, CHILD(n, 0));
    value = astForExpr(c, CHILD(n, 2));
    comps = astForComprehension(c, CHILD(n, 3));
    return new Sk.astnodes.DictComp(key, value, comps, n.lineno, n.col_offset);
}

function astForGenExpr(c, n) {
    Sk.asserts.assert(n.type === SYM.testlist_comp || n.type === SYM.argument);
    return astForIterComp(c, n, COMP_GENEXP);
}

function astForSetComp(c, n) {
    Sk.asserts.assert(n.type === SYM.dictorsetmaker);
    return astForIterComp(c, n, COMP_SETCOMP);
}

function astForWhileStmt (c, n) {
    /* while_stmt: 'while' test ':' suite ['else' ':' suite] */
    REQ(n, SYM.while_stmt);
    if (NCH(n) === 4) {
        return new Sk.astnodes.While_(astForExpr(c, CHILD(n, 1)), astForSuite(c, CHILD(n, 3)), [], n.lineno, n.col_offset);
    }
    else if (NCH(n) === 7) {
        return new Sk.astnodes.While_(astForExpr(c, CHILD(n, 1)), astForSuite(c, CHILD(n, 3)), astForSuite(c, CHILD(n, 6)), n.lineno, n.col_offset);
    }
    Sk.asserts.fail("wrong number of tokens for 'while' stmt");
}

function astForAugassign (c, n) {
    REQ(n, SYM.augassign);
    n = CHILD(n, 0);
    switch (n.value.charAt(0)) {
        case "+":
            return Sk.astnodes.Add;
        case "-":
            return Sk.astnodes.Sub;
        case "/":
            if (n.value.charAt(1) === "/") {
                return Sk.astnodes.FloorDiv;
            }
            return Sk.astnodes.Div;
        case "%":
            return Sk.astnodes.Mod;
        case "<":
            return Sk.astnodes.LShift;
        case ">":
            return Sk.astnodes.RShift;
        case "&":
            return Sk.astnodes.BitAnd;
        case "^":
            return Sk.astnodes.BitXor;
        case "|":
            return Sk.astnodes.BitOr;
        case "*":
            if (n.value.charAt(1) === "*") {
                return Sk.astnodes.Pow;
            }
            return Sk.astnodes.Mult;
        default:
            Sk.asserts.fail("invalid augassign");
    }
}

function astForBinop (c, n) {
    /* Must account for a sequence of expressions.
     How should A op B op C by represented?
     BinOp(BinOp(A, op, B), op, C).
     */
    var tmp;
    var newoperator;
    var nextOper;
    var i;
    var result = new Sk.astnodes.BinOp(
        astForExpr(c, CHILD(n, 0)),
        getOperator(CHILD(n, 1)),
        astForExpr(c, CHILD(n, 2)),
        n.lineno, n.col_offset);
    var nops = (NCH(n) - 1) / 2;
    for (i = 1; i < nops; ++i) {
        nextOper = CHILD(n, i * 2 + 1);
        newoperator = getOperator(nextOper);
        tmp = astForExpr(c, CHILD(n, i * 2 + 2));
        result = new Sk.astnodes.BinOp(result, newoperator, tmp, nextOper.lineno, nextOper.col_offset);
    }
    return result;

}


function astForTestlist(c, n) {
    /* this doesn't show up in Grammar.txt never did: testlist_gexp: test (',' test)* [','] */
    /* testlist_comp: test (',' test)* [','] */
    /* testlist: test (',' test)* [','] */
    /* testlist_safe: test (',' test)+ [','] */
    /* testlist1: test (',' test)* */
    Sk.asserts.assert(NCH(n) > 0);
    if (n.type === SYM.testlist_comp) {
        if (NCH(n) > 1) {
            Sk.asserts.assert(CHILD(n, 1).type !== SYM.comp_for);
        }
    }
    else {
        Sk.asserts.assert(n.type === SYM.testlist || n.type === SYM.testlist_safe || n.type === SYM.testlist1);
    }

    if (NCH(n) === 1) {
        return astForExpr(c, CHILD(n, 0));
    }
    else {
        return new Sk.astnodes.Tuple(seqForTestlist(c, n), Sk.astnodes.Load, n.lineno, n.col_offset);
    }

}

function astForExprStmt (c, n) {
    var expression;
    var value;
    var e;
    var i;
    var targets;
    var expr2;
    var varName;
    var expr1;
    var ch;
    REQ(n, SYM.expr_stmt);
    /* expr_stmt: testlist (augassign (yield_expr|testlist) 
     | ('=' (yield_expr|testlist))*)
     testlist: test (',' test)* [',']
     augassign: '+=' | '-=' | '*=' | '/=' | '%=' | '&=' | '|=' | '^='
     | '<<=' | '>>=' | '**=' | '//='
     test: ... here starts the operator precendence dance
     */
    if (NCH(n) === 1) {
        return new Sk.astnodes.Expr(astForTestlist(c, CHILD(n, 0)), n.lineno, n.col_offset);
    }
    else if (CHILD(n, 1).type === SYM.augassign) {
        ch = CHILD(n, 0);
        expr1 = astForTestlist(c, ch);
        switch (expr1.constructor) {
            case Sk.astnodes.GeneratorExp:
                throw new Sk.builtin.SyntaxError("augmented assignment to generator expression not possible", c.c_filename, n.lineno);
            case Sk.astnodes.Yield:
                throw new Sk.builtin.SyntaxError("augmented assignment to yield expression not possible", c.c_filename, n.lineno);
            case Sk.astnodes.Name:
                varName = expr1.id;
                forbiddenCheck(c, ch, varName, n.lineno);
                break;
            case Sk.astnodes.Attribute:
            case Sk.astnodes.Subscript:
                break;
            default:
                throw new Sk.builtin.SyntaxError("illegal expression for augmented assignment", c.c_filename, n.lineno);
        }
        setContext(c, expr1, Sk.astnodes.Store, ch);

        ch = CHILD(n, 2);
        if (ch.type === SYM.testlist) {
            expr2 = astForTestlist(c, ch);
        }
        else {
            expr2 = astForExpr(c, ch);
        }

        return new Sk.astnodes.AugAssign(expr1, astForAugassign(c, CHILD(n, 1)), expr2, n.lineno, n.col_offset);
    }
    else {
        // normal assignment
        REQ(CHILD(n, 1), TOK.T_EQUAL);
        targets = [];
        for (i = 0; i < NCH(n) - 2; i += 2) {
            ch = CHILD(n, i);
            if (ch.type === SYM.yield_expr) {
                throw new Sk.builtin.SyntaxError("assignment to yield expression not possible", c.c_filename, n.lineno);
            }
            e = astForTestlist(c, ch);
            setContext(c, e, Sk.astnodes.Store, CHILD(n, i));
            targets[i / 2] = e;
        }
        value = CHILD(n, NCH(n) - 1);
        if (value.type === SYM.testlist) {
            expression = astForTestlist(c, value);
        }
        else {
            expression = astForExpr(c, value);
        }
        return new Sk.astnodes.Assign(targets, expression, n.lineno, n.col_offset);
    }
}

function astForIfexpr (c, n) {
    /* test: or_test 'if' or_test 'else' test */
    Sk.asserts.assert(NCH(n) === 5);
    return new Sk.astnodes.IfExp(
        astForExpr(c, CHILD(n, 2)),
        astForExpr(c, CHILD(n, 0)),
        astForExpr(c, CHILD(n, 4)),
        n.lineno, n.col_offset);
}

/**
 * s is a python-style string literal, including quote characters and u/r/b
 * prefixes. Returns decoded string object.
 */
function parsestr (c, s) {
    var encodeUtf8 = function (s) {
        return unescape(encodeURIComponent(s));
    };
    var decodeUtf8 = function (s) {
        return decodeURIComponent(escape(s));
    };
    var decodeEscape = function (s, quote) {
        var d3;
        var d2;
        var d1;
        var d0;
        var c;
        var i;
        var len = s.length;
        var ret = "";
        for (i = 0; i < len; ++i) {
            c = s.charAt(i);
            if (c === "\\") {
                ++i;
                c = s.charAt(i);
                if (c === "n") {
                    ret += "\n";
                }
                else if (c === "\\") {
                    ret += "\\";
                }
                else if (c === "t") {
                    ret += "\t";
                }
                else if (c === "r") {
                    ret += "\r";
                }
                else if (c === "b") {
                    ret += "\b";
                }
                else if (c === "f") {
                    ret += "\f";
                }
                else if (c === "v") {
                    ret += "\v";
                }
                else if (c === "0") {
                    ret += "\0";
                }
                else if (c === '"') {
                    ret += '"';
                }
                else if (c === '\'') {
                    ret += '\'';
                }
                else if (c === "\n") /* escaped newline, join lines */ {
                }
                else if (c === "x") {
                    d0 = s.charAt(++i);
                    d1 = s.charAt(++i);
                    ret += String.fromCharCode(parseInt(d0 + d1, 16));
                }
                else if (c === "u" || c === "U") {
                    d0 = s.charAt(++i);
                    d1 = s.charAt(++i);
                    d2 = s.charAt(++i);
                    d3 = s.charAt(++i);
                    ret += String.fromCharCode(parseInt(d0 + d1, 16), parseInt(d2 + d3, 16));
                }
                else {
                    // Leave it alone
                    ret += "\\" + c;
                    // Sk.asserts.fail("unhandled escape: '" + c.charCodeAt(0) + "'");
                }
            }
            else {
                ret += c;
            }
        }
        return ret;
    };

    // console.log("parsestr", s);

    var quote = s.charAt(0);
    var rawmode = false;
    var unicode = false;

    // treats every sequence as unicodes even if they are not treated with uU prefix
    // kinda hacking though working for most purposes
    if((c.c_flags & Parser.CO_FUTURE_UNICODE_LITERALS || Sk.__future__.unicode_literals === true)) {
        unicode = true;
    }

    if (quote === "u" || quote === "U") {
        s = s.substr(1);
        quote = s.charAt(0);
        unicode = true;
    }
    else if (quote === "r" || quote === "R") {
        s = s.substr(1);
        quote = s.charAt(0);
        rawmode = true;
    }
    Sk.asserts.assert(quote !== "b" && quote !== "B", "todo; haven't done b'' strings yet");

    Sk.asserts.assert(quote === "'" || quote === '"' && s.charAt(s.length - 1) === quote);
    s = s.substr(1, s.length - 2);
    if (unicode) {
        s = encodeUtf8(s);
    }

    if (s.length >= 4 && s.charAt(0) === quote && s.charAt(1) === quote) {
        Sk.asserts.assert(s.charAt(s.length - 1) === quote && s.charAt(s.length - 2) === quote);
        s = s.substr(2, s.length - 4);
    }

    if (rawmode || s.indexOf("\\") === -1) {
        return strobj(decodeUtf8(s));
    }
    return strobj(decodeEscape(s, quote));
}

function parsestrplus (c, n) {
    var i;
    var ret;
    REQ(CHILD(n, 0), TOK.T_STRING);
    ret = new Sk.builtin.str("");
    for (i = 0; i < NCH(n); ++i) {
        try {
            ret = ret.sq$concat(parsestr(c, CHILD(n, i).value));
        } catch (x) {
            throw new Sk.builtin.SyntaxError("invalid string (possibly contains a unicode character)", c.c_filename, CHILD(n, i).lineno);
        }
    }
    return ret;
}

function parsenumber (c, s, lineno) {
    var neg;
    var val;
    var tmp;
    var end = s.charAt(s.length - 1);

    // call internal complex type constructor for complex strings
    if (end === "j" || end === "J") {
        return Sk.builtin.complex.complex_subtype_from_string(s);
    }

    // Handle longs
    if (end === "l" || end === "L") {
        return Sk.longFromStr(s.substr(0, s.length - 1), 0);
    }

    // todo; we don't currently distinguish between int and float so
    // str is wrong for these.
    if (s.indexOf(".") !== -1) {
        return new Sk.builtin.float_(parseFloat(s));
    }

    // Handle integers of various bases
    tmp = s;
    neg = false;
    if (s.charAt(0) === "-") {
        tmp = s.substr(1);
        neg = true;
    }

    if (tmp.charAt(0) === "0" && (tmp.charAt(1) === "x" || tmp.charAt(1) === "X")) {
        // Hex
        tmp = tmp.substring(2);
        val = parseInt(tmp, 16);
    } else if ((s.indexOf("e") !== -1) || (s.indexOf("E") !== -1)) {
        // Float with exponent (needed to make sure e/E wasn't hex first)
        return new Sk.builtin.float_(parseFloat(s));
    } else if (tmp.charAt(0) === "0" && (tmp.charAt(1) === "b" || tmp.charAt(1) === "B")) {
        // Binary
        tmp = tmp.substring(2);
        val = parseInt(tmp, 2);
    } else if (tmp.charAt(0) === "0") {
        if (tmp === "0") {
            // Zero
            val = 0;
        } else {
            // Octal
            tmp = tmp.substring(1);
            if ((tmp.charAt(0) === "o") || (tmp.charAt(0) === "O")) {
                tmp = tmp.substring(1);
            }
            val = parseInt(tmp, 8);
        }
    }
    else {
        // Decimal
        val = parseInt(tmp, 10);
    }

    // Convert to long
    if (val > Sk.builtin.int_.threshold$ &&
        Math.floor(val) === val &&
        (s.indexOf("e") === -1 && s.indexOf("E") === -1)) {
        return Sk.longFromStr(s, 0);
    }

    // Small enough, return parsed number
    if (neg) {
        return new Sk.builtin.int_(-val);
    } else {
        return new Sk.builtin.int_(val);
    }
}

function astForSlice (c, n) {
    var n2;
    var step;
    var upper;
    var lower;
    var ch;
    REQ(n, SYM.subscript);

    /*
     subscript: '.' '.' '.' | test | [test] ':' [test] [sliceop]
     sliceop: ':' [test]
     */
    ch = CHILD(n, 0);
    lower = null;
    upper = null;
    step = null;
    if (ch.type === TOK.T_DOT) {
        return new Sk.astnodes.Ellipsis();
    }
    if (NCH(n) === 1 && ch.type === SYM.test) {
        return new Sk.astnodes.Index(astForExpr(c, ch));
    }
    if (ch.type === SYM.test) {
        lower = astForExpr(c, ch);
    }
    if (ch.type === TOK.T_COLON) {
        if (NCH(n) > 1) {
            n2 = CHILD(n, 1);
            if (n2.type === SYM.test) {
                upper = astForExpr(c, n2);
            }
        }
    }
    else if (NCH(n) > 2) {
        n2 = CHILD(n, 2);
        if (n2.type === SYM.test) {
            upper = astForExpr(c, n2);
        }
    }

    ch = CHILD(n, NCH(n) - 1);
    if (ch.type === SYM.sliceop) {
        if (NCH(ch) === 1) {
            ch = CHILD(ch, 0);
            step = new Sk.astnodes.Name(strobj("None"), Sk.astnodes.Load, ch.lineno, ch.col_offset);
        }
        else {
            ch = CHILD(ch, 1);
            if (ch.type === SYM.test) {
                step = astForExpr(c, ch);
            }
        }
    }
    return new Sk.astnodes.Slice(lower, upper, step);
}

function astForAtom(c, n) {
    /* atom: ('(' [yield_expr|testlist_comp] ')' |
       '[' [listmaker] ']' |
       '{' [dictorsetmaker] '}' |
       '`' testlist1 '`' |
       NAME | NUMBER | STRING+)
    */
    var i;
    var values;
    var keys;
    var size;
    var ch = CHILD(n, 0);
    var elts;
    switch (ch.type) {
        case TOK.T_NAME:
            // All names start in Load context, but may be changed later
            return new Sk.astnodes.Name(strobj(ch.value), Sk.astnodes.Load, n.lineno, n.col_offset);
        case TOK.T_STRING:
            return new Sk.astnodes.Str(parsestrplus(c, n), n.lineno, n.col_offset);
        case TOK.T_NUMBER:
            return new Sk.astnodes.Num(parsenumber(c, ch.value, n.lineno), n.lineno, n.col_offset);
        case TOK.T_LPAR: // various uses for parens
            ch = CHILD(n, 1);
            if (ch.type === TOK.T_RPAR) {
                return new Sk.astnodes.Tuple([], Sk.astnodes.Load, n.lineno, n.col_offset);
            }
            if (ch.type === SYM.yield_expr) {
                return astForExpr(c, ch);
            }
            //            if (NCH(ch) > 1 && CHILD(ch, 1).type === SYM.comp_for) {
            //                return astForComprehension(c, ch);
            //            }
            return astForTestlistComp(c, ch);
        case TOK.T_LSQB: // list or listcomp
            ch = CHILD(n, 1);
            if (ch.type === TOK.T_RSQB) {
                return new Sk.astnodes.List([], Sk.astnodes.Load, n.lineno, n.col_offset);
            }
            REQ(ch, SYM.listmaker);
            if (NCH(ch) === 1 || CHILD(ch, 1).type === TOK.T_COMMA) {
                return new Sk.astnodes.List(seqForTestlist(c, ch), Sk.astnodes.Load, n.lineno, n.col_offset);
            } 
            return astForListcomp(c, ch);
            
        case TOK.T_LBRACE:
            /* dictorsetmaker: 
             *     (test ':' test (comp_for : (',' test ':' test)* [','])) |
             *     (test (comp_for | (',' test)* [',']))
             */
            keys = [];
            values = [];
            ch = CHILD(n, 1);
            if (n.type === TOK.T_RBRACE) {
                //it's an empty dict
                return new Sk.astnodes.Dict([], null, n.lineno, n.col_offset);
            } 
            else if (NCH(ch) === 1 || (NCH(ch) !== 0 && CHILD(ch, 1).type === TOK.T_COMMA)) {
                //it's a simple set
                elts = [];
                size = Math.floor((NCH(ch) + 1) / 2);
                for (i = 0; i < NCH(ch); i += 2) {
                    var expression = astForExpr(c, CHILD(ch, i));
                    elts[i / 2] = expression;
                }
                return new Sk.astnodes.Set(elts, n.lineno, n.col_offset);
            } 
            else if (NCH(ch) !== 0 && CHILD(ch, 1).type == SYM.comp_for) {
                //it's a set comprehension
                return astForSetComp(c, ch);
            } 
            else if (NCH(ch) > 3 && CHILD(ch, 3).type === SYM.comp_for) {
                //it's a dict compr. I think.
                return astForDictComp(c, ch);
            } 
            else {
                size = Math.floor((NCH(ch) + 1) / 4); // + 1 for no trailing comma case
                for (i = 0; i < NCH(ch); i += 4) {
                    keys[i / 4] = astForExpr(c, CHILD(ch, i));
                    values[i / 4] = astForExpr(c, CHILD(ch, i + 2));
                }
                return new Sk.astnodes.Dict(keys, values, n.lineno, n.col_offset);
            }
        case TOK.T_BACKQUOTE:
            //throw new Sk.builtin.SyntaxError("backquote not supported, use repr()", c.c_filename, n.lineno);
            return new Sk.astnodes.Repr(astForTestlist(c, CHILD(n, 1)), n.lineno, n.col_offset);
        default:
            Sk.asserts.fail("unhandled atom " + ch.type.toString());

    }
}

function astForPower (c, n) {
    /* power: atom trailer* ('**' factor)*
     */
    var f;
    var tmp;
    var ch;
    var i;
    var e;
    REQ(n, SYM.power);
    e = astForAtom(c, CHILD(n, 0));
    if (NCH(n) === 1) {
        return e;
    }
    for (i = 1; i < NCH(n); ++i) {
        ch = CHILD(n, i);
        if (ch.type !== SYM.trailer) {
            break;
        }
        tmp = astForTrailer(c, ch, e);
        tmp.lineno = e.lineno;
        tmp.col_offset = e.col_offset;
        e = tmp;
    }
    if (CHILD(n, NCH(n) - 1).type === SYM.factor) {
        f = astForExpr(c, CHILD(n, NCH(n) - 1));
        e = new Sk.astnodes.BinOp(e, Sk.astnodes.Pow, f, n.lineno, n.col_offset);
    }
    return e;
}

function astForExpr (c, n) {
    /* handle the full range of simple expressions
     test: or_test ['if' or_test 'else' test] | lambdef
     or_test: and_test ('or' and_test)*
     and_test: not_test ('and' not_test)*
     not_test: 'not' not_test | comparison
     comparison: expr (comp_op expr)*
     expr: xor_expr ('|' xor_expr)*
     xor_expr: and_expr ('^' and_expr)*
     and_expr: shift_expr ('&' shift_expr)*
     shift_expr: arith_expr (('<<'|'>>') arith_expr)*
     arith_expr: term (('+'|'-') term)*
     term: factor (('*'|'/'|'%'|'//') factor)*
     factor: ('+'|'-'|'~') factor | power
     power: atom trailer* ('**' factor)*

     As well as modified versions that exist for backward compatibility,
     to explicitly allow:
     [ x for x in lambda: 0, lambda: 1 ]
     (which would be ambiguous without these extra rules)

     old_test: or_test | old_lambdef
     old_lambdef: 'lambda' [vararglist] ':' old_test

     */

    var exp;
    var cmps;
    var ops;
    var i;
    var seq;
    LOOP: while (true) {
        switch (n.type) {
            case SYM.test:
            case SYM.old_test:
                if (CHILD(n, 0).type === SYM.lambdef || CHILD(n, 0).type === SYM.old_lambdef) {
                    return astForLambdef(c, CHILD(n, 0));
                }
                else if (NCH(n) > 1) {
                    return astForIfexpr(c, n);
                }
            // fallthrough
            case SYM.or_test:
            case SYM.and_test:
                if (NCH(n) === 1) {
                    n = CHILD(n, 0);
                    continue LOOP;
                }
                seq = [];
                for (i = 0; i < NCH(n); i += 2) {
                    seq[i / 2] = astForExpr(c, CHILD(n, i));
                }
                if (CHILD(n, 1).value === "and") {
                    return new Sk.astnodes.BoolOp(Sk.astnodes.And, seq, n.lineno, n.col_offset);
                }
                Sk.asserts.assert(CHILD(n, 1).value === "or");
                return new Sk.astnodes.BoolOp(Sk.astnodes.Or, seq, n.lineno, n.col_offset);
            case SYM.not_test:
                if (NCH(n) === 1) {
                    n = CHILD(n, 0);
                    continue LOOP;
                }
                else {
                    return new Sk.astnodes.UnaryOp(Sk.astnodes.Not, astForExpr(c, CHILD(n, 1)), n.lineno, n.col_offset);
                }
                break;
            case SYM.comparison:
                if (NCH(n) === 1) {
                    n = CHILD(n, 0);
                    continue LOOP;
                }
                else {
                    ops = [];
                    cmps = [];
                    for (i = 1; i < NCH(n); i += 2) {
                        ops[(i - 1) / 2] = astForCompOp(c, CHILD(n, i));
                        cmps[(i - 1) / 2] = astForExpr(c, CHILD(n, i + 1));
                    }
                    return new Sk.astnodes.Compare(astForExpr(c, CHILD(n, 0)), ops, cmps, n.lineno, n.col_offset);
                }
                break;
            case SYM.expr:
            case SYM.xor_expr:
            case SYM.and_expr:
            case SYM.shift_expr:
            case SYM.arith_expr:
            case SYM.term:
                if (NCH(n) === 1) {
                    n = CHILD(n, 0);
                    continue LOOP;
                }
                return astForBinop(c, n);
            case SYM.yield_expr:
                exp = null;
                if (NCH(n) === 2) {
                    exp = astForTestlist(c, CHILD(n, 1));
                }
                return new Sk.astnodes.Yield(exp, n.lineno, n.col_offset);
            case SYM.factor:
                if (NCH(n) === 1) {
                    n = CHILD(n, 0);
                    continue LOOP;
                }
                return astForFactor(c, n);
            case SYM.power:
                return astForPower(c, n);
            default:
                Sk.asserts.fail("unhandled expr n.type: " + n.type.toString());
        }
        break;
    }
}

function astForPrintStmt (c, n) {
    /* print_stmt: 'print' ( [ test (',' test)* [','] ]
     | '>>' test [ (',' test)+ [','] ] )
     */
    var nl;
    var i, j;
    var seq;
    var start = 1;
    var dest = null;
    REQ(n, SYM.print_stmt);
    if (NCH(n) >= 2 && CHILD(n, 1).type === TOK.T_RIGHTSHIFT) {
        dest = astForExpr(c, CHILD(n, 2));
        start = 4;
    }
    seq = [];
    for (i = start, j = 0; i < NCH(n); i += 2, ++j) {
        seq[j] = astForExpr(c, CHILD(n, i));
    }
    nl = (CHILD(n, NCH(n) - 1)).type === TOK.T_COMMA ? false : true;
    return new Sk.astnodes.Print(dest, seq, nl, n.lineno, n.col_offset);
}

function astForStmt (c, n) {
    var ch;
    if (n.type === SYM.stmt) {
        Sk.asserts.assert(NCH(n) === 1);
        n = CHILD(n, 0);
    }
    if (n.type === SYM.simple_stmt) {
        Sk.asserts.assert(numStmts(n) === 1);
        n = CHILD(n, 0);
    }
    if (n.type === SYM.small_stmt) {
        REQ(n, SYM.small_stmt);
        n = CHILD(n, 0);
        /* small_stmt: expr_stmt | print_stmt  | del_stmt | pass_stmt
         | flow_stmt | import_stmt | global_stmt | exec_stmt
         | assert_stmt
         */
        switch (n.type) {
            case SYM.expr_stmt:
                return astForExprStmt(c, n);
            case SYM.print_stmt:
                return astForPrintStmt(c, n);
            case SYM.del_stmt:
                return astForDelStmt(c, n);
            case SYM.pass_stmt:
                return new Sk.astnodes.Pass(n.lineno, n.col_offset);
            case SYM.flow_stmt:
                return astForFlowStmt(c, n);
            case SYM.import_stmt:
                return astForImportStmt(c, n);
            case SYM.global_stmt:
                return astForGlobalStmt(c, n);
            case SYM.exec_stmt:
                return astForExecStmt(c, n);
            case SYM.assert_stmt:
                return astForAssertStmt(c, n);
            case SYM.debugger_stmt:
                return new Sk.astnodes.Debugger_(n.lineno, n.col_offset);
            default:
                Sk.asserts.fail("unhandled small_stmt");
        }
    }
    else {
        /* compound_stmt: if_stmt | while_stmt | for_stmt | try_stmt
                        | funcdef | classdef | decorated
        */
        ch = CHILD(n, 0);
        REQ(n, SYM.compound_stmt);
        switch (ch.type) {
            case SYM.if_stmt:
                return astForIfStmt(c, ch);
            case SYM.while_stmt:
                return astForWhileStmt(c, ch);
            case SYM.for_stmt:
                return astForForStmt(c, ch);
            case SYM.try_stmt:
                return astForTryStmt(c, ch);
            case SYM.with_stmt:
                return astForWithStmt(c, ch);
            case SYM.funcdef:
                return astForFuncdef(c, ch, []);
            case SYM.classdef:
                return astForClassdef(c, ch, []);
            case SYM.decorated:
                return astForDecorated(c, ch);
            default:
                Sk.asserts.assert("unhandled compound_stmt");
        }
    }
}

Sk.astFromParse = function (n, filename, c_flags) {
    var j;
    var num;
    var ch;
    var i;
    var c = new Compiling("utf-8", filename, c_flags);
    var stmts = [];
    var k = 0;
    switch (n.type) {
        case SYM.file_input:
            for (i = 0; i < NCH(n) - 1; ++i) {
                ch = CHILD(n, i);
                if (n.type === TOK.T_NEWLINE) {
                    continue;
                }
                REQ(ch, SYM.stmt);
                num = numStmts(ch);
                if (num === 1) {
                    stmts[k++] = astForStmt(c, ch);
                }
                else {
                    ch = CHILD(ch, 0);
                    REQ(ch, SYM.simple_stmt);
                    for (j = 0; j < num; ++j) {
                        stmts[k++] = astForStmt(c, CHILD(ch, j * 2));
                    }
                }
            }
            return new Sk.astnodes.Module(stmts);
        case SYM.eval_input:
            Sk.asserts.fail("todo;");
        case SYM.single_input:
            Sk.asserts.fail("todo;");
        default:
            Sk.asserts.fail("todo;");
    }
};

Sk.astDump = function (node) {
    var spaces = function (n) // todo; blurgh
    {
        var i;
        var ret = "";
        for (i = 0; i < n; ++i) {
            ret += " ";
        }
        return ret;
    };

    var _format = function (node, indent) {
        var ret;
        var elemsstr;
        var x;
        var elems;
        var fieldstr;
        var field;
        var attrs;
        var fieldlen;
        var b;
        var a;
        var i;
        var fields;
        var namelen;
        if (node === null) {
            return indent + "None";
        }
        else if (node.prototype && node.prototype._astname !== undefined && node.prototype._isenum) {
            return indent + node.prototype._astname + "()";
        }
        else if (node._astname !== undefined) {
            namelen = spaces(node._astname.length + 1);
            fields = [];
            for (i = 0; i < node._fields.length; i += 2) // iter_fields
            {
                a = node._fields[i]; // field name
                b = node._fields[i + 1](node); // field getter func
                fieldlen = spaces(a.length + 1);
                fields.push([a, _format(b, indent + namelen + fieldlen)]);
            }
            attrs = [];
            for (i = 0; i < fields.length; ++i) {
                field = fields[i];
                attrs.push(field[0] + "=" + field[1].replace(/^\s+/, ""));
            }
            fieldstr = attrs.join(",\n" + indent + namelen);
            return indent + node._astname + "(" + fieldstr + ")";
        }
        else if (Sk.isArrayLike(node)) {
            //Sk.debugout("arr", node.length);
            elems = [];
            for (i = 0; i < node.length; ++i) {
                x = node[i];
                elems.push(_format(x, indent + " "));
            }
            elemsstr = elems.join(",\n");
            return indent + "[" + elemsstr.replace(/^\s+/, "") + "]";
        }
        else {
            if (node === true) {
                ret = "True";
            }
            else if (node === false) {
                ret = "False";
            }
            else if (node instanceof Sk.builtin.lng) {
                ret = node.tp$str().v;
            }
            else if (node instanceof Sk.builtin.str) {
                ret = node["$r"]().v;
            }
            else {
                ret = "" + node;
            }
            return indent + ret;
        }
    };

    return _format(node, "");
};

Sk.exportSymbol("Sk.astFromParse", Sk.astFromParse);
Sk.exportSymbol("Sk.astDump", Sk.astDump);
/* Flags for def-use information */

var DEF_GLOBAL = 1;
/* global stmt */
var DEF_LOCAL = 2;
/* assignment in code block */
var DEF_PARAM = 2 << 1;
/* formal parameter */
var USE = 2 << 2;
/* name is used */
var DEF_STAR = 2 << 3;
/* parameter is star arg */
var DEF_DOUBLESTAR = 2 << 4;
/* parameter is star-star arg */
var DEF_INTUPLE = 2 << 5;
/* name defined in tuple in parameters */
var DEF_FREE = 2 << 6;
/* name used but not defined in nested block */
var DEF_FREE_GLOBAL = 2 << 7;
/* free variable is actually implicit global */
var DEF_FREE_CLASS = 2 << 8;
/* free variable from class's method */
var DEF_IMPORT = 2 << 9;
/* assignment occurred via import */

var DEF_BOUND = (DEF_LOCAL | DEF_PARAM | DEF_IMPORT);

/* GLOBAL_EXPLICIT and GLOBAL_IMPLICIT are used internally by the symbol
 table.  GLOBAL is returned from PyST_GetScope() for either of them.
 It is stored in ste_symbols at bits 12-14.
 */
var SCOPE_OFF = 11;
var SCOPE_MASK = 7;

var LOCAL = 1;
var GLOBAL_EXPLICIT = 2;
var GLOBAL_IMPLICIT = 3;
var FREE = 4;
var CELL = 5;

/* The following three names are used for the ste_unoptimized bit field */
var OPT_IMPORT_STAR = 1;
var OPT_EXEC = 2;
var OPT_BARE_EXEC = 4;
var OPT_TOPLEVEL = 8;
/* top-level names, including eval and exec */

var GENERATOR = 2;
var GENERATOR_EXPRESSION = 2;

var ModuleBlock = "module";
var FunctionBlock = "function";
var ClassBlock = "class";

var SYMTAB_CONSTS = {
    DEF_GLOBAL: DEF_GLOBAL,
    DEF_LOCAL: DEF_LOCAL,
    DEF_PARAM: DEF_PARAM,
    USE: USE,
    DEF_STAR: DEF_STAR,
    DEF_DOUBLESTAR: DEF_DOUBLESTAR,
    DEF_INTUPLE: DEF_INTUPLE,
    DEF_FREE: DEF_FREE,
    DEF_FREE_GLOBAL: DEF_FREE_GLOBAL,
    DEF_FREE_CLASS: DEF_FREE_CLASS,
    DEF_IMPORT: DEF_IMPORT,
    DEF_BOUND: DEF_BOUND,
    SCOPE_OFF: SCOPE_OFF,
    SCOPE_MASK: SCOPE_MASK,
    LOCAL: LOCAL,
    GLOBAL_EXPLICIT: GLOBAL_EXPLICIT,
    GLOBAL_IMPLICIT: GLOBAL_IMPLICIT,
    FREE: FREE,
    CELL: CELL,
    OPT_IMPORT_STAR: OPT_IMPORT_STAR,
    OPT_EXEC: OPT_EXEC,
    OPT_BARE_EXEC: OPT_BARE_EXEC,
    OPT_TOPLEVEL: OPT_TOPLEVEL,
    GENERATOR: GENERATOR,
    GENERATOR_EXPRESSION: GENERATOR_EXPRESSION,
    ModuleBlock: ModuleBlock,
    FunctionBlock: FunctionBlock,
    ClassBlock: ClassBlock
};

Sk.exportSymbol("SYMTAB_CONSTS", SYMTAB_CONSTS);

/**
 * @constructor
 * @param {string} name
 * @param {number} flags
 * @param {Array.<SymbolTableScope>} namespaces
 */
function Symbol_ (name, flags, namespaces) {
    this.__name = name;
    this.__flags = flags;
    this.__scope = (flags >> SCOPE_OFF) & SCOPE_MASK;
    this.__namespaces = namespaces || [];
}
Symbol_.prototype.get_name = function () {
    return this.__name;
};
Symbol_.prototype.is_referenced = function () {
    return !!(this.__flags & USE);
};
Symbol_.prototype.is_parameter = function () {
    return !!(this.__flags & DEF_PARAM);
};
Symbol_.prototype.is_global = function () {
    return this.__scope === GLOBAL_IMPLICIT || this.__scope == GLOBAL_EXPLICIT;
};
Symbol_.prototype.is_declared_global = function () {
    return this.__scope == GLOBAL_EXPLICIT;
};
Symbol_.prototype.is_local = function () {
    return !!(this.__flags & DEF_BOUND);
};
Symbol_.prototype.is_free = function () {
    return this.__scope == FREE;
};
Symbol_.prototype.is_imported = function () {
    return !!(this.__flags & DEF_IMPORT);
};
Symbol_.prototype.is_assigned = function () {
    return !!(this.__flags & DEF_LOCAL);
};
Symbol_.prototype.is_namespace = function () {
    return this.__namespaces && this.__namespaces.length > 0;
};
Symbol_.prototype.get_namespaces = function () {
    return this.__namespaces;
};

var astScopeCounter = 0;

/**
 * @constructor
 * @param {SymbolTable} table
 * @param {string} name
 * @param {string} type
 * @param {number} lineno
 */
function SymbolTableScope (table, name, type, ast, lineno) {
    this.symFlags = {};
    this.name = name;
    this.varnames = [];
    this.children = [];
    this.blockType = type;

    this.isNested = false;
    this.hasFree = false;
    this.childHasFree = false;  // true if child block has free vars including free refs to globals
    this.generator = false;
    this.varargs = false;
    this.varkeywords = false;
    this.returnsValue = false;

    this.lineno = lineno;

    this.table = table;

    if (table.cur && (table.cur.nested || table.cur.blockType === FunctionBlock)) {
        this.isNested = true;
    }

    ast.scopeId = astScopeCounter++;
    table.stss[ast.scopeId] = this;

    // cache of Symbols for returning to other parts of code
    this.symbols = {};
}
SymbolTableScope.prototype.get_type = function () {
    return this.blockType;
};
SymbolTableScope.prototype.get_name = function () {
    return this.name;
};
SymbolTableScope.prototype.get_lineno = function () {
    return this.lineno;
};
SymbolTableScope.prototype.is_nested = function () {
    return this.isNested;
};
SymbolTableScope.prototype.has_children = function () {
    return this.children.length > 0;
};
SymbolTableScope.prototype.get_identifiers = function () {
    return this._identsMatching(function () {
        return true;
    });
};
SymbolTableScope.prototype.lookup = function (name) {
    var namespaces;
    var flags;
    var sym;
    if (!this.symbols.hasOwnProperty(name)) {
        flags = this.symFlags[name];
        namespaces = this.__check_children(name);
        sym = this.symbols[name] = new Symbol_(name, flags, namespaces);
    }
    else {
        sym = this.symbols[name];
    }
    return sym;
};
SymbolTableScope.prototype.__check_children = function (name) {
    //print("  check_children:", name);
    var child;
    var i;
    var ret = [];
    for (i = 0; i < this.children.length; ++i) {
        child = this.children[i];
        if (child.name === name) {
            ret.push(child);
        }
    }
    return ret;
};

SymbolTableScope.prototype._identsMatching = function (f) {
    var k;
    var ret = [];
    for (k in this.symFlags) {
        if (this.symFlags.hasOwnProperty(k)) {
            if (f(this.symFlags[k])) {
                ret.push(k);
            }
        }
    }
    ret.sort();
    return ret;
};
SymbolTableScope.prototype.get_parameters = function () {
    Sk.asserts.assert(this.get_type() == "function", "get_parameters only valid for function scopes");
    if (!this._funcParams) {
        this._funcParams = this._identsMatching(function (x) {
            return x & DEF_PARAM;
        });
    }
    return this._funcParams;
};
SymbolTableScope.prototype.get_locals = function () {
    Sk.asserts.assert(this.get_type() == "function", "get_locals only valid for function scopes");
    if (!this._funcLocals) {
        this._funcLocals = this._identsMatching(function (x) {
            return x & DEF_BOUND;
        });
    }
    return this._funcLocals;
};
SymbolTableScope.prototype.get_globals = function () {
    Sk.asserts.assert(this.get_type() == "function", "get_globals only valid for function scopes");
    if (!this._funcGlobals) {
        this._funcGlobals = this._identsMatching(function (x) {
            var masked = (x >> SCOPE_OFF) & SCOPE_MASK;
            return masked == GLOBAL_IMPLICIT || masked == GLOBAL_EXPLICIT;
        });
    }
    return this._funcGlobals;
};
SymbolTableScope.prototype.get_frees = function () {
    Sk.asserts.assert(this.get_type() == "function", "get_frees only valid for function scopes");
    if (!this._funcFrees) {
        this._funcFrees = this._identsMatching(function (x) {
            var masked = (x >> SCOPE_OFF) & SCOPE_MASK;
            return masked == FREE;
        });
    }
    return this._funcFrees;
};
SymbolTableScope.prototype.get_methods = function () {
    var i;
    var all;
    Sk.asserts.assert(this.get_type() == "class", "get_methods only valid for class scopes");
    if (!this._classMethods) {
        // todo; uniq?
        all = [];
        for (i = 0; i < this.children.length; ++i) {
            all.push(this.children[i].name);
        }
        all.sort();
        this._classMethods = all;
    }
    return this._classMethods;
};
SymbolTableScope.prototype.getScope = function (name) {
    //print("getScope");
    //for (var k in this.symFlags) print(k);
    var v = this.symFlags[name];
    if (v === undefined) {
        return 0;
    }
    return (v >> SCOPE_OFF) & SCOPE_MASK;
};

/**
 * @constructor
 * @param {string} filename
 */
function SymbolTable (filename) {
    this.filename = filename;
    this.cur = null;
    this.top = null;
    this.stack = [];
    this.global = null; // points at top level module symFlags
    this.curClass = null; // current class or null
    this.tmpname = 0;

    // mapping from ast nodes to their scope if they have one. we add an
    // id to the ast node when a scope is created for it, and store it in
    // here for the compiler to lookup later.
    this.stss = {};
}
SymbolTable.prototype.getStsForAst = function (ast) {
    var v;
    Sk.asserts.assert(ast.scopeId !== undefined, "ast wasn't added to st?");
    v = this.stss[ast.scopeId];
    Sk.asserts.assert(v !== undefined, "unknown sym tab entry");
    return v;
};

SymbolTable.prototype.SEQStmt = function (nodes) {
    var val;
    var i;
    var len;
    Sk.asserts.assert(Sk.isArrayLike(nodes), "SEQ: nodes isn't array? got " + nodes.toString());
    len = nodes.length;
    for (i = 0; i < len; ++i) {
        val = nodes[i];
        if (val) {
            this.visitStmt(val);
        }
    }
};
SymbolTable.prototype.SEQExpr = function (nodes) {
    var val;
    var i;
    var len;
    Sk.asserts.assert(Sk.isArrayLike(nodes), "SEQ: nodes isn't array? got " + nodes.toString());
    len = nodes.length;
    for (i = 0; i < len; ++i) {
        val = nodes[i];
        if (val) {
            this.visitExpr(val);
        }
    }
};

SymbolTable.prototype.enterBlock = function (name, blockType, ast, lineno) {
    var prev;
    name = Sk.fixReservedNames(name);
    //print("enterBlock:", name);
    prev = null;
    if (this.cur) {
        prev = this.cur;
        this.stack.push(this.cur);
    }
    this.cur = new SymbolTableScope(this, name, blockType, ast, lineno);
    if (name === "top") {
        this.global = this.cur.symFlags;
    }
    if (prev) {
        //print("    adding", this.cur.name, "to", prev.name);
        prev.children.push(this.cur);
    }
};

SymbolTable.prototype.exitBlock = function () {
    //print("exitBlock");
    this.cur = null;
    if (this.stack.length > 0) {
        this.cur = this.stack.pop();
    }
};

SymbolTable.prototype.visitParams = function (args, toplevel) {
    var arg;
    var i;
    for (i = 0; i < args.length; ++i) {
        arg = args[i];
        if (arg.constructor === Sk.astnodes.Name) {
            Sk.asserts.assert(arg.ctx === Sk.astnodes.Param || (arg.ctx === Sk.astnodes.Store && !toplevel));
            this.addDef(arg.id, DEF_PARAM, arg.lineno);
        }
        else {
            // Tuple isn't supported
            throw new Sk.builtin.SyntaxError("invalid expression in parameter list", this.filename);
        }
    }
};

SymbolTable.prototype.visitArguments = function (a, lineno) {
    if (a.args) {
        this.visitParams(a.args, true);
    }
    if (a.vararg) {
        this.addDef(a.vararg, DEF_PARAM, lineno);
        this.cur.varargs = true;
    }
    if (a.kwarg) {
        this.addDef(a.kwarg, DEF_PARAM, lineno);
        this.cur.varkeywords = true;
    }
};

SymbolTable.prototype.newTmpname = function (lineno) {
    this.addDef(new Sk.builtin.str("_[" + (++this.tmpname) + "]"), DEF_LOCAL, lineno);
};

SymbolTable.prototype.addDef = function (name, flag, lineno) {
    var fromGlobal;
    var val;
    var mangled = Sk.mangleName(this.curClass, new Sk.builtin.str(name)).v;
    mangled = Sk.fixReservedNames(mangled);
    val = this.cur.symFlags[mangled];
    if (val !== undefined) {
        if ((flag & DEF_PARAM) && (val & DEF_PARAM)) {
            throw new Sk.builtin.SyntaxError("duplicate argument '" + name.v + "' in function definition", this.filename, lineno);
        }
        val |= flag;
    }
    else {
        val = flag;
    }
    this.cur.symFlags[mangled] = val;
    if (flag & DEF_PARAM) {
        this.cur.varnames.push(mangled);
    }
    else if (flag & DEF_GLOBAL) {
        val = flag;
        fromGlobal = this.global[mangled];
        if (fromGlobal !== undefined) {
            val |= fromGlobal;
        }
        this.global[mangled] = val;
    }
};

SymbolTable.prototype.visitSlice = function (s) {
    var i;
    switch (s.constructor) {
        case Sk.astnodes.Slice:
            if (s.lower) {
                this.visitExpr(s.lower);
            }
            if (s.upper) {
                this.visitExpr(s.upper);
            }
            if (s.step) {
                this.visitExpr(s.step);
            }
            break;
        case Sk.astnodes.ExtSlice:
            for (i = 0; i < s.dims.length; ++i) {
                this.visitSlice(s.dims[i]);
            }
            break;
        case Sk.astnodes.Index:
            this.visitExpr(s.value);
            break;
        case Sk.astnodes.Ellipsis:
            break;
    }
};

SymbolTable.prototype.visitStmt = function (s) {
    var cur;
    var name;
    var i;
    var nameslen;
    var tmp;
    Sk.asserts.assert(s !== undefined, "visitStmt called with undefined");
    switch (s.constructor) {
        case Sk.astnodes.FunctionDef:
            this.addDef(s.name, DEF_LOCAL, s.lineno);
            if (s.args.defaults) {
                this.SEQExpr(s.args.defaults);
            }
            if (s.decorator_list) {
                this.SEQExpr(s.decorator_list);
            }
            this.enterBlock(s.name.v, FunctionBlock, s, s.lineno);
            this.visitArguments(s.args, s.lineno);
            this.SEQStmt(s.body);
            this.exitBlock();
            break;
        case Sk.astnodes.ClassDef:
            this.addDef(s.name, DEF_LOCAL, s.lineno);
            this.SEQExpr(s.bases);
            if (s.decorator_list) {
                this.SEQExpr(s.decorator_list);
            }
            this.enterBlock(s.name.v, ClassBlock, s, s.lineno);
            tmp = this.curClass;
            this.curClass = s.name;
            this.SEQStmt(s.body);
            this.exitBlock();
            break;
        case Sk.astnodes.Return_:
            if (s.value) {
                this.visitExpr(s.value);
                this.cur.returnsValue = true;
                if (this.cur.generator) {
                    throw new Sk.builtin.SyntaxError("'return' with argument inside generator", this.filename);
                }
            }
            break;
        case Sk.astnodes.Delete_:
            this.SEQExpr(s.targets);
            break;
        case Sk.astnodes.Assign:
            this.SEQExpr(s.targets);
            this.visitExpr(s.value);
            break;
        case Sk.astnodes.AugAssign:
            this.visitExpr(s.target);
            this.visitExpr(s.value);
            break;
        case Sk.astnodes.Print:
            if (s.dest) {
                this.visitExpr(s.dest);
            }
            this.SEQExpr(s.values);
            break;
        case Sk.astnodes.For_:
            this.visitExpr(s.target);
            this.visitExpr(s.iter);
            this.SEQStmt(s.body);
            if (s.orelse) {
                this.SEQStmt(s.orelse);
            }
            break;
        case Sk.astnodes.While_:
            this.visitExpr(s.test);
            this.SEQStmt(s.body);
            if (s.orelse) {
                this.SEQStmt(s.orelse);
            }
            break;
        case Sk.astnodes.If_:
            this.visitExpr(s.test);
            this.SEQStmt(s.body);
            if (s.orelse) {
                this.SEQStmt(s.orelse);
            }
            break;
        case Sk.astnodes.Raise:
            if (s.type) {
                this.visitExpr(s.type);
                if (s.inst) {
                    this.visitExpr(s.inst);
                    if (s.tback) {
                        this.visitExpr(s.tback);
                    }
                }
            }
            break;
        case Sk.astnodes.TryExcept:
            this.SEQStmt(s.body);
            this.SEQStmt(s.orelse);
            this.visitExcepthandlers(s.handlers);
            break;
        case Sk.astnodes.TryFinally:
            this.SEQStmt(s.body);
            this.SEQStmt(s.finalbody);
            break;
        case Sk.astnodes.Assert:
            this.visitExpr(s.test);
            if (s.msg) {
                this.visitExpr(s.msg);
            }
            break;
        case Sk.astnodes.Import_:
        case Sk.astnodes.ImportFrom:
            this.visitAlias(s.names, s.lineno);
            break;
        case Sk.astnodes.Exec:
            this.visitExpr(s.body);
            if (s.globals) {
                this.visitExpr(s.globals);
                if (s.locals) {
                    this.visitExpr(s.locals);
                }
            }
            break;
        case Sk.astnodes.Global:
            nameslen = s.names.length;
            for (i = 0; i < nameslen; ++i) {
                name = Sk.mangleName(this.curClass, s.names[i]).v;
                name = Sk.fixReservedNames(name);
                cur = this.cur.symFlags[name];
                if (cur & (DEF_LOCAL | USE)) {
                    if (cur & DEF_LOCAL) {
                        throw new Sk.builtin.SyntaxError("name '" + name + "' is assigned to before global declaration", this.filename, s.lineno);
                    }
                    else {
                        throw new Sk.builtin.SyntaxError("name '" + name + "' is used prior to global declaration", this.filename, s.lineno);
                    }
                }
                this.addDef(new Sk.builtin.str(name), DEF_GLOBAL, s.lineno);
            }
            break;
        case Sk.astnodes.Expr:
            this.visitExpr(s.value);
            break;
        case Sk.astnodes.Pass:
        case Sk.astnodes.Break_:
        case Sk.astnodes.Debugger_:
        case Sk.astnodes.Continue_:
            // nothing
            break;
        case Sk.astnodes.With_:
            this.newTmpname(s.lineno);
            this.visitExpr(s.context_expr);
            if (s.optional_vars) {
                this.newTmpname(s.lineno);
                this.visitExpr(s.optional_vars);
            }
            this.SEQStmt(s.body);
            break;

        default:
            Sk.asserts.fail("Unhandled type " + s.constructor.name + " in visitStmt");
    }
};

SymbolTable.prototype.visitExpr = function (e) {
    var i;
    Sk.asserts.assert(e !== undefined, "visitExpr called with undefined");
    //print("  e: ", e.constructor.name);
    switch (e.constructor) {
        case Sk.astnodes.BoolOp:
            this.SEQExpr(e.values);
            break;
        case Sk.astnodes.BinOp:
            this.visitExpr(e.left);
            this.visitExpr(e.right);
            break;
        case Sk.astnodes.UnaryOp:
            this.visitExpr(e.operand);
            break;
        case Sk.astnodes.Lambda:
            this.addDef(new Sk.builtin.str("lambda"), DEF_LOCAL, e.lineno);
            if (e.args.defaults) {
                this.SEQExpr(e.args.defaults);
            }
            this.enterBlock("lambda", FunctionBlock, e, e.lineno);
            this.visitArguments(e.args, e.lineno);
            this.visitExpr(e.body);
            this.exitBlock();
            break;
        case Sk.astnodes.IfExp:
            this.visitExpr(e.test);
            this.visitExpr(e.body);
            this.visitExpr(e.orelse);
            break;
        case Sk.astnodes.Dict:
            this.SEQExpr(e.keys);
            this.SEQExpr(e.values);
            break;
        case Sk.astnodes.DictComp:
        case Sk.astnodes.SetComp:
            this.visitComprehension(e.generators, 0);
            break;
        case Sk.astnodes.ListComp:
            this.newTmpname(e.lineno);
            this.visitExpr(e.elt);
            this.visitComprehension(e.generators, 0);
            break;
        case Sk.astnodes.GeneratorExp:
            this.visitGenexp(e);
            break;
        case Sk.astnodes.Yield:
            if (e.value) {
                this.visitExpr(e.value);
            }
            this.cur.generator = true;
            if (this.cur.returnsValue) {
                throw new Sk.builtin.SyntaxError("'return' with argument inside generator", this.filename);
            }
            break;
        case Sk.astnodes.Compare:
            this.visitExpr(e.left);
            this.SEQExpr(e.comparators);
            break;
        case Sk.astnodes.Call:
            this.visitExpr(e.func);
            this.SEQExpr(e.args);
            for (i = 0; i < e.keywords.length; ++i) {
                this.visitExpr(e.keywords[i].value);
            }
            //print(JSON.stringify(e.starargs, null, 2));
            //print(JSON.stringify(e.kwargs, null,2));
            if (e.starargs) {
                this.visitExpr(e.starargs);
            }
            if (e.kwargs) {
                this.visitExpr(e.kwargs);
            }
            break;
        case Sk.astnodes.Num:
        case Sk.astnodes.Str:
            break;
        case Sk.astnodes.Attribute:
            this.visitExpr(e.value);
            break;
        case Sk.astnodes.Subscript:
            this.visitExpr(e.value);
            this.visitSlice(e.slice);
            break;
        case Sk.astnodes.Name:
            this.addDef(e.id, e.ctx === Sk.astnodes.Load ? USE : DEF_LOCAL, e.lineno);
            break;
        case Sk.astnodes.List:
        case Sk.astnodes.Tuple:
        case Sk.astnodes.Set:
            this.SEQExpr(e.elts);
            break;
        default:
            Sk.asserts.fail("Unhandled type " + e.constructor.name + " in visitExpr");
    }
};

SymbolTable.prototype.visitComprehension = function (lcs, startAt) {
    var lc;
    var i;
    var len = lcs.length;
    for (i = startAt; i < len; ++i) {
        lc = lcs[i];
        this.visitExpr(lc.target);
        this.visitExpr(lc.iter);
        this.SEQExpr(lc.ifs);
    }
};

SymbolTable.prototype.visitAlias = function (names, lineno) {
    /* Compute store_name, the name actually bound by the import
     operation.  It is diferent than a->name when a->name is a
     dotted package name (e.g. spam.eggs)
     */
    var dot;
    var storename;
    var name;
    var a;
    var i;
    for (i = 0; i < names.length; ++i) {
        a = names[i];
        name = a.asname === null ? a.name.v : a.asname.v;
        storename = name;
        dot = name.indexOf(".");
        if (dot !== -1) {
            storename = name.substr(0, dot);
        }
        if (name !== "*") {
            this.addDef(new Sk.builtin.str(storename), DEF_IMPORT, lineno);
        }
        else {
            if (this.cur.blockType !== ModuleBlock) {
                throw new Sk.builtin.SyntaxError("import * only allowed at module level", this.filename);
            }
        }
    }
};

SymbolTable.prototype.visitGenexp = function (e) {
    var outermost = e.generators[0];
    // outermost is evaled in current scope
    this.visitExpr(outermost.iter);
    this.enterBlock("genexpr", FunctionBlock, e, e.lineno);
    this.cur.generator = true;
    this.addDef(new Sk.builtin.str(".0"), DEF_PARAM, e.lineno);
    this.visitExpr(outermost.target);
    this.SEQExpr(outermost.ifs);
    this.visitComprehension(e.generators, 1);
    this.visitExpr(e.elt);
    this.exitBlock();
};

SymbolTable.prototype.visitExcepthandlers = function (handlers) {
    var i, eh;
    for (i = 0; eh = handlers[i]; ++i) {
        if (eh.type) {
            this.visitExpr(eh.type);
        }
        if (eh.name) {
            this.visitExpr(eh.name);
        }
        this.SEQStmt(eh.body);
    }
};

function _dictUpdate (a, b) {
    var kb;
    for (kb in b) {
        a[kb] = b[kb];
    }
}

SymbolTable.prototype.analyzeBlock = function (ste, bound, free, global) {
    var c;
    var i;
    var childlen;
    var allfree;
    var flags;
    var name;
    var local = {};
    var scope = {};
    var newglobal = {};
    var newbound = {};
    var newfree = {};

    if (ste.blockType == ClassBlock) {
        _dictUpdate(newglobal, global);
        if (bound) {
            _dictUpdate(newbound, bound);
        }
    }

    for (name in ste.symFlags) {
        flags = ste.symFlags[name];
        this.analyzeName(ste, scope, name, flags, bound, local, free, global);
    }

    if (ste.blockType !== ClassBlock) {
        if (ste.blockType === FunctionBlock) {
            _dictUpdate(newbound, local);
        }
        if (bound) {
            _dictUpdate(newbound, bound);
        }
        _dictUpdate(newglobal, global);
    }

    allfree = {};
    childlen = ste.children.length;
    for (i = 0; i < childlen; ++i) {
        c = ste.children[i];
        this.analyzeChildBlock(c, newbound, newfree, newglobal, allfree);
        if (c.hasFree || c.childHasFree) {
            ste.childHasFree = true;
        }
    }

    _dictUpdate(newfree, allfree);
    if (ste.blockType === FunctionBlock) {
        this.analyzeCells(scope, newfree);
    }
    this.updateSymbols(ste.symFlags, scope, bound, newfree, ste.blockType === ClassBlock);

    _dictUpdate(free, newfree);
};

SymbolTable.prototype.analyzeChildBlock = function (entry, bound, free, global, childFree) {
    var tempGlobal;
    var tempFree;
    var tempBound = {};
    _dictUpdate(tempBound, bound);
    tempFree = {};
    _dictUpdate(tempFree, free);
    tempGlobal = {};
    _dictUpdate(tempGlobal, global);

    this.analyzeBlock(entry, tempBound, tempFree, tempGlobal);
    _dictUpdate(childFree, tempFree);
};

SymbolTable.prototype.analyzeCells = function (scope, free) {
    var flags;
    var name;
    for (name in scope) {
        flags = scope[name];
        if (flags !== LOCAL) {
            continue;
        }
        if (free[name] === undefined) {
            continue;
        }
        scope[name] = CELL;
        delete free[name];
    }
};

/**
 * store scope info back into the st symbols dict. symbols is modified,
 * others are not.
 */
SymbolTable.prototype.updateSymbols = function (symbols, scope, bound, free, classflag) {
    var i;
    var o;
    var pos;
    var freeValue;
    var w;
    var flags;
    var name;
    for (name in symbols) {
        flags = symbols[name];
        w = scope[name];
        flags |= w << SCOPE_OFF;
        symbols[name] = flags;
    }

    freeValue = FREE << SCOPE_OFF;
    pos = 0;
    for (name in free) {
        o = symbols[name];
        if (o !== undefined) {
            // it could be a free variable in a method of the class that has
            // the same name as a local or global in the class scope
            if (classflag && (o & (DEF_BOUND | DEF_GLOBAL))) {
                i = o | DEF_FREE_CLASS;
                symbols[name] = i;
            }
            // else it's not free, probably a cell
            continue;
        }
        if (bound[name] === undefined) {
            continue;
        }
        symbols[name] = freeValue;
    }
};

SymbolTable.prototype.analyzeName = function (ste, dict, name, flags, bound, local, free, global) {
    if (flags & DEF_GLOBAL) {
        if (flags & DEF_PARAM) {
            throw new Sk.builtin.SyntaxError("name '" + name + "' is local and global", this.filename, ste.lineno);
        }
        dict[name] = GLOBAL_EXPLICIT;
        global[name] = null;
        if (bound && bound[name] !== undefined) {
            delete bound[name];
        }
        return;
    }
    if (flags & DEF_BOUND) {
        dict[name] = LOCAL;
        local[name] = null;
        delete global[name];
        return;
    }

    if (bound && bound[name] !== undefined) {
        dict[name] = FREE;
        ste.hasFree = true;
        free[name] = null;
    }
    else if (global && global[name] !== undefined) {
        dict[name] = GLOBAL_IMPLICIT;
    }
    else {
        if (ste.isNested) {
            ste.hasFree = true;
        }
        dict[name] = GLOBAL_IMPLICIT;
    }
};

SymbolTable.prototype.analyze = function () {
    var free = {};
    var global = {};
    this.analyzeBlock(this.top, null, free, global);
};

/**
 * @param {Object} ast
 * @param {string} filename
 */
Sk.symboltable = function (ast, filename) {
    var i;
    var ret = new SymbolTable(filename);

    ret.enterBlock("top", ModuleBlock, ast, 0);
    ret.top = ret.cur;

    //print(Sk.astDump(ast));
    for (i = 0; i < ast.body.length; ++i) {
        ret.visitStmt(ast.body[i]);
    }

    ret.exitBlock();

    ret.analyze();

    return ret;
};

Sk.dumpSymtab = function (st) {
    var pyBoolStr = function (b) {
        return b ? "True" : "False";
    }
    var pyList = function (l) {
        var i;
        var ret = [];
        for (i = 0; i < l.length; ++i) {
            ret.push(new Sk.builtin.str(l[i])["$r"]().v);
        }
        return "[" + ret.join(", ") + "]";
    };
    var getIdents = function (obj, indent) {
        var ns;
        var j;
        var sub;
        var nsslen;
        var nss;
        var info;
        var i;
        var objidentslen;
        var objidents;
        var ret;
        if (indent === undefined) {
            indent = "";
        }
        ret = "";
        ret += indent + "Sym_type: " + obj.get_type() + "\n";
        ret += indent + "Sym_name: " + obj.get_name() + "\n";
        ret += indent + "Sym_lineno: " + obj.get_lineno() + "\n";
        ret += indent + "Sym_nested: " + pyBoolStr(obj.is_nested()) + "\n";
        ret += indent + "Sym_haschildren: " + pyBoolStr(obj.has_children()) + "\n";
        if (obj.get_type() === "class") {
            ret += indent + "Class_methods: " + pyList(obj.get_methods()) + "\n";
        }
        else if (obj.get_type() === "function") {
            ret += indent + "Func_params: " + pyList(obj.get_parameters()) + "\n";
            ret += indent + "Func_locals: " + pyList(obj.get_locals()) + "\n";
            ret += indent + "Func_globals: " + pyList(obj.get_globals()) + "\n";
            ret += indent + "Func_frees: " + pyList(obj.get_frees()) + "\n";
        }
        ret += indent + "-- Identifiers --\n";
        objidents = obj.get_identifiers();
        objidentslen = objidents.length;
        for (i = 0; i < objidentslen; ++i) {
            info = obj.lookup(objidents[i]);
            ret += indent + "name: " + info.get_name() + "\n";
            ret += indent + "  is_referenced: " + pyBoolStr(info.is_referenced()) + "\n";
            ret += indent + "  is_imported: " + pyBoolStr(info.is_imported()) + "\n";
            ret += indent + "  is_parameter: " + pyBoolStr(info.is_parameter()) + "\n";
            ret += indent + "  is_global: " + pyBoolStr(info.is_global()) + "\n";
            ret += indent + "  is_declared_global: " + pyBoolStr(info.is_declared_global()) + "\n";
            ret += indent + "  is_local: " + pyBoolStr(info.is_local()) + "\n";
            ret += indent + "  is_free: " + pyBoolStr(info.is_free()) + "\n";
            ret += indent + "  is_assigned: " + pyBoolStr(info.is_assigned()) + "\n";
            ret += indent + "  is_namespace: " + pyBoolStr(info.is_namespace()) + "\n";
            nss = info.get_namespaces();
            nsslen = nss.length;
            ret += indent + "  namespaces: [\n";
            sub = [];
            for (j = 0; j < nsslen; ++j) {
                ns = nss[j];
                sub.push(getIdents(ns, indent + "    "));
            }
            ret += sub.join("\n");
            ret += indent + "  ]\n";
        }
        return ret;
    };
    return getIdents(st.top, "");
};

Sk.exportSymbol("Sk.symboltable", Sk.symboltable);
Sk.exportSymbol("Sk.dumpSymtab", Sk.dumpSymtab);
/** @param {...*} x */
var out;

Sk.gensymcount = 0;

/**
 * @constructor
 * @param {string} filename
 * @param {SymbolTable} st
 * @param {number} flags
 * @param {boolean=} canSuspend whether compiled code can suspend
 * @param {string=} sourceCodeForAnnotation used to add original source to listing if desired
 */
function Compiler (filename, st, flags, canSuspend, sourceCodeForAnnotation) {
    this.filename = filename;
    this.st = st;
    this.flags = flags;
    this.canSuspend = canSuspend;
    this.interactive = false;
    this.nestlevel = 0;

    this.u = null;
    this.stack = [];

    this.result = [];

    // this.gensymcount = 0;

    this.allUnits = [];

    this.source = sourceCodeForAnnotation ? sourceCodeForAnnotation.split("\n") : false;
}

/**
 * @constructor
 *
 * Stuff that changes on entry/exit of code blocks. must be saved and restored
 * when returning to a block.
 *
 * Corresponds to the body of a module, class, or function.
 */

function CompilerUnit () {
    this.ste = null;
    this.name = null;
    this.canSuspend = false;
    this.doesSuspend = false;

    this.private_ = null;
    this.firstlineno = 0;
    this.lineno = 0;
    this.linenoSet = false;
    this.localnames = [];

    this.localtemps = [];
    this.tempsToSave = [];

    this.blocknum = 0;
    this.blocks = [];
    this.curblock = 0;

    this.consts = {};

    this.scopename = null;

    this.prefixCode = "";
    this.varDeclsCode = "";
    this.switchCode = "";
    this.suffixCode = "";

    // stack of where to go on a break
    this.breakBlocks = [];
    // stack of where to go on a continue
    this.continueBlocks = [];
    this.exceptBlocks = [];
    // state of where to go on a return
    this.finallyBlocks = [];
}

CompilerUnit.prototype.activateScope = function () {
    var self = this;

    out = function () {
        var i;
        var b = self.blocks[self.curblock];
        if (b._next === null) {
            for (i = 0; i < arguments.length; ++i) {
                b.push(arguments[i]);
            }
        }
        // TODO: Warn about unreachable code after an unconditional jump?
    };
};

Compiler.prototype.getSourceLine = function (lineno) {
    Sk.asserts.assert(this.source);
    return this.source[lineno - 1];
};

Compiler.prototype.annotateSource = function (ast) {
    var i;
    var col_offset;
    var lineno;
    if (this.source) {
        lineno = ast.lineno;
        col_offset = ast.col_offset;
        out("\n//\n// line ", lineno, ":\n// ", this.getSourceLine(lineno), "\n// ");
        for (i = 0; i < col_offset; ++i) {
            out(" ");
        }
        out("^\n//\n");

        out("$currLineNo = ", lineno, ";\n$currColNo = ", col_offset, ";\n\n");
    }
};

Compiler.prototype.gensym = function (hint) {
    hint = hint || "";
    hint = "$" + hint;
    hint += Sk.gensymcount++;
    return hint;
};

Compiler.prototype.niceName = function (roughName) {
    return this.gensym(roughName.replace("<", "").replace(">", "").replace(" ", "_"));
};

var reservedWords_ = {
    "abstract": true,
    "as": true,
    "boolean": true,
    "break": true,
    "byte": true,
    "case": true,
    "catch": true,
    "char": true,
    "class": true,
    "continue": true,
    "const": true,
    "debugger": true,
    "default": true,
    "delete": true,
    "do": true,
    "double": true,
    "else": true,
    "enum": true,
    "export": true,
    "extends": true,
    "false": true,
    "final": true,
    "finally": true,
    "float": true,
    "for": true,
    "function": true,
    "goto": true,
    "if": true,
    "implements": true,
    "import": true,
    "in": true,
    "instanceof": true,
    "int": true,
    "interface": true,
    "is": true,
    "long": true,
    "namespace": true,
    "native": true,
    "new": true,
    "null": true,
    "package": true,
    "private": true,
    "protected": true,
    "public": true,
    "return": true,
    "short": true,
    "static": true,
    "super": false,
    "switch": true,
    "synchronized": true,
    "this": true,
    "throw": true,
    "throws": true,
    "transient": true,
    "true": true,
    "try": true,
    "typeof": true,
    "use": true,
    "var": true,
    "void": true,
    "volatile": true,
    "while": true,
    "with": true
};

/**
 * Fix reserved words
 *
 * @param {string} name
 */
function fixReservedWords(name) {
    if (reservedWords_[name] !== true) {
        return name;
    }
    return name + "_$rw$";
}

var reservedNames_ = {
    "__defineGetter__": true,
    "__defineSetter__": true,
    "apply": true,
    "call": true,
    "eval": true,
    "hasOwnProperty": true,
    "isPrototypeOf": true,
    "__lookupGetter__": true,
    "__lookupSetter__": true,
    "__noSuchMethod__": true,
    "propertyIsEnumerable": true,
    "toSource": true,
    "toLocaleString": true,
    "toString": true,
    "unwatch": true,
    "valueOf": true,
    "watch": true,
    "length": true
};

function fixReservedNames (name) {
    if (reservedNames_[name]) {
        return name + "_$rn$";
    }
    return name;
}

function unfixReserved(name) {
    return name.replace(/_\$r[wn]\$$/, "");
}

function mangleName (priv, ident) {
    var name = ident.v;
    var strpriv = null;

    if (priv === null || name === null || name.charAt(0) !== "_" || name.charAt(1) !== "_") {
        return ident;
    }
    // don't mangle __id__
    if (name.charAt(name.length - 1) === "_" && name.charAt(name.length - 2) === "_") {
        return ident;
    }
    // don't mangle classes that are all _ (obscure much?)
    strpriv = priv.v;
    strpriv.replace(/_/g, "");
    if (strpriv === "") {
        return ident;
    }

    strpriv = priv.v;
    strpriv.replace(/^_*/, "");
    strpriv = new Sk.builtin.str("_" + strpriv + name);
    return strpriv;
}

/**
 * @param {...*} rest
 */
Compiler.prototype.makeConstant = function (rest) {
    var i;
    var v;
    var val = "";
    var cval;

    // Construct constant value
    for (i = 0; i < arguments.length; ++i) {
        val += arguments[i];
    }

    // Check if we've already defined this exact constant
    for (var constant in this.u.consts) {
        if (this.u.consts.hasOwnProperty(constant)) {
            cval = this.u.consts[constant];
            if (cval == val) {
                // We have, just use it
                return constant;
            }
        }
    }

    // We have not, build new one
    v = this.u.scopename + "." + this.gensym("const");
    this.u.consts[v] = val;
    return v;
}

/**
 * @param {string} hint basename for gensym
 * @param {...*} rest
 */
Compiler.prototype._gr = function (hint, rest) {
    var i;
    var v = this.gensym(hint);
    this.u.localtemps.push(v);
    out("var ", v, "=");
    for (i = 1; i < arguments.length; ++i) {
        out(arguments[i]);
    }
    out(";");
    return v;
};

/**
 * Function to test if an interrupt should occur if the program has been running for too long.
 * This function is executed at every test/branch operation.
 */
Compiler.prototype.outputInterruptTest = function () { // Added by RNL
    var output = "";
    if (Sk.execLimit !== null || Sk.yieldLimit !== null && this.u.canSuspend) {
            output += "var $dateNow = Date.now();";
        if (Sk.execLimit !== null) {
            output += "if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())}";
        }
        if (Sk.yieldLimit !== null && this.u.canSuspend) {
            output += "if ($dateNow - Sk.lastYield > Sk.yieldLimit) {";
            output += "var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '"+this.filename+"',$currLineNo,$currColNo);";
            output += "$susp.$blk = $blk;";
            output += "$susp.optional = true;";
            output += "return $susp;";
            output += "}";
            this.u.doesSuspend = true;
        }
    }
    return output;
};

Compiler.prototype._jumpfalse = function (test, block) {
    var cond = this._gr("jfalse", "(", test, "===false||!Sk.misceval.isTrue(", test, "))");
    out("if(", cond, "){/*test failed */$blk=", block, ";continue;}");
};

Compiler.prototype._jumpundef = function (test, block) {
    out("if(", test, "===undefined){$blk=", block, ";continue;}");
};

Compiler.prototype._jumpnotundef = function (test, block) {
    out("if(", test, "!==undefined){$blk=", block, ";continue;}");
};

Compiler.prototype._jumptrue = function (test, block) {
    var cond = this._gr("jtrue", "(", test, "===true||Sk.misceval.isTrue(", test, "))");
    out("if(", cond, "){/*test passed */$blk=", block, ";continue;}");
};

Compiler.prototype._jump = function (block) {
    if (this.u.blocks[this.u.curblock]._next === null) {
        out("$blk=", block, ";");
        this.u.blocks[this.u.curblock]._next = block;
    }
};

/**
 * @param {Object=} e Object with keys 'lineno' and 'col_offset'
 */
Compiler.prototype._checkSuspension = function(e) {
    var retblk;
    if (this.u.canSuspend) {

        retblk = this.newBlock("function return or resume suspension");
        this._jump(retblk);
        this.setBlock(retblk);

        e = e || {lineno: "$currLineNo", col_offset: "$currColNo"};

        out ("if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'"+this.filename+"',"+e.lineno+","+e.col_offset+"); }");

        this.u.doesSuspend = true;
        this.u.tempsToSave = this.u.tempsToSave.concat(this.u.localtemps);

    } else {
        out ("if ($ret && $ret.$isSuspension) { $ret = Sk.misceval.retryOptionalSuspensionOrThrow($ret); }");
    }
};
Compiler.prototype.ctuplelistorset = function(e, data, tuporlist) {
    var i;
    var items;
    var item;
    var allconsts;
    Sk.asserts.assert(tuporlist === "tuple" || tuporlist === "list" || tuporlist === "set");
    if (e.ctx === Sk.astnodes.Store) {
        items = this._gr("items", "Sk.abstr.sequenceUnpack(" + data + "," + e.elts.length + ")");
        for (i = 0; i < e.elts.length; ++i) {
            this.vexpr(e.elts[i], items + "[" + i + "]");
        }
    }
    else if (e.ctx === Sk.astnodes.Load || tuporlist === "set") { //because set's can't be assigned to.
        if (tuporlist === "tuple") {
            allconsts = true;
            items = [];
            for (i = 0; i < e.elts.length; ++i) {
                item = this.vexpr(e.elts[i]);

                // The following is an ugly check to see if item was
                // turned into a constant.  As vexpr returns a string,
                // this requires seeing if "$const" is contained
                // within it.  A better solution would require a
                // change to vexpr, which would be more invasive.
                if (allconsts && (item.indexOf('$const') == -1)) {
                    allconsts = false;
                }
                items.push(item);
            }
            if (allconsts) {
                return this.makeConstant("new Sk.builtin.tuple([" + items + "])");
            } else {
                for (i = 0; i < items.length; ++i) {
                    items[i] = this._gr("elem", items[i]);
                }
                return this._gr("load" + tuporlist, "new Sk.builtins['", tuporlist, "']([", items, "])");
            }
        } else {
            items = [];
            for (i = 0; i < e.elts.length; ++i) {
                items.push(this._gr("elem", this.vexpr(e.elts[i])));
            }
            return this._gr("load" + tuporlist, "new Sk.builtins['", tuporlist, "']([", items, "])");
        }
    }
};

Compiler.prototype.cdict = function (e) {
    var v;
    var i;
    var items;
    Sk.asserts.assert(e.values.length === e.keys.length);
    items = [];
    for (i = 0; i < e.values.length; ++i) {
        v = this.vexpr(e.values[i]); // "backwards" to match order in cpy
        items.push(this.vexpr(e.keys[i]));
        items.push(v);
    }
    return this._gr("loaddict", "new Sk.builtins['dict']([", items, "])");
};

Compiler.prototype.clistcomp = function(e) {
    Sk.asserts.assert(e instanceof Sk.astnodes.ListComp);
    var tmp = this._gr("_compr", "new Sk.builtins['list']([])"); // note: _ is impt. for hack in name mangling (same as cpy)
    return this.ccompgen("list", tmp, e.generators, 0, e.elt, null, e);
};

Compiler.prototype.cdictcomp = function(e) {
    Sk.asserts.assert(e instanceof Sk.astnodes.DictComp);
    var tmp = this._gr("_dcompr", "new Sk.builtins.dict([])");
    return this.ccompgen("dict", tmp, e.generators, 0, e.value, e.key, e);
};

Compiler.prototype.csetcomp = function(e) {
    Sk.asserts.assert(e instanceof Sk.astnodes.SetComp);
    var tmp = this._gr("_setcompr", "new Sk.builtins.set([])");
    return this.ccompgen("set", tmp, e.generators, 0, e.elt, null, e);
};

Compiler.prototype.ccompgen = function (type, tmpname, generators, genIndex, value, key, e) {
    var start = this.newBlock(type + " comp start");
    var skip = this.newBlock(type + " comp skip");
    var anchor = this.newBlock(type + " comp anchor");

    var l = generators[genIndex];
    var toiter = this.vexpr(l.iter);
    var iter = this._gr("iter", "Sk.abstr.iter(", toiter, ")");
    var lvalue;
    var lkey;
    var ifres;
    var i;
    var target;
    var nexti;
    var n;

    this._jump(start);
    this.setBlock(start);

    // load targets
    out("$ret = Sk.abstr.iternext(", iter, ", true);");

    this._checkSuspension(e);

    nexti = this._gr("next", "$ret");
    this._jumpundef(nexti, anchor); // todo; this should be handled by StopIteration
    target = this.vexpr(l.target, nexti);

    n = l.ifs.length;
    for (i = 0; i < n; ++i) {
        ifres = this.vexpr(l.ifs[i]);
        this._jumpfalse(ifres, start);
    }

    if (++genIndex < generators.length) {
        this.ccompgen(type, tmpname, generators, genIndex, value, key, e);
    }

    if (genIndex >= generators.length) {
        lvalue = this.vexpr(value);
        if (type === "dict") {
            lkey = this.vexpr(key);
            out(tmpname, ".mp$ass_subscript(", lkey, ",", lvalue, ");");
        }
        else if (type === "list") {
            out(tmpname, ".v.push(", lvalue, ");"); // todo;
        }
        else if (type === "set") {
            out(tmpname, ".v.mp$ass_subscript(", lvalue, ", true);");
        }
        this._jump(skip);
        this.setBlock(skip);
    }

    this._jump(start);

    this.setBlock(anchor);

    return tmpname;
};

Compiler.prototype.cyield = function(e)
{
    if (this.u.ste.blockType !== SYMTAB_CONSTS.FunctionBlock) {
        throw new SyntaxError("'yield' outside function");
    }
    var val = "null",
        nextBlock;
    if (e.value) {
        val = this.vexpr(e.value);
    }
    nextBlock = this.newBlock("after yield");
    // return a pair: resume target block and yielded value
    out("return [/*resume*/", nextBlock, ",/*ret*/", val, "];");
    this.setBlock(nextBlock);
    return "$gen.gi$sentvalue"; // will either be null if none sent, or the value from gen.send(value)
};

Compiler.prototype.ccompare = function (e) {
    var res;
    var rhs;
    var i;
    var fres;
    var done;
    var n;
    var cur;
    Sk.asserts.assert(e.ops.length === e.comparators.length);
    cur = this.vexpr(e.left);
    n = e.ops.length;
    done = this.newBlock("done");
    fres = this._gr("compareres", "null");

    for (i = 0; i < n; ++i) {
        rhs = this.vexpr(e.comparators[i]);
        out("$ret = Sk.builtin.bool(Sk.misceval.richCompareBool(", cur, ",", rhs, ",'", e.ops[i].prototype._astname, "', true));");
        this._checkSuspension(e);
        out(fres, "=$ret;");
        this._jumpfalse("$ret", done);
        cur = rhs;
    }
    this._jump(done);
    this.setBlock(done);
    return fres;
};

Compiler.prototype.ccall = function (e) {
    var kwargs;
    var starargs;
    var keywords;
    var i;
    var kwarray;
    var func = this.vexpr(e.func);
    var args = this.vseqexpr(e.args);

    //print(JSON.stringify(e, null, 2));
    if (e.keywords.length > 0 || e.starargs || e.kwargs) {
        kwarray = [];
        for (i = 0; i < e.keywords.length; ++i) {
            kwarray.push("'" + e.keywords[i].arg.v + "'");
            kwarray.push(this.vexpr(e.keywords[i].value));
        }
        keywords = "[" + kwarray.join(",") + "]";
        starargs = "undefined";
        kwargs = "undefined";
        if (e.starargs) {
            starargs = this.vexpr(e.starargs);
        }
        if (e.kwargs) {
            kwargs = this.vexpr(e.kwargs);
        }
        out ("$ret;"); // This forces a failure if $ret isn't defined
        out ("$ret = Sk.misceval.callOrSuspend(", func, ",", kwargs, ",", starargs, ",", keywords, args.length > 0 ? "," : "", args, ");");
    }
    else {
        out ("$ret;"); // This forces a failure if $ret isn't defined
        if (Sk.__future__.super_args && e.func.id && e.func.id.v === "super" && args.length == 0) {
            // make sure there is a self variable
            // note that it's part of the js API spec: https://developer.mozilla.org/en/docs/Web/API/Window/self
            // so we should probably add self to the mangling
            // TODO: feel free to ignore the above
            out("if (typeof self === \"undefined\" || self.toString().indexOf(\"Window\") > 0) { throw new Sk.builtin.RuntimeError(\"super(): no arguments\") };")
            args.push("$gbl.__class__");
            args.push("self");
        }
        if (args.length > 0) {
            out ("$ret = Sk.misceval.callsimOrSuspendArray(", func, ", [", args, "]);");
        } else {
            out ("$ret = Sk.misceval.callsimOrSuspendArray(", func, ");");
        }
    }

    this._checkSuspension(e);

    return this._gr("call", "$ret");
};

Compiler.prototype.cslice = function (s) {
    var step;
    var high;
    var low;
    Sk.asserts.assert(s instanceof Sk.astnodes.Slice);
    low = s.lower ? this.vexpr(s.lower) : s.step ? "Sk.builtin.none.none$" : "new Sk.builtin.int_(0)"; // todo;ideally, these numbers would be constants
    high = s.upper ? this.vexpr(s.upper) : s.step ? "Sk.builtin.none.none$" : "new Sk.builtin.int_(2147483647)";
    step = s.step ? this.vexpr(s.step) : "Sk.builtin.none.none$";
    return this._gr("slice", "new Sk.builtins['slice'](", low, ",", high, ",", step, ")");
};

Compiler.prototype.eslice = function (dims) {
    var i;
    var dimSubs, subs;
    Sk.asserts.assert(dims instanceof Array);
    dimSubs = [];
    for (i = 0; i < dims.length; i++) {
        dimSubs.push(this.vslicesub(dims[i]));
    }
    return this._gr("extslice", "new Sk.builtins['tuple']([", dimSubs, "])");
};

Compiler.prototype.vslicesub = function (s) {
    var subs;
    switch (s.constructor) {
        case Sk.astnodes.Index:
            subs = this.vexpr(s.value);
            break;
        case Sk.astnodes.Slice:
            subs = this.cslice(s);
            break;
        case Sk.astnodes.Ellipsis:
            Sk.asserts.fail("todo compile.js Ellipsis;");
            break;
        case Sk.astnodes.ExtSlice:
            subs = this.eslice(s.dims);
            break;
        default:
            Sk.asserts.fail("invalid subscript kind");
    }
    return subs;
};

Compiler.prototype.vslice = function (s, ctx, obj, dataToStore) {
    var subs = this.vslicesub(s);
    return this.chandlesubscr(ctx, obj, subs, dataToStore);
};

Compiler.prototype.chandlesubscr = function (ctx, obj, subs, data) {
    if (ctx === Sk.astnodes.Load || ctx === Sk.astnodes.AugLoad) {
        out("$ret = Sk.abstr.objectGetItem(", obj, ",", subs, ", true);");
        this._checkSuspension();
        return this._gr("lsubscr", "$ret");
    }
    else if (ctx === Sk.astnodes.Store || ctx === Sk.astnodes.AugStore) {
        out("$ret = Sk.abstr.objectSetItem(", obj, ",", subs, ",", data, ", true);");
        this._checkSuspension();
    }
    else if (ctx === Sk.astnodes.Del) {
        out("Sk.abstr.objectDelItem(", obj, ",", subs, ");");
    }
    else {
        Sk.asserts.fail("handlesubscr fail");
    }
};

Compiler.prototype.cboolop = function (e) {
    var expres;
    var i;
    var retval;
    var n;
    var s;
    var end;
    var ifFailed;
    var jtype;
    Sk.asserts.assert(e instanceof Sk.astnodes.BoolOp);
    if (e.op === Sk.astnodes.And) {
        jtype = this._jumpfalse;
    }
    else {
        jtype = this._jumptrue;
    }
    end = this.newBlock("end of boolop");
    s = e.values;
    n = s.length;
    for (i = 0; i < n; ++i) {
        expres = this.vexpr(s[i]);
        if (i === 0) {
            retval = this._gr("boolopsucc", expres);
        }
        out(retval, "=", expres, ";");
        jtype.call(this, expres, end);
    }
    this._jump(end);
    this.setBlock(end);
    return retval;
};


/**
 *
 * compiles an expression. to 'return' something, it'll gensym a var and store
 * into that var so that the calling code doesn't have avoid just pasting the
 * returned name.
 *
 * @param {Object} e
 * @param {string=} data data to store in a store operation
 * @param {Object=} augvar var to load/store to for augmented assignments like '+='.
 *                  (already vexpr'ed, so we can evaluate it once and reuse for both load and store ops)
 * @param {Object=} augsubs precomputed subscript for augmented assignments like '+='.
 *                  (already vexpr'ed, so we can evaluate it once and reuse for both load and store ops)
 */
Compiler.prototype.vexpr = function (e, data, augvar, augsubs) {
    var mangled, mname;
    var val;
    var result;
    var nStr; // used for preserving signs for floats (zeros)
    if (e.lineno > this.u.lineno) {
        this.u.lineno = e.lineno;
        this.u.linenoSet = false;
    }
    //this.annotateSource(e);
    switch (e.constructor) {
        case Sk.astnodes.BoolOp:
            return this.cboolop(e);
        case Sk.astnodes.BinOp:
            return this._gr("binop", "Sk.abstr.numberBinOp(", this.vexpr(e.left), ",", this.vexpr(e.right), ",'", e.op.prototype._astname, "')");
        case Sk.astnodes.UnaryOp:
            return this._gr("unaryop", "Sk.abstr.numberUnaryOp(", this.vexpr(e.operand), ",'", e.op.prototype._astname, "')");
        case Sk.astnodes.Lambda:
            return this.clambda(e);
        case Sk.astnodes.IfExp:
            return this.cifexp(e);
        case Sk.astnodes.Dict:
            return this.cdict(e);
        case Sk.astnodes.ListComp:
            return this.clistcomp(e);
        case Sk.astnodes.DictComp:
            return this.cdictcomp(e);
        case Sk.astnodes.SetComp:
            return this.csetcomp(e);
        case Sk.astnodes.GeneratorExp:
            return this.cgenexp(e);
        case Sk.astnodes.Yield:
            return this.cyield(e);
        case Sk.astnodes.Compare:
            return this.ccompare(e);
        case Sk.astnodes.Call:
            result = this.ccall(e);
            // After the function call, we've returned to this line
            this.annotateSource(e);
            return result;
        case Sk.astnodes.Num:
            if (typeof e.n === "number") {
                return e.n;
            }
            else if (e.n instanceof Sk.builtin.int_) {
                return this.makeConstant("new Sk.builtin.int_(" + e.n.v + ")");
            } else if (e.n instanceof Sk.builtin.float_) {
                // Preserve sign of zero for floats
                nStr = e.n.v === 0 && 1/e.n.v === -Infinity ? "-0" : e.n.v;
                return this.makeConstant("new Sk.builtin.float_(" + nStr + ")");
            }
            else if (e.n instanceof Sk.builtin.lng) {
                // long uses the tp$str() method which delegates to nmber.str$ which preserves the sign
                return this.makeConstant("Sk.longFromStr('" + e.n.tp$str().v + "')");
            }
            else if (e.n instanceof Sk.builtin.complex) {
                // preserve sign of zero here too
                var real_val = e.n.real.v === 0 && 1/e.n.real.v === -Infinity ? "-0" : e.n.real.v;
                var imag_val = e.n.imag.v === 0 && 1/e.n.imag.v === -Infinity ? "-0" : e.n.imag.v;
                return this.makeConstant("new Sk.builtin.complex(new Sk.builtin.float_(" + real_val + "), new Sk.builtin.float_(" + imag_val + "))");
            }
            Sk.asserts.fail("unhandled Num type");
        case Sk.astnodes.Str:
            return this.makeConstant("new Sk.builtin.str(", e.s["$r"]().v, ")");
        case Sk.astnodes.Attribute:
            if (e.ctx !== Sk.astnodes.AugLoad && e.ctx !== Sk.astnodes.AugStore) {
                val = this.vexpr(e.value);
            }
            mangled = e.attr["$r"]().v;
            mangled = mangled.substring(1, mangled.length - 1);
            mangled = mangleName(this.u.private_, new Sk.builtin.str(mangled)).v;
            mangled = fixReservedWords(mangled);
            mangled = fixReservedNames(mangled);
            mname = this.makeConstant("new Sk.builtin.str('" + mangled + "')");
            switch (e.ctx) {
                case Sk.astnodes.AugLoad:
                    out("$ret = Sk.abstr.gattr(", augvar, ",", mname, ", true);");
                    this._checkSuspension(e);
                    return this._gr("lattr", "$ret");
                case Sk.astnodes.Load:
                    out("$ret = Sk.abstr.gattr(", val, ",", mname, ", true);");
                    this._checkSuspension(e);
                    return this._gr("lattr", "$ret");
                case Sk.astnodes.AugStore:
                    // To be more correct, we shouldn't sattr() again if the in-place update worked.
                    // At the time of writing (26/Feb/2015), Sk.abstr.numberInplaceBinOp never returns undefined,
                    // so this will never *not* execute. But it could, if Sk.abstr.numberInplaceBinOp were fixed.
                    out("$ret = undefined;");
                    out("if(", data, "!==undefined){");
                    out("$ret = Sk.abstr.sattr(", augvar, ",", mname, ",", data, ", true);");
                    out("}");
                    this._checkSuspension(e);
                    break;
                case Sk.astnodes.Store:
                    out("$ret = Sk.abstr.sattr(", val, ",", mname, ",", data, ", true);");
                    this._checkSuspension(e);
                    break;
                case Sk.astnodes.Del:
                    Sk.asserts.fail("todo Del;");
                    break;
                case Sk.astnodes.Param:
                default:
                    Sk.asserts.fail("invalid attribute expression");
            }
            break;
        case Sk.astnodes.Subscript:
            switch (e.ctx) {
                case Sk.astnodes.AugLoad:
                    out("$ret = Sk.abstr.objectGetItem(",augvar,",",augsubs,", true);");
                    this._checkSuspension(e)
                    return this._gr("gitem", "$ret");
                case Sk.astnodes.Load:
                case Sk.astnodes.Store:
                case Sk.astnodes.Del:
                    return this.vslice(e.slice, e.ctx, this.vexpr(e.value), data);
                case Sk.astnodes.AugStore:
                    // To be more correct, we shouldn't sattr() again if the in-place update worked.
                    // At the time of writing (26/Feb/2015), Sk.abstr.numberInplaceBinOp never returns undefined,
                    // so this will never *not* execute. But it could, if Sk.abstr.numberInplaceBinOp were fixed.

                    out("$ret=undefined;");
                    out("if(", data, "!==undefined){");
                    out("$ret=Sk.abstr.objectSetItem(",augvar,",",augsubs,",",data,", true)");
                    out("}");
                    this._checkSuspension(e);
                    break;
                case Sk.astnodes.Param:
                default:
                    Sk.asserts.fail("invalid subscript expression");
            }
            break;
        case Sk.astnodes.Name:
            return this.nameop(e.id, e.ctx, data);
        case Sk.astnodes.List:
            return this.ctuplelistorset(e, data, 'list');
        case Sk.astnodes.Tuple:
            return this.ctuplelistorset(e, data, 'tuple');
        case Sk.astnodes.Set:
            return this.ctuplelistorset(e, data, 'set');
        default:
            Sk.asserts.fail("unhandled case in vexpr");
    }
};

/**
 * @param {Array.<Object>} exprs
 * @param {Array.<string>=} data
 */
Compiler.prototype.vseqexpr = function (exprs, data) {
    var i;
    var ret;
    Sk.asserts.assert(data === undefined || exprs.length === data.length);
    ret = [];
    for (i = 0; i < exprs.length; ++i) {
        ret.push(this.vexpr(exprs[i], data === undefined ? undefined : data[i]));
    }
    return ret;
};

Compiler.prototype.caugassign = function (s) {
    var to;
    var augsub;
    var res;
    var val;
    var aug;
    var auge;
    var e;
    Sk.asserts.assert(s instanceof Sk.astnodes.AugAssign);
    e = s.target;
    switch (e.constructor) {
        case Sk.astnodes.Attribute:
            to = this.vexpr(e.value);
            auge = new Sk.astnodes.Attribute(e.value, e.attr, Sk.astnodes.AugLoad, e.lineno, e.col_offset);
            aug = this.vexpr(auge, undefined, to);
            val = this.vexpr(s.value);
            res = this._gr("inplbinopattr", "Sk.abstr.numberInplaceBinOp(", aug, ",", val, ",'", s.op.prototype._astname, "')");
            auge.ctx = Sk.astnodes.AugStore;
            return this.vexpr(auge, res, to);
        case Sk.astnodes.Subscript:
            // Only compile the subscript value once
            to = this.vexpr(e.value);
            augsub = this.vslicesub(e.slice);
            auge = new Sk.astnodes.Subscript(e.value, augsub, Sk.astnodes.AugLoad, e.lineno, e.col_offset);
            aug = this.vexpr(auge, undefined, to, augsub);
            val = this.vexpr(s.value);
            res = this._gr("inplbinopsubscr", "Sk.abstr.numberInplaceBinOp(", aug, ",", val, ",'", s.op.prototype._astname, "')");
            auge.ctx = Sk.astnodes.AugStore;
            return this.vexpr(auge, res, to, augsub);
        case Sk.astnodes.Name:
            to = this.nameop(e.id, Sk.astnodes.Load);
            val = this.vexpr(s.value);
            res = this._gr("inplbinop", "Sk.abstr.numberInplaceBinOp(", to, ",", val, ",'", s.op.prototype._astname, "')");
            return this.nameop(e.id, Sk.astnodes.Store, res);
        default:
            Sk.asserts.fail("unhandled case in augassign");
    }
};

/**
 * optimize some constant exprs. returns 0 if always false, 1 if always true or -1 otherwise.
 */
Compiler.prototype.exprConstant = function (e) {
    switch (e.constructor) {
        case Sk.astnodes.Num:
            return Sk.misceval.isTrue(e.n) ? 1 : 0;
        case Sk.astnodes.Str:
            return Sk.misceval.isTrue(e.s) ? 1 : 0;
        case Sk.astnodes.Name:
        // todo; do __debug__ test here if opt
        default:
            return -1;
    }
};

Compiler.prototype.newBlock = function (name) {
    var ret = this.u.blocknum++;
    this.u.blocks[ret] = [];
    this.u.blocks[ret]._name = name || "<unnamed>";
    this.u.blocks[ret]._next = null;
    return ret;
};
Compiler.prototype.setBlock = function (n) {
    Sk.asserts.assert(n >= 0 && n < this.u.blocknum);
    this.u.curblock = n;
};

Compiler.prototype.pushBreakBlock = function (n) {
    Sk.asserts.assert(n >= 0 && n < this.u.blocknum);
    this.u.breakBlocks.push(n);
};
Compiler.prototype.popBreakBlock = function () {
    this.u.breakBlocks.pop();
};

Compiler.prototype.pushContinueBlock = function (n) {
    Sk.asserts.assert(n >= 0 && n < this.u.blocknum);
    this.u.continueBlocks.push(n);
};
Compiler.prototype.popContinueBlock = function () {
    this.u.continueBlocks.pop();
};

Compiler.prototype.pushExceptBlock = function (n) {
    Sk.asserts.assert(n >= 0 && n < this.u.blocknum);
    this.u.exceptBlocks.push(n);
};
Compiler.prototype.popExceptBlock = function () {
    this.u.exceptBlocks.pop();
};

Compiler.prototype.pushFinallyBlock = function (n) {
    Sk.asserts.assert(n >= 0 && n < this.u.blocknum);
    Sk.asserts.assert(this.u.breakBlocks.length === this.u.continueBlocks.length);
    this.u.finallyBlocks.push({blk: n, breakDepth: this.u.breakBlocks.length});
};
Compiler.prototype.popFinallyBlock = function () {
    this.u.finallyBlocks.pop();
};
Compiler.prototype.peekFinallyBlock = function() {
    return (this.u.finallyBlocks.length > 0) ? this.u.finallyBlocks[this.u.finallyBlocks.length-1] : undefined;
};

Compiler.prototype.setupExcept = function (eb) {
    out("$exc.push(", eb, ");");
    //this.pushExceptBlock(eb);
};

Compiler.prototype.endExcept = function () {
    out("$exc.pop();");
};

Compiler.prototype.outputLocals = function (unit) {
    var name;
    var output;
    var i;
    var have = {};
    //print("args", unit.name.v, JSON.stringify(unit.argnames));
    for (i = 0; unit.argnames && i < unit.argnames.length; ++i) {
        have[unit.argnames[i]] = true;
    }
    unit.localnames.sort();
    output = [];
    for (i = 0; i < unit.localnames.length; ++i) {
        name = unit.localnames[i];
        if (have[name] === undefined) {
            output.push(name);
            have[name] = true;
        }
    }
    if (output.length > 0) {
        return "var " + output.join(",") + "; /* locals */";
    }
    return "";
};

Compiler.prototype.outputSuspensionHelpers = function (unit) {
    var i, t;
    var localSaveCode = [];
    var localsToSave = unit.localnames.concat(unit.tempsToSave);
    var seenTemps = {};
    var hasCell = unit.ste.blockType === SYMTAB_CONSTS.FunctionBlock && unit.ste.childHasFree;
    var output = (localsToSave.length > 0 ? ("var " + localsToSave.join(",") + ";") : "") +
                 "var $wakeFromSuspension = function() {" +
                    "var susp = "+unit.scopename+".$wakingSuspension; delete "+unit.scopename+".$wakingSuspension;" +
                    "$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;" +
                    "$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();" +
                    (hasCell?"$cell=susp.$cell;":"");

    for (i = 0; i < localsToSave.length; i++) {
        t = localsToSave[i];
        if (seenTemps[t]===undefined) {
            output += t + "=susp.$tmps." + t + ";";
            seenTemps[t] = true;
        }
    }

    output +=  "try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '"+this.filename+"'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }" +
                "};";

    output += "var $saveSuspension = function($child, $filename, $lineno, $colno) {" +
                "var susp = new Sk.misceval.Suspension(); susp.child=$child;" +
                "susp.resume=function(){"+unit.scopename+".$wakingSuspension=susp; return "+unit.scopename+"("+(unit.ste.generator?"$gen":"")+"); };" +
                "susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;" +
                "susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;" +
                "susp.optional=susp.child.optional;" +
                (hasCell ? "susp.$cell=$cell;" : "");

    seenTemps = {};
    for (i = 0; i < localsToSave.length; i++) {
        t = localsToSave[i];
        if (seenTemps[t]===undefined) {
            localSaveCode.push("\"" + t + "\":" + t);
            seenTemps[t]=true;
        }
    }
    output +=   "susp.$tmps={" + localSaveCode.join(",") + "};" +
                "return susp;" +
              "};";

    return output;
}

Compiler.prototype.outputAllUnits = function () {
    var i;
    var blocks;
    var unit;
    var j;
    var ret = "";
    var block;
    var generatedBlocks;
    for (j = 0; j < this.allUnits.length; ++j) {
        unit = this.allUnits[j];
        ret += unit.prefixCode;
        ret += this.outputLocals(unit);
        if (unit.doesSuspend) {
            ret += this.outputSuspensionHelpers(unit);
        }
        ret += unit.varDeclsCode;
        ret += unit.switchCode;
        blocks = unit.blocks;
        generatedBlocks = Object.create(null);
        for (i = 0; i < blocks.length; ++i) {
            block = i;
            if (block in generatedBlocks)
                continue;
            while (true) {
                generatedBlocks[block] = true;

                ret += "case " + block + ": /* --- " + blocks[block]._name + " --- */";
                ret += blocks[block].join("");

                if (blocks[block]._next !== null) {
                    if (!(blocks[block]._next in generatedBlocks)) {
                        ret += "/* allowing case fallthrough */";
                        block = blocks[block]._next;
                    }
                    else {
                        ret += "/* jump */ continue;";
                        break;
                    }
                }
                else {
                    ret += "throw new Sk.builtin.SystemError('internal error: unterminated block');";
                    break;
                }
            }
        }
        ret += unit.suffixCode;
    }
    return ret;
};

Compiler.prototype.cif = function (s) {
    var test;
    var next;
    var end;
    var constant;
    Sk.asserts.assert(s instanceof Sk.astnodes.If_);
    constant = this.exprConstant(s.test);
    if (constant === 0) {
        if (s.orelse && s.orelse.length > 0) {
            this.vseqstmt(s.orelse);
        }
    }
    else if (constant === 1) {
        this.vseqstmt(s.body);
    }
    else {
        end = this.newBlock("end of if");
        if (s.orelse && s.orelse.length > 0) {
            next = this.newBlock("next branch of if");
        }

        test = this.vexpr(s.test);

        if (s.orelse && s.orelse.length > 0) {
            this._jumpfalse(test, next);
            this.vseqstmt(s.body);
            this._jump(end);

            this.setBlock(next);
            this.vseqstmt(s.orelse);
        }
        else {
            this._jumpfalse(test, end);
            this.vseqstmt(s.body);
        }
        this._jump(end);
        this.setBlock(end);
    }

};

Compiler.prototype.cwhile = function (s) {
    var body;
    var orelse;
    var next;
    var top;
    var constant = this.exprConstant(s.test);
    if (constant === 0) {
        if (s.orelse) {
            this.vseqstmt(s.orelse);
        }
    }
    else {
        top = this.newBlock("while test");
        this._jump(top);
        this.setBlock(top);

        next = this.newBlock("after while");
        orelse = s.orelse.length > 0 ? this.newBlock("while orelse") : null;
        body = this.newBlock("while body");

        this.annotateSource(s);
        this._jumpfalse(this.vexpr(s.test), orelse ? orelse : next);
        this._jump(body);

        this.pushBreakBlock(next);
        this.pushContinueBlock(top);

        this.setBlock(body);

        if ((Sk.debugging || Sk.killableWhile) && this.u.canSuspend) {
            var suspType = 'Sk.delay';
            var debugBlock = this.newBlock("debug breakpoint for line "+s.lineno);
            out("if (Sk.breakpoints('"+this.filename+"',"+s.lineno+","+s.col_offset+")) {",
                "var $susp = $saveSuspension({data: {type: '"+suspType+"'}, resume: function() {}}, '"+this.filename+"',"+s.lineno+","+s.col_offset+");",
                "$susp.$blk = "+debugBlock+";",
                "$susp.optional = true;",
                "return $susp;",
                "}");
            this._jump(debugBlock);
            this.setBlock(debugBlock);
            this.u.doesSuspend = true;
        }

        this.vseqstmt(s.body);

        this._jump(top);

        this.popContinueBlock();
        this.popBreakBlock();

        if (s.orelse.length > 0) {
            this.setBlock(orelse);
            this.vseqstmt(s.orelse);
            this._jump(next);
        }

        this.setBlock(next);
    }
};

Compiler.prototype.cfor = function (s) {
    var target;
    var nexti;
    var iter;
    var toiter;
    var start = this.newBlock("for start");
    var cleanup = this.newBlock("for cleanup");
    var end = this.newBlock("for end");

    this.pushBreakBlock(end);
    this.pushContinueBlock(start);

    // get the iterator
    toiter = this.vexpr(s.iter);
    if (this.u.ste.generator) {
        // if we're in a generator, we have to store the iterator to a local
        // so it's preserved (as we cross blocks here and assume it survives)
        iter = "$loc." + this.gensym("iter");
        out(iter, "=Sk.abstr.iter(", toiter, ");");
    }
    else {
        iter = this._gr("iter", "Sk.abstr.iter(", toiter, ")");
        this.u.tempsToSave.push(iter); // Save it across suspensions
    }

    this._jump(start);

    this.setBlock(start);

    // load targets
    out ("$ret = Sk.abstr.iternext(", iter,(this.u.canSuspend?", true":", false"),");");

    this._checkSuspension(s);

    nexti = this._gr("next", "$ret");
    this._jumpundef(nexti, cleanup); // todo; this should be handled by StopIteration
    target = this.vexpr(s.target, nexti);

    if ((Sk.debugging || Sk.killableFor) && this.u.canSuspend) {
        var suspType = 'Sk.delay';
        var debugBlock = this.newBlock("debug breakpoint for line "+s.lineno);
        out("if (Sk.breakpoints('"+this.filename+"',"+s.lineno+","+s.col_offset+")) {",
            "var $susp = $saveSuspension({data: {type: '"+suspType+"'}, resume: function() {}}, '"+this.filename+"',"+s.lineno+","+s.col_offset+");",
            "$susp.$blk = "+debugBlock+";",
            "$susp.optional = true;",
            "return $susp;",
            "}");
        this._jump(debugBlock);
        this.setBlock(debugBlock);
        this.u.doesSuspend = true;
    }

    // execute body
    this.vseqstmt(s.body);

    // jump to top of loop
    this._jump(start);

    this.setBlock(cleanup);
    this.popContinueBlock();
    this.popBreakBlock();

    this.vseqstmt(s.orelse);
    this._jump(end);

    this.setBlock(end);
};

Compiler.prototype.craise = function (s) {
    var inst = "", exc;
    if (s.inst) {
        // handles: raise Error, arguments
        inst = this.vexpr(s.inst);
        out("throw ", this.vexpr(s.type), "(", inst, ");");
    }
    else if (s.type) {
        if (s.type.func) {
            // handles: raise Error(arguments)
            out("throw ", this.vexpr(s.type), ";");
        }
        else {
            // handles: raise Error OR raise someinstance
            exc = this._gr("err", this.vexpr(s.type));
            out("if(",exc," instanceof Sk.builtin.type) {",
                "throw Sk.misceval.callsimArray(", exc, ");",
                "} else if(typeof(",exc,") === 'function') {",
                "throw ",exc,"();",
                "} else {",
                "throw ", exc, ";",
                "}");
        }
    }
    else {
        // re-raise
        out("throw $err;");
    }
};

Compiler.prototype.ctryexcept = function (s) {
    var check;
    var next;
    var handlertype;
    var handler;
    var end;
    var orelse;
    var unhandled;
    var i;
    var n = s.handlers.length;

    // Create a block for each except clause
    var handlers = [];
    for (i = 0; i < n; ++i) {
        handlers.push(this.newBlock("except_" + i + "_"));
    }

    unhandled = this.newBlock("unhandled");
    orelse = this.newBlock("orelse");
    end = this.newBlock("end");

    this.setupExcept(handlers[0]);
    this.vseqstmt(s.body);
    this.endExcept();
    this._jump(orelse);

    for (i = 0; i < n; ++i) {
        this.setBlock(handlers[i]);
        handler = s.handlers[i];
        if (!handler.type && i < n - 1) {
            throw new SyntaxError("default 'except:' must be last");
        }

        if (handler.type) {
            // should jump to next handler if err not isinstance of handler.type
            handlertype = this.vexpr(handler.type);
            next = (i == n - 1) ? unhandled : handlers[i + 1];

            // var isinstance = this.nameop(new Sk.builtin.str("isinstance"), Load));
            // var check = this._gr('call', "Sk.misceval.callsimArray(", isinstance, ", [$err, ", handlertype, "])");

            check = this._gr("instance", "Sk.misceval.isTrue(Sk.builtin.isinstance($err, ", handlertype, "))");
            this._jumpfalse(check, next);
        }

        if (handler.name) {
            this.vexpr(handler.name, "$err");
        }

        this.vseqstmt(handler.body);

        // Should jump to finally, but finally is not implemented yet
        this._jump(end);
    }

    // If no except clause catches exception, throw it again
    this.setBlock(unhandled);
    // Should execute finally first
    out("throw $err;");

    this.setBlock(orelse);
    this.vseqstmt(s.orelse);
    this._jump(end);

    this.setBlock(end);
};

Compiler.prototype.outputFinallyCascade = function (thisFinally) {
    var nextFinally;

    // What do we do when we're done executing a 'finally' block?
    // Normally you just fall off the end. If we're 'return'ing,
    // 'continue'ing or 'break'ing, $postfinally tells us what to do.
    //
    // But we might be in a nested pair of 'finally' blocks. If so, we need
    // to work out whether to jump to the outer finally block.
    //
    // (NB we do NOT deal with re-raising exceptions here. That's handled
    // elsewhere, because 'with' does special things with exceptions.)

    if (this.u.finallyBlocks.length == 0) {
        // No nested 'finally' block. Easy.
        out("if($postfinally!==undefined) { if ($postfinally.returning) { return $postfinally.returning; } else { $blk=$postfinally.gotoBlock; $postfinally=undefined; continue; } }");
    } else {

        // OK, we're nested. Do we jump straight to the outer 'finally' block?
        // Depends on how we got here here.

        // Normal execution ($postfinally===undefined)? No, we're done here.

        // Returning ($postfinally.returning)? Yes, we want to execute all the
        // 'finally' blocks on the way out.

        // Breaking ($postfinally.isBreak)? It depends. Is the outer 'finally'
        // block inside or outside the loop we're breaking out of? We compare
        // its breakDepth to ours to find out. If we're at the same breakDepth,
        // we're both inside the innermost loop, so we both need to execute.
        // ('continue' is the same thing as 'break' for us)

        nextFinally = this.peekFinallyBlock();

        out("if($postfinally!==undefined) {",
                "if ($postfinally.returning",
                    (nextFinally.breakDepth == thisFinally.breakDepth) ? "|| $postfinally.isBreak" : "", ") {",

                        "$blk=",nextFinally.blk,";continue;",
                "} else {",
                    "$blk=$postfinally.gotoBlock;$postfinally=undefined;continue;",
                "}",
            "}");
    }
};

Compiler.prototype.ctryfinally = function (s) {

    var finalBody = this.newBlock("finalbody");
    var exceptionHandler = this.newBlock("finalexh")
    var exceptionToReRaise = this._gr("finally_reraise", "undefined");
    var thisFinally;
    this.u.tempsToSave.push(exceptionToReRaise);

    this.pushFinallyBlock(finalBody);
    thisFinally = this.peekFinallyBlock();
    this.setupExcept(exceptionHandler);
    this.vseqstmt(s.body);
    this.endExcept();
    // Normal execution falls through to finally body
    this._jump(finalBody);

    this.setBlock(exceptionHandler);
    // Exception handling also goes to the finally body,
    // stashing the original exception to re-raise
    out(exceptionToReRaise,"=$err;");
    this._jump(finalBody);

    this.setBlock(finalBody);
    this.popFinallyBlock();
    this.vseqstmt(s.finalbody);
    // If finalbody executes normally, AND we have an exception
    // to re-raise, we raise it.
    out("if(",exceptionToReRaise,"!==undefined) { throw ",exceptionToReRaise,";}");

    this.outputFinallyCascade(thisFinally);
    // Else, we continue from here.
};

Compiler.prototype.cwith = function (s) {
    var mgr, exit, value, exception;
    var exceptionHandler = this.newBlock("withexh"), tidyUp = this.newBlock("withtidyup");
    var carryOn = this.newBlock("withcarryon");
    var thisFinallyBlock;

    // NB this does not *quite* match the semantics in PEP 343, which
    // specifies "exit = type(mgr).__exit__" rather than getattr()ing,
    // presumably for performance reasons.

    mgr = this._gr("mgr", this.vexpr(s.context_expr));

    // exit = mgr.__exit__
    out("$ret = Sk.abstr.gattr(",mgr,",Sk.builtin.str.$exit, true);");
    this._checkSuspension(s);
    exit = this._gr("exit", "$ret");
    this.u.tempsToSave.push(exit);

    // value = mgr.__enter__()
    out("$ret = Sk.abstr.gattr(",mgr,",Sk.builtin.str.$enter, true);");
    this._checkSuspension(s);
    out("$ret = Sk.misceval.callsimOrSuspendArray($ret);");
    this._checkSuspension(s);
    value = this._gr("value", "$ret");

    // try:
    this.pushFinallyBlock(tidyUp);
    thisFinallyBlock = this.u.finallyBlocks[this.u.finallyBlocks.length-1];
    this.setupExcept(exceptionHandler);

    //    VAR = value
    if (s.optional_vars) {
        this.nameop(s.optional_vars.id, Sk.astnodes.Store, value);
    }

    //    (try body)
    this.vseqstmt(s.body);
    this.endExcept();
    this._jump(tidyUp);

    // except:
    this.setBlock(exceptionHandler);

    //   if not exit(*sys.exc_info()):
    //     raise
    out("$ret = Sk.misceval.applyOrSuspend(",exit,",undefined,Sk.builtin.getExcInfo($err),undefined,[]);");
    this._checkSuspension(s);
    this._jumptrue("$ret", carryOn);
    out("throw $err;");

    // finally: (kinda. NB that this is a "finally" that doesn't run in the
    //           exception case!)
    this.setBlock(tidyUp);
    this.popFinallyBlock();

    //   exit(None, None, None)
    out("$ret = Sk.misceval.callsimOrSuspendArray(",exit,",[Sk.builtin.none.none$,Sk.builtin.none.none$,Sk.builtin.none.none$]);");
    this._checkSuspension(s);
    // Ignore $ret.

    this.outputFinallyCascade(thisFinallyBlock);

    this._jump(carryOn);

    this.setBlock(carryOn);
};

Compiler.prototype.cassert = function (s) {
    /* todo; warnings method
     if (s.test instanceof Tuple && s.test.elts.length > 0)
     Sk.warn("assertion is always true, perhaps remove parentheses?");
     */

    var test = this.vexpr(s.test);
    var end = this.newBlock("end");
    this._jumptrue(test, end);
    // todo; exception handling
    // maybe replace with Sk.asserts.fail?? or just an alert?
    out("throw new Sk.builtin.AssertionError(", s.msg ? this.vexpr(s.msg) : "", ");");
    this.setBlock(end);
};

Compiler.prototype.cimportas = function (name, asname, mod) {
    var attr;
    var src = name.v;
    var dotLoc = src.indexOf(".");
    //print("src", src);
    //print("dotLoc", dotLoc);
    var cur = mod;
    if (dotLoc !== -1) {
        // if there's dots in the module name, __import__ will have returned
        // the top-level module. so, we need to extract the actual module by
        // getattr'ing up through the names, and then storing the leaf under
        // the name it was to be imported as.
        src = src.substr(dotLoc + 1);
        //print("src now", src);
        while (dotLoc !== -1) {
            dotLoc = src.indexOf(".");
            attr = dotLoc !== -1 ? src.substr(0, dotLoc) : src;
            cur = this._gr("lattr", "Sk.abstr.gattr(", cur, ", new Sk.builtin.str('", attr, "'))");
            src = src.substr(dotLoc + 1);
        }
    }
    return this.nameop(asname, Sk.astnodes.Store, cur);
};

Compiler.prototype.cimport = function (s) {
    var lastDot;
    var tmp;
    var mod;
    var alias;
    var i;
    var n = s.names.length;
    for (i = 0; i < n; ++i) {
        alias = s.names[i];
        out("$ret = Sk.builtin.__import__(", alias.name["$r"]().v, ",$gbl,$loc,[],",(Sk.__future__.absolute_import?0:-1),");");

        this._checkSuspension(s);

        mod = this._gr("module", "$ret");

        if (alias.asname) {
            this.cimportas(alias.name, alias.asname, mod);
        }
        else {
            tmp = alias.name;
            lastDot = tmp.v.indexOf(".");
            if (lastDot !== -1) {
                tmp = new Sk.builtin.str(tmp.v.substr(0, lastDot));
            }
            this.nameop(tmp, Sk.astnodes.Store, mod);
        }
    }
};

Compiler.prototype.cfromimport = function (s) {
    var storeName;
    var got;
    var alias;
    var aliasOut;
    var mod;
    var i;
    var n = s.names.length;
    var names = [];
    var level = s.level;
    if (level == 0 && !Sk.__future__.absolute_import) {
        level = -1;
    }
    for (i = 0; i < n; ++i) {
        names[i] = "'" + fixReservedWords(s.names[i].name.v) + "'";
    }
    out("$ret = Sk.builtin.__import__(", s.module["$r"]().v, ",$gbl,$loc,[", names, "],",level,");");

    this._checkSuspension(s);

    //out("print('__import__ returned ' + $ret);");
    //out("for (var x in $ret) { print(x); }");
    mod = this._gr("module", "$ret");
    for (i = 0; i < n; ++i) {
        alias = s.names[i];
        aliasOut = "'" + fixReservedWords(alias.name.v) + "'";
        if (i === 0 && alias.name.v === "*") {
            Sk.asserts.assert(n === 1);
            out("Sk.importStar(", mod, ",$loc, $gbl);");
            return;
        }

        //out("print(\"getting Sk.abstr.gattr(", mod, ",", alias.name["$r"]().v, ")\");");
        got = this._gr("item", "Sk.abstr.gattr(", mod, ", new Sk.builtin.str(", aliasOut, "))");
        //out("print('got');");
        storeName = alias.name;
        if (alias.asname) {
            storeName = alias.asname;
        }
        this.nameop(storeName, Sk.astnodes.Store, got);
    }
};

/**
 * builds a code object (js function) for various constructs. used by def,
 * lambda, generator expressions. it isn't used for class because it seemed
 * different enough.
 *
 * handles:
 * - setting up a new scope
 * - decorators (if any)
 * - defaults setup
 * - setup for cell and free vars
 * - setup and modification for generators
 *
 * @param {Object} n ast node to build for
 * @param {Sk.builtin.str} coname name of code object to build
 * @param {Array} decorator_list ast of decorators if any
 * @param {Sk.astnodes.arguments_} args arguments to function, if any
 * @param {Function} callback called after setup to do actual work of function
 * @param {Sk.builtin.str=} class_for_super
 *
 * @returns the name of the newly created function or generator object.
 *
 */
Compiler.prototype.buildcodeobj = function (n, coname, decorator_list, args, callback, class_for_super) {
    var containingHasFree;
    var frees;
    var argnamesarr;
    var argnames;
    var start;
    var kw;
    var maxargs;
    var minargs;
    var id;
    var argname;
    var offset;
    var cells;
    var locals;
    var i;
    var funcArgs;
    var entryBlock;
    var hasCell;
    var hasFree;
    var isGenerator;
    var scopename;
    var decos = [];
    var defaults = [];
    var vararg = null;
    var kwarg = null;

    // decorators and defaults have to be evaluated out here before we enter
    // the new scope. we output the defaults and attach them to this code
    // object, but only once we know the name of it (so we do it after we've
    // exited the scope near the end of this function).
    if (decorator_list) {
        decos = this.vseqexpr(decorator_list);
    }
    if (args && args.defaults) {
        defaults = this.vseqexpr(args.defaults);
    }
    if (args && args.vararg) {
        vararg = args.vararg;
    }
    if (args && args.kwarg) {
        kwarg = args.kwarg;
    }

    //
    // enter the new scope, and create the first block
    //
    scopename = this.enterScope(coname, n, n.lineno, this.canSuspend);

    isGenerator = this.u.ste.generator;
    hasFree = this.u.ste.hasFree;
    hasCell = this.u.ste.childHasFree;

    entryBlock = this.newBlock("codeobj entry");

    //
    // the header of the function, and arguments
    //
    this.u.prefixCode = "var " + scopename + "=(function " + this.niceName(coname.v) + "$(";

    funcArgs = [];
    if (isGenerator) {
        if (kwarg) {
            throw new SyntaxError(coname.v + "(): keyword arguments in generators not supported");
        }
        if (vararg) {
            throw new SyntaxError(coname.v + "(): variable number of arguments in generators not supported");
        }
        funcArgs.push("$gen");
    }
    else {
        if (kwarg) {
            funcArgs.push("$kwa");
            this.u.tempsToSave.push("$kwa");
        }
        for (i = 0; args && i < args.args.length; ++i) {
            funcArgs.push(this.nameop(args.args[i].id, Sk.astnodes.Param));
        }
    }
    if (hasFree) {
        if (vararg) {
            this.u.varDeclsCode += "$free = arguments[arguments.length-1];"
        } else {
            funcArgs.push("$free");
            this.u.tempsToSave.push("$free");
        }
    }

    this.u.prefixCode += funcArgs.join(",");

    this.u.prefixCode += "){";

    if (isGenerator) {
        this.u.prefixCode += "\n// generator\n";
    }
    if (hasFree) {
        this.u.prefixCode += "\n// has free\n";
    }
    if (hasCell) {
        this.u.prefixCode += "\n// has cell\n";
    }

    //
    // set up standard dicts/variables
    //
    locals = "{}";
    if (isGenerator) {
        entryBlock = "$gen.gi$resumeat";
        locals = "$gen.gi$locals";
    }
    cells = ",$cell={}";
    if (hasCell) {
        if (isGenerator) {
            cells = ",$cell=$gen.gi$cells";
        }
    }

    // note special usage of 'this' to avoid having to slice globals into
    // all function invocations in call
    this.u.varDeclsCode += "var $blk=" + entryBlock + ",$exc=[],$loc=" + locals + cells + ",$gbl=this,$err=undefined,$ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;";
    if (Sk.execLimit !== null) {
        this.u.varDeclsCode += "if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}";
    }
    if (Sk.yieldLimit !== null && this.u.canSuspend) {
        this.u.varDeclsCode += "if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}";
    }

    //
    // If there is a suspension, resume from it. Otherwise, initialise
    // parameters appropriately.
    //
    this.u.varDeclsCode += "if ("+scopename+".$wakingSuspension!==undefined) { $wakeFromSuspension(); } else {";

    // this could potentially get removed if generators would learn to deal with args, kw, kwargs, varargs
    // initialize default arguments. we store the values of the defaults to
    // this code object as .$defaults just below after we exit this scope.
    //
    if (defaults.length > 0) {
        // defaults have to be "right justified" so if there's less defaults
        // than args we offset to make them match up (we don't need another
        // correlation in the ast)
        offset = args.args.length - defaults.length;
        for (i = 0; i < defaults.length; ++i) {
            argname = this.nameop(args.args[i + offset].id, Sk.astnodes.Param);
            this.u.varDeclsCode += "if(" + argname + "===undefined)" + argname + "=" + scopename + ".$defaults[" + i + "];";
        }
    }

    //
    // copy all parameters that are also cells into the cells dict. this is so
    // they can be accessed correctly by nested scopes.
    //
    for (i = 0; args && i < args.args.length; ++i) {
        id = args.args[i].id;
        if (this.isCell(id)) {
            this.u.varDeclsCode += "$cell." + id.v + "=" + id.v + ";";
        }
    }

    //
    // make sure correct number of arguments were passed (generators handled below)
    //
    if (!isGenerator) {
        minargs = args ? args.args.length - defaults.length : 0;
        maxargs = vararg ? Infinity : (args ? args.args.length : 0);
        kw = kwarg ? true : false;
        this.u.varDeclsCode += "Sk.builtin.pyCheckArgsLen(\"" + coname.v +
            "\", arguments.length, " + minargs + ", " + maxargs + ", " + kw +
            ", " + hasFree + ");";
    }

    //
    // initialize vararg, if any
    //
    if (vararg) {
        start = funcArgs.length;

        this.u.localnames.push(vararg.v);
        this.u.varDeclsCode += vararg.v + "=new Sk.builtins['tuple'](Array.prototype.slice.call(arguments," + start + (hasFree ? ",-1)" : ")") + "); /*vararg*/";
    }

    //
    // initialize kwarg, if any
    //
    if (kwarg) {
        this.u.localnames.push(kwarg.v);
        this.u.varDeclsCode += kwarg.v + "=new Sk.builtins['dict']($kwa);";
    }

    //
    // close the else{} block from the wakingSuspension check
    //
    this.u.varDeclsCode += "}";

    // inject __class__ cell when running python3
    if (Sk.python3 && class_for_super) {
        this.u.varDeclsCode += "$gbl.__class__=this." + class_for_super.v + ";";
    }

    // finally, set up the block switch that the jump code expects
    //
    // Old switch code
    // this.u.switchCode += "while(true){switch($blk){";
    // this.u.suffixCode = "}break;}});";

    // New switch code to catch exceptions
    this.u.switchCode = "while(true){try{"
    this.u.switchCode += this.outputInterruptTest();
    this.u.switchCode += "switch($blk){";
    this.u.suffixCode = "} }catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '"+this.filename+"'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} }});";

    //
    // jump back to the handler so it can do the main actual work of the
    // function
    //
    callback.call(this, scopename);

    //
    // get a list of all the argument names (used to attach to the code
    // object, and also to allow us to declare only locals that aren't also
    // parameters).
    if (args && args.args.length > 0) {
        argnamesarr = [];
        for (i = 0; i < args.args.length; ++i) {
            argnamesarr.push(args.args[i].id.v);
        }

        argnames = argnamesarr.join("', '");
        // store to unit so we know what local variables not to declare
        this.u.argnames = argnamesarr;
    }

    //
    // and exit the code object scope
    //
    this.exitScope();

    //
    // attach the default values we evaluated at the beginning to the code
    // object so that it can get at them to set any arguments that are left
    // unset.
    //
    if (defaults.length > 0) {
        out(scopename, ".$defaults=[", defaults.join(","), "];");
    }

    if (decos.length > 0) {
        out(scopename, ".$decorators=[", decos.join(","), "];");
    }

    //
    // attach co_varnames (only the argument names) for keyword argument
    // binding.
    //
    if (argnames) {
        out(scopename, ".co_varnames=['", argnames, "'];");
    }

    //
    // attach flags
    //
    if (kwarg) {
        out(scopename, ".co_kwargs=1;");
    }

    //
    // build either a 'function' or 'generator'. the function is just a simple
    // constructor call. the generator is more complicated. it needs to make a
    // new generator every time it's called, so the thing that's returned is
    // actually a function that makes the generator (and passes arguments to
    // the function onwards to the generator). this should probably actually
    // be a function object, rather than a js function like it is now. we also
    // have to build the argument names to pass to the generator because it
    // needs to store all locals into itself so that they're maintained across
    // yields.
    //
    // todo; possibly this should be outside?
    //
    frees = "";
    if (hasFree) {
        frees = ",$cell";
        // if the scope we're in where we're defining this one has free
        // vars, they may also be cell vars, so we pass those to the
        // closure too.
        containingHasFree = this.u.ste.hasFree;
        if (containingHasFree) {
            frees += ",$free";
        }
    }
    if (isGenerator)
    // Keyword and variable arguments are not currently supported in generators.
    // The call to pyCheckArgs assumes they can't be true.
    {
        if (args && args.args.length > 0) {
            return this._gr("gener", "new Sk.builtins['function']((function(){var $origargs=Array.prototype.slice.call(arguments);Sk.builtin.pyCheckArgsLen(\"",
                coname.v, "\",arguments.length,", args.args.length - defaults.length, ",", args.args.length,
                ");return new Sk.builtins['generator'](", scopename, ",$gbl,$origargs", frees, ");}))");
        }
        else {
            return this._gr("gener", "new Sk.builtins['function']((function(){Sk.builtin.pyCheckArgsLen(\"", coname.v,
                "\",arguments.length,0,0);return new Sk.builtins['generator'](", scopename, ",$gbl,[]", frees, ");}))");
        }
    }
    else {
        var res;
        if (decos.length > 0) {
            out("$ret = Sk.misceval.callsimOrSuspendArray(", scopename, ".$decorators[0], [new Sk.builtins['function'](", scopename, ",$gbl", frees, ")]);");
            this._checkSuspension();
            return this._gr("funcobj", "$ret");
        }

        return this._gr("funcobj", "new Sk.builtins['function'](", scopename, ",$gbl", frees, ")");
    }
};

Compiler.prototype.cfunction = function (s, class_for_super) {
    var funcorgen;
    Sk.asserts.assert(s instanceof Sk.astnodes.FunctionDef);
    funcorgen = this.buildcodeobj(s, s.name, s.decorator_list, s.args, function (scopename) {
        this.vseqstmt(s.body);
        out("return Sk.builtin.none.none$;"); // if we fall off the bottom, we want the ret to be None
    }, class_for_super);
    this.nameop(s.name, Sk.astnodes.Store, funcorgen);
};

Compiler.prototype.clambda = function (e) {
    var func;
    Sk.asserts.assert(e instanceof Sk.astnodes.Lambda);
    func = this.buildcodeobj(e, new Sk.builtin.str("<lambda>"), null, e.args, function (scopename) {
        var val = this.vexpr(e.body);
        out("return ", val, ";");
    });
    return func;
};

Compiler.prototype.cifexp = function (e) {
    var next = this.newBlock("next of ifexp");
    var end = this.newBlock("end of ifexp");
    var ret = this._gr("res", "null");

    var test = this.vexpr(e.test);
    this._jumpfalse(test, next);

    out(ret, "=", this.vexpr(e.body), ";");
    this._jump(end);

    this.setBlock(next);
    out(ret, "=", this.vexpr(e.orelse), ";");
    this._jump(end);

    this.setBlock(end);
    return ret;
};

Compiler.prototype.cgenexpgen = function (generators, genIndex, elt) {
    var velt;
    var ifres;
    var i;
    var n;
    var target;
    var nexti;
    var toiter;
    var start = this.newBlock("start for " + genIndex);
    var skip = this.newBlock("skip for " + genIndex);
    var ifCleanup = this.newBlock("if cleanup for " + genIndex);
    var end = this.newBlock("end for " + genIndex);

    var ge = generators[genIndex];

    var iter;
    if (genIndex === 0) {
        // the outer most iterator is evaluated in the scope outside so we
        // have to evaluate it outside and store it into the generator as a
        // local, which we retrieve here.
        iter = "$loc.$iter0";
    }
    else {
        toiter = this.vexpr(ge.iter);
        iter = "$loc." + this.gensym("iter");
        out(iter, "=", "Sk.abstr.iter(", toiter, ");");
    }
    this._jump(start);
    this.setBlock(start);

    this.annotateSource(elt);

    // load targets
    out ("$ret = Sk.abstr.iternext(", iter,(this.u.canSuspend?", true":", false"),");");

    this._checkSuspension(elt);

    nexti = this._gr("next", "$ret");
    this._jumpundef(nexti, end); // todo; this should be handled by StopIteration
    target = this.vexpr(ge.target, nexti);

    n = ge.ifs.length;
    for (i = 0; i < n; ++i) {
        this.annotateSource(ge.ifs[i]);

        ifres = this.vexpr(ge.ifs[i]);
        this._jumpfalse(ifres, start);
    }

    if (++genIndex < generators.length) {
        this.cgenexpgen(generators, genIndex, elt);
    }

    if (genIndex >= generators.length) {
        this.annotateSource(elt);

        velt = this.vexpr(elt);
        out("return [", skip, "/*resume*/,", velt, "/*ret*/];");
        this.setBlock(skip);
    }

    this._jump(start);

    this.setBlock(end);

    if (genIndex === 1) {
        out("return Sk.builtin.none.none$;");
    }
};

Compiler.prototype.cgenexp = function (e) {
    var gen = this.buildcodeobj(e, new Sk.builtin.str("<genexpr>"), null, null, function (scopename) {
        this.cgenexpgen(e.generators, 0, e.elt);
    });

    // call the generator maker to get the generator. this is kind of dumb,
    // but the code builder builds a wrapper that makes generators for normal
    // function generators, so we just do it outside (even just new'ing it
    // inline would be fine).
    var gener = this._gr("gener", "Sk.misceval.callsimArray(", gen, ");");
    // stuff the outermost iterator into the generator after evaluating it
    // outside of the function. it's retrieved by the fixed name above.
    out(gener, ".gi$locals.$iter0=Sk.abstr.iter(", this.vexpr(e.generators[0].iter), ");");
    return gener;
};


Compiler.prototype.cclass = function (s) {
    var wrapped;
    var entryBlock;
    var scopename;
    var bases;
    var decos;
    Sk.asserts.assert(s instanceof Sk.astnodes.ClassDef);
    decos = s.decorator_list;

    // decorators and bases need to be eval'd out here
    //this.vseqexpr(decos);

    bases = this.vseqexpr(s.bases);

    scopename = this.enterScope(s.name, s, s.lineno);
    entryBlock = this.newBlock("class entry");

    this.u.prefixCode = "var " + scopename + "=(function $" + s.name.v + "$class_outer($globals,$locals,$cell){var $gbl=$globals,$loc=$locals;$free=$globals;";
    this.u.switchCode += "(function $" + s.name.v + "$_closure($cell){";
    this.u.switchCode += "var $blk=" + entryBlock + ",$exc=[],$ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;"

    if (Sk.execLimit !== null) {
        this.u.switchCode += "if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}";
    }
    if (Sk.yieldLimit !== null && this.u.canSuspend) {
        this.u.switchCode += "if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}";
    }

    this.u.switchCode += "while(true){try{";
    this.u.switchCode += this.outputInterruptTest();
    this.u.switchCode += "switch($blk){";
    this.u.suffixCode = "}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '"+this.filename+"'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }}}"
    this.u.suffixCode += "}).call(null, $cell);});";

    this.u.private_ = s.name;

    this.cbody(s.body, s.name);
    out("return;");

    // build class

    // apply decorators

    this.exitScope();

    // todo; metaclass
    wrapped = this._gr("built", "Sk.misceval.buildClass($gbl,", scopename, ",", s.name["$r"]().v, ",[", bases, "], $cell)");

    // store our new class under the right name
    this.nameop(s.name, Sk.astnodes.Store, wrapped);
};

Compiler.prototype.ccontinue = function (s) {
    var nextFinally = this.peekFinallyBlock(), gotoBlock;
    if (this.u.continueBlocks.length == 0) {
        throw new SyntaxError("'continue' outside loop");
    }
    // todo; continue out of exception blocks
    gotoBlock = this.u.continueBlocks[this.u.continueBlocks.length - 1];
    Sk.asserts.assert(this.u.breakBlocks.length === this.u.continueBlocks.length);
    if (nextFinally && nextFinally.breakDepth == this.u.continueBlocks.length) {
        out("$postfinally={isBreak:true,gotoBlock:",gotoBlock,"};");
    } else {
        this._jump(gotoBlock);
    }
};

Compiler.prototype.cbreak = function (s) {
    var nextFinally = this.peekFinallyBlock(), gotoBlock;

    if (this.u.breakBlocks.length === 0) {
        throw new SyntaxError("'break' outside loop");
    }
    gotoBlock = this.u.breakBlocks[this.u.breakBlocks.length - 1];
    if (nextFinally && nextFinally.breakDepth == this.u.breakBlocks.length) {
        out("$postfinally={isBreak:true,gotoBlock:",gotoBlock,"};");
    } else {
        this._jump(gotoBlock);
    }
};

/**
 * compiles a statement
 * @param {Object} s
 * @param {Sk.builtin.str=} class_for_super
 */
Compiler.prototype.vstmt = function (s, class_for_super) {
    var i;
    var val;
    var n;
    var debugBlock;
    this.u.lineno = s.lineno;
    this.u.linenoSet = false;
    this.u.localtemps = [];

    if (Sk.debugging && this.u.canSuspend) {
        debugBlock = this.newBlock("debug breakpoint for line "+s.lineno);
        out("if (Sk.breakpoints('"+this.filename+"',"+s.lineno+","+s.col_offset+")) {",
            "var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '"+this.filename+"',"+s.lineno+","+s.col_offset+");",
            "$susp.$blk = " + debugBlock + ";",
            "$susp.optional = true;",
            "return $susp;",
            "}");
        this._jump(debugBlock);
        this.setBlock(debugBlock);
        this.u.doesSuspend = true;
    }

    this.annotateSource(s);

    switch (s.constructor) {
        case Sk.astnodes.FunctionDef:
            this.cfunction(s, class_for_super);
            break;
        case Sk.astnodes.ClassDef:
            this.cclass(s);
            break;
        case Sk.astnodes.Return_:
            if (this.u.ste.blockType !== SYMTAB_CONSTS.FunctionBlock) {
                throw new SyntaxError("'return' outside function");
            }
            val = s.value ? this.vexpr(s.value) : "Sk.builtin.none.none$";
            if (this.u.finallyBlocks.length == 0) {
                out("return ", val, ";");
            } else {
                out("$postfinally={returning:",val,"};");
                this._jump(this.peekFinallyBlock().blk);
            }
            break;
        case Sk.astnodes.Delete_:
            this.vseqexpr(s.targets);
            break;
        case Sk.astnodes.Assign:
            n = s.targets.length;
            val = this.vexpr(s.value);
            for (i = 0; i < n; ++i) {
                this.vexpr(s.targets[i], val);
            }
            break;
        case Sk.astnodes.AugAssign:
            return this.caugassign(s);
        case Sk.astnodes.Print:
            this.cprint(s);
            break;
        case Sk.astnodes.For_:
            return this.cfor(s);
        case Sk.astnodes.While_:
            return this.cwhile(s);
        case Sk.astnodes.If_:
            return this.cif(s);
        case Sk.astnodes.Raise:
            return this.craise(s);
        case Sk.astnodes.TryExcept:
            return this.ctryexcept(s);
        case Sk.astnodes.TryFinally:
            return this.ctryfinally(s);
        case Sk.astnodes.With_:
            return this.cwith(s);
        case Sk.astnodes.Assert:
            return this.cassert(s);
        case Sk.astnodes.Import_:
            return this.cimport(s);
        case Sk.astnodes.ImportFrom:
            return this.cfromimport(s);
        case Sk.astnodes.Global:
            break;
        case Sk.astnodes.Expr:
            this.vexpr(s.value);
            break;
        case Sk.astnodes.Pass:
            break;
        case Sk.astnodes.Break_:
            this.cbreak(s);
            break;
        case Sk.astnodes.Continue_:
            this.ccontinue(s);
            break;
        case Sk.astnodes.Debugger_:
            out("debugger;");
            break;
        default:
            Sk.asserts.fail("unhandled case in vstmt: " + JSON.stringify(s));
    }
};

Compiler.prototype.vseqstmt = function (stmts) {
    var i;
    for (i = 0; i < stmts.length; ++i) {
        this.vstmt(stmts[i]);
    }
};

var OP_FAST = 0;
var OP_GLOBAL = 1;
var OP_DEREF = 2;
var OP_NAME = 3;
var D_NAMES = 0;
var D_FREEVARS = 1;
var D_CELLVARS = 2;

Compiler.prototype.isCell = function (name) {
    var mangled = mangleName(this.u.private_, name).v;
    var scope = this.u.ste.getScope(mangled);
    var dict = null;
    return scope === SYMTAB_CONSTS.CELL;

};

/**
 * @param {Sk.builtin.str} name
 * @param {Object} ctx
 * @param {string=} dataToStore
 */
Compiler.prototype.nameop = function (name, ctx, dataToStore) {
    var v;
    var mangledNoPre;
    var dict;
    var scope;
    var optype;
    var op;
    var mangled;
    if ((ctx === Sk.astnodes.Store || ctx === Sk.astnodes.AugStore || ctx === Sk.astnodes.Del) && name.v === "__debug__") {
        throw new Sk.builtin.SyntaxError("can not assign to __debug__");
    }
    if ((ctx === Sk.astnodes.Store || ctx === Sk.astnodes.AugStore || ctx === Sk.astnodes.Del) && name.v === "None") {
        throw new Sk.builtin.SyntaxError("can not assign to None");
    }

    if (name.v === "None") {
        return "Sk.builtin.none.none$";
    }
    if (name.v === "True") {
        return "Sk.builtin.bool.true$";
    }
    if (name.v === "False") {
        return "Sk.builtin.bool.false$";
    }
    if (name.v === "NotImplemented") {
        return "Sk.builtin.NotImplemented.NotImplemented$";
    }

    mangled = mangleName(this.u.private_, name).v;
    // Have to do this before looking it up in the scope
    mangled = fixReservedNames(mangled);
    op = 0;
    optype = OP_NAME;
    scope = this.u.ste.getScope(mangled);
    dict = null;
    switch (scope) {
        case SYMTAB_CONSTS.FREE:
            dict = "$free";
            optype = OP_DEREF;
            break;
        case SYMTAB_CONSTS.CELL:
            dict = "$cell";
            optype = OP_DEREF;
            break;
        case SYMTAB_CONSTS.LOCAL:
            // can't do FAST in generators or at module/class scope
            if (this.u.ste.blockType === SYMTAB_CONSTS.FunctionBlock && !this.u.ste.generator) {
                optype = OP_FAST;
            }
            break;
        case SYMTAB_CONSTS.GLOBAL_IMPLICIT:
            if (this.u.ste.blockType === SYMTAB_CONSTS.FunctionBlock) {
                optype = OP_GLOBAL;
            }
            break;
        case SYMTAB_CONSTS.GLOBAL_EXPLICIT:
            optype = OP_GLOBAL;
        default:
            break;
    }

    // have to do this after looking it up in the scope
    mangled = fixReservedWords(mangled);

    //print("mangled", mangled);
    // TODO TODO TODO todo; import * at global scope failing here
    Sk.asserts.assert(scope || name.v.charAt(1) === "_");

    // in generator or at module scope, we need to store to $loc, rather that
    // to actual JS stack variables.
    mangledNoPre = mangled;
    if (this.u.ste.generator || this.u.ste.blockType !== SYMTAB_CONSTS.FunctionBlock) {
        mangled = "$loc." + mangled;
    }
    else if (optype === OP_FAST || optype === OP_NAME) {
        this.u.localnames.push(mangled);
    }

    switch (optype) {
        case OP_FAST:
            switch (ctx) {
                case Sk.astnodes.Load:
                case Sk.astnodes.Param:
                    // Need to check that it is bound!
                    out("if (", mangled, " === undefined) { throw new Sk.builtin.UnboundLocalError('local variable \\\'", mangled, "\\\' referenced before assignment'); }\n");
                    return mangled;
                case Sk.astnodes.Store:
                    out(mangled, "=", dataToStore, ";");
                    break;
                case Sk.astnodes.Del:
                    out("delete ", mangled, ";");
                    break;
                default:
                    Sk.asserts.fail("unhandled");
            }
            break;
        case OP_NAME:
            switch (ctx) {
                case Sk.astnodes.Load:
                    // can't be || for loc.x = 0 or null
                    return this._gr("loadname", mangled, "!==undefined?", mangled, ":Sk.misceval.loadname('", mangledNoPre, "',$gbl);");
                case Sk.astnodes.Store:
                    out(mangled, "=", dataToStore, ";");
                    break;
                case Sk.astnodes.Del:
                    out("delete ", mangled, ";");
                    break;
                case Sk.astnodes.Param:
                    return mangled;
                default:
                    Sk.asserts.fail("unhandled");
            }
            break;
        case OP_GLOBAL:
            switch (ctx) {
                case Sk.astnodes.Load:
                    return this._gr("loadgbl", "Sk.misceval.loadname('", mangledNoPre, "',$gbl)");
                case Sk.astnodes.Store:
                    out("$gbl.", mangledNoPre, "=", dataToStore, ";");
                    break;
                case Sk.astnodes.Del:
                    out("delete $gbl.", mangledNoPre);
                    break;
                default:
                    Sk.asserts.fail("unhandled case in name op_global");
            }
            break;
        case OP_DEREF:
            switch (ctx) {
                case Sk.astnodes.Load:
                    return dict + "." + mangledNoPre;
                case Sk.astnodes.Store:
                    out(dict, ".", mangledNoPre, "=", dataToStore, ";");
                    break;
                case Sk.astnodes.Param:
                    return mangledNoPre;
                default:
                    Sk.asserts.fail("unhandled case in name op_deref");
            }
            break;
        default:
            Sk.asserts.fail("unhandled case");
    }
};

/**
 * @param {Sk.builtin.str} name
 * @param {Object} key
 * @param {number} lineno
 * @param {boolean=} canSuspend
 */
Compiler.prototype.enterScope = function (name, key, lineno, canSuspend) {
    var scopeName;
    var u = new CompilerUnit();
    u.ste = this.st.getStsForAst(key);
    u.name = name;
    u.firstlineno = lineno;
    u.canSuspend = canSuspend || false;

    if (this.u && this.u.private_) {
        u.private_ = this.u.private_;
    }

    this.stack.push(this.u);
    this.allUnits.push(u);
    scopeName = this.gensym("scope");
    u.scopename = scopeName;

    this.u = u;
    this.u.activateScope();

    this.nestlevel++;

    return scopeName;
};

Compiler.prototype.exitScope = function () {
    var mangled;
    var prev = this.u;
    this.nestlevel--;
    if (this.stack.length - 1 >= 0) {
        this.u = this.stack.pop();
    }
    else {
        this.u = null;
    }
    if (this.u) {
        this.u.activateScope();
    }

    if (prev.name.v !== "<module>") {// todo; hacky
        mangled = prev.name["$r"]().v;
        mangled = mangled.substring(1, mangled.length - 1);
        mangled = fixReservedWords(mangled);
        mangled = fixReservedNames(mangled);
        out(prev.scopename, ".co_name=new Sk.builtins['str']('", mangled, "');");
    }
    for (var constant in prev.consts) {
        if (prev.consts.hasOwnProperty(constant)) {
            prev.suffixCode += constant + " = " + prev.consts[constant] + ";";
        }
    }
};

/**
 * @param {Array} stmts
 * @param {Sk.builtin.str=} class_for_super
 */
Compiler.prototype.cbody = function (stmts, class_for_super) {
    var i;
    for (i = 0; i < stmts.length; ++i) {
        this.vstmt(stmts[i], class_for_super);
    }
};

Compiler.prototype.cprint = function (s) {
    var i;
    var n;
    var dest;
    Sk.asserts.assert(s instanceof Sk.astnodes.Print);
    dest = "null";
    if (s.dest) {
        dest = this.vexpr(s.dest);
    }

    n = s.values.length;
    // todo; dest disabled
    for (i = 0; i < n; ++i) {
        out("$ret = Sk.misceval.print_(", /*dest, ',',*/ "new Sk.builtins['str'](", this.vexpr(s.values[i]), ").v);");
        this._checkSuspension(s);
    }
    if (s.nl) {
        out("$ret = Sk.misceval.print_(", /*dest, ',*/ "\"\\n\");");
        this._checkSuspension(s);
    }

};

Compiler.prototype.cmod = function (mod) {
    //print("-----");
    //print(Sk.astDump(mod));
    var modf = this.enterScope(new Sk.builtin.str("<module>"), mod, 0, this.canSuspend);

    var entryBlock = this.newBlock("module entry");
    this.u.prefixCode = "var " + modf + "=(function($forcegbl){";
    this.u.varDeclsCode =
        "var $gbl = $forcegbl || {}, $blk=" + entryBlock +
        ",$exc=[],$loc=$gbl,$cell={},$err=undefined;" +
        "$loc.__file__=new Sk.builtins.str('" + this.filename +
        "');var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;";

    if (Sk.execLimit !== null) {
        this.u.varDeclsCode += "if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}";
    }

    if (Sk.yieldLimit !== null && this.u.canSuspend) {
        this.u.varDeclsCode += "if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}";
    }

    this.u.varDeclsCode += "if ("+modf+".$wakingSuspension!==undefined) { $wakeFromSuspension(); }" +
        "if (Sk.retainGlobals) {" +
        "    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }" +
        "    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; $loc.__file__=new Sk.builtins.str('" + this.filename + "');}" +
        "    else { Sk.globals = $gbl; }" +
        "} else { Sk.globals = $gbl; }";

    // Add the try block that pops the try/except stack if one exists
    // Github Issue #38
    // Google Code Issue: 109 / 114

    // Old code:
    //this.u.switchCode = "while(true){switch($blk){";
    //this.u.suffixCode = "}}});";

    // New Code:
    this.u.switchCode = "while(true){try{";
    this.u.switchCode += this.outputInterruptTest();
    this.u.switchCode += "switch($blk){";
    this.u.suffixCode = "}"
    this.u.suffixCode += "}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '"+this.filename+"'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });";

    // Note - this change may need to be adjusted for all the other instances of
    // switchCode and suffixCode in this file.  Not knowing how to test those
    // other cases I left them alone.   At least the changes to
    // setupExcept and endExcept will insure that the generated JavaScript
    // will be syntactically correct.  The worst that will happen is that when
    // code in a try block blows up, we will not know to run the except block.
    // The other problem is that we might catch something that is really an internal
    // error - it might be nice to add code in the above catch block that looked at
    // the kind of exception and only popped the stack for exceptions that are
    // from the original code rather than artifacts of some code generation or
    // exeution environment error.  We at least err on the side of exceptions
    // being revealed to the user.  drchuck - Wed Jan 23 19:20:18 EST 2013

    switch (mod.constructor) {
        case Sk.astnodes.Module:
            this.cbody(mod.body);
            out("return $loc;");
            break;
        default:
            Sk.asserts.fail("todo; unhandled case in compilerMod");
    }
    this.exitScope();

    this.result.push(this.outputAllUnits());
    return modf;
};

/**
 * @param {string} source the code
 * @param {string} filename where it came from
 * @param {string} mode one of 'exec', 'eval', or 'single'
 * @param {boolean=} canSuspend if the generated code supports suspension
 */
Sk.compile = function (source, filename, mode, canSuspend) {
    //print("FILE:", filename);
    var parse = Sk.parse(filename, source);
    var ast = Sk.astFromParse(parse.cst, filename, parse.flags);

    // compilers flags, later we can add other ones too
    var flags = {};
    flags.cf_flags = parse.flags;

    var st = Sk.symboltable(ast, filename);
    var c = new Compiler(filename, st, flags.cf_flags, canSuspend, source); // todo; CO_xxx
    var funcname = c.cmod(ast);

    var ret = "$compiledmod = function() {" + c.result.join("") + "\nreturn " + funcname + ";}();";
    return {
        funcname: "$compiledmod",
        code    : ret
    };
};

Sk.exportSymbol("Sk.compile", Sk.compile);

Sk.resetCompiler = function () {
    Sk.gensymcount = 0;
};

Sk.exportSymbol("Sk.resetCompiler", Sk.resetCompiler);

Sk.fixReservedWords = fixReservedWords;
Sk.exportSymbol("Sk.fixReservedWords", Sk.fixReservedWords);

Sk.fixReservedNames = fixReservedNames;
Sk.exportSymbol("Sk.fixReservedNames", Sk.fixReservedNames);

Sk.unfixReserved = unfixReserved;
Sk.exportSymbol("Sk.unfixReserved", Sk.unfixReserved);

Sk.mangleName = mangleName;
Sk.exportSymbol("Sk.mangleName", Sk.mangleName);
/**
 * @namespace Sk
 *
 */

// this is stored into sys specially, rather than created by sys
Sk.sysmodules = new Sk.builtin.dict([]);
Sk.realsyspath = undefined;

/**
 * @param {string} name to look for
 * @param {string} ext extension to use (.py or .js)
 * @param {Object=} searchPath an iterable set of path strings
 */
Sk.importSearchPathForName = function (name, ext, searchPath) {
    var fn;
    var j;
    var fns = [];
    var nameAsPath = name.replace(/\./g, "/");
    var it, i;

    var tryPathAndBreakOnSuccess = function(filename, packagePath) {
        return Sk.misceval.chain(
            Sk.misceval.tryCatch(function() {
                return Sk.read(filename);
            }, function(e) { /* Exceptions signal "not found" */ }),
            function(code) {
                if (code !== undefined) {
                    // This will cause the iterFor() to return the specified value
                    return new Sk.misceval.Break({filename: filename, code: code, packagePath: packagePath});
                }
            }
        );
    };

    if (searchPath === undefined) {
        searchPath = Sk.realsyspath;
    }

    return Sk.misceval.iterFor(searchPath.tp$iter(), function(pathStr) {
        // For each element of path, try loading the module, and if that
        // doesn't work, try the corresponding package.
        return Sk.misceval.chain(
            tryPathAndBreakOnSuccess(pathStr.v + "/" + nameAsPath + ext, false), // module
            function(r) {
                return r ? r : tryPathAndBreakOnSuccess(pathStr.v + "/" + nameAsPath + "/__init__" + ext,
                                                        pathStr.v + "/" + nameAsPath); // package
            }
        );
    });
};

/**
 * Complete any initialization of Python classes which relies on internal
 * dependencies.
 *
 * This includes making Python classes subclassable and ensuring that the
 * {@link Sk.builtin.object} magic methods are wrapped inside Python functions.
 *
 * @return {undefined}
 */
Sk.doOneTimeInitialization = function (canSuspend) {
    var proto, name, i, x, func, typesWithFunctionsToWrap, builtin_type, j;

    // can't fill these out when making the type because tuple/dict aren't
    // defined yet.
    Sk.builtin.type.basesStr_ = new Sk.builtin.str("__bases__");
    Sk.builtin.type.mroStr_ = new Sk.builtin.str("__mro__");

    // Register a Python class with an internal dictionary, which allows it to
    // be subclassed
    var setUpClass = function (child) {
        var parent = child.tp$base;
        var bases = [];
        var base;

        for (base = parent; base !== undefined; base = base.tp$base) {
            bases.push(base);
        }

        child.tp$mro = new Sk.builtin.tuple([child]);
        if (!child.tp$base){
            child.tp$base = bases[0];
        }
        child["$d"] = new Sk.builtin.dict([]);
        child["$d"].mp$ass_subscript(Sk.builtin.type.basesStr_, new Sk.builtin.tuple(bases));
        child["$d"].mp$ass_subscript(Sk.builtin.type.mroStr_, child.tp$mro);
    };

    for (x in Sk.builtin) {
        func = Sk.builtin[x];
        if ((func.prototype instanceof Sk.builtin.object ||
             func === Sk.builtin.object) && !func.sk$abstract) {
            setUpClass(func);
        }
    }

    // Wrap the inner Javascript code of Sk.builtin.object's Python methods inside
    // Sk.builtin.func, as that class was undefined when these functions were declared
    typesWithFunctionsToWrap = [Sk.builtin.object, Sk.builtin.type, Sk.builtin.func, Sk.builtin.method];

    for (i = 0; i < typesWithFunctionsToWrap.length; i++) {
        builtin_type = typesWithFunctionsToWrap[i];
        proto = builtin_type.prototype;
        for (j = 0; j < builtin_type.pythonFunctions.length; j++) {
            name = builtin_type.pythonFunctions[j];

            if (proto[name] instanceof Sk.builtin.func) {
                // If functions have already been initialized, do not wrap again.
                break;
            }

            proto[name].co_kwargs = null;
            proto[name] = new Sk.builtin.func(proto[name]);
        }
    }


    // compile internal python files and add them to the __builtin__ module
    for (var file in Sk.internalPy.files) {
        var fileWithoutExtension = file.split(".")[0].split("/")[1];
        var mod = Sk.importBuiltinWithBody(fileWithoutExtension, false, Sk.internalPy.files[file], true);
        mod = Sk.misceval.retryOptionalSuspensionOrThrow(mod);
        Sk.asserts.assert(mod["$d"][fileWithoutExtension] !== undefined, "Should have imported name " + fileWithoutExtension);
        Sk.builtins[fileWithoutExtension] = mod["$d"][fileWithoutExtension];
    }
};

/**
 * currently only pull once from Sk.syspath. User might want to change
 * from js or from py.
 */
Sk.importSetUpPath = function (canSuspend) {
    var i;
    var paths;
    if (!Sk.realsyspath) {
        paths = [
            new Sk.builtin.str("src/builtin"),
            new Sk.builtin.str("src/lib"),
            new Sk.builtin.str(".")
        ];
        for (i = 0; i < Sk.syspath.length; ++i) {
            paths.push(new Sk.builtin.str(Sk.syspath[i]));
        }
        Sk.realsyspath = new Sk.builtin.list(paths);

        Sk.doOneTimeInitialization(canSuspend);
    }
};

/**
 * @param {string} name name of module to import
 * @param {boolean=} dumpJS whether to output the generated js code
 * @param {string=} modname what to call the module after it's imported if
 * it's to be renamed (i.e. __main__)
 * @param {string=} suppliedPyBody use as the body of the text for the module
 * rather than Sk.read'ing it.
 * @param {Object=} relativeToPackage perform import relative to this package
 * @param {boolean=} returnUndefinedOnTopLevelNotFound return 'undefined' rather than throwing ImportError if the *first* load failed
 * @param {boolean=} canSuspend whether we may return a Suspension object
 */
Sk.importModuleInternal_ = function (name, dumpJS, modname, suppliedPyBody, relativeToPackage, returnUndefinedOnTopLevelNotFound, canSuspend) {
    //dumpJS = true;
    var filename;
    var prev;
    var parentModName;
    var parentModule;
    var modNameSplit;
    var ret;
    var module;
    var topLevelModuleToReturn = null;
    var relativePackageName = relativeToPackage !== undefined ? relativeToPackage.tp$getattr(Sk.builtin.str.$name) : undefined;
    var absolutePackagePrefix = relativePackageName !== undefined ? relativePackageName.v + "." : "";
    var searchPath = relativeToPackage !== undefined ? relativeToPackage.tp$getattr(Sk.builtin.str.$path) : undefined;
    Sk.importSetUpPath(canSuspend);

    if (relativeToPackage && !relativePackageName) {
        if (returnUndefinedOnTopLevelNotFound) {
            return undefined;
        } else {
            throw new Sk.builtin.ValueError("Attempted to import relative to invalid package (no name)");
        }
    }

    // if no module name override, supplied, use default name
    if (modname === undefined) {
        modname = absolutePackagePrefix + name;
    }

    modNameSplit = name.split(".");

    // if leaf is already in sys.modules, early out
    try {
        prev = Sk.sysmodules.mp$subscript(modname);
        // if we're a dotted module, return the top level, otherwise ourselves
        if (modNameSplit.length > 1) {
            return Sk.sysmodules.mp$subscript(absolutePackagePrefix + modNameSplit[0]);
        } else {
            return prev;
        }
    } catch (x) {
        // not in sys.modules, continue
    }

    if (modNameSplit.length > 1) {
        // if we're a module inside a package (i.e. a.b.c), then we'll need to return the
        // top-level package ('a'). recurse upwards on our parent, importing
        // all parent packages. so, here we're importing 'a.b', which will in
        // turn import 'a', and then return 'a' eventually.
        parentModName = modNameSplit.slice(0, modNameSplit.length - 1).join(".");
        topLevelModuleToReturn = Sk.importModuleInternal_(parentModName, dumpJS, undefined, undefined, relativeToPackage, returnUndefinedOnTopLevelNotFound, canSuspend);
    }

    ret = Sk.misceval.chain(topLevelModuleToReturn, function(topLevelModuleToReturn_) {
        var codeAndPath, co, googClosure;
        var searchFileName = name;
        var result;

        topLevelModuleToReturn = topLevelModuleToReturn_;

        // If we're inside a package, look search using its __path__
        if (modNameSplit.length > 1) {
            if (!topLevelModuleToReturn) {
                return undefined;
            }
            parentModule = Sk.sysmodules.mp$subscript(absolutePackagePrefix + parentModName);
            searchFileName = modNameSplit[modNameSplit.length-1];
            searchPath = parentModule.tp$getattr(Sk.builtin.str.$path);
        }

        // otherwise:
        // - create module object
        // - add module object to sys.modules
        // - compile source to (function(){...});
        // - run module and set the module locals returned to the module __dict__
        module = new Sk.builtin.module();

        if (suppliedPyBody) {
            filename = name + ".py";
            co = Sk.compile(suppliedPyBody, filename, "exec", canSuspend);
        } else {
            co = Sk.misceval.chain(undefined, function() {
                // If an onBeforeImport method is supplied, call it and if
                // the result is false or a string, prevent the import.
                // This allows for a user to conditionally prevent the usage
                // of certain libraries.
                if (Sk.onBeforeImport && typeof Sk.onBeforeImport === "function") {
                    return Sk.onBeforeImport(name);
                }

                return;
            }, function(result) {
                if (result === false) {
                    throw new Sk.builtin.ImportError("Importing " + name + " is not allowed");
                } else if (typeof result === "string") {
                    throw new Sk.builtin.ImportError(result);
                }

                // Try loading as a builtin (i.e. already in JS) module, then try .py files
                return Sk.importSearchPathForName(searchFileName, ".js", searchPath);
            }, function(codeAndPath) {
                if (codeAndPath) {
                    return {funcname: "$builtinmodule", code: codeAndPath.code,
                            filename: codeAndPath.filename, packagePath: codeAndPath.packagePath};
                } else {
                    return Sk.misceval.chain(Sk.importSearchPathForName(searchFileName, ".py", searchPath), function(codeAndPath_) {
                        codeAndPath = codeAndPath_; // We'll want it in a moment
                        if (codeAndPath) {
                            return Sk.compile(codeAndPath.code, codeAndPath.filename, "exec", canSuspend);
                        }
                    }, function(co) {
                        if (co) {
                            co.packagePath = codeAndPath.packagePath;
                            return co;
                        }
                    });
                }
            });

        }
        return co;

    }, function(co) {

        var finalcode;
        var withLineNumbers;
        var modscope;

        if (!co) {
            return undefined;
        }

        // Now we know this module exists, we can add it to the cache
        Sk.sysmodules.mp$ass_subscript(modname, module);

        module.$js = co.code; // todo; only in DEBUG?
        finalcode = co.code;

        if (filename == null) {
            filename = co.filename;
        }

        if (Sk.dateSet == null || !Sk.dateSet) {
            finalcode = "Sk.execStart = Sk.lastYield = new Date();\n" + co.code;
            Sk.dateSet = true;
        }

        // if (!COMPILED)
        // {
        if (dumpJS) {
            withLineNumbers = function (code) {
                var j;
                var pad;
                var width;
                var i;
                var beaut = Sk.js_beautify(code);
                var lines = beaut.split("\n");
                for (i = 1; i <= lines.length; ++i) {
                    width = ("" + i).length;
                    pad = "";
                    for (j = width; j < 5; ++j) {
                        pad += " ";
                    }
                    lines[i - 1] = "/* " + pad + i + " */ " + lines[i - 1];
                }
                return lines.join("\n");
            };
            finalcode = withLineNumbers(finalcode);
            Sk.debugout(finalcode);
        }
        // }

        finalcode += "\n" + co.funcname + ";";

        modscope = Sk.global["eval"](finalcode);

        module["$d"] = {
            "__name__": new Sk.builtin.str(modname),
            "__doc__": Sk.builtin.none.none$,
            "__package__": co.packagePath ? new Sk.builtin.str(modname) :
                                parentModName ? new Sk.builtin.str(absolutePackagePrefix + parentModName) :
                                relativePackageName ? relativePackageName : Sk.builtin.none.none$
        };
        if (co.packagePath) {
            module["$d"]["__path__"] = new Sk.builtin.tuple([new Sk.builtin.str(co.packagePath)]);
        }

        return modscope(module["$d"]);

    }, function (modlocs) {
        var i;

        if (modlocs === undefined) {
            if (returnUndefinedOnTopLevelNotFound && !topLevelModuleToReturn) {
                return undefined;
            } else {
                throw new Sk.builtin.ImportError("No module named " + name);
            }
        }

        // Some builtin modules replace their globals entirely.
        // For their benefit, we copy over any of the standard
        // dunder-values they didn't supply.
        if (modlocs !== module["$d"]) {
            for (i in module["$d"]) {
                if (!modlocs[i]) {
                    modlocs[i] = module["$d"][i];
                }
            }
            module["$d"] = modlocs;
        }

        // If an onAfterImport method is defined on the global Sk
        // then call it now after a library has been successfully imported
        // and compiled.
        if (Sk.onAfterImport && typeof Sk.onAfterImport === "function") {
            try {
                Sk.onAfterImport(name);
            } catch (e) {
            }
        }

        if (topLevelModuleToReturn) {
            // if we were a dotted name, then we want to return the top-most
            // package. we store ourselves into our parent as an attribute
            parentModule.tp$setattr(new Sk.builtin.str(modNameSplit[modNameSplit.length - 1]), module);
            //print("import returning parent module, modname", modname, "__name__", toReturn.tp$getattr("__name__").v);
            return topLevelModuleToReturn;
        }

        if (relativeToPackage) {
            relativeToPackage.tp$setattr(new Sk.builtin.str(name), module);
        }

        //print("name", name, "modname", modname, "returning leaf");
        // otherwise we return the actual module that we just imported
        return module;
    });

    return canSuspend ? ret : Sk.misceval.retryOptionalSuspensionOrThrow(ret);
};

/**
 * @param {string} name the module name
 * @param {boolean=} dumpJS print out the js code after compilation for debugging
 * @param {boolean=} canSuspend can this function suspend and return a Suspension object?
 */
Sk.importModule = function (name, dumpJS, canSuspend) {
    return Sk.importModuleInternal_(name, dumpJS, undefined, undefined, undefined, false, canSuspend);
};

Sk.importMain = function (name, dumpJS, canSuspend) {
    Sk.dateSet = false;
    Sk.filesLoaded = false;
    // Added to reset imports
    Sk.sysmodules = new Sk.builtin.dict([]);
    Sk.realsyspath = undefined;

    Sk.resetCompiler();

    return Sk.importModuleInternal_(name, dumpJS, "__main__", undefined, undefined, false, canSuspend);
};

/**
 * **Run Python Code in Skulpt**
 *
 * When you want to hand Skulpt a string corresponding to a Python program this is the function.
 *
 * @param name {string}  File name to use for messages related to this run
 * @param dumpJS {boolean} print out the compiled javascript
 * @param body {string} Python Code
 * @param canSuspend {boolean}  Use Suspensions for async execution
 *
 */
Sk.importMainWithBody = function (name, dumpJS, body, canSuspend) {
    Sk.dateSet = false;
    Sk.filesLoaded = false;
    // Added to reset imports
    Sk.sysmodules = new Sk.builtin.dict([]);
    Sk.realsyspath = undefined;

    Sk.resetCompiler();

    return Sk.importModuleInternal_(name, dumpJS, "__main__", body, undefined, false, canSuspend);
};

/**
 * Imports internal python files into the `__builtin__` module. Used during startup
 * to compile and import all *.py files from the src/ directory.
 *
 * @param name {string}  File name to use for messages related to this run
 * @param dumpJS {boolean} print out the compiled javascript
 * @param body {string} Python Code
 * @param canSuspend {boolean}  Use Suspensions for async execution
 *
 */
Sk.importBuiltinWithBody = function (name, dumpJS, body, canSuspend) {
    return Sk.importModuleInternal_(name, dumpJS, "__builtin__."+name, body, undefined, false, canSuspend);
};

Sk.builtin.__import__ = function (name, globals, locals, fromlist, level) {
    //print("Importing: ", JSON.stringify(name), JSON.stringify(fromlist), level);
    //if (name == "") { debugger; }

    // Save the Sk.globals variable importModuleInternal_ may replace it when it compiles
    // a Python language module.
    var saveSk = Sk.globals;

    // This might be a relative import, so first we get hold of the module object
    // representing this module's package (so we can search its __path__).
    // module.__package__ contains its name, so we use that to look it up in sys.modules.

    var relativeToPackage;
    var relativeToPackageName;
    var relativeToPackageNames;

    if (level === undefined) {
        level = Sk.__future__.absolute_import ? 0 : -1;
    }

    if (level !== 0 && globals["__package__"] && globals["__package__"] !== Sk.builtin.none.none$) {
        relativeToPackageName = globals["__package__"].v;
        if (relativeToPackageName && level > 0) {
            // Trim <level> packages off the end
            relativeToPackageNames = relativeToPackageName.split(".");
            if (level-1 >= relativeToPackageNames.length) {
                throw new Sk.builtin.ValueError("Attempted relative import beyond toplevel package");
            }
            relativeToPackageNames.length -= level-1;
            relativeToPackageName = relativeToPackageNames.join(".");
        }
        try {
            relativeToPackage = Sk.sysmodules.mp$subscript(relativeToPackageName);
        } catch(e) {
            relativeToPackageName = undefined;
        }
    }

    if (level > 0 && relativeToPackage === undefined) {
        throw new Sk.builtin.ValueError("Attempted relative import in non-package");
    }

    var dottedName = name.split(".");
    var firstDottedName = dottedName[0];

    return Sk.misceval.chain(undefined, function() {
            // Attempt local load first (and just fall through to global
            // case if level == -1 and we fail to load the top-level package)
            if (level !== 0 && relativeToPackage !== undefined) {
                if (name === "") {
                    // "from .. import ..."
                    return relativeToPackage;
                } else {
                    return Sk.importModuleInternal_(name, undefined, relativeToPackageName + "." + name, undefined, relativeToPackage, level==-1, true);
                }
            }
        }, function(ret) {
            if (ret === undefined) {
                // Either it was always a global import, or it was an
                // either-way import that just fell through.
                relativeToPackage = undefined;
                relativeToPackageName = undefined;
                return Sk.importModuleInternal_(name, undefined, undefined, undefined, undefined, false, true);
            } else {
                return ret;
            }
        }, function(ret) {
            // We might also have to load modules named by the fromlist.
            // If there is no fromlist, we have reached the end of the lookup, return
            if (!fromlist || fromlist.length === 0) {
                return ret;
            } else {
                // try to load from-names as modules from the file system
                // if they are not present on the module itself
                var i;
                var fromName;
                var leafModule;
                var importChain;

                leafModule = Sk.sysmodules.mp$subscript(
                    (relativeToPackageName || "") +
                    ((relativeToPackageName && name) ? "." : "") +
                    name);

                for (i = 0; i < fromlist.length; i++) {
                    fromName = fromlist[i];

                    // "ret" is the module we're importing from
                    // Only import from file system if we have not found the fromName in the current module
                    if (fromName != "*" && leafModule.tp$getattr(new Sk.builtin.str(fromName)) === undefined) {
                        importChain = Sk.misceval.chain(importChain,
                            Sk.importModuleInternal_.bind(null, fromName, undefined, undefined, undefined, leafModule, true, true)
                        );
                    }

                }

                return Sk.misceval.chain(importChain, function() {
                    // if there's a fromlist we want to return the leaf module
                    // (ret), not the toplevel namespace
                    Sk.asserts.assert(leafModule);
                    return leafModule;
                });
            }

        }, function(ret) {
            if (saveSk !== Sk.globals) {
                Sk.globals = saveSk;
            }
            return ret;
        }
    );
};

Sk.importStar = function (module, loc, global) {
    var i;
    var props = Object["getOwnPropertyNames"](module["$d"]);
    for (i in props) {
        if (props[i].charAt(0) != "_") {
            loc[props[i]] = module["$d"][props[i]];
        }
    }
};

Sk.exportSymbol("Sk.importMain", Sk.importMain);
Sk.exportSymbol("Sk.importMainWithBody", Sk.importMainWithBody);
Sk.exportSymbol("Sk.importBuiltinWithBody", Sk.importBuiltinWithBody);
Sk.exportSymbol("Sk.builtin.__import__", Sk.builtin.__import__);
Sk.exportSymbol("Sk.importStar", Sk.importStar);
/**
 * @constructor
 * @param {Sk.builtin.list=} list
 * @param {number=} length optional
 * @extends Sk.builtin.object
 */
Sk.builtin.timSort = function (list, length) {
    this.list = new Sk.builtin.list(list.v);
    // When we get into galloping mode, we stay there until both runs win less
    // often than MIN_GALLOP consecutive times.  See listsort.txt for more info.
    this.MIN_GALLOP = 7;
    if (length) {
        this.listlength = length;
    } else {
        this.listlength = list.sq$length();
    }
};

Sk.builtin.timSort.prototype.lt = function (a, b) {
    return Sk.misceval.richCompareBool(a, b, "Lt");
};

Sk.builtin.timSort.prototype.le = function (a, b) {
    return !this.lt(b, a);
};

Sk.builtin.timSort.prototype.setitem = function (item, value) {
    this.list.v[item] = value;
};

/*
 # binarysort is the best method for sorting small arrays: it does
 # few compares, but can do data movement quadratic in the number of
 # elements.
 # "a" is a contiguous slice of a list, and is sorted via binary insertion.
 # This sort is stable.
 # On entry, the first "sorted" elements are already sorted.
 # Even in case of error, the output slice will be some permutation of
 # the input (nothing is lost or duplicated)
 */
Sk.builtin.timSort.prototype.binary_sort = function (a, sorted) {
    var pivot;
    var p;
    var r;
    var l;
    var start;
    for (start = a.base + sorted; start < a.base + a.len; start++) {
        l = a.base;
        r = start;
        pivot = a.getitem(r);
        // Invariants:
        // pivot >= all in [base, l).
        // pivot  < all in [r, start).
        // The second is vacuously true at the start.
        while (l < r) {
            p = l + ((r - l) >> 1);
            if (this.lt(pivot, a.getitem(p))) {
                r = p;
            } else {
                l = p + 1;
            }
        }
        Sk.asserts.assert(l === r);
        // The invariants still hold, so pivot >= all in [base, l) and
        // pivot < all in [l, start), so pivot belongs at l.  Note
        // that if there are elements equal to pivot, l points to the
        // first slot after them -- that's why this sort is stable.
        // Slide over to make room.
        for (p = start; p > l; p--) {
            a.setitem(p, a.getitem(p - 1));
        }
        a.setitem(l, pivot);
    }
};

Sk.builtin.timSort.prototype.count_run = function (a) {
    /*
     # Compute the length of the run in the slice "a".
     # "A run" is the longest ascending sequence, with
     #
     #     a[0] <= a[1] <= a[2] <= ...
     #
     # or the longest descending sequence, with
     #
     #     a[0] > a[1] > a[2] > ...
     #
     # Return (run, descending) where descending is False in the former case,
     # or True in the latter.
     # For its intended use in a stable mergesort, the strictness of the defn of
     # "descending" is needed so that the caller can safely reverse a descending
     # sequence without violating stability (strict > ensures there are no equal
     # elements to get out of order).
     */
    var n;
    var p;
    var descending;
    if (a.len <= 1) {
        n = a.len;
        descending = false;
    } else {
        n = 2;
        if (this.lt(a.getitem(a.base + 1), a.getitem(a.base))) {
            descending = true;
            for (p = a.base + 2; p < a.base + a.len; p++) {
                if (this.lt(a.getitem(p), a.getitem(p - 1))) {
                    n++;
                } else {
                    break;
                }
            }
        } else {
            descending = false;
            for (p = a.base + 2; p < a.base + a.len; p++) {
                if (this.lt(a.getitem(p), a.getitem(p - 1))) {
                    break;
                } else {
                    n++;
                }
            }
        }
    }
    return {"run": new Sk.builtin.listSlice(a.list, a.base, n), "descending": descending};
};

Sk.builtin.timSort.prototype.sort = function () {
    /*
     # ____________________________________________________________
     # Entry point.
     */

    var minrun;
    var cr;
    var sorted;
    var remaining = new Sk.builtin.listSlice(this.list, 0, this.listlength);
    if (remaining.len < 2) {
        return;
    }

    // March over the array once, left to right, finding natural runs,
    // and extending short natural runs to minrun elements.
    this.merge_init();
    minrun = this.merge_compute_minrun(remaining.len);
    while (remaining.len > 0) {
        // Identify next run.
        cr = this.count_run(remaining);
        if (cr.descending) {
            cr.run.reverse();
        }
        // If short, extend to min(minrun, nremaining).
        if (cr.run.len < minrun) {
            sorted = cr.run.len;
            if (minrun < remaining.len) {
                cr.run.len = minrun;
            } else {
                cr.run.len = remaining.len;
            }
            this.binary_sort(cr.run, sorted);
        }
        // Advance remaining past this run.
        remaining.advance(cr.run.len);
        // Push run onto pending-runs stack, and maybe merge.
        this.pending.push(cr.run);
        this.merge_collapse();
    }
    Sk.asserts.assert(remaining.base == this.listlength);

    this.merge_force_collapse();
    Sk.asserts.assert(this.pending.length == 1);
    Sk.asserts.assert(this.pending[0].base === 0);
    Sk.asserts.assert(this.pending[0].len == this.listlength);
};

/*
 # Locate the proper position of key in a sorted vector; if the vector
 # contains an element equal to key, return the position immediately to the
 # left of the leftmost equal element -- or to the right of the rightmost
 # equal element if the flag "rightmost" is set.
 #
 # "hint" is an index at which to begin the search, 0 <= hint < a.len.
 # The closer hint is to the final result, the faster this runs.
 #
 # The return value is the index 0 <= k <= a.len such that
 #
 #     a[k-1] < key <= a[k]      (if rightmost is False)
 #     a[k-1] <= key < a[k]      (if rightmost is True)
 #
 # as long as the indices are in bound.  IOW, key belongs at index k;
 # or, IOW, the first k elements of a should precede key, and the last
 # n-k should follow key.
 */
Sk.builtin.timSort.prototype.gallop = function (key, a, hint, rightmost) {
    var lower;
    var self;
    var p;
    var lastofs;
    var ofs;
    var maxofs;
    var hintminofs;
    var hintminlastofs;
    var m;
    Sk.asserts.assert(0 <= hint && hint < a.len);
    self = this;
    if (rightmost) {
        lower = function (a, b) {
            return self.le(a, b);
        }; // search for the largest k for which a[k] <= key
    } else {
        lower = function (a, b) {
            return self.lt(a, b);
        }; // search for the largest k for which a[k] < key
    }
    p = a.base + hint;
    lastofs = 0;
    ofs = 1;
    if (lower(a.getitem(p), key)) {
        // a[hint] < key -- gallop right, until
        // a[hint + lastofs] < key <= a[hint + ofs]

        maxofs = a.len - hint; // a[a.len-1] is highest
        while (ofs < maxofs) {
            if (lower(a.getitem(p + ofs), key)) {
                lastofs = ofs;
                try {
                    ofs = (ofs << 1) + 1;
                } catch (err) {
                    ofs = maxofs;
                }
            } else {
                // key <= a[hint + ofs]
                break;
            }
        }
        if (ofs > maxofs) {
            ofs = maxofs;
        }
        // Translate back to offsets relative to a.
        lastofs += hint;
        ofs += hint;
    } else {
        // key <= a[hint] -- gallop left, until
        // a[hint - ofs] < key <= a[hint - lastofs]
        maxofs = hint + 1;   // a[0] is lowest
        while (ofs < maxofs) {
            if (lower(a.getitem(p - ofs), key)) {
                break;
            } else {
                // key <= a[hint - ofs]
                lastofs = ofs;
                try {
                    ofs = (ofs << 1) + 1;
                } catch (err) {
                    ofs = maxofs;
                }
            }
        }
        if (ofs > maxofs) {
            ofs = maxofs;
        }
        // Translate back to positive offsets relative to a.
        hintminofs = hint - ofs;
        hintminlastofs = hint - lastofs;
        lastofs = hintminofs;
        ofs = hintminlastofs;
    }
    Sk.asserts.assert(-1 <= lastofs < ofs <= a.len);

    // Now a[lastofs] < key <= a[ofs], so key belongs somewhere to the
    // right of lastofs but no farther right than ofs.  Do a binary
    // search, with invariant a[lastofs-1] < key <= a[ofs].

    lastofs += 1;
    while (lastofs < ofs) {
        m = lastofs + ((ofs - lastofs) >> 1);
        if (lower(a.getitem(a.base + m), key)) {
            lastofs = m + 1;   // a[m] < key
        } else {
            ofs = m;         // key <= a[m]
        }
    }
    Sk.asserts.assert(lastofs == ofs);         // so a[ofs-1] < key <= a[ofs]
    return ofs;
};

// ____________________________________________________________

Sk.builtin.timSort.prototype.merge_init = function () {
    // This controls when we get *into* galloping mode.  It's initialized
    // to MIN_GALLOP.  merge_lo and merge_hi tend to nudge it higher for
    // random data, and lower for highly structured data.
    this.min_gallop = this.MIN_GALLOP;

    // A stack of n pending runs yet to be merged.  Run #i starts at
    // address pending[i].base and extends for pending[i].len elements.
    // It's always true (so long as the indices are in bounds) that
    //
    //     pending[i].base + pending[i].len == pending[i+1].base
    //
    // so we could cut the storage for this, but it's a minor amount,
    // and keeping all the info explicit simplifies the code.
    this.pending = [];
};

// Merge the slice "a" with the slice "b" in a stable way, in-place.
// a.len <= b.len.  See listsort.txt for more info.
// a.len and b.len must be > 0, and a.base + a.len == b.base.
// Must also have that b.list[b.base] < a.list[a.base], that
// a.list[a.base+a.len-1] belongs at the end of the merge, and should have

Sk.builtin.timSort.prototype.merge_lo = function (a, b) {
    var min_gallop;
    var dest;
    var acount, bcount;
    var p;
    Sk.asserts.assert(a.len > 0 && b.len > 0 && a.base + a.len == b.base);
    min_gallop = this.min_gallop;
    dest = a.base;
    a = a.copyitems();

    // Invariant: elements in "a" are waiting to be reinserted into the list
    // at "dest".  They should be merged with the elements of "b".
    // b.base == dest + a.len.
    // We use a finally block to ensure that the elements remaining in
    // the copy "a" are reinserted back into this.list in all cases.
    try {
        this.setitem(dest, b.popleft());

        dest++;
        if (a.len == 1 || b.len === 0) {
            return;
        }

        while (true) {
            acount = 0;   // number of times A won in a row
            bcount = 0;   // number of times B won in a row

            // Do the straightforward thing until (if ever) one run
            // appears to win consistently.
            while (true) {
                if (this.lt(b.getitem(b.base), a.getitem(a.base))) {
                    this.setitem(dest, b.popleft());
                    dest++;
                    if (b.len === 0) {
                        return;
                    }
                    bcount++;
                    acount = 0;
                    if (bcount >= min_gallop) {
                        break;
                    }
                } else {
                    this.setitem(dest, a.popleft());
                    dest++;
                    if (a.len == 1) {
                        return;
                    }
                    acount++;
                    bcount = 0;
                    if (acount >= min_gallop) {
                        break;
                    }
                }
            }

            // One run is winning so consistently that galloping may
            // be a huge win.  So try that, and continue galloping until
            // (if ever) neither run appears to be winning consistently
            // anymore.
            min_gallop += 1;

            while (true) {
                min_gallop -= min_gallop > 1;
                this.min_gallop = min_gallop;
                acount = this.gallop(b.getitem(b.base), a, 0, true);
                for (p = a.base; p < a.base + acount; p++) {
                    this.setitem(dest, a.getitem(p));
                    dest++;
                }

                a.advance(acount);

                if (a.len <= 1) {
                    return;
                }

                this.setitem(dest, b.popleft());
                dest++;

                // a.len==0 is impossible now if the comparison
                // function is consistent, but we can't assume
                // that it is.
                if (b.len === 0) {
                    return;
                }

                bcount = this.gallop(a.getitem(a.base), b, 0, false);

                for (p = b.base; p < b.base + bcount; p++) {
                    this.setitem(dest, b.getitem(p));
                    dest++;
                }

                b.advance(bcount);
                if (b.len === 0) {
                    return;
                }
                this.setitem(dest, a.popleft());
                dest++;

                if (a.len == 1) {
                    return;
                }

                if (acount < this.MIN_GALLOP && bcount < this.MIN_GALLOP) {
                    break;
                }

                min_gallop++;  // penalize it for leaving galloping mode
                this.min_gallop = min_gallop;
            }
        }
    }
    finally {
        // The last element of a belongs at the end of the merge, so we copy
        // the remaining elements of b before the remaining elements of a.
        Sk.asserts.assert(a.len >= 0 && b.len >= 0);
        for (p = b.base; p < b.base + b.len; p++) {
            this.setitem(dest, b.getitem(p));
            dest++;
        }
        for (p = a.base; p < a.base + a.len; p++) {
            this.setitem(dest, a.getitem(p));
            dest++;
        }
    }
};

Sk.builtin.timSort.prototype.merge_hi = function (a, b) {
    var min_gallop;
    var dest;
    var acount, bcount, nexta, nextb;
    var k;
    var p;
    Sk.asserts.assert(a.len > 0 && b.len > 0 && a.base + a.len == b.base);
    min_gallop = this.min_gallop;
    dest = b.base + b.len;
    b = b.copyitems();

    // Invariant: elements in "a" are waiting to be reinserted into the list
    // at "dest".  They should be merged with the elements of "b".
    // b.base == dest + a.len.
    // We use a finally block to ensure that the elements remaining in
    // the copy "a" are reinserted back into this.list in all cases.
    try {
        dest--;
        this.setitem(dest, a.popright());

        if (a.len === 0 || b.len == 1) {
            return;
        }

        while (true) {
            acount = 0;   // number of times A won in a row
            bcount = 0;   // number of times B won in a row

            // Do the straightforward thing until (if ever) one run
            // appears to win consistently.
            while (true) {
                nexta = a.getitem(a.base + a.len - 1);
                nextb = b.getitem(b.base + b.len - 1);
                if (this.lt(nextb, nexta)) {
                    dest--;
                    this.setitem(dest, nexta);
                    a.len--;
                    if (a.len === 0) {
                        return;
                    }
                    acount++;
                    bcount = 0;
                    if (acount >= min_gallop) {
                        break;
                    }
                } else {
                    dest--;
                    this.setitem(dest, nextb);
                    b.len--;
                    if (b.len == 1) {
                        return;
                    }
                    bcount++;
                    acount = 0;
                    if (bcount >= min_gallop) {
                        break;
                    }
                }
            }

            // One run is winning so consistently that galloping may
            // be a huge win.  So try that, and continue galloping until
            // (if ever) neither run appears to be winning consistently
            // anymore.
            min_gallop += 1;

            while (true) {
                min_gallop -= min_gallop > 1;
                this.min_gallop = min_gallop;
                nextb = b.getitem(b.base + b.len - 1);
                k = this.gallop(nextb, a, a.len - 1, true);
                acount = a.len - k;
                for (p = a.base + a.len - 1; p > a.base + k - 1; p--) {
                    dest--;
                    this.setitem(dest, a.getitem(p));
                }
                a.len -= acount;
                if (a.len === 0) {
                    return;
                }

                dest--;
                this.setitem(dest, b.popright());
                if (b.len == 1) {
                    return;
                }

                nexta = a.getitem(a.base + a.len - 1);
                k = this.gallop(nexta, b, b.len - 1, false);
                bcount = b.len - k;
                for (p = b.base + b.len - 1; p > b.base + k - 1; p--) {
                    dest--;
                    this.setitem(dest, b.getitem(p));
                }

                b.len -= bcount;

                // b.len==0 is impossible now if the comparison
                // function is consistent, but we can't assume
                // that it is.
                if (b.len <= 1) {
                    return;
                }
                dest--;
                this.setitem(dest, a.popright());
                if (a.len === 0) {
                    return;
                }

                if (acount < this.MIN_GALLOP && bcount < this.MIN_GALLOP) {
                    break;
                }

                min_gallop++;  // penalize it for leaving galloping mode
                this.min_gallop = min_gallop;
            }
        }
    }
    finally {
        // The last element of a belongs at the end of the merge, so we copy
        // the remaining elements of b before the remaining elements of a.
        Sk.asserts.assert(a.len >= 0 && b.len >= 0);
        for (p = a.base + a.len - 1; p > a.base - 1; p--) {
            dest--;
            this.setitem(dest, a.getitem(p));
        }
        for (p = b.base + b.len - 1; p > b.base - 1; p--) {
            dest--;
            this.setitem(dest, b.getitem(p));
        }
    }
};

// Merge the two runs at stack indices i and i+1.

Sk.builtin.timSort.prototype.merge_at = function (i) {
    var a;
    var b;
    var k;
    if (i < 0) {
        i = this.pending.length + i;
    }

    a = this.pending[i];
    b = this.pending[i + 1];
    Sk.asserts.assert(a.len > 0 && b.len > 0);
    Sk.asserts.assert(a.base + a.len == b.base);

    // Record the length of the combined runs and remove the run b
    this.pending[i] = new Sk.builtin.listSlice(this.list, a.base, a.len + b.len);
    this.pending.splice(i + 1, 1);

    // Where does b start in a?  Elements in a before that can be
    // ignored (already in place).
    k = this.gallop(b.getitem(b.base), a, 0, true);
    a.advance(k);
    if (a.len === 0) {
        return;
    }

    // Where does a end in b?  Elements in b after that can be
    // ignored (already in place).
    b.len = this.gallop(a.getitem(a.base + a.len - 1), b, b.len - 1, false);
    if (b.len === 0) {
        return;
    }

    // Merge what remains of the runs.  The direction is chosen to
    // minimize the temporary storage needed.
    if (a.len <= b.len) {
        this.merge_lo(a, b);
    } else {
        this.merge_hi(a, b);
    }
};

// Examine the stack of runs waiting to be merged, merging adjacent runs
// until the stack invariants are re-established:
//
// 1. len[-3] > len[-2] + len[-1]
// 2. len[-2] > len[-1]
//
// See listsort.txt for more info.
Sk.builtin.timSort.prototype.merge_collapse = function () {
    var p = this.pending;
    while (p.length > 1) {
        if (p.length >= 3 && p[p.length - 3].len <= p[p.length - 2].len + p[p.length - 1].len) {
            if (p[p.length - 3].len < p[p.length - 1].len) {
                this.merge_at(-3);
            } else {
                this.merge_at(-2);
            }
        } else if (p[p.length - 2].len <= p[p.length - 1].len) {
            this.merge_at(-2);
        } else {
            break;
        }
    }
};

// Regardless of invariants, merge all runs on the stack until only one
// remains.  This is used at the end of the mergesort.

Sk.builtin.timSort.prototype.merge_force_collapse = function () {
    var p = this.pending;
    while (p.length > 1) {
        if (p.length >= 3 && p[p.length - 3].len < p[p.length - 1].len) {
            this.merge_at(-3);
        } else {
            this.merge_at(-2);
        }
    }
};
// Compute a good value for the minimum run length; natural runs shorter
// than this are boosted artificially via binary insertion.
//
// If n < 64, return n (it's too small to bother with fancy stuff).
// Else if n is an exact power of 2, return 32.
// Else return an int k, 32 <= k <= 64, such that n/k is close to, but
// strictly less than, an exact power of 2.
//
// See listsort.txt for more info.

Sk.builtin.timSort.prototype.merge_compute_minrun = function (n) {
    var r = 0;    // becomes 1 if any 1 bits are shifted off
    while (n >= 64) {
        r = r | n & 1;
        n >>= 1;
    }
    return n + r;
};

//ListSlice
/**
 * @constructor
 * @param {Sk.builtin.list=} list
 * @param {number=} base
 * @param {number=} len
 * @extends Sk.builtin.object
 */
Sk.builtin.listSlice = function (list, base, len) {
    this.list = list;
    this.base = base;
    this.len = len;
};

Sk.builtin.listSlice.prototype.copyitems = function () {
    //Make a copy of the slice of the original list
    var start = this.base;
    var stop = this.base + this.len;
    Sk.asserts.assert(0 <= start <= stop);
    return new Sk.builtin.listSlice(new Sk.builtin.list(this.list.v.slice(start, stop)), 0, this.len);
};

Sk.builtin.listSlice.prototype.advance = function (n) {
    this.base += n;
    this.len -= n;
    Sk.asserts.assert(this.base <= this.list.sq$length());
};

Sk.builtin.listSlice.prototype.getitem = function (item) {
    return this.list.v[item];
};

Sk.builtin.listSlice.prototype.setitem = function (item, value) {
    this.list.v[item] = value;
};

Sk.builtin.listSlice.prototype.popleft = function () {
    var result = this.list.v[this.base];
    this.base++;
    this.len--;
    return result;
};

Sk.builtin.listSlice.prototype.popright = function () {
    this.len--;
    return this.list.v[this.base + this.len];
};

Sk.builtin.listSlice.prototype.reverse = function () {
    // Reverse the slice in-place.
    var list_hi;
    var list_lo;
    var list = this.list;
    var lo = this.base;
    var hi = lo + this.len - 1;
    while (lo < hi) {
        list_hi = list.v[hi];
        list_lo = list.v[lo];
        list.v[lo] = list_hi;
        list.v[hi] = list_lo;
        lo++;
        hi--;
    }
};

Sk.exportSymbol("Sk.builtin.listSlice", Sk.builtin.listSlice);
Sk.exportSymbol("Sk.builtin.timSort", Sk.builtin.timSort);
Sk.builtin.sorted = function sorted (iterable, cmp, key, reverse) {
    var arr;
    var next;
    var iter;
    var compare_func;
    var list;
    var rev;

    if (reverse === undefined) {
        rev = false;
    } else if (reverse instanceof Sk.builtin.float_) {
        throw new Sk.builtin.TypeError("an integer is required, got float");
    } else if (reverse instanceof Sk.builtin.int_ || reverse.prototype instanceof Sk.builtin.int_) {
        rev = Sk.misceval.isTrue(reverse);
    } else {
        throw new Sk.builtin.TypeError("an integer is required");
    }

    if (key !== undefined && !(key instanceof Sk.builtin.none)) {
        if (cmp instanceof Sk.builtin.none || cmp === undefined) {
            compare_func = function (a, b) {
                return Sk.misceval.richCompareBool(a[0], b[0], "Lt") ? new Sk.builtin.int_(-1) : new Sk.builtin.int_(0);
            };
        } else {
            compare_func = function (a, b) {
                return Sk.misceval.callsimArray(cmp, [a[0], b[0]]);
            };
        }
        iter = iterable.tp$iter();
        next = iter.tp$iternext();
        arr = [];
        while (next !== undefined) {
            arr.push([Sk.misceval.callsimArray(key, [next]), next]);
            next = iter.tp$iternext();
        }
        list = new Sk.builtin.list(arr);
    } else {
        if (!(cmp instanceof Sk.builtin.none) && cmp !== undefined) {
            compare_func = cmp;
        }
        list = new Sk.builtin.list(iterable);
    }

    if (compare_func !== undefined) {
        list.list_sort_(list, compare_func);
    } else {
        list.list_sort_(list);
    }

    if (rev) {
        list.list_reverse_(list);
    }

    if (key !== undefined && !(key instanceof Sk.builtin.none)) {
        iter = list.tp$iter();
        next = iter.tp$iternext();
        arr = [];
        while (next !== undefined) {
            arr.push(next[1]);
            next = iter.tp$iternext();
        }
        list = new Sk.builtin.list(arr);
    }

    return list;
};

/* NOTE: See constants used for kwargs in constants.js */
Sk.builtin.type_is_subtype_base_chain = function type_is_subtype_base_chain(a, b) {
    do {
        if (a == b) {
            return true;
        }
        a = a.tp$base;
    } while (a !== undefined);

    return (b == Sk.builtin.object);
};

Sk.builtin.PyType_IsSubtype = function PyType_IsSubtype(a, b) {
    var mro = a.tp$mro;
    if (mro) {
        /* Deal with multiple inheritance without recursion
           by walking the MRO tuple */
        Sk.asserts.assert(mro instanceof Sk.builtin.tuple);
        for (var i = 0; i < mro.v.length; i++) {
            if (mro.v[i] == b) {
                return true;
            }
        }
        return false;
    } else {
        /* a is not completely initilized yet; follow tp_base */
        return Sk.builtin.type_is_subtype_base_chain(a, b);
    }
};

/**
 * @constructor
 * Sk.builtin.super_
 */
Sk.builtin.super_ = function super_ (a_type, self) {
    Sk.builtin.pyCheckArgsLen("super", arguments.length, 1);

    if (!(this instanceof Sk.builtin.super_)) {
        return new Sk.builtin.super_(a_type, self);
    }

    Sk.misceval.callsimArray(Sk.builtin.super_.__init__, [this, a_type, self]);

    return this;
};

Sk.builtin.super_.__init__ = new Sk.builtin.func(function(self, a_type, other_self) {
    self.obj = other_self;
    self.type = a_type;

    if (!a_type.tp$mro) {
        throw new Sk.builtin.TypeError("must be type, not " + a_type.ob$type.tp$name);
    }

    self.obj_type = a_type.tp$mro.v[1];

    if (!other_self) {
        throw new Sk.builtin.NotImplementedError("unbound super not supported because " +
                "skulpts implementation of type descriptors aren't brilliant yet, see this " +
                "question for more information https://stackoverflow.com/a/30190341/117242");
    }

    if (!Sk.builtin.PyType_IsSubtype(self.obj.ob$type, self.type)) {
        throw new Sk.builtin.TypeError("super(type, obj): obj must be an instance of subtype of type");
    }

    return Sk.builtin.none.none$;
});

Sk.abstr.setUpInheritance("super", Sk.builtin.super_, Sk.builtin.object);

/**
 * Get an attribute
 * @param {Object} pyName Python name of the attribute
 * @param {boolean=} canSuspend Can we return a suspension?
 * @return {undefined}
 */
Sk.builtin.super_.prototype.tp$getattr = function (pyName, canSuspend) {
    var res;
    var f;
    var descr;
    var tp;
    var dict;
    var jsName = pyName.$jsstr();

    tp = this.obj_type;
    Sk.asserts.assert(tp !== undefined, "object has no ob$type!");

    dict = this.obj["$d"] || this.obj.constructor["$d"];

    // todo; assert? force?
    if (dict) {
        if (dict.mp$lookup) {
            res = dict.mp$lookup(pyName);
        } else if (dict.mp$subscript) {
            res = Sk.builtin._tryGetSubscript(dict, pyName);
        } else if (typeof dict === "object") {
            // todo; definitely the wrong place for this. other custom tp$getattr won't work on object -- bnm -- implemented custom __getattr__ in abstract.js
            res = dict[jsName];
        }
        if (res !== undefined) {
            return res;
        }
    }

    descr = Sk.builtin.type.typeLookup(tp, pyName);

    // otherwise, look in the type for a descr
    if (descr !== undefined && descr !== null) {
        f = descr.tp$descr_get;
        // todo - data descriptors (ie those with tp$descr_set too) get a different lookup priority

        if (f) {
            // non-data descriptor
            return f.call(descr, this.obj, this.obj_type, canSuspend);
        }
    }

    if (descr !== undefined) {
        return descr;
    }

    return undefined;
};

Sk.builtin.super_.prototype["$r"] = function super_repr(self) {
    if (this.obj) {
        return new Sk.builtin.str("<super: <class '" + (this.type ? this.type.tp$name : "NULL") + "'>, <" + this.obj.tp$name + " object>>");
    }

    return new Sk.builtin.str("<super: <class '" + (this.type ? this.type.tp$name : "NULL") + "'>, NULL>");
};

Sk.builtin.super_.__doc__ = new Sk.builtin.str(
    "super(type, obj) -> bound super object; requires isinstance(obj, type)\n" +
    "super(type) -> unbound super object\n" +
    "super(type, type2) -> bound super object; requires issubclass(type2, type)\n" +
    "Typical use to call a cooperative superclass method:\n" +
    "class C(B):\n" +
    "    def meth(self, arg):\n" +
    "        super(C, self).meth(arg)");
// Note: the hacky names on int, long, float have to correspond with the
// uniquization that the compiler does for words that are reserved in
// Javascript. This is a bit hokey.
Sk.builtins = {
    "range"     : new Sk.builtin.func(Sk.builtin.range),
    "round"     : new Sk.builtin.func(Sk.builtin.round),
    "len"       : new Sk.builtin.func(Sk.builtin.len),
    "min"       : new Sk.builtin.func(Sk.builtin.min),
    "max"       : new Sk.builtin.func(Sk.builtin.max),
    "sum"       : new Sk.builtin.func(Sk.builtin.sum),
    "zip"       : new Sk.builtin.func(Sk.builtin.zip),
    "abs"       : new Sk.builtin.func(Sk.builtin.abs),
    "fabs"      : new Sk.builtin.func(Sk.builtin.fabs),
    "ord"       : new Sk.builtin.func(Sk.builtin.ord),
    "chr"       : new Sk.builtin.func(Sk.builtin.chr),
    "hex"       : new Sk.builtin.func(Sk.builtin.hex),
    "oct"       : new Sk.builtin.func(Sk.builtin.oct),
    "bin"       : new Sk.builtin.func(Sk.builtin.bin),
    "dir"       : new Sk.builtin.func(Sk.builtin.dir),
    "repr"      : new Sk.builtin.func(Sk.builtin.repr),
    "open"      : new Sk.builtin.func(Sk.builtin.open),
    "isinstance": new Sk.builtin.func(Sk.builtin.isinstance),
    "hash"      : new Sk.builtin.func(Sk.builtin.hash),
    "getattr"   : new Sk.builtin.func(Sk.builtin.getattr),
    "hasattr"   : new Sk.builtin.func(Sk.builtin.hasattr),
    "id"        : new Sk.builtin.func(Sk.builtin.id),

    "map"       : new Sk.builtin.func(Sk.builtin.map),
    "filter"    : new Sk.builtin.func(Sk.builtin.filter),
    "reduce"    : new Sk.builtin.func(Sk.builtin.reduce),
    "sorted"    : new Sk.builtin.func(Sk.builtin.sorted),
    "any"       : new Sk.builtin.func(Sk.builtin.any),
    "all"       : new Sk.builtin.func(Sk.builtin.all),

    "AttributeError"     : Sk.builtin.AttributeError,
    "ValueError"         : Sk.builtin.ValueError,
    "Exception"          : Sk.builtin.Exception,
    "ZeroDivisionError"  : Sk.builtin.ZeroDivisionError,
    "AssertionError"     : Sk.builtin.AssertionError,
    "ImportError"        : Sk.builtin.ImportError,
    "IndentationError"   : Sk.builtin.IndentationError,
    "IndexError"         : Sk.builtin.IndexError,
    "KeyError"           : Sk.builtin.KeyError,
    "TypeError"          : Sk.builtin.TypeError,
    "NameError"          : Sk.builtin.NameError,
    "IOError"            : Sk.builtin.IOError,
    "NotImplementedError": Sk.builtin.NotImplementedError,
    "StandardError"      : Sk.builtin.StandardError,
    "SystemExit"         : Sk.builtin.SystemExit,
    "OverflowError"      : Sk.builtin.OverflowError,
    "OperationError"     : Sk.builtin.OperationError,
    "NegativePowerError" : Sk.builtin.NegativePowerError,
    "RuntimeError"       : Sk.builtin.RuntimeError,
    "StopIteration"      : Sk.builtin.StopIteration,

    "float_$rw$": Sk.builtin.float_,
    "int_$rw$"  : Sk.builtin.int_,
    "bool"      : Sk.builtin.bool,
    "complex"   : Sk.builtin.complex,
    "enumerate" : Sk.builtin.enumerate,
    "dict"      : Sk.builtin.dict,
    "file"      : Sk.builtin.file,
    "function"  : Sk.builtin.func,
    "generator" : Sk.builtin.generator,
    "list"      : Sk.builtin.list,
    "long_$rw$" : Sk.builtin.lng,
    "method"    : Sk.builtin.method,
    "object"    : Sk.builtin.object,
    "slice"     : Sk.builtin.slice,
    "str"       : Sk.builtin.str,
    "set"       : Sk.builtin.set,
    "tuple"     : Sk.builtin.tuple,
    "type"      : Sk.builtin.type,

    "input"     : new Sk.builtin.func(Sk.builtin.input),
    "raw_input" : new Sk.builtin.func(Sk.builtin.raw_input),
    "setattr"   : new Sk.builtin.func(Sk.builtin.setattr),
    /*'read': Sk.builtin.read,*/
    "jseval"    : Sk.builtin.jseval,
    "jsmillis"  : Sk.builtin.jsmillis,
    "quit"      : new Sk.builtin.func(Sk.builtin.quit),
    "exit"      : new Sk.builtin.func(Sk.builtin.quit),
    "print"     : Sk.builtin.print,
    "divmod"    : new Sk.builtin.func(Sk.builtin.divmod),
    "format"    : new Sk.builtin.func(Sk.builtin.format),
    "globals"   : new Sk.builtin.func(Sk.builtin.globals),
    "issubclass": new Sk.builtin.func(Sk.builtin.issubclass),
    "iter"      : Sk.builtin.iter,

    // Functions below are not implemented
    "bytearray" : Sk.builtin.bytearray,
    "callable"  : Sk.builtin.callable,
    "delattr"   : Sk.builtin.delattr,
    "eval_$rn$" : Sk.builtin.eval_,
    "execfile"  : Sk.builtin.execfile,
    "frozenset" : Sk.builtin.frozenset,
    "help"      : Sk.builtin.help,
    "locals"    : Sk.builtin.locals,
    "memoryview": Sk.builtin.memoryview,
    "next"      : Sk.builtin.next_,
    "pow"       : Sk.builtin.pow,
    "reload"    : Sk.builtin.reload,
    "reversed"  : Sk.builtin.reversed,
    "super"     : Sk.builtin.super_,
    "unichr"    : Sk.builtin.unichr,
    "vars"      : Sk.builtin.vars,
    "xrange"    : Sk.builtin.xrange,
    "apply_$rn$": Sk.builtin.apply_,
    "buffer"    : Sk.builtin.buffer,
    "coerce"    : Sk.builtin.coerce,
    "intern"    : Sk.builtin.intern
};
Sk.exportSymbol("Sk.builtins", Sk.builtins);
Sk.builtin.str.$emptystr = new Sk.builtin.str("");

/**
 * Python bool True constant.
 * @type {Sk.builtin.bool}
 * @memberOf Sk.builtin.bool
 */
Sk.builtin.bool.true$ = /** @type {Sk.builtin.bool} */ (Object.create(Sk.builtin.bool.prototype, {v: {value: 1, enumerable: true}}));

/**
 * Python bool False constant.
 * @type {Sk.builtin.bool}
 * @memberOf Sk.builtin.bool
 */
Sk.builtin.bool.false$ = /** @type {Sk.builtin.bool} */ (Object.create(Sk.builtin.bool.prototype, {v: {value: 0, enumerable: true}}));

/* Constants used for kwargs */

// Sk.builtin.int_
Sk.builtin.int_.co_varnames = [ "number", "base" ];
Sk.builtin.int_.$defaults = [ Sk.builtin.none.none$ ];

// Sk.builtin.lng
Sk.builtin.lng.co_varnames = [ "number", "base" ];
Sk.builtin.lng.$defaults = [ Sk.builtin.none.none$ ];

// Sk.builtin.sorted
Sk.builtin.sorted.co_varnames = ["list", "cmp", "key", "reverse"];
Sk.builtin.sorted.$defaults = [Sk.builtin.none.none$, Sk.builtin.none.none$, Sk.builtin.bool.false$];

// Sk.builtin.dict.fromkeys
Sk.builtin.dict.$fromkeys.co_name = new Sk.builtin.str("fromkeys");
Sk.builtin.dict.prototype["fromkeys"] = new Sk.builtin.func(Sk.builtin.dict.$fromkeys);

// String constants
Sk.builtin.str.$empty = new Sk.builtin.str("");

Sk.builtin.str.$default_factory = new Sk.builtin.str("default_factory");
Sk.builtin.str.$imag = new Sk.builtin.str("imag");
Sk.builtin.str.$real = new Sk.builtin.str("real");

Sk.builtin.str.$abs = new Sk.builtin.str("__abs__");
Sk.builtin.str.$call = new Sk.builtin.str("__call__");
Sk.builtin.str.$cmp = new Sk.builtin.str("__cmp__");
Sk.builtin.str.$complex = new Sk.builtin.str("__complex__");
Sk.builtin.str.$contains = new Sk.builtin.str("__contains__");
Sk.builtin.str.$copy = new Sk.builtin.str("__copy__");
Sk.builtin.str.$dict = new Sk.builtin.str("__dict__");
Sk.builtin.str.$dir = new Sk.builtin.str("__dir__");
Sk.builtin.str.$enter = new Sk.builtin.str("__enter__");
Sk.builtin.str.$eq = new Sk.builtin.str("__eq__");
Sk.builtin.str.$exit = new Sk.builtin.str("__exit__");
Sk.builtin.str.$index = new Sk.builtin.str("__index__");
Sk.builtin.str.$init = new Sk.builtin.str("__init__");
Sk.builtin.str.$int_ = new Sk.builtin.str("__int__");
Sk.builtin.str.$iter = new Sk.builtin.str("__iter__");
Sk.builtin.str.$float_ = new Sk.builtin.str("__float__");
Sk.builtin.str.$format = new Sk.builtin.str("__format__");
Sk.builtin.str.$ge = new Sk.builtin.str("__ge__");
Sk.builtin.str.$getattr = new Sk.builtin.str("__getattr__");
Sk.builtin.str.$getattribute = new Sk.builtin.str("__getattribute__");
Sk.builtin.str.$getitem = new Sk.builtin.str("__getitem__");
Sk.builtin.str.$gt = new Sk.builtin.str("__gt__");
Sk.builtin.str.$le = new Sk.builtin.str("__le__");
Sk.builtin.str.$len = new Sk.builtin.str("__len__");
Sk.builtin.str.$lt = new Sk.builtin.str("__lt__");
Sk.builtin.str.$name = new Sk.builtin.str("__name__");
Sk.builtin.str.$ne = new Sk.builtin.str("__ne__");
Sk.builtin.str.$new = new Sk.builtin.str("__new__");
Sk.builtin.str.$next2 = new Sk.builtin.str("next");
Sk.builtin.str.$next3 = new Sk.builtin.str("__next__");
Sk.builtin.str.$path = new Sk.builtin.str("__path__");
Sk.builtin.str.$repr = new Sk.builtin.str("__repr__");
Sk.builtin.str.$reversed = new Sk.builtin.str("__reversed__");
Sk.builtin.str.$round = new Sk.builtin.str("__round__");
Sk.builtin.str.$setattr = new Sk.builtin.str("__setattr__");
Sk.builtin.str.$setitem = new Sk.builtin.str("__setitem__");
Sk.builtin.str.$str = new Sk.builtin.str("__str__");
Sk.builtin.str.$trunc = new Sk.builtin.str("__trunc__");
Sk.builtin.str.$write = new Sk.builtin.str("write");

Sk.misceval.op2method_ = {
    "Eq"   : Sk.builtin.str.$eq,
    "NotEq": Sk.builtin.str.$ne,
    "Gt"   : Sk.builtin.str.$gt,
    "GtE"  : Sk.builtin.str.$ge,
    "Lt"   : Sk.builtin.str.$lt,
    "LtE"  : Sk.builtin.str.$le
};

var builtinNames = [
    "int_",
    "lng",
    "sorted",
    "range",
    "round",
    "len",
    "min",
    "max",
    "sum",
    "zip",
    "abs",
    "fabs",
    "ord",
    "chr",
    "hex",
    "oct",
    "bin",
    "dir",
    "repr",
    "open",
    "isinstance",
    "hash",
    "getattr",
    "hasattr",
    "id",
    "map",
    "filter",
    "reduce",
    "sorted",
    "any",
    "all",
    "input",
    "raw_input",
    "setattr",
    "quit",
    "quit",
    "divmod",
    "format",
    "globals",
    "issubclass"
];

for (var i = 0; i < builtinNames.length; i++) {
    Sk.builtin[builtinNames[i]].co_name = new Sk.builtin.str(builtinNames[i]);
}
Sk.internalPy={"files": {"src/staticmethod.py": "class staticmethod(object):\n    \"Emulate PyStaticMethod_Type() in Objects/funcobject.c\"\n\n    def __init__(self, f):\n        self.f = f\n\n    def __get__(self, obj, objtype=None):\n        return self.f\n", "src/property.py": "class property(object):\n    \"Emulate PyProperty_Type() in Objects/descrobject.c\"\n\n    def __init__(self, fget=None, fset=None, fdel=None, doc=None):\n        self.fget = fget\n        self.fset = fset\n        self.fdel = fdel\n        if doc is None and fget is not None:\n            if hasattr(fget, '__doc__'):\n                doc = fget.__doc__\n            else:\n                doc = None\n        self.__doc__ = doc\n\n    def __get__(self, obj, objtype=None):\n        if obj is None:\n            return self\n        if self.fget is None:\n            raise AttributeError(\"unreadable attribute\")\n        return self.fget(obj)\n\n    def __set__(self, obj, value):\n        if self.fset is None:\n            raise AttributeError(\"can't set attribute\")\n        self.fset(obj, value)\n\n    def __delete__(self, obj):\n        if self.fdel is None:\n            raise AttributeError(\"can't delete attribute\")\n        self.fdel(obj)\n\n    def getter(self, fget):\n        return type(self)(fget, self.fset, self.fdel, self.__doc__)\n\n    def setter(self, fset):\n        return type(self)(self.fget, fset, self.fdel, self.__doc__)\n\n    def deleter(self, fdel):\n        return type(self)(self.fget, self.fset, fdel, self.__doc__)\n", "src/classmethod.py": "class classmethod(object):\n    \"Emulate PyClassMethod_Type() in Objects/funcobject.c\"\n\n    def __init__(self, f):\n        self.f = f\n\n    def __get__(self, obj, klass=None):\n        if klass is None:\n            klass = type(obj)\n        def newfunc(*args):\n            return self.f(klass, *args)\n        return newfunc\n"}};
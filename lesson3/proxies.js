
/*
Get trap
    The get trap is used to "intercept" calls to properties:
*/

const richard = { status: 'looking for work' };

/*
    A Pass Through Proxy
*/
var agent_0 = new Proxy(richard, {});
console.log(agent_0.status, "\n"); // returns 'looking for work'


/* 
    Get trap
*/
const handler = {
    get(target, propName) {
        console.log(target);
        // the `richard` object, not `handler` and not `agent`
        console.log(propName);
        // the name of the property the proxy (`agent` in this case) is checking
    }
};
const agent = new Proxy(richard, handler);
agent.status;
// logs out the richard object (not the agent object!) and the name of the property being accessed (`status`)
console.log(agent.status);
console.log("");


/* 
    Accessing the Target object from inside the proxy
*/
const handler_2 = {
    get(target, propName) {
        console.log(target);
        console.log(propName);
        return target[propName];
    }
};
const agent_2 = new Proxy(richard, handler_2);
agent_2.status;
// (1)logs the richard object, 
// (2)logs the property being accessed, 
// (3)returns the text in richard.status
console.log(agent_2.status, "\n");


/*
    Having the proxy return info, directly
*/
const handler_3 = {
    get(target, propName) {
        return `He's following many leads, so you should offer a contract as soon as possible!`;
    }
};
const agent_3 = new Proxy(richard, handler_3);
agent_3.status;
// returns the text `He's following many leads, so you should offer a contract as soon as possible!`
console.log(agent_3.status, "\n");


/*
    The set trap is used for intercepting code that will change a property.
*/
const handler_4 = {
    set(target, propName, value) {
        // if the pay is being set, take 15% as commission
        if (propName === 'payRate') {
            value = value * 0.85;
        }
        target[propName] = value;
    }
};
const agent_4 = new Proxy(richard, handler_4);
agent_4.payRate = 1000; // set the actor's pay to $1,000
agent_4.payRate; // $850 the actor's actual pay

console.log(agent_4.payRate);


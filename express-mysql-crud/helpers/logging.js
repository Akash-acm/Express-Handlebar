const EventEmitter=require('events');

class Logger extends EventEmitter{
    constructor(){
        super();
    }

}

module.exports=Logger;
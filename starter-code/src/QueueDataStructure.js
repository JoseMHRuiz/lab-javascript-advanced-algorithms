
class QueueDataStructure {
    constructor() {
        this.queueControl = [];
        this.MAX_SIZE = 10;
    }

    isEmpty = function () {
        // if (this.stackControl.length === 0) return true 
        return this.queueControl.length === 0
    }
    canEnqueue = function () {
        return this.queueControl.length === this.MAX_SIZE ? false : true
        // if (this.queueControl.length === this.MAX_SIZE) {
        //     return false
        // } else {
        //     return true
        // }
    }
    enqueue = function (e) {
        // return this.canEnqueue() ? this.queueControl.push(e) : 'Stack Overflow'
        if (this.canEnqueue()) {
            this.queueControl.unshift(e)
        } else {
            return 'Queue Overflow'
        }
        return this.queueControl

    }
    dequeue = function () {
        return this.queueControl.length === 0 ? 'Queue Underflow' : this.queueControl.pop()
    }

}
export default class Tool {
    constructor(canvas, socket, sessionId) {
        this.canvas = canvas
        this.socket = socket
        this.sessionId = sessionId
        this.ctx = canvas.getContext('2d')
        this.destroyEvent()
    }

    set fillColor(color) {
        this.ctx.fillStyle = color
    }

    set strokeColor(color) {
        this.ctx.strokeStyle = color
    }

    set lineWidth (width) {
        this.ctx.lineWidth = width
    }

    destroyEvent () {
        this.canvas.onmousemove = null
        this.canvas.onmouseup = null
        this.canvas.onmousedown = null
    }
}
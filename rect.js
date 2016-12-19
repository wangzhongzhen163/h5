var Circle = function (data) {
    this.draw(data);
}
Circle.prototype = {
    constructor: Circle,
    draw: function (data) {
        this.ctx = data.ctx;
        this.radius = data.radius;
        this.x = data.x;
        this.y = data.y;
        this.ringWidth = data.ringWidth;
        this.lineDash = data.lineDath;
        this.ringStyle = data.ringStyle;
        this.circleStyle = data.circleStyle;
        this.hasRing = data.hasRing;
        this.text = data.text;
        this.font = data.font;
        this.textColor = data.textColor;
    },
    fills: function () {
        var ctx = this.ctx;
        ctx.beginPath();
        ctx.save();
        if (this.ringWidth) {
            ctx.lineWidth = this.ringWidth;
        }
        if (this.circleStyle) {
            ctx.fillStyle = this.circleStyle;
        }
        if (this.ringStyle) {
            ctx.strokeStyle = this.ringStyle;
        }
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        if (this.hasRing) {
            ctx.arc(this.x, this.y, this.radius + this.ringWidth / 2, 0, 2 * Math.PI);
            ctx.stroke();
        }
        if (this.text) {
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = this.font;
            ctx.fillStyle = this.textColor;
            ctx.fillText(this.text, this.x, this.y);
        }
        ctx.restore();
    },
    strokes: function () {
        var ctx = this.ctx;
        ctx.beginPath();
        ctx.save();
        if (this.lineDash) {
            ctx.setLineDash([this.lineDash]);
        };
        if (this.ringWidth) {
            ctx.lineWidth = this.ringWidth;
        };
        if (this.ringStyle) {
            ctx.strokeStyle = this.ringStyle;
        }
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.restore();
    },
    renders: function (angle, radius) {
        this.x = x0 + radius * Math.cos(radian(angle));
        this.y = y0 + radius * Math.sin(radian(angle));
        this.fills();
    }
}
(function (window, undefined) {
    'use strict';
    
    var utils = window.utils,
        Math = window.Math;
    
    function Ball(radius, color) {
        
        radius = radius === undefined ? 40 : radius;
        color = color === undefined ? '#ff0000' : color;
        
        this.x = 0;
        this.y = 0;
        this.radius = radius;
        this.rotation = 0;
        this.scaleX = 1;
        this.scaleY = 1;
        this.color = utils.parseColor(color);
        this.lineWidth = 1;
    }    
    
    Ball.prototype.draw = function (context) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.rotation);
        context.scale(this.scaleX, this.scaleY);
        context.lineWidth = this.lineWidth;
        context.fillStyle = this.color;
        context.beginPath();
        // x, y, radius, start_angle, end_angle, anti-clockwise
        context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
        context.closePath();
        context.fill();
        
        if (this.lineWidth > 0) {
            context.stroke();
        }
        context.restore();
    };
    
    window.Ball = Ball;
})(this);

var delta = -60;
var width = 101;
var height= 80;
// 这是我们的玩家要躲避的敌人
var Enemy = function() {
    // 要应用到每个敌人的实例的变量写在这里
    // 我们已经提供了一个来帮助你实现更多
    this.x = 0;
    this.y = -delta
    this.speed = 200;
    // 敌人的图片，用一个我们提供的工具函数来轻松的加载文件
    this.sprite = 'images/enemy-bug.png';
};

// 此为游戏必须的函数，用来更新敌人的位置
// 参数: dt ，表示时间间隙
Enemy.prototype.update = function(dt) {
    // 你应该给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上
    // 都是以同样的速度运行的
    if (this.x > 4 * width) {
        this.x = 0;
    } else {
        this.x = this.x + this.speed * dt;
    }
};

// 此为游戏必须的函数，用来在屏幕上画出敌人，
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Enemy.prototype.init = function () {
    this.x = -101;
    this.y = height - delta;
    this.speed = Math.floor((Math.random() * 100) + 100);
};
// 现在实现你自己的玩家类
var Player = function () {
    this.x =2*width;
    this.y =4*height-delta;
    this.sprite = 'images/char-cat-girl.png';
}
// 这个类需要一个 update() 函数，更新数据
Player.prototype.update = function () {
    if (this.x > 4 * width) {
        this.x = 4 * width;
    }
    if (this.x < 0 * width) {
        this.x = 0;
    }
    if (this.y > 5 * height) {
        this.y = 4 * height - delta;S
    }
    if (this.y < 0 * height - delta) {
        this.y = 0;
    }
};
//render() 函数，渲染画布
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//handleInput()函数
Player.prototype.handleInput = function (direction) {
    switch (direction) {
        case 'left':
            this.x = this.x - width;
            break;
        case 'right':
            this.x = this.x + width;
            break;
        case 'up':
            this.y = this.y - height;
            break;
        case 'down':
            this.y = this.y + height;
            break;
    }
};

Player.prototype.init = function () {
    this.x = 2 * width;
    this.y = 4 * height - delta;
}
// 现在实例化你的所有对象
// 把所有敌人的对象都放进一个叫 allEnemies 的数组里面
// 把玩家对象放进一个叫 player 的变量里面
var allEnemies = [
    new Enemy(0),
    new Enemy(1),
    new Enemy(2),
    new Enemy(3),
    new Enemy(4)
];
var player = new Player();

// 这段代码监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Player.handleInput()
// 方法里面。你不需要再更改这段代码了。
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

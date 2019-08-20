let Hero = function (image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getCreateHero = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px;left: ' + this.left + 'px;position: absolute;"/>';
    };
    this.moveRight = function () {
        this.left += 20;
        console.log("ok: " + this.left);
    };
    this.moveLeft = function () {
        this.left -= 20;
        console.log("ok: " + this.left);
    };
};
let hero = new Hero("chick_egg.jpg", 20, 20, 200);
let rightOn = true;

function start() {
    if (hero.left < window.innerWidth - hero.size && rightOn) {
        hero.moveRight();
    } else {
        rightOn = false;
        if (!rightOn) {
            hero.moveLeft();
            if (hero.left == 0) {
                rightOn = true;
            }
        }
    }

    document.getElementById("picture").innerHTML = hero.getCreateHero();
    //document.getElementById("picture").innerHTML = hero.getCreateHero();
    setTimeout(start, 100);
}

start();
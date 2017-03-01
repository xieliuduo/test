function FishWeb(type){
    this.x = 0;
    this.y = 0;
    this.type = type;
}
FishWeb.prototype.draw = function (gd) {
    gd.save();
    gd.translate(this.x,this.y);
    switch (this.type){
        case 5:
            gd.drawImage(JSON['web'],
                22,22,200,200,
                -200/2,-200/2,200,200
            );
            gd.restore();
            break;
    }
};

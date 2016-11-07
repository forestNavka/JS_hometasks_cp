var Auto = (function () {
    function Auto(speed, speedUnit, isEngineOn, maxSpeed) {
        if (maxSpeed) this.maxSpeed = maxSpeed;
        this.speed = speed;
        this.speedUnit = speedUnit;
        this.isEngineOn = isEngineOn;
    };
    Object.assign(Auto.prototype,
        {
            maxSpeed: 200,

            getSpeed: function () {
                return this.speed;
            },
            setSpeed: function (value) {
                this.speed = value;
            },
            turnEngineOn: function () {
                this.isEngineOn = true;
            },
            turnEngineOff: function () {
                this.isEngineOn = false;
            },
            pressKlaxon: function () {
                console.log("Beep-beep!");
            }
        });

    Auto.getRequiredLicenseCategory = function () {
        return "Some category";
    };

    return Auto;
})();

var Cabriolet = (function (Parent) {
    function Cabriolet(speed, speedUnit, isEngineOn, maxSpeed, roofCollapsed) {
        Parent.call(this, speed, speedUnit, isEngineOn, maxSpeed);
        this.roofCollapsed = roofCollapsed;
    }

    var Buffer = function () { };
    Buffer.prototype = Parent.prototype;

    Cabriolet.prototype = new Buffer();
    Cabriolet.constructor = Cabriolet;

    Object.assign(Cabriolet.prototype, {
        collapseRoof: function () {
            this.roofCollapsed = true;
        },
        raiseRoof: function () {
            this.roofCollapsed = false;
        },
        setSpeed: function (value) {
            this.speed = 1.1 * value;
        }
    });

    return Cabriolet;
})(Auto);

//ES6
class Auto {
    constructor(speed, speedUnit, isEngineOn, maxSpeed){
        if (maxSpeed) this.maxSpeed = maxSpeed;
        this.speed = speed;
        this.speedUnit = speedUnit;
        this.isEngineOn = isEngineOn;
    }
    getSpeed () {
        return this.speed;
    }
    setSpeed(value) {
        this.speed = value;
    }
    turnEngineOn() {
         this.isEngineOn = true;
    }
    turnEngineOff() {
         this.isEngineOn = false;
    }
     pressKlaxon() {
         console.log("Beep-beep!");
    }
    static getRequiredLicenseCategory () {
        return "Some category";
    }
}

class Cabriolet extends Auto{
    constructor(speed, speedUnit, isEngineOn, maxSpeed, roofCollapsed){
        super(speed, speedUnit, isEngineOn, maxSpeed);
        this.roofCollapsed = roofCollapsed;
    }
    collapseRoof() {
        this.roofCollapsed = true;
    }
    raiseRoof() {
        this.roofCollapsed = false;
    }
    setSpeed (value) {
         this.speed = 1.1 * value;
    }
}

let auto = new Auto(100, "km/h", false);
let cab = new Cabriolet(160, "km/h", true, 250, true);
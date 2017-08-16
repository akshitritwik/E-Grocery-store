  @param {Object} lat
  @param {Object} lng
  @param {Object} alt
  @param {Object} acc
  @param {Object} head
  @param {Object} vel
  @param {Object} altacc
  @constructor

  var coordinates=function(lat,lng,alt,acc,head,vel,alt,altacc){

  this.latitude=lat;
  this.longitude=lng;
  this.accuracy=acc;
  this.altitude=(alt!==undefined?alt:null);
  this.heading = (head !== undefined ? head : null);
   this.speed = (vel !== undefined ? vel : null);

    if (this.speed === 0 || this.speed === null) {
        this.heading = NaN;
    }
    this.altitudeAccuracy = (altacc !== undefined) ? altacc : null;

  };
  module.exports = Coordinates;
const Traveller = require('./Traveller')
const Location = require('./Location')
const Trip = require('./Trip')


Traveller.belongsToMany(Location, {
  through:{
    model: Trip, 
    unique: false
  },
  as: 'planned_trips'
})

Location.belongsToMany(Traveller, {
  through:{
    model: Trip, 
    unique: false,
  },
  as: 'Location_travellers'
})
Location.hasMany(Trip, {
  foreignKey: 'location_id',
  onDelete: 'CASCADE'
})

Trip.belongsTo(Location,{
  foreignKey:'location_id'
})
Trip.belongsTo(Traveller,{
  foreignKey:'traveller_id'
})

module.exports = {Traveller,  Location, Trip}

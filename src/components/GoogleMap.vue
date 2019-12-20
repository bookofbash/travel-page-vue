<template>
  <div>

    <div id="map">
        <gmap-map class="map"
        :center="center"
        :zoom="12"
        style="width:290px;  
                height: 238px; 
                margin-left: 40px; 
                margin-top: 16px;
                border-radius: 25px;"
        >
        <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            @click="center=m.position"
        ></gmap-marker>
        </gmap-map>
    </div>
    <div class="nearby">
      <div class="nearby-text"><p>More Than Just Hotels</p></div>
      <div class="nearby-rooms">
        <div class="room">
          <div class="room-thumbnail">
            <img src="https://source.unsplash.com/50x60/?bedroom, ocean">
          </div>
          <div class="room-info">
            <p>Sugar Loft Apartments</p>
            <p class="location">Bali, Canggu</p>
            <div class="room-rating">4.98</div>
          </div>
        </div>
        <div class="room">
                    <div class="room-thumbnail">
            <img src="https://source.unsplash.com/50x60/?living, tropical">
          </div>
          <div class="room-info">
            <p>Grande Canggu Apartments</p>
            <p class="location">Bali, Canggu</p>
            <div class="room-rating">4.98</div>
          </div>
        </div>
        <div class="room">
                    <div class="room-thumbnail">
            <img src="https://source.unsplash.com/50x60/?bedroom, tropical">
          </div>
          <div class="room-info">
            <p>Main Street Apartments</p>
            <p class="location">Bali, Canggu</p>
            <div class="room-rating">4.98</div>
          </div>
        </div>
        <div class="room">
                    <div class="room-thumbnail">
            <img src="https://source.unsplash.com/50x60/?sleep, ocean">
          </div>
          <div class="room-info">
            <p>Final Fantasy Apartments</p>
            <p class="location">Bali, Canggu</p>
            <div class="room-rating">4.98</div>
          </div>
        </div>
        <div class="room">
                    <div class="room-thumbnail">
            <img src="https://source.unsplash.com/50x60/?lunch, ocean">
          </div>
          <div class="room-info">
            <p>Four Score Apartments</p>
            <p class="location">Bali, Canggu</p>
            <div class="room-rating">4.98</div>
          </div>
        </div>
        <div class="room">
                    <div class="room-thumbnail">
            <img src="https://source.unsplash.com/50x60/?kitchen, ocean">
          </div>
          <div class="room-info">
            <p>Vue Loft Apartments</p>
            <p class="location">Bali, Canggu</p>
            <div class="room-rating">4.98</div>
          </div>
        </div>
        <div class="room">
                    <div class="room-thumbnail">
            <img src="https://source.unsplash.com/50x60/?bedroom, forest">
          </div>
          <div class="room-info">
            <p>Java Script Apartments</p>
            <p class="location">Bali, Canggu</p>
            <div class="room-rating">4.98</div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 5.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>
<style scoped>
  .nearby{
    width:270px;
    margin-left: 60px;
  }
  .nearby-rooms {
    
   
  }
  .room{
    display: flex;
     background-color: inherit;
     height: 60px;
     margin-bottom: 20px;
     border-radius: 10px;
  }
  .room-thumbnail{
        width: 50px;

  }
  .room-info {
    padding-top: 5px;
  }
  .room-info p {
    font-size: 10px;
    font-weight: bold;
    margin-top: 0px;
    margin-bottom: 2.5px;
    text-align: left;
    margin-left: 12px;
  }
  .room-rating{
    font-size: 8px;
    font-weight: bold;
    color: red;
    width: 40px;
    padding:3px;
    border-radius: 25px;
}
  .room-thumbnail img {
    border-radius: 10px;
  }
  .nearby-text {
  }
.nearby-text p {
  text-align: left;
  font-weight: bold;
  margin-bottom: 10px;
}
.location{
  color:silver;
}
</style>
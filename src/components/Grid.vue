<template>
  <div class="card-container">
    <div class="card">
      <div class="card-image">
        <img src="https://source.unsplash.com/200x140/?bali,bedroom" />
      </div>
      <div class="card-data">
        <div class="data-container">
          <div class="room-description"><p>Romantic Tropical Getaway</p></div>
          <div class="room-badges">
            <div class="room-rating">4.97</div>
            <div class="room-type premium">PREMIUM</div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-image">
        <img src="https://source.unsplash.com/200x140/?bali,hotel" />
      </div>
      <div class="card-data">
        <div class="data-container">
          <div class="room-description"><p>Luxary Gold Coast Hinterland Villa</p></div>
          <div class="room-badges">
            <div class="room-rating">4.97</div>
            <div class="room-type premium">PREMIUM</div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-image">
        <img src="https://source.unsplash.com/200x140/?bali,condo " />
      </div>
      <div class="card-data">
        <div class="data-container">
          <div class="room-description"><p>Costal Luxary Condominium</p></div>
          <div class="room-badges">
            <div class="room-rating">4.97</div>
            <div class="room-type plus">PLUS</div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-image" v-lazy-container="{ selector: 'img' }">
        <img data-src="https://source.unsplash.com/200x140/?bali,townhouse" />
      </div>
      <div class="card-data">
        <div class="data-container">
          <div class="room-description"><p>Magical Treehouse</p></div>
          <div class="room-badges">
            <div class="room-rating">4.97</div>
            <div class="room-type plus">PLUS</div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-image" v-lazy-container="{ selector: 'img' }">
        <img data-src="https://source.unsplash.com/200x140/?bali,mansion" />
      </div>
      <div class="card-data">
        <div class="data-container">
          <div class="room-description"><p>Cozy Bungalo For Two</p></div>
          <div class="room-badges">
            <div class="room-rating">4.97</div>
            <div class="room-type plus">PLUS</div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-image" v-lazy-container="{ selector: 'img' }">
        <img data-src="https://source.unsplash.com/200x140/?bedroom, trees" />
      </div>
      <div class="card-data">
        <div class="data-container">
          <div class="room-description"><p>Luxary Gold Coast Hinterland Villa</p></div>
          <div class="room-badges">
            <div class="room-rating">4.97</div>
            <div class="room-type premium">PREMIUM</div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-image" v-lazy-container="{ selector: 'img' }">
        <img data-src="https://source.unsplash.com/200x140/?bedroom, ocean" />
      </div>
      <div class="card-data">
        <div class="data-container">
          <div class="room-description"><p>Luxary Gold Coast Hinterland Villa</p></div>
          <div class="room-badges">
            <div class="room-rating">4.97</div>
            <div class="room-type basic"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-image" v-lazy-container="{ selector: 'img' }">
        <img data-src="https://source.unsplash.com/200x140/?livingroom, tropical" />
      </div>
      <div class="card-data">
        <div class="data-container">
          <div class="room-description"><p>Luxary Gold Coast Hinterland Villa</p></div>
          <div class="room-badges">
            <div class="room-rating">4.97</div>
            <div class="room-type basic"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-image" v-lazy-container="{ selector: 'img' }">
        <img data-src="https://source.unsplash.com/200x140/?bali,livingroom, light" />
      </div>
      <div class="card-data">
        <div class="data-container">
          <div class="room-description"><p>Luxary Gold Coast Hinterland Villa</p></div>
          <div class="room-badges">
            <div class="room-rating">4.97</div>
            <div class="room-type premium">PREMIUM</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-container {
  margin-top: 20px;
  display: inline-grid;
  grid-template-columns: 200px 200px 200px;
  grid-gap: 40px;
}
.card {
  height: 240px;
  width: 200px;
  background-color: white;
  border-radius: 25px;
  box-shadow: 0.5px 0.5px 10px #e2e2e2;
}
.card-image img {
  border-radius: 25px 25px 0px 0px;
}
.room-description {
  text-align: start;
  margin-left: 10px;
  margin-right: 20px;
  font-size: 14px;
  font-weight: bold;
}

.room-description p {
  margin-top: 0px;
}
.room-badges {
  display: flex;
}
.room-rating {
  font-size: 8px;
  font-weight: bold;
  background: rgb(250, 182, 182);
  color: red;
  width: 40px;
  margin-left: 10px;
  padding: 3px;
  border-radius: 25px;
}
.room-type {
  font-size: 8px;
  font-weight: bold;
  color: black;
  margin-left: 5px;
  padding: 3px;

  border-radius: 25px;
}
.premium {
  background: rgb(232, 232, 127);
  width: 50px;
}
.plus {
  background: rgb(167, 206, 255);
  width: 35px;
}
</style>

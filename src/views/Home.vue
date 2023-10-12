<template>
  <ApartmentsFilterForm/>
  <div>
    <p v-if="!filteredApartments.length">Ничего не найдено</p>
          <ApartmentsList v-else :items="filteredApartments">
            <template v-slot:apartment="{ apartment }">
              <ApartmentsItem
                :key="apartment.id"
                :id="apartment.id"
                :descr="apartment.descr"
                :rating="apartment.rating"
                :imgSrc="apartment.imgUrl"
                :price="apartment.price"
              />
            </template>
          </ApartmentsList>
        </div>
</template>

  <script>
  import ApartmentsFilterForm from '../components/apartment/ApartmentsFilterForm.vue'
  import ApartmentsList from '../components/apartment/ApartmentsList.vue'
  import ApartmentsItem from '../components/apartment/ApartmentsItem.vue'
  import { getApartmentsList } from '../services/apartments-service.js';
  console.log('getApartmentsList', getApartmentsList)
  export default {
    name: 'HomePage',
    components: {
      ApartmentsFilterForm,
      ApartmentsList,
      ApartmentsItem
    },
    data() {
      return {
        text: '',
        apartments: [],
        filters: {
          city: '',
          price: 0,
        },
      };
    },
    computed: {
      filteredApartments() {
        return this.filterByCityName(this.filterByPrice(this.apartments));
      },
    },
    async created() {
      try {
        const { data } = await getApartmentsList();
        console.log('data', data)
        this.apartments = data;
      } catch (error) {
        console.error(error);
      }
    },
    methods: {
      filter({ city, price }) {
        this.filters.city = city;
        this.filters.price = price;
      },
      filterByCityName(apartments) {
        if (!this.filters.city) return apartments;
        return apartments.filter((apartment) => {
          return apartment.location.city === this.filters.city;
        });
      },
      filterByPrice(apartments) {
        if (!this.filters.price) return apartments;
        return apartments.filter((apartment) => {
          return apartment.price >= this.filters.price;
        });
      },
    }
}
  </script>

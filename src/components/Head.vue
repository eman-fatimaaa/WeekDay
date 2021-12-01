<template>
  <div>
    <div>
      <div class="dropdown open">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="triggerId"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {{ cartItemCount }} Cart
        </button>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "Head",

  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
  },
};
</script>
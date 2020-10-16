
<template>
  <table class="table is-bordered is-hoverable is-fullwidth">
    <thead>
    <tr>
      <th>Alue</th>
      <th>Vapaat pyörät</th>
      <th>Tyhjät paikat</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>{{ bike.name }}</td>
      <td>{{ bike.bikesAvailable }}</td>      <td>{{ bike.spacesAvailable}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "BikeStation",
  props: ["bike"]
};
</script>

<style scoped></style>
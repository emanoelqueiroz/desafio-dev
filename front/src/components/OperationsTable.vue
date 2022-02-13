<template>
  <section class="operations-section">
    <OperationsTotal :operations="operations" />
    <div class="operations-title">List of Operations</div>
    <OperationsCard v-for="operation in operations" :key="operation.id" :operation="operation" />
  </section>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  import OperationsCard from './OperationsCard.vue'
  import OperationsTotal from './OperationsTotal.vue'

  const operations = ref([])

  onMounted(() => {
    fetch('http://localhost:4200/api/operations')
      .then(data => data.json())
      .then(operationsData => operations.value = operationsData)
      .catch(console.log)
  })
</script>

<style>

  .operations-section {
    margin-bottom: 20px;
  }

  .operations-title {
    margin: 20px 0;
  }

</style>
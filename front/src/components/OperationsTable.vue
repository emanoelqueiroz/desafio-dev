<template>
  <Loading v-if="isLoading" />
  <Alert v-else-if="hasError" type="danger" message="Something went wrong" />
  <Alert v-else-if="!operations.length" type="info" message="Operations are empty" />
  <section v-else class="operations-section">
    <OperationsTotal :operations="operations" />
    <div class="operations-title">List of Operations</div>
    <OperationsCard v-for="operation in operations" :key="operation.id" :operation="operation" />
  </section>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  import Alert from './Alert.vue'
  import Loading from './Loading.vue'
  import OperationsCard from './OperationsCard.vue'
  import OperationsTotal from './OperationsTotal.vue'

  const hasError = ref(false)
  const isLoading = ref(true)
  const operations = ref([])

  onMounted(() => {
    fetch('http://localhost:4200/api/operations')
      .then(data => data.json())
      .then(operationsData => operations.value = operationsData)
      .catch(() => hasError.value = true)
      .then(() => isLoading.value = false)
  })
</script>

<style scoped>

  .operations-section {
    margin-bottom: 20px;
  }

  .operations-title {
    margin: 20px 0;
  }

</style>
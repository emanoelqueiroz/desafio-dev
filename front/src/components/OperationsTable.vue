<template>
  <section v-if="loading" class="operations-section">
    <Loading />
  </section>
  <section v-else-if="error" class="operations-section">
    <WarningMessage message="Something went wrong" />
  </section>
  <section v-else class="operations-section">
    <OperationsTotal :operations="operations" />
    <div class="operations-title">List of Operations</div>
    <OperationsCard v-for="operation in operations" :key="operation.id" :operation="operation" />
  </section>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  import Loading from './Loading.vue'
  import WarningMessage from './WarningMessage.vue'
  import OperationsCard from './OperationsCard.vue'
  import OperationsTotal from './OperationsTotal.vue'

  const error = ref(false)
  const loading = ref(true)
  const operations = ref([])

  onMounted(() => {
    fetch('http://localhost:4200/api/operations')
      .then(data => data.json())
      .then(operationsData => operations.value = operationsData)
      .catch(() => error.value = true)
      .then(() => loading.value = false)
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
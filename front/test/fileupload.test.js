import { expect } from 'vitest'

import FileUpload from '@/components/FileUpload.vue'

test('file upload', async() => {
  expect(FileUpload).toBeTruthy()
})

<template>
  <section>
    <div :class="['file-upload-block', hasFileClass]">
      <label for="fileUploadField">
        <img src="@/assets/uploading.png" class="upload-img" />
        <span v-if="isDragOver">
          Release to upload the file
        </span>
        <span v-else-if="isUploading">
          Uploading file
        </span>
        <span v-else>
          Click to find some file or drop here to upload
        </span>
      </label>
      <input id="fileUploadField" accept=".txt" type="file" />
    </div>
    <Alert v-if="errorMessage" type="danger" :message="errorMessage" />
  </section>
</template>

<script>
import Alert from './Alert.vue'

export default {

  components: { Alert },

  data() {
    return {
      file: null,
      isUploading: false,
      isDragOver: false,
      errorMessage: '',
    }
  },

  mounted() {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => 
      this.$el.addEventListener(eventName, this.preventDefaults, false));

    ['dragenter', 'dragover'].forEach(eventName => 
      this.$el.addEventListener(eventName, () => this.dragOver(true), false))

    this.$el.addEventListener('dragleave', () => this.dragOver(false), false)

    this.$el.addEventListener('drop', this.onDrop, false)

    this.$el.querySelector('#fileUploadField').addEventListener('change', this.onFileChange, false)
  },

  unmounted() {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => 
      this.$el.removeEventListener(eventName, this.preventDefaults));

    ['dragenter', 'dragover'].forEach(eventName => 
      this.$el.removeEventListener(eventName, () => this.dragOver))

    this.$el.removeEventListener('dragleave', () => this.dragOver)

    this.$el.removeEventListener('drop', this.onDrop)
  },

  computed: {

    hasFileClass() {
      return this.file ? 'has-file' : ''
    }

  },

  methods: {

    preventDefaults (e) {
      e.preventDefault()
      e.stopPropagation()
    },

    isFileValid(file) {
      const { name } = file;
      const ext = name.split('.')[1];

      return ext === 'txt';
    },

    dragOver(isDragOver) {
      this.isDragOver = isDragOver
    },

    onDrop(e) {
      this.isDragOver = false

      const dt = e.dataTransfer
      const files = dt.files

      this.upload(files)
    },

    onFileChange(e) {
      const files = e.target.files

      this.upload(files)
    },

    upload(files) {
      if (!files.length || files.length > 1 || this.isUploading)
        return

      this.errorMessage = '';
      if (!this.isFileValid(files[0])) {
        this.errorMessage = 'Invalid file extension. Please, insert one .txt file.'
        return
      }

      this.file = files[0]
      this.isUploading = true;

      this.$el.querySelector('#fileUploadField').value = null

      const data = new FormData()
      data.append('file', this.file)

      fetch('http://localhost:4200/api/upload', {
        method: 'POST',
        body: data,
      }).catch(() => this.errorMessage = 'An error ocurred on uploading the file')
        .then(() => this.$router.push('/operations'))
    }

  },

}
</script>

<style lang="scss">
  $purple: rgba(137, 43, 226);

  .file-upload-block {
    margin: 15px 0;

    label {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 200px;
      border: 2px dashed fade-out($purple, 0.3);
      border-radius: 3px;
      transition: 0.2s;

      &:hover {
        border-color: $purple;
      }
    }

    img {
      max-width: 50px;
    }

    &.is-over label {
      border-color: $purple;
    }

    input {
      display: none;
    }
  }

  .loading-block {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 200px;
    margin: 15px 0;
  }
</style>
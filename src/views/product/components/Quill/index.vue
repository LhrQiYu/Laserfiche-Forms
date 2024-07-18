<template>
  <quill-editor
    :editor-option="editorOption"
    :content="content"
    :style="cusStyle"
    :width="toolBarwidth"
    class="quill-editor"
    @change="onEditorChange($event)"
  />
</template>

<script>
export default {
  props: {
    // 内容
    content: {
      type: String,
      default: '',
    },
    // 配置项
    options: {
      type: Object,
      default() {
        return {}
      },
    },
    // 自定义样式
    cusStyle: {
      type: String,
      default: '',
    },
    // 宽度
    toolBarwidth: {
      type: String,
      default: '',
    },
    maxLength: {
      type: Number,
      default: 300,
    },
  },
  data() {
    return {
      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'], // 加粗，斜体，下划线，删除线
            ['blockquote', 'code-block'], // 引用，代码块
            [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
            [{ list: 'ordered' }, { list: 'bullet' }], // 列表
            [{ script: 'sub' }, { script: 'super' }], // 上下标
            [{ indent: '-1' }, { indent: '+1' }], // 缩进
            [{ direction: 'rtl' }], // 文本方向
            [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
            [{ header: [1, 2, 3, 4, 5, 6, false] }], // 几级标题
            [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
            [{ font: [] }], // 字体
            [{ align: [] }], // 对齐方式
            ['link', 'image', 'video'],
            ['clean'], // 清除字体样式
          ],
        },
        theme: 'snow',
      },
    }
  },

  methods: {
    onEditorChange(event) {
      this.$emit('quillEditorChange', event)
    },
  },
}
</script>
<style lang="scss" scoped>
.quill-editor {
  /deep/ .ql-container {
    height: 300px;
  }
}
</style>

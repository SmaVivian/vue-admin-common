<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-input v-model="form.name"/>
      </el-form-item>

      <!-- 下拉框静态 -->
      <el-form-item label="Activity zone">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="上海" value="shanghai"/>
          <el-option label="北京" value="beijing"/>
        </el-select>
      </el-form-item>

      <!-- 下拉框动态渲染 -->
      <el-form-item label="Activity zone2">
        <el-select v-model="form.value" placeholder="请选择">
          <el-option
            v-for="item in form.options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <!-- 日期/时间 -->
      <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%;"/>
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" type="fixed-time" placeholder="Pick a time" style="width: 100%;"/>
        </el-col>
      </el-form-item>

      <!-- switch开关 -->
      <el-form-item label="Instant delivery">
        <el-switch v-model="form.delivery"/>
      </el-form-item>

      <!-- 单选框 -->
      <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio label="Sponsor"/>
          <el-radio label="Venue"/>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="单选框">
        <el-radio-group v-model="form.radio">
          <el-radio 
            v-for="item in radioList"
            :key="item.value"
            :label="item.value">{{item.label}}</el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- 复选框 -->
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Online activities" name="type"/>
          <el-checkbox label="Promotion activities" name="type"/>
          <el-checkbox label="Offline activities" name="type"/>
          <el-checkbox label="Simple brand exposure" name="type"/>
        </el-checkbox-group>
      </el-form-item>

      <!-- 文本域 -->
      <el-form-item label="Activity form">
        <el-input v-model="form.desc" type="textarea"/>
      </el-form-item>

      <!-- 富文本 -->
      <!-- bidirectional data binding（双向数据绑定） -->
      <el-form-item label="富文本1" style="height:300px;">
        <quill-editor v-model="content"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)"
           style="height:200px;">
        </quill-editor>
      </el-form-item>
    
      <!-- Or manually control the data synchronization（或手动控制数据流） -->
      <el-form-item label="富文本2">
        <quill-editor :content="content2"
          :options="editorOption"
          @change="onEditorChange($event)">
        </quill-editor>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radioList: [
        {
          value: '1',
          label: '备选项'
        },
        {
          value: '2',
          label: '备选项2'
        },
        {
          value: '3',
          label: '备选项3'
        },
      ],
      content: '<h2>I am Example</h2>',
      content2: '<h2>I am Example</h2>',
      editorOption: {
        // some quill options
      },
      form: {
        name: '',
        region: '',
        options: [{
          value: '',
          label: '全部'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        date1: '',
        date2: '',
        delivery: false,
        radio: '2',
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },

    onEditorBlur(quill) {
      console.log('editor blur!', quill)
    },
    onEditorFocus(quill) {
      console.log('editor focus!', quill)
    },
    onEditorReady(quill) {
      console.log('editor ready!', quill)
    },
    onEditorChange({ quill, html, text }) {
      console.log('editor change!', quill, html, text)
      this.content = html
    }
  },
  mounted() {
    console.log('this is current quill instance object', this.editor)
    setTimeout(() => {
      this.content = '<p>我修改啦</p>'
    }, 2000)
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>


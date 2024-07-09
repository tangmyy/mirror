<template>
  <div>
    <el-popover
      placement="top-start"
      title="编辑"
      width="200"
      trigger="hover"
      content="修改提交内容">
      <el-button slot="reference"@click="dialogFormVisible=true">点击以编辑</el-button>
    </el-popover>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
  
        <el-form-item label="图片描述" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
  
        <el-form-item label="公开状态" :label-width="formLabelWidth">
          <div class="step-content">
            <b-field>
              <div>
                <b-switch v-model="localIsPublic">公开图片</b-switch>
              </div>
              <div>
                <p>
                  图片公开状态: {{localIsPublic ? "公开" : "私密"}}
                </p>
              </div>
            </b-field>
          </div>  
        </el-form-item>
        <el-form-item label="图片标签" :label-width="formLabelWidth">
          <div class="step-content">
            <section>
              <b-taginput
              v-model="localTags"
              :maxtags="maxs">
              </b-taginput>
            </section>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
  </template>
  
  
  
  
  <script>
    export default {
      data() {
        return {
          dialogFormVisible: false,
          form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          },
          formLabelWidth: '120px',
          maxs: 5,      // 最大标签数量
          localIsPublic: false,
        }
      }
    };
  </script><template>
<div>
  <el-popover
    placement="top-start"
    title="编辑"
    width="200"
    trigger="hover"
    content="修改提交内容">
    <el-button slot="reference"@click="dialogFormVisible=true">点击以编辑</el-button>
  </el-popover>
  <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
    <el-form :model="form">

      <el-form-item label="图片描述" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="公开状态" :label-width="formLabelWidth">
        <div class="step-content">
          <b-field>
            <div>
              <b-switch v-model="localIsPublic">公开图片</b-switch>
            </div>
            <div>
              <p>
                图片公开状态: {{localIsPublic ? "公开" : "私密"}}
              </p>
            </div>
          </b-field>
        </div>  
      </el-form-item>
      <el-form-item label="图片标签" :label-width="formLabelWidth">
        <div class="step-content">
          <section>
            <b-taginput
            v-model="localTags"
            :maxtags="maxs">
            </b-taginput>
          </section>
        </div>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>




<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        maxs: 5,      // 最大标签数量
        localIsPublic: false,
      }
    }
  };
</script>
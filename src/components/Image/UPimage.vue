<template>
  <section>
    <div class="block"></div>
    <b-steps
      v-model="activeStep"
      :animated="isAnimated"
      :rounded="isRounded"
      :has-navigation="hasNavigation"
      :icon-prev="prevIcon"
      :icon-next="nextIcon"
      :label-position="labelPosition"
      :mobile-mode="mobileMode">
      <b-step-item step="1" label="上传图片" :clickable="isStepsClickable" class="step-item">
        <ImageAdd></ImageAdd>
      </b-step-item>

      <b-step-item step="2" label="图片描述" :clickable="isStepsClickable" :type="{'is-success': isProfileSuccess}" class="step-item">
        <ImageIntro></ImageIntro>
      </b-step-item>
    
      <b-step-item step="3" label="选择标签" :clickable="isStepsClickable" disabled class="step-item">
        <ImageTag></ImageTag>
      </b-step-item>

      <b-step-item step="4" label="是否公开" :clickable="isStepsClickable" class="step-item">
        <ImagePublic></ImagePublic>
      </b-step-item>

      <b-step-item step="5" label="预览" :clickable="isStepsClickable" disabled class="step-item">
        <ImageCard></ImageCard>
      </b-step-item>

      <template v-if="customNavigation" #navigation="{previous, next}">
        <b-button
          outlined
          type="is-danger"
          icon-pack="fas"
          icon-left="backward"
          :disabled="previous.disabled"
          @click.prevent="previous.action">
          Previous
        </b-button>
        <b-button
          outlined
          type="is-success"
          icon-pack="fas"
          icon-right="forward"
          :disabled="next.disabled"
          @click.prevent="next.action">
          Next
        </b-button>
      </template>

    </b-steps>
  </section>
</template>

<script>
import ImageAdd from '@/components/Image/ImageAdd.vue';
import ImageIntro from '@/components/Image/ImageIntro.vue';
import ImageTag from '@/components/Image/ImageTag.vue';
import ImagePublic from '@/components/Image/ImagePublic.vue';
import ImageCard from '@/components/Image/ImageCard.vue';


export default {
  name: 'Image',
  // 挂载组件
  components: {   
    ImageAdd,
    ImageIntro,
    ImageTag,
    ImagePublic,
    ImageCard,
  },
  data() {
    return {
      isRounded: true,
      isAnimated: true,
      isStepsClickable: true,

      isRounded: true,          // 步骤标记是否为圆形
      isAnimated: true,         // 导航是否有动画效果
      isStepsClickable: true,   // 步骤标记是否可点击
      hasNavigation: true,      // 决定是否显示导航按钮（如“上一步”和“下一步”按钮）
      customNavigation: false,  // 决定是否使用自定义导航按钮
      isProfileSuccess: false,  // 决定Profile步骤是否标记为成功状
      
      prevIcon: 'chevron-left',     // 设置“上一步”导航按钮的图标
      nextIcon: 'chevron-right',    // 设置“下一步”导航按钮的图标
      labelPosition: 'bottom',      // 设置步骤标签的位置
      mobileMode: 'minimalist',     // 设置移动设备上的显示模式。可以设置为 'minimalist' 或 'compact'。
    }
  },


}

</script>




<style scoped>
.upload-form {
  max-width: 500px;
  margin: 0 auto;
}

.step-item {
  margin-right: 400px; /* 设置水平间距 */
}


.step-content {
  margin-left: 400px; /* 设置水平间距 */
  margin-top: 150px;
  margin-bottom: 150px;
}

.little {
  margin-top: 20px;
}


.fixed-navigation {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
}

.fixed-div {
  position: absolute;
  bottom: 20px; /* 距离底部20px */
  right: 20px; /* 距离右侧20px */
  padding: 10px; /* 内边距 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 阴影效果 */
}
</style>
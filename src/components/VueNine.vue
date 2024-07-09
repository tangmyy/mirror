<template>
  <section>
      <b-field grouped group-multiline>
          <b-field label="Max">
              <b-numberinput v-model="maxs" min="1" controls-position="compact"></b-numberinput>
          </b-field>
          <b-field label="Icon Pack">
              <b-input v-model="packs"></b-input>
          </b-field>
          <b-field label="Icon">
              <b-input v-model="icons"></b-input>
          </b-field>
      </b-field>
      <div class="block">
          <b-field grouped group-multiline>
              <b-field label="Value">
                  <b-numberinput v-model="rate" min="0" :max="maxs"
                      :step="isDisabled ? '.1' : '1'" controls-position="compact">
                  </b-numberinput>
              </b-field>
              <b-field label="Custom Text">
                  <b-input v-model="custom" placeholder="e.g. Points or Total reviews" :disabled="text">
                  </b-input>
              </b-field>
              <b-field label="Size">
                  <b-select v-model="sizes">
                      <option value="">default</option>
                      <option value="is-small">is-small</option>
                      <option value="is-medium">is-medium</option>
                      <option value="is-large">is-large</option>
                  </b-select>
              </b-field>
              <b-field label="Locale">
                  <b-select v-model="locale" :disabled="!score">
                      <option :value="undefined"></option>
                      <option value="de-DE">de-DE</option>
                      <option value="en-CA">en-CA</option>
                      <option value="en-GB">en-GB</option>
                      <option value="en-US">en-US</option>
                      <option value="es-ES">es-ES</option>
                      <option value="es-MX">es-MX</option>
                      <option value="fr-CA">fr-CA</option>
                      <option value="fr-FR">fr-FR</option>
                      <option value="it-IT">it-IT</option>
                      <option value="ja-JP">ja-JP</option>
                      <option value="pt-BR">pt-BR</option>
                      <option value="ru-RU">ru-RU</option>
                      <option value="zn-CN">zn-CN</option>
                  </b-select>
              </b-field>
          </b-field>
      </div>
      <b-field grouped group-multiline>
          <div class="control">
              <b-switch v-model="isRtl">Rtl</b-switch>
          </div>
          <div class="control">
              <b-switch v-model="score" :disabled="text">Show Score</b-switch>
          </div>
          <div class="control">
              <b-switch v-model="text" :disabled="score">Show Text</b-switch>
          </div>
          <div class="control">
              <b-switch v-model="isDisabled">Read Only (Support Decimal)</b-switch>
          </div>
          <div class="control">
              <b-switch v-model="isSpaced">Spaced</b-switch>
          </div>
      </b-field>
      <b-field label="Texts Template">
          <b-taginput
              v-model="texts"
              :maxtags="maxs"
              :disabled="score">
          </b-taginput>
      </b-field>
      <hr>
      <b-rate
          v-model="rate"
          :icon-pack="packs"
          :icon="icons"
          :max="maxs"
          :size="sizes"
          :locale="locale"
          :show-score="score"
          :custom-text="custom"
          :show-text="text"
          :texts="texts"
          :rtl="isRtl"
          :spaced="isSpaced"
          :disabled="isDisabled">
      </b-rate>
  </section>
</template>
  
  

<script>
    export default {
        data() {
            return {
              maxs: 5,        // 最大标签数量
              texts: ['Very bad', 'Bad', 'Good', 'Very good', 'Awesome'],
              rate: 4.6,      // 当前评分值
              
              sizes: 'is-large',      // 图标的大小
              packs: 'fa',   // 选择图标包。在这个例子中，placeholder="e.g. mdi, fa or other"
              icons: 'star',  // 选择图标的类型。这里选择的是星星图标 (star)
              score: true,   // 决定是否显示评分的数值。如果为 true，则显示评分的数值；如果为 false，则不显示
              custom: '',     // 自定义文本，可以在评分组件中显示额外的文本信息
              text: false,    // 决定是否显示文本标签。如果为 true，则显示与每个评分相关的文本标签；如果为 false，则不显示
              // 一个数组，包含每个评分的文本标签。例如，当评分为 1 时显示 'Very bad'，评分为 2 时显示 'Bad' 等等。
              isRtl:false,      //如果为 true，则组件从右到左排列；如果为 false，则从左到右排列。
              isSpaced: true,  // 设置评分图标之间是否有间距。如果为 true，则图标之间有间距；如果为 false，则图标之间没有额外的间距
              isDisabled: false, // 设置组件是否为只读模式。如果为 true，则组件为只读模式，用户不能更改评分；如果为 false，用户可以更改评分
              locale: undefined // 设置本地化 (locale) 参数，可以用于多语言支持。如果设置为 undefined，则使用浏览器的默认语言
            }
        }
    }
</script>
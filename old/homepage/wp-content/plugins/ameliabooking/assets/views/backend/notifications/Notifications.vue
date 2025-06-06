<template>
  <div id="am-notifications" class="am-wrap">
    <div id="am-email-notifications" class="am-body">

      <!-- Page Header -->
      <page-header></page-header>
      <!-- /Page Header -->

      <!-- Spinner -->
      <div class="am-spinner am-section" v-if="!fetched">
        <img :src="$root.getUrl + 'public/img/spinner.svg'"/>
      </div>
      <!-- /Spinner -->

      <!-- Notifications Tab -->
      <div class="am-notifications am-section">
        <el-tabs v-model="notificationTab" @tab-click="inlineSVG()" v-if="fetched">

          <!-- Email Notifications -->
          <el-tab-pane :label="$root.labels.email_notifications" name="email">
            <customize-notifications
                :notifications="notifications"
                :customFields="options.entities.customFields"
                :categories="options.entities.categories"
                :coupons="options.entities.coupons"
                :events="options.entities.events"
                type="email"
                :pageUrl="getPageUrl()"
                :languagesData="languagesData"
                :passed-used-languages="options.settings.general.usedLanguages"
                @manageLanguages="manageLanguages = true"
            ></customize-notifications>
          </el-tab-pane>
          <!-- /Email Notifications -->

          <!-- SMS Notifications -->
          <el-tab-pane :label="$root.labels.sms_notifications" name="sms">
            <sms-notifications
                v-if="notificationTab === 'sms'"
                :notifications="notifications"
                :categories="options.entities.categories"
                :customFields="options.entities.customFields"
                :coupons="options.entities.coupons"
                :events="options.entities.events"
                :languagesData="languagesData"
                :passed-used-languages="options.settings.general.usedLanguages"
                @manageLanguages="manageLanguages = true"
            >
            </sms-notifications>
          </el-tab-pane>
          <!-- /SMS Notifications -->

        </el-tabs>
      </div>

      <!-- /Notifications Tab -->

      <!-- Help Button -->
      <el-col :md="6" class="">
        <a class="am-help-button" :href="needHelpPage" target="_blank">
          <i class="el-icon-question"></i> {{ $root.labels.need_help }}?
        </a>
      </el-col>
      <!-- /Help Button -->


      <!-- Dialog Manage Notifications -->
      <transition name="slide">
        <el-dialog
          :close-on-click-modal="false"
          class="am-side-dialog am-dialog-email-codes"
          :visible.sync="manageLanguages"
          :show-close="false"
          v-if="manageLanguages"
        >
          <dialog-manage-languages
            :passed-used-languages="options.settings.general.usedLanguages"
            :languages-data="languagesData"
            @closeDialogManageLanguages="manageLanguages = false"
            @saveDialogManageLanguages="saveDialogManageLanguages"
          >
          </dialog-manage-languages>
        </el-dialog>
      </transition>
      <!-- /Dialog Manage Notifications -->

    </div>
  </div>
</template>

<script>
  import PageHeader from '../parts/PageHeader.vue'
  import CustomizeNotifications from './common/CustomizeNotifications.vue'
  import SmsNotifications from './sms/SmsNotifications.vue'
  import imageMixin from '../../../js/common/mixins/imageMixin'
  import { quillEditor } from 'vue-quill-editor'
  import notifyMixin from '../../../js/backend/mixins/notifyMixin'
  import durationMixin from '../../../js/common/mixins/durationMixin'
  import helperMixin from '../../../js/backend/mixins/helperMixin'
  import DialogManageLanguages from './common/DialogManageLanguages.vue'
  import dateMixin from '../../../js/common/mixins/dateMixin'
  import moment from 'moment'

  export default {
    mixins: [imageMixin, notifyMixin, durationMixin, helperMixin, dateMixin],

    data () {
      return {
        fetched: false,
        notifications: [],
        notificationTab: 'email',
        options: {
          entities: {
            customFields: []
          },
          settings: {
            general: {
              usedLanguages: []
            }
          },
          fetched: false
        },
        languagesData: null,
        manageLanguages: false
      }
    },

    created () {
      this.setActiveTab()
      this.getEntities()
      this.inlineSVG()
    },

    mounted () {
      this.inlineSVG()
    },

    methods: {
      getPageUrl () {
        return location.href.substring(0, location.href.lastIndexOf('?')).substring(0, location.href.substring(0, location.href.lastIndexOf('?')).lastIndexOf('/')) + '/'
      },

      getEntities () {
        this.$http.get(`${this.$root.getAjaxUrl}/entities`, {
          params: this.getAppropriateUrlParams({
            types: ['settings'],
            getAllEvents: true
          })
        }).then(response => {
          this.options.entities = response.data.data
          this.options.entities.events = !AMELIA_LITE_VERSION ? this.options.entities.events.filter(ev => ev.parentId === null) : []

          let events = []
          for (let i = 0; i < this.options.entities.events.length; i++) {
            let ev = this.options.entities.events[i]
            if ((ev.recurring ? moment() > moment(ev.recurring.until)
              : moment() > moment(ev.periods[ev.periods.length - 1].periodEnd)) ||
                ev.status !== 'approved') {
              continue
            }

            let e = this.options.entities.events.find(e => e.name === ev.name && e.id !== ev.id)
            if (e) {
              ev.displayName = ev.name + ' (' + this.getFrontedFormattedDate(ev.periods[0].periodStart) + ')'
              events.push(ev)
            } else {
              events.push(ev)
            }
          }

          this.options.entities.events = events

          this.options.fetched = true
          this.options.settings.general.usedLanguages = response.data.data.settings.general.usedLanguages
          this.languagesData = response.data.data.settings.languages
          this.getNotifications()
        }).catch(e => {
          console.log(e.message)
          this.fetched = true
          this.options.fetched = true
        })
      },

      getNotifications () {
        this.fetched = false

        this.$http.get(
          `${this.$root.getAjaxUrl}/notifications`
        ).then(response => {
          this.notifications = response.data.data.notifications
          this.fetched = true
        }).catch(e => {
          console.log(e.message)
          this.fetched = true
        })
      },

      setActiveTab () {
        let urlParams = this.getUrlQueryParams(window.location.href)

        if ('notificationTab' in urlParams && urlParams.notificationTab === 'sms') {
          this.notificationTab = 'sms'
        }
      },

      saveDialogManageLanguages (usedLanguages) {
        this.manageLanguages = false
        this.options.settings.general.usedLanguages = usedLanguages
        this.usedLanguages = usedLanguages
        this.$http.post(`${this.$root.getAjaxUrl}/settings`, {
          usedLanguages: this.usedLanguages
        }).then(() => {
          this.notify(this.$root.labels.success, this.$root.labels.settings_saved, 'success')
        }).catch((e) => {
          console.log(e)
        })
      }
    },

    computed: {
      needHelpPage () {
        return this.notificationTab === 'email'
          ? 'https://wpamelia.com/notifications/' : 'https://wpamelia.com/sms-notifications/'
      }
    },

    components: {
      PageHeader,
      CustomizeNotifications,
      SmsNotifications,
      quillEditor,
      DialogManageLanguages
    }
  }
</script>

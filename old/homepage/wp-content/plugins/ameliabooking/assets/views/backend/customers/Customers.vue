<template>
  <div class="am-wrap">
    <div id="am-customers" class="am-body">

      <!-- Page Header -->
      <page-header :customersTotal="options.count" @newCustomerBtnClicked="showDialogNewCustomer()"></page-header>

      <!-- Spinner -->
      <div class="am-spinner am-section" v-show="!fetched">
        <img :src="$root.getUrl + 'public/img/spinner.svg'"/>
      </div>

      <!-- Empty State -->
      <div class="am-empty-state am-section"
           v-if="fetched && customers.length === 0 && !filterApplied && fetchedFiltered">
        <img :src="$root.getUrl + 'public/img/emptystate.svg'">
        <h2>{{ $root.labels.no_customers_yet }}</h2>
        <p>{{ $root.labels.click_add_customers }}</p>
      </div>

      <!-- Customers -->
      <div v-show="fetched && (customers.length !== 0 || customers.length === 0 && filterApplied || !fetchedFiltered)">

        <!-- Filter -->
        <div class="am-customers-filter am-section">
          <el-form class="demo-form-inline" :action="exportAction" method="POST">
            <el-row :gutter="16">

              <!-- Global Search -->
              <el-col :md="18">
                <div class="am-search">
                  <el-input
                      :placeholder="searchPlaceholder"
                      v-model="params.search"
                      name="search"
                  >
                  </el-input>
                </div>
              </el-col>

              <!-- Sort -->
              <transition name="fade">
                <div>
                  <el-col :md="6">
                    <el-form-item>
                      <el-select
                          v-model="params.sort"
                          :placeholder="$root.labels.sort"
                          class="calc-width sort"
                          @change="filterData"
                          name="sort"
                          clearable
                      >
                        <el-option
                            v-for="option in options.sort"
                            :key="option.value"
                            :label="option.label"
                            :value="option.value"
                        >
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </div>
              </transition>

              <!-- Export -->
              <div>
                <el-tooltip placement="top">
                  <div slot="content" v-html="$root.labels.export_tooltip_customers"></div>
                  <el-button
                      class="button-export am-button-icon"
                      @click="dialogExport = true"
                  >
                    <img class="svg-amelia" alt="Export" :src="$root.getUrl+'public/img/export.svg'"/>
                  </el-button>
                </el-tooltip>
              </div>

            </el-row>

            <!-- Dialog Export -->
            <transition name="slide">
              <el-dialog
                  class="am-side-dialog am-dialog-export"
                  :visible.sync="dialogExport"
                  :show-close="false"
                  v-if="dialogExport"
                  :close-on-click-modal="false"
              >
                <dialog-export
                    :data="Object.assign(params, exportParams)"
                    :action="$root.getAjaxUrl + '/report/customers'"
                    @updateAction="(action) => {this.exportAction = action}"
                    @closeDialogExport="dialogExport = false"
                >
                </dialog-export>
              </el-dialog>
            </transition>
          </el-form>
        </div>

        <!-- No Results -->
        <div class="am-empty-state am-section"
             v-show="fetched && customers.length === 0 && filterApplied && fetchedFiltered">
          <img :src="$root.getUrl+'public/img/emptystate.svg'">
          <h2>{{ $root.labels.no_results }}</h2>
        </div>

        <!-- Customer List -->
        <div class="am-customers am-section"  v-show="fetchedFiltered && customers.length !== 0">

          <!-- Customer List Header -->
          <div class="am-customers-list-head">
            <el-row>
              <el-col :lg="12">
                <el-row :gutter="10" class="am-customers-flex-row-middle-align">
                  <el-col
                      v-if="$root.settings.capabilities.canDelete === true"
                      :lg="2"
                      :md="2"
                  >
                    <p>
                      <el-checkbox
                          v-model="checkCustomerData.allChecked"
                          @change="checkCustomerData = handleCheckAll(customers, checkCustomerData)">
                      </el-checkbox>
                    </p>
                  </el-col>
                  <el-col :lg="8" :md="8">
                    <p>{{ $root.labels.customer }}:</p>
                  </el-col>
                  <el-col :lg="8" :md="8">
                    <p>{{ $root.labels.wp_user }}:</p>
                  </el-col>
                  <el-col :lg="6" :md="6">
                    <p>{{ $root.labels.phone }}:</p>
                  </el-col>
                </el-row>
              </el-col>

              <el-col :lg="12">
                <el-row :gutter="10" class="am-customers-flex-row-middle-align">
                  <el-col :lg="0" :md="1"></el-col>
                  <el-col :lg="10" :md="10">
                    <p>{{ $root.labels.note }}:</p>
                  </el-col>
                  <el-col :lg="10" :md="10">
                    <p>{{ $root.labels.last_appointment }}:</p>
                  </el-col>
                  <el-col :lg="4" :md="4"></el-col>
                </el-row>
              </el-col>

            </el-row>
          </div>

          <!-- Customer List Content -->
          <div class="am-customers-list">

            <!-- Customers -->
            <el-collapse>
              <el-collapse-item
                  v-for="(customer, index) in customers"
                  :key="customer.id"
                  :name="customer.id"
                  class="am-customer"
              >
                <template slot="title">
                  <div class="am-customer-data">
                    <el-row :gutter="10">

                      <el-col :lg="12">
                        <el-row :gutter="10" class="am-customers-flex-row-middle-align">

                          <!-- Checkbox -->
                          <el-col :lg="2" :sm="1" v-if="$root.settings.capabilities.canDelete === true">
                            <span @click.stop>
                              <el-checkbox
                                  v-model="customer.checked"
                                  @change="checkCustomerData = handleCheckSingle(customers, checkCustomerData)">
                              </el-checkbox>
                            </span>
                          </el-col>

                          <!-- Customer Name -->
                          <el-col :lg="8" :sm="8">
                            <p class="am-col-title">{{ $root.labels.customer }}:</p>
                            <h3>{{ customer.firstName + ' ' + customer.lastName }}</h3>
                            <el-tooltip class="item" :content=" customer.email" placement="top">
                              <span>{{ customer.email }}</span>
                            </el-tooltip>
                          </el-col>

                          <!-- WordPress User -->
                          <el-col :lg="8" :sm="8">
                            <p class="am-col-title">{{ $root.labels.wp_user }}:</p>
                            <div class="am-assigned">
                              <img :src="customer.wpUserPhotoUrl"/>
                              <el-tooltip class="item" :content="customer.wpName" placement="top">
                                <h4>{{ customer.wpName }}</h4>
                              </el-tooltip>
                            </div>
                          </el-col>

                          <!-- Phone -->
                          <el-col :lg="6" :sm="7">
                            <p class="am-col-title">{{ $root.labels.phone }}:</p>
                            <el-tooltip class="item" :content="customer.phone" placement="top">
                              <h4>{{ customer.phone }}</h4>
                            </el-tooltip>
                          </el-col>

                        </el-row>
                      </el-col>

                      <el-col :lg="12">
                        <el-row :gutter="10" class="am-customers-flex-row-middle-align">
                          <el-col :lg="0" :sm="1" class="hide-on-mobile"></el-col>

                          <!-- Note -->
                          <el-col :lg="10" :sm="8" class="hide-on-mobile">
                            <p class="am-col-title">{{ $root.labels.note }}:</p>
                            <p>{{ customer.note ? customer.note.substring(0, 20)+'...' : ''}}</p>
                          </el-col>

                          <!-- Last Appointment -->
                          <el-col :lg="10" :sm="8">
                            <p class="am-col-title">{{ $root.labels.last_appointment }}:</p>
                            <h4 v-if="customer.lastAppointment">
                              {{ getFrontedFormattedDateTime(customer.lastAppointment) }}
                            </h4>
                            <h4 v-else>/</h4>
                          </el-col>

                          <!-- Edit Button -->
                          <el-col :lg="4" :sm="7" class="align-right">
                            <div @click.stop>
                              <el-button v-if="$root.settings.capabilities.canWrite === true" @click="showDialogEditCustomer(index)">{{ $root.labels.edit }}</el-button>
                            </div>
                          </el-col>

                        </el-row>
                      </el-col>

                    </el-row>
                  </div>
                </template>

                <!-- Collapsed Data -->
                <div class="am-customer-details">
                  <el-row>

                    <el-col :md="12">

                      <!-- Total Appointments -->
                      <el-row :gutter="10" class="am-customers-flex-row-top-align">
                        <el-col :md="2" :sm="1"></el-col>
                        <el-col :md="10" :sm="10">
                          <p class="am-data">{{ $root.labels.total_appointments }}:</p>
                        </el-col>
                        <el-col :md="10" :sm="13">
                          <p class="am-value">{{ customer.totalAppointments }}</p>
                        </el-col>
                      </el-row>

                      <!-- Last Appointment -->
                      <el-row :gutter="10" class="am-customers-flex-row-top-align">
                        <el-col :md="2" :sm="1"></el-col>
                        <el-col :md="10" :sm="10">
                          <p class="am-data">{{ $root.labels.last_appointment }}:</p>
                        </el-col>
                        <el-col :md="10" :sm="13">
                          <p class="am-value" v-if="customer.lastAppointment">
                            {{ getFrontedFormattedDateTime(customer.lastAppointment) }}
                          </p>
                          <h4 v-else>/</h4>
                        </el-col>
                      </el-row>

                    </el-col>

                    <el-col :md="12">

                      <!-- Note -->
                      <el-row :gutter="10" class="am-customers-flex-row-top-align">
                        <el-col :md="0" :sm="1"></el-col>
                        <el-col :md="10" :sm="10">
                          <p class="am-data">{{ $root.labels.note }}:</p>
                        </el-col>
                        <el-col :md="14" :sm="13">
                          <p class="am-value">{{ customer.note }}</p>
                        </el-col>
                      </el-row>

                    </el-col>

                  </el-row>
                </div>

              </el-collapse-item>
            </el-collapse>

          </div>
        </div>

        <!-- Selected Popover Delete -->
        <group-delete
            name="users/customers"
            :entities="customers"
            :checkGroupData="checkCustomerData"
            :confirmDeleteMessage="$root.labels.confirm_delete_customer"
            :successMessage="{single: $root.labels.customer_deleted, multiple: $root.labels.customers_deleted}"
            :errorMessage="{single: $root.labels.customer_not_deleted, multiple: $root.labels.customers_not_deleted}"
            @groupDeleteCallback="groupDeleteCallback"
        >
        </group-delete>

        <!-- Pagination -->
        <pagination-block
            :params="params"
            :count="options.filteredCount"
            :label="$root.labels.customers_lower"
            :visible="fetched && customers.length !== 0 && fetchedFiltered"
            @change="filterData"
        >
        </pagination-block>

        <!-- Content Spinner -->
        <div class="am-spinner am-section" v-show="!fetchedFiltered">
          <img :src="$root.getUrl+'public/img/spinner.svg'"/>
        </div>

      </div>

      <!-- Button New -->
      <div v-if="$root.settings.capabilities.canWrite === true" id="am-button-new" class="am-button-new">
        <el-button id="am-plus-symbol" type="primary" icon="el-icon-plus" @click="showDialogNewCustomer()"></el-button>
      </div>

      <!-- Dialog New Customer -->
      <transition name="slide">
        <el-dialog
            :close-on-click-modal="false"
            class="am-side-dialog"
            :visible.sync="dialogCustomer"
            :show-close="false"
            v-if="dialogCustomer">
          <dialog-customer
              :customer="customer"
              @saveCallback="updateCustomerCallback"
              @closeDialog="dialogCustomer = false"
          >
          </dialog-customer>
        </el-dialog>
      </transition>

      <DialogLite/>

      <!-- Help Button -->
      <el-col :md="6" class="">
        <a class="am-help-button" href="https://wpamelia.com/customers/" target="_blank">
          <i class="el-icon-question"></i> {{ $root.labels.need_help }}?
        </a>
      </el-col>

    </div>
  </div>
</template>

<script>
  import DialogCustomer from './DialogCustomer.vue'
  import DialogExport from '../parts/DialogExport.vue'
  import PageHeader from '../parts/PageHeader.vue'
  import imageMixin from '../../../js/common/mixins/imageMixin'
  import dateMixin from '../../../js/common/mixins/dateMixin'
  import notifyMixin from '../../../js/backend/mixins/notifyMixin'
  import checkMixin from '../../../js/backend/mixins/checkMixin'
  import customerMixin from '../../../js/backend/mixins/customerMixin'
  import GroupDelete from '../parts/GroupDelete.vue'
  import PaginationBlock from '../parts/PaginationBlock.vue'

  export default {

    mixins: [imageMixin, dateMixin, notifyMixin, checkMixin, customerMixin],

    data () {
      return {
        checkCustomerData: {
          toaster: false,
          allChecked: false
        },
        fetchedFiltered: false,
        customers: [],
        dialogExport: false,
        isIndeterminate: true,
        customer: null,
        fetched: false,
        params: {
          page: 1,
          sort: '',
          search: ''
        },

        exportParams: {
          fields: [
            {label: this.$root.labels.first_name, value: 'firstName', checked: true},
            {label: this.$root.labels.last_name, value: 'lastName', checked: true},
            {label: this.$root.labels.email, value: 'email', checked: true},
            {label: this.$root.labels.phone, value: 'phone', checked: true},
            {label: this.$root.labels.gender, value: 'gender', checked: true},
            {label: this.$root.labels.date_of_birth, value: 'birthday', checked: true},
            {label: this.$root.labels.customer_note, value: 'note', checked: true},
            {label: this.$root.labels.last_appointment, value: 'lastAppointment', checked: true},
            {label: this.$root.labels.total_appointments, value: 'totalAppointments', checked: true},
            {label: this.$root.labels.pending_appointments, value: 'pendingAppointments', checked: true}
          ]
        },
        exportAction: '',

        searchPlaceholder: this.$root.labels.customers_search_placeholder,
        timer: null,
        options: {
          filteredCount: 0,
          fetched: false,
          count: 0,
          sort: [
            {
              value: 'customer',
              label: this.$root.labels.name_ascending
            },
            {
              value: '-customer',
              label: this.$root.labels.name_descending
            },
            {
              value: 'last-appointment',
              label: this.$root.labels.last_appointment_ascending
            },
            {
              value: '-last-appointment',
              label: this.$root.labels.last_appointment_descending
            }
          ]
        }
      }
    },

    created () {
      this.fetchData()
    },

    mounted () {
      this.inlineSVG()
    },

    methods: {
      fetchData () {
        this.fetched = false
        this.getCustomers()
      },

      filterData () {
        this.fetchedFiltered = false
        this.getCustomers()
      },

      getCustomers () {
        Object.keys(this.params).forEach((key) => (!this.params[key]) && delete this.params[key])

        this.$http.get(`${this.$root.getAjaxUrl}/users/customers`, {
          params: this.params
        })
          .then(response => {
            let customers = response.data.data.users

            customers.forEach(function (cusItem) {
              cusItem.checked = false
            })

            this.customers = customers
            this.options.count = response.data.data.totalCount
            this.options.filteredCount = response.data.data.filteredCount
            this.fetched = true
            this.fetchedFiltered = true
          })
          .catch(e => {
            console.log(e.message)
            this.fetched = true
            this.fetchedFiltered = true
          })
      },

      showDialogNewCustomer () {
        this.customer = this.getInitCustomerObject()
        this.dialogCustomer = true
      },

      showDialogEditCustomer (id) {
        this.customer = this.customers[id]
        this.dialogCustomer = true
      },

      updateCustomerCallback () {
        this.dialogCustomer = false
        this.allChecked = false
        this.fetchData()
      },

      groupDeleteCallback () {
        this.checkCustomerData.allChecked = false
        this.checkCustomerData.toaster = false
        this.fetchData()
      }
    },

    computed: {
      filterApplied () {
        return !!this.params.search
      }
    },

    watch: {
      'params.search' () {
        if (typeof this.params.search !== 'undefined') {
          this.fetchedFiltered = false
          clearTimeout(this.timer)
          this.timer = setTimeout(this.filterData, 500)
        }
      }
    },

    components: {
      PageHeader,
      DialogCustomer,
      DialogExport,
      GroupDelete,
      PaginationBlock
    }

  }
</script>


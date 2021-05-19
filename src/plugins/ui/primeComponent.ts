import Sidebar from 'primevue/sidebar'
import Card from 'primevue/card'
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputSwitch from 'primevue/inputswitch'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import Toast from 'primevue/toast'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Dropdown from 'primevue/dropdown'
import Checkbox from 'primevue/checkbox'
import Dialog from 'primevue/dialog'
import ProgressSpinner from 'primevue/progressspinner'
import ProgressBar from 'primevue/progressbar'
import ConfirmPopup from 'primevue/confirmpopup'
import ConfirmDialog from 'primevue/confirmdialog'
import Paginator from 'primevue/paginator'
import BlockUI from 'primevue/blockui'
import Textarea from 'primevue/textarea'
import ColorPicker from 'primevue/colorpicker'
import InputNumber from 'primevue/inputnumber'
import OverlayPanel from 'primevue/overlaypanel'
import InputMask from 'primevue/inputmask'
import Calendar from 'primevue/calendar'
import ColumnGroup from 'primevue/columngroup'
import Row from 'primevue/row'
import { App } from 'vue'

export default {
  install: (app: App<Element>) => {
    app.component('Sidebar', Sidebar)
    app.component('Card', Card)
    app.component('Button', Button)
    app.component('DataTable', DataTable)
    app.component('Column', Column)
    app.component('ColumnGroup', ColumnGroup)
    app.component('InputSwitch', InputSwitch)
    app.component('TabView', TabView)
    app.component('TabPanel', TabPanel)
    app.component('Toast', Toast)
    app.component('InputText', InputText)
    app.component('Password', Password)
    app.component('Dropdown', Dropdown)
    app.component('Checkbox', Checkbox)
    app.component('Dialog', Dialog)
    app.component('ProgressSpinner', ProgressSpinner)
    app.component('ProgressBar', ProgressBar)
    app.component('ConfirmPopup', ConfirmPopup)
    app.component('ConfirmDialog', ConfirmDialog)
    app.component('Paginator', Paginator)
    app.component('Textarea', Textarea)
    app.component('BlockUI', BlockUI)
    app.component('ColorPicker', ColorPicker)
    app.component('InputNumber', InputNumber)
    app.component('OverlayPanel', OverlayPanel)
    app.component('InputMask', InputMask)
    app.component('Calendar', Calendar)
    app.component('Row', Row)
  }
}

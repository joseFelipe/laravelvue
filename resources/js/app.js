require("./bootstrap");

window.Vue = require("vue");
import Moment from "moment";
import { Form, HasError, AlertError } from "vform";
import VueProgressBar from "vue-progressbar";
import Swal from "sweetalert2";

window.swal = Swal;
window.Form = Form;

Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

import VueRouter from "vue-router";

Vue.use(VueRouter);

Vue.use(VueProgressBar, {
    color: "rgb(143, 255, 199)",
    failedColor: "red",
    height: "2px"
});

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: toast => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    }
});

window.Toast = Toast;

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);

const routes = [
    {
        path: "/dashboard",
        component: require("./components/Dashboard.vue").default
    },
    {
        path: "/profile",
        component: require("./components/Profile.vue").default
    },
    { path: "/users", component: require("./components/Users.vue").default }
];

const router = new VueRouter({
    mode: "history",
    routes
});

Vue.filter("upText", function(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
});

Vue.filter("date_formatted", function(date) {
    return Moment(date).format("DD/MM/YY");
});

const app = new Vue({
    el: "#app",
    router
});

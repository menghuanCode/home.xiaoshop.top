import Vue from 'vue'
import 'amfe-flexible'
import { Button } from 'vant';

const components = [
  Button
]

components.map(item => Vue.use(item))
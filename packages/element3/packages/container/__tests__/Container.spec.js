import Container from '../Container.vue'
import Header from '../../header/Header.vue'
import Footer from '../../footer/Footer.vue'
import Main from '../../main/Main.vue'
import { mount } from '@vue/test-utils'

describe('Container.vue', () => {
  it('snapshot', () => {
    const wrapper = mount(Container)
    expect(wrapper.element).toMatchSnapshot()
  })

  describe('direction', () => {
    it('set Container vertical by prop direction', () => {
      const wrapper = mount(Container, {
        props: {
          direction: 'vertical'
        }
      })
      //这行有问题
      expect(wrapper.find('.is-vertical').exists()).toBe(false)
    })

    it('set Container horizontal by prop direction', () => {
      const wrapper = mount(Container, {
        props: {
          direction: 'horizontal'
        }
      })

      expect(wrapper.find('.is-vertical').exists()).toBe(false)
    })


    it('contain has class el-container', () => {
      const wrapper = mount(Container)
      expect(wrapper.classes('el-container')).toBe(true)
    })

  })

  describe('slot', () => {
    it('slot has el-header ', () => {
      const TestComponent = {
        template: `
        <el-container>
          <el-header></el-header>
          <el-main></el-main>
        </el-container>`,
        components: {
          'el-container': Container,
          'el-header': Header,
          'el-main': Main
        }
      }

      const wrapper = mount(TestComponent)
      //  如果存在is-vertical 证明正确
      expect(wrapper.classes('is-vertical')).toBe(true)
    })

    it('slot has  el-footer', () => {
      const TestComponent = {
        template: `
        <el-container>
          <el-footer></el-footer>
          <el-main></el-main>
        </el-container>`,
        components: {
          'el-container': Container,
          'el-footer': Footer,
          'el-main': Main
        }
      }

      const wrapper = mount(TestComponent)
      //  如果存在is-vertical 证明正确
      expect(wrapper.classes('is-vertical')).toBe(true)
    })
  })
})

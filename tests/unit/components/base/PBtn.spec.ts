import { shallowMount } from '@vue/test-utils';
import PBtn from '@/components/base/PBtn.vue';

describe('Button Component', () => {

  it('"button" tag is rendered', () => {
    const wrapper = shallowMount(PBtn);
    expect(wrapper.find('button').exists());
  });

  it('Child text exists and equal', () => {
    const wrapper = shallowMount(PBtn, {
      slots: {
        default: 'text'
      }
    });
    expect(wrapper.text()).toEqual('text');
  });

  it('"a" tag when href prop is passed', () => {
    const wrapper = shallowMount(PBtn, {
      props: { href: '/' }
    });
    expect(wrapper.find('a').exists());
  });

  it('Loading spinner with loading prop', () => {
    const wrapper = shallowMount(PBtn, {
      props: { loading: true },
      slots: { default: 'text'}
    });

    expect(wrapper.find('svg').exists());
    expect(wrapper.find('div.ml-2').exists());
  });

  it('Expected "attrs" bind classes', () => {
    const wrapper = shallowMount(PBtn, {
      attrs: { class: 'test' }
    });

    expect(wrapper.classes().includes('test'));
  });

});

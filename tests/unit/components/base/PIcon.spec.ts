import { shallowMount } from '@vue/test-utils';
import PIcon from '@/components/base/PIcon.vue';


describe('PIcon Component', () => {

  it('Component render correctly', () => {
    const wrapper = shallowMount(PIcon, {
      props: { icon: 'linkedin' },
    });

    // Svg render
    expect(wrapper.find('svg').exists()).toBe(true);
    expect(wrapper.find('path').exists()).toBe(true);
  });

  it ('`icon` property required', () => {
    const wrapper = shallowMount(PIcon, {
      props: { icon: 'linkedin' },
    });

    expect(wrapper.vm.$options.props.icon.required).toBe(true);
  });

  it('', () => {
    const wrapper = shallowMount(PIcon, {
      props: { icon: 'propNotInOptions' },
    });

    expect(wrapper.find('path').exists()).toBe(false);
  });

});

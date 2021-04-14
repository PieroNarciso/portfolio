import { shallowMount } from '@vue/test-utils';

import PFabBtn from '@/components/base/PFabBtn.vue';

describe('PFabBtn component', () => {

  it('Component renders', () => {
    const wrapper = shallowMount(PFabBtn, {
      slots: { default: 'text' }
    });

    expect(wrapper.find('a').exists()).toBe(true);
    expect(wrapper.text()).toBe('text');
  });

  it('Pass class names by attributes', () => {
    const wrapper = shallowMount(PFabBtn);
    const wrapperClasses = shallowMount(PFabBtn, {
      attrs: { class: 'test1 test2'}
    });

    const classesBefore = wrapper.classes();
    const classesAfter = wrapperClasses.classes();

    expect(classesBefore.length+2).toEqual(classesAfter.length);
  });

});

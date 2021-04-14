import { shallowMount } from '@vue/test-utils';
import PTextarea from '@/components/base/PTextarea.vue';


describe('PInput Component', () => {

  it('Class passed by "$attrs"', () => {
    const wrapperDefault = shallowMount(PTextarea);
    const wrapper = shallowMount(PTextarea, {
      attrs: { class: 'test1 test2' },
    });

    const classesDefault = wrapperDefault.find('textarea').classes()
    const classesAdded = wrapper.find('textarea').classes()
  
    expect(classesAdded.includes('test1'));
    expect(classesAdded.includes('test2'));
    expect(classesDefault.length+2).toBe(classesAdded.length);
  });

});

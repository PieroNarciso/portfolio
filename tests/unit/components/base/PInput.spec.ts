import { shallowMount } from '@vue/test-utils';
import PInput from '@/components/base/PInput.vue';


describe('PInput Component', () => {

  it('Class passed by "$attrs"', () => {
    const wrapperDefault = shallowMount(PInput);
    const wrapper = shallowMount(PInput, {
      attrs: { class: 'test1 test2' }
    });

    const classesDefault = wrapperDefault.find('input').classes()
    const classesAdded = wrapper.find('input').classes()
  
    expect(classesAdded.includes('test1'));
    expect(classesAdded.includes('test2'));
    expect(classesDefault.length+2).toBe(classesAdded.length);
  });

});

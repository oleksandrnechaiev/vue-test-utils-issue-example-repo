import { describe, it, expect } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';
import AComponent from './AComponent.vue';

describe('AComponent', () => {
    it('should render', () => {
        // const aComponent = shallowMount(AComponent)
        const aComponent = mount(AComponent, {
            shallow: true,
            // global: {
            //     stubs: {
            //         BComponent: true,
            //     },
            // },
        });
        console.log(aComponent.html());
        expect(true).toBe(true);
    });
});

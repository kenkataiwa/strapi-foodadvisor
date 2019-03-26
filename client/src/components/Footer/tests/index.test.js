import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import { enzymeFind } from 'styled-components/test-utils';

import Footer from '../index';

describe('<Footer />', () => {
  it('should not crash', () => {
    shallow(<Footer />);
  });

  it('should render some links', () => {
    const props = {
      links: [
        {
          name: 'test',
        },
      ],
    };
    const wrapper = shallow(<Footer {...props} />);
    const links = wrapper.find(Link);

    expect(links).toHaveLength(1);
  });

  it('should add a "main-link" className if the link name is Favorites', () => {
    const props = {
      links: [
        {
          name: 'test',
        },
        {
          name: 'Favorites',
        },
      ],
    };
    const wrapper = shallow(<Footer {...props} />);
    const links = wrapper.find(Link);

    expect(links).toHaveLength(2);
    expect(links.last().prop('className')).toContain('main-link');
  });

  it('should use the defaultProps', () => {
    const {
      defaultProps: { onChange, onSubmit },
    } = Footer;

    expect(onChange).toBeDefined();
    expect(onChange()).toBe(undefined);
    expect(onSubmit).toBeDefined();
    expect(onSubmit({ preventDefault: jest.fn() })).toBe(undefined);
  });
});

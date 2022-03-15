import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom"
import { SearchScreen } from "../../components/search/SearchScreen"


describe('Tests on <SearchScreen />', () => { 
  
  test('should show default values correctly', () => { 
    
    const wrapper = mount(
      <MemoryRouter initialEntries={ ['/search'] }>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect( wrapper.find('.rounded-lg').text().trim() ).toBe('Search a hero');

   });
 })
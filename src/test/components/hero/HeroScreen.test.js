import { MemoryRouter, Routes, Route } from "react-router-dom";
import { mount } from "enzyme";
import { HeroScreen } from "../../../components/hero/HeroScreen";


const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}))

describe('Tests on <HeroScreen />', () => { 
  
  test('should not show HeroScreen if there is no hero in URL', () => { 
    
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/hero' ]} >
        <Routes>
        <Route path="/hero" element={<HeroScreen />} />
        <Route path='/' element={ <h1>No hero page</h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect( wrapper.find('h1').text().trim() ).toBe('No hero page');

   });
  
  test('should show hero if parameter exists and it is found', () => { 
    
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/hero/marvel-spider' ]} >
        <Routes>
        <Route path="/hero/:heroId" element={<HeroScreen />} />
        <Route path='/' element={ <h1>No hero page</h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect( wrapper.find('.flex-row').exists() ).toBe( true );

   });

   test('should return last screen', () => { 
     
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/hero/marvel-spider' ]} >
        <Routes>
        <Route path="/hero/:heroId" element={<HeroScreen />} />
        </Routes>
      </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();
    expect( mockNavigate ).toHaveBeenCalledWith(-1);

    });

    test('should show the default page if hero does not exist', () => { 
    
      const wrapper = mount(
        <MemoryRouter initialEntries={[ '/hero/marvel-spider5464484684545' ]} >
          <Routes>
          <Route path="/hero/:heroId" element={<HeroScreen />} />
          <Route path='/' element={ <h1>No hero page</h1>} />
          </Routes>
        </MemoryRouter>
      );
  
      expect( wrapper.text() ).toBe( 'No hero page');
  
     });

 });
import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { PrivateRoute } from "../../routes/PrivateRoute";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: () => <span>Back</span>
}))


describe('Tests on <PrivateRoute />', () => { 

  Storage.prototype.setItem = jest.fn();
  
  test('should show component if is authenticated and save it in localStorage', () => { 
    
    const contextValue = {
      user: {
        name: 'Patts',
        logged: true
      }
    };

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue } >
        <MemoryRouter initialEntries={[ '/' ]} >
          <PrivateRoute>
            <h1>Private Component</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( wrapper.text().trim() ).toBe('Private Component');
    expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/");
    
   });

   test('should hide component if does not authenticated', () => { 
     
    const contextValue = {
      user: {
        logged: false
      }
    };

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue } >
        <MemoryRouter initialEntries={[ '/' ]} >
          <PrivateRoute>
            <h1>Private Component</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( wrapper.text().trim() ).toBe( 'Back' );

    })
 })
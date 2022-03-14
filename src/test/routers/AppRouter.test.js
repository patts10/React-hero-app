import { AppRouter } from "../../routes/AppRouter";
import { mount } from 'enzyme'
import { AuthContext } from "../../auth/authContext";



describe('Pruebas en <AppRouter />', () => { 
  
  test('should show login view if user is not authenticated', () => { 
    
    const contextValue = {
      user: {
        logged: false
      }
    };
    const wrapper = mount(
      <AuthContext.Provider value={ contextValue } >
        <AppRouter />
      </AuthContext.Provider>
      );

      expect( wrapper ).toMatchSnapshot();
      expect( wrapper.find('.login').text().trim() ).toBe( 'Login' );

   });
  
  test('should show Marvel component if user is authenticated', () => { 
    
    const contextValue = {
      user: {
        logged: true,
        name: 'Patts'
      }
    };
    const wrapper = mount(
      <AuthContext.Provider value={ contextValue } >
        <AppRouter />
      </AuthContext.Provider>
      );

      expect( wrapper ).toMatchSnapshot();
      expect( wrapper.find('.navbar').exists() ).toBe( true );

   });

 });
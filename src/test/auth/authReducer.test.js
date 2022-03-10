import { authReducer } from "../../auth/authReducer";
import { types } from '../../types/types'; 


describe('Tests on authReducer', () => { 
  
  test('should return the default state', () => { 
    
    const state = authReducer( { logged: false }, {} );
    expect(state).toEqual({ logged: false });

   });

   test('should authenticate and save user name', () => { 
     
    const action= {
      type: types.login,
      payload: {
        name: 'Patts'
      }
    };

    const state = authReducer( { logged: false }, action );
    expect( state ).toEqual( {
      name: 'Patts',
      logged: true
    } );
    });

    test('should delete use name and set logged in false', () => { 
      
      const action = {
        type: types.logout
      };

      const state = authReducer( { name: 'Patts', logged: true }, action );
      
      expect(state).toEqual({ logged: false });
     })
 });
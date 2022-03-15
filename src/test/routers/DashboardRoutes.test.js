import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { DashboardRoutes } from "../../routes/DashboardRoutes";

describe("Tests on <DashboardRoutes />", () => {

  const contextValue = {
    user: {
      logged: true,
      name: "Patts",
    }
  };

  test("should show Marvel's component correctly", () => {

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={ ['/'] }>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect( wrapper ).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Patts');
    expect( wrapper.find('h1').text().trim() ).toBe('MarvelScreen');

  });

  test("should show Dc's component correctly", () => {

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={ ['/dc'] }>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('h1').text().trim() ).toBe('DCScreen');

  });
});

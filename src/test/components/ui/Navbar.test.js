import { mount } from "enzyme";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import { Navbar } from "../../../components/ui/NavBar";
import { types } from "../../../types/types";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Tests on <Navbar />", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      name: "Patts",
      logged: true
    }
  };
  const wrapper = mount(
    <AuthContext.Provider value={ contextValue }>
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route  path='/' element={<Navbar />} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test("should show correctly", () => {

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".text-info").text().trim()).toBe("Patts");
  });

  test("should call logout, call navigate and dispatch with args", () => {

    wrapper.find("button").simulate("click");
    expect( contextValue.dispatch ).toHaveBeenCalled();
    expect( contextValue.dispatch ).toHaveBeenCalledWith({'type': types.logout});
    expect( mockNavigate ).toHaveBeenCalled();
    expect( mockNavigate ).toHaveBeenCalledWith("/login", {"replace": true});
    // expect('handleLogout').toHaveBeenCalled();
  });
});

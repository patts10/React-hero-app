import { MemoryRouter, Routes, Route } from "react-router-dom";
import { mount } from "enzyme";
import { AuthContext } from "../../../auth/authContext";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { types } from "../../../types/types";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Tests on <LoginScreen />", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      name: "Jona",
      logged: true,
    },
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={["/login"]}>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test("should match with snapshot", () => {

    const handleClick = wrapper.find(".login").prop("onClick");
    handleClick();

    expect(wrapper).toMatchSnapshot();
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      payload: { name: "Patts" },
      type: types.login,
    });
    expect(mockNavigate).toHaveBeenCalledWith("/marvel", { replace: true });

    localStorage.setItem("lastPath", "/dc");
    handleClick();
    expect(mockNavigate).toHaveBeenCalledWith("/dc", { replace: true });
  });
});

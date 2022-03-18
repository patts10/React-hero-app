import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { SearchScreen } from "../../../components/search/SearchScreen";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () =>({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}))

describe("Tests on <SearchScreen />", () => {
  test("should show default values correctly", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".rounded-lg").text().trim()).toBe("Search a hero");
  });

  test("should show Batman and input value to be equal queryString", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("input").prop("value")).toBe("batman");
  });

  test("should show error if here is not found", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman123"]}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wrapper.find(".alert-danger").exists()).toBe(true);
    expect(wrapper.find(".alert-danger").text()).toBe(
      "There is no results: batman123"
    );
  });

  test("should call navigate to new screen", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchScreen />
      </MemoryRouter>
    );

    wrapper.find('input').simulate('change', {
      target: {
        name: "searchText",
        value: "batman",
      }
    });

    wrapper.find('form').prop('onSubmit')({
      preventDefault: () => {}
    });

    expect( mockNavigate ).toHaveBeenCalled();
    expect( mockNavigate ).toHaveBeenCalledWith('?q=batman');
  });
});

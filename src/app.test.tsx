import React from "react";
import { mount } from "enzyme";
import * as RRD from "react-router-dom";
import App from "./app";
import "./setupTests";
import { AuthContext } from "./provider/auth";
import ProfilePage from "./pages/profile/profilePage";
import LoginPage from "./pages/login/loginPage";

describe("Routing", () => {
  beforeEach(() => {
    jest
      .spyOn(RRD, "BrowserRouter")
      .mockImplementation(
        ({ children }: any) => React.createElement("div", null, children) as any
      );
  });

  it("should render profile page when user is authorized ", () => {
    const component = mount(
      <RRD.MemoryRouter initialEntries={["/"]}>
        <AuthContext.Provider
          value={{
            isAuthorized: () => true,
            loginUser: () => Promise.reject(),
          }}
        >
          <App />
        </AuthContext.Provider>
      </RRD.MemoryRouter>
    );

    expect(component.find(ProfilePage).length).toBe(1);
  });

  it("should render login page when user is not authorized ", () => {
    const component = mount(
      <RRD.MemoryRouter initialEntries={["/"]}>
        <AuthContext.Provider
          value={{
            isAuthorized: () => false,
            loginUser: () => Promise.reject(),
          }}
        >
          <App />
        </AuthContext.Provider>
      </RRD.MemoryRouter>
    );

    expect(component.find(LoginPage).length).toBe(1);
  });

  it("should redirect from profile to login page when user is not authorized ", () => {
    const component = mount(
      <RRD.MemoryRouter initialEntries={["/profile"]}>
        <AuthContext.Provider
          value={{
            isAuthorized: () => false,
            loginUser: () => Promise.reject(),
          }}
        >
          <App />
        </AuthContext.Provider>
      </RRD.MemoryRouter>
    );

    expect(component.find(LoginPage).length).toBe(1);
  });
});

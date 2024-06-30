/*/// <reference types="Cypress" />

describe("Rest API Test with Cypress", () => {
  const baseUrl = "https://jsonplaceholder.typicode.com/";
  const empUrl = "http://dummy.restapiexample.com/api/v1/";

  it("API Test — Validate Headers", () => {
    cy.request(baseUrl.concat("users/3")).as("user");
    cy.get("@user")
      .its("headers")
      .its("content-type")
      .should("include", "application/json; charset=utf-8");
  });

  it("API Test — Validate statuscode", () => {
    cy.request(baseUrl.concat("users/3")).as("user");
    cy.get("@user").its("status").should("equals", 200);
  });

  it("API Test — Create user", () => {
    var user = {
      id: 11,
      name: "Marcelo",
      email: "email@gmail.com",
    };
    cy.request("POST", baseUrl.concat("users"), user).then((response) => {
      expect(response.status).equal(201);
      expect(response.body.id).equal(user.id);
      expect(response.body.name).equal(user.name);
      expect(response.body.email).equal(user.email);
    });
    cy.request("POST", baseUrl.concat("users"), user)
      .its("body")
      .should("include", { name: "Marcelo" });
  });

  it("API Test - Update user", () => {
    const user1 = {
      name: "Marcelo",
      email: "marcelo@gmail.com",
    };
    cy.request("PUT", baseUrl.concat("users/1"), user1).then((response) => {
      expect(response.status).equal(200);
      expect(response.body.name).equal(user1.name);
      expect(response.body.email).equal(user1.email);
    });
    cy.request("PUT", baseUrl.concat("users/1"), user1)
      .its("body")
      .should("include", { email: "marcelo@gmail.com" });
  });
});
*/
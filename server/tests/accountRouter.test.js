const app = require("../app");
const User = require("../models/User");
const request = require("supertest");
const {
  setupMemoryServer,
  tearDownMemoryServer,
  resetMemoryServer
} = require("./utils");

beforeAll(setupMemoryServer);
afterAll(tearDownMemoryServer);
beforeEach(resetMemoryServer);

const getSignUpResponse = async user => {
  return await request(app)
    .post("/api/account/signup")
    .send(user);
};

const getSignInResponse = async user => {
  return await request(app)
    .post("/api/account/signin")
    .send(user);
};

describe("POST /api/account/signup", () => {
  test("should return response status 201 and store in database if req body is valid", async () => {
    const testUser = { username: "testuser", password: "123456" };
    const response = await getSignUpResponse(testUser);
    const users = await User.find({ username: "testuser" });

    expect(response.status).toBe(201);
    expect(users.length).toBe(1);
    expect(response.headers["set-cookie"]).toBeDefined();
  });

  test("should return status 400 if username/password is not supplied", async () => {
    const noNameUser = { username: "", password: "12345" };
    const noPasswordUser = { username: "nopassword", password: "" };

    let response = await getSignUpResponse(noNameUser);
    expect(response.status).toBe(400);
    response = await getSignUpResponse(noPasswordUser);
    expect(response.status).toBe(400);

    const users = await User.find();
    expect(users.length).toBe(0);
  });

  test("should return status 400 is username already exist", async () => {
    const user = { username: "common", password: "000000" };
    await getSignUpResponse(user);
    const response = await getSignUpResponse(user);

    expect(response.status).toBe(400);
  });
});

describe("POST /api/account/signin", () => {
  test("should return status 200 with jwt token in cookie if valid", async () => {
    const user = { username: "username", password: "password" };
    await getSignUpResponse(user);

    const response = await getSignInResponse(user);
    expect(response.status).toBe(200);
    expect(response.headers["set-cookie"]).toBeDefined();
  });

  test("should fail if username/pass is invalid", async () => {
    const signupacc = { username: "signup", password: "password" };
    await getSignUpResponse(signupacc);

    let response = await getSignInResponse({
      username: "wrong",
      password: "password"
    });
    expect(response.status).toBe(401);
    response = await getSignInResponse({
      username: signupacc.username,
      password: "wrongpass"
    });
    expect(response.status).toBe(401);
    expect(response.headers["set-cookie"]).toBeUndefined();
  });
});

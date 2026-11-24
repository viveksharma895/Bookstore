const swaggerSpec = {
  openapi: "3.0.3",
  info: {
    title: "Book Store API",
    version: "1.0.0",
    description: "API documentation for the bookstore backend.",
  },
  servers: [
    {
      url: "http://localhost:4000",
      description: "Local development server",
    },
  ],
  tags: [
    { name: "Books", description: "Book catalogue" },
    { name: "Users", description: "Signup and login" },
  ],
  paths: {
    "/": {
      get: {
        summary: "Health check",
        responses: {
          200: {
            description: "Backend is running",
            content: {
              "text/plain": { example: "Book Store Backend" },
            },
          },
        },
      },
    },
    "/books": {
      get: {
        tags: ["Books"],
        summary: "Get all books",
        responses: {
          200: {
            description: "List of books",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Book" },
                },
              },
            },
          },
          500: {
            description: "Server error",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Error" },
              },
            },
          },
        },
      },
    },
    "/users/signup": {
      post: {
        tags: ["Users"],
        summary: "Create a new user",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/SignupRequest" },
            },
          },
        },
        responses: {
          201: {
            description: "User created successfully",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/UserResponse" },
              },
            },
          },
          400: {
            description: "Missing fields or email already registered",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Error" },
              },
            },
          },
          500: {
            description: "Server error",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Error" },
              },
            },
          },
        },
      },
    },
    "/users/login": {
      post: {
        tags: ["Users"],
        summary: "Log in with email and password",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/LoginRequest" },
            },
          },
        },
        responses: {
          200: {
            description: "Login successful",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/UserResponse" },
              },
            },
          },
          400: {
            description: "Missing fields or invalid credentials",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Error" },
              },
            },
          },
          500: {
            description: "Server error",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Error" },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Book: {
        type: "object",
        properties: {
          name: { type: "string", example: "The Law of Attraction" },
          price: { type: "number", example: 0 },
          category: { type: "string", example: "Free" },
          image: {
            type: "string",
            example: "https://example.com/book-cover.jpg",
          },
          title: { type: "string", example: "The Law of Attraction" },
        },
      },
      SignupRequest: {
        type: "object",
        required: ["fullname", "email", "password"],
        properties: {
          fullname: { type: "string", example: "Test User" },
          email: { type: "string", format: "email", example: "test@example.com" },
          password: { type: "string", format: "password", example: "secret123" },
        },
      },
      LoginRequest: {
        type: "object",
        required: ["email", "password"],
        properties: {
          email: { type: "string", format: "email", example: "test@example.com" },
          password: { type: "string", format: "password", example: "secret123" },
        },
      },
      User: {
        type: "object",
        properties: {
          id: { type: "string", example: "65a7f1c2d3e4b5a6f7c8d9e0" },
          fullname: { type: "string", example: "Test User" },
          email: { type: "string", example: "test@example.com" },
        },
      },
      UserResponse: {
        type: "object",
        properties: {
          message: { type: "string", example: "User created successfully" },
          user: { $ref: "#/components/schemas/User" },
        },
      },
      Error: {
        type: "object",
        properties: {
          message: { type: "string", example: "Invalid email or password" },
        },
      },
    },
  },
};

export default swaggerSpec;

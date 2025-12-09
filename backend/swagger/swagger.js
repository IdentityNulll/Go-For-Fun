// // swagger.js
// const swaggerJsdoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");

// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Game Management System API",
//       version: "1.0.0",
//       description: "Game Management System uchun to'liq API hujjatlari",
//       contact: {
//         name: "API Support",
//         email: "support@gamemanagement.uz",
//       },
//     },
//     servers: [
//       {
//         url: "http://localhost:3000",
//         description: "Development server",
//       },
//       {
//         url: "https://api.gamemanagement.uz",
//         description: "Production server",
//       },
//     ],
//     components: {
//       securitySchemes: {
//         bearerAuth: {
//           type: "http",
//           scheme: "bearer",
//           bearerFormat: "JWT",
//           description: "JWT token kiriting (login dan keyin olinadi)",
//         },
//       },
//       schemas: {
//         Error: {
//           type: "object",
//           properties: {
//             message: { type: "string" },
//             errors: { type: "array", items: { type: "object" } },
//           },
//         },
//       },
//     },
//     tags: [
//       { name: "Auth", description: "Autentifikatsiya" },
//       { name: "Admin", description: "Admin API" },
//       { name: "Organizer", description: "Organizer API" },
//       { name: "Player", description: "Player API" },
//       { name: "Notifications", description: "Xabarlar API" },
//     ],
//   },
//   apis: ["./routes/*.js"],
// };

// const specs = swaggerJsdoc(options);

// module.exports = { specs, swaggerUi };




















// swagger.js - TO'LIQ TUZATILGAN VERSIYA
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Game Management System API',
      version: '1.0.0',
      description: 'Game Management System uchun to\'liq API hujjatlari',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      },
      schemas: {
        Error: {
          type: 'object',
          properties: {
            message: { type: 'string' },
            errors: { type: 'array', items: { type: 'object' } }
          }
        }
      }
    },
    // MUHIM: Global security yo'q, har bir endpoint o'zida belgilaydi
    tags: [
      { name: 'Auth', description: 'Autentifikatsiya - Token olish' },
      { name: 'Admin', description: 'Admin API' },
      { name: 'Organizer', description: 'Organizer API' },
      { name: 'Player', description: 'Player API' },
      { name: 'Notifications', description: 'Xabarlar API' }
    ]
  },
  apis: ['./routes/*.js']
};

const specs = swaggerJsdoc(options);

const customCss = `
  .swagger-ui .topbar { display: none }
  .swagger-ui .info .title { color: #3b82f6; font-size: 32px; }
  .swagger-ui .btn.authorize { 
    background-color: #10b981; 
    border-color: #10b981;
    color: white;
  }
  .swagger-ui .btn.authorize svg { fill: white }
  .swagger-ui .auth-wrapper { margin-top: 20px; }
`;

const swaggerOptions = {
  customCss,
  customSiteTitle: "Game Management API",
  swaggerOptions: {
    persistAuthorization: true,
    displayRequestDuration: true,
    filter: true,
    tryItOutEnabled: true,
    // MUHIM: Request interceptor
    requestInterceptor: (req) => {
      console.log('Swagger Request:', req.url);
      console.log('Headers:', req.headers);
      return req;
    }
  }
};

module.exports = { 
  specs, 
  swaggerUi,
  swaggerOptions 
};
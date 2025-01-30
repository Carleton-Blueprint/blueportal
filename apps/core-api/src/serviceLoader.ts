//import services from './services.json';
//import path from 'path';
import { Application } from 'express';

export const loadServices = (app: Application) => {
//   const servicesDir = path.join(__dirname, '../services');
  const services = {
    "email-api": "@blueportal/email-api",
    // "service-2": "@blueportal/service-2"
  }
  if (Object.keys(services).length < 1) {
    console.log('No services found.');
    return;
  }
  //console.log(services)
  const service = require(services["email-api"]);
  app.use(`/api/${service.default.name}`, service.default.router);
  console.log(`Registered service: ${service.default.name} at /api/${service.default.name}`);

  // Scan the `services` directory
//   fs.readdirSync(servicesDir).forEach((serviceName) => {
//     const servicePath = path.join(servicesDir, serviceName, 'meta.ts');

//     if (fs.existsSync(servicePath)) {
//       const service = require(servicePath).default;

//       // Register the service's router dynamically
//       app.use(`/api/${service.name}`, service.router);
//       console.log(`Registered service: ${service.name}`);
//     } else {
//       console.warn(`No metadata found for service: ${serviceName}`);
//     }
//   });
};

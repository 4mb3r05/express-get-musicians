// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");


describe("GET /musicians endpoint", () => {
    test("returns a list of musicians", async () => {
      const response = await request(app).get("/musicians");
  
      expect(response.statusCode).toBe(200);
  
      const musicians = JSON.parse(response.text);
  
      expect(Array.isArray(musicians)).toBe(true);
  
    });
    
  });
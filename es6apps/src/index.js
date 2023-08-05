import { message, name, rating, isActive, skills } from "./util/greeter.js";
import CustomerService from "./services/customer.service.js";

console.log(message, name, rating, isActive, skills)
let customerService = new CustomerService()
console.log(customerService.findAll())
import { makeObservable, observable, action, computed } from "mobx";
import taxes from "../taxes.json";

class SignUp {
  constructor() {
    makeObservable(this, {
      province: observable,
      updateProvince: action,
      vehicle: observable,
      updateVehicle: action,
      price: observable,
      updatePrice: action,
      result: computed,
    });
  }

  province = "";
  vehicle = "";
  price = "";

  updateProvince = (province) => {
    this.province = province;
  };

  updateVehicle = (vehicle) => {
    this.vehicle = vehicle;
  };

  updatePrice = (price) => {
    this.price = price;
  };

  get result() {
    const provinceTax = taxes[this.province.toLocaleLowerCase()]?.applicable;
    const vehiclePrice = Number(this.price);
    const vehicleTaxLimit =
      this.vehicle.toLocaleLowerCase() === "boat" ? 250000 : 100000;
    const highLux = (vehiclePrice - vehicleTaxLimit) * 0.2;
    const lowLux = vehiclePrice * 0.1;

    let vehicleLuxTax = 0;

    if (vehiclePrice < vehicleTaxLimit) {
      vehicleLuxTax = 0;
    } else {
      if (highLux < lowLux) {
        vehicleLuxTax = highLux;
      } else {
        vehicleLuxTax = lowLux;
      }
    }
    const vehicleTax = vehicleLuxTax + vehiclePrice * provinceTax;

    const totalPrice = vehicleLuxTax + vehiclePrice + vehicleTax;

    return {
      subtotal: vehiclePrice,
      luxtax: vehicleLuxTax,
      tax: vehicleTax,
      total: totalPrice,
      highLux,
      lowLux,
    };
  }
}

const SignUpClass = new SignUp();

export default SignUpClass;

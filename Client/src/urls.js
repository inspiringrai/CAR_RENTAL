import configurations from "./configurations";

export const createCustomerUrl = `${configurations.serverUrl}/customer/signup`;
export const userSignInUrl = `${configurations.serverUrl}/user/signin`;
export const getCarsUrl = `${configurations.serverUrl}/user/getCars`;
export const editCarsUrl = `${configurations.serverUrl}/admin/updateCar`;
export const addCarUrl = `${configurations.serverUrl}/admin/addCar`;
export const getCarsAvailableUrl = `${configurations.serverUrl}/customer/getAvailableCars`;
export const makeBookingUrl = `${configurations.serverUrl}/customer/makeBooking`
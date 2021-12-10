import { API_URL, API_KEY } from "../constants";
import { TCarStatus, TDriverStatus, TCar, TDriver } from '../types/index';

async function getData(url: string, options: Record<string, unknown> = {}) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Authorization': API_KEY,
        'Content-Type': 'application/json',
      },
      ...options
    });

    const { data } = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

async function postData(url: string, body: Record<string, unknown>) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'X-Authorization': API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
    const { data } = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

async function deleteData(url: string) {
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'X-Authorization': API_KEY,
        'Content-Type': 'application/json',
      }
    })
    const { data } = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

async function changeData(url: string, body: Record<string, unknown>) {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'X-Authorization': API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const { data } = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

async function patchData(url: string, body: Partial<Record<string, unknown>>) {
  try {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'X-Authorization': API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const { data } = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export const getCars = (): Promise<TCar[]> => getData(`${API_URL}/car/`);

export const getDrivers = (): Promise<TDriver[]> => getData(`${API_URL}/driver/`);

export const getStatusDrivers = (): Promise<TDriverStatus[]> => getData(`${API_URL}/driver-status/`);

export const getStatusCars = (): Promise<TCarStatus[]> => getData(`${API_URL}/car-status/`);

export const deleteDriver = (id: number): Promise<void> => deleteData(`${API_URL}/driver/${id}/`);

export const deleteCar = (id: number): Promise<void> => deleteData(`${API_URL}/car/${id}/`);

export const getDriverCars = (id: number): Promise<TCar[]> => getData(`${API_URL}/car/`, {
  headers: {
    'X-Authorization': API_KEY,
    'Content-Type': 'application/json',
    'E-Driver-Id': id,
  }
});

export const patchDriver = (id: number, body: Partial<Omit<TDriver, 'id'>>): Promise<TDriver> => patchData(`${API_URL}/driver/${id}/`, body);

export const patchCar = (id: number, body: Partial<Omit<TCar, 'id'>>): Promise<TCar> => patchData(`${API_URL}/driver/${id}/`, body);

export const putCar = (id: number, body: Omit<TCar, 'id'>): Promise<TCar> => changeData(`${API_URL}/car/${id}/`, body);

export const putDriver = (id: number, body: Omit<TDriver, 'id'>): Promise<TDriver> => changeData(`${API_URL}/driver/${id}/`, body);

export const addDriver = (body: Omit<TDriver, 'id'>): Promise<TDriver> => postData(`${API_URL}/driver/`, body);

export const addCar = (body: Omit<TCar, 'id'>): Promise<TCar> => postData(`${API_URL}/car/`, body);

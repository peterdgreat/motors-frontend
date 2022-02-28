import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

const reserveMotors = async (motor) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/v1/reservations`, motor);
    return { status: response.status, motor: response.data };
  } catch (error) {
    return { status: error.response.status, ...error.response.data };
  }
};

export default reserveMotors;

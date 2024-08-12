import axios from 'axios';

const API_URL = 'http://localhost:3001';

// Fetch user data
export const getData = async () => await axios.get(`${API_URL}/users`,{});

// Add new user
export const postData = async (name, email, password, role) => {
    console.log(role)
    console.log(name)
    const { data: edata } = await getData();
    const newid = Math.max(...edata.map(user => user.id), 0) + 1;
    const ND = {
        username: name,
        email: email,
        password: password,
        role: role,
        id: newid,
    };
    await axios.post(`${API_URL}/users`, ND);
};

// Fetch user data
export const showData = async () => {
    const res = await axios.get(`${API_URL}/users`);
    return res.data;
};

// Update user data
export const updateData = async (id, updatedUser) => {
    await axios.put(`${API_URL}/users/${id}`, updatedUser);
};

// Delete user data
export const deleteData = async (id) => {
    await axios.delete(`${API_URL}/users/${id}`);
};

// Fetch user data by ID
export const getUserData = async (id) => {
    const res = await axios.get(`${API_URL}/UserData/${id}`);
    return res.data;
};

// Update user password
export const setNewUserPassword = async (id, updatedUser) => {
    await axios.put(`${API_URL}/UserData/${id}`, updatedUser);
};

// Update user plans
export const updateUserPlans = async (id, updatedPlans) => {
    const user = await getUserData(id);
    if (!user.Plans) {
        user.Plans = [];
    }
    await axios.patch(`${API_URL}/UserData/${id}`, { Plans: updatedPlans });
};

// Fetch inventory data
export const showInventory = async () => {
    return await axios.get(`${API_URL}/products`);
};

// Fetch inventory data
export const getInventoryData = async () => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
};

// Add product to inventory
export const addProductToInventory = async (product) => {
    console.log(product)
    try {
        await axios.post(`${API_URL}/products`, product);
    } catch (error) {
        console.error('Error adding product to inventory:', error);
    }
};

// Update inventory data
export const updateInventory = async (id, updatedValue) => {
    await axios.put(`${API_URL}/products/${id}`, updatedValue);
};

// Fetch order details
export const showOrderDetails = async () => {
    try {
        const response = await axios.get(`${API_URL}/Orders`);
        return response.data;
    } catch (error) {
        console.error('Error fetching order details:', error);
        return []; // Return an empty array in case of error
    }
};

// Add order details
export const addOrderDetails = async (order) => {
    try {
        await axios.post(`${API_URL}/Orders`, order);
    } catch (error) {
        console.error('Error adding order details:', error);
    }
};
// ... other imports and functions

// Delete product from inventory
export const deleteProductFromInventory = async (id) => {
    try {
        await axios.delete(`${API_URL}/products/${id}`);
        
    } catch (error) {
        console.error('Error adding order details:', error);
        
    }
};


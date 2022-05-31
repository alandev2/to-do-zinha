import api from './api';   

export const authRegister = async (username) => {
    const response = await api("auth/register", {
        method: 'POST',
        data: {
            username,
        }
    })
    return response;
};


export const authLogin = async (username) => {
    const response = await api("auth/login", {
        method: 'POST',
        data: {
            username,
        }
    });
    return response.data.token;
};


// --------------------------- TASKS

export const createTask = async (token, values) => {
    const response = await api("tasks", {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        data: {
            title: values.title,
            description: values.description,
            status: false,
        }
    });
    return response;
};

export const fetchTask = async (token) => {
    const response = await api("tasks", {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response;
};

export const editTask = async (token, values, taskId) => {
    const response = await api(`tasks/${taskId}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        data: {
            title: values.title,
            description: values.description,
            status: values.status,
        }
    });
    return response;
};

export const deleteTask = async (token, taskId) => {
    const response = await api(`tasks/${taskId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response;
};
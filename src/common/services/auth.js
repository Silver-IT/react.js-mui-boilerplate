export default {
    login: async (email, password) => {
        return new Promise(resolve => {
            if (email === "admin@admin.com") {
                resolve("token-for-admin");
            } else {
                resolve("token-for-customer");
            }
        });
    },
    verifyJWT: async (token) => {
        return new Promise(resolve => {
            if (token === "token-for-admin") {
                resolve({
                    email: "admin@admin.com",
                    role: "ADMIN"
                });
            } else {
                resolve({
                    email: "test@test.com",
                    role: "CUSTOMER"
                });
            }
        });
    }
};

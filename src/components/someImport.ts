// This is executed
const { config1, config2 } = JSON.parse(import.meta.env.PUBLIC_CONFIG);

// This is executed
console.log({ config1, config2 }, 'in the someImport.ts');

export const getSomething = (params) => {
    return apiClient.get('/somepath', { params });
};

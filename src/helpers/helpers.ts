export const func = () => console.log("1");
export const setCorrectModel = (data: any) => {
    return {
        id: data.id,
        firstName: data.name.split(" ")[0],
        lastName: data.name.split(" ")[1],
        website: data.website,
        companyName: data.company.name,
        email: data.email,
        posts: [],
    };
};

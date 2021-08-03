const filter = (inputSearch,data)=>data.filter(value=> {
    const regex = new RegExp(`^${inputSearch}`);
    return regex.test(value)
   
});
module.exports = filter;




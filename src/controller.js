const axios = require('axios');
require('dotenv').config();

const token = process.env.NODE_API_TOKEN;
const config = {
    headers: {
        contentType: "application/json;charset=utf-8", 
        Authorization: `Bearer ${token}`,
    }
};

createBorrower = async(req,res) =>{
    try{
        const url = `https://dev.orca.accialcapital.com/api/integration/borrowers`;
        const headers = config;
        const data = req.body;
        await axios.post(url,data,headers).then(result=>{
            console.log(result);
            return res.json(result?.data);
        }).catch(err=>{
            console.log(err?.response);
            return res.status(400).send(err?.response);
        });
    }catch(err){
        return res.status(400).send(err);
    }
}

createApplication = async(req,res)=>{
    try{
        const borrowerId = req.params.borrowerId;
        const url = `https://dev.orca.accialcapital.com/api/integration/borrowers/${borrowerId}/applications`;
        const headers = config;
        const data = req.body;
        await axios.post(url, data,headers).then(result=>{
            console.log(result);
            return res.json(result?.data);
        }).catch(err=>{
           console.log(err);
        }); 
    }catch(err){
        console.log(err);
    }
};

createLoan = async(req,res)=>{
    try{
        const url = `https://dev.orca.accialcapital.com/api/integration/loans`;
        const headers = config;
        const data = req.body;
        await axios.post(url,data,headers).then(result=>{
            return res.json(result?.data);
        }).catch(err=>{
           console.log(err?.response);
           return res.status(400).send(err?.response);
        }); 

    }catch(err){
        return res.status(400).send(err);
    }
};

createPayment = async(req,res)=>{
    try{
        const loanID = req.params.loanId;
        const url = `https://dev.orca.accialcapital.com/api/integration/loans/${loanID}/payments`;
        const headers = config;
        const data = req.body;
        await axios.post(url,data,headers).then(result=>{
            return res.json(result?.data);
        }).catch(err=>{
            console.log(err);
            return res.status(400).send(err);
        });
    }catch(err){
        console.log(err?.response);
        return res.status(400).send(err);
    }
};

getCountries = async(req,res)=>{
    try{
        const url ='https://dev.orca.accialcapital.com/api/integration/tables/countries';
        const headers = config;
        
        await axios.get(url,headers).then(result=>{
            return res.json(result?.data);
        }).catch(err=>{
           return res.status(400).send(err);
        }); 

    }catch(err){
        return res.status(400).send(err?.response);
    }
};

getProducts = async(req,res)=>{
    try{
        const url ='https://dev.orca.accialcapital.com/api/integration/tables/products';
        const headers = config;
        
        await axios.get(url,headers).then(result=>{
            return res.json(result?.data);
        }).catch(err=>{
           return res.status(400).send(err?.response);
        }); 

    }catch(err){
        return res.status(400).send(err);
    }
};

getCurrencies = async(req,res)=>{
    try{
        const url ='https://dev.orca.accialcapital.com/api/integration/tables/currencies';
        const headers = config;
        
        await axios.get(url,headers).then(result=>{
            return res.json(result?.data);
        }).catch(err=>{
           console.log(err?.response);
           return res.status(400).send(err?.response);
        }); 

    }catch(err){
        return res.status(400).send(err);
    }
};


module.exports={
    createBorrower,
    createApplication,
    createLoan,
    createPayment,
    getCountries,
    getProducts,
    getCurrencies
}
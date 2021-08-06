const axios = require('axios');
const qs = require('qs');

const token = process.env.API_TOKEN;
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

createBorrower = async(req,res) =>{
    
    try{
        const url = `https://dev.orca.accialcapital.com/api/integration/borrowers`;
        const headers = config;
        const data = req.body;
        await axios.post(url, qs.stringify(data),headers).then(result=>{
            console.log("result",result);
            return res.json(result);
        }).catch(err=>{
            console.log(err);
        }); 

    }catch(err){
        return err;
    }
}

createApplication = async(req,res)=>{
    try{
        const borrowerId = req.params;
        const url = `https://dev.orca.accialcapital.com/api/integration/borrowers/${borrowerId}/applications`;
        const headers = config;
        const data = req.body;
        await axios.post(url, qs.stringify(data),headers).then(result=>{
            console.log("result",result);
            return res.json(result);
        }).catch(err=>{
            console.log(err);
        }); 
    }catch(err){
        return err;
    }
};

createLoan = async(req,res)=>{
    try{
        const url = `https://dev.orca.accialcapital.com/api/integration/loans`;
        const headers = config;
        const data = req.body;
        await axios.post(url, qs.stringify(data),headers).then(result=>{
            console.log("result",result);
            return res.json(result);
        }).catch(err=>{
            console.log(err);
        }); 

    }catch(err){
        return err;
    }
};

createPayment = async(req,res)=>{
    try{
        const loanID = req.params;
        const url = `https://dev.orca.accialcapital.com/api/integration/loans/${loanID}/payments`;
        const headers = config;
        const data = req.body;
        await axios.post(url, qs.stringify(data),headers).then(result=>{
            console.log("result",result);
            return res.json(result);
        }).catch(err=>{
            console.log(err);
        }); 

    }catch(err){
        return err;
    }
};

module.exports={
    createBorrower,
    createApplication,
    createLoan,
    createPayment
}
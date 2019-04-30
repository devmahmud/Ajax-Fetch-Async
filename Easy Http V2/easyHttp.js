/**
 * Easy HTTP Library
 * Library for making Http requests
 * 
 * @version 2.0.0
 * @author Mahmudul Alam
 * @license MIT
 */

 class EasyHTTP{
    //  Make an http get request
    get(url){
        return new Promise((resolve,reject)=>{
            fetch(url)
            .then(res=>res.json())
            .then(data => resolve(data))
            .catch(err=> reject(err));
        });
        
    }

    post(url, data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res  => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    put(url, data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data=> resolve(data))
            .then(err => reject(err));
        });
    }
    delete(url){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                }
            })
            .then(res=>res.json())
            .then(data => resolve("Resource Deleted..."))
            .then(err=>reject(err));
        });
    }
 }
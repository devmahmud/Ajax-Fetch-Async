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
    async get(url){
        const response = await fetch(url);
        const respData = await response.json()
        return respData;
    }

    async post(url, data){
        const response = await fetch(url,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const respData = await response.json();
        return respData;
    }

    async put(url, data){
       const response = await fetch(url,{
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const respData = await response.json();
        return respData;
            
    }
    async delete(url){
        const response = await fetch(url,{
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            }
        });
        const respData = await 'Post deleted...';
        return respData;
    
    }
}
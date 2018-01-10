import React, { Component } from 'react';
let SYNC1 = {
    user(params){
        let { id, resolve, reject, syncParams: { extraFetchOptions, someFlag } } = params;
        fetch('user/', {
            method: 'GET',
            body: 'id=' + id,
            ...extraFetchOptions,
        }).then(response => {
            return response.json();
        }).then(json => {
            //console.log(json);
            if(json && json.user){
                storage.save({
                    key: 'user',
                    id,
                    data: json.user
                });

                if (someFlag) {
                    // 根据syncParams中的额外参数做对应处理
                }

                // 成功则调用resolve
                resolve && resolve(json.user);
            }
            else{
                // 失败则调用reject
                reject && reject(new Error('data parse error'));
            }
        }).catch(err => {
            console.warn(err);
            reject && reject(err);
        });
    }
};

export default SYNC1




/*
 * @Author: SilvesterChiao
 * @Date: 2020-07-01 11:08:26
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-07-01 11:27:16
 */

const request = ({ method = 'GET', path, headers, body }) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, path);

        for(const key in headers) {
            let value = headers[key];
            xhr.setRequestHeader(key, value);
        }

        xhr.send(body);

        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4){
                if (xhr.status >= 200 && xhr.status < 400) {
                    resolve.call(undefined, JSON.parse(xhr.responseText));
                } else if (xhr.status >= 400) {
                    reject.call(undefined, xhr)
                }
            }
        }
    })
}

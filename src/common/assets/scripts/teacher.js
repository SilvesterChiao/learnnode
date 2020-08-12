/*
 * @Author: SilvesterChiao
 * @Date: 2020-06-30 15:51:50
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-07-01 11:18:03
 */

const teacherListDOM = document.getElementById('teacher-list');

request({
    path: '/teacher/getTeacherList'
}).then(res => {
    const { data } = res;
    data.list.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = item.fullName;
        teacherListDOM.appendChild(li);
    })
})


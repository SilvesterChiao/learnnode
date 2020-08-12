var _ =  require('lodash');

class CreateData {
    constructor(data){
        this.data = data
    }

    // 获取type为0的数据（未删除）
    getData(params){
        var { id } = params;

        if(!!id){
            var student = _.find(this.data, { id: Number(id) });

            if(!!student){
                return {
                    code: 1,
                    message: 'OK',
                    data: student
                }
            }else{
                return {
                    code: 0,
                    message: '没找着'
                }
            }
        }else{
            var list =  this.data.filter(item => {
                if(item.type === 0){
                    return item
                }
            })

            return {
                code: 1,
                message: 'OK',
                data: list
            }
        }
    }

    // 新增数据
    addData(params){
        var id = data[data.length - 1].id;

        this.data.push({
            id: id + 1,
            type: 0,
            ...params
        })

        return {
            code: 1,
            message: '新增成功'
        }
    }

    // 修改数据
    editData(params){
        var { id, name } = params;

        this.data.forEach((item, index, array) => {
            if(item.id === Number(id)){
                array.splice(index, 1, {
                    id: Number(id),
                    type: 0,
                    name
                })
            }
        })

        return {
            code: 1,
            message: '修改成功'
        }
    }

    // 删除数据
    deleteData(datas){
        datas.forEach(id => {
            this.data.forEach((item, index, array) => {
                if(item.id === Number(id)){
                    array.splice(index, 1, {
                        id: item.id,
                        type: 1,
                        name: item.name,
                        title: item.title,
                        hot: item.hot,
                        image: item.image
                    })
                }
            })
        })

        return {
            code: 1,
            message: '删除成功'
        }
    }
}

module.exports = CreateData;

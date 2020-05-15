const McCompute = {
    Add: function(){
        const arr = [...arguments].map(item => {
            return item  * 100000
        });
        let num = 0;
        arr.forEach(item=>{
            num  = num + item
        })
        return num / 100000
    },
    Sub:function(){
        // 第一个数必须是被减数
        let num = [...arguments][0] * 100000;
        for (let index = 0; index < [...arguments].length; index++) {
            if(index == 0){
                continue;
            }
            num  = num - [...arguments][index] * 100000;
        }
        return num / 100000;
    },
    Mul: function(){
        let num = [...arguments][0] * 1000;
        for (let index = 0; index < [...arguments].length; index++) {
            if(index == 0){
                continue;
            }
            num = num * [...arguments][index] * 1000;
        }
        let s = 1;
        [...arguments].forEach(item=>{
            s = s * 1000
        })
        return num / s
    },
    Div:function () {
        let num = [...arguments][0] * 1000;
        for (let index = 0; index < [...arguments].length; index++) {
            if(index == 0){
                continue;
            }
            num = num / [...arguments][index] * 1000;
        }
        let s = 1;
        [...arguments].forEach(item=>{
            s = s * 1000
        })
        return num / s
    }
}


if(window.McCompute == undefined){
    window.McCompute = McCompute;
}
Page({
  data:{
    name:'Codewhy',
    age:18,
    students:[
      {id:110,name:'kobe',age:30},
      { id: 110, name: 'james', age: 30 },
      { id: 110, name: 'curry', age: 30 }
    ],
    counter:0
  },
  handleBtnClick(){
    //1.错误做法，界面不会刷新
    // this.data.counter++;
    // console.log(this.data.counter)
    //2.this.setData()
    this.setData({
      counter:this.data.counter+1
    })
  },
  handleSubTraction(){
    this.setData({
      counter:this.data.counter-1
    })
  }

})

//编程范式：
//1.命令式编程：原生操作Dom
//2.声明式编程：Vue/React/Angular

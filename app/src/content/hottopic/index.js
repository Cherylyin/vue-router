define(["vue","text!./view.html"],function(Vue,view){

  return Vue.extend({
      template:view,
         data:function(){
          return{"title":'test'}
         }
  })
})
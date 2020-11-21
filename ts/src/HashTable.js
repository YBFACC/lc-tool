class HashTable{
  //属性
  constructor(){
      this.storage=[]//作为数组，存放元素
      this.count=0//用于记录HashTable存放的数量
      this.limit=7//表示数组当前的常数
  }
  //Hash函数
  hashFunc(str,size){
      /*1,将字符串转换成比较大的数字:hashCode,2，将数字大的hashCode压缩到数组的（大小）范围内，size:代表传入的字符串，size：代表数组的大小*/
      //1，定义hashCode的变量
      var hashCode=0
      //2，霍纳算法，来计算hashCode的值
      for(var i=0;i<str.length;i++){
          hashCode=37*hashCode+str.charCodeAt(i)
      }
      //3，取余操作
      var index=hashCode % size
      return index
  }
  //hashTable的插入和修改
  /*
  1，根据key获取索引值，目的：将数据插入到对应的位置
  2，根据索引值取出bucket，如果bucket(桶)不在，创建bucket(桶)
  3，判断是新增，还是修改，如果有只，那么修改，没有就是新增
  */
  put(key,value){
      //1，根据key获取相对应的index
      var index=this.hashFunc(key,this.limit)
      //2，根据index取出相对应的bucket,bucket是一个数组
      var bucket=this.storage[index]
      //判断bucket是否存在
      if(bucket==null){
          bucket=[]
          this.storage[index]=bucket
      }
      //4，判断是否为修改数据
      for(var i=0;i<bucket.length;i++){
          var tuple=bucket[i]
          if(tuple[0]==key){
              tuple[1]=value
              return
          }
      }
      //5，进行添加操作
      bucket.push([key,value])
      this.count+=1
      //判断是否需要扩容
      if(this.count>this.limit*0.75){
          var newPrime=this.getPrime(this.limit*2)
          this.resize(newPrime)
      }
  }
  //获取操作
  /*
  1，根据key获取相对应的index
  2，根据index获取相对应的bucket
  3，判断bucket是否为null,如果为null,直接返回null
  4，线性查找bucket中的每一个key是否等于传入的key,如果等于直接返回value
  5，遍历后，依然没有找到相对应的key，直接返回null
  */
  get(key){
      //根据Key获取相对应的index
      var index=this.hashFunc(key,this.limit)
      //根据index获取相对应的bucket
      var bucket=this.storage[index]
      //判断bucket是否存在
      if(bucket==null){
          return null
      }
      for(var i=0;i<bucket.length;i++){
          var tuple=bucket[i]
          if(tuple[0]==key){
              return tuple[1] 
          }
      }
      //依然没有找到
      return null
  }
  //删除操作
  /*
  1，根据key获取相对应的index
  2，根据index获取相对应的bucket
  3，判断bucket是否为null，如果不存在，直接返回null
  4，线性查找bucket，寻找相对应的key,并且删除
  5，依然没有找到那么返回null
  */
  remove(key){
      //根据key获取相对应的index
      var index=this.hashFunc(key,this.limit)
      //根据index获取相对应的bucket
      var bucket=this.storage[index]
      //判断bucket是否存在
      if(bucket==null){
          return null
      }
      //有bucket，那么进行线性查找，并且删除
      for(var i=0;i<bucket.length;i++){
          var tuple=bucket[i]
          if(tuple[0]==key){
              bucket.splice(i,1)
              this.count-=1
              //缩小容量
              if(this.limit>7 && this.count<this.limit*0.25){
                  var newPrime=this.getPrime(Math.floor(this.limit/2))//用Math.floor确保为整数
                  this.resize(newPrime)
              }
              return tuple[1]
          }
      }
      //5，遍历后没有找到
      return null
  }
  //判断HashTable是否为空
  isEmpty(){
      return this.count==0
  }
  //获取HashTable元素的个数
  size(){
      return this.count
  }
  //HashTable的扩容
  resize(newLimit){
      //1，保存旧的数组
      var oldStorage=this.storage
      //重置所有属性
      this.storage=[]
      this.count=0
      this.limit=0
      //遍历获取oldStorage所有的bucket
      for(var i=0;i<oldStorage.length;i++){
          //3.1取出相对应的bucket
          var bucket=oldStorage[i]
          //3.2判断bucket是否为空
          if(bucket==null){
              continue
          }
          //3.3，bucket中有数据，取出数据重新插入
          for(var j=0;j<bucket.length;j++){
              var tuple=bucket[j]
              this.put(tuple[0],tuple[1])
          }
      }
  }
  //判断数字是否为质数
  isPrime(num){
      var temp=parseInt(Math.sqrt(num))
      for(var i=2;i<=temp;i++){
          if(num % 2==0){
              return false
          }
      }
      return true
  }
  //如果不是质数让其自增,得到质数
  getPrime(num){
      while(!this.isPrime(num)){
          num++
      }
      return num//这个数为质数
  }
}
//创建HashTable
var ht=new HashTable()
ht.put('one','1')
ht.put('two','2')
ht.put('three','3')
ht.put('four','4')
ht.put('five','5')
ht.put('six',6)
ht.put('seven','7')
console.log(ht)

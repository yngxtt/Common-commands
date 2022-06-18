<template>
  <div id="app">
    <div class="login" v-if="testValue">
        <h2>用 户 登 录</h2>
       
        <div class="username">
          <el-input class="input" v-model="input" placeholder="请输入用户名"></el-input>
        </div>
         <div class="username">
          <el-input class="input" v-model="input" placeholder="请输入用户密码"></el-input>
        </div>
        <div class="button">
            <el-button>登 录</el-button>
        </div>
        <div class="text">
            <span><a href="#">忘记密码？</a></span>
            <span><a href="#">立即注册</a></span>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  
  components: {
   
  },
  data() {
    return {
      input: '',
      testValue:true
    }
  },
  methods: {
    test() {
        this.testValue = !this.testValue
    },
    t() {
       this.$confirm('此操作将永久删除该文件, 是否继续?')
    },
    open() {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定'
      });
    }
  }
}
</script>

<style scoped>
body {
  background-image: url(https://tse1-mm.cn.bing.net/th/id/R-C.dfaa4c886b33ea3ba958cd66a16788a6?rik=8SdEK07yyLFVnw&riu=http%3a%2f%2fdesk.fd.zol-img.com.cn%2ft_s960x600c5%2fg5%2fM00%2f0E%2f05%2fChMkJlZmpj-IQcYHABWQrvfj0vMAAF4hwOWYVkAFZDG887.jpg&ehk=8C%2fbWKHFyytRVFK3v3X75m6S%2fGh4QVWVWhFMwRklNw0%3d&risl=&pid=ImgRaw&r=0);
  background-repeat: no-repeat;
  background-size:cover;
}

.login {
  text-align: center;
  width: 380px;
  height: 300px;
  margin: 200px auto;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.login h2 {
  padding-top: 19px;
  color: #5690fe;
}
.login .username {
  margin: 15px 26px;
  display:flex;
  justify-content: space-between;
}
.input {
  border-top: none;
  border-right: none;
  border-left: none;
}
.button button {
  margin-top: 30px;
 width: 326px;
 background-color: #5690fe;
 color: #fff;
}
.text span a {
  display: block;
  text-decoration: none;
  padding-top: 5px;
  
}
.text span:nth-child(1) {
  margin-left: 30px;
  float: left;
}
.text span:nth-child(1) a {
  color: #999999;
}
.text span:nth-child(2) {
  margin-right: 30px;
  float: right;
  color: #5690fe;
}
.text span:nth-child(2) a {
  color: #5690fe;
  font-size: 18px;
  font-weight: 500;
}
.test {
  float:right;
  margin-top:5px;
  margin-right:5px;
}
.test:hover {
  color: #ff0000;
  cursor: pointer;
}

 
 
</style>

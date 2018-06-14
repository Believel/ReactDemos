import React, { Component} from 'react';
import './App.css';

// 引入一个Title组件
// import Title from './title/Title';

// 引入点赞/取消点赞组件
// import LikeButton from './likeButton/LikeButton';

// 引入列表组件
// import List from './list/List'

// 引入评论组件
// import CommentIndex from './comment/CommentIndex';

// 引入体验挂载阶段的生命周期
// import Header from './header/Header';


// import Clock from './clock/Clock';

// ref操作使用:自动获取焦点
// import AutoFocusInput from './autofoucsinput/AutoFocusInput ';


// 组件中内嵌元素 this.props.children
import Card from './card/Card';

// const users = [
//   {username: 'Jerry', age: 21, gender: 'male'},
//   {username: 'Tomy', age: 19, gender: 'male'},
//   {username: 'Lily', age: 20, gender: 'female'}
// ];
class App extends Component {
  render() {
    // const isGoodWord = true;
    // const gooWord = <strong>is good</strong>
    // const badWord = <strong>is not good</strong>
    return (
      <div className="wrapper">
        {/* <h1 className="title">React小书{isGoodWord ? gooWord : badWord}</h1>  
        <Title/> */}
        {/* <LikeButton likeText="已赞" unlikeText="赞"/> */}
        {/* <LikeButton wordings = {{likeText: '已赞', unlikeText :'赞'}}
                    onClick= {() => console.log('click on LikeButton')}/>
        
        <label htmlFor="male"> Male</label>
        <div>{users.map((user, i) => <List key={i} user={user}/>)}</div> */}




        {/* <CommentIndex/> */}



        {/* <Header/> */}


        {/* <Clock/> */}

        {/* <AutoFocusInput/> */}

        <Card>
          <h2>React学习</h2>
          <div>开源、免费、专业、简单</div>
        </Card>
      </div>
    )
  }
}

export default App;

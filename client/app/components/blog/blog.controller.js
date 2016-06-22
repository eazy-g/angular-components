// TODO: create the blog controller
// check blog.html for hints on what the controller
// should have/do
import _ from 'lodash';

class blogController {
  constructor(){
    this.message = 'wasssssaahhh'
    this.posts = _.times(10, i => {
      return {
        title: 'Blue',
        author: 'Cat'
      }
    });
  }
}

export {blogController};

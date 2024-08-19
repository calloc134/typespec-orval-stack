import "@typespec/http";
 
using TypeSpec.Http;
 
@service({
  title: "TypeSpec Orval API"
  
})
@server("http://localhost:3777", "production")
namespace TyOrAPI;

@error
model Error {
  message: string;
}

@route("/")
interface Hello {
  @get
  hello(): {
    message: string;
  } |  Error;
}

// model User {
//   user_uuid: string;
//   user_name: string;
// }

// @route("/users")
// interface Users {
//   @get
//   getUsers(): {
//     users: User[];
//   } | Error;
//   @post
//   createUser(user: User): {
//     user: User;
//   } | Error;
//   @patch
//   updateUser(user: User): {
//     user: User;
//   } | Error;
// }


model Post {
  post_uuid: string;
  post_title: string;
  post_content: string;
}

@route("/posts")
interface Posts {
  @get
  getPosts(): {
    posts: Post[];
  } | Error;
  @post
  createPost(post: Post): {
    post: Post;
  } | Error;
  @patch
  updatePost(post: Post): {
    post: Post;
  } | Error;
}
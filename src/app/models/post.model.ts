export interface Comment {
    content: string;
    who: string;
}
export interface Post {
    title: string;
    post_content: string;
    who: string;
    when: Date;
    comments: Array<Comment>;
    imageUrl: string;
    _id: string;
  }
export interface IComment {
    _id: string;
    name: string;
    img: string;
    text: string;
    date: string;
  }
  
 export interface IPetTipStory {
    _id: string;
    title: string;
    story: string;
    publish_date: string;
    image: string;
    publisher_name: string;
    publisher_email: string;
    publisher_img: string;
    upVote: number;
    downVote: number;
    comments: Comment[];
  }
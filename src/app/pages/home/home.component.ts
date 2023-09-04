import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './home.responsive.component.scss'],
})
export class HomeComponent {
  lastPost: Post = {
    _id: Number(),
    title: String(),
    resume: String(),
    postCover: String(),
  };
  posts: Post[] = [];

  constructor(private readonly http: HttpClient) {
    this.loadPostRecent();
  }

  loadPostRecent(): void {
    this.http
      .get('../../../assets/posts.json', { responseType: 'text' })
      .subscribe((data) => {
        const parseData: Post[] = JSON.parse(data);
        this.lastPost = parseData[parseData.length - 1];

        this.posts = parseData.filter((post) => post._id !== this.lastPost._id);
      });
  }
}

type Post = {
  _id: number;
  title: string;
  resume: string;
  postCover: string;
};

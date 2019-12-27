import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  id: number;
  article: Article;

  constructor(private route: ActivatedRoute,private router: Router,
    private articleService: ArticleService) { }

  ngOnInit() {
    this.article = new Article();

    this.id = this.route.snapshot.params['id'];
    
    this.articleService.getArticle(this.id)
      .subscribe(data => {
        console.log(data)
        this.article = data;
      }, error => console.log(error));
  }

  updateArticle() {
    this.articleService.updateArticle(this.id, this.article)
      .subscribe(
        data => {
          this.article = new Article();
          this.gotoList()
        }
        );
  }

  onSubmit() {
    this.updateArticle();    
  }

  gotoList() {
    this.router.navigate(['/articles']);
  }
}
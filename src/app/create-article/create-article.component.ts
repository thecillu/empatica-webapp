import { ArticleService } from '../article.service';
import { Article } from '../article';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleListComponent } from '../article-list/article-list.component';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  article: Article = new Article();
  submitted = false;

  constructor(private articleService: ArticleService,
    private router: Router) { }

  ngOnInit() {
  }

  newArticle(): void {
    this.submitted = false;
    this.article = new Article();
  }

  save() {
    this.articleService.createArticle(this.article)
      .subscribe(
        data => {
          this.article = new Article();
          this.gotoList()
        }
        
        );

  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/articles']);
  }
}
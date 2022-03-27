import { singleComment } from './../models/singleComment.model';
import { CommentSearchList } from './../models/singleComment.search.list.model';
import { CardsService } from './../service/cards.service';
import { Component, OnInit } from '@angular/core';
import { CardsSearchList } from '../models/cards.search.list.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  cardsList: CardsSearchList = new CardsSearchList();

  isReadMore: boolean = false;

  commentList: CommentSearchList = new CommentSearchList();

  comment: singleComment = new singleComment();

  cardFormGroup: FormGroup;

  count: number = 0;
  cardId: number = 0;

  params = {
    page: 1,
    pageSize: 5,
  };

  constructor(
    private service: CardsService,
    private route: ActivatedRoute,
    private builder: FormBuilder,
    private router: Router
  ) {
    this.cardFormGroup = this.builder.group({
      author: '',
      text: '',
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.cardId = params['id'];
      this.getAllCards();
      this.getAllComments();
    });
  }

  getAllCards(): void {
    this.service.getCards(this.params).subscribe((elem: CardsSearchList) => {
      this.cardsList = elem;
      this.count = elem.count;
    });
  }

  getAllComments(): void {
    this.service
      .getComments(this.cardId)
      .subscribe((elem: CommentSearchList) => {
        this.commentList = elem;
      });
  }

  previousPage(): void {
    this.params.page = this.params.page - 1;
    this.getAllCards();
  }

  nextPage(): void {
    this.params.page = this.params.page + 1;
    this.getAllCards();
  }

  pageSize(value: number) {
    this.params.pageSize = value;
    this.getAllCards();
  }

  addCom(): void {
    this.comment.cards = this.cardId;
    this.comment.author = this.cardFormGroup.value.author;
    this.comment.text = this.cardFormGroup.value.text;
    this.service.add(this.comment).subscribe((x: any) => {
      console.log(this.comment);
      this.router.navigate(['/cards']);
    });
    this.cardFormGroup.reset();
  }

  showText() {
    this.isReadMore = !this.isReadMore;
  }
}

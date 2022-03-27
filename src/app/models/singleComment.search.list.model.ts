import { singleComment } from './singleComment.model';
export class CommentSearchList {
  count: number;
  results: singleComment[];

  constructor(obj?: any) {
    this.count = (obj && obj.count) || 0;
    this.results =
      (obj &&
        obj.results &&
        obj.results.map((elem: any) => new singleComment(elem))) ||
      [];
  }
}

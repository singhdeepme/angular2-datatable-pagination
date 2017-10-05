import {Component, Input, OnChanges} from "@angular/core";
import {NG2DataTable} from "./NG2DataTable";
import * as _ from "lodash";

@Component({
    selector: "mfBootstrapPaginator",
    template: `
    <mfPaginator #p [mfTable]="mfTable">
      <div class="row bootstrap-paginator-footer">
        <div class="col-md-4 total-summary">
          <label class="pull-left">
            Showing {{p.activePage * p.rowsOnPage - p.rowsOnPage + 1}} to
            {{(p.activePage * p.rowsOnPage) < p.dataLength ? (p.activePage * p.rowsOnPage) : p.dataLength }} of
            {{p.dataLength}} entries
          </label>
        </div>
        <div class="col-md-4 pages">
          <ul class="pagination" *ngIf="p.dataLength > p.rowsOnPage">
              <li class="page-item" [class.disabled]="p.activePage <= 1" (click)="p.setPage(1)">
                  <a class="page-link" style="cursor: pointer">&laquo;</a>
              </li>
              <li class="page-item" *ngIf="p.activePage > 4 && p.activePage + 1 > p.lastPage" (click)="p.setPage(p.activePage - 4)">
                  <a class="page-link" style="cursor: pointer">{{p.activePage-4}}</a>
              </li>
              <li class="page-item" *ngIf="p.activePage > 3 && p.activePage + 2 > p.lastPage" (click)="p.setPage(p.activePage - 3)">
                  <a class="page-link" style="cursor: pointer">{{p.activePage-3}}</a>
              </li>
              <li class="page-item" *ngIf="p.activePage > 2" (click)="p.setPage(p.activePage - 2)">
                  <a class="page-link" style="cursor: pointer">{{p.activePage-2}}</a>
              </li>
              <li class="page-item" *ngIf="p.activePage > 1" (click)="p.setPage(p.activePage - 1)">
                  <a class="page-link" style="cursor: pointer">{{p.activePage-1}}</a>
              </li>
              <li class="page-item active">
                  <a class="page-link" style="cursor: pointer">{{p.activePage}}</a>
              </li>
              <li class="page-item" *ngIf="p.activePage + 1 <= p.lastPage" (click)="p.setPage(p.activePage + 1)">
                  <a class="page-link" style="cursor: pointer">{{p.activePage+1}}</a>
              </li>
              <li class="page-item" *ngIf="p.activePage + 2 <= p.lastPage" (click)="p.setPage(p.activePage + 2)">
                  <a class="page-link" style="cursor: pointer">{{p.activePage+2}}</a>
              </li>
              <li class="page-item" *ngIf="p.activePage + 3 <= p.lastPage && p.activePage < 3" (click)="p.setPage(p.activePage + 3)">
                  <a class="page-link" style="cursor: pointer">{{p.activePage+3}}</a>
              </li>
              <li class="page-item" *ngIf="p.activePage + 4 <= p.lastPage && p.activePage < 2" (click)="p.setPage(p.activePage + 4)">
                  <a class="page-link" style="cursor: pointer">{{p.activePage+4}}</a>
              </li>
              <li class="page-item" [class.disabled]="p.activePage >= p.lastPage" (click)="p.setPage(p.lastPage)">
                  <a class="page-link" style="cursor: pointer">&raquo;</a>
              </li>
            </ul>
          </div>
          <div class="col-md-4 items">
            <ul class="pagination pull-right float-sm-right" *ngIf="p.dataLength > minRowsOnPage">
              <li class="page-item" *ngFor="let rows of rowsOnPageSet" [class.active]="p.rowsOnPage===rows" (click)="p.setRowsOnPage(rows)">
                  <a class="page-link" style="cursor: pointer">{{rows}}</a>
              </li>
            </ul>
          </div>
        </div>
    </mfPaginator>
    `
})
export class NG2BootstrapPaginator implements OnChanges {
    @Input("rowsOnPageSet") rowsOnPageSet = [];
    @Input("mfTable") mfTable: NG2DataTable;

    minRowsOnPage = 0;

    ngOnChanges(changes: any): any {
        if (changes.rowsOnPageSet) {
            this.minRowsOnPage = _.min(this.rowsOnPageSet)
        }
    }
}

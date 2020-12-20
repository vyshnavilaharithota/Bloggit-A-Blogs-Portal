import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
  AfterViewInit
} from "@angular/core";
import { IUser } from "src/assets/interfaces/shared.interface";

@Component({
  selector: "users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements AfterViewInit {
  @Input() usersList: IUser[];
  @Output() onUserSelect = new EventEmitter<IUser>();
  container: HTMLElement; 
  ngAfterViewInit() {         
    this.container = document.getElementById("listContainer");           
    this.container.scrollTop = this.container.scrollHeight;     
  } 

  constructor() {}
  public selectUser(user: IUser) {
    this.onUserSelect.emit(user);
  }
}

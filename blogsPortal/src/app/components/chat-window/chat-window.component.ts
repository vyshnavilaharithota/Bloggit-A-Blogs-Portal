import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
  AfterViewInit
  
} from "@angular/core";
import { IMessage, IUser } from "../../../assets/interfaces/shared.interface";

@Component({
  selector: "chat-window",
  templateUrl: "./chat-window.component.html",
  styleUrls: ["./chat-window.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatWindowComponent implements AfterViewInit{
  constructor() {}
  @Input() messages: IMessage[];
  @Input() selectedUser: IUser;
  @Output() onMessage = new EventEmitter<string>();
  container: HTMLElement; 
  ngAfterViewInit() {         
    this.container = document.getElementById("msgContainer");           
    this.container.scrollTop = this.container.scrollHeight;     
  } 

  

  public handleMessage(message: string) {
    this.onMessage.emit(message);
  
  }
}

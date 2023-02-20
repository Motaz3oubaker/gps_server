import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackUpService } from 'src/app/services/back-up.service';
import { DeletePositionsService } from 'src/app/services/delete-positions.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private DeletePositionsService: DeletePositionsService,private BackUpService: BackUpService,private router:Router) { }

  ngOnInit(): void {
  }

  Reset() {
    this.DeletePositionsService.delete(null).subscribe()

    //   setTimeout(function(){
    //     window.location.reload();
    //  }, 250);
  }
  reload() {
    window.location.reload();
  }
  BackUp(){
this.BackUpService.delete(null).subscribe()
  }
exit(){
  this.router.navigate([''])
}


}

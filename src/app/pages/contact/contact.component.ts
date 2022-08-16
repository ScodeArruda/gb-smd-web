import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
) { }

ngOnInit() {
  const par = this.activatedRoute.snapshot.paramMap.get('parametro');
  console.log(par);
}

goToContato() {
    this.router.navigate(['/contact']);
}

}

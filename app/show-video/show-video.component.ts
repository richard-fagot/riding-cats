import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'show-video',
  templateUrl: 'show-video.component.html',
})

export class ShowVideoComponent {
  constructor(private route: ActivatedRoute,
    private router: Router){}
}

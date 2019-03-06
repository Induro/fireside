import { Component } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
    selector: 'conversations',
	templateUrl: './conversations.component.html',
})
export class ConversationsComponent {
    constructor(
		private afs: AngularFirestore
	) {

	}
}
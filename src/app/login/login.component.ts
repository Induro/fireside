import { Component } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
	templateUrl: './login.component.html',
})
export class LoginComponent {
    constructor(
		public afAuth: AngularFireAuth,
		private afs: AngularFirestore,
		private router: Router
	) {
		this.afAuth.user.subscribe(user => {
			if (user) {
				this.afs.collection('users', ref => ref.where('email', '==', user.email)).valueChanges().subscribe(x => {
					if (x.length === 0) {
						this.afs.doc(`users/${user.uid}`).set({
							email: user.email,
							displayName: user.displayName
						});
					}
					this.router.navigateByUrl('/conversations');
				});
			}
		});
	}
	login() {
	  this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
	}
	logout() {
	  this.afAuth.auth.signOut();
	}
}
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login'
import { ConversationsComponent } from './conversations';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
		path: 'conversations',
		component: ConversationsComponent
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

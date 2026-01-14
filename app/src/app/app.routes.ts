import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { DocsComponent } from './components/docs/docs';
import { JwtCopyPrivacyPolicyComponent } from './components/docs/jwt-copy/privacy-policy/privacy-policy';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'docs',
        component: DocsComponent,
        children: [
            { path: 'jwt-copy/privacy-policy', component: JwtCopyPrivacyPolicyComponent }
        ]
    },
    { path: '**', redirectTo: '' }
];

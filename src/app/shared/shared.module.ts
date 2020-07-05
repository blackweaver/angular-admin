import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        PipesModule
    ],
    declarations: [
        HeaderComponent,
        NavbarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent
    ],
    exports : [
        HeaderComponent,
        NavbarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent
    ]
})

export class SharedModule { }

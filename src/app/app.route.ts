import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { DashboardComponent }   from './dashboard/dashboard.component';
// import { HeroesComponent }      from './heroes/heroes.component';
// import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

// import {LoyaltyComponent} from './loyalty/loyalty.component';
// import {ShopListComponent} from './shop-list/shop-list.component';
// import { ShopStoreComponent } from './shop-store/shop-store.component';
// import { ShopStore2Component } from './shop-store2/shop-store2.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
// const routes: Routes = [
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'detail/:id', component: HeroDetailComponent },
//   { path: 'heroes', component: HeroesComponent },
//   { path: 'loyalty', component: LoyaltyComponent },
//   { path: 'shoplist', component: ShopListComponent },
//   { path: 'shopstore', component: ShopStoreComponent },
//   { path: 'shopstore2', component: ShopStore2Component },
// ];

const appRoutes: Routes = [
    {
      path: '',
      component: PostComponent,
      data: { title: 'Post List' },
      pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: PostDetailComponent,
        // data: { title: 'Post Detail' },
      },
  ];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

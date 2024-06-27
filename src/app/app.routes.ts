import { Routes } from '@angular/router';
import { SellerprofileComponent } from './sellerprofile/sellerprofile.component';
import { SellerTransactionComponent } from './seller-transaction/seller-transaction.component';
import { SellerUploadProductComponent } from './seller-upload-product/seller-upload-product.component';
import { SellerAllCategoriesComponent } from './seller-all-categories/seller-all-categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const routes: Routes = [
    {path:"", component:DashboardComponent},
    {path:"signup", component:SignuppageComponent},
    {path:"dashboard", component:DashboardComponent},
    
    {path:"seller", 
        children:[
            {path:"", component:DashboardComponent},
            {path:"transaction", component:SellerTransactionComponent},
            {path:"upload", component:SellerUploadProductComponent},
            {path:"addcategory", component:SellerAllCategoriesComponent}

        ]
    },
    {path:"**", component:ErrorPageComponent}
];

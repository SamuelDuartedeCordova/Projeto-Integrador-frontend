import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
      path:'',
      redirectTo: 'cadastro',
      pathMatch:'full'
    },
    {
      path: 'cadastro',
      component: CadastroComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }



import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-cliente-cadastrar',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    CardModule,
    SelectModule,
    ButtonModule
  ],
  templateUrl: './cliente-cadastrar.html',
  styleUrl: './cliente-cadastrar.css',
})
export class ClienteCadastrar {

  tipoPessoaOptions = [
    { label: 'Pessoa Física', value: 'F' },
    { label: 'Pessoa Jurídica', value: 'J' }
  ];

  cliente = {
    nome: '',
    tipoPessoa: 'F',
    cpfCnpj: '',
    telefone: '',
    cep: '',
    cidade: '',
    endereco: '',
    bairro: '',
    numero: '',
    email: ''
  };

  salvar() {
    console.log('Cliente cadastrado:', this.cliente);

    alert('Cliente cadastrado com sucesso!');

    this.cancelar();
  }

  cancelar() {
    console.log('Cadastro cancelado');

    this.cliente = {
      nome: '',
      tipoPessoa: 'F',
      cpfCnpj: '',
      telefone: '',
      cep: '',
      cidade: '',
      endereco: '',
      bairro: '',
      numero: '',
      email: ''
    };
  }
}
```

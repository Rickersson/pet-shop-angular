import { Component } from '@angular/core';
import { Service } from '../../models/service.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] = [
    {
      id: 1,
      title: 'Banho e Tosa',
      description: 'Banho com produtos hipoalergênicos, tosa higiênica, tosa na tesoura e máquina, escovação de dentes e limpeza de ouvidos.',
      icon: 'fa-shower'
    },
    {
      id: 2,
      title: 'Veterinário',
      description: 'Consultas, vacinação, exames laboratoriais, microchipagem, acompanhamento de saúde e orientação nutricional.',
      icon: 'fa-stethoscope'
    },
    {
      id: 3,
      title: 'Hospedagem',
      description: 'Hotel para cães e gatos com instalações seguras e confortáveis, monitoramento 24h e atividades recreativas.',
      icon: 'fa-home'
    },
    {
      id: 4,
      title: 'Adestramento',
      description: 'Treinamento comportamental, adestramento básico e avançado, socialização e correção de hábitos indesejados.',
      icon: 'fa-graduation-cap'
    },
    {
      id: 5,
      title: 'Pet Sitter',
      description: 'Cuidados personalizados em sua casa, passeios diários, alimentação e companhia para seu pet quando você viajar.',
      icon: 'fa-user'
    },
    {
      id: 6,
      title: 'Produtos Premium',
      description: 'Rações especiais, acessórios, brinquedos e produtos de higiene das melhores marcas do mercado.',
      icon: 'fa-shopping-basket'
    }
  ];
}
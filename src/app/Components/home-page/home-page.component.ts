import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  
  countries = [
    {
      name: 'India',
      states: [
        {
          name:'Andhra Pradesh',
          cities:['Tirupathi','Guntur']
        }, 
        {
          name:'Assam',
          cities:['City 1','City 2']
        }, 
        {
          name:'Assam',
          cities:['City 1','City 2']
        },
        {
          name:'Maharastra',
          cities:['Mumbai','Goa']
        },
        {
          name:'Tamil Nadu',
          cities:['Coimbatore','Erode']
        }
      ]
    },

    {
      name:'USA',
      states:[
        {
          name:'Texas',
          cities:['Austin','Texas City', 'Plano']
        },

        {
          name:'New York',
          cities:['Water town','Albany']
        },

        {
          name:'New Mexico',
          cities:['Roswell','Taos']
        }
      ]
    }
    
  ];


  selectedCountry!: any;
  selectedState!: any;
  selectedCity!: any;

  onCountryChange(){
    this.selectedState = null;
    this.selectedCity = null;

  }

  onStateChange() {
    
  }
}

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {State} from '../../models/State';
import {City} from '../../models/City';
import {StateService} from '../../services/state.service';
import {ClientService} from '../../services/client.service';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public form: FormGroup;
  public states: State[] = [];
  public cities: City[] = [];

  constructor(
    private router: Router,
    private location: Location,
    private builder: FormBuilder,
    private stateService: StateService,
    private clientService: ClientService,
    private alertController: AlertController
  ) {
  }

  ngOnInit() {
    this.form = this.builder.group({
      name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      typeClient: [null, Validators.required],
      cpfCnpj: [null, [Validators.required, Validators.minLength(11), Validators.maxLength(15)]],
      description: [null, Validators.required],
      number: [null, Validators.required],
      district: [null],
      cep: [null, Validators.required],
      stateId: [null, Validators.required],
      cityId: [null, Validators.required],
      phone1: [null, Validators.required],
      phone2: [null],
      phone3: [null],
    });
    this.getStates();
  }

  getStates(): void {
    this.stateService.getStates().subscribe(response => {
      this.states = response;
    });

    this.form.get('stateId').valueChanges.subscribe(value => {
      if (value) {
        this.form.get('cityId').setValue(null);
        this.getCities(value);
      }
    });
  }

  getCities(stateId: number): void {
    this.stateService.getCitiesByState(stateId).subscribe(response => {
      this.cities = response;
    });
  }


  goback() {
    this.router.navigate(['/login'], {replaceUrl: true});
  }

  save() {
    if (this.form.valid) {
      this.clientService.save(this.form.value).subscribe(async response => {
        this.form.reset();
        const alert = await this.alertController.create({
          header: 'Sucesso ',
          message: 'Cliente cadastrado com sucesso.',
          buttons: ['OK'],
        });
        alert.present();
      });
    }
  }
}

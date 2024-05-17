import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtentiService } from '../../../services/utenti.service';
import { Utenteregistrazione } from '../../../model/utenteregistrazione.model';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent {
  registrazioneForm: FormGroup;
  utente: Utenteregistrazione = new Utenteregistrazione();

  constructor(
    private formBuilder: FormBuilder,
    private utentiService: UtentiService,
    private router: Router,
  ) {
    this.registrazioneForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.registrazioneForm.valid) {
      this.utente.username = this.registrazioneForm.value['username'];
      this.utente.password = this.registrazioneForm.value['password'];
      console.log(this.utente);
      this.utentiService.registerUser(this.utente).subscribe({
        next: (data) => {
          console.log(data);
          alert("Benvenuto nella videoteca! Grazie per esserti registrato.")
          this.router.navigate(['/login']);
        },
        error: (e) => {
          console.error('Errore durante la registrazione:', e.message);
          alert('Si è verificato un errore durante la registrazione. Si prega di riprovare.');
        }
      })
    }
  }

}

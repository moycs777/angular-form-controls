import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FormGroup, FormControl,FormArray, FormBuilder } from '@angular/forms'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myObj = {
    'bnatch1': {
      name: 'bnatch1',
      pages : []
    },
    'bnatch2': {
      name: 'bnatch2',
      pages : []
    },

  };

  skillsForm: FormGroup;

  constructor(
    private fb:FormBuilder
  ) {
    this.prepareForm();
  }

  prepareForm() {
    this.skillsForm = this.fb.group({
      names: this.fb.array([]),
      skills: this.fb.array([]) ,
    });

    setTimeout(() => {
      this.Data()
    }, 1200);
  }

  Data() {
     Object.keys(this.myObj).forEach((batchName, index) => {
      console.log('this.myObj[batchName]', this.myObj[batchName].name);
      this.skills.push(
        this.fb.group({
          skill: this.myObj[batchName].name,
        }
      ));
    });
  }

  get skills() : FormArray {
    return this.skillsForm.get("skills") as FormArray
  }

  onSubmit() {
    console.log(this.skillsForm.value);
  }
}

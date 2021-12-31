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

  batchesForm: FormGroup;

  constructor(
    private fb:FormBuilder
  ) {
    this.prepareForm();
  }

  prepareForm() {
    this.batchesForm = this.fb.group({
      names: this.fb.array([]) ,
    });

    setTimeout(() => {
      this.prepareData()
    }, 1200);
  }

  prepareData() {
     Object.keys(this.myObj).forEach((batchName, index) => {
      console.log('this.myObj[batchName]', this.myObj[batchName].name);
      this.names.push(
        this.fb.group({
          skill: this.myObj[batchName].name,
        }
      ));
    });
  }

  get names() : FormArray {
    return this.batchesForm.get("names") as FormArray
  }

  onSubmit() {
    console.log(this.batchesForm.value);
  }

  addControlProgrammatically(newName:string) {
    this.names.push(
      this.fb.group({
        skill: newName,
      }
    ));
  }

  removeName(i:number) {
    this.names.removeAt(i);
  }
}

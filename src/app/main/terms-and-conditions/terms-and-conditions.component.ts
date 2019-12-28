import { Component, OnInit, Injector } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BaseComponent } from 'app/common/commonComponent';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent extends BaseComponent implements OnInit {

  constructor(inj:Injector) 
  { 
    super(inj);
  }

  editorForm: FormGroup;
  editorContent: String;
  preContent: any;
  isEdit: boolean;
  isOutput: boolean;


  ngOnInit() {
    
    this.isEdit=false;
    this.isOutput=true;
    this.preContent = "<h1><strong style='color: rgb(230, 0, 0);'>Terms of Service</strong></h1><p><br></p><h3><strong>Payments</strong></h3><p>We process all of our payments through 2checkout. 2Checkout is fully compliant with OFAC regulations, restricting shoppers from the following countries from placing orders.</p><ul><li>The Republic of Cuba</li><li>The Islamic Republic of Iran</li><li>The State of Libya</li><li>The Republic of Sudan</li><li>The Syrian Arab Republic</li><li>The Democratic People's Republic of Korea</li></ul><p><span style='color: rgb(51, 51, 51);'>The list of countries can be updated without any notice at any moment by OFAC and will be applied immediately. Check the official OFAC website for the latest updates.</span></p>"
    this.editorContent = "<h1><strong style='color: rgb(230, 0, 0);'>Terms of Service</strong></h1><p><br></p><h3><strong>Payments</strong></h3><p>We process all of our payments through 2checkout. 2Checkout is fully compliant with OFAC regulations, restricting shoppers from the following countries from placing orders.</p><ul><li>The Republic of Cuba</li><li>The Islamic Republic of Iran</li><li>The State of Libya</li><li>The Republic of Sudan</li><li>The Syrian Arab Republic</li><li>The Democratic People's Republic of Korea</li></ul><p><span style='color: rgb(51, 51, 51);'>The list of countries can be updated without any notice at any moment by OFAC and will be applied immediately. Check the official OFAC website for the latest updates.</span></p>"
    this.editorForm = new FormGroup({
      'editor': new FormControl(null)
    })
    this.editorForm.get('editor').setValue(this.editorContent);
   
  }

  onSubmit(){
    this.isEdit=false;
    this.isOutput=true;
    this.editorContent = this.editorForm.get('editor').value;
    console.log(this.editorForm.get('editor').value);
  }

  setValue(editorContent){
    this.editorForm.get('editor').setValue = editorContent;
  }

  editMode(){
    this.isEdit=true;
    this.isOutput=false;
  }

  cancel(){
    console.log("cancel")
    this.editorContent=this.preContent;
    //this.router.navigate(['/main/user']); 
    this.ngOnInit();
  }
  
}

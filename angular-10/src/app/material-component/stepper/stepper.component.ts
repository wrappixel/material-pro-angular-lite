import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
	selector: 'app-stepper',
	templateUrl: './stepper.component.html',
	styleUrls: ['./stepper.component.scss'],
	providers: [{
	    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
	}]
})
export class StepperComponent implements OnInit {
	isLinear = false;
	firstFormGroup: FormGroup=Object.create(null);
	secondFormGroup: FormGroup=Object.create(null);

	isLinearvarient = false;
  	varientfirstFormGroup: FormGroup=Object.create(null);
 	varientsecondFormGroup: FormGroup=Object.create(null);

 	isLinearposition = false;
  	positionfirstFormGroup: FormGroup=Object.create(null);
 	positionsecondFormGroup: FormGroup=Object.create(null);


 	optionalfirstFormGroup: FormGroup=Object.create(null);
	optionalsecondFormGroup: FormGroup=Object.create(null);
	isOptional = false;

	editablefirstFormGroup: FormGroup=Object.create(null);
	editablesecondFormGroup: FormGroup=Object.create(null);
	isEditable = false;

	customizefirstFormGroup: FormGroup=Object.create(null);
	customizesecondFormGroup: FormGroup=Object.create(null);

	errorfirstFormGroup: FormGroup=Object.create(null);
	errorsecondFormGroup: FormGroup=Object.create(null);

	constructor(private _formBuilder: FormBuilder) {}

	ngOnInit() {
		this.firstFormGroup = this._formBuilder.group({
			firstCtrl: ['', Validators.required]
		});
		this.secondFormGroup = this._formBuilder.group({
			secondCtrl: ['', Validators.required]
		});

		// varient
		this.varientfirstFormGroup = this._formBuilder.group({
		      varientfirstCtrl: ['', Validators.required]
		});
		this.varientsecondFormGroup = this._formBuilder.group({
		      varientsecondCtrl: ['', Validators.required]
		});

		// position
		this.positionfirstFormGroup = this._formBuilder.group({
		      positionfirstCtrl: ['', Validators.required]
		});
		this.positionsecondFormGroup = this._formBuilder.group({
		      positionsecondCtrl: ['', Validators.required]
		});

		// optional
		this.optionalfirstFormGroup = this._formBuilder.group({
		      optionalfirstCtrl: ['', Validators.required]
		});
		this.optionalsecondFormGroup = this._formBuilder.group({
		      optionalsecondCtrl: ['', Validators.required]
		});

		// editable
		this.editablefirstFormGroup = this._formBuilder.group({
		      editablefirstCtrl: ['', Validators.required]
		});
		this.editablesecondFormGroup = this._formBuilder.group({
		      editablesecondCtrl: ['', Validators.required]
		});

		// customize
		this.customizefirstFormGroup = this._formBuilder.group({
		      customizefirstCtrl: ['', Validators.required]
		});
		this.customizesecondFormGroup = this._formBuilder.group({
		      customizesecondCtrl: ['', Validators.required]
		});

		// error
		this.errorfirstFormGroup = this._formBuilder.group({
		      errorfirstCtrl: ['', Validators.required]
		});
		this.errorsecondFormGroup = this._formBuilder.group({
		      errorsecondCtrl: ['', Validators.required]
		});
	}
}

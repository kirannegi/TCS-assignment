import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { countryAction } from "src/app/actions/weather.actions";
import { selectRegion } from "src/app/reducers";

@Component({
  selector: "app-country",
  templateUrl: "./country.component.html",
  styleUrls: ["./country.component.scss"],
})
export class CountryComponent implements OnInit {
  constructor(
    private FB: FormBuilder,
    @Inject(Store) private store: Store<any>
  ) {}

  countryForm: FormGroup;
  regionData$: Observable<any>;
  selectedIndex: number;
  countryInfo = {};
  ngOnInit() {
    this.createCountryForm();
    this.regionData$ = this.store.pipe(select(selectRegion));
  }

  createCountryForm() {
    this.countryForm = this.FB.group({
      region: ["", Validators.required],
      country: ["", Validators.required],
    });
  }

  loadCountry(region) {
    this.store.dispatch({
      type: countryAction.type,
      payload: { region },
    });
  }

  loadCountryInfo(index) {
    this.selectedIndex = index;
  }
}

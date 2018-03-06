import { Component, OnInit, ElementRef } from '@angular/core';
import { UserService } from '../services/user.service';
import { AdvertisementService } from '../services/advertisement.service';
import { Advertisement } from '../../data_model/advertisement';
import { User } from '../../data_model/user';
import { NgIf } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-view-ad-information',
  templateUrl: '../../presentation/html/view-ad-information.component.html',
  styleUrls: ['../../presentation/css/view-ad-information.component.scss']
})
export class ViewAdInformationComponent implements OnInit {

  advertisement: Advertisement;
  user: any;
  pathNameUrl: string;
  currentAdvertisementId: number;
  created_on: string;
  last_updated: string;
  deleted_on: string;
  isDeleted: boolean;
  message: string;
  userProfile: any;
  editable: boolean = false;
  error: any;

  constructor(private _advertisementService: AdvertisementService, private _userService: UserService, public auth: AuthService ) {
    this.pathNameUrl = window.location.pathname;
   }

   ngOnInit() {
    this.currentAdvertisementId = parseInt(this.getAdvertisementId(this.pathNameUrl));

    this._advertisementService.getAdvertisementById(this.currentAdvertisementId)
      .subscribe(
        res => this.advertisement = res[0],
        err => this.message = err,
        () => {this.convertDatesToText(this.advertisement);this._userService.getUserById(this.advertisement.userId)
                .subscribe(
                  res => this.user = res,
                  err => this.error = err,
                  () => this.auth.getProfile((err, profile) => {
                          var userId = profile.sub;
                          
                          //if current user made the ad, they can edit it
                          if(userId === this.advertisement.userId){
                            this.editable = true;
                          }   
                        })
                )}
                
      ); /* After data is back for advertisement, execute getUserById*/  
  }
  
  /* Given the path name of the url (everything in url after port number or host name (if port is not there))
   * will return the advertisement id from the path name of the url.
   * Input: Will look something like /view/ads/:id
   * Output: id
   */
  getAdvertisementId(pathnameUrl: string){
    var splittedParts;
    var splittedParts_length: number;
    var id: string;
   
    splittedParts = pathnameUrl.split("/");
    splittedParts_length = splittedParts.length;
    
    id = splittedParts[splittedParts_length-1];
    
    return id;
  }

  convertDatesToText(advertisement){
    this.created_on = this.convertToTextDate(advertisement.created_on);
    this.last_updated = this.convertToTextDate(advertisement.last_updated);

    if(advertisement.deleted_on != null){
      this.deleted_on = this.convertToTextDate(advertisement.deleted_on);
      this.isDeleted = true;
    }
    else{
      this.isDeleted = false;
    }

  }

  /* Takes in a string date (string_date) in formate YYYY-MM-DD and convert to MM DD, YYYY such as May 1, 2018 */
  convertToTextDate(string_date){
    var months = ["January", "February", "March", "April", "May", "June", "July", "August",
                  "September", "October", "November", "December"];
    var stringDate;
    var day;
    var month;
    var year;

    var date = new Date(string_date);
    day = date.getUTCDate();
    month = date.getUTCMonth();
    year = date.getUTCFullYear();
    
    month = months[month];
    stringDate = month + " " + day + ", " + year;
    
    return stringDate;
  }

}
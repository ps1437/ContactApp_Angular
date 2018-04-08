import { Component, OnInit } from '@angular/core';
import { PhoneBook } from './phoneBook';
import { NgForm } from '@angular/forms';
import { ContactService } from './contactService';
@Component({
  selector: "phoneApp",
  templateUrl: '/phoneBook.html',
  styleUrls: ['/style.css'],
}
)

export class ContactBook implements OnInit {

  phoneBooks: PhoneBook[];
  addPhoneBooks: PhoneBook;
 
  updatePhoneBooks: any = {
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phoneNo: 0,
    contactId: ""
  };
  editConatact: PhoneBook;
  addButton: boolean = true;
  addMsg: String;
  submit: string = "Submit";
  methodName: string = "addContact";
  constructor(private _phoneService: ContactService) {

  }


  ngOnInit() {
    this.phoneBooks = this._phoneService.viewAllContact();
  }


  addContact(phoneContact: PhoneBook, from: NgForm) {
   const status = this._phoneService.addContact(phoneContact);
    if (status) {
      this.addMsg = "Contact Added Sucessfully...";
    }
   from.reset();
  }


  deleteContact(index) {
    const status = this._phoneService.deleteContact(index);
    if (status) {
      this.addMsg = "Contact Deleted Sucessfully...";
    }
  }

  updateindex;
  editContact(index) {
    this.updatePhoneBooks.lastName = this.phoneBooks[index].lastName;
    this.updatePhoneBooks.firstName = this.phoneBooks[index].firstName;
    this.updatePhoneBooks.dob = this.phoneBooks[index].dob;
    this.updatePhoneBooks.email = this.phoneBooks[index].email;
    this.updatePhoneBooks.phoneNo = this.phoneBooks[index].phoneNo;

    this.updateindex = index;
    this.addButton = false;

  }

  updateContactForm() {

    const status = this._phoneService.updateContact(this.updatePhoneBooks, this.updateindex);
    if (status) {
      this.updatePhoneBooks = {};
      this.addMsg = "Contact Updated Sucessfully...";
      this.addButton = true;
    }
  }
}



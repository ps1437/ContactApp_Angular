import { Injectable } from '@angular/core';
import { PhoneBook } from './phoneBook'


@Injectable()
export class ContactService {


  phoneBooks: PhoneBook[];



  addContact(phoneBook): boolean {
    phoneBook.contactId = phoneBook.firstName.charAt(0) + phoneBook.lastName.charAt(1) + phoneBook.phoneNo;
    this.phoneBooks.push(phoneBook);
    return true;
  }

  viewAllContact(): PhoneBook[] {

    return this.phoneBooks = [{
      firstName: "praveen",
      lastName: "soni",
      dob: "01/02/2019",
      email: "praveen369soni@gmail.com",
      phoneNo: 8297685120,
      contactId: "ABC"
    },
    {
      firstName: "JAy",
      lastName: "soni",
      dob: "01/02/2019",
      email: "praveen369soni@gmail.com",
      phoneNo: 8297685120,
      contactId: "BCA"
    },
    {
      firstName: "Roy",
      lastName: "soni",
      dob: "01/02/2019",
      email: "praveen369soni@gmail.com",
      phoneNo: 8297685120,
      contactId: "CDA"
    },
    {
      firstName: "Vikash",
      lastName: "soni",
      dob: "01/02/2019",
      email: "praveen369soni@gmail.com",
      phoneNo: 8297685120,
      contactId: "EFA"
    }];
  }

  deleteContact(index): boolean {

    try {
      this.phoneBooks.splice(index, 1);
      return true;
    } catch (error) {

    }
  }

  updateContact(phoneBook, indexVal): boolean {

    for (let i = 0; i < this.phoneBooks.length; i++) {
      if (i == indexVal) {
        this.phoneBooks[i] = phoneBook;
        return true;
      }

    }

  }


}
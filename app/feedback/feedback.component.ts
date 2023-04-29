import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ViewChild, ElementRef} from '@angular/core';
interface Policeman {
  name: string;
  stars: number;
}
@Component({
  selector: "app-feedback",
  templateUrl: "./feedback.component.html",
  styleUrls: ["./feedback.component.css"],
})

export class FeedbackComponent implements OnInit {
  @ViewChild('overlay') overlay!: ElementRef;

  name: string = "";
  age: number | undefined;
  city: string = "";
  area: string = "";
  policeStation: string = "";
  feedback: string = "";
  policeman:string="";
  registeredFIR: string = "";
  rating: number | undefined;
  formdone: boolean = false;
  getpolice: boolean = false;
  cities: string[] = ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Junagadh'];


  constructor(private http: HttpClient) {
  }

  ngAfterViewInit(): void {
    this.fadeOut();
  }
  ngOnInit(): void {
    // Add event listener to window object to hide popup when clicking outside of it
    window.addEventListener('click', (event) => {
      if (event.target == document.querySelector('.popup-card')) {
        this.hidePopup();
      }
    });
  }
  hidePopup(): void {
    this.showingPopup = false;
  }
  fadeOut() {
    setTimeout(() => {
      this.overlay.nativeElement.style.opacity = '0';
      setTimeout(() => {
        this.overlay.nativeElement.style.display = 'none';
      }, 1000);
    }, 0);
  }


  submitFeedback() {
    if (!this.name || !this.city || !this.feedback) {
      alert("Please fill in all required fields.");
      return;
    }
    const feedbackData = {
      name: this.name,
      age: this.age,
      city: this.city,
      area: this.area,
      policeStation: this.policeStation,
      policeman: this.policeman,
      feedback: this.feedback,
      registeredFIR: this.registeredFIR,
      rating: this.rating,
    };

    this.http.post("http://localhost:3010/feedbacks", feedbackData).subscribe(
      (response) => {
        console.log(response);
        this.formdone = true;
        this.name= "";
        this.age=undefined;
        this.city= "";
        this.area= "";
        this.policeStation= "";
        this.feedback = "";
        this.policeman="";
        this.registeredFIR = "";
        this.rating= undefined;
      },
      (error) => {
        console.error(error);
        alert("Error submitting feedback. Please try again later.");
      }
    );
  }

  showingPopup = false;
  selectedCity: string='';
  policeData: { [city: string]: Policeman[] } = {
    Ahmedabad: [
      { name: 'Ajay Singh', stars: 5 },
      { name: 'Manoj Patel', stars: 4 },
      { name: 'Ritu Sharma', stars: 3 },
      { name: 'Sunil Desai', stars: 4 },
      { name: 'Rajesh Khanna', stars: 5 }
    ],
    Surat: [
      { name: 'Sanjay Gupta', stars: 4 },
      { name: 'Anjali Verma', stars: 5 },
      { name: 'Deepak Kumar', stars: 3 },
      { name: 'Kiran Reddy', stars: 4 },
      { name: 'Nitin Singhania', stars: 5 }
    ],
    Vadodara: [
      { name: 'Vijay Rana', stars: 3 },
      { name: 'Amita Patel', stars: 4 },
      { name: 'Rakesh Sharma', stars: 5 },
      { name: 'Rita Patel', stars: 4 },
      { name: 'Mukesh Mehta', stars: 3 }
    ],
    Rajkot: [
      { name: 'Suresh Joshi', stars: 5 },
      { name: 'Jyoti Patel', stars: 4 },
      { name: 'Arjun Singh', stars: 5 },
      { name: 'Bhavna Desai', stars: 3 },
      { name: 'Manish Shah', stars: 4 }
    ],
    Bhavnagar: [
      { name: 'Kamal Singh', stars: 3 },
      { name: 'Chhaya Patel', stars: 4 },
      { name: 'Rahul Mehta', stars: 5 },
      { name: 'Pooja Singh', stars: 4 },
      { name: 'Rajendra Patel', stars: 3 }
    ],
    Jamnagar: [
      { name: 'Amit Shah', stars: 5 },
      { name: 'Prachi Patel', stars: 4 },
      { name: 'Kunal Desai', stars: 3 },
      { name: 'Nisha Singh', stars: 4 },
      { name: 'Hemant Mehta', stars: 5 }
    ],
    Junagadh: [
      { name: 'Ramesh Patel', stars: 4 },
      { name: 'Smita Desai', stars: 5 },
      { name: 'Sagar Singh', stars: 3 },
      { name: 'Neha Patel', stars: 4 },
      { name: 'Vikram Mehta', stars: 5 }
    ]
};

  policemen: Policeman[] =[];
  
  showPopup() {
  this.showingPopup = true;
  }
  
  getPolicemen() {
  this.policemen = this.policeData[this.selectedCity];
  this.getpolice = true;
  }
  }    

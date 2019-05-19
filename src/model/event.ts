    export class EventConnect {
        timestart: string;
        timeend:string;
        date:string;
        eventlocation:string;
        description:string;
        eventimage: string;
    
            constructor(timestart ='',  timeend = '',
            date = '', eventlocation = '',
            description = '', eventimage = '') {
                this.timestart = timestart;
                this.timeend = timeend;
                this.date = date;
                this.eventlocation = eventlocation;
                this.description = description;
                this.eventimage = eventimage;
          }
      }
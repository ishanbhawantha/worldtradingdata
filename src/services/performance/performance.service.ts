import { Injectable, HttpService, Request } from '@nestjs/common';
import * as axios from 'axios';
import { performanceDto } from '../../dtos/performance.dto';

//This is services class and Http request gose here.
//Use axios to perform Http request to the remote server because it is more flexible than the builtin
//http service
@Injectable()
export class PerformanceService {
  private symbol: string;
  private date_from: string; //2018-01-02 like this
  private date_to: string; //2018-01-02 like this

  baseUrl = 'https://api.worldtradingdata.com/api/v1/history';
  apiToken = '';

  constructor(private http: HttpService) {}

  async getRangeData(ts, startDate, endDate): Promise<any> {
    //Take the arguments to the variables.
    this.symbol = ts;
    this.date_from = startDate;
    this.date_to = endDate;

    //Final URL to be requested.
    var finalUrl =
      this.baseUrl +
      '?symbol=' +
      this.symbol +
      '&sort=asc&formatted=false&api_token=' +
      this.apiToken +
      '&date_to=' +
      this.date_to +
      '&date_from=' +
      this.date_from;

    //Http get request and handle the response as the promices
    //Initiate a performanceDTO object and pass the values which get from the remote server.
    return await axios.default
      .get(finalUrl)
      .then(value => new performanceDto(value.data))
      .catch(error => error);
  }
}

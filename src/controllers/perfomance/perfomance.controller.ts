import { Controller, Get, Param,Res, HttpStatus } from '@nestjs/common';
import { PerformanceService } from '../../services/performance/performance.service';
import { Response } from 'express';

@Controller('get_performance')
//Controller for get the performance. [Entry point for the application]
//Every call you make /get_performance will route through this.
export class PerfomanceController {

    //We injected service through the constructor to use within the controller.
    constructor(private perfomance: PerformanceService){}
    
    //Within the Get annotation we marked this is a get request with the parameters of :symbol :start :end
    @Get(':ts/:start/:end')
    // we accesed this using async and await.
    async get_performance(@Param() params,@Res() res: Response) {

        // Get the url paramaters with the @Params annotations.
        return await this.perfomance.getRangeData(params.ts, params.start, params.end)
                .then(function (value) {
                    //In success scenario get the object from the services layer and then make response as success
                    // and like Json.
                    var jobj = JSON.stringify(value);
                    res.status(HttpStatus.OK).send(jobj);

                })
                .catch(function (error){
                    //In failer case we respond with the bad request status code.
                    res.status(HttpStatus.BAD_REQUEST).send("Your request is not valid");

                });
        
    }
}

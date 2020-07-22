using System.Collections.Generic;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using TodoApi.Data;
using TodoApi.Models;

namespace TodoApi.Controllers
{
    [Route("api/bills")]
    [ApiController]
    [EnableCors("MyPolicy")]


    public class BillsController:ControllerBase{
        private readonly IBillsRepo _repository;

        // private readonly object _repository;

        public BillsController(IBillsRepo repository)
        {
            _repository = repository;
        }

        [HttpPost]
        public ActionResult <BillDetails> CreateBill(BillDetails bill){
            var createdbill = _repository.CreateBill(bill);
            return Ok(createdbill);
        }

        [HttpGet]
        public ActionResult <IEnumerable<BillDetails>> GetAllBills(){
            var bills = _repository.GetAllBills();
            return Ok(bills);
        }

        [HttpGet("{id}")]
        public ActionResult <BillDetails> GetBillById(int id){
            var bill = _repository.GetBillById(id);
            return Ok(bill);
        }

        //[Route("api/createbill")]

        //[Route("api/editbill")]
        [HttpPut]

        public ActionResult <bool> EditBill(BillDetails bill){
            var editbill = _repository.EditBill(bill);
            return Ok(editbill);
        }

        [HttpDelete("{id}")]

        public ActionResult<bool> DeleteBill(int id) {

            return Ok(_repository.DeleteBill(id)); 

        }
    }
}


    

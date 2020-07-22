using System.Collections.Generic;
using TodoApi.Models;

namespace TodoApi.Data{
    public interface IBillsRepo
    {
        IEnumerable<BillDetails> GetAllBills();
        BillDetails GetBillById(int id);

        BillDetails CreateBill(BillDetails bill);

        // bool SaveChanges();
        bool DeleteBill(int id);
        bool EditBill(BillDetails bill);
    }
}
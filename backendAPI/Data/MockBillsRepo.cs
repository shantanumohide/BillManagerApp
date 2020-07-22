using System;
using System.Collections.Generic;
using TodoApi.Models;

namespace TodoApi.Data
{
    public class MockBillsRepo : IBillsRepo
    {
        private List<BillDetails>Bills = new List<BillDetails>();
        private int _nextId=1;

        public MockBillsRepo()
        {
            //    CreateBill(new BillDetails{Id=0, BillTitle="Capital One Credit Card", BillAmount=400, DueDate="Jan 17", paidinadvance=true});
            //    CreateBill(new BillDetails{Id=0, BillTitle="Capital One Credit Card", BillAmount=400, DueDate="Jan 17", paidinadvance=true});
            //    CreateBill(new BillDetails{Id=0, BillTitle="Capital One Credit Card", BillAmount=400, DueDate="Jan 17", paidinadvance=true});    
        }


        
        public BillDetails CreateBill(BillDetails bill)
        {
            if(bill==null){
                throw new ArgumentNullException("bill");
            }
            bill.Id=_nextId++;
            Bills.Add(bill);
            return bill;
        }

        public bool DeleteBill(int id){
            Bills.RemoveAll(p=>p.Id==id);
            return true;
        }

        public bool EditBill(BillDetails bill)
        {
            if(bill == null)
            {
                throw new ArgumentNullException("bill");
            }
            int index = Bills.FindIndex(p => p.Id == bill.Id);
            if (index == -1)
            {
                return false;
            }
            Bills.RemoveAt(index);
            Bills.Add(bill);
            Bills.Sort((x, y) => x.Id.CompareTo(y.Id));
            return true;
        }


        public IEnumerable<BillDetails> GetAllBills()
        {
           return Bills;
        }

        public BillDetails GetBillById(int id)
        {
            // if(bill == null)
            // {
            //     throw new ArgumentNullException("bill");
            // }
            int index = Bills.FindIndex(p=>p.Id==id);
            if(index==-1){
                return null;
            }
            return Bills[index];
        }

        // public bool SaveChanges()
        // {
        //     throw new System.NotImplementedException();
        // }
    }
}
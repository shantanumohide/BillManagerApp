namespace TodoApi.Models{
    public class BillDetails{
        public int Id { get; set; }
        public string BillTitle { get; set; }
        public int BillAmount { get; set; }
        public string DueDate { get; set; }
        public bool paidinadvance { get; set; }
      
    }
}
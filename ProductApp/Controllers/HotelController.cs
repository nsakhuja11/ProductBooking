using ProductApp.Models;
using ProductClass;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProductApp.Controllers
{
    public class HotelController : ApiController
    {
        [HttpGet]
        public IEnumerable<HotelProduct> GetHotelssList()
        {
            using (ProductEntities hotelObject = new ProductEntities())
            {
                return hotelObject.HotelProducts.ToList();
            }
        }

        [HttpPost]
        public void AddHotelToList([FromBody]HotelProduct product)
        {
            using (ProductEntities hotelObject = new ProductEntities())
            {
                hotelObject.HotelProducts.Add(product);
                hotelObject.SaveChanges();
            }
        }

        [HttpPut]
        public void ChangeStatus([FromBody]Product product)
        {
            using (ProductEntities hotelObject = new ProductEntities())
            {
                if (product.activity == "Book")
                {
                    hotelObject.HotelProducts.Find(product.id).IsBooked = "True";
                    hotelObject.SaveChanges();
                }
                else
                {
                    hotelObject.HotelProducts.Find(product.id).IsSaved = "True";
                    hotelObject.SaveChanges();
                }
            }
        }
    }
}

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
    public class AirController : ApiController
    {
        [HttpGet]
        public IEnumerable<AirProduct> GetFlightsList()
        {
            using (ProductEntities airObject = new ProductEntities())
            {
                return airObject.AirProducts.ToList();
            }
        }

        [HttpPost]
        public void AddFlightToList([FromBody]AirProduct product)
        {
            using (ProductEntities airObject = new ProductEntities())
            {
                airObject.AirProducts.Add(product);
                airObject.SaveChanges();
            }
        }

        [HttpPut]
        public void ChangeStatus([FromBody]Product product)
        {
            using (ProductEntities airObject = new ProductEntities())
            {
                if (product.activity == "Book")
                {
                    airObject.AirProducts.Find(product.id).IsBooked = "True";
                    airObject.SaveChanges();
                }
                else
                {
                    airObject.AirProducts.Find(product.id).IsSaved = "True";
                    airObject.SaveChanges();
                }
            }
        }
    }
}

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
    public class CarController : ApiController
    {
        [HttpGet]
        public IEnumerable<CarProduct> GetCarsList()
        {
            using(ProductEntities carObject = new ProductEntities())
            {
                return carObject.CarProducts.ToList();
            }
        }

        [HttpPost]
        public void AddCarToList([FromBody]CarProduct product)
        {
            using(ProductEntities carObject = new ProductEntities())
            {
                carObject.CarProducts.Add(product);
                carObject.SaveChanges();
            }
        }

        [HttpPut]
        public void ChangeStatus([FromBody]Product product)
        {
            using(ProductEntities carObject = new ProductEntities())
            {
                if (product.activity == "Book")
                {
                    carObject.CarProducts.Find(product.id).IsBooked = "True";
                    carObject.SaveChanges();
                }
                else
                {
                    carObject.CarProducts.Find(product.id).IsSaved = "True";
                    carObject.SaveChanges();
                }
            }
        }
    }
}

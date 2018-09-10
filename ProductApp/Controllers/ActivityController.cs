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
    public class ActivityController : ApiController
    {
        [HttpGet]
        public IEnumerable<ActivityProduct> GetActivitiesList()
        {
            using (ProductEntities activityObject = new ProductEntities())
            {
                return activityObject.ActivityProducts.ToList();
            }
        }

        [HttpPost]
        public void AddActivityToList([FromBody]ActivityProduct product)
        {
            using (ProductEntities activityObject = new ProductEntities())
            {
                activityObject.ActivityProducts.Add(product);
                activityObject.SaveChanges();
            }
        }

        [HttpPut]
        public void ChangeStatus([FromBody]Product product)
        {
            using (ProductEntities activityObject = new ProductEntities())
            {
                if (product.activity == "Book")
                {
                    activityObject.ActivityProducts.Find(product.id).IsBooked = "True";
                    activityObject.SaveChanges();
                }
                else
                {
                    activityObject.ActivityProducts.Find(product.id).IsSaved = "True";
                    activityObject.SaveChanges();
                }
            }
        }
    }
}

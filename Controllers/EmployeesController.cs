using Microsoft.AspNetCore.Mvc;
using EmployeeManagement.Models;
using System.Collections.Generic;
using System.Linq;

namespace EmployeeManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private static List<Employee> employees = new List<Employee>
        {
            new Employee { Id = 1, Name = "Serkan", Age = 28, Department = "IT" },
            new Employee { Id = 2, Name = "Olcay", Age = 27, Department = "HR" },
            new Employee { Id = 3, Name = "Murat", Age = 20, Department = "Development" },
            new Employee { Id = 4, Name = "Eren", Age = 25, Department = "Accounting" },
            new Employee { Id = 5, Name = "Mert", Age = 32, Department = "Sales" }
        };

        //Bütün çalışanlar
        [HttpGet]
        public ActionResult<List<Employee>> GetEmployees()
        {
            return Ok(employees);
        }

        //ID'ye göre çalışan getirme
        [HttpGet("{id}")]
        public ActionResult<Employee> GetEmployeeById(int id)
        {
            var employee = employees.FirstOrDefault(e => e.Id == id);
            if (employee == null)
            {
                return NotFound();
            }
            return Ok(employee);
        }

        //Yeni çalışan ekleme
        [HttpPost]
        public ActionResult<Employee> AddEmployee(Employee employee)
        {
            employee.Id = employees.Count > 0 ? employees.Max(e => e.Id) + 1 : 1;
            employees.Add(employee);
            return CreatedAtAction(nameof(GetEmployeeById), new { id = employee.Id }, employee);
        }

        //Var olan bir çalışanı güncelleme
        [HttpPut("{id}")]
        public ActionResult UpdateEmployee(int id, Employee updatedEmployee)
        {
            var employee = employees.FirstOrDefault(e => e.Id == id);
            if (employee == null)
            {
                return NotFound();
            }

            employee.Name = updatedEmployee.Name;
            employee.Age = updatedEmployee.Age;
            employee.Department = updatedEmployee.Department;

            return NoContent();
        }

        //Bir çalışanı silme
        [HttpDelete("{id}")]
        public ActionResult DeleteEmployee(int id)
        {
            var employee = employees.FirstOrDefault(e => e.Id == id);
            if (employee == null)
            {
                return NotFound();
            }

            employees.Remove(employee);
            return NoContent();
        }
    }
}

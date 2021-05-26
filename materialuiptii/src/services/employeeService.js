const KEYS = {
    employees: 'employees',
    employeeId: 'employeeId'
}

export const getDepartmentCollection = () => ([
    {
        id: 1,
        title: 'Development'
    },
    {
        id: 2,
        title: 'Marketing'
    },
    {
        id: 3,
        title: 'Accounting'
    },
    {
        id: 4,
        title: 'HR'
    }
])

 export const addEmployee = (data) => {
    let employees = getAllEmployees()
    data['id'] = generateEmployeeID()
    employees.push(data)
    localStorage.setItem(KEYS.employees, JSON.stringify(employees))
 }

 export const updateEmployee = (data) => {
    let employees = getAllEmployees()
    let recIndex = employees.findIndex(x=>x.id===data.id)
    employees[recIndex]={...data}
    localStorage.setItem(KEYS.employees, JSON.stringify(employees))
 }

 export const generateEmployeeID = () => {
    if(localStorage.getItem(KEYS.employeeId) == null)
        localStorage.setItem(KEYS.employeeId, '0')
    var id = parseInt(localStorage.getItem(KEYS.employeeId))
    localStorage.setItem(KEYS.employeeId, (++ id).toString())
    return id;
 }

 export const deleteEmployee = (id) => {
    let employees = getAllEmployees()
    employees = employees.filter(x=>x.id !== id)
    localStorage.setItem(KEYS.employees, JSON.stringify(employees))
 }
 
 export const getAllEmployees = () => {
    if(localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))

    let employees = JSON.parse(localStorage.getItem(KEYS.employees))

    //Map DeptID to DeptTitle
    let departments = getDepartmentCollection()
    // console.log('departments', departments)
    // console.log('employees.emp', employees)

    return employees.map(emp => ({
        ...emp,
         department: departments[emp.departmentId-1].title
    }))
 }
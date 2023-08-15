'use server'

const getUser = [
    {
      name: "Izabella dos Santos Miranda",
      email: "izabella.miranda@gmail.com",
      password:"iza123",
      token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    },

    {
        name: "Any Santos",
        email: "any.santos@gmail.com",
        password:"any123",
        token:"eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.bQTnz6AuMJvmXXQsVPrxeQNvzDkimo7VNXxHeSBfClLufmCVZRUuyTwJF311JHuh"
      },

      {
        name: "Gabriel Diniz",
        email: "gabriel.diniz@gmail.com",
        password:"gab123",
        token:"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.VFb0qJ1LRg_4ujbZoRMXnVkUgiuKq5KxWqNdbKq_G9Vvz-S1zZa9LPxtHWKa64zDl2ofkT8F6jBt_K4riU-fPg"
      }
]


const getUserAuthenticated = (userLogin) => {
    let userconfirm = [];
    
    getUser.map((user) =>{
        if(user.email === userLogin.email && user.password === userLogin.password){
            userconfirm = user
        }
    })

    return userconfirm
}
    

const getUsers = () =>{
        return getUser
}
export { getUsers, getUserAuthenticated };
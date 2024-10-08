import { useState} from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate(); 



    const get = () => {
    

      fetch('https://66ef2b583ed5bb4d0bf2f4ac.mockapi.io/login')
        .then((response) => response.json())
        .then((json) => {
          
          if (json.find((item) => item.name === name && item.pass === pass)) {
            alert("تم تسجيل الدخول بنجاح");
               navigate('/Home')
          } else {
            alert("تأكد من اسم المستخدم أو كلمة المرور");
            return
          }
        })

    };
  

  return (
    <div className="w-[100%] h-[100vh] flex flex-row-reverse justify-evenly text-right items-center h-screen bg-black max-sm:justify-center max-sm:justify-around">
      <div className="w-[25%] max-sm:hidden">
        <svg className="bg-black" viewBox="0 0 24 24" aria-hidden="true">
          <g>
            <path stroke="#ffffff" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </g>
        </svg>
      </div>

      <div className="card bg-base-100 h-[70vh] flex flex-col justify-center items-center justify-around w-96 shadow-xl max-sm:w-[90%]">
        <div className="card-body bg-black flex flex-col justify-center justify-around">
          <h2 className="card-title text-white flex justify-center text-4xl mb-2 font-bold">تسجيل الدخول إلى x</h2>

          <div className="flex justify-center items-center gap-4 flex-col max-md:h-[25vh] h-[20vh]">
            <div className="border border-white bg-white w-[95%] rounded-3xl flex flex-row-reverse justify-between p-3">
              <h1 className="text-black">تسجيل الدخول باسم</h1>
              <img className="w-[10%]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7JaI54p1i3v3WAoqEiQE1Jduquut71TkNSKSTNoixuv9DQQGdj61Ex_10nv6NM5wIhY&usqp=CAU" alt="" />
            </div>

            <div className="border border-white bg-white w-[95%] rounded-3xl flex flex-row-reverse justify-between p-3">
              <h1 className="text-black">تسجيل باستخدام Apple</h1>
              <img className="w-[10%]" src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="" />
            </div>
          </div>

          <div className="divider text-white m-0 divider-neutral">أو</div>
          <div className="flex justify-center items-center flex-col h-[20vh]">
      
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border mt-10  text-right border-gray-500 text-white bg-black w-[95%] max-md:mt-20 p-3 mb-4"
                placeholder="اسم المستخدم"
              />
              <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="border text-right border-gray-500 text-white bg-black w-[95%] p-3 mb-7"
                placeholder="الرقم السري"
              />
                <button
                type="submit" onClick={get}
                className="text-black bg-white flex justify-center items-center w-[95%] rounded-3xl p-3 text-xl"
              >
                التالي
              </button>            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

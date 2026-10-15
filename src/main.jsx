
import React,{useState} from "react";
import {createRoot} from "react-dom/client";
import "./style.css";

function App(){
 const [payments,setPayments]=useState([{date:"",amount:""}]);
 const addPayment=()=>setPayments([...payments,{date:"",amount:""}]);
 const changePayment=(i,k,v)=>{
   const x=[...payments]; x[i][k]=v; setPayments(x);
 };
 const totalPaid=payments.reduce((a,b)=>a+(Number(b.amount)||0),0);

 return <div className="app">
 <header>
  <div className="logo">ARTEMIS</div>
  <h1>پنل پذیرش کلینیک دندانپزشکی</h1>
 <p role="note">پیش‌نمونه رابط؛ اطلاعات ذخیره نمی‌شوند و با بارگذاری دوباره پاک می‌شوند.</p>
 </header>

 <section className="box">
 <h2>جستجوی پرونده بیمار</h2>
 <input placeholder="کد ملی"/>
 </section>

 <section className="box">
 <h2>مشخصات بیمار</h2>
 <div className="grid">
 {["نام بیمار","نام پدر","تاریخ تولد","سن","نام پزشک","شماره تلفن","تاریخ مراجعه","انتخاب دندان"].map(x=>
 <div className="field" key={x}><label>{x}</label><input aria-label={x}/></div>)}
 </div>
 </section>

 <section className="box">
 <h2>حسابداری و پرداخت‌های مرحله‌ای</h2>
 <div className="grid">
 <div className="field"><label>هزینه کل</label><input/></div>
 <div className="field"><label>مجموع پرداختی ثبت شده</label><input value={totalPaid} readOnly/></div>
 <div className="field"><label>باقی مانده</label><input readOnly/></div>
 </div>

 <h3>تاریخچه پرداخت بیمار</h3>
 {payments.map((p,i)=>
 <div className="payment" key={i}>
  <div>
   <label>تاریخ پرداخت جلسه {i+1}</label>
   <input type="date" value={p.date} onChange={e=>changePayment(i,"date",e.target.value)}/>
  </div>
  <div>
   <label>مبلغ پرداختی</label>
   <input type="number" value={p.amount} onChange={e=>changePayment(i,"amount",e.target.value)}/>
  </div>
 </div>
 )}
 <button onClick={addPayment}>+ اضافه کردن جلسه پرداخت</button>
 </section>

 <section className="box">
 <h2>شرح درمان</h2>
 <textarea placeholder="مثلا جلسه اول عصب کشی، جلسه دوم ترمیم..."/>
 </section>

 <button disabled title="ذخیره‌سازی در این پیش‌نمونه پیاده‌سازی نشده است">ثبت اطلاعات</button>
 <button className="dark" disabled title="ویرایش پرونده در این پیش‌نمونه پیاده‌سازی نشده است">ویرایش اطلاعات</button>
 </div>
}
createRoot(document.getElementById("root")).render(<App/>)

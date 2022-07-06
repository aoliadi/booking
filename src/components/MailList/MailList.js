import mail from "./maillist.module.css";

function MailList() {
  return (
    <section className={mail.container}>
      <header className="">
        <h2 className={mail.heading}>Save time, save money!</h2>
        <p className={mail.copy}>
          Sign up and we'll send the best deals to you
        </p>
      </header>
      <form action="" className={mail.form}>
        <input type="email" name="email" className={mail.input} />
        <button type="submit" className={mail.btn}>
          Subscribe
        </button>
        <label className={mail.small}>
          <input type="checkbox" name="" id="" />
          Send me a link to get FREE Booking.com app!
        </label>
      </form>
    </section>
  );
}

export default MailList;

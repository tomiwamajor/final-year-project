export default function SignUp() {
  return (
    <div>
      <form method="post">
        <label htmlFor="first">First Name</label>
        <input
          type="text"
          id="first"
          aria-label="First Name"
          placeholder="first name"
          name="surname"
          required
        />

        <label htmlFor="last">Last Name</label>
        <input
          type="text"
          id="last"
          aria-label="Last Name"
          placeholder="first name"
          name="other name"
          required
        />

        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          aria-label="Email"
          placeholder="email@iSuits.com"
          name="mail"
          required
        />
      </form>
    </div>
  );
}

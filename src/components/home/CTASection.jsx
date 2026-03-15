import { Link } from "react-router-dom";

export default function CtaSection() {
  return (
    <>

      {/* LANDLORD CTA */}

      <section className="py-28 text-center text-white bg-blue-900">

        <h2 className="text-4xl font-bold">
          Are you a Landlord?
        </h2>

        <p className="mt-4">
          List your boarding house and reach ESSU students.
        </p>

        <Link to="/register">

          <button className="px-8 py-4 mt-8 text-blue-900 bg-white rounded-full">
            List Property
          </button>

        </Link>

      </section>



      {/* FINAL CTA */}

      <section className="py-28 text-center">

        <h2 className="text-4xl font-bold">
          Ready to Find Your Boarding House?
        </h2>

        <Link to="/browse">

          <button className="px-10 py-4 mt-8 text-white bg-blue-900 rounded-full">
            Browse Now
          </button>

        </Link>

      </section>

    </>
  );
}
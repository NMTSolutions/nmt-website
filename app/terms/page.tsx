import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import "./terms.css";

const Terms = () => {
  return (
    <main className="container no-scrollbar">
      <NavBar />
      <section className="terms">
        <section>
          <span>Last updated on : 01/03/2023</span>
          <h1>Terms & Conditions</h1>
          <h3>
            Welcome to NMT Solutions (“Company”, “we”, “our”, “we”)!
            <br /> These Terms of Service (“Terms”, “Terms of Service”) govern
            your use of the website available at NMT Solutions. (together with
            each “Service”) used by NMT Solutions.
            <br /> Our Privacy Policy also governs your use of our Service and
            describes how we collect, protect and disclose information from your
            use of our web pages.You acknowledge that you have read and
            understood the Conventions, and acknowledge that you are committed
            to them.
            <br /> If you do not agree to (or cannot comply with) Agreements,
            then you may not use the Service, but please let us know by sending
            an email to{" "}
            <a href="mailto: nanomacrotech.solutions@gmail.com">
              nanomacrotech.solutions@gmail.com
            </a>{" "}
            to try and find a solution.
          </h3>
        </section>
        <section>
          <h1>Communication</h1>
          <h3>
            By using our Service, you agree to subscribe to our newsletters,
            marketing or promotional materials and other information we may send
            to you.However, you can unsbuscribe to these services by writing to
            us on{" "}
            <a href="mailto: nanomacrotech.solutions@gmail.com">
              nanomacrotech.solutions@gmail.com
            </a>
            .
          </h3>
        </section>
        <section>
          <h1>Shopping</h1>
          <h3>
            If you wish to purchase any product or service available (“Buy”),
            you may be required to provide certain information related to your
            Purchase, but not limited to, your credit or bank card number, the
            expiry date of your card, your billing address, and your shipping
            information. You represent and accept that:
            <br /> (i) you have the legal right to use any cards or other
            payment methods in connection with any Purchase; and
            <br /> (ii) the information you give us is true, correct and
            complete.
            <br /> We may also use third-party services to facilitate payment
            and termination of purchases. By submitting your information, you
            give us the right to provide information to these third parties
            under our Privacy Policy.
            <br /> We reserve the right to reject or cancel your order at any
            time for reasons that include but are not limited to:
            <br />
            Availability of the product or service.
            <br /> We reserve the right to reject or cancel your order on
            suspicion of fraud or unauthorized transactions.
          </h3>
        </section>
        <section>
          <h1>Competitions and Promotions</h1>
          <h3>
            Any contests or other promotion (inclusive, “Promotions”) made
            available by the Service may be governed by the rules contrary to
            these Terms of Service. If you are participating in any of the
            promotions or contests, please review the applicable laws and our
            Privacy Policy.
          </h3>
        </section>
        <section>
          <h1>Refunds</h1>
          <h3>Please go through the refund policy section.</h3>
        </section>
        <section>
          <h1>Content</h1>
          <h3>
            The content found on this service or through this service is the
            property of NMT Solutions and should be used with permission. You
            agree that you will not exchange, transfer, reuse, distribute, copy,
            share, or otherwise use the said content, in whole or part of
            content, for commercial or personal gain, without our consent.
          </h3>
        </section>
        <section>
          <h1>Prohibited Use</h1>
          <h3>
            You agree to use the Service only as per the Terms (current or
            modified).
            <br />
            You agree not to use:
            <br />
            <ul>
              <li>
                In a way that is against any applicable national or
                international law or regulation.
              </li>
              <li>
                Transfer, or gain postage, of any promotion or promotional
                material, including any junk email, newsletter, spam, or any
                other similar request.
              </li>
              <li>
                In any way that violates or copies or duplicates the rights and
                content of others, or in any way illegal, fraudulent,
                intimidating, or harmful, or in connection with any fraudulent,
                unlawful, illegal, or harmful activity or purpose.
              </li>
              <li>
                In a way that may be harmful or offensive to the Company or the
                Service Providers or expose them to credit.
              </li>
            </ul>
          </h3>
        </section>
        <section>
          <h1>Content</h1>
          <h3>
            The content found on this service or through this service is the
            property of NMT Solutions and should be used with permission. You
            agree that you will not exchange, transfer, reuse, distribute, copy,
            share, or otherwise use the said content, in whole or part of
            content, for commercial or personal gain, without our consent.
          </h3>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default Terms;

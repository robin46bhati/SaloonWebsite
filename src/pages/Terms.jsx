import SEO from "../components/ui/SEO";
import PageHero from "../components/ui/PageHero";
import LegalSection, { LegalWrapper } from "../components/legal/LegalSection";
import { siteConfig } from "../data/siteConfig";

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Terms and conditions for booking services at Anjali Makeup Studio."
        path="/terms-and-conditions"
      />

      <PageHero
        eyebrow="Please Read"
        title="Terms & Conditions"
        description="The terms that apply when you book a service with Anjali Makeup Studio."
        crumb="Terms & Conditions"
      />

      <LegalWrapper lastUpdated="July 21, 2026">
        <LegalSection title="1. Bookings & Appointments">
          <p>
            Appointments can be booked via phone, WhatsApp, or by visiting the
            studio in person. Walk-ins are welcome, subject to availability. For
            bridal and engagement bookings, we recommend confirming your slot at
            least 2–3 weeks in advance.
          </p>
        </LegalSection>

        <LegalSection title="2. Pricing">
          <p>
            Prices listed on this website reflect our current standard rates and
            are subject to change without prior notice. Final pricing for your
            appointment — including any customizations, add-ons, or travel for
            home service — will always be confirmed with you before the service
            begins.
          </p>
        </LegalSection>

        <LegalSection title="3. Cancellations & Rescheduling">
          <p>
            We understand that plans can change. We request at least 48 hours'
            notice for cancellations or rescheduling of bridal and package
            bookings, so we can accommodate other clients. Repeated late
            cancellations may affect future booking priority.
          </p>
        </LegalSection>

        <LegalSection title="4. Advance Payment for Bridal Bookings">
          <p>
            For bridal packages, an advance booking amount may be requested to
            confirm your date. This amount and its terms will be communicated to
            you directly at the time of booking and are not processed through this
            website.
          </p>
        </LegalSection>

        <LegalSection title="5. Client Responsibilities">
          <p>
            Please inform us in advance of any known skin sensitivities, allergies,
            or medical conditions that may affect your treatment. We recommend a
            patch test ahead of your appointment if you have known sensitivities to
            cosmetic products.
          </p>
        </LegalSection>

        <LegalSection title="6. Use of Portfolio Images">
          <p>
            With client consent, photographs from select appointments may be used
            in our portfolio, gallery, or social media for promotional purposes.
            If you do not wish your photographs to be used, please let us know
            before your appointment.
          </p>
        </LegalSection>

        <LegalSection title="7. Limitation of Liability">
          <p>
            While we take every precaution with hygienic tools and premium
            products, {siteConfig.name} is not liable for allergic reactions
            arising from undisclosed sensitivities. Results may vary based on
            individual skin type and undertone.
          </p>
        </LegalSection>

        <LegalSection title="8. Governing Law">
          <p>
            These terms are governed by the laws applicable in Haryana, India.
            Any disputes shall be subject to the jurisdiction of the courts in
            Faridabad, Haryana.
          </p>
        </LegalSection>

        <LegalSection title="9. Contact Us">
          <p>
            For any questions regarding these Terms & Conditions, please contact
            us at {siteConfig.phoneDisplay} or {siteConfig.email}.
          </p>
        </LegalSection>
      </LegalWrapper>
    </>
  );
}

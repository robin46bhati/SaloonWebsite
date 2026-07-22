import SEO from "../components/ui/SEO";
import PageHero from "../components/ui/PageHero";
import LegalSection, { LegalWrapper } from "../components/legal/LegalSection";
import { siteConfig } from "../data/siteConfig";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Read Anjali Makeup Studio's privacy policy — how we handle the information you share with us."
        path="/privacy-policy"
      />

      <PageHero
        eyebrow="Your Privacy"
        title="Privacy Policy"
        description="How we collect, use and protect the information you share with us."
        crumb="Privacy Policy"
      />

      <LegalWrapper lastUpdated="July 21, 2026">
        <LegalSection title="1. Introduction">
          <p>
            This Privacy Policy explains how {siteConfig.name} ("we", "us", "our")
            handles information when you visit our website or contact us to enquire
            about or book a service. This website is a static informational site —
            we do not operate a login system, online payments, or a backend database
            of user accounts.
          </p>
        </LegalSection>

        <LegalSection title="2. Information We Collect">
          <p>
            When you use our contact form, the details you enter (name, phone
            number, service interest, and message) are used only to open a
            pre-filled WhatsApp conversation on your own device. This information
            is not transmitted to or stored on any server we operate — it is sent
            directly from your device to our WhatsApp Business number once you
            choose to send it.
          </p>
          <p>
            If you contact us directly via phone, WhatsApp, email, or Instagram, we
            receive the information you choose to share through those platforms,
            subject to their respective privacy policies.
          </p>
        </LegalSection>

        <LegalSection title="3. How We Use Your Information">
          <p>
            Any information shared with us through calls, WhatsApp, email or social
            media is used solely to respond to your enquiry, schedule appointments,
            and provide the services you request. We do not sell or rent your
            personal information to third parties.
          </p>
        </LegalSection>

        <LegalSection title="4. Cookies & Analytics">
          <p>
            This website may use basic, privacy-respecting analytics to understand
            general traffic patterns (such as which pages are visited). No
            personally identifiable information is collected through this process.
          </p>
        </LegalSection>

        <LegalSection title="5. Third-Party Links">
          <p>
            Our website links to third-party platforms such as Instagram, Facebook,
            YouTube, WhatsApp and Google Maps. We are not responsible for the
            privacy practices of these external platforms — please review their
            respective privacy policies.
          </p>
        </LegalSection>

        <LegalSection title="6. Photography & Portfolio">
          <p>
            Portfolio images displayed in our Gallery are photographs of our own
            client work, used with consent for promotional purposes. If you would
            like an image of yourself removed from our gallery, please contact us
            and we will action your request promptly.
          </p>
        </LegalSection>

        <LegalSection title="7. Contact Us">
          <p>
            For any questions about this Privacy Policy, please reach out via
            phone or WhatsApp at {siteConfig.phoneDisplay}, or email us at{" "}
            {siteConfig.email}.
          </p>
        </LegalSection>
      </LegalWrapper>
    </>
  );
}

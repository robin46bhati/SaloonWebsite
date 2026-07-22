import { Helmet } from "react-helmet-async";

const SITE_URL = "https://anjalimakeupstudio.in";
const DEFAULT_IMAGE = "/images/gallery/bridal-maroon-lehenga.jpg";

/**
 * Drop-in SEO tag manager for every page: sets the document title,
 * meta description, canonical URL, Open Graph and Twitter Card tags.
 */
export default function SEO({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
}) {
  const fullTitle = `${title} | Anjali Makeup Studio`;
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE_URL}${image}`} />
      <meta property="og:site_name" content="Anjali Makeup Studio" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${image}`} />
    </Helmet>
  );
}

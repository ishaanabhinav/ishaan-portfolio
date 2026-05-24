import { Helmet } from 'react-helmet-async';
import { SITE } from '@/constants/site';

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
}

export const Seo = ({ title, description, path = '/' }: SeoProps) => {
  const fullTitle = title ? `${title} · ${SITE.name}` : `${SITE.name} · ${SITE.role}`;
  const desc = description ?? SITE.description;
  const url = `${SITE.url}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
  );
};

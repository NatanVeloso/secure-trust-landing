import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
}

const SEO = ({
  title = "SEGX Seguros",
  description = "Seguros personalizados com atendimento humano e transparência. Proteção completa para auto, residencial, vida e empresarial. +10 anos protegendo famílias e empresas. Faça sua cotação online agora!",
  keywords = "seguro auto, seguro veicular, seguro carro, seguro residencial, seguro de vida, seguro empresarial, cotação seguro online, seguro barato, seguro confiável, corretora de seguros, SEGX Seguros",
  image = "https://www.segxseguros.com.br/og-image.jpg",
  url = "https://www.segxseguros.com.br/",
  type = "website",
  noindex = false,
}: SEOProps) => {
  const siteUrl = "https://www.segxseguros.com.br";
  const fullUrl = url.startsWith('http') ? url : `${siteUrl}${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="SEGX Seguros" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* WhatsApp */}
      <meta property="og:image:type" content="image/jpeg" />
    </Helmet>
  );
};

export default SEO;

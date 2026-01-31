import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "How Spaxio Started",
  description:
    "Stefano Polidori shares how Spaxio began in Montreal in January 2026 and how AI-accelerated building shaped the company."
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How Spaxio Started",
  author: {
    "@type": "Person",
    name: "Stefano Polidori"
  },
  publisher: {
    "@type": "Organization",
    name: "Spaxio",
    logo: {
      "@type": "ImageObject",
      url: "https://spaxio.ca/logo.png"
    }
  },
  datePublished: "2026-01-15",
  mainEntityOfPage: "https://spaxio.ca/blog",
  image: "https://spaxio.ca/logo.png",
  description:
    "Founder story from Montreal: how Spaxio started in January 2026 and grew through AI-accelerated web builds."
};

export default function BlogPage() {
  return (
    <main className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <BlogClient />
    </main>
  );
}

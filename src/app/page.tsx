import { Hero } from "@/components/sections/Hero";
import { LinkBoxes } from "@/components/sections/LinkBoxes";
import { CertificationsAlbums } from "@/components/sections/CertificationsAlbums";
import { Languages } from "@/components/sections/Languages";
import { Credentials } from "@/components/sections/Credentials";
import { BlogPreview } from "@/components/sections/BlogPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <LinkBoxes />
      <CertificationsAlbums />
      <Languages />
      <section className="border-t border-surface py-32 md:py-40">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <Credentials />
        </div>
      </section>
      <BlogPreview />
    </>
  );
}

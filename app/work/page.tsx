import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { ProjectGallery } from '@/components/projects/ProjectGallery';

export const metadata: Metadata = {
  title: 'Work — Sri Sai Realtors',
  description:
    'Selected projects and execution experience across aviation, retail, corporate, dark stores, hospitality, museums and general contracting environments.',
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Our Work"
        subtitle="Selected Projects & Execution Experience"
        image="https://images.pexels.com/photos/20390772/pexels-photo-20390772.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Modern conference room with minimalist design"
      />
      <ProjectGallery />
    </>
  );
}

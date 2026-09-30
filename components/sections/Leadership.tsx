import Image from "next/image";

type Leader = {
  name: string;
  role: string;
  image: string; // /public me image rakho, e.g. /team/kamaljit.jpg
  linkedin: string; // full LinkedIn profile URL
};

const leaders: Leader[] = [
  {
    name: "Kamaljit Singh",
    role: "Director",
    image: "/leaders/kamaljeet.jpeg",
    linkedin: "https://www.linkedin.com/in/REPLACE-KAMALJIT/",
  },
  {
    name: "Prabhash Kumar",
    role: "Chief Execution Officer",
        image: "/leaders/prabhas.jpeg",
    linkedin: "https://www.linkedin.com/in/REPLACE-PRABHASH/",
  },
  {
    name: "Nitin Anand",
    role: "Head - Sales and Market",
        image: "/leaders/nitin.jpeg",
    linkedin: "https://www.linkedin.com/in/REPLACE-NITIN/",
  },
];

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export default function Leadership() {
  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="bg-background py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2
            id="leadership-heading"
            className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            Our Leadership
          </h2>
          <div className="section-line mt-4 h-[3px] w-24" />
          <p className="mt-5 text-muted-foreground">
            The people who lead our work and stand behind every project.
          </p>
        </div>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((person) => (
            <li key={person.name}>
              <article className="group overflow-hidden rounded border border-border bg-card">
                <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                  <Image
  src={person.image}
  alt={person.name}
  fill
  sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
  className="object-cover object-top"
/>
                </div>

                <div className="flex items-center justify-between gap-4 border-t-2 border-primary p-5">
                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-semibold text-card-foreground">
                      {person.name}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {person.role}
                    </p>
                  </div>

                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${person.name} on LinkedIn`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-primary text-primary-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <LinkedInIcon className="h-5 w-5" />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
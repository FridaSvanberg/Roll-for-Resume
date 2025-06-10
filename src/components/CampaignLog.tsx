import { useState } from 'react';

const jobs = [
  {
    id: 'hakierka-role',
    company: 'Hakierka',
    title: 'Developer',
    dates: 'Feb 2024 – Present',
    items: [
      'Tested Web3.Storage-related code to check functionality and usability ',
      'Gave feedback to improve the experience for developers',
      'Helped ensure internal tools worked smoothly across use cases',
    ],
  },
  {
    id: 'stryda-role',
    company: 'Stryda',
    title: 'Frontend Developer',
    dates: 'May 2022 – Jan 2024',
    items: [
      'Promoted from intern to lead dev of the intern squad 🛡️',
      'Held retros, led daily stand-ups, and wrote battle plans (tickets)',
      'Built a Business Intelligence admin portal using React + TypeScript',
      'Bridged communication between dev realms (frontend + backend) for smoother launches',
    ],
  },
  {
    id: 'compodium-role',
    company: 'Compodium',
    title: 'Frontend Developer',
    dates: 'Mar 2021 – Apr 2022',
    items: [
      'Developed Vidicue, a secure video conference app for healthcare and municipal teams to connect with clients',
      'Focused on building a safe, accessible frontend for sensitive user data',
      'Worked closely with the infrastructure team to align on technical requirements and stability',
    ],
  },
  {
    id: 'hygglo-role',
    company: 'Hygglo',
    title: 'Frontend Developer',
    dates: 'Feb 2019 – Feb 2021',
    items: [
      'Started as an intern and took full responsibility for the admin platform’s frontend 🛠️',
      'Refactored legacy code, improved workflows, and modernized the tech stack',
      'Created seasonal campaign features (Easter, Pride) in collaboration with the marketing team',
      'Championed diversity and inclusion in design ideas and feature planning',
      'Developed for both web and mobile using Angular and React Native',
    ],
  },
];

const CampaignLog = () => {
  const [open, setOpen] = useState<string | null>(jobs[0].id);

  return (
    <section
      id="experience"
      aria-labelledby="campaign-heading"
      className="bg-zinc-800 rounded-xl p-4 my-4 shadow"
    >
      <h2
        id="campaign-heading"
        className="text-xl font-bold text-yellow-300 mb-2 items-center gap-2"
      >
        <span role="img" aria-label="Map">
          🗺️
        </span>{' '}
        Campaign Log
      </h2>
      <div className="space-y-3">
        {jobs.map((job) => (
          <article
            aria-labelledby={job.id}
            key={job.id}
            className="bg-zinc-900 rounded-lg"
          >
            <button
              className="w-full flex justify-between items-center p-3 text-yellow-400 font-semibold rounded-t-lg focus:outline-none focus:ring-2 focus:ring-violet-400"
              onClick={() => setOpen(open === job.id ? null : job.id)}
              aria-expanded={open === job.id}
              aria-controls={`${job.id}-body`}
            >
              <span>
                {job.title} @ {job.company}
                <span className="block text-xs text-gray-400 font-normal">
                  {job.dates}
                </span>
              </span>
              <span className="text-lg">{open === job.id ? '▲' : '▼'}</span>
            </button>
            {open === job.id && (
              <div
                id={`${job.id}-body`}
                className="p-3 text-zinc-100 rounded-b-lg"
              >
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  {job.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default CampaignLog;

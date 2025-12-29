import TitleHeader from '../components/TitleHeader.jsx'

const Bio = () => {
  const items = [
    { date: '8 May 1999', event: 'Born in Roorkee, Uttarakhand, India.' },
    { date: '2016', event: 'Completed 10+2 from Montfort School, Roorkee.' },
    { date: '2016', event: 'Cleared JEE Advance' },
    { date: '2020', event: 'Completed Bachelor of Textile Technology from IIT, Delhi.' },
    { date: '2021', event: 'Started working at Multi-National IT Consultancy firm Searce as a Full-Stack Software Engineer.' },
    { date: '2022', event: 'Promoted to Senior Software Engineer at Searce.' },
    { date: '2025', event: 'Promoted to Lead Software Engineer at Searce.' },
  ];

  return (
    <section id="bio" className="section-padding flex-center">
      <div className="w-full md:px-20 px-5">
        <TitleHeader title="Bio" />
        <div className="mt-6 text-white-50 max-w-3xl mx-auto leading-relaxed">
          {items.map(({ date, event }) => (
            <div key={date + event} className="flex items-start gap-6 py-2">
              <div className="w-32 font-semibold text-white">{date}</div>
              <div className="flex-1">{event}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Bio

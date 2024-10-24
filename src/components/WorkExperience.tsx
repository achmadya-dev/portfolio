interface WorkExperienceItem {
  startDate: string;
  endDate: string;
  companyName: string;
  jobTitle: string;
  description: string[];
}

const workExperienceData: WorkExperienceItem[] = [
  {
    startDate: "5 June 2023",
    endDate: "30 September 2023",
    companyName: "PT. Pilar Timur Teknologi Digital Oasis",
    jobTitle: "Full Stack Developer Internship",
    description: [
      "Developed the “Dios Employee”, an employee management system that streamlined operational processes and improved efficiency by 70%.",
      "Developed the “Mega Master Engine”, a H2H credit server software that includes Payment Point Online Bank (PPOB) and payment gateways. Activities included developing APIs, building user interfaces, creating database schemas, designing database procedures, scraping mutation data local banks, and refactoring code. Key features developed include virtual accounts, internet banking, balance mutations, balance inquiries, and ticketing.",
    ],
  },
  {
    startDate: "5 June 2023",
    endDate: "30 September 2023",
    companyName: "PT. Pilar Timur Teknologi Digital Oasis",
    jobTitle: "Full Stack Developer Internship",
    description: [
      "Developed the “Dios Employee”, an employee management system that streamlined operational processes and improved efficiency by 70%.",
      "Developed the “Mega Master Engine”, a H2H credit server software that includes Payment Point Online Bank (PPOB) and payment gateways. Activities included developing APIs, building user interfaces, creating database schemas, designing database procedures, scraping mutation data local banks, and refactoring code. Key features developed include virtual accounts, internet banking, balance mutations, balance inquiries, and ticketing.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Work Experience</h1>
      <div className="p-1">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {workExperienceData.map((item, index) => (
            <li key={index} className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.startDate} - {item.endDate}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.jobTitle} at {item.companyName}
              </h3>
              <ol className="list-disc ml-4 text-base text-gray-700">
                {item.description.map((desc, index) => (
                  <li className="mt-2 text-justify" key={index}>
                    {desc}
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default WorkExperience;

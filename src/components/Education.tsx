interface EducationItem {
  startDate: string;
  endDate: string;
  collageName: string;
  degree: string;
  address: string;
}

const educationData: EducationItem[] = [
  {
    startDate: "September 2021",
    endDate: "August 2024",
    collageName: "Politeknik Negeri Bandung",
    degree: "Associate Degree in Informatics Engineering",
    address: "West Bandung Regency, West Java",
  },
];

const Education = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">Education</h1>
      <div className="p-1">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {educationData.map((item, index) => (
            <li key={index} className="mb-12 ms-6">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.startDate} - {item.endDate}
              </time>
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {item.collageName}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300 text-right">
                  {item.address}
                </p>
              </div>
              <h5 className="text-md text-gray-500 dark:text-white">
                {item.degree}
              </h5>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Education;

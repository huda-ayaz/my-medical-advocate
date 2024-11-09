import React from 'react';

function Resources() {
  return (
    <div className="flex flex-col items-center p-6 min-h-screen">
      {/* Welcome Message */}
      <h1 className="text-3xl font-bold text-[#402909] mb-2">Welcome to CareCompass Resources</h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl mb-8">
        Here you'll find valuable information to help you better understand breast cancer and advocate for your rights. 
        Select a category below to explore resources tailored to your needs.
      </p>

      {/* Resource Categories */}
      <div className="flex flex-col md:flex-row md:space-x-8 w-full max-w-4xl">
        {/* Understanding Breast Cancer */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#80a536] mb-4">Understanding Breast Cancer</h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <a href="https://www.cancer.gov/types/breast" target="_blank" rel="noopener noreferrer" className="text-[#402909] font-bold hover:underline">
                Breast Cancer Basics - National Cancer Institute
              </a>
              <p className="text-sm font-normal">An overview of breast cancer, including causes, symptoms, and treatment options.</p>
            </li>
            <li>
              <a href="https://www.breastcancer.org/symptoms/types" target="_blank" rel="noopener noreferrer" className="text-[#402909] font-bold hover:underline">
                Types of Breast Cancer - Breastcancer.org
              </a>
              <p className="text-sm font-normal">Detailed information about different types of breast cancer and their characteristics.</p>
            </li>
            <li>
              <a href="https://www.cancer.org/cancer/breast-cancer.html" target="_blank" rel="noopener noreferrer" className="text-[#402909] font-bold hover:underline">
                American Cancer Society
              </a>
              <p className="text-sm font-normal">Comprehensive resources from the American Cancer Society about breast cancer.</p>
            </li>
          </ul>
        </div>

        {/* Patient Rights and Advocacy */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md mt-8 md:mt-0">
          <h2 className="text-2xl font-semibold text-[#80a536] mb-4">Patient Rights and Advocacy</h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <a href="https://www.patientadvocate.org/" target="_blank" rel="noopener noreferrer" className="text-[#402909] font-bold hover:underline">
                Patient Advocate Foundation
              </a>
              <p className="text-sm font-normal">Provides case management and education to help patients navigate the healthcare system.</p>
            </li>
            <li>
              <a href="https://www.cancer.net/navigating-cancer-care/advocacy-and-policy" target="_blank" rel="noopener noreferrer" className="text-[#402909] font-bold hover:underline">
                Cancer Advocacy - Cancer.net
              </a>
              <p className="text-sm font-normal">Resources for patients to understand their rights and participate in cancer advocacy.</p>
            </li>
            <li>
              <a href="https://www.greaternationaladvocates.org/" target="_blank" rel="noopener noreferrer" className="text-[#402909] font-bold hover:underline">
                Greater National Advocates
              </a>
              <p className="text-sm font-normal">Information on patient advocacy and support for navigating complex healthcare decisions.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resources;

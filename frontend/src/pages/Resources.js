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
      <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8 w-full max-w-4xl">
        
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

        {/* Treatment Options */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#80a536] mb-4">Treatment Options</h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <a href="https://www.breastcancer.org/treatment" target="_blank" rel="noopener noreferrer" className="text-[#402909] font-bold hover:underline">
                Treatment & Side Effects - Breastcancer.org
              </a>
              <p className="text-sm font-normal">In-depth guides on treatment types and managing side effects.</p>
            </li>
            <li>
              <a href="https://www.cancer.org/cancer/breast-cancer/treatment.html" target="_blank" rel="noopener noreferrer" className="text-[#402909] font-bold hover:underline">
                Treatment Options - American Cancer Society
              </a>
              <p className="text-sm font-normal">Overview of treatment options, including surgery, radiation, and chemotherapy.</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8 w-full max-w-4xl mt-8">
        {/* Emotional and Psychological Support */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#80a536] mb-4">Emotional & Psychological Support</h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <a href="https://www.cancersupportcommunity.org/" target="_blank" rel="noopener noreferrer" className="text-[#402909] font-bold hover:underline">
                Cancer Support Community
              </a>
              <p className="text-sm font-normal">Free support groups and counseling for cancer patients and families.</p>
            </li>
            <li>
              <a href="https://www.mhanational.org/" target="_blank" rel="noopener noreferrer" className="text-[#402909] font-bold hover:underline">
                Mental Health America - Coping with Cancer
              </a>
              <p className="text-sm font-normal">Resources for managing the emotional impact of a cancer diagnosis.</p>
            </li>
          </ul>
        </div>

        {/* Patient Rights and Advocacy */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#80a536] mb-4">Patient Rights & Advocacy</h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <a href="https://www.patientadvocate.org/" target="_blank" rel="noopener noreferrer" className="text-[#402909] font-bold hover:underline">
                Patient Advocate Foundation
              </a>
              <p className="text-sm font-normal">Provides case management and education to help patients navigate the healthcare system.</p>
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

      <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8 w-full max-w-4xl mt-8">
        {/* Lifestyle and Wellness */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#80a536] mb-4">Lifestyle & Wellness</h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <a href="https://www.cancer.org/healthy/eat-healthy-get-active.html" target="_blank" rel="noopener noreferrer" className="text-[#402909] font-bold hover:underline">
                Nutrition & Physical Activity - American Cancer Society
              </a>
              <p className="text-sm font-normal">Tips on maintaining health through diet and exercise during cancer treatment.</p>
            </li>
            <li>
              <a href="https://www.cancer.net/survivorship/healthy-living" target="_blank" rel="noopener noreferrer" className="text-[#402909] font-bold hover:underline">
                Healthy Living After Cancer - Cancer.Net
              </a>
              <p className="text-sm font-normal">Guidance on returning to everyday life after treatment, including diet, exercise, and mental health.</p>
            </li>
          </ul>
        </div>

        {/* Financial Assistance */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#80a536] mb-4">Financial Assistance</h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <a href="https://www.cancerfac.org/" target="_blank" rel="noopener noreferrer" className="text-[#402909] font-bold hover:underline">
                Cancer Financial Assistance Coalition
              </a>
              <p className="text-sm font-normal">A coalition offering financial resources for cancer patients.</p>
            </li>
            <li>
              <a href="https://www.needymeds.org/" target="_blank" rel="noopener noreferrer" className="text-[#402909] font-bold hover:underline">
                NeedyMeds
              </a>
              <p className="text-sm font-normal">A searchable database for financial assistance, including medications and travel.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resources;

import sqlite3
import os

# Define the path to the SQLite database file
db_path = os.path.join(os.path.dirname(__file__), 'faq_database.db')

# Connect to the SQLite database (it will create the file if it doesn’t exist)
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Drop the existing Questions table if it exists to prevent schema conflicts
cursor.execute('DROP TABLE IF EXISTS Questions')

# Create the Questions table with additional fields for personalized answers
cursor.execute('''
    CREATE TABLE IF NOT EXISTS Questions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        question TEXT NOT NULL,
        general_answer TEXT NOT NULL,
        stage_early TEXT,
        stage_advanced TEXT,
        treatment_options TEXT,
        risk_factors_info TEXT,
        resource_url TEXT
    )
''')

# Clear any existing data in the Questions table to prevent duplicates
cursor.execute('DELETE FROM Questions')

# Expanded FAQ list with credible sources
faqs = [
    {
        "question": "What are the symptoms of breast cancer?",
        "general_answer": "Common symptoms include lumps, changes in breast size or shape, nipple discharge, or skin dimpling. Not all lumps are cancerous, but it's best to get any new changes checked.",
        "stage_early": "In early stages, symptoms may be subtle, such as a small, hard lump that is painless to touch.",
        "stage_advanced": "Advanced stages may present with more pronounced lumps, breast swelling, and changes in the skin like thickening or dimpling.",
        "treatment_options": None,
        "risk_factors_info": "If you have a family history of breast cancer, it's recommended to have regular screenings and be vigilant about changes.",
        "resource_url": "https://www.cancer.org/cancer/breast-cancer/about/symptoms.html"
    },
    {
        "question": "What are the treatment options for breast cancer?",
        "general_answer": "Treatment options depend on the type and stage of breast cancer and may include surgery, chemotherapy, radiation, hormone therapy, and targeted therapies.",
        "stage_early": "For early-stage breast cancer, treatment often involves surgery and may include radiation or hormone therapy.",
        "stage_advanced": "In advanced cases, a combination of surgery, chemotherapy, and targeted therapies may be recommended.",
        "treatment_options": "Chemotherapy can be effective in targeting cancer cells throughout the body, while radiation focuses on the local tumor site.",
        "risk_factors_info": None,
        "resource_url": "https://www.breastcancer.org/treatment"
    },
    {
        "question": "Can breast cancer come back after treatment?",
        "general_answer": "Yes, breast cancer can recur, which is why regular follow-ups are important. Recurrence risk varies based on the initial cancer stage and treatment effectiveness.",
        "stage_early": "In early stages, recurrence risk is generally lower, but regular monitoring is recommended.",
        "stage_advanced": "For advanced stages, the risk of recurrence may be higher, so closer monitoring and follow-up care are advised.",
        "treatment_options": None,
        "risk_factors_info": "Those with a family history or genetic predisposition may have a higher risk of recurrence.",
        "resource_url": "https://www.cancer.org/cancer/breast-cancer/after-treatment/follow-up.html"
    },
    {
        "question": "What lifestyle changes can reduce breast cancer risk?",
        "general_answer": "A balanced diet, regular exercise, limiting alcohol, and avoiding smoking can help reduce breast cancer risk. Maintaining a healthy weight is also beneficial.",
        "stage_early": "Starting these lifestyle habits early can lower the risk of progression and improve overall health.",
        "stage_advanced": "For those in advanced stages, lifestyle changes can aid in overall well-being and support treatment effectiveness.",
        "treatment_options": None,
        "risk_factors_info": "If you have a family history, a healthy lifestyle combined with regular screenings can help in early detection.",
        "resource_url": "https://www.cancer.org/cancer/breast-cancer/risk-and-prevention.html"
    },
    {
        "question": "What support resources are available for breast cancer patients?",
        "general_answer": "Organizations like the American Cancer Society, National Cancer Institute, and Breastcancer.org offer support groups, counseling, and resources for patients and their families.",
        "stage_early": "Support groups for early-stage patients provide a space to discuss diagnosis and initial treatment steps.",
        "stage_advanced": "Advanced-stage support groups focus on long-term care, coping strategies, and emotional support.",
        "treatment_options": None,
        "risk_factors_info": None,
        "resource_url": "https://www.cancer.org/treatment/support-programs-and-services.html"
    },
    {
        "question": "Is breast cancer hereditary?",
        "general_answer": "Approximately 5-10% of breast cancers are hereditary, linked to gene mutations such as BRCA1 and BRCA2.",
        "stage_early": "Early genetic testing can help assess risk and guide preventive measures.",
        "stage_advanced": "If there’s a family history, advanced-stage patients may consider genetic counseling for themselves and family members.",
        "treatment_options": None,
        "risk_factors_info": "Those with family history or BRCA gene mutations may consider earlier and more frequent screenings.",
        "resource_url": "https://www.cancer.org/cancer/breast-cancer/causes-risks-prevention/risk-factors.html"
    },
    {
        "question": "What is triple-negative breast cancer?",
        "general_answer": "Triple-negative breast cancer (TNBC) is an aggressive form that does not have estrogen, progesterone, or HER2 receptors, making it challenging to treat with hormone or targeted therapies.",
        "stage_early": "Early detection of TNBC is crucial, as it tends to grow and spread faster than other types.",
        "stage_advanced": "Advanced-stage TNBC may require more aggressive chemotherapy options due to limited targeted therapies.",
        "treatment_options": "Chemotherapy is typically the primary treatment for TNBC, as hormone therapies are ineffective.",
        "risk_factors_info": None,
        "resource_url": "https://www.breastcancer.org/symptoms/diagnosis/trip_neg"
    },
    {
        "question": "How is breast cancer staging determined?",
        "general_answer": "Breast cancer is staged from 0 to IV based on tumor size, lymph node involvement, and whether it has spread to other parts of the body.",
        "stage_early": "In early stages (0 to I), the cancer is typically small and localized.",
        "stage_advanced": "Advanced stages (III and IV) may indicate larger tumors or cancer spread to other organs.",
        "treatment_options": None,
        "risk_factors_info": None,
        "resource_url": "https://www.cancer.org/cancer/breast-cancer/detection-diagnosis-staging/staging.html"
    },
    {
        "question": "What are the side effects of chemotherapy for breast cancer?",
        "general_answer": "Common side effects include fatigue, hair loss, nausea, and lowered immunity. Side effects vary based on the type and duration of chemotherapy.",
        "stage_early": "In early stages, chemotherapy doses may be lower, potentially resulting in milder side effects.",
        "stage_advanced": "For advanced stages, more intensive chemotherapy may cause more pronounced side effects.",
        "treatment_options": None,
        "risk_factors_info": None,
        "resource_url": "https://www.cancer.org/cancer/breast-cancer/treatment/chemotherapy.html"
    }
]

# Insert all FAQs into the Questions table
for faq in faqs:
    cursor.execute('''
        INSERT INTO Questions (question, general_answer, stage_early, stage_advanced, treatment_options, risk_factors_info, resource_url)
        VALUES (:question, :general_answer, :stage_early, :stage_advanced, :treatment_options, :risk_factors_info, :resource_url)
    ''', faq)

# Commit changes and close the connection
conn.commit()
conn.close()

print("Database initialized and populated with expanded FAQ data.")

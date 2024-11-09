import sqlite3
import os

# Define the path to the SQLite database file
db_path = os.path.join(os.path.dirname(__file__), 'faq_database.db')

# Connect to the SQLite database (it will create the file if it doesn’t exist)
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Create the Questions table
cursor.execute('''
    CREATE TABLE IF NOT EXISTS Questions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        question TEXT NOT NULL,
        answer TEXT NOT NULL,
        tags TEXT,
        resource_url TEXT
    )
''')

# Clear any existing data in the Questions table to prevent duplicates
cursor.execute('DELETE FROM Questions')

# Expanded FAQ list
faqs = [
    {
        "question": "What are the symptoms of breast cancer?",
        "answer": "Common symptoms include lumps in the breast, change in size, or skin dimpling.",
        "tags": "general, symptoms",
        "resource_url": "https://www.cancer.org/cancer/breast-cancer.html"
    },
    {
        "question": "What are the treatment options for breast cancer?",
        "answer": "Treatment options vary by stage and type, including surgery, chemotherapy, and radiation.",
        "tags": "general, treatment",
        "resource_url": "https://www.cancer.org/cancer/breast-cancer/treatment.html"
    },
    {
        "question": "How does breast cancer staging work?",
        "answer": "Breast cancer stages range from 0 to IV, based on the tumor's size and spread.",
        "tags": "staging",
        "resource_url": "https://www.breastcancer.org/symptoms/diagnosis/staging"
    },
    {
        "question": "What should I do if I find a lump in my breast?",
        "answer": "If you find a lump, contact your healthcare provider for a clinical examination. Not all lumps are cancerous, but it’s best to get them checked.",
        "tags": "symptoms, detection",
        "resource_url": "https://www.cancer.org/cancer/breast-cancer.html"
    },
    {
        "question": "How often should I get screened for breast cancer?",
        "answer": "Screening frequency depends on age and risk factors. Generally, women over 40 should get a mammogram annually, but consult your doctor for a personalized schedule.",
        "tags": "screening, prevention",
        "resource_url": "https://www.breastcancer.org/screening"
    },
    {
        "question": "What is the difference between chemotherapy and radiation therapy?",
        "answer": "Chemotherapy uses drugs to target cancer cells throughout the body, while radiation therapy targets cancer cells in a specific area using high-energy rays.",
        "tags": "treatment",
        "resource_url": "https://www.cancer.org/cancer/breast-cancer/treatment.html"
    },
    {
        "question": "Can breast cancer come back after treatment?",
        "answer": "Yes, breast cancer can recur. Regular follow-ups and lifestyle changes can help monitor and reduce recurrence risk.",
        "tags": "treatment, recurrence",
        "resource_url": "https://www.cancer.org/cancer/breast-cancer/after-treatment.html"
    },
    {
        "question": "What lifestyle changes can reduce breast cancer risk?",
        "answer": "A balanced diet, regular physical activity, limiting alcohol, and not smoking can reduce breast cancer risk. Discuss further prevention methods with your doctor.",
        "tags": "prevention, lifestyle",
        "resource_url": "https://www.breastcancer.org/risk/factors"
    },
    {
        "question": "What support resources are available for breast cancer patients?",
        "answer": "Organizations like the American Cancer Society and Breast Cancer Foundation offer support groups, counseling, and resources for patients and families.",
        "tags": "support, resources",
        "resource_url": "https://www.cancer.org/treatment/support-programs-and-services.html"
    },
    {
        "question": "Is breast cancer hereditary?",
        "answer": "About 5-10% of breast cancers are hereditary. Genetic testing can help assess your risk if you have a family history of breast or ovarian cancer.",
        "tags": "genetics, risk",
        "resource_url": "https://www.cancer.org/cancer/breast-cancer/risk-and-prevention/genetics.html"
    },
    {
        "question": "What is triple-negative breast cancer?",
        "answer": "Triple-negative breast cancer is an aggressive form that doesn’t have receptors for estrogen, progesterone, or HER2. It is often treated with chemotherapy.",
        "tags": "types",
        "resource_url": "https://www.breastcancer.org/symptoms/diagnosis/trip_neg"
    }
]

# Insert all FAQs into the Questions table
for faq in faqs:
    cursor.execute('''
        INSERT INTO Questions (question, answer, tags, resource_url)
        VALUES (:question, :answer, :tags, :resource_url)
    ''', faq)

# Commit changes and close the connection
conn.commit()
conn.close()

print("Database initialized and populated with expanded FAQ data.")

import sqlite3
import os

# Path to the SQLite database file
db_path = os.path.join(os.path.dirname(__file__), 'faq_database.db')

# Connect to the database
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Query all entries in the Questions table
cursor.execute('SELECT * FROM Questions')
rows = cursor.fetchall()

# Display results
for row in rows:
    print(row)

# Close the connection
conn.close()

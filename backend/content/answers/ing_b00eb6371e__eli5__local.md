---
qid: ing_b00eb6371e__eli5__local
question: 'Explain: 5.8 Get Comments for a Post — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 230
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:16:26-05:00'
sources: []
---

Imagine your Instagram feed as a giant library where each photo is a book and the comments are sticky notes people leave on its cover.  
When someone asks “Show me all the sticky notes for this book,” the system does three simple steps:

1. **Locate the book** – look up the photo’s ID in a fast index (like a librarian’s card catalog).  
2. **Fetch the notes** – read the comment records that point to that photo from a separate comments table, ordered by time or popularity.  
3. **Send back the list** – package them into a JSON response for the app.

*Unavoidable terms*:  
- *Index* – a quick lookup map (e.g., hash table) that tells where data lives.  
- *Query* – a request to the database asking for specific rows.  

This keeps the system snappy: only the needed comments are read, and the index makes finding them almost instantaneous.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

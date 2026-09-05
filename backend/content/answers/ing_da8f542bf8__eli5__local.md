---
qid: ing_da8f542bf8__eli5__local
question: 'Explain: ID and we''re gonna choose that customer — AWS re:Invent 2018:
  Amazon DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 211
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:20:26-05:00'
sources: []
---

Think of a **customer ID** like a library card number.  
When you walk into a huge library (our database), everyone has a unique card so the librarian can pull up exactly your books without mixing them with someone else’s. In DynamoDB, each item (record) gets an *ID* that acts as its key—just as the card tells the system which “row” to fetch.  

When we say **“we’re gonna choose that customer,”** it means the query asks for the record whose ID matches the one we want. The database looks up that key, goes straight to the shelf where that customer’s data lives (no scanning of every other book), and returns only what we asked for—fast, precise, and isolated from everyone else. This is how DynamoDB keeps millions of customers separate yet instantly reachable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

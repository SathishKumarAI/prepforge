---
qid: ing_fe9ce17c4e__eli5__local
question: Your product has several distinct corpora - docs, tickets, code, CRM. How
  do you route queries?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 229
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:18:13-05:00'
sources: []
---

Think of each corpus as a room in a smart library.  
* The **docs** room holds books that explain how things work.  
* The **tickets** room keeps the questions and problems people have already asked.  
* The **code** room is full of the actual programs you write.  
* The **CRM** room stores customer stories and histories.

When someone asks a question, the AI first looks at the “topic” (the subject of the query). It’s like a librarian who hears a visitor say, “I need help with a bug in my code.” The librarian sends that request straight to the code room. If the visitor says, “What does this feature do?” the request goes to the docs room. For “Why did this customer complain?” it heads to CRM, and for “Has anyone reported a similar issue?” it checks tickets.

So routing is simply matching the question’s subject to the right room—just as a librarian directs you to the most relevant shelf.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

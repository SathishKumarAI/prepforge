---
qid: ing_e22af691c7__eli5__local
question: 'Explain: Step 3: Design core components — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 255
total_tokens: 449
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:33:51-05:00'
sources: []
---

**Step 3 – Design the Core Components (Pastebin Example)**  

Think of building a Pastebin site like planning a small library that only holds one‑page books.  
* **Front‑end (UI):** The reader’s desk where they type or paste text and press “Save.” It’s just a web page with a form.  
* **API layer:** A friendly librarian who receives the typed text, checks it for length, assigns a short ID, and tells the book‑keeper where to store it.  
* **Database (storage):** The shelves that hold each one‑page book in a table called *snippets*. Each row has an *id*, the *content*, and a *created_at* timestamp.  
* **Cache (optional):** A quick‑access drawer for the most recent books, so returning visitors don’t wait to pull from the shelves again.

These parts work together: the UI talks to the API; the API writes/reads to the database; the cache speeds up reads. That’s the skeleton of Pastebin’s core system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

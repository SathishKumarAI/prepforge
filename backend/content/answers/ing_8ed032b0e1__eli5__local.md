---
qid: ing_8ed032b0e1__eli5__local
question: 'Explain: way to check um what spots are — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 239
total_tokens: 405
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:23:14-05:00'
sources: []
---

Think of the parking garage as a big library where each book‑slot is a parking spot.  
When someone asks “Which spots are free?” we first look at the **spot registry** – a list that tells us for every slot whether it’s occupied or empty, just like a library catalog says if a book is checked out.

The next step is to scan this registry in the order the spots were built (front‑to‑back, floor‑by‑floor). As soon as we find an “empty” entry, we give that spot number back. If no empty entries exist, we say “All full.”

In a real system we keep the registry up‑to‑date with two simple rules:  
1) **Check‑in** changes a slot from *empty* to *occupied*.  
2) **Check‑out** changes it back to *empty*.  

Thus, answering the question is just reading the current list—no heavy math, just a clear record of who’s in which spot.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

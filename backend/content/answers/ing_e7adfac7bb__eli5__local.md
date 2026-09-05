---
qid: ing_e7adfac7bb__eli5__local
question: 'Explain: Airbnb System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 320
total_tokens: 478
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:42:29-05:00'
sources: []
---

Imagine building a giant, ever‑changing library that shows people the best books (homes) for their next trip.  
At Airbnb’s heart is a **recommendation engine**—a smart librarian who learns from every click, review, and price change to suggest the right home at the right time.

1. **Data flow** – Every guest’s search, booking, or “favorite” becomes a note in a massive ledger (the data lake).  
2. **Model training** – Periodically, this ledger is fed into a learning machine that looks for patterns—what travelers love in certain cities, how price shifts affect demand, and which hosts keep guests happy.  
3. **Serving** – When someone searches, the system instantly pulls the most relevant homes from an indexed cache (like pulling the right shelf), using the latest model’s predictions.  

FAANG interviewers ask: *How would you scale this ledger? How do you keep the models fresh without slowing the search?*  
They want to hear about **partitioning** the data, using **incremental updates**, and designing a fast lookup layer that can handle millions of users while learning from new information in near real‑time.  

In short: it’s a continuous loop—collect, learn, serve—built so the “librarian” never gets overwhelmed by the library’s size or the speed at which books (listings) change.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

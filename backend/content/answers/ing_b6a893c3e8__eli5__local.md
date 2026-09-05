---
qid: ing_b6a893c3e8__eli5__local
question: 'Explain: Stronger business continuity — What is Disaster Recovery? | Google
  Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 239
total_tokens: 402
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:25:56-05:00'
sources: []
---

Imagine your company’s data and models are a library on a high‑rise building. **Disaster Recovery (DR)** is the plan that tells you how to rebuild or relocate the entire library if something catastrophic happens—like an earthquake, fire, or cyber attack—so business can keep running without losing books.

In Google Cloud, DR means storing copies of your data and trained models in a separate region (a different city). If the primary site goes down, automated scripts pull those copies to a new “mirror” environment, almost instantly. The system keeps a live log of changes so you don’t miss recent updates, just like a librarian keeping track of every new book added.

Key terms:  
- **Primary site** – the main place where data lives.  
- **Secondary (DR) site** – the backup location that can take over.  
- **Failover** – switching operations from primary to secondary when needed.

With DR, your machine‑learning services stay online even if a disaster strikes the original data center.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

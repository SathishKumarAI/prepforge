---
qid: ing_0928f71c82__eli5__local
question: 'Explain: CAP Theorem — 11 System Design Concepts Explained, Simply'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 245
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:50:13-05:00'
sources: []
---

Think of a smart office that must always answer three simple questions: **C**omplete data (all files are up‑to‑date), **A**vailability (any employee can open a file right away), and **P**artition tolerance (the office keeps working even if the network cable breaks).  
The CAP theorem says you can pick at most two of these to guarantee all the time.  

- **Consistency (C)** means every reader sees the same, latest copy of a file.  
- **Availability (A)** means a request never waits; it gets a response immediately, even if that answer might be slightly out‑of‑date.  
- **Partition tolerance (P)** is the ability to keep running when part of the network stops talking.

In practice, most cloud services choose “AP”: they stay available and keep working during splits, but accept that sometimes two users see different versions until the split heals. If you need every read to be fresh, you sacrifice availability and let some requests time out instead. This trade‑off is the heart of CAP.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

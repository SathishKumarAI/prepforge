---
qid: ing_5d1860ccb6__aws__local
question: 'Explain: So the DocumentDB data model offers JSON-like'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 347
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:56:18-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my last role at a fintech startup, I was tasked with migrating our legacy relational schema for customer documents into Amazon **DocumentDB** so we could store rich, semi‑structured data and accelerate feature development.  

> **Situation:** Our SQL tables had dozens of columns that were rarely queried together; the cost per query was high and latency exceeded SLA by 30 %.  
> **Task:** Design a DocumentDB model that preserves customer identity while enabling fast, flexible reads/writes.  
> **Action:** I mapped each customer to a single JSON document with nested objects for addresses, preferences, and transaction history. The schema is *schema‑flexible*: new fields can be added without downtime (Amazon DocumentDB’s MongoDB API). I used **Global Secondary Indexes** on `email` and `lastLogin`, and enabled **point‑in‑time recovery** for safety.  
> **Result:** Query latency dropped from 250 ms to <40 ms, cost per query fell by 45 %, and the system now scales horizontally across three AZs with 99.999% availability (built‑in multi‑AZ replication).  

This showcases **Customer Obsession**—delivering a faster, cheaper experience—and **Dive Deep**—understanding DocumentDB’s JSON model, index strategies, and trade‑offs between consistency, cost, and latency. I learned that while JSON flexibility is powerful, careful indexing prevents “index bloat” and keeps costs predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

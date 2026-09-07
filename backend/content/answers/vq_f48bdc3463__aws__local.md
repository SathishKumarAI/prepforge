---
qid: vq_f48bdc3463__aws__local
question: What is Normalization?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 451
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:22:30-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** In a recent migration of our on‑prem data warehouse to Redshift, the team noticed repeated anomalies—duplicate customer records and inconsistent sales totals.  
> **Task:** I was tasked with diagnosing the root cause and proposing a schema redesign that would improve query performance while keeping costs low.  
> **Action:** I explained *normalization* as the process of structuring data into logically independent tables to eliminate redundancy and enforce referential integrity (1NF, 2NF, 3NF). I mapped our legacy flat file to a 3NF model: `customers`, `orders`, and `order_items`.  
> - **AWS services:** Used *Amazon RDS* for the transactional layer (PostgreSQL) and *Redshift Spectrum* to query archived logs without moving them.  
> - **Scalability & Availability:** The split ensures writes stay in RDS with high‑availability Multi-AZ, while analytical queries hit Redshift clusters that can be resized on demand.  
> - **Cost trade‑off:** Normalization reduces storage (≈ 30% cheaper) but increases join complexity; however, the chosen star schema for reporting keeps query times under 2 s.  
> **Result:** Post‑migration we cut duplicate records by 99%, improved query latency from 45 s to 1.8 s, and saved $12k/month on storage.  

**Leadership Principles Highlighted**

- *Customer Obsession:* Delivering clean data so downstream teams get accurate insights.  
- *Ownership & Dive Deep:* I owned the end‑to‑end redesign, digging into schema details and performance metrics.  

Bar‑raisers listen for a clear problem statement, quantified impact (e.g., 99% reduction in duplicates), depth of technical reasoning (AWS service choices, trade‑offs), and evidence that you learned from past iterations (e.g., why we chose 3NF over 2NF).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

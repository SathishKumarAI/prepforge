---
qid: ing_6cf6e2285d__star__local
question: 'Explain: Storage Estimation — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 360
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:05:15-05:00'
sources: []
---

**Situation:**  
During a senior interview for a cloud infrastructure role, I was asked to estimate the daily storage footprint for Airbnb’s booking database, which hosts millions of listings and reservations across the globe.

**Task:**  
I needed to produce a realistic, month‑to‑year cost projection that balanced accuracy with scalability assumptions, showing how I’d break down data types, growth rates, and redundancy.

**Action:**  
First, I mapped out the primary entities: Listings (≈10 M), Reservations (≈50 M active per year), Users (≈100 M), and associated media. I assigned average record sizes—Listing metadata ~5 KB, Reservation log ~2 KB, User profile ~1 KB. Using a 30‑day month, I calculated daily writes: 10 M listings × 0.01% new per day ≈ 1 kB each, plus 50 M reservations distributed over the year (~136 kB/day). Adding media (photos, videos) at ~200 MB per listing, and accounting for 3× replication in a Cassandra cluster, I arrived at roughly **4.5 TB** of raw data daily. Factoring compression (≈2:1) and tiered storage (hot vs cold), the projected monthly spend was ~$12k on AWS S3/Glacier.

**Result:**  
The interviewer praised the end‑to‑end logic, noting I tied assumptions to real metrics and highlighted trade‑offs like replication factor versus availability. I learned that a clear data model plus conservative growth rates yields credible estimates without over‑engineering the solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

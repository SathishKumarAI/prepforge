---
qid: ing_2163276742__aws__local
question: 'Explain: Data Model — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 357
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:42:51-05:00'
sources: []
---

**Situation & Task (S)**  
I was tasked with redesigning the core data model for Airbnb’s “Search & Booking” service to support a 5× growth in listings while keeping latency < 100 ms and cost below $200k/month.

**Action (A)**  
*Customer Obsession + Ownership*: I mapped every user journey, identified hot‑spots (search, availability, pricing) and prioritized data that drives conversion.  
*Dive Deep + Bias for Action*: I designed a **partitioned, time‑sharded schema** in Amazon DynamoDB – `Listing#YYYYMMDD` keys for daily price/availability snapshots; secondary indexes (`CityIndex`, `AmenityIndex`) for fast geo/feature filtering.  
I added an **Amazon Aurora (PostgreSQL) read replica cluster** for complex analytics (price trend, revenue forecasting).  
*Invent & Simplify*: A Lambda‑driven ingestion pipeline normalizes raw listing feeds into the partitioned table; SQS throttles spikes.  

**Result (R)**  
- 99.9 % of search queries served < 80 ms (vs 250 ms baseline).  
- Cost reduced from $350k to $180k/month (≈ 48 % savings).  
- Booking conversion up 12 % due to fresher availability data.  

**Bar‑raiser Takeaway**  
I own the end‑to‑end flow, dive into metrics, quantify impact, and iterate fast—hallmarks of an Amazon engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

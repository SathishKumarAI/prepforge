---
qid: ing_bbbde0d004__aws__local
question: 'Explain: Query an Absent URL — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 432
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:28:27-05:00'
sources: []
---

**Answer (Amazon Way)**  

During my last role at a media‑streaming startup I built an *Absent URL* service that answered “has this URL ever been crawled?” in <10 ms for millions of requests per day.  
> **Situation:** Our crawler had 2 B URLs; checking each against a DB was too slow.  
> **Task:** Provide a low‑latency, cost‑effective membership test with <0.01 % false positives.  
> **Action:** I chose a Bloom filter (space‑efficient probabilistic set).  
> *Design:*  
> • Generate 3‑layer Bloom filters per day and store them in **Amazon S3** for durability.  
> • On query, read the latest filter into an **ECS Fargate** task that keeps it cached in memory; use **AWS Lambda@Edge** to serve 99.9 % of traffic from edge locations, reducing egress costs by ~70 %.  
> • Rotate filters nightly via a **Step Functions** workflow and purge old ones after 30 days, keeping storage <5 GB.  
> *Trade‑offs:* We accept a 0.005 false‑positive rate (≈1 M false positives per day) for the benefit of <10 ms latency and <$2/month cost.  

> **Result:** Latency dropped from 120 ms to 8 ms, query cost fell by 85 %, and we processed 5× more crawlers without scaling our DB.  
> **Learnings (Bar‑raiser):** Owned the end‑to‑end pipeline, dove deep into Bloom filter math, quantified impact, and iterated after a false‑positive spike that taught us to adjust bit‑array size.  

*Leadership Principles:* **Customer Obsession** – fast answers for crawler operators; **Ownership** – from design to production rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

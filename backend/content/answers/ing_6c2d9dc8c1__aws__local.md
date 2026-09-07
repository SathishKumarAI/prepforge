---
qid: ing_6c2d9dc8c1__aws__local
question: 'Explain: Browse by link — Browse courses by subject | Pluralsight'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 579
total_tokens: 813
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:28:30-05:00'
sources: []
---

**Situation** – At my previous role I was tasked with redesigning the “Browse by Link” feature for an online learning platform (Pluralsight‑style). The goal was to let users discover courses by subject faster, increase course enrollment, and keep the UI lightweight.

**Task** – Build a scalable, highly available microservice that serves subject lists and related courses on demand, with real‑time analytics to surface trending subjects.  
Key requirements:  
* ≤ 200 ms latency for any request.  
* Handle 10k concurrent users (peak).  
* Persist user interactions to feed recommendation engine.

**Action** –  
1. **Architecture** – Adopt a serverless stack:  
   * **API Gateway + Lambda** for the endpoint (`/subjects/{id}/courses`).  
   * **DynamoDB** for subject metadata and course catalog; use global secondary indexes (GSI) on `subject_id` and `popularity_score`.  
   * **ElastiCache‑Redis** cache layer to store hot subjects (top 50 by view count).  
   * **Amazon Kinesis Data Streams** capture click events → **Lambda** → **Redshift** for BI.  

2. **Performance tuning** – Partition DynamoDB on `subject_id`, provision 1,000 RCU/WCU, and enable auto‑scaling. Cache warm‑up script pre‑populates Redis with the top subjects at midnight.  
3. **Cost control** – Use Lambda’s “pay per request” model; only pay for actual invocations (~$0.20/hr when idle). DynamoDB on-demand pricing keeps us from over‑provisioning during low traffic periods.

4. **Metrics & Results** – After launch:  
   * Avg latency dropped to 120 ms (vs 350 ms pre‑refactor).  
   * Course enrollments from browse page increased by **32%** in the first quarter.  
   * Cache hit ratio > 85%, cutting DynamoDB reads by ~70%.  

**Result** – The new service delivered a faster, more reliable browsing experience, directly contributing to higher engagement and revenue while staying under budget.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Designed for instant discoverability based on real user behavior.  
- **Ownership & Dive Deep** – Took full responsibility from data ingestion to analytics, iterating on performance and cost metrics.

*Bar‑raiser cues:* Look for ownership (end‑to‑end delivery), depth of technical trade‑offs, quantified impact (latency, revenue lift), and evidence of learning (e.g., cache strategy after observing read patterns).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

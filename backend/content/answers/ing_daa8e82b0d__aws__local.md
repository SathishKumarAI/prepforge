---
qid: ing_daa8e82b0d__aws__local
question: 'Explain: Design discovery and search across millions of user-created characters.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 579
total_tokens: 811
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:32:42-05:00'
sources: []
---

**Situation & Task**  
When launching the new “Character Hub” for our creative community, I was tasked to build a discovery engine that lets users find *millions* of user‑created characters by attributes (genre, personality, visual style) and full‑text search on descriptions.

**Action – Design & Architecture**  
1. **Data ingestion** – Lambda + API Gateway streams character metadata into DynamoDB (partitioned by `genre`) and an S3 bucket for high‑resolution images.  
2. **Search layer** – We indexed the text fields in Amazon OpenSearch Service (OSS) with a custom analyzer that supports fuzzy matching, synonyms, and multilingual support.  
3. **Query API** – A Go microservice behind Application Load Balancer calls OSS via its REST endpoint; results are cached in ElastiCache‑Redis for 10 s to satisfy the sub‑200 ms latency SLA.  
4. **Scalability & Availability** – OSS is deployed across three AZs with auto‑scaling replicas; DynamoDB uses on‑demand capacity and global tables (US‑East, EU‑West) to keep read latency < 5 ms.  
5. **Cost control** – Spot Instances for the OpenSearch cluster, reserved capacity for DynamoDB after usage spikes, and an S3 lifecycle policy move older images to Glacier.

**Result**  
- Achieved *95 %* of queries under 150 ms during a 10× traffic spike in beta.  
- Search hit‑rate improved from 68 % to **92 %**, boosting user session time by **37 %** and revenue per active user by **$0.12** month‑over‑month.

---

### Leadership Principles Highlighted  

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Ownership** | Took full responsibility from data model to cost optimization, iterating on metrics until SLA met. |
| **Dive Deep** | Analyzed OSS query latency logs; discovered that a custom analyzer reduced token count by 30 %, cutting CPU usage and cost. |
| **Deliver Results** | Quantified impact on engagement and revenue with concrete percentages. |

---

### Bar‑raiser Expectations  

* **Ownership:** I owned the end‑to‑end pipeline, not just “the search.”  
* **Depth (Dive Deep):** I examined every layer—data ingestion, indexing, caching—to surface bottlenecks.  
* **Quantified Impact:** Results are expressed in latency %, hit‑rate %, and revenue lift.  
* **Learning from Failure:** After a 4 h outage due to misconfigured OSS replicas, I instituted automated health checks and cross‑region failover policies.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

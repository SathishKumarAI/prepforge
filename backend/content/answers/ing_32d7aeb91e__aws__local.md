---
qid: ing_32d7aeb91e__aws__local
question: 'Explain: Browse courses by subject | Pluralsight'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 562
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:20:10-05:00'
sources: []
---

**Situation & Task**  
At my last role I was tasked with revamping the *Browse Courses* feature for a learning‑platform (similar to Pluralsight). The goal was to reduce bounce rate by 15 % and increase course enrollments from browsing sessions by 25 %.

**Action (Ownership + Dive Deep)**  
1. **Requirements & Architecture**  
   - **Data Layer:** DynamoDB tables (`Subjects`, `Courses`) with GSI on `subject_id` for fast lookup.  
   - **Search Service:** Managed Elasticsearch (OpenSearch) cluster indexed with course metadata and full‑text tags.  
   - **API Gateway + Lambda** to expose a REST endpoint `/subjects/{id}/courses`.  
   - **Caching:** CloudFront + Redis (ElastiCache) to cache popular subject pages for 10 min, cutting DynamoDB reads by ~70 %.  

2. **Scalability & Availability**  
   - Multi‑AZ deployments for DynamoDB and OpenSearch; auto‑scaling on CPU/latency thresholds.  
   - Circuit breaker pattern in Lambda to fall back to DynamoDB if search cluster is down.

3. **Cost & Trade‑offs**  
   - Estimated $1,200/month vs legacy monolith ($4,500).  
   - Chose serverless (Lambda) to avoid over‑provisioning; trade‑off: cold start latency (~300 ms), mitigated with provisioned concurrency for hot endpoints.

4. **Metrics & Results**  
   - After rollout: bounce rate dropped 18 %, enrollment from browsing rose 32 %.  
   - API latency <200 ms (95th percentile) and cache hit ratio >75 %.

**Result**  
The new architecture delivered a 32 % lift in revenue‑critical enrollments while slashing operational costs, demonstrating *Customer Obsession* by improving the user journey and *Ownership* through end‑to‑end delivery.

---

### What a bar‑raiser looks for

| Signal | Why it matters |
|--------|----------------|
| **Clear ownership** – I led all phases (design, implementation, monitoring). | Shows responsibility. |
| **Dive deep** – Detailed service choices, trade‑offs, and cost model. | Indicates depth of knowledge. |
| **Quantified impact** – Exact metrics on bounce rate & enrollments. | Demonstrates measurable value. |
| **Learning from failure** – Addressed cold start latency and fallback strategy. | Shows resilience and continuous improvement. |

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

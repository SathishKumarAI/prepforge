---
qid: ing_6c466656f2__aws__local
question: 'Explain: Related patterns — Pattern: API Gateway / Backends for Frontends'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 418
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:28:45-05:00'
sources: []
---

**Situation & Task**  
I was asked to expose a high‑traffic recommendation engine to mobile and web clients while keeping latency < 120 ms and cost under $5K/month.

**Action – Design**  
1. **API Gateway + Lambda (edge) → “Backends for Frontends” pattern**:  
   * Each UI layer gets its own lightweight API surface that calls a single shared recommendation Lambda.  
   * API Gateway handles throttling, auth (Cognito), and caching (TTL 30 s).  
2. **Backend‑for‑Frontend (BFF)** – A small Node.js service in ECS Fargate per frontend; it aggregates responses from multiple micro‑services (user profile, catalog) before returning a single payload to the client.  
3. **Data Layer** – DynamoDB with provisioned read capacity (10 k RCUs) and DAX cache for sub‑ms reads.  

**Result**  
* Latency dropped from 300 ms to < 110 ms (30% improvement).  
* API calls per day fell by 40% thanks to BFF caching, saving ~$1.2K/month.  
* The architecture stayed within the $5K budget while handling a 3× traffic spike during launch.

**Leadership Principles**  
- **Customer Obsession**: Tailored APIs for each UI reduced friction and improved UX scores by 18%.  
- **Ownership & Dive Deep**: I iterated on cache TTLs, monitored CloudWatch metrics, and adjusted provisioned throughput until SLA was met.  

**Bar‑raiser Takeaway**  
I demonstrated ownership (full lifecycle), deep dive into performance metrics, quantified impact, and a quick pivot when initial throttling caused errors—learning that “fail fast” is key to iterative improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

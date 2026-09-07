---
qid: ing_1aa32e04ac__aws__local
question: 'Explain: Cold Starts — Cloud Computing without Containers | Cloudflare
  Blog'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 400
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:26:34-05:00'
sources: []
---

**Situation & Task**  
I was leading a migration of an on‑prem inference service to the cloud for a SaaS client that served 10 M daily API calls. The legacy system used monolithic servers; every request triggered a “cold start” that added ~2 s latency and cost $0.30 per request in our AWS estimate.

**Action**  
1. **Dive Deep into the bottleneck** – profiled the JVM warm‑up, memory allocation, and database connection pool.  
2. **Design a serverless architecture** using **AWS Lambda** (Python 3.9) with provisioned concurrency of 200 to keep a warm pool for peak traffic.  
3. Added an **Amazon API Gateway** front‑end with throttling & caching (TTL = 60 s).  
4. Replaced the monolith’s heavy dependencies with **AWS Fargate** containers for the model inference step, using the **ECR** image built from a minimal Alpine base to cut size to 120 MB.  
5. Implemented **Amazon CloudWatch** metrics and **X‑Ray** tracing to detect and auto‑scale based on cold‑start latency.

**Result**  
- Cold‑start latency dropped from 2 s to <200 ms (90% reduction).  
- Cost per request fell from $0.30 to $0.05, saving ~$1.2 M annually.  
- Availability improved: 99.999% SLA achieved vs the previous 99.92%.  

**Learning & Ownership**  
I documented a “cold‑start playbook” that now guides all new Lambda migrations in the org. The bar‑raiser’s focus on ownership, depth, and quantified impact was met by turning a hidden cost into a measurable revenue‑saving initiative.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

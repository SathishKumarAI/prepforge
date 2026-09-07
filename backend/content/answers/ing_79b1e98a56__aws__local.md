---
qid: ing_79b1e98a56__aws__local
question: 'Explain: Cost Analysis — Real Time Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 513
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:00:06-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
While leading a product‑growth team, we noticed that the ad‑tech dashboard’s *real‑time cost‑analysis* feature lagged behind competitors, driving users to third‑party tools. I owned the redesign and had to cut latency from 2 s to <200 ms while keeping costs under $5k/month.

**Action (Dive Deep + Bias for Action)**  
1. **Requirements & Metrics** – Response time ≤ 200 ms, accuracy ±0.5%, cost ≤ $5k/mo.  
2. **Design** – *Event‑driven microservice* on **Amazon Kinesis Data Streams** → **AWS Lambda** (stateless, auto‑scaling) for ingestion; compute a rolling window of spend with **Amazon DynamoDB** (TTL enabled).  
3. **Cost Calculation** – Use **AWS Step Functions** to orchestrate parallel Lambda invocations that query **Amazon Athena** on S3‑archived logs, caching results in **ElastiCache Redis** for 1 min TTL to avoid repeated scans.  
4. **Scalability & Availability** – Kinesis shards auto‑scale; DynamoDB provisioned throughput with Auto Scaling keeps latency low; Lambda concurrency limits prevent cold starts.  
5. **Cost Control** – Spot Lambdas (80% savings), DynamoDB on-demand, Athena per-query billing → total ≈ $3.8k/month.

**Result (Deliver Results)**  
- Latency dropped to 180 ms (15× faster).  
- User engagement rose 28%, churn fell 12%.  
- Cost stayed below target by 24%.

**Learnings (Bar‑raiser focus)**  
*Ownership*: I championed the whole pipeline, not just a component.  
*Dive Deep*: Profiling Lambda layers revealed that a single inefficient query was the bottleneck; refactoring to pre‑aggregated Athena views saved 35% compute time.  
*Quantified Impact*: 28% lift in engagement directly tied to feature improvement.  
*Failure Insight*: Initial design over‑provisioned DynamoDB, causing $1k waste—lesson: start with a conservative throughput estimate and use Auto Scaling.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_1d5aecf90a__aws__local
question: 'Explain: Pull Model Details — Push vs Pull in Metrics Collection Systems'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 443
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:32:44-05:00'
sources: []
---

**Situation**  
While leading a cross‑functional team that built the new monitoring layer for our ML pipelines, we had to decide how metrics would reach the central dashboard. The existing “push” model (agents sending data every heartbeat) caused burst traffic during model retraining cycles and made it hard to correlate events across services.

**Task**  
Design a pull‑based architecture that reduces network chatter, improves observability, and scales with thousands of training jobs.

**Action**  
1. **Requirements** – Metrics needed: latency, error rate, GPU utilization, and custom loss curves; freshness ≤ 5 s; cost under $0.02/hr per node.  
2. **Design** – Each worker writes metrics to a short‑lived S3 object (`/metrics/<job-id>/<timestamp>.json`) using the AWS SDK (serverless write).  
3. A scheduled Lambda (every 10 s) scans S3, aggregates JSON via `boto3`, and publishes a single message to an Amazon SNS topic.  
4. The dashboard subscribes to SNS and pulls data on demand from S3.  

**Result**  
- **Scalability:** Handles > 50k concurrent jobs with no per‑job network overhead.  
- **Availability:** S3 provides 99.999% durability; Lambda retries automatically.  
- **Cost:** <$0.01/hr vs $0.08/hr for the prior push model (≈ 87 % savings).  
- **Observability:** Metrics latency reduced from 12 s to 4 s, enabling faster root‑cause analysis.

**Reflection**  
I owned the migration, drove a “dive deep” review of our metrics pipeline, and iterated on the design after noticing a spike in Lambda cold starts. The bar‑raiser would note my ownership, quantified impact, and learning from early performance bottlenecks—key Amazon traits: *Ownership*, *Dive Deep*, and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

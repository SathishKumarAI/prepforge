---
qid: ing_fd589c7106__aws__local
question: 'Explain: From running judge on all production traces (Step 7)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 388
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:50:47-05:00'
sources: []
---

**Situation & Task**  
At my previous role, we were rolling out a real‑time fraud‑detection model that processed ~3 M transaction traces per day. After training, the “judge” service had to validate every production trace against the live model and a rule engine before the results hit downstream systems.

**Action (Design & Implementation)**  
I owned the end‑to‑end pipeline and chose **Amazon Kinesis Data Streams** for ingestion, **AWS Lambda** for stateless scoring, and **DynamoDB** for temporary state persistence. The judge logic ran in parallel across 200 shards, guaranteeing <50 ms latency per trace. To maintain idempotency, I stored a hash of each trace in DynamoDB; any duplicate hit was discarded instantly, cutting unnecessary compute by ~12%. For cost control, the Lambda function used provisioned concurrency for peak hours and burst mode otherwise, keeping monthly spend under $5k versus the $18k baseline.

**Result (Data‑driven Impact)**  
- **Throughput:** 3 M traces/day with 99.9% success rate.  
- **Latency:** Avg 42 ms per trace (target <50 ms).  
- **Cost:** 72% reduction in processing spend.  
- **Business Value:** Fraud detection accuracy improved from 88% to 95%, saving the company ~$2M annually.

**Reflection & Learning**  
I realized that early‑stage performance testing missed burst scenarios, so I instituted chaos‑engineering drills for the judge service—an approach now part of our release checklist. This deep dive into observability and cost optimization reinforced Amazon’s *Ownership* and *Dive Deep* principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

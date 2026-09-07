---
qid: ing_00bcb7af6e__aws__local
question: 'Explain: The Business Problem — Customer Distillation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 417
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:26:13-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked with turning a *customer‑feedback* data lake into a real‑time “distillation” service that surfaced key sentiment trends for product managers. The business problem: executives needed to see actionable insights within 5 minutes of a new review, not hours after batch ETL.

**Action (Design & Execution)**  
I built a serverless pipeline using **Amazon Kinesis Data Streams** → **AWS Lambda** (Python) → **Amazon OpenSearch Service** for indexing and quick aggregation. The Lambda function parsed raw JSON reviews, ran an in‑house NER model on SageMaker endpoints, and stored structured tags back to DynamoDB. A scheduled **Step Functions** workflow refreshed a daily summary view stored in S3 as Parquet for downstream BI tools.

Key trade‑offs:  
- *Scalability*: Kinesis shards auto‑scaling handled peak spikes (up to 10 k reviews/sec).  
- *Availability*: Lambda concurrency limits were set with reserved capacity; OpenSearch replicated across three AZs.  
- *Cost*: Serverless eliminated idle server costs, and DynamoDB on‑demand pricing kept CAPEX minimal.

**Result**  
Within two weeks of launch, the time to insight dropped from 4 hours to **5 minutes**, increasing product‑team decision speed by **35%**. Quarterly revenue uplift was $1.2M attributable to faster feature rollouts. I documented all failure modes (e.g., model latency spikes) and iterated on retry logic—showing continuous learning.

**Leadership Principles Highlighted**  
- *Customer Obsession* – delivering instant insights directly improved executive experience.  
- *Ownership & Dive Deep* – I owned the end‑to‑end pipeline, debugged bottlenecks, and quantified impact with real metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

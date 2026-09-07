---
qid: ing_53ecac564a__aws__local
question: 'Explain: Event Driven Architecture — Eventdrivenarchitecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 534
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:34:45-05:00'
sources: []
---

**Event‑Driven Architecture (EDA)**

*Leadership Principles:* **Customer Obsession** – delivering instant feedback to users; **Ownership** – end‑to‑end responsibility for data flow.

**S**ituation  
In my last role I led a fraud‑prevention team that had to process ~2 M transaction events per day. The existing batch pipeline introduced 45‑minute latency, causing customer complaints and missed revenue opportunities.

**T**ask  
Design an architecture that ingests, processes, and reacts to each event in near real‑time while keeping costs < $10k/month and maintaining ≥99.9% availability.

**A**ction  
1. **Event ingestion:** Use **Amazon Kinesis Data Streams** (shards tuned for 5 MB/s) to buffer events with built‑in replay capability.  
2. **Processing & enrichment:** Deploy a **Kinesis Data Analytics** application that runs SQL against the stream, flags suspicious patterns, and writes results to an **AWS Lambda** function.  
3. **Orchestration:** Lambda triggers downstream services (e.g., **Amazon SNS** for alerts, **DynamoDB** for audit logs).  
4. **Observability:** Enable **CloudWatch Metrics & Logs**, set alarms on latency > 2 s, and use **X-Ray** for trace depth.  
5. **Cost control:** Use **On‑Demand** Lambda with provisioned concurrency only during peak hours; Kinesis shards auto‑scaling ensures we pay for actual throughput.

**R**esult  
Latency dropped from 45 min to < 2 s, increasing user satisfaction scores by 12 points (NPS). Fraud detection accuracy improved to 98% precision, saving ~$1.8M annually in false positives. The solution stayed within the $9.5k/month budget and achieved 99.95% availability during a 3‑month test.

**What a bar‑raiser looks for:**  
- **Ownership**: I owned the full data path from ingestion to alerting.  
- **Dive Deep**: Tuned shard count, analyzed Lambda cold starts, and quantified cost per event.  
- **Quantified Impact**: Precise NPS lift and revenue savings metrics.  
- **Learning from Failure**: Initial batch approach failed; I iterated quickly using Kinesis’ replay to validate the new flow before production rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

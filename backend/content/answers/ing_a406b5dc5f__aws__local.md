---
qid: ing_a406b5dc5f__aws__local
question: 'Explain: Enhanced Security — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 435
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:38:14-05:00'
sources: []
---

**Situation & Task**  
When I joined the Machine‑Learning Platform (MCP) team, our on‑prem Glean server was exposed to a growing number of data‑leakage alerts from external audits. The leadership asked me to design an “Enhanced Security” layer that would **protect sensitive ML artifacts and training data** while keeping ingestion latency below 200 ms.

**Action – Design & Implementation**  
* **Zero‑Trust IAM + Cognito:** I replaced the old shared key system with AWS IAM roles tied to Amazon Cognito identities, limiting each user’s scope to a single project bucket.  
* **VPC Endpoints & PrivateLink:** All S3 and SageMaker endpoints were moved into a private VPC with interface endpoints, eliminating egress over the public internet.  
* **Encryption‑at‑Rest + SSE‑KMS:** I enforced automatic server‑side encryption for all data stores and rotated CMKs quarterly.  
* **Audit & Monitoring:** CloudTrail logs were streamed to an encrypted Kinesis Data Firehose, triggering Lambda alerts on anomalous access patterns.

**Result**  
After rollout:  
- 99.9 % reduction in unauthorized access incidents (from 12/month to <0.1).  
- Ingestion latency stayed at **185 ms average**, well under the SLA.  
- Operational cost increased by only **3 %** due to KMS and Lambda usage.

**Leadership Principles Reflected**  
*Customer Obsession* – I focused on protecting users’ data so they could trust our platform.  
*Ownership & Dive Deep* – I drove the solution end‑to‑end, from IAM policy audit to real‑time anomaly detection, learning that even small misconfigurations in VPC endpoints can expose entire workloads.

**Bar‑raiser takeaway** – Showed deep technical ownership, quantified impact, and a continuous improvement loop (audit → alert → patch).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

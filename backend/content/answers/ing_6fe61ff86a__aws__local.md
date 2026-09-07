---
qid: ing_6fe61ff86a__aws__local
question: 'Explain: A user reports the RAG assistant gave a wrong answer. Walk me
  through your triage.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 557
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:38:03-05:00'
sources: []
---

**Situation (S)**  
A customer on our RAG‑powered knowledge‑base platform flagged that the assistant returned a factually incorrect response during a support session.

**Task (T)**  
Triage the incident, isolate root cause, and restore confidence while minimizing impact to other users.

**Action (A)**  

| Step | What I did | AWS Services | Why |
|------|------------|--------------|-----|
| 1️⃣ **Immediate isolation** | Throttled the user’s session via API Gateway rate‑limiting and flagged the request in CloudWatch Logs. | *API Gateway, CloudWatch* | Prevents cascading errors while we investigate. |
| 2️⃣ **Reproduce & log** | Replayed the same query against a staging copy of the vector store; captured embeddings, retrieval results, and LLM prompt. | *SageMaker Runtime, OpenSearch, DynamoDB* | Allows side‑by‑side comparison to production data. |
| 3️⃣ **Root‑cause analysis** | • Checked index drift (OpenSearch version mismatch).<br>• Queried the embedding model’s recent update logs.<br>• Audited prompt‑engineering changes in the Lambda function. | *CloudTrail, SageMaker Pipelines* | Identifies whether the issue is data‑level or code‑level. |
| 4️⃣ **Fix & rollback** | Rolled back to the last stable embedding vector index and restored the previous prompt template. | *S3 versioning, CloudFormation* | Guarantees zero‑downtime rollback. |
| 5️⃣ **Post‑mortem & monitoring** | Added a CloudWatch alarm on “wrong answer” rate (>1% of total queries). Updated documentation and run a regression test suite. | *CloudWatch Alarms, CodePipeline* | Prevents recurrence and quantifies impact. |

**Result (R)**  
Within 90 minutes the user’s session was restored with a **99.8 % accuracy** post‑fix; the new alarm detected an anomalous spike in the next cycle, allowing us to patch the prompt before it affected >10k users. The incident decreased support tickets by **35 %** over the following week.

> *Leadership Principles*: **Ownership**, **Dive Deep**, and **Deliver Results**.  
> *Bar‑raiser note*: I demonstrated full ownership of the customer’s experience, delved into every layer (data, model, code), quantified impact with concrete metrics, and learned from failure by hardening monitoring and rollback procedures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

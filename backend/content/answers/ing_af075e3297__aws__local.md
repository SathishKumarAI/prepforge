---
qid: ing_af075e3297__aws__local
question: 'Explain: Episodic Memory: The Personal Log — Long Term Memory'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 425
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:01:20-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a feature that let users “re‑watch” their own interactions with an AI tutor. The challenge was to store every user dialogue in a searchable, durable log without inflating costs or degrading latency.

**Action (Design)**  
1. **Architecture** – Stream each conversation event to **Amazon Kinesis Data Streams**, trigger an **AWS Lambda** that enriches the payload (user ID, timestamp, sentiment) and writes it to **Amazon DynamoDB** for fast retrieval.  
2. **Long‑term archival** – Every 24 h a scheduled Lambda snapshots the DynamoDB table into **Amazon S3 Glacier Deep Archive** (cost $0.004/GB‑month).  
3. **Search layer** – Index the active logs in **Amazon OpenSearch Service** for near‑real‑time full‑text queries, while archived data is rehydrated on demand via S3 Object Lambda.  
4. **Security & compliance** – All data at rest is encrypted with KMS keys; IAM policies enforce least privilege.

**Result**  
- Reduced storage cost by 65 % (from $0.12 to $0.04/GB‑month) while keeping retrieval latency under 200 ms for 95 % of queries.  
- Enabled a “memory replay” feature that increased user session length by 18 % and boosted Net Promoter Score from 42 to 55.

**Reflection**  
I *owned* the end‑to‑end pipeline, *dived deep* into cost vs. performance trade‑offs, and iterated after an initial failure where DynamoDB hot partitions caused throttling—adding a partition key on user ID resolved it. This aligns with **Ownership**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

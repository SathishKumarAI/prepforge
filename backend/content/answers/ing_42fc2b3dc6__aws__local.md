---
qid: ing_42fc2b3dc6__aws__local
question: How do you keep a RAG index fresh as documents change?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 453
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:57:28-05:00'
sources: []
---

**Situation & Task**  
At my previous role I built a Retrieval‑Augmented Generation (RAG) chatbot for an enterprise knowledge base that grew 4 GB/month. The docs were updated daily and the model had to serve fresh answers with <200 ms latency.

**Action**  
*Ownership + Dive Deep*: I treated the index as a product, not just a data store.  
1. **Change‑feed** – every S3 object update triggers an EventBridge rule that fires a Lambda “index‑updater”.  
2. **Idempotent diff** – the updater pulls the new doc, hashes its content and stores the hash in DynamoDB. If the hash differs from the previous one, we proceed; otherwise we skip (avoids redundant re‑indexing).  
3. **Incremental OpenSearch update** – the Lambda writes only changed vectors to Amazon OpenSearch Service via the bulk API, keeping the index size ~30 % smaller than a full rebuild.  
4. **Observability & Scaling** – CloudWatch metrics (`IndexLatency`, `DocsUpdated`) trigger an EventBridge rule that scales the OpenSearch cluster on CPU/Memory thresholds (auto‑scaling group).  

*Bias for Action + Deliver Results*: The whole pipeline runs in <5 s per doc change, keeping query latency below 200 ms. Over six months we reduced index rebuild time from 2 h to 30 min and cut cost by 35 % (less node usage).

**Result**  
- 98 % of user queries answered with the latest content.  
- Latency dropped from 350 ms to 180 ms.  
- Cost savings: $1,200/month.

**Bar‑raiser takeaway** – I demonstrated ownership by treating the index as a living system, dove deep into idempotent diffing and incremental updates, quantified impact with clear metrics, and learned that automated change feeds eliminate stale data without manual intervention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

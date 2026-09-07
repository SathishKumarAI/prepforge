---
qid: ing_78edac30b4__aws__local
question: 'Explain: Concurrency Issues — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 435
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:58:50-05:00'
sources: []
---

**Situation / Task**  
I led a 4‑person team building *TinyURL* for an internal marketing portal that needed to handle 50 k requests/second with <1 % collision rate and zero data loss.

**Action (Design & Execution)**  
- **Data model**: Primary key = `short_id`; secondary index on `original_url`.  
- **Concurrency control**:  
  *Used DynamoDB’s conditional writes* (`PutItem` with `ConditionExpression=attribute_not_exists(short_id)`). If a collision occurs, we generate a new hash and retry up to 5 times.  
- **Id generation**: SHA‑256 + base62 encoding of a monotonically increasing counter stored in an **DynamoDB atomic counter** (via `UpdateItem` with `ADD`). This guarantees uniqueness without central coordination.  
- **Scalability**: Provisioned throughput 100 k RCUs/WCUs; auto‑scaling kicks in at >70% utilization.  
- **Availability & cost**: DynamoDB on‑demand mode (≈$0.25/GB‑month) + Lambda for URL resolution, keeping serverless footprint and avoiding over‑provisioning.  

**Result**  
- Collision rate dropped to 0.001 % (down from 2 %).  
- Latency <5 ms average; 99th percentile <12 ms.  
- Operational cost reduced by 35 % vs a pre‑design baseline.  

**Reflection (Bar‑raiser cues)**  
I owned the end‑to‑end flow, dived deep into DynamoDB’s conditional write semantics, quantified performance gains, and learned that decoupling id generation from storage eliminates a single point of contention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: vq_e0e46d0cbf__aws__local
question: Can we pass RECORD GROUP between FORMS ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 420
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:19:26-05:00'
sources: []
---

**Situation (S)**  
In a legacy payroll system I was asked whether the `RECORD_GROUP` from one Oracle Forms page could be reused on another page without re‑querying the database. The customer needed faster turnaround for batch approvals, so latency had to drop from ~2 s per query to <200 ms.

**Task (T)**  
I had to design a stateless solution that honored *Customer Obsession* and *Ownership*: keep the data fresh while avoiding repeated round‑trips.

**Action (A)**  
1. **Capture** the `RECORD_GROUP` into a JSON blob on the first form’s submit event.  
2. Store the blob in an **Amazon S3** object with server‑side encryption (SSE‑KMS) and tag it with a short TTL key in **DynamoDB**.  
3. On the second form, retrieve the blob via **AWS Lambda** triggered by API Gateway; deserialize JSON back into a collection that Oracle Forms can bind to.  
4. Use **Amazon CloudFront** as an edge cache to reduce latency for geographically dispersed users.

This architecture eliminates direct DB calls, leverages AWS’s scalable object store (S3), and keeps the data immutable until TTL expires—meeting *Deliver Results* with 99.9 % availability and <200 ms read time.

**Result (R)**  
The new flow cut query latency from 2 s to 180 ms per transaction, boosting batch approvals by 35 % and reducing database load by 40 %. The system now scales automatically as the number of concurrent users grows.  

*Bar‑raiser cues:* I demonstrated ownership by redesigning the data path, deep dive into AWS services for cost/latency trade‑offs, quantified impact (percentages), and learned from the failure mode where repeated queries caused database throttling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_8db2d30b37__aws__local
question: 'Explain: Architecture 3: Staged Retrieval — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 457
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:46:11-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a team that had to migrate an on‑premise search stack for a global e‑commerce catalog into the cloud while keeping latency under 100 ms and handling 200k queries/sec. The business demanded *customer obsession* – users should see results instantly, even when the data set was growing by 30 % monthly.

**Action & Design**  
I introduced **Staged Retrieval – Hybrid Search**:  

1. **Stage‑1 (Fast Filter)** – A DynamoDB Global Secondary Index stores pre‑computed feature vectors and tags. Queries hit this index via a Lambda authorizer, returning the top‑N candidate IDs in <5 ms.  
2. **Stage‑2 (Deep Rank)** – Those candidates are passed to an Elastic Inference‑accelerated SageMaker endpoint that runs a BERT‑based relevance model against the full text stored in S3 and RDS. The score is combined with click‑through data from Kinesis Firehose, streamed into Redshift for real‑time feedback.

AWS services: DynamoDB, Lambda, SageMaker (Inference), Elastic Inference, S3, Kinesis, Redshift, CloudFront.  

**Result**  
We cut search latency from 350 ms to 70 ms (80 % improvement) and increased conversion by 12 % in the first month post‑deployment. Costs were controlled: DynamoDB auto‑scaling kept spend < $2k/month, while SageMaker inference was reserved‑instance backed at a 30 % discount.

**Reflection & Learning**  
I owned the end‑to‑end pipeline and *dive deep* into each service’s metrics to spot bottlenecks. After an initial spike in CPU usage on Lambda, I introduced provisioned concurrency—an iterative fix that kept SLAs intact. This experience reinforced my belief that *ownership + data‑driven decisions* drive lasting impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_0a7f71126f__aws__local
question: 'Explain: Semantic Routing — Model Taxonomy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 427
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:49:34-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked with scaling a recommendation engine that served millions of users daily. The model repository grew from 5 to 120 versions, each tagged for different audiences and data‑sources. Without a clear taxonomy we were routing traffic randomly, leading to 27 % higher latency and a 4 % drop in conversion.

**Action**  
I introduced **Semantic Routing with Model Taxonomy**:  

| Step | What I did | AWS Services |
|------|------------|--------------|
| Define tags | Created an ontology (Audience, Feature‑set, Training‑date) using DynamoDB for metadata. | DynamoDB |
| Routing layer | Built a Lambda authorizer that inspects the request context and selects the most semantically relevant model from SageMaker Endpoint groups. | AWS Lambda, SageMaker Endpoints |
| Feedback loop | Instrumented CloudWatch metrics (latency, hit‑rate) and used Kinesis to feed data back into an automated retraining pipeline. | CloudWatch, Kinesis, Step Functions |

**Result**  
- Latency dropped from 350 ms to **210 ms** (40 % improvement).  
- Conversion increased by **3.8 %** in the first month after deployment.  
- Operational cost fell 18 % because we avoided over‑provisioning of endpoints.

**Learning & Ownership**  
I owned the end‑to‑end pipeline, diving deep into the data to discover that semantic similarity was the missing link. I also built a “model health” dashboard that auto‑scales endpoints based on real‑time traffic, embodying *Ownership* and *Bias for Action*.  

This solution is highly available (multi‑AZ SageMaker), cost‑effective (serverless routing), and scalable—ready to ingest thousands of new models without manual reconfiguration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_316ff1c003__aws__local
question: 'Q29: How do you detect and handle hallucinations?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 382
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:16:52-05:00'
sources: []
---

**Situation / Task**  
I was leading a team that built an enterprise‑grade conversational AI for a financial client. The model’s hallucination rate—unverified facts inserted into responses—was 12 % in production, hurting trust and increasing manual review costs by $3 k/month.

**Action**  
1. **Detect** – I added a *hallucination detector* microservice:  
   * **AWS Comprehend Medical + SageMaker** to extract entities;  
   * A lightweight rule‑based engine (Python) that flags any claim not matched in the client’s knowledge graph.  
2. **Handle** – When flagged, the pipeline:
   * Re‑generates the answer with a *confidence‑boosting* prompt (“Verify before answering”).  
   * If confidence < 0.8, it automatically routes to a human reviewer (SQS + Lambda).  
3. **Iterate** – We logged every hallucination event in DynamoDB, ran weekly trend analysis, and fed the top 10 false positives back into model fine‑tuning.

**Result**  
* Hallucination rate dropped from 12 % → 2 % (≈ 83 % reduction).  
* Manual review time fell by 70 %, saving ~$1.8 k/month.  
* System latency increased only 0.4 s, staying within SLA.

**Learning & Ownership**  
I took full ownership of the quality loop, diving deep into model internals and operational metrics. The bar‑raiser praised my bias for action and quantifiable impact—demonstrating how a small, data‑driven guardrail can scale to enterprise needs while keeping costs low (≈ $0.02/lookup).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

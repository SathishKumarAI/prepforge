---
qid: ing_69e0018e22__aws__local
question: 'Explain: Safety, Poisoning, and Hallucinations — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 369
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:23:34-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a cross‑functional team that built an AI‑powered recommendation engine for a consumer‑facing e‑commerce platform. Our goal was to keep user trust high while scaling from 1 M to 10 M daily active users (DAU). The biggest risk was *agent memory* leaking sensitive data, being poisoned by adversarial input, or hallucinating incorrect product attributes.

**Action**  
I introduced a **memory‑sandboxing layer** that stored state in an encrypted DynamoDB table and accessed it via **AWS Secrets Manager**. To guard against poisoning I added a *data‑validation microservice* (Lambda + SageMaker) that scored each user interaction for outliers before it could update the memory store. For hallucinations, we deployed a *post‑generation verifier* using Amazon Comprehend Custom Classification to cross‑check facts against our product catalog in real time.

**Result**  
The end‑to‑end latency stayed under 200 ms (95th percentile), and we reduced false positive churn by **38%** compared with the legacy system. The memory sandbox cut data leakage incidents from 5 per month to zero, earning us a *Customer Obsession* badge in our quarterly review.

**Reflection**  
I learned that safety is not just about model weights; it’s an architectural discipline. By treating each component as a potential failure point and applying **Ownership** + **Dive Deep**, we turned a complex safety problem into a scalable AWS‑native solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

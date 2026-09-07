---
qid: ing_3df6b11370__aws__local
question: 'Explain: AI Design Patterns Quick Reference'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 444
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:46:05-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a cross‑functional team to build an AI‑powered recommendation engine for a global retailer. The product had to scale from 5 M users in Q1 to 50 M by year‑end while keeping latency <200 ms and cost <$0.05 per inference.

**Action**  
I introduced the *AI Design Patterns Quick Reference* – a living cheat sheet that maps common use cases (classification, clustering, ranking, generation) to proven patterns: **Feature Store + Batch Inference**, **Model Registry + Canary Deployment**, **Online Feature Cache + Edge TPU**, and **Explainable AI with SHAP**.  
I mapped each pattern to AWS services:
- **Amazon SageMaker Pipelines** for CI/CD,
- **SageMaker Model Registry** for versioning,
- **AWS Lambda + API Gateway** for low‑latency inference,
- **DynamoDB Global Tables** as a feature store, and
- **Amazon CloudWatch + X-Ray** for observability.

I also defined *“Pattern Scorecards”*—metrics like latency, cost per 1 k requests, and error rate—to enable quick trade‑off decisions. This reduced the time to prototype new models from 4 weeks to 1 week and cut inference costs by **32 %** while improving recommendation accuracy (MAP@10 ↑ 7.5 %).

**Result**  
The product shipped on schedule; we achieved 99.9 % availability during peak traffic and maintained a total cost of ownership under budget, driving an additional $12 M in annual revenue.

---

*Leadership Principles:* **Ownership**, **Dive Deep**, **Bias for Action**.  
*A bar‑raiser looks for*: clear ownership of the pattern library, depth of technical detail (AWS service choices), quantified impact (cost savings, latency), and a learning loop from failed deployments that informed subsequent pattern refinements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

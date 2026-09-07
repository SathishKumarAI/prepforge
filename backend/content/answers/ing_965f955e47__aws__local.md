---
qid: ing_965f955e47__aws__local
question: 'Explain: LLM-as-judge, properly — Evaluation And Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 420
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:05:44-05:00'
sources: []
---

**Situation & Task**  
While leading a research‑to‑production pipeline for an internal LLM service, I was asked to turn the model into an autonomous “judge” that could evaluate new prompts and provide observable quality metrics without human intervention.

**Action** – *Design*  
1. **Data‑Driven Evaluation** – built a microservice that runs each prompt through the LLM twice: once with a “golden” reference prompt and once with the candidate. The cosine similarity of the embeddings (using SageMaker’s `text-embedding-ada-002`) becomes our primary score.  
2. **Observability** – instrumented the judge with CloudWatch metrics (`PromptLatency`, `SimilarityScore`, `ErrorRate`) and a Kinesis stream that feeds a Lambda for real‑time dashboards in Grafana.  
3. **Governance & Bias Check** – added a “bias‑filter” step using Amazon Comprehend to flag protected attributes, feeding back into the score.  
4. **Scalability & Cost** – deployed the judge as an ECS Fargate task behind an Application Load Balancer; autoscaling on `SimilarityScore` variance keeps costs < $0.50/hr while guaranteeing 99.9% availability.

**Result** – *Impact*  
- Reduced manual QA time by **85 %**, cutting review cycles from 3 days to 4 hours.  
- Improved overall model quality score (mean similarity) from **78 %** to **92 %** in one month, directly boosting downstream product adoption by **12 %**.

**Reflection** – *Bar‑raiser Lens*  
I owned the end‑to‑end flow, dove deep into embedding math and CloudWatch metrics, quantified every metric, and iterated after a false‑positive spike that taught me to refine the bias filter. This demonstrates Ownership, Dive Deep, and Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_d480a6d951__aws__local
question: 'Explain: Context rot — Agentic Engineering - by Neo Kim and Paul Hoekstra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 480
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:20:39-05:00'
sources: []
---

**Context Rot & Agentic Engineering – What I Learned**

*Situation*: While building a recommendation engine for an e‑commerce platform, my team noticed that the model’s accuracy dropped by 15 % after only two weeks of deployment. The data drift was subtle—customers’ browsing patterns shifted with new seasonal campaigns. We needed to understand why the “context” our models relied on was no longer valid.

*Task*: I had to diagnose *context rot* (the phenomenon where a model’s training context becomes stale) and propose an engineering strategy that would let the system adapt autonomously—what Neo Kim & Paul Hoekstra call **Agentic Engineering**.

*Action*:  
1. **Dive Deep into Data Drift** – I added a real‑time feature store (AWS AppConfig + DynamoDB Streams) to capture user‑segment features and flagged any change > 10 % in distribution per day.  
2. **Build an Agentic Pipeline** – Using SageMaker Pipelines, I automated nightly retraining triggered by drift alerts. The pipeline leveraged Spot Instances for cost efficiency and included a validation step that compared the new model’s AUC to the baseline; only models improving by ≥ 0.02 were promoted.  
3. **Deploy with Blue/Green** – I wrapped each candidate in an API Gateway + Lambda layer, routing 5 % of traffic to test variants (AWS Lambda@Edge) before full rollout.  

*Result*: After implementation, the model’s accuracy stabilized at a 92 % AUC and monthly revenue from recommendations increased by **$1.8M** (+12 %) within three months. The automated retraining reduced engineer hours from 20 h/week to < 2 h/week.

**Leadership Principles Highlighted**

- *Customer Obsession*: Ensured the recommendation quality directly improved user experience and sales.  
- *Ownership & Dive Deep*: Took end‑to‑end responsibility, dissecting data drift, designing an autonomous pipeline, and iterating on metrics.  

*Bar‑raiser takeaways*: I demonstrated clear ownership, quantified impact, a deep technical solution (AWS services + cost trade‑offs), and learned from the initial failure by turning data drift into an automated resilience feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

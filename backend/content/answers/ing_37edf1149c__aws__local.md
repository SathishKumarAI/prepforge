---
qid: ing_37edf1149c__aws__local
question: You come from classical ML. What transfers directly to LLM application work,
  and what did you have to relearn?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 452
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:30:59-05:00'
sources: []
---

**Situation / Task**  
I joined an AI team tasked with migrating a production‑grade recommendation engine (classical ML) to a large language model (LLM) based chatbot. The goal was to reduce latency by 40 % while maintaining a 95 % satisfaction score.

**Action – Transferable Skills**  
- **Feature Engineering & Data Hygiene**: The same rigorous data pipeline I built for the recommendation system—deduplication, missing‑value imputation, and feature scaling—directly fed into the LLM fine‑tuning dataset.  
- **Model Monitoring (AWS SageMaker Model Monitor)**: I reused anomaly detection dashboards to flag drift in user intent distributions.  

**Action – Relearned Concepts**  
- **Tokenization & Context Windowing**: Unlike tabular models, LLMs require careful handling of input length; I implemented a sliding‑window encoder with AWS Lambda to truncate and pad text while preserving semantic integrity.  
- **Inference Scaling (Amazon Bedrock + Auto Scaling)**: I designed an API gateway that routes requests to multiple Bedrock inference endpoints behind a weighted ALB, achieving 99.9 % availability.  

**Result**  
Latency dropped from 850 ms to 520 ms (−39 %), and user satisfaction rose from 92 % to 96 %. Cost per request fell by 18 % due to efficient prompt caching on Amazon ElastiCache.

**Reflection – Bar‑Raiser Lens**  
- *Ownership*: I led the end‑to‑end migration, coordinating data, infra, and ops.  
- *Dive Deep*: I dissected token‑level performance bottlenecks and tuned hyperparameters using SageMaker Experiments.  
- *Learning from Failure*: An early mis‑estimated context window caused out‑of‑memory errors; I instituted automated unit tests that caught this before production.

**Leadership Principles Highlighted**  
- **Customer Obsession** (improved latency & satisfaction)  
- **Ownership** (full responsibility for migration)

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

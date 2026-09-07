---
qid: ing_a289b7cd95__aws__local
question: 'Explain: Prompt Optimization (DSPy) — Prompt Optimization Dspy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 421
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:32:35-05:00'
sources: []
---

**Prompt Optimization with DSPy – a Customer‑Obsessed, Ownership‑Driven Solution**

*Situation*: A fintech startup needed to generate highly accurate loan risk scores from unstructured underwriting notes. The model’s accuracy was only **68 %**, causing costly manual reviews.

*Task*: Build an end‑to‑end prompt‑engineering pipeline that boosts model precision while keeping latency under 200 ms and cost below $0.01 per inference.

*Action*:  
1. **Dive Deep** into the LLM output: logged every token, identified hallucination patterns, and created a *prompt‑score* metric (accuracy × confidence).  
2. Leveraged **DSPy** to iterate over prompt templates programmatically; each iteration evaluated on a held‑out validation set.  
3. Integrated the pipeline with **Amazon SageMaker Pipelines** for reproducibility, using **AWS Lambda** as a lightweight inference endpoint and **ECS Fargate** for heavy preprocessing.  
4. Implemented a *feedback loop* via **Amazon CloudWatch Metrics** to auto‑trigger DSPy retraining when accuracy dropped below 75 %.

*Result*: Accuracy rose from **68 % → 92 %**, reducing manual review time by **70 %** and cutting inference cost from $0.02 → $0.008 per request. The solution ran with 99.9 % availability, thanks to ECS autoscaling.

**Leadership Principles Highlighted**  
- *Customer Obsession*: Delivered a product that dramatically improved user trust in credit decisions.  
- *Ownership*: Built the entire prompt‑engineering cycle from scratch and maintained it autonomously.  

*Bar‑raiser takeaway*: Demonstrated deep technical insight (DSPy, SageMaker), quantified impact, and an ownership mindset that turned a failing model into a high‑performing, cost‑effective service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

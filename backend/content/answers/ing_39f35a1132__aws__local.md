---
qid: ing_39f35a1132__aws__local
question: 'Explain: Evaluating RAG — Your AI Product Needs Evals \u2013 Hamel\u2019s
  Blog'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 472
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:37:24-05:00'
sources: []
---

**Situation & Task**  
When I joined the AI Ops team at Amazon, we were launching a new RAG‑powered recommendation engine for Prime Video. The leadership brief demanded that we validate *model quality* (accuracy, hallucination rate) **before** rolling out to 30M users.  

**Action**  
I owned the evaluation pipeline:  
1. **Data prep** – crawled 10 TB of user logs into an S3 lake; used Glue to clean and label 200k query‑response pairs for ground truth.  
2. **Metric suite** – built a custom SageMaker endpoint that ran *BLEU, ROUGE* and *Hallucination Score* (via LLM prompt) on each batch. Results fed into DynamoDB tables indexed by model version.  
3. **A/B rollout** – deployed two candidate RAG pipelines (Bedrock + Lambda vs. in‑house retrieval) behind API Gateway; CloudWatch dashboards tracked latency, cost ($0.02/req), and hallucination rate.  
4. **Feedback loop** – every 24 h, the pipeline auto‑promoted a version that met <1% hallucinations & >85% BLEU to production.

**Result**  
Within two weeks we cut hallucination from 12% to 0.9%, increased user engagement by 18%, and reduced inference cost by 22% (from $0.035 to $0.027/req).  

**Leadership Principles**  
- **Customer Obsession & Ownership** – I drove the end‑to‑end eval cycle, ensuring real users saw higher quality content.  
- **Dive Deep & Deliver Results** – The metric‑driven pipeline uncovered a hidden bias in our retrieval corpus, leading to a 30% drop in irrelevant answers.  

Bar‑raisers will note my ownership of the full stack, deep dive into evaluation metrics, and quantified impact on both UX and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

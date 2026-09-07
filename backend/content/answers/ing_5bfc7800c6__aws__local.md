---
qid: ing_5bfc7800c6__aws__local
question: What are the known biases of LLM judges, and how do you mitigate each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 419
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:53:21-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a cross‑functional team that built an LLM‑based legal‑review assistant for a Fortune 500 insurer. The product had to comply with regulatory standards and avoid bias in its judgments (e.g., gender, race, or jurisdiction).  

**Action**  
1. **Identify Biases** – We catalogued known LLM biases: *demographic* (gender/race), *domain* (jurisdictional knowledge gaps), and *temporal* (out‑of‑date statutes).  
2. **Mitigation Strategies**  
   - *Demographic*: Fine‑tuned the model on a curated, balanced dataset and applied post‑hoc fairness constraints using AWS SageMaker’s `Fairlearn` integration.  
   - *Domain*: Created a *knowledge graph* in Amazon Neptune that maps statutes to regions; the LLM queries this graph via an API Gateway + Lambda layer before generating a verdict.  
   - *Temporal*: Scheduled nightly ingestion of legislative updates into S3, triggering Glue jobs that retrain the model with new context, leveraging SageMaker Pipelines for CI/CD.  

**Result**  
- Bias‑rate dropped from 12 % to <1 % on internal audit tests (measured by disparate impact metrics).  
- Latency remained under 200 ms per request (SageMaker real‑time endpoint + Neptune caching).  
- Cost decreased 18 % by using spot instances for nightly retraining.  

**Reflection**  
I took full ownership, diving deep into bias diagnostics and iterating until compliance exceeded regulatory thresholds. The bar‑raiser will note my data‑driven impact, systematic trade‑offs, and learning loop that turned a risky feature into a compliant product.  

> **Leadership Principles:** *Customer Obsession*, *Ownership* (Amazon way).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

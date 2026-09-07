---
qid: ing_5194fddf6b__aws__local
question: 'Explain: Create custom evaluator — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 487
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:29:33-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Scenario:** A startup wants a *custom AI evaluator* that scores LLM responses on relevance, factuality, and style for their internal product. I led the design of an “AI‑Evals” service using Langfuse for traceability and LangWatch for real‑time monitoring.

**Situation / Task**  
We had to build a plug‑in that could be dropped into any LLM pipeline, store evaluations at scale, and surface actionable insights—without breaking existing latency budgets.  

**Action**  
1. **Ownership & Dive Deep:** I scoped the end‑to‑end flow: trigger → prompt → model → evaluator → metric aggregation.  
2. **Architecture (AWS services):**  
   * **Amazon EventBridge + Lambda** to ingest raw responses.  
   * **Amazon DynamoDB** (partitioned by `model_id` and `eval_type`) for low‑latency storage of score vectors.  
   * **Amazon SageMaker Endpoint** hosting a lightweight transformer that computes cosine similarity against reference embeddings (LangWatch).  
   * **AWS Step Functions** orchestrate the evaluation pipeline, allowing retries on transient failures.  
3. **Cost & Availability:** Using DynamoDB’s provisioned capacity with auto‑scaling kept costs < $0.25/1M evals; Lambda’s 15 ms timeout preserved a 200 ms end‑to‑end SLA.  
4. **Bias for Action / Invent & Simplify:** I introduced a *fallback* rule that, if the model confidence falls below 0.3, the evaluator automatically flags the response for human review—reducing false negatives by 12%.

**Result**  
- Processed 2 M evaluations/month with <1% error rate.  
- Latency dropped from 350 ms to 190 ms (30 % improvement).  
- The team adopted the evaluator in two downstream products, cutting QA effort by 40 hrs/week.

**Bar‑raiser cues:** ownership of every component, depth in trade‑off analysis, quantified impact, and a clear learning loop: we iterated on the fallback rule after observing drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_61875954fb__aws__local
question: 'Explain: RAGAS Metrics — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 466
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:06:11-05:00'
sources: []
---

**RAGAS (Recall‑Accuracy‑Grounding‑Answer‑Speed) Metrics – My Approach**

**Situation / Task**  
I led a cross‑functional team to benchmark an internal retrieval‑augmented generation (RAG) pipeline for customer support bots at AWS. Our goal was to prove that the new model delivered higher user satisfaction while staying cost‑efficient.

**Action**  
1. **Define metrics** – Adopted RAGAS:  
   *Recall* = % of relevant documents retrieved.  
   *Accuracy* = BLEU/F1 between generated answer and ground truth.  
   *Grounding* = proportion of answer tokens traceable to source docs (via OpenAI’s `grounding` API).  
   *Answer‑Speed* = latency from request to response.

2. **Design** – Deployed a serverless stack:  
   * **Amazon Bedrock** for LLM inference, *AWS Lambda* orchestrator, *Amazon QLDB* for audit trails, and *S3 + Athena* for document store.  
   * Used *AWS Step Functions* to parallelize retrieval (OpenSearch) and generation steps, ensuring 99.9% availability.

3. **Dive Deep** – Instrumented CloudWatch metrics; ran A/B tests with 10k user sessions.  
4. **Bias for Action** – Rolled out the new pipeline after 2 weeks of rapid iteration.

**Result**  
- Recall ↑ 15%, Accuracy ↑ 12%, Grounding ↑ 18%.  
- Latency dropped from 1.8 s to 0.9 s (50% faster).  
- Cost per inference fell by 22% thanks to Lambda’s pay‑per‑execution model.  

**Learnings** – The key was treating RAGAS as a single KPI bundle; it forced the team to balance retrieval quality with generation speed, a classic Amazon trade‑off between *Customer Obsession* and *Ownership*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

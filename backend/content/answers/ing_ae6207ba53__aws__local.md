---
qid: ing_ae6207ba53__aws__local
question: 'Explain: Token-Budget Aware Retrieval — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 574
total_tokens: 806
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:59:58-05:00'
sources: []
---

**Situation** – I led the migration of our customer‑support chatbot from a monolithic retriever to a *Token‑Budget Aware Retrieval* (TBR) pipeline that scales across 200+ regions while staying under the 4 K‑token limit per prompt.

**Task** – Deliver a system that (1) selects the most relevant documents, (2) packs them into a single prompt without exceeding token limits, and (3) maintains < 1 s latency for 95 % of requests. I had to own the end‑to‑end architecture, dive deep into cost/latency trade‑offs, and bias for action.

**Action** –  
* **AWS services**: Amazon Kendra for semantic indexing, Lambda@Edge for on‑edge preprocessing, DynamoDB for token‑budget metadata, and SageMaker Endpoint for dynamic prompt compression.  
* **Design**: A *token‑budget oracle* stored in DynamoDB keyed by query embeddings; Lambda pulls top‑k docs whose cumulative token count is ≤ budget, otherwise it triggers a lightweight summarization model (SageMaker). The system uses Step Functions to orchestrate fallback paths and retries.  
* **Scalability/Availability**: Global CloudFront distribution guarantees < 20 ms edge latency; Kendra’s auto‑scaling handles 10k QPS per region.  
* **Cost**: By limiting Lambda payloads to the token budget, we reduced invocation cost by 35 % and DynamoDB read/write usage by 50 %.  

**Result** – After rollout, response time dropped from 1.8 s to 0.9 s (95th percentile), and user satisfaction scores rose 12 pts (NPS +15). The system processed 4× the query volume with a 28 % reduction in compute spend.

---

### Bar‑raiser cues  
* **Ownership** – I drove the cross‑team effort, from data labeling to production monitoring.  
* **Dive Deep** – Built an oracle that maps token budgets to document sets; profiled every microsecond of Lambda execution.  
* **Quantified Impact** – 12 pts NPS lift, 28 % cost savings, 95th‑percentile latency < 1 s.  
* **Learning from Failure** – Initial prototype over‑estimated token counts by ~20 %; we iterated on the tokenizer and added a guard clause that prevented prompt overruns in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

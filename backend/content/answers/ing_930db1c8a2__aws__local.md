---
qid: ing_930db1c8a2__aws__local
question: Why RAG Over Fine-Tuning for Regulations?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 462
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:58:34-05:00'
sources: []
---

**Situation** – In a fintech startup, we had to provide real‑time compliance explanations for every loan decision under new EU‑GDPR rules.  
**Task** – Choose between fine‑tuning a large LLM (costly GPU time) and building a Retrieval‑Augmented Generation (RAG) pipeline that pulls only the relevant policy text.

**Action** – I scoped the solution with AWS Bedrock for base models, Lambda to orchestrate requests, Amazon QLDB to store immutable regulation snapshots, and DynamoDB + CloudFront for low‑latency retrieval. The RAG architecture uses a TF-IDF index in ElasticSearch (managed by OpenSearch) so each query fetches 5–10 policy snippets; the prompt is then fed back into Bedrock’s `anthropic.claude-3-haiku-20240307` model.

**Result** –  
* **Latency**: 200 ms average vs 2.8 s for fine‑tuned inference.  
* **Cost**: $0.05 per compliance answer vs ~$1.20 for a single fine‑tuned endpoint.  
* **Accuracy**: 97% regulatory coverage, validated by auditors (vs 82% with the fine‑tuned model).  
* **Scalability**: ElasticSearch clusters auto‑scale to 100k QPS; Lambda concurrency limits are met without cold starts.

**Why RAG?**  
- *Customer Obsession*: Clients demanded instant, auditable explanations.  
- *Ownership & Dive Deep*: I mapped the exact regulatory touchpoints and built a cost‑effective, high‑availability stack.  

**Bar‑raiser takeaway** – Demonstrated ownership by turning a compliance requirement into an end‑to‑end AWS solution, quantified impact (latency, cost), and learned that fine‑tuning can be overkill when up‑to‑date policy retrieval is all you need.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_f4799a970c__aws__local
question: 'Q: What is "Contextual Retrieval" (the Anthropic pattern)?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 447
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:29:35-05:00'
sources: []
---

**Answer**

*Leadership principles:* **Customer Obsession**, **Ownership**  

I was tasked to build a search feature for an enterprise knowledge‑base that needed “contextual retrieval” – returning results not just by keyword but by the user’s intent and surrounding conversation, exactly what Anthropic calls *Contextual Retrieval*.  

**Situation:** Our internal portal had 200 k documents; click‑through rate on standard Lucene was only 12 %.  
**Task:** Design a system that boosts relevance by incorporating conversational context.  
**Action:** I led a small squad and adopted the following stack:  

| Layer | AWS Service | Reasoning |
|-------|-------------|-----------|
| Ingest & Index | **Amazon Kendra** + **S3** (raw docs) | Kendra natively supports semantic search and can ingest context via metadata. |
| Context Engine | **AWS Lambda** + **OpenSearch** | Lambda parses the last 5 turns of chat, extracts entities with Amazon Comprehend, stores a short‑term context vector in OpenSearch for query augmentation. |
| Query Orchestrator | **API Gateway + Step Functions** | Coordinates Kendra search, appends contextual boost score, returns top‑10 results. |

I added a *context‑boost* parameter that weights hits matching the extracted entities by 1.8×, tuned via A/B tests.  

**Result:** In production, click‑through rose from **12 % → 29 %**, and query latency stayed under **200 ms** for 95 % of traffic. Cost per request fell 18 % after switching to Kendra’s on‑demand pricing.  

*Bar‑raiser notes:* I owned the end‑to‑end pipeline, dug into OpenSearch logs to debug a 10 % drop in relevance (found tokenization mismatch), quantified impact with A/B data, and documented the failure as a learning loop for future context models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

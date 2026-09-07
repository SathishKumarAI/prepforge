---
qid: ing_476a0b7eb5__aws__local
question: What is hybrid search, and why does pure vector search fail on some queries?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 426
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:07:21-05:00'
sources: []
---

**Hybrid Search – the Amazon way**

*Leadership Principles:* **Customer Obsession** & **Dive Deep**  
When I led a project to replace our legacy FAQ engine, customers complained that “semantic” answers were irrelevant for short, fact‑based questions.  

**S – Situation:** 3 M monthly active users searched product docs; pure vector search returned 70 % precision on long queries but only 35 % on 1–2 word queries.  
**T – Task:** Deliver a search experience that satisfies both “semantic” and “exact match” needs without hurting latency.  
**A – Action:** I designed a **hybrid engine**:  

| Layer | Function | AWS Service |
|-------|----------|-------------|
| Keyword index | Exact phrase matching, tokenization | Amazon OpenSearch (FTS) |
| Vector index | Semantic similarity | Amazon Kendra or SageMaker Endpoint with Faiss |
| Orchestrator | Rank & combine hits | Lambda + DynamoDB for metadata |

We merged scores using a weighted linear model (70 % keyword weight for short queries, 50/50 for longer ones).  

**R – Result:** Precision on 1–2 word queries rose from 35 % to **78 %**, while overall latency stayed under 200 ms. Cost increased by only 12 % because we leveraged spot instances for the vector inference layer.

*Bar‑raiser check:*  
- Ownership: I owned both product impact and infrastructure cost.  
- Dive Deep: Analyzed query logs, built a scoring model, tuned weights.  
- Quantified Impact: 45 % lift in customer satisfaction score (CSAT).  
- Learned from failure: Pure vector missed exact matches; hybrid fixed that gap while preserving semantic richness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

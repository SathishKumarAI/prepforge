---
qid: ing_535715398d__aws__local
question: 'Q: How do you decide how many candidates to rerank?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 435
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:33:22-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *Customer Obsession + Ownership* – I treat the re‑ranking as a customer feature: it must deliver higher relevance with minimal latency.

### Situation & Task  
At my last role we had a search service that returned 1 000 candidates per query. The engineering team wanted to know how many of those should be fed into an expensive neural reranker without hurting SLAs.

### Approach (Dive Deep + Bias for Action)  
1. **Baseline analytics** – I collected click‑through and dwell‑time metrics on the top‑50, 200, and 500 results over a 2‑week period.  
2. **Marginal relevance curve** – Using a *per‑query* A/B test, I measured NDCG gains per additional candidate reranked. The incremental benefit flattened after ~250 candidates (ΔNDCG < 0.01).  
3. **Cost model** – Each rerank costs 5 ms GPU inference (~$0.0004/query). Scaling to 1 000 candidates would double latency and triple cost.  

### Decision & Result  
I set the limit at **250 candidates**, saving ~$2k/month while maintaining a 12 % NDCG lift over the baseline.

### Design (AWS)  
* **Lambda@Edge** for initial filtering, feeding only top‑250 into an **Amazon SageMaker Endpoint** (GPU instance).  
* **Step Functions** orchestrate fallback to a lightweight rule‑based reranker if GPU is saturated.  

### Impact & Learning  
- **Delivered Results**: 12 % lift, cost savings of $2k/month.  
- **Bar‑raiser focus**: ownership over trade‑offs, deep data dive, quantified impact, and iterative learning from the A/B test.

*Metrics:* NDCG +12%, latency < 120 ms, cost <$0.01/query.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

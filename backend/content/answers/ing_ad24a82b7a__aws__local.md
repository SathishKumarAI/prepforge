---
qid: ing_ad24a82b7a__aws__local
question: 'Explain: Retrieval Quality Drift — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 495
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:57:06-05:00'
sources: []
---

**Situation & Task**  
I was leading the data‑quality team for a customer‑facing chatbot that uses Retrieval‑Augmented Generation (RAG). After deploying an update to our document index, we noticed a sudden drop in answer relevance during live A/B tests—users were clicking “helpful” less often. My task was to diagnose and fix *retrieval quality drift*.

**Action**  
1. **Dive Deep into Metrics** – I extracted query‑level retrieval scores (recall@k, precision@k) from the last 48 hrs and compared them against the baseline.  
2. **Root‑Cause Analysis** – The index had been rebuilt with a new embedding model that favored semantic similarity over exact keyword matches. I ran an *ablation study* on a held‑out test set (N=10,000) to quantify impact: recall@5 dropped from 0.84 → 0.62, while precision@1 rose slightly (0.73 → 0.78).  
3. **Solution Design** – I introduced a hybrid retrieval pipeline:  
   * Primary vector search via Amazon Kendra (scalable, high availability)  
   * Secondary keyword‑based fallback using Elasticsearch to capture exact matches.  
4. **Cost & Scalability** – Estimated $0.004 per query for dual searches; we projected 1 M queries/month → $4K/mo, a 12% increase but within budget. I also set up CloudWatch alarms on drift metrics.

**Result**  
After deploying the hybrid index, recall@5 recovered to 0.81 and user “helpful” clicks rose from 68 % to 83 % (Δ+15 pp). The change was logged in a post‑mortem; we added automated drift alerts, ensuring early detection.

**Leadership Principles Reflected**  
- **Customer Obsession** – Restored accurate answers, improving user satisfaction.  
- **Ownership & Dive Deep** – Took end‑to‑end responsibility and dissected the problem with data.  

**Bar‑raiser Takeaway**  
A strong answer shows ownership, quantitative impact, deep technical insight, and a learning loop (drift alerts).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

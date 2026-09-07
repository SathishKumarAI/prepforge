---
qid: ing_93e6357c9d__aws__local
question: 'Explain: Weighted Score Fusion — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 515
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:00:21-05:00'
sources: []
---

**Situation / Task**  
I was leading a product‑team at a startup that built an AI‑driven recommendation engine for e‑commerce. Our customers complained that the search results were “too generic” and didn’t reflect their intent. I owned the feature to blend semantic relevance (BERT embeddings) with keyword matching into one ranked list—**Weighted Score Fusion – Hybrid Search**.

**Action**  
*Research & Design*: I mapped out a pipeline: 1️⃣ Ingest raw product data → 2️⃣ Compute two separate scores per query‑item pair (BM25 for keywords, cosine similarity for embeddings).  
*Implementation*: Using **Amazon SageMaker** to train the embedding model and **AWS Lambda** + **Step Functions** to orchestrate scoring. Scores were weighted (α=0.7 BM25, β=0.3 embeddings) via a simple linear combiner in a **DynamoDB** table that stored pre‑computed vectors for cold‑start speed.  
*Scalability*: Leveraged **Amazon Kinesis Data Streams** to push real‑time query events to Lambda; each function spun up in <100 ms, keeping latency under 200 ms at peak traffic (10k QPS).  
*Cost & Trade‑offs*: Using serverless reduced idle cost by 35%; we accepted a marginal 2% increase in cold‑start time for the benefit of instant scaling.  

**Result**  
Within two sprints we saw **25% lift in click‑through rate** and **15% rise in average order value**, directly impacting revenue (+$1.2 M/month). The model also cut query latency by 40 ms, improving user satisfaction scores from 3.8 to 4.5/5.

---

### Leadership Principles Highlighted
- **Ownership** – I drove the end‑to‑end solution without waiting for external teams.  
- **Dive Deep** – Quantified impact (CTR, AOV) and iterated on weight hyperparameters using A/B tests.  

*Bar‑raiser note*: I’d listen for evidence of ownership, data‑driven iteration, and learning from early A/B failures (we initially over‑weighted embeddings, then corrected based on metrics).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

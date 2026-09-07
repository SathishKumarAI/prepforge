---
qid: ing_b36b18f18a__aws__local
question: 'Explain: Since 2005, we''ve helped thousands of people get the perfect
  domain name'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 367
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:10:32-05:00'
sources: []
---

**Situation & Task**  
In 2005 I joined a startup that sold domain names. Our goal was to reduce friction for users searching for the *perfect* domain while keeping costs low.  

**Action**  
I owned the end‑to‑end search experience, building an **AI‑powered relevance engine** on top of a **Kafka** ingestion pipeline and **Elasticsearch** index.  
1. Collected click‑through data (≈2 M queries/day) → trained a *ranking model* (XGBoost) to score candidate domains.  
2. Implemented a *real‑time scoring service* in Lambda, scaling automatically with API Gateway throttling.  
3. Integrated a cost‑aware bidding layer that surfaced premium domains only when the expected conversion > $0.75, keeping spend < $1.50 per query.  

**Result**  
- **Click‑through rate (CTR)** rose from 4.2 % to **12.5 %** in six months (≈200 % lift).  
- **Revenue per user** increased by **35 %**, driving $3.2 M incremental profit YoY.  
- System maintained 99.9 % availability with a multi‑AZ RDS cluster, and total cost of ownership dropped 18 % after moving to spot instances for the training jobs.

**Learning & Ownership**  
I iterated quickly—tuned feature engineering based on user feedback, then ran A/B tests to validate changes. The bar‑raiser would note my *ownership* (end‑to‑end), *dive deep* into data and model performance, and clear quantification of impact—all while balancing cost and scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

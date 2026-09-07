---
qid: ing_7a208bebcf__faang__local
question: 'Explain: Currency — How to Design a System for Internationalization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 454
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:28:00-05:00'
sources: []
---

**Clarify**  
The problem asks how to design a machine‑learning system that can serve *currency* predictions (e.g., exchange rates, risk scores) across many countries and languages. I’d confirm:  

- What data sources are available (forex feeds, local economic indicators)?  
- Which currencies & locales must be supported?  
- Are we predicting absolute values or relative changes?  
- Do we need real‑time inference or batch updates?

**Approach**  
1. **Data layer** – ingest raw feeds via Kafka streams; store per‑currency time series in a columnar DB (e.g., ClickHouse).  
2. **Feature engineering** – generate lagged, rolling statistics and local economic features; use a feature store for consistency.  
3. **Modeling** – train separate models per currency cluster (high‑volume vs low‑volume) or a multi‑task model with language embeddings.  
4. **Serving** – deploy via gRPC/REST in containers; cache recent predictions in Redis.  
5. **Monitoring & retraining** – track drift, schedule nightly retrains; use A/B tests for new features.

**Depth**  
- *Complexity*: Training cost O(n log n) per currency cluster; inference latency <10 ms with vectorized ops.  
- *Trade‑offs*: Separate models give better accuracy but higher maintenance; a unified model reduces overhead but may underfit niche currencies.  
- *Scalability*: Horizontal scaling of stream processors and model replicas; use autoscaling based on request volume.

**Edge Cases**  
- Sudden regime changes (currency crisis) → drift detection fails; need manual override.  
- Missing data for low‑liquidity currencies → fallback to global model or imputation.  
- Regulatory differences in data usage per country.

**Optimize & Communicate**  
I’d iterate on the feature set, prioritize explainability with SHAP values for regulators, and document all assumptions. By outlining constraints, design choices, and trade‑offs up front, I demonstrate structured thinking and clear communication—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

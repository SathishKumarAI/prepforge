---
qid: ing_e837f312d8__faang__local
question: 'Explain: Title: Display Advertising with Real-Time Bidding (RTB) and Behavioural
  Targeting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 464
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:39:50-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how display ads work in a real‑time bidding (RTB) ecosystem that uses behavioural targeting.  
Key assumptions: *ads are served via an ad exchange, bids occur in milliseconds, and user data is used to predict conversion probability.*

**Approach**  
1. **Data ingestion** – gather contextual signals (page category, time of day) and behavioural signals (past clicks, purchase history).  
2. **Feature engineering** – encode these into a feature vector per impression.  
3. **Bid‑price model** – a machine‑learning model (e.g., gradient‑boosted trees or deep nets) predicts expected value \(E[\text{conv}]\times \text{payout}\).  
4. **Auction & allocation** – the exchange runs a second‑price auction; the highest bidder wins and pays the second price.  
5. **Post‑serve analytics** – collect conversion events, feed back into model for continual learning.

**Depth**  
- *Model*: logistic regression or XGBoost estimating click‑through rate (CTR) & conversion rate (CVR); bid = \(bid_{max} \times CTR \times CVR\).  
- *Latency*: feature lookup and inference must finish < 100 µs.  
- *Privacy*: use hashed identifiers, differential privacy, or on‑device inference to comply with GDPR/CCPA.

**Edge Cases**  
- Cold start: new users lack history → fall back to contextual model.  
- Ad fraud: bots inflate CTR; need anomaly detection.  
- Budget pacing: ensure spend matches daily budget via reinforcement learning.

**Optimize & Communicate**  
- **Feature compression** (hashing trick) reduces memory and speeds inference.  
- **Model distillation** shrinks heavy models for edge devices, improving latency.  
- **Explainability dashboards** help advertisers understand bid rationale.  
I’d narrate this flow as a pipeline from data ingestion → feature prep → ML scoring → auction decision, emphasizing low‑latency constraints and privacy safeguards—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

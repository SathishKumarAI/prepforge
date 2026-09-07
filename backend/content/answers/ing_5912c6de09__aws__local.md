---
qid: ing_5912c6de09__aws__local
question: 'Explain: Ball-mark estimations — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 402
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:47:16-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team at a social‑media startup, we noticed that our recommendation engine was under‑performing on Instagram‑style photo feeds. The goal was to reduce the *ball‑mark* (the point where a user stops scrolling) by 20 % and increase daily engagement.

**Action – Dive Deep & Invent & Simplify**  
1. **Data audit**: Collected click‑through, dwell time, and abandonment logs from the last 6 months (≈ 5 B events).  
2. **Feature engineering**: Added a *content affinity* score based on image embeddings (ResNet‑50) and a *social influence* vector derived from follower graphs.  
3. **Modeling**: Trained an XGBoost ranker, then transitioned to a LightGBM ensemble deployed via SageMaker Pipelines for continuous retraining every 12 h.  
4. **A/B rollout**: Leveraged AWS CloudWatch and DynamoDB TTL to segment traffic; 1 % warm‑up → 10 % → full roll‑out.  

**Result**  
- Ball‑mark latency dropped from 3.2 s to 2.1 s (33 % improvement).  
- Daily active users grew by 18 %, surpassing the target of 20 %.  
- Cost per inference fell from $0.00012 to $0.00008 thanks to Spot Instances and a more efficient model.

**Learning & Ownership**  
I instituted a post‑mortem process that captured “what went well” and “where we could improve.” The team now runs quarterly *Model Health* dashboards, ensuring we maintain ownership over the ML lifecycle and continue delivering customer value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_e00781c638__aws__local
question: 'Explain: Unsupervised learning — What is Machine Learning? \u00a0|\u00a0
  Google for Developers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 340
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:46:02-05:00'
sources: []
---

**Unsupervised Learning – A Quick Take**

*Leadership Principles*: **Customer Obsession** (understand user patterns without explicit labels) & **Dive Deep** (explain the math and trade‑offs).

**S – Situation:**  
A fintech app needed to detect anomalous transaction clusters for fraud prevention, but we had no labeled “fraud” data.

**T – Task:**  
Build an unsupervised model that groups transactions by similarity so devs can flag outliers automatically.

**A – Action:**  
1. **Feature Engineering:** Normalized amount, time‑of‑day, device fingerprint.  
2. **Algorithm Choice:** Applied *K‑Means* (fast, scalable) and *Isolation Forest* (robust to noise).  
3. **Infrastructure:** Trained on an EMR cluster with Spark; deployed as a Lambda batch job triggered nightly via EventBridge.  
4. **Evaluation:** Used silhouette score & DB‑SCAN density metrics; tuned `k` until silhouette > 0.55.

**R – Result:**  
- Reduced manual review load by **32%** (from 12,000 to 8,280 alerts).  
- Detected 15% more high‑value fraud cases in the first quarter post‑deployment.  
- Cost per training run fell from $250 to <$50 after switching to spot instances.

*Bar‑raiser note:* I own the pipeline end‑to‑end, dive deep into clustering diagnostics, quantify ROI, and iterated quickly when early models underperformed—learning that feature scaling was the real bottleneck.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

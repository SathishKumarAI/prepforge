---
qid: ing_42174a3cda__aws__local
question: 'Explain: Entropy, Cross-Entropy, and Kullback-Leibler Divergence'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 405
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:55:21-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

*Situation*: While building a recommendation engine for an e‑commerce platform, I needed to quantify how well our model’s predicted user preference distribution matched the true distribution of clicks.

*Task*: Translate the theory into production‑ready metrics so we could monitor drift and trigger retraining automatically.

*Action*:  
1. **Entropy** – calculated the baseline uncertainty of the click distribution (H = −∑p log p).  
2. **Cross‑entropy** – measured the loss when using our model’s probability vector q to predict the true clicks (CE = −∑p log q).  
3. **KL Divergence** – derived from cross‑entropy and entropy: KL(p‖q) = CE − H, giving a non‑negative “distance” that is zero only when p = q.

Implemented these in a Lambda pipeline feeding metrics to CloudWatch via an SQS queue. Each batch of 1M click events produced:  
- Entropy ≈ 2.3 bits (baseline) → drift detected if > 0.15 bits higher.  
- Cross‑entropy dropped from 4.5 to 3.8 after retraining, a **16% improvement** in log loss.  
- KL divergence fell from 2.2 to 1.4, indicating the model was *closer* to user behavior.

*Result*: Auto‑retraining triggered on every week’s drift threshold, reducing recommendation error rate by **12%** and increasing revenue per visitor by **$0.03** in Q3.

*Learned*: The combination of entropy‑based monitoring with automated Lambda retraining created a feedback loop that preserved model freshness without manual intervention—demonstrating ownership and data‑driven impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_0cbbe165e6__faang__local
question: 'Explain: Metrics — Reliability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 546
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:13:26-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* How do we measure **reliability** of an AI system?  
*Assumptions I’d confirm:*  
- What “reliable” means to the business (e.g., uptime, error‑rate tolerance).  
- Whether we’re evaluating a model, pipeline, or end‑to‑end service.  
- The data distribution and whether it changes over time.

**2️⃣ Approach**  
1. Define *failure* for the system (misclassifications beyond a threshold, latency spikes, data drift).  
2. Choose quantitative metrics that capture those failures.  
3. Instrument production to collect those metrics continuously.  
4. Build dashboards & alerting thresholds tied to SLAs.

**3️⃣ Depth**  
| Metric | What it captures | Typical formula |
|--------|------------------|-----------------|
| **Accuracy / Precision / Recall** | Correct predictions vs errors | \( \frac{TP}{TP+FP} \) |
| **Mean Absolute Error (MAE)** | Average deviation in regression | \( \frac{1}{n}\sum |y_i-\hat y_i| \) |
| **Latency percentiles (p95, p99)** | Service responsiveness | 95th/99th percentile of request time |
| **Error rate** | Proportion of failed requests | \( \frac{\text{errors}}{\text{total}} \) |
| **Data drift score** | Distribution shift | KL‑divergence or Wasserstein distance between recent vs baseline features |

*Complexity:* O(n) per batch for most metrics; real‑time streaming can use EWMA to keep it O(1).  
*Trade‑offs:* High‑frequency monitoring gives tighter guarantees but increases cost and noise.

**4️⃣ Edge Cases**  
- **Class imbalance:** Accuracy may hide poor minority performance → monitor recall/F1.  
- **Concept drift:** Static thresholds fail; need adaptive baselines.  
- **Latency spikes due to batch jobs:** Separate metrics for interactive vs background tasks.  

**5️⃣ Optimize & Communicate**  
I’d propose a *Reliability Score* = weighted sum of the above, normalized to 0–100, updated every minute. Explain that weights reflect business impact (e.g., 40% error rate, 30% latency). Show how A/B tests on new models reduce the score by X%. This narrative keeps stakeholders focused on measurable risk reduction while providing clear technical detail for engineers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

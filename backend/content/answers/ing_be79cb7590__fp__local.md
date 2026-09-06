---
qid: ing_be79cb7590__fp__local
question: 'Explain: Concept drift vs. Target drift — What is concept drift in ML,
  and how to detect and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 463
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:48:42-05:00'
sources: []
---

**Concept drift** is the *temporal change* of the mapping \(y=f(x)\) that a learning algorithm has implicitly or explicitly encoded from past data.  
It arises because real‑world processes are not stationary: user behaviour, market conditions, sensor wear‑and‑tear, etc., alter the joint distribution \(P_{t}(x,y)\). The model is built on an earlier slice of this distribution; when the underlying function shifts, predictions become systematically biased.

**Why it must be handled:**  
The predictive risk \(\mathbb{E}_{t}[(f(x)-y)^2]\) grows as soon as \(f\neq f^{*}_t\). Since the objective in supervised learning is to minimize this risk over *future* data, a static model cannot satisfy that goal once drift occurs.

**Detection**  
1. **Statistical tests on residuals** – e.g., Kolmogorov–Smirnov or two‑sample tests comparing recent predictions with new labels.  
2. **Monitoring performance metrics** – a sudden drop in accuracy/precision indicates drift.  
3. **Change‑point detection on feature distributions** – if \(P(x)\) shifts but the conditional distribution stays, it may be *target* rather than concept drift.

**Remedy**  
- **Incremental learning**: update weights with recent data (online SGD).  
- **Ensemble aging**: maintain a pool of models trained on sliding windows; weight them by recency.  
- **Adaptive sampling**: oversample instances from the new regime to re‑balance training.

---

### Non‑obvious insight
A common mistake is to treat *target drift* (change in the marginal \(P(y)\)) as concept drift and vice versa. In many domains, target drift alone does not harm a model if \(f(x)\) remains unchanged; it merely shifts the decision threshold. Detecting this subtle distinction requires comparing **joint** versus **conditional** distributions, not just overall performance. This nuance is critical when deciding whether to retrain or simply adjust post‑processing thresholds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

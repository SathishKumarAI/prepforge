---
qid: ing_82e7d81988__fp__local
question: 'What is the rejection rate? — Cursor Software Engineer Interview: Process,
  Questions, and Prep Guide (2026) | Interview Coder'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 495
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:43:35-05:00'
sources: []
---

### Rejection Rate in Machine‑Learning Classifiers  

**What problem does it solve?**  
In many safety‑critical or high‑stakes applications (e.g., medical diagnosis, autonomous driving), a *“no‑decision”* option is preferable to an incorrect one. The rejection rate quantifies how often a model chooses to abstain from labeling rather than risk error.

---

#### Why the definition must be this way  

1. **Decision theory**:  
   A classifier \(f\) produces scores \(s(x)\in[0,1]\). We set two thresholds \(\tau_{\text{low}}\) and \(\tau_{\text{high}}\).  
   - If \(s(x)<\tau_{\text{low}}\), predict class 0.  
   - If \(s(x)>\tau_{\text{high}}\), predict class 1.  
   - Otherwise, *reject* (abstain).

2. **Trade‑off**:  
   The rejection rate \(R = \Pr(\tau_{\text{low}}<s(X)<\tau_{\text{high}})\) directly controls the fraction of abstentions. By adjusting \(\tau_{\text{low}}\), \(\tau_{\text{high}}\), we shift mass from “predict” to “reject”, thereby reducing overall error but increasing \(R\).

3. **Optimization**:  
   Minimizing a weighted loss \(L = \lambda R + (1-\lambda)E\) (where \(E\) is the expected misclassification rate on non‑rejected samples) yields optimal thresholds that balance risk and coverage.

---

#### Non‑obvious insight  

The rejection region **does not have to be symmetric**. For imbalanced data, a higher \(\tau_{\text{low}}\) may be justified for the minority class while keeping \(\tau_{\text{high}}\) low for the majority. This asymmetry can reduce overall error more than any symmetric rule, yet most practitioners default to equal margins.

---

**Bottom line:**  
The rejection rate is not a passive statistic; it’s an active lever derived from decision theory that lets models *choose* when to act and when to defer—essential for robust, trustworthy AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

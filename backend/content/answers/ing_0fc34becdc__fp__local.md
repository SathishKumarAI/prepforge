---
qid: ing_0fc34becdc__fp__local
question: What kinds of distribution shift exist, and how would you monitor a deployed
  model - classical or LLM-based - for them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 734
total_tokens: 918
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:39:02-05:00'
sources: []
---

**Distribution shift is the fundamental mismatch between the data the model *learned* on and the data it now sees in operation.**  
From a statistical‑information perspective, training samples are drawn from an unknown joint distribution \(P_{\text{train}}(X,Y)\). Deployment introduces a new distribution \(P_{\text{deploy}}(X,Y)\). The problem is to detect when \(\Delta P = P_{\text{deploy}}\!-\!P_{\text{train}}\) is non‑zero enough that the predictive mapping \(f\) ceases to be optimal.

### 1. Canonical shift types  
| Shift | What changes? | Typical cause |
|-------|---------------|---------------|
| **Covariate (input) shift** | \(P(X)\) differs, but \(P(Y|X)\) stays the same. | Sensor aging, demographic drift. |
| **Label (output) shift)** | \(P(Y)\) changes while \(P(X|Y)\) is constant. | Business goal change, class imbalance. |
| **Concept shift** | The conditional \(P(Y|X)\) itself moves. | New fraud patterns, evolving user behavior. |
| **Domain shift** | Both \(P(X)\) and \(P(Y|X)\) vary due to a new environment. | Deploying in a different country or device type. |

### 2. Monitoring strategy

1. **Input‑side diagnostics (classical models)**  
   * **Statistical tests**: KS, MMD, KL divergence between streaming feature histograms and training reference.  
   * **Feature‑wise drift alerts**: track mean/variance shifts per dimension; flag when \(|\mu_{\text{new}}-\mu_{\text{train}}|>k\sigma\).  

2. **Output‑side diagnostics (classical & LLMs)**  
   * **Calibration curves**: monitor expected vs observed probabilities.  
   * **Prediction entropy**: sudden rise indicates model uncertainty, often a sign of concept shift.

3. **Internal representation drift (LLM‑specific)**  
   * Compute layer‑wise activation embeddings for a held‑out validation set and the live stream; measure cosine distance or Wasserstein between them.  
   * **Insight**: LLMs are more sensitive to *semantic* drift than raw token statistics; monitoring hidden states captures subtle changes in context usage that surface‑level token frequency tests miss.

4. **Feedback loop**  
   * If drift exceeds a threshold, trigger active learning or retraining using recent labeled data (if available) or semi‑supervised adaptation.

### 3. Non‑obvious insight
Monitoring only the input distribution is insufficient for LLMs because their self‑attention mechanism can re‑weight unseen tokens in ways that preserve marginal statistics yet alter downstream predictions. Tracking hidden‑state geometry offers a first‑order proxy for *concept* drift even when surface token frequencies remain stable. This internal drift metric often flags issues 2–3 days earlier than output‑side alerts, giving teams a valuable lead time to intervene.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

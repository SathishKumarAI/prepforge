---
qid: ing_909a5881d5__faang__local
question: 'Explain: Design the evaluation for a fraud model at 0.1% prevalence, end
  to end: metrics, thresholding, validation protocol, and monitoring.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 550
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:20:30-05:00'
sources: []
---

**Clarify**  
We’re building an AI‑driven fraud detector where only ~0.1 % of transactions are fraudulent (class imbalance). The goal: end‑to‑end pipeline that selects a score threshold, validates performance, and monitors drift. I’ll assume labeled historical data, a binary outcome, and the need to limit false positives due to cost.

**Approach**  
1. **Metric choice** – use *Precision@k* (e.g., top‑5 % flagged) and *Area Under Precision–Recall Curve (AUPRC)* because ROC is misleading with extreme imbalance.  
2. **Thresholding** – start at the percentile that yields target precision (say 95 %) from the validation set, then adjust based on operational cost constraints.  
3. **Validation protocol** – time‑based split: train on past 12 months, validate on next month, test on following month. Use *cross‑validation* within the training window to estimate variance.  
4. **Monitoring** – track AUPRC, precision at fixed recall, and score distribution shift (KS statistic). Set alerts when precision drops >5 % or KS >0.1.

**Depth**  
- **Metric derivation:** With prevalence \(p=10^{-3}\), the baseline precision is 0.001; any model must lift this dramatically. AUPRC integrates over all thresholds, directly reflecting performance where positives are rare.  
- **Thresholding algorithm:** Compute the score distribution for both classes on validation data; pick threshold \(\tau\) such that \(P(Y=1|score>\tau)=95\%\). Convert to a cost‑based decision rule if needed.  
- **Validation complexity:** Training is \(O(n)\); validation cost negligible. The time split preserves temporal order, avoiding look‑ahead bias.  
- **Monitoring trade‑offs:** KS captures shift but can be noisy; combine with *Population Stability Index (PSI)* for robustness.

**Edge cases**  
- Sudden spike in fraud tactics → score distribution shifts → monitoring will flag early.  
- Label noise: mislabeled positives inflate precision artificially; robust loss functions mitigate this.  
- Concept drift over months may require re‑training every 3 months.

**Optimize & communicate**  
Iterate threshold by simulating cost curves to balance false positives vs missed frauds. Document each step in a data‑catalogue and provide a live dashboard for stakeholders. This structured pipeline aligns with FAANG expectations: clear problem framing, principled metric selection, rigorous validation, and proactive monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

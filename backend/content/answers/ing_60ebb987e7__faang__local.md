---
qid: ing_60ebb987e7__faang__local
question: 'Explain: Judge-prompt drift detection — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 423
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:29:20-05:00'
sources: []
---

**Clarify**  
We’re asked to describe *Judge‑prompt drift detection*—the mechanism that monitors whether an LLM’s output (the “judge”) diverges from the expected answer given a prompt—and how it integrates into an **Eval‑Gated CICD** pipeline.  
Assumptions:  
- The system has a deterministic reference model or ground truth for each prompt.  
- Drift is measured as statistical deviation of judge outputs over time.  

**Approach**  
1. Capture baseline distributions of judge scores on a validation set.  
2. For every new batch, compute a drift metric (e.g., KL‑divergence or Wasserstein distance).  
3. If drift > threshold, trigger an *Eval gate* that runs a deeper evaluation (human review or oracle model) before merging changes into production.  

**Depth**  
- **Metric**: Use Jensen–Shannon divergence between probability distributions of judge logits; it’s symmetric and bounded.  
- **Thresholding**: Set via percentile on historical drift under normal operation (e.g., 95th).  
- **CICD Integration**: The gate is a CI step that blocks merge if drift is flagged, ensuring only stable prompts pass. Complexity: O(n) per batch, negligible for typical prompt sizes.  

**Edge Cases**  
- *Low‑variance prompts*: Divergence metrics may be noisy; use moving averages.  
- *Adversarial prompts*: Drift might be intentional; need a secondary sanity check.  
- *Model updates*: Baseline shifts require re‑calibration of thresholds.  

**Optimize & Communicate**  
Improve sensitivity by weighting drift per prompt importance and incorporating confidence intervals. Communicate results via dashboards: “Drift score” vs. “Threshold” with trend lines, so ops can quickly identify problematic prompts. This structured pipeline balances automation with safety—exactly what FAANG teams expect in production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

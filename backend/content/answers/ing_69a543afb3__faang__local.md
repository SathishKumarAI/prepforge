---
qid: ing_69a543afb3__faang__local
question: The customer has no labelled data and no eval culture. How do you establish
  "is it working?" for the deployment?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 434
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:49:15-05:00'
sources: []
---

**Clarify**  
You’re asked how to validate an AI model when there are *no* labeled examples or a pre‑existing evaluation pipeline.  
Assumptions to confirm:  
1. The system produces a concrete, observable output (e.g., classification score, recommendation list).  
2. You have access to user interactions or downstream metrics that can be tracked over time.  
3. Stakeholders are willing to run controlled experiments.

**Approach**  
1. **Define business‑level KPIs** that reflect “working” (CTR, conversion, NPS, error rate).  
2. **Build a lightweight monitoring layer**: log predictions, confidence scores, and any fallback actions.  
3. **Run an A/B test** or *controlled rollout* to compare the new model against the baseline or a random policy.  
4. **Collect human‑in‑the‑loop feedback** (e.g., flagging incorrect outputs).  
5. **Iterate on thresholds** and retrain with pseudo‑labels if necessary.

**Depth**  
- Use *online metrics* (precision@k, recall via user actions) to estimate performance in real time.  
- Employ *confidence calibration*; high‑confidence predictions can be treated as pseudo‑labels for bootstrapping.  
- Complexity: O(n) per request for logging; A/B test overhead is negligible but requires statistical power analysis.

**Edge Cases**  
- Cold start with no baseline → use random or rule‑based fallback.  
- Highly skewed data where user actions are sparse → augment with synthetic data or simulation.  
- Drift in user behavior over time → implement concept‑drift detectors.

**Optimize & Communicate**  
Explain that validation is *continuous*: metrics evolve, thresholds adjust, and feedback loops shorten the cycle. Highlight trade‑offs: tighter monitoring may increase latency; aggressive A/B tests risk customer churn. Conclude with a clear dashboard and ownership plan so stakeholders see “working” as measurable business impact rather than just model accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

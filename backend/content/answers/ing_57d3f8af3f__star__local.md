---
qid: ing_57d3f8af3f__star__local
question: 'Explain: When to A/B Test — Capability Assessment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 376
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:23:20-05:00'
sources: []
---

**Situation**  
In my last role as a data scientist for an e‑commerce platform, we noticed our recommendation engine’s click‑through rate (CTR) had plateaued at 3.2% despite several algorithmic tweaks. The product team wanted to know if deploying a new AI‑driven ranking model would actually improve engagement.

**Task**  
I needed to design a robust A/B test that could reliably measure the impact of the new model on CTR and revenue per visitor, while ensuring user experience remained stable during the experiment.

**Action**  
First, I performed a capability assessment: I checked data freshness (real‑time click logs), infrastructure load (CPU/GPU capacity), and latency budgets (model inference < 50 ms). After confirming we could handle double traffic, I built a feature flag system in our feature store, using Optimizely to split users 70/30 between control (old model) and treatment (new AI model). I set up monitoring dashboards in Grafana for key metrics—CTR, revenue per visitor, latency—and defined statistical significance thresholds (p < 0.01). Finally, I scheduled the test for a two‑week window to capture both weekday and weekend traffic patterns.

**Result**  
The A/B test ran without any service disruptions; we achieved 99.9% uptime and kept inference latency within budget. After 14 days, the new model increased CTR by 12% (from 3.2% to 3.58%) and revenue per visitor rose by 8%. The experiment validated that our infrastructure could support AI‑driven personalization at scale. I learned that a thorough capability assessment—checking data pipelines, compute limits, latency constraints—is essential before launching any AI feature, ensuring both reliability and measurable business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

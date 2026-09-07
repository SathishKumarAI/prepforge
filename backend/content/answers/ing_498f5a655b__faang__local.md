---
qid: ing_498f5a655b__faang__local
question: How do I evaluate an LLM or RAG system in production?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 547
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:34:58-05:00'
sources: []
---

**How to Evaluate an LLM/RAG System in Production**

| Step | What to Do | Why It Matters |
|------|------------|----------------|
| **1️⃣ Clarify** | • Restate the goal: *Measure system quality, safety, and ROI.*<br>• Confirm assumptions: user base size, latency budget, data privacy constraints, acceptable error rate. | Sets clear evaluation criteria and scope. |
| **2️⃣ Approach** | 1. Define metrics (accuracy, F1, BLEU, perplexity, response time, cost per token).<br>2. Build a test harness that mimics production traffic (synthetic + real queries).<br>3. Run A/B or shadow tests against a baseline.<br>4. Collect logs for downstream analysis. | Gives a reproducible pipeline and allows incremental improvements. |
| **3️⃣ Depth** | *Metric‑specific actions:*<br>- **Accuracy:** use curated benchmark sets (e.g., SQuAD, MT datasets) plus domain‑specific QA pairs; compute BLEU/F1.<br>- **Safety:** run hallucination tests, policy‑violation detectors, and human audit for a sample.\n- **Latency & Cost:** instrument request pipeline, capture token counts, GPU hours; calculate average cost per answer. <br>**Complexity:** O(n) over queries; storage O(1) per metric; trade‑off between exhaustive testing vs. sampling. | Provides concrete numbers and identifies bottlenecks. |
| **4️⃣ Edge Cases** | • Out‑of‑scope prompts (adversarial, slang).<br>• Cold‑start or new domain data. <br>• Data drift over time (concept shift).<br>• System failures (timeouts, rate limits). Test by injecting synthetic noise and monitoring error spikes. | Ensures robustness beyond typical traffic. |
| **5️⃣ Optimize & Communicate** | • If latency > SLA, consider model distillation or caching. <br>• If cost > budget, prune tokens or adjust request size. <br>• Report findings in a dashboard (latency vs. accuracy heatmap) and iterate with stakeholders.<br>• Document assumptions, test coverage, and next‑step recommendations. | Turns raw metrics into actionable engineering decisions and keeps the product team aligned. |

**Bottom line:** Build an end‑to‑end pipeline that captures *accuracy, safety, latency, and cost* under realistic traffic, validate against edge cases, then use data‑driven insights to tune or replace models before full rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

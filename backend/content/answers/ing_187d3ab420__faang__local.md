---
qid: ing_187d3ab420__faang__local
question: 'Explain: Online evaluations — AI Agent Testing and Evaluation | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 460
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:41:30-05:00'
sources: []
---

**Clarify**

We need to explain how *LangWatch* performs online evaluation of AI agents—i.e., real‑time testing and scoring while the agent is interacting with users or environments.  
Assumptions: we’re evaluating language models in a production setting, metrics include correctness, safety, latency, and user satisfaction.

**Approach**

1. **Instrumentation Layer** – wrap every request/response with context tags (user ID, timestamp, prompt).  
2. **Metric Collection** – capture raw scores (e.g., BLEU, ROUGE), safety flags, token counts, latency.  
3. **Real‑time Aggregation** – stream data to a time‑series DB; use sliding windows for rolling metrics.  
4. **Anomaly Detection** – apply statistical tests or ML models to flag sudden drops in quality.  
5. **Feedback Loop** – automatically trigger retraining jobs or rollback to a previous checkpoint when thresholds are breached.

**Depth**

- **Correctness**: compute per‑interaction accuracy via ground‑truth comparison (if available) or via a secondary verifier model.  
- **Safety**: run each output through a toxicity classifier; record pass/fail rates and severity scores.  
- **Latency**: measure end‑to‑end response time; use percentiles (p95, p99).  
- **User Satisfaction**: collect implicit signals (clicks, dwell time) and explicit ratings.  
Complexity: O(1) per interaction for instrumentation; aggregation is O(n log n) over a window of size *n*.

**Edge Cases**

- Missing ground truth → use uncertainty estimation instead of accuracy.  
- Non‑text outputs (images, code) require specialized evaluators.  
- Distributed deployments may cause clock skew—use NTP or logical clocks.

**Optimize & Communicate**

To reduce overhead, batch metric writes and compress logs. For interpretability, expose dashboards with drill‑downs per user segment. I’d explain this flow to the interviewers, highlighting how each component scales linearly with traffic and why real‑time detection is critical for safe AI rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

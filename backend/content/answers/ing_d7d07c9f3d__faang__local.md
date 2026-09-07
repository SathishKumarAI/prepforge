---
qid: ing_d7d07c9f3d__faang__local
question: How would you A/B test a prompt change safely in production?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 437
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:01:27-05:00'
sources: []
---

**Clarify**  
You want to evaluate a new prompt variant (e.g., wording, token limits) without risking user experience or model drift.  
Assumptions: we have a live request‑routing layer, deterministic API calls, and monitoring dashboards; the model is stateless per request.

**Approach**  
1. **Feature flag + routing** – gate the new prompt behind a toggle that can be turned on/off in real time.  
2. **Controlled traffic split** – use a randomized request header or user‑segment ID to route a fixed % (e.g., 5 %) of live traffic to the variant, keeping the rest on baseline.  
3. **Observability hooks** – instrument latency, error rates, content quality metrics (e.g., toxicity score) and log both prompt IDs for later aggregation.  
4. **Statistical hypothesis test** – predefine success criteria (Δ mean latency < 10 ms, Δ toxicity ≤ 0.5 %) and run a two‑tailed t‑test or Bayesian A/B framework to decide.

**Depth**  
- *Routing*: use consistent hashing on request ID so the same user sees the same variant for session continuity.  
- *Logging*: store minimal context (prompt hash, response metadata) in a time‑series DB; avoid storing raw outputs to respect privacy.  
- *Rollback*: expose a quick “disable” flag that instantly reroutes all traffic back to baseline.

**Edge Cases**  
- Sudden spikes in error rates → auto‑rollback.  
- Long‑running requests may see mixed prompts if routing changes mid‑session.  
- Rare content types (e.g., code generation) might need separate splits.

**Optimize & Communicate**  
After a statistically significant run, merge the variant into production, or iterate with finer splits. Present findings in dashboards and a concise post‑mortem: traffic %, latency change, safety impact, and next steps. This keeps stakeholders informed while ensuring user safety.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

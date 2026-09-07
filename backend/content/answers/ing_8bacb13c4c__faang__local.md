---
qid: ing_8bacb13c4c__faang__local
question: You can't hotfix a mobile binary. How do you test and release a non-deterministic
  AI feature?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 502
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:09:10-05:00'
sources: []
---

**Clarify**  
You’re building an on‑device AI component (e.g., vision or NLP) that produces non‑deterministic outputs and cannot be patched via a hotfix. The goal is to ship it safely while still being able to roll back if users experience regressions.

*Assumptions to confirm:*  
- Binary updates must go through app stores; no OTA patches for the model.  
- You have telemetry hooks (e.g., crash reports, usage logs).  
- Users are in production and cannot be taken offline.

**Approach**  
1. **Feature flag + canary release** – ship the binary with a runtime flag that toggles the AI on only for a small cohort.  
2. **Deterministic “anchor” runs** – embed a set of deterministic test inputs (unit tests) inside the app to validate core logic locally before each build.  
3. **Remote A/B testing** – push the same binary to two groups; group A has AI off, group B has it on. Compare key metrics (latency, battery, user satisfaction).  
4. **Observability** – instrument detailed logs of model predictions and confidence scores. Push anonymized telemetry back to a monitoring dashboard.

**Depth**  
- The flag is stored in the app’s config bundle; toggling it triggers an internal “AI mode” path that loads the model from assets.  
- Canary size starts at 1 % → 5 % → 20 %. If any metric exceeds thresholds (e.g., >2× latency or crash rate), rollback automatically by flipping the flag.  
- Complexity: O(1) per request for flag check; telemetry overhead is amortized across all users.

**Edge Cases**  
- Model drift leading to subtle regressions that don’t trigger obvious metrics.  
- Users in different locales may experience varying performance.  
- Battery‑critical devices might misinterpret the feature as “heavy”.

**Optimize & Communicate**  
After initial rollout, continuously refine thresholds and expand canary size. Share findings with stakeholders via dashboards and post‑mortem reports. This iterative, data‑driven approach lets you ship non‑deterministic AI safely without hotfixes, aligning with FAANG’s emphasis on robust experimentation and risk mitigation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

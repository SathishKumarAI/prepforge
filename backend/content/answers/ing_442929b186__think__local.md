---
qid: ing_442929b186__think__local
question: How do you wire evals into CI so that prompt or model changes can't silently
  regress quality?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 376
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:04:51-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- *Goal*: Detect any drop in model/prompt performance before a change reaches production.  
- *Assumptions*: You have reproducible evaluation metrics, deterministic test data, and a CI pipeline that can run inference locally or on a sandbox.

**2️⃣ Adopt a “metrics‑as‑code” mental model**  
Treat each benchmark (BLEU, ROUGE, accuracy, latency) as a first‑class artifact. Store expected values in versioned config files and compare them against fresh runs during every CI build.

**3️⃣ Step‑by‑step reasoning**  
1. Define a minimal, representative test set that covers all edge cases you care about.  
2. Pin the current model/prompt to a specific commit or tag.  
3. In CI, run inference on this dataset and compute metrics.  
4. Pull the “baseline” metrics from a stored snapshot (e.g., `metrics.json`).  
5. If any metric falls below its threshold, fail the build; otherwise pass.

**4️⃣ Avoid common pitfalls**  
- Don’t rely solely on single‑point metrics; use multiple signals and confidence intervals.  
- Beware of flaky tests caused by nondeterministic sampling or GPU randomness—seed everything.  
- Don’t let the baseline drift silently: lock it to a specific commit or periodically audit it.

**5️⃣ Sanity‑check & communicate**  
Run the pipeline locally first, verify that a known regression triggers a failure, and that a clean change passes. In PR comments, summarize which metric failed and why. This transparent feedback loop keeps everyone aware of quality regressions before they hit users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_d5c5583cb6__faang__local
question: You join as a staff engineer. The team ships prompt changes on vibes, has
  no evals, and as far as they can tell is shipping fine. What do you do in your first
  90 days?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 499
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:56:37-05:00'
sources: []
---

**Clarify**  
- *Goal*: Stabilize the “vibes” prompt‑change pipeline so that releases are safe, auditable, and maintainable.  
- *Assumptions to confirm*  
  - What data sources feed the prompts?  
  - How is a change currently validated (unit tests, manual checks)?  
  - Who owns rollback/monitoring after a ship?  
  - Are there SLAs for prompt latency or correctness?  

**Approach**  
1. **Map the current flow** – diagram source → transformation → deployment → consumption.  
2. **Identify risk gaps** – missing tests, lack of metrics, no rollback hooks.  
3. **Prioritize quick wins** – automated unit tests and a lightweight evaluation harness.  
4. **Build an end‑to‑end pipeline** with CI/CD, model validation, and canary release support.  

**Depth**  
- *Testing*: Add property‑based tests for prompt syntax; snapshot tests for expected outputs on a curated set of inputs (≈50 test cases).  
- *Evaluation harness*: Run each change through an automated metric suite (BLEU, ROUGE, user‑study surrogate scores) and surface any regression ≥ 5%. Complexity: O(N × M) where N is number of prompts, M evaluation passes; acceptable as a nightly job.  
- *CI/CD*: GitHub Actions → Docker image → k8s deployment with canary routing (10% traffic). Rollback via `kubectl rollout undo`.  
- *Observability*: Instrument prompt latency and error rates; alert if > 3σ from baseline.

**Edge Cases**  
- Prompt changes that alter token count drastically → trigger a separate “size” test.  
- Non‑English prompts or new language support – add locale‑specific metrics.  
- Adversarial inputs causing hallucinations – include sanity checks.  

**Optimize & Communicate**  
- Iterate the pipeline in sprints, showing dashboards to stakeholders.  
- Document assumptions and decision logs; create a runbook for “prompt incident” response.  
- Propose a lightweight governance board (product + ops) to approve major changes.  

By the end of 90 days you’ll have: a reproducible evaluation process, automated safety checks, observability, and a clear path for scaling prompt engineering safely.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

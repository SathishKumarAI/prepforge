---
qid: ing_19bf6d78a9__faang__local
question: 'Explain: How do you test an agent in CI? Not evals - CI, on every pull
  request, in under five minutes.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 412
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:45:07-05:00'
sources: []
---

**Clarify**  
The goal is to verify that a reinforcement‑learning (RL) or generative agent behaves “reasonably” on every PR, within ~5 min, without running full‑scale evaluations.  
*Assumptions:* the agent exposes deterministic inference (no stochasticity), we have a lightweight test harness, and we can run a small replay buffer of recent interactions.

**Approach**  
1. **Deterministic snapshot** – freeze model weights and environment state at PR merge.  
2. **Synthetic scenario set** – pre‑define 10–20 minimal prompts or environment seeds that cover edge cases (e.g., malformed input, boundary conditions).  
3. **Local inference** – run the agent on each scenario; capture output, token count, latency, and any exception logs.  
4. **Regression checks** – compare outputs against a golden set stored in version control; allow small numeric tolerance.

**Depth**  
- Use *parameter‑free* evaluation: no training loops, just forward passes.  
- Complexity: O(N × T) where N≈10 scenarios and T=average token count (small).  
- Memory footprint < 100 MB; runtime ≈2–3 s on a single GPU or CPU core.  
- If any scenario fails the regression threshold, the PR is blocked.

**Edge Cases**  
- Randomness: seed deterministically.  
- Model size > available RAM → fallback to CPU with reduced batch size.  
- Environment version drift → pin environment dependencies in CI image.

**Optimize & Communicate**  
Explain that this “sanity‑check” layer catches catastrophic failures early, while full evals (long‑running benchmarks) run on a nightly pipeline. Document thresholds and golden outputs so reviewers can see what changed. This balances speed, safety, and developer feedback—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

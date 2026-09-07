---
qid: ing_8f02bdacd0__faang__local
question: Eval suites are slow, cost real money, and are noisy. How do you put one
  in CI without making everyone hate you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 455
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:17:05-05:00'
sources: []
---

**Clarify**  
You want a fast, cheap, deterministic AI evaluation suite that runs on every PR but doesn’t become a bottleneck or a source of flaky failures for the team.  
Assumptions to confirm:  

- What models and metrics must be evaluated?  
- How many tests per PR are acceptable?  
- Are there any privacy/security constraints on test data?

**Approach**  
1. **Modularize** – separate “quick sanity checks” (e.g., token‑count, inference latency) from full‑blown benchmarks.  
2. **Cache & Snapshot** – store deterministic model checkpoints and input datasets; reuse them across runs.  
3. **Parallelism & Throttling** – run the heavy suites on a dedicated GPU pool with queue limits to avoid starving other CI jobs.  
4. **Result Aggregation** – publish results as PR comments or a dashboard so developers can see trends without blocking merges.

**Depth**  
- *Sanity layer*: 10‑second inference on a subset of data, compare against baseline thresholds (latency < X ms, accuracy > Y%). If it fails, block merge.  
- *Full suite*: nightly or on demand; uses pre‑cached datasets and model weights; runs in parallel containers; outputs a concise diff report.  
Complexity: O(N) per PR for sanity, O(M×N) nightly for full suite (M = number of benchmarks). Cost is capped by limiting GPU hours to the sanity layer and scheduling the heavy tier.

**Edge cases**  
- Dataset drift → stale results; mitigate with automated dataset refresh checks.  
- Model updates → baseline shift; detect automatically and flag for manual review.  
- Flaky tests → use retry logic and statistical confidence intervals before blocking a PR.

**Optimize & Communicate**  
Iterate on the thresholds based on developer feedback; keep the CI pipeline transparent (e.g., open‑source scripts). Explain to the team that the lightweight layer protects quality, while the heavy tier provides actionable insights without slowing day‑to‑day development. This balances rigor with developer happiness and keeps the signal high for interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

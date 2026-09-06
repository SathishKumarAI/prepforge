---
qid: ing_8934e4fdd4__fp__local
question: Design a retrieval evaluation harness the team will actually use. What runs,
  when, and what blocks a merge?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 483
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:56:50-05:00'
sources: []
---

## Retrieval‑Evaluation Harness Design (≈170 words)

**Problem space**  
A team needs a *reliable* signal that a new ranking algorithm improves relevance without harming precision or latency. The evaluation must be **statistically valid**, **low‑overhead**, and **actionable** for merge decisions.

### 1. Runs
| Stage | What runs | When |
|-------|-----------|------|
| **Baseline** | Full‑system query log replay (≈ 10 k queries) | Nightly, pre‑merge |
| **Candidate** | Same replay + new ranker, with a *sandbox* flag that disables caching to expose raw scoring | Nightly, same window |
| **A/B test** | Live traffic split 5 % → candidate vs baseline | Continuous (weekly roll‑out) |

All runs use identical query sets and time windows; timestamps are aligned so that latency metrics are comparable.

### 2. Metrics
- **Normalized Discounted Cumulative Gain (nDCG@10)** for relevance.
- **Mean Reciprocal Rank (MRR)** for user intent capture.
- **Latency percentile** (P95) to guard against slowdowns.
- **Stability score**: variance of per‑query nDCG across runs.

### 3. Merge Blockers
A merge is blocked if *any* of the following thresholds are exceeded:
1. **ΔnDCG < –0.005** (worsening relevance) *and* ΔMRR < –0.002.
2. **P95 latency increase > 20 ms** relative to baseline.
3. **Stability score > 10 %** of the mean nDCG, indicating erratic behavior.

These thresholds arise from a hypothesis‑testing framework: we treat each metric as a random variable with a known variance; a block occurs when the candidate falls outside a 95 % confidence interval around baseline.  

### Non‑obvious insight  
By monitoring *stability* (variance) rather than just mean performance, we catch ranker drift that could surface under rare queries—something many teams overlook until production spikes occur.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

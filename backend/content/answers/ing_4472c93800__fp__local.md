---
qid: ing_4472c93800__fp__local
question: 'Explain: Step 7: Run on All Traces at Scale — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 438
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:31:24-05:00'
sources: []
---

### Step 7 – “Run on All Traces at Scale”  
When you have collected a *trace* (a logged request‑response pair) for every model invocation, the only remaining obstacle is **coverage**: ensuring that every trace actually participates in evaluation.

#### Why this must be done
1. **Statistical power** – A single trace gives an outcome with 100 % variance; aggregating over *n* traces reduces error by \(1/\sqrt{n}\).  
2. **Bias avoidance** – Skipping traces (e.g., only the first few) introduces sampling bias; the model may behave differently on tail cases that matter for fairness or safety.

#### How it works
- **Batching & sharding**: Split the trace set into shards, each processed by an independent worker.  
- **Idempotent scoring**: For every trace, run the same evaluation metric (e.g., BLEU, factuality) deterministically; caching identical traces prevents duplicate work.  
- **Distributed checkpointing**: Store intermediate scores so that a failure only restarts a shard, not the entire run.

#### Deeper principle
This mirrors *Monte Carlo integration*: we approximate an expected performance \(\mathbb{E}[M]\) by averaging over many independent samples (traces). Scaling up is simply increasing sample size until the confidence interval of \(M\) meets the desired width.

#### Non‑obvious insight  
**Trace diversity matters more than sheer quantity.** Two runs with 10,000 identical prompts are less informative than 10,000 *unique* traces that cover edge cases (rare intents, low‑resource languages). Therefore, before scaling, perform a *coverage analysis* to identify under‑represented trace clusters and prioritize them in the next batch.

By systematically running every trace at scale—while managing resources with sharding, caching, and checkpointing—you obtain an unbiased, statistically robust estimate of your model’s real‑world performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_04c2f925b7__faang__local
question: 'Explain: F1: Judge prompt drift goes unnoticed — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 449
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:55:40-05:00'
sources: []
---

**Clarify**  
We’re asked why a model’s *prompt drift*—the gradual change in the distribution of user prompts—can slip past detection, and how an **Eval‑Gated CI/CD** pipeline can catch it.  
Assumptions: the system uses a production model behind a web API, has automated unit tests, but no live monitoring of prompt statistics.

**Approach**  
1. Identify what *prompt drift* means for downstream metrics (accuracy, latency).  
2. Show how blind spot arises when only internal dev data is tested.  
3. Propose an evaluation gate that runs after each CI/CD commit, comparing real‑time prompt stats to a baseline.

**Depth**  
- **Prompt drift**: users start asking new phrasing or topics; the model’s training distribution no longer matches.  
- *Why unnoticed*: unit tests use canned prompts; load tests use synthetic traffic; there’s no statistical monitoring of live request features.  
- **Eval‑Gated CI/CD**: after a pull request passes linting, run an “evaluation job” that:
  - Streams a sample of recent production requests (or a replayed dataset) through the new model.
  - Computes metrics (e.g., BLEU, perplexity, latency) and compares them to historical baselines using hypothesis tests or drift‑scores (e.g., KS statistic).
  - If any metric deviates beyond a threshold, the pipeline fails and alerts the team.

**Edge Cases**  
- Sudden traffic spikes can inflate variance; guard with confidence intervals.  
- Non‑textual requests (images) need separate monitoring.  
- Overly strict thresholds may block legitimate improvements—tune per feature.

**Optimize & Communicate**  
Start small: a nightly job on a sample of logs, then scale to real‑time alerts. Document baseline distributions and drift‑threshold policy in the repo’s README so new engineers understand why failures occur. By embedding evaluation into CI/CD, prompt drift becomes an explicit, measurable risk rather than an invisible bug.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

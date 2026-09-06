---
qid: ing_b4b4b56d4f__fp__local
question: A new model version rolled out and quality is bad. Walk me through the rollback.
  What's different from rolling back code?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 448
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:28:42-05:00'
sources: []
---

When a deployed AI model suddenly drops in quality, the *rollback* is not simply “undoing a commit”; it’s a controlled return to a known‑good statistical hypothesis.

**Why it must be different**

1. **Statistical state vs deterministic code**  
   Code changes are deterministic: you can check out an earlier commit and rerun. A model change alters a *distribution* over predictions, not a single function. Re‑deploying the older checkpoint restores that distribution, but only if the inference pipeline (tokenizers, feature extractors, hardware) remains identical.

2. **Data drift vs code drift**  
   Model quality can degrade because the training data no longer reflects the target population. Rolling back the model restores the *parameterization* that matched that historical distribution; it does not fix the underlying drift.

3. **Inference latency & resource allocation**  
   Models differ in size, quantisation, and runtime graph. A rollback may require different GPU/TPU allocations or memory footprints. The deployment system must re‑allocate resources accordingly.

**Procedure**

| Step | Action |
|------|--------|
| 1 | Freeze the current inference pipeline (exact feature extraction, tokeniser version). |
| 2 | Retrieve the last *validated* checkpoint from model registry. |
| 3 | Spin up a parallel inference instance with that checkpoint; run health‑check traffic to confirm latency and accuracy. |
| 4 | Switch routing weight from the new to the old checkpoint (blue/green or canary). |
| 5 | Monitor A/B metrics, roll back again if the old version fails under live load. |

**Non‑obvious insight**

The *rollback* is essentially a *re‑estimation of the posterior distribution* over model parameters conditioned on past performance data. By treating each model checkpoint as an independent hypothesis, you can formally compute its expected utility (accuracy × latency) and choose the one with maximal expected reward under current constraints—turning rollback into an evidence‑based decision rather than a hasty revert.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_19703b2393__fp__local
question: 'Explain: Your fine-tuned model''s training loss looked great, but outputs
  in production are worse than the base model. Walk me through your debugging process.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 528
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:00:22-05:00'
sources: []
---

**Why a low training loss can be misleading**

Training loss is an *empirical* estimate of the expected error under the training distribution.  
If that distribution differs from the true data seen in production, minimizing loss will
drive the model toward patterns that do not generalize.

---

### 1. Verify the **distribution gap**

| Step | What to check | Why it matters |
|------|---------------|----------------|
| **Data drift** | Compute statistics (mean, variance, class priors) of training vs production features. | Even a small shift in feature means can collapse a fine‑tuned head. |
| **Label noise** | Estimate precision of training labels with a held‑out gold set. | Over‑fitting to noisy labels inflates apparent performance. |
| **Feature availability** | List features used by the fine‑tune that are absent or corrupted in production. | Missing inputs cause the model to fall back on poor defaults. |

---

### 2. Inspect the **loss landscape**

- Plot training vs validation loss curves; a sharp drop followed by stagnation indicates over‑fitting.
- Compute *gradient norms* per layer: exploding gradients at the head suggest the fine‑tune is “pushing” the base model too hard.

---

### 3. Test **robustness to perturbations**

Apply small, realistic perturbations (noise injection, dropout) on a validation set that mimics production noise. If performance degrades sharply, the model has become brittle.

---

### 4. Re‑evaluate with *in‑domain* metrics

- Use the same metric as in production (e.g., BLEU for translation, F1 for classification).
- Run an **A/B test** on a random subset of live traffic; this is the ultimate sanity check.

---

## One non‑obvious insight

Fine‑tuning often *locks* internal representations that were already good. If the base model’s head was already near optimal, further training can cause it to “forget” useful general features—a phenomenon called **catastrophic forgetting**.  
Mitigation: use a small learning rate and *gradient penalty* on lower layers, or employ *elastic weight consolidation* to keep the base weights stable.

---

By systematically closing the gap between training assumptions and production realities—distribution, label quality, feature consistency—and guarding against catastrophic forgetting, you can reconcile low training loss with strong real‑world performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

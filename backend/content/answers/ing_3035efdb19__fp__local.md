---
qid: ing_3035efdb19__fp__local
question: What do temperature and top_p actually do, and how do you choose them per
  task?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 680
total_tokens: 857
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:47:27-05:00'
sources: []
---

**Temperature** and **top‑p (nucleus sampling)** are two knobs that control *how much probability mass the model is allowed to spread over its next-token distribution*.  
Both act on the same underlying softmax output, but they do it in different ways.

| Knob | What it does | Why it matters |
|------|--------------|----------------|
| **Temperature (τ)** | Scales logits:  \(p_i = \frac{e^{\ell_i/τ}}{\sum_j e^{\ell_j/τ}}\). A low τ (>0) sharpens the distribution; a high τ flattens it. | It trades off *exploitation* vs *exploration*. A sharp distribution forces the model to pick its top‑ranked token, giving deterministic, safe answers. A flat one lets rare tokens surface, yielding creative or diverse text but also more noise. |
| **Top‑p (nucleus)** | Sorts tokens by probability, keeps the smallest prefix whose cumulative mass ≥ p, and renormalises over that subset. Tokens outside this “nucleus” are discarded. | It limits the search space to a *probability‑mass* slice rather than an arbitrary rank cut‑off. This preserves common but slightly lower‑ranked tokens while discarding many low‑probability outliers, giving better balance between diversity and coherence. |

### How they differ in practice

- **Temperature** affects all probabilities uniformly; it is a global scaling that can push the model to explore or exploit.
- **Top‑p** truncates the tail of the distribution, so its effect depends on the shape of the logits: if the top tokens already carry most mass, top‑p ≈ 1 behaves like no truncation. If the distribution is flat, a small p (e.g., 0.9) can dramatically reduce variance.

### Choosing per task

| Task | Preferred setting | Reason |
|------|------------------|--------|
| **Fact‑based QA** | τ ≈ 0.2–0.5, top‑p = 1 | Low temperature ensures the model sticks to high‑confidence answers; no truncation keeps all plausible tokens. |
| **Creative writing** | τ ≈ 0.8–1.2, top‑p = 0.9–0.95 | Higher temperature + nucleus sampling allows rare words and unexpected turns while still cutting off the most improbable ones. |
| **Dialogue / user-facing chat** | τ ≈ 0.6–0.8, top‑p = 0.9 | Balanced: enough exploration for naturalness but not so much that responses become incoherent. |

### Non‑obvious insight

Both knobs implicitly perform *entropy regularisation* on the next‑token distribution. Temperature is a global multiplier of entropy; top‑p implements an adaptive, data‑driven cap that preserves only the highest‑entropy subset. Consequently, for highly peaked logits (low intrinsic entropy), temperature has little effect while top‑p can still reduce variance by cutting off negligible tail tokens—an advantage often overlooked when tuning generation models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

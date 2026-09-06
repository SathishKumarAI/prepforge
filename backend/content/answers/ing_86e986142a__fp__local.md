---
qid: ing_86e986142a__fp__local
question: Your judge model is being deprecated and you have to move to a new version.
  How do you keep your scores comparable?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 344
total_tokens: 527
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:51:18-05:00'
sources: []
---

When a benchmark model disappears, the *reference point* of all scores shifts.  
To preserve comparability we must **re‑anchor** every evaluation to a stable concept rather than a particular implementation.

1. **Identify the invariant** – In most NLP tasks the invariant is the *task objective*: e.g., predicting a label distribution or producing a probability over tokens.  
2. **Standardize the metric space** – Translate each model’s output into the same statistical representation (logits → softmax → KL‑divergence). This eliminates biases introduced by different activation functions or calibration tricks.  
3. **Normalize by a common baseline** – Run all models, old and new, on a fixed validation set that includes a *calibration oracle* (e.g., a pre‑trained teacher network) and record the *relative improvement* over this oracle. The oracle acts as a neutral yardstick immune to architectural changes.  
4. **Apply a correction factor** – If the new model systematically alters probability mass (say, due to temperature scaling), estimate a multiplicative adjustment from the calibration set and apply it uniformly.

**Non‑obvious insight:**  
The key is *probability geometry*: models differ mainly in how they embed their predictions onto the simplex. By re‑embedding all outputs into a common **information‑geometric space** (e.g., via Fisher information metric), we neutralize architectural idiosyncrasies and obtain scores that truly reflect improvements in decision quality, not artifacts of scaling or activation choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

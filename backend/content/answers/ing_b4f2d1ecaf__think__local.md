---
qid: ing_b4f2d1ecaf__think__local
question: How do you tell that a fine-tune is overfitting? What are the signals?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 409
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:55:22-05:00'
sources: []
---

**1️⃣ Clarify scope & assumptions**  
- *What “fine‑tuning” means*: small‑dataset adaptation of a pretrained model.  
- *What we can observe*: training loss, validation loss/metrics, confidence distributions, perplexity, etc.  
- Assume you have separate train/validation splits and that you’re monitoring the same objective.

**2️⃣ Mental model: bias–variance trade‑off in fine‑tuning**  
- Overfitting shows low training error but high generalization error.  
- Think of “memorization” vs. “generalization”: look for patterns that only fit the seen examples.

**3️⃣ Step‑by‑step reasoning**  
1. Plot *train* vs. *validation* loss over epochs.  
2. Watch for divergence: training decreasing, validation flat or increasing.  
3. Check metrics (accuracy, F1) on validation; if they plateau early and then drop, that’s a red flag.  
4. Inspect confidence/entropy: overly confident predictions on unseen data can hint at memorization.  
5. Look at *perplexity* or loss distribution per token – spikes for rare tokens only seen in training suggest over‑memorization.

**4️⃣ Common traps to avoid**  
- Relying solely on validation accuracy if the validation set is too small or noisy.  
- Confusing a flat training curve with overfitting; it might just be learning rate saturation.  
- Ignoring that fine‑tuned models can “overfit” to the *source* domain while still generalizing well to target tasks.

**5️⃣ Sanity‑check & verbalize**  
- Summarize: “Training loss keeps dropping, validation loss stops improving and starts rising; metrics plateau or degrade; confidence histograms shift left.”  
- If that pattern holds over several epochs, you have a strong signal of overfitting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_5342ad04bc__faang__local
question: 'Explain: The interview loop — Perplexity'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 477
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:57:51-05:00'
sources: []
---

**Perplexity – the “Interview Loop” for Language Models**

| Step | What to Do |
|------|------------|
| **1️⃣ Clarify** | *Restate:* Perplexity measures how well a probability model predicts a test set; lower = better. *Assumptions:* We’re dealing with a language‑model (LM) trained on token probabilities, using cross‑entropy loss. |
| **2️⃣ Approach** | 1. Define perplexity mathematically. <br>2. Explain its intuition (expected branching factor). <br>3. Show how it’s computed from log‑likelihood. |
| **3️⃣ Depth** | - **Formula:** \( PP = \exp\!\left(-\frac{1}{N}\sum_{i=1}^{N} \log p(x_i)\right) \). <br>- For a sequence of tokens, perplexity equals the geometric mean of inverse probabilities. <br>- If every token had probability 0.5, PP = 2 (two equally likely choices). <br>- Complexity: \(O(N)\) to compute; requires model inference for each token. |
| **4️⃣ Edge Cases** | - *Zero‑probability tokens:* log p = –∞ → PP = ∞; need smoothing or sub‑token vocab. <br>- *Very short sequences:* high variance; use larger corpora. <br>- *Different vocab sizes:* perplexity isn’t directly comparable across models with different tokenizers. |
| **5️⃣ Optimize & Communicate** | • Use batching to reduce GPU kernel launches.<br>• Cache log‑probabilities when reusing the same model.<br>• When comparing models, report **cross‑entropy loss** too; perplexity can be misleading if vocab sizes differ. <br>• In an interview: “Perplexity is essentially a normalized exponentiated loss that tells us how surprised the model is on average per token.” |

*Bottom line:* Perplexity turns cross‑entropy into an interpretable “average branching factor” – the lower it is, the more confident (and accurate) the language model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_3bd45d79f0__fp__local
question: 'Explain: Finetuning — Pricing | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 420
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:12:05-05:00'
sources: []
---

**Why the pricing model for OpenAI’s fine‑tuning is what it is**

Fine‑tuning turns a base transformer into a custom model by *continuing* training on user data.  
At its core, the cost comes from two distinct resource streams:

| Resource | Why it matters | Pricing intuition |
|----------|----------------|-------------------|
| **Compute (GPU hours)** | Each gradient step updates millions of parameters; the longer you train, the more FLOPs you consume. | Base‑rate per 1 M tokens processed in training, reflecting GPU rental cost and amortised infrastructure overhead. |
| **Storage & I/O** | Your dataset must be read, cached, and checkpointed throughout training. | Flat per‑GB fee for storing training data and model checkpoints; ensures you pay for the persistent storage your fine‑tuned weights occupy. |

The API charges *tokens processed* (input + output) during training because token count is a proxy for FLOPs: larger contexts require more matrix multiplications, yet the GPU cost scales roughly linearly with tokens seen.

**Deeper principle:**  
Fine‑tuning is an *optimization* problem; each gradient step reduces loss by a small amount. The marginal benefit of additional epochs diminishes (the learning curve flattens), but compute costs keep rising linearly. Hence the price per token is set to reflect the linear cost while encouraging users to train only as long as they gain value.

**Non‑obvious insight:**  
Users often think “more training = better model.” In reality, beyond a few epochs the *effective* improvement plateaus, yet the API’s pricing forces you to pay for every token processed. Thus, optimal fine‑tuning is about balancing the *learning curve* against the *linear cost*, not just squeezing more epochs into the budget.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

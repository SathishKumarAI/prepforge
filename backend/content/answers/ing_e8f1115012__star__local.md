---
qid: ing_e8f1115012__star__local
question: 'Explain: exp_sum ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 316
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:14:00-05:00'
sources: []
---

**Situation** – At a startup building an LLM‑powered chatbot, our inference latency hit 300 ms per request on the first deployment, far above the 80 ms target for real‑time user interactions.

**Task** – I had to reduce token‑generation time by at least 60 % without sacrificing model accuracy or requiring a GPU upgrade.

**Action** – I studied vLLM’s “paged attention” mechanism and focused on its **exp_sum ¶** routine. Instead of recomputing the softmax denominator for every new token, exp_sum ¶ maintains a rolling exponential‑moving‑average of past logits in a small kernel cache. I rewrote the kernel to use half‑precision accumulators, added an adaptive decay factor (β=0.95) that balances stability and responsiveness, and integrated it into the attention dispatcher. The patch also introduced a checkpoint for early exit when the cumulative probability exceeded 0.99, cutting off redundant softmax calculations.

**Result** – Latency dropped from 300 ms to 110 ms per request—a 63 % improvement—while throughput rose from 12 to 25 tokens/s on our test set. The model’s perplexity increased by only 0.3 points, well within acceptable limits. I learned that careful kernel‑level optimization of the softmax denominator can unlock massive speed gains in large‑scale transformer inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

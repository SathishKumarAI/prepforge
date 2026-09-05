---
qid: ing_2f327a538e__eli5__local
question: You need to run a ~3B-parameter language model on a phone with tight memory
  and power budgets. What changes versus serving the same model in a datacenter?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 285
total_tokens: 466
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:50:40-05:00'
sources: []
---

Think of the phone as a tiny kitchen that must cook a huge recipe (the 3‑billion‑parameter model) while staying quiet and using only a few batteries. In a data‑center “kitchen,” you have many ovens, plenty of electricity, and a big pantry; on the phone you can only use one small oven, limited power, and a tiny pantry.

**Key changes:**

1. **Model size** – The phone must carry a *compressed* version (e.g., pruning or quantization) so it fits in memory (~2 GB RAM).  
2. **Compute** – Instead of dozens of GPUs, the phone uses a mobile CPU/GPU that is less powerful; operations are simplified to run fast enough without overheating.  
3. **Energy** – Every operation is tuned for low power: fewer floating‑point multiplies, more integer math, and aggressive sleep modes when idle.  
4. **Latency vs. batch size** – The phone processes one request at a time (real‑time), so the model must give quick answers; in the cloud you can batch many users together to amortize cost.

In short, the same recipe is boiled down: smaller ingredients, fewer burners, and stricter energy rules, all while still trying to taste good.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

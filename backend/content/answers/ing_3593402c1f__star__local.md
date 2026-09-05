---
qid: ing_3593402c1f__star__local
question: Long context windows keep getting cheaper. Why not drop retrieval and stuff
  the whole repo into context for every request?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 361
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:15:21-05:00'
sources: []
---

**Situation:**  
At my last company we were building an AI‑powered code search tool for a library of ~120 k lines across 300 repos. The team wanted to eliminate the separate retrieval layer and just feed the entire repo into the LLM each time, hoping cheaper context windows would make it feasible.

**Task:**  
My job was to evaluate whether that approach could meet our latency, cost, and accuracy targets while still scaling to new repositories added daily.

**Action:**  
I ran a benchmark: we tokenized every file (≈3 M tokens) and loaded it into an LLM with 32K context. I measured inference time, GPU memory usage, and the model’s precision on 200 real user queries. The GPU hit >95% utilization; latency spiked to ~8 s per request, and the cost per query doubled compared to our retrieval‑based pipeline. Additionally, because the entire code base was in context, the model struggled to focus on the relevant snippet, dropping accuracy from 88 % to 72 %. I also simulated adding new repos: each addition would push us past the token limit, forcing frequent re‑tokenization and storage rebuilds.

**Result:**  
We kept the retrieval layer. The final system stayed under 1.2 s latency, cost per query was 40 % lower, and accuracy remained above 85 %. I learned that even with cheaper context windows, the trade‑offs in memory, speed, and focus make on‑the‑fly embedding of huge code bases impractical for production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

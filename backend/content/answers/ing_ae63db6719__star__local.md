---
qid: ing_ae63db6719__star__local
question: 'Explain: Agentic and Tool Use — Benchmarks And Leaderboards'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 369
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:20:56-05:00'
sources: []
---

**Situation:**  
At my previous company we were building an AI assistant for a large e‑commerce platform. Our internal benchmark score for “agentic” decision‑making was only 58 % on the standard OpenAI Agentic‑Bench leaderboard, while our tool‑use metric—how well the model invoked external APIs—was at 70 %. Management wanted us to raise both scores before we could launch the product.

**Task:**  
I needed to design a training pipeline that improved agentic reasoning (choosing optimal actions) and enhanced tool‑use accuracy (selecting the right API calls), all while keeping inference latency under 200 ms.

**Action:**  
1. Implemented a two‑stage fine‑tuning approach: first, we used RL‑HF on a curated “Agentic‑Bench” subset to sharpen high‑level planning.  
2. Then we added a modular tool‑prediction head that scored candidate API calls with a lightweight BERT encoder, trained on our own call logs.  
3. To keep latency low, we pruned the policy network and quantized weights to INT8.  
4. Finally, ran A/B tests against the leaderboard data, iterating on reward shaping to balance exploration vs exploitation.

**Result:**  
Agentic score jumped from 58 % to 72 %, and tool‑use accuracy rose from 70 % to 85 %. Latency stayed at ~190 ms. The project was greenlit for production, and I learned that a hybrid RL‑HF + modular head can bridge the gap between abstract decision making and concrete API interactions without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

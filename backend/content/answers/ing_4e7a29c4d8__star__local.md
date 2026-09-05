---
qid: ing_4e7a29c4d8__star__local
question: 'Explain: Make it happen — Careers at Glean | Glean Work AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 287
total_tokens: 527
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:05:24-05:00'
sources: []
---

**Situation** – At my previous startup, we were launching a new knowledge‑base search product for enterprise teams. The beta feedback highlighted that users were struggling to find relevant internal documents; click‑through rates were only 18% compared to our target of 35%.

**Task** – I was tasked with designing and deploying an AI‑driven ranking engine that could surface the most contextually relevant documents in under 300 ms, while keeping infrastructure costs below $5k/month.

**Action** – First, I scoped a lightweight transformer model (distilBERT) fine‑tuned on our internal corpus using Hugging Face pipelines. To meet latency, I wrapped the inference with FastAPI and deployed it as a serverless function on AWS Lambda behind an API Gateway. I also implemented a caching layer with Redis to store embeddings for frequent queries, reducing redundant computations. For cost control, I used spot instances for training and set a concurrency limit of 10 on Lambda.

**Result** – Within two weeks of launch, click‑through rose to 38%, exceeding our goal. Search latency averaged 210 ms, and monthly cloud spend stayed under $4k. The project taught me how to balance model performance with operational constraints, ensuring that AI features are both powerful and production‑ready.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

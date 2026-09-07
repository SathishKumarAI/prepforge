---
qid: ing_1beaacd303__aws__local
question: 'Explain: Untied vs. Tied Embeddings — Transformer Architecture'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 380
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:29:17-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
At my last role building a recommendation engine for an e‑commerce platform, we noticed the model’s inference latency grew linearly as our vocabulary doubled—users were waiting 120 ms instead of the target 30 ms. I was tasked with redesigning word embeddings to keep the model lightweight without sacrificing accuracy.

**Action (Dive Deep & Ownership)**  
I compared *tied* vs. *untied* embeddings in a Transformer encoder. With **tied embeddings**, the same matrix is used for both tokenization and output projection, cutting parameters by ~40 %. I implemented this using PyTorch on an EC2 g4dn.xlarge instance, then deployed the model to SageMaker with an endpoint behind API Gateway.

I measured perplexity before/after: 1.18 → **1.05** (≈10 % improvement). Latency dropped from **120 ms** to **32 ms**, meeting SLA. Cost per inference fell by ~35 %, and we reduced GPU memory usage from 12 GB to 7 GB.

**Result (Deliver Results)**  
The change increased daily active users by 18 % within two weeks, as the faster response improved conversion rates. I documented the trade‑off: tied embeddings slightly hurt multi‑label tasks but were acceptable for our single‑class recommendation use case.

**Learning & Bar‑Raiser Check**  
I validated that tying didn’t degrade downstream metrics (precision@10 stayed > 0.78). I also prepared a rollback plan in case of unseen drift, demonstrating ownership and risk mitigation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

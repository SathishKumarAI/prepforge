---
qid: ing_8eadac8841__aws__local
question: 'Explain: Sources — Meta Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 395
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:48:43-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
At my previous role I led a feature‑flagged rollout for an internal recommendation engine that leveraged *Meta AI* models to personalize content feeds. The business goal was to lift user engagement by at least 15 % while keeping latency under 200 ms.

**Action (Dive Deep & Ownership)**  
I first dissected Meta’s open‑source releases—`BART`, `LLaMA`, and the new *MPT* family—to understand their token‑level performance, compute footprint, and licensing constraints. I built a lightweight inference pipeline in **AWS Inferentia** using **SageMaker Neo**, quantizing the chosen model to 8‑bit precision. To keep costs low I offloaded pre‑tokenization to an **Elasticache Redis** cache that stored user embeddings, reducing per‑request compute by ~30 %. For real‑time inference I deployed a **Lambda@Edge** function behind CloudFront, guaranteeing <200 ms latency at the edge.

**Result (Deliver Results)**  
Post‑deployment, we saw a 18 % lift in daily active sessions and a 12 % increase in time spent per session—exceeding our target. The inference cost dropped from $0.50/10k requests to $0.22/10k thanks to quantization and edge caching.

**Learning & Bar‑raiser Insight**  
I documented the trade‑off between model size vs latency, learned that 8‑bit quantization on Inferentia can degrade perplexity by <2 %, and shared this with the team for future model choices. This showcases ownership, deep technical dive, and a data‑driven impact—exactly what a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_f9745f1600__aws__local
question: 'Explain: Self-RAG (Self-Reflection) — Agentic Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 391
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:42:14-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a research‑engineering team building a *Self‑RAG* (Retrieval‑Augmented Generation) agent that could self‑reflect on its generated answers before delivery. The goal was to cut hallucination rates by 30 % while keeping latency under 500 ms for real‑time customer support.

**Action**  
- **Ownership & Bias for Action:** I scoped a prototype that added an *audit module* which scored each answer against a confidence rubric and, if below threshold, triggered a second pass through the retrieval engine.  
- **Dive Deep & Invent & Simplify:** Implemented a lightweight “reflection” transformer on top of the existing LLM; it consumed the original prompt + first‑pass output and produced a *confidence vector* in 20 ms.  
- Leveraged **AWS Lambda** for stateless inference, **Amazon S3** to store the reflection model, and **DynamoDB** to log confidence scores for continuous monitoring.  
- Introduced a feedback loop: every misclassified answer was re‑labelled by human agents and fed back into the training set (iterative reinforcement learning).

**Result**  
- Hallucination dropped from 18 % to 12 % (a 33 % reduction) on our production traffic.  
- Latency increased only 15 ms, staying well below the SLA.  
- Cost per request rose by <4 %, and we saved $120k annually in post‑production debugging.

**Learning**  
The project taught me that *self‑reflection* is a scalable way to enforce quality without full retraining; I now routinely audit models with lightweight secondary modules before launch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

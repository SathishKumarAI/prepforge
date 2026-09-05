---
qid: ing_07c73ed943__fp__local
question: 'Explain: Cody for Visual Studio (Experimental) — Cody - Sourcegraph docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 321
total_tokens: 496
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:22:05-05:00'
sources: []
---

**Cody for Visual Studio (Experimental)** is a *context‑aware* coding assistant that turns the editor into a “live knowledge base.”  
It solves two core problems:

1. **Information retrieval in code space** – developers must constantly search repositories, docs, and forums to find idiomatic patterns. Cody treats every file as a document in a high‑dimensional embedding space learned by a large language model (LLM). When you type or highlight text, the editor queries this vector index; the nearest neighbors are returned instantly, giving you code snippets that match both syntax and intent.

2. **Generative guidance** – once the relevant context is found, Cody uses the same LLM to *generate* the next token(s) or a whole function body. The model conditions on the retrieved snippets, ensuring it respects project conventions and dependencies.

The deeper principle is *joint retrieval–generation*: retrieval supplies low‑variance, high‑precision examples; generation injects flexibility while staying grounded in the context. This hybrid reduces hallucination compared to pure LLM completion.

**Non‑obvious insight:** Cody’s “experimental” mode is not just a beta UI—it’s an architectural experiment that proves *retrieval‑augmented language models* can be deployed with negligible latency inside IDEs, breaking the long‑standing trade‑off between speed and accuracy in code assistance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_198fdf850f__fp__local
question: 'Explain: 🧑‍⚖️ LLM as a Judge metrics — GitHub - comet-ml/opik: Debug, evaluate,
  and monitor your LLM applications, RAG systems, and agentic workflows with comprehensive
  tracing, automated evaluations, and production-ready dashboards. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 222
output_tokens: 415
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:00:36-05:00'
sources: []
---

**Why an LLM can act as a “judge” for other models**

When you deploy a language‑model (LLM)–based system—say a Retrieval‑Augmented Generation (RAG) or agentic workflow—you need to quantify *how well* it behaves: does the answer reflect the retrieved facts? Is the policy coherent over time? Traditional evaluation relies on handcrafted metrics (BLEU, ROUGE, accuracy), which are brittle and domain‑specific. The fundamental problem is that *human judgment* is the gold standard, but humans are expensive and inconsistent.

An LLM can approximate human judgment because it has been trained to predict text conditioned on context. By feeding it both the system’s output and a reference (or a set of constraints), we ask the model to score or classify the response. This reduces evaluation to a supervised learning problem: train the “judge” on pairs `(system_output, label)` where the label is a human‑derived quality score. The judge learns to map linguistic patterns that correlate with good performance—essentially learning an implicit cost function.

**Deep principle**

This mirrors *self‑supervised* learning of loss functions in meta‑learning: instead of hand‑crafting a loss, we learn one from data. The LLM judge becomes a learned surrogate for the human evaluation loss. Because it is also a language model, it captures higher‑order dependencies (tone, factuality) that handcrafted metrics miss.

**Non‑obvious insight**

A judge LLM can *adapt* to new domains with minimal fine‑tuning: by conditioning on a few example pairs from the target domain, its scoring function shifts smoothly. Thus, once you have a baseline judge, extending it to novel tasks is as simple as prompting it with a handful of examples—eliminating costly re‑annotation pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

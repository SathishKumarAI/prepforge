---
qid: ing_a002974b99__star__local
question: 'Explain: The RAG Triad — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 347
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:52:16-05:00'
sources: []
---

**Situation:**  
At my last company we were launching a generative‑AI customer support bot that needed to retrieve up-to-date policy documents before generating responses. The first prototype kept pulling stale data from the cache and users flagged inaccuracies.

**Task:**  
I had to design an evaluation framework that would let us measure retrieval quality, generation accuracy, and overall system latency—essentially a “RAG Triad” test suite—to ensure each component met SLA targets before rollout.

**Action:**  
I built three custom metrics: (1) *Retrieval Precision* – the percentage of retrieved passages containing the exact keyword requested; (2) *Generation Fidelity* – BLEU‑style overlap between bot answers and a hand‑annotated gold set; and (3) *Latency SLA* – average round‑trip time under 200 ms. I automated the pipeline with PyTest, integrated it into our CI/CD, and used Ray Tune to perform hyper‑parameter sweeps on the retriever index size vs. latency trade‑off. I also added a confidence flag that gated generation until retrieval precision exceeded 90%.

**Result:**  
After two iterations we hit a 93 % retrieval precision, 87 % generation fidelity, and kept latency under 180 ms. The bot’s first production deployment reduced support tickets by 35 % in the first month. I learned that treating RAG evaluation as an interdependent triad, rather than isolated metrics, drives balanced improvements across AI pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

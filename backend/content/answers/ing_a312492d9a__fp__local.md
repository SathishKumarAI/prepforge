---
qid: ing_a312492d9a__fp__local
question: 'Explain: LLM-as-Judge — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 428
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:52:25-05:00'
sources: []
---

**LLM‑as‑Judge (LAJ)** is a principled way to score language‑model generations without hand‑crafted metrics.  
At its core, LAJ addresses the *evaluation problem*: we want a function \(S(g)\) that maps a generated text \(g\) to a real‑valued quality score. Classical metrics (BLEU, ROUGE) implicitly assume a fixed reference and linear similarity, which is brittle for open‑ended tasks.  

LAJ replaces the hand‑crafted scoring rule with a second LLM, called the *judge*, that receives both the prompt \(p\) and candidate \(g\). The judge outputs a probability distribution over discrete quality labels or a continuous score. This is justified by **Bayes’ theorem**:  
\[
P(\text{good}\mid p,g)\;\propto\; P(g\mid p,\text{good})\,P(\text{good}),
\]
so the judge learns to approximate the posterior that an expert would assign.  

Because the judge is a neural network trained on millions of human judgments, it captures **higher‑order dependencies** (coherence, factuality) that hand‑crafted metrics miss. Moreover, the judge’s *confidence*—the entropy of its output distribution—serves as a second‑order signal: low confidence indicates ambiguous or noisy content, which can be down‑weighted in aggregation. This uncertainty weighting is often overlooked but aligns LAJ with **information‑theoretic** principles of efficient inference.  

In practice, LAJ yields scores that correlate strongly with human ratings and adapts seamlessly to new domains by fine‑tuning the judge rather than redesigning metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_6ecc20f11c__fp__local
question: 'Explain: AI Memory Benchmarks 2026: LoCoMo, LongMemEval & BEAM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 539
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:00:11-05:00'
sources: []
---

**Why we need new AI memory benchmarks**

Large language models (LLMs) are trained on short windows of text; their *effective memory* is the ability to keep track of facts, events or causal chains that span days or even years.  To quantify this, we need a task that forces a model to retrieve and use information from *remote* passages while still attending to a current prompt—exactly what humans do in long‑form reasoning.

**LoCoMo (Long Context Memory)**  
- **Setup:** A story is split into multiple “context windows” of 8 k tokens.  The model receives the latest window plus an optional pointer to any earlier window, and must answer a question that can only be answered by combining facts across windows.  
- **Why it works:** By limiting context length but allowing explicit pointers, LoCoMo isolates *pointer‑based retrieval* from pure attention scaling. It mirrors how humans use indexes or memory cues rather than scanning everything.

**LongMemEval**  
- **Setup:** A synthetic knowledge base of 10⁵ facts is embedded in a narrative.  At test time the model must recall specific facts that were introduced months earlier, without any pointer.  
- **Why it works:** It stresses *latent semantic persistence*—the ability to encode long‑term associations into parameters rather than relying on external retrieval modules.

**BEAM (Biased Episodic Attention Machine)**  
- **Setup:** A multi‑step reasoning chain is presented; the model must choose which earlier step to attend to at each decision point, penalized for mis‑attending.  
- **Why it works:** It formalises *attention bias* as a probabilistic inference problem: given a current state, what is the posterior over past events that influence the next action?  BEAM thus tests whether models have learned a *probabilistic memory policy*.

**Non‑obvious insight**

All three benchmarks expose a **trade‑off between parameter‑based memory and retrieval‑based memory**. Models that rely heavily on large attention matrices can pass LoCoMo but fail LongMemEval, while those with explicit memory modules excel at the latter yet struggle with BEAM’s dynamic biasing.  The real challenge is to blend *parameter‑efficient persistence* with *retrieval‑driven recall*, a principle that echoes Bayesian inference: keep a compact prior (parameters) and update it online via evidence (retrieval).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

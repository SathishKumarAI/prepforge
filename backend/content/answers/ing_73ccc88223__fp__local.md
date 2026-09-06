---
qid: ing_73ccc88223__fp__local
question: What is agentic RAG? — Ai System Design Guide
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 363
total_tokens: 534
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:11:11-05:00'
sources: []
---

**Agentic Retrieval‑Augmented Generation (RAG)** is a design pattern that marries *information retrieval* with *generative modeling* so that an AI system behaves like a **knowledge‑seeking agent** rather than a static knowledge base.

1. **Fundamental problem** – Large language models are powerful but their internal weights encode only what was seen during training; they cannot access fresh facts without re‑training. Retrieval supplies up‑to‑date, verifiable evidence.  
2. **Why the two must cooperate** – The *retriever* solves an information‑theoretic optimization: minimize the expected KL divergence between the true distribution of relevant documents and the retrieved set, subject to latency constraints. The *generator* then conditions on this evidence, performing a probabilistic inference step that preserves consistency while allowing creative synthesis.  
3. **Deep principle** – This is an instance of *probabilistic program augmentation*: the system treats retrieval as a latent variable model where the posterior over documents informs generation. Geometry enters via attention mechanisms that project queries into a shared embedding space with documents, ensuring convexity of relevance scores.  
4. **Non‑obvious insight** – Most deployments treat retrieval and generation as independent pipelines. In agentic RAG, the generator *actively queries* the retriever during decoding (e.g., via “ask‑and‑generate” loops), turning inference into a dynamic planning problem where the agent learns which evidence to seek next. This endows the system with true *agency*: it can decide when more context is needed and when it can rely on prior knowledge, mirroring human expert reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

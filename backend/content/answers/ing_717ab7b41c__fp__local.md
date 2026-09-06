---
qid: ing_717ab7b41c__fp__local
question: 'Explain: Linear vs. Agentic RAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 456
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:05:48-05:00'
sources: []
---

**Linear RAG (Retrieval‑Augmented Generation)**  
The pipeline is a *pipeline* of two independent modules: a retrieval system that returns \(k\) snippets \(\{r_i\}\) for query \(q\), and a language model that conditions on the concatenated input \(q||r_1||…||r_k\). The objective is simply to maximize the likelihood  
\[
\max_\theta \sum_{t} \log P_\theta (y_t|q, r_{1:k}, y_{<t}) .
\]
This design mirrors supervised fine‑tuning of a seq2seq model: retrieval supplies *context* but the generator never influences which documents are fetched. It is optimal when training data are abundant and retrieval quality is high; the loss decomposes cleanly into “generate given context” and “retrieve relevant context”.

**Agentic RAG (Retrieval‑Augmented Generation with a Retrieval Agent)**  
Here the generator is no longer passive. An *agent* selects documents adaptively, possibly conditioned on intermediate decoder states or partial outputs. The objective becomes a joint reinforcement signal:
\[
\max_{\theta,\phi}\ \mathbb{E}_{q}\big[ R(q,y) + \lambda\,\log P_\phi(r_{1:k}|q, y_{<t})\big] ,
\]
where \(R\) rewards factual correctness and coherence. The agent learns to trade off retrieval cost against downstream loss—an *information‑theoretic* principle: the agent should fetch only those documents that reduce entropy of the generation task.

**Key insight:**  
In Linear RAG, retrieval is a static lookup; it cannot correct for hallucinations caused by noisy context. Agentic RAG treats retrieval as an *optimization subproblem*, learning to ask “which facts are needed right now?” This turns retrieval into a decision‑making process akin to active learning, and guarantees that the model can compensate for imperfect index quality—something linear pipelines cannot do.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_2c1e67f191__fp__local
question: 'Pair-programming: build a service that takes a user question, enriches
  it with data from a third-party API, and answers via a chat-model API. How do you
  structure it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 587
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:38:37-05:00'
sources: []
---

### Why the “Enrich‑then‑Answer” pipeline is mandatory  

A user question is an *information request* that the model can only answer if it has the right context.  
The fundamental problem is **data completeness**: a raw query contains a latent variable \(q\) (user intent) and a set of observable facts \(F_q\). The chat‑model alone can hallucinate; without external evidence it cannot guarantee factuality. Therefore we must first *augment* the observation with verified facts \(\tilde{F}_q = \text{API}(q)\).  

Once \(\tilde{F}_q\) is available, the answer is an optimization over a space of sentences \(S\) that satisfy two constraints:  
1. **Truthfulness** – every claim in \(s\in S\) must be entailed by \(\tilde{F}_q\).  
2. **Coherence** – the sentence must remain fluent for the user.  

This is a constrained optimization problem that can be solved by prompting a language model with \(\tilde{F}_q\) as a *contextual prompt* and letting it generate \(s\). The prompt acts as an evidence prior, steering the stochastic decoder toward factuality.

### Architectural sketch

| Layer | Responsibility | Why |
|-------|-----------------|-----|
| **API Gateway** | Auth & rate‑limit third‑party API calls | Prevent abuse; keep latency low. |
| **Enrichment Service** | Query external API, normalize and cache results | Guarantees deterministic evidence for the model. |
| **Prompt Builder** | Assemble user query + enriched facts into a prompt template | Explicitly encodes constraints for the LLM. |
| **Chat‑Model Adapter** | Send prompt to LLM, stream tokens back | Allows early feedback and graceful degradation. |
| **Post‑processor** | Filter hallucinations, apply policy checks | Adds an extra safety net. |

### Non‑obvious insight

Most designs treat enrichment as a “lookup” step, but the *timing* matters: streaming the LLM’s response while the API call is still in flight can hide network latency. By launching the enrichment request **in parallel** with prompt construction and using a *fallback* minimal prompt if it stalls, we keep average user wait times below 1 s even when external APIs are slow. This pipelining turns an inherently sequential dependency into an effectively concurrent process, drastically improving perceived responsiveness without sacrificing factual integrity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_8c9e2826cb__fp__local
question: Design the caching strategy for an LLM-backed feature. What can you cache
  and what can't you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 512
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:04:08-05:00'
sources: []
---

## Why a caching strategy is needed

An LLM‑backed feature (e.g., semantic search or auto‑completion) turns every user request into a costly inference call.  
The **fundamental problem**: we must reduce latency and cost while keeping outputs correct for the *current* context. This is an instance of *online optimization under uncertainty*: we can only cache what will be reused, otherwise we waste compute.

## What can be cached

| Item | Reason it can be cached |
|------|-------------------------|
| **Prompt template + static embeddings** | These are deterministic; the same input always yields the same prompt string. |
| **Token‑level embeddings of fixed vocabulary** | Embeddings are model‑fixed; caching saves GPU memory and time. |
| **Pre‑computed model logits for frequent prompts** | If a prompt appears often, its full logit vector can be stored and reused. |
| **Resulting “best‑answer” for a given input** | The answer is deterministic for the same prompt + context. |

*Why?* These items are *stateless*: they depend only on immutable inputs (the user query or a fixed dictionary). Their recomputation cost outweighs storage.

## What cannot be cached

| Item | Why it must be recomputed |
|------|--------------------------|
| **Dynamic context tokens** (e.g., conversation history) | They change per request; caching would produce stale results. |
| **Temperature‑based sampling outputs** | Stochasticity means identical inputs can yield different answers. |
| **Model updates or fine‑tuning checkpoints** | Caching a model state that is about to be replaced breaks consistency. |

*Why?* These items are *stateful* and time‑variant; caching would violate correctness guarantees.

## Non‑obvious insight

Caching *partial* logits for the top‑k tokens of a prompt, rather than full outputs, often yields the same speed‑up with far less memory. Because downstream decoding usually only needs the highest‑probability tokens, storing only those k entries preserves accuracy while drastically reducing cache size.

---

**Rule of thumb:** Cache anything that is *deterministic* and *reused*, but avoid caching any component that depends on mutable context or stochastic behavior. This balances latency, cost, and correctness in an LLM‑backed feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

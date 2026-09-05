---
qid: ing_1b1c2fa441__fp__local
question: 'Explain: Responses API — OpenAI API Platform Documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 399
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:03:46-05:00'
sources: []
---

**Why the “Responses” API exists**

When a language model generates text it is not just a single deterministic string; it’s a *distribution* over all possible continuations.  
A client can ask for one token, many tokens, or even a *sampled set of completions*.  
The Responses endpoint was born to expose this distribution directly, so that downstream systems (search engines, dialogue managers, or data‑collection pipelines) can treat each generated sentence as an independent evidence point rather than a monolithic string.

**How it works**

1. **Prompt → Model → Logits** – The model produces a probability vector over the vocabulary for every step.  
2. **Sampling strategy** (top‑k, nucleus, temperature) is applied to those logits, yielding *candidate* tokens.  
3. **Response objects** are created: each contains the full generated text, its cumulative log‑probability, and metadata such as token IDs or embeddings.

The API returns a *stream of these Response objects*, allowing clients to process them incrementally (e.g., display partial answers) or batch‑process later.

**Underlying principle**

It is an instance of *sequential Monte Carlo* applied to language generation: the model’s logits are weights, and sampling turns those weights into discrete hypotheses.  
By exposing each hypothesis separately, developers can perform **importance weighting**, build **ensembles** for robustness, or compute *entropy* to gauge confidence.

**Non‑obvious insight**

Because each Response carries its own log‑probability, you can **re‑rank** completions against external signals (e.g., relevance scores from a search index) without re‑running the model.  
This decouples generation cost from downstream scoring and enables hybrid systems where expensive inference is amortized across many ranking passes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

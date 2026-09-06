---
qid: ing_84a74d9bcf__fp__local
question: 'Explain: Head Count Patterns — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 494
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:47:24-05:00'
sources: []
---

### Why “head count” matters in self‑attention

Self‑attention maps each token to a weighted sum of all tokens.  
The weight matrix is factorised as **query × key** and the dot product
produces a *compatibility score*.  The number of independent linear
transformations (heads) determines how many distinct compatibility
functions we can learn simultaneously.

#### From optimisation to heads

In a single‑head model, the loss forces one weight matrix to explain all
relationships.  This is a hard constraint: every pair of tokens must be
projected into the same subspace before comparison.  When the data contain
heterogeneous relations (syntax, semantics, discourse), a single projection
is a poor fit—like forcing a single line to approximate multiple curves.

By splitting into *H* heads, we give each head its own query/key pair,
so the model optimises **H** separate compatibility functions in parallel.
The overall loss is the sum of the losses over heads, so the network can
allocate different heads to capture distinct relational patterns.  This
is exactly what the *softmax over heads* (the “head‑count pattern”) does:
it balances expressivity against over‑parameterisation.

#### Deeper principle: information bottleneck

Each head acts as a separate channel in an information‑theoretic sense.
The total mutual information between input and output is bounded by
the sum of the capacities of these channels.  Increasing *H* widens the
bottleneck, allowing more information to flow without increasing per‑head
dimensionality—hence better representation power for a fixed parameter budget.

#### Non‑obvious insight

Most people view heads as merely “more parameters.”  
In fact, **the number of heads controls the *granularity* of relational
sensing**.  With few heads, each head must detect long‑range patterns; with many,
each can specialise in local or global dependencies.  This explains why
transformers trained on language benefit from a moderate number (e.g., 12)
rather than an extreme one—too many heads dilute the signal across too
many tiny subspaces, hurting optimisation and generalisation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

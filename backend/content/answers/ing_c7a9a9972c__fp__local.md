---
qid: ing_c7a9a9972c__fp__local
question: 'Explain: Data & context strategy — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 421
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:05:41-05:00'
sources: []
---

**Why a Meeting‑Assistant needs a “Data & Context” strategy**

A meeting generates *temporal, relational* information: who speaks when, what is said, and why it matters to the agenda.  
The AI’s core task is to *extract intent‑aware facts* from that stream and *predict future relevance*. To do so, it must solve two optimisation problems simultaneously:

1. **Sparse reconstruction** – represent a long dialogue as a compact set of “topic‑events” that minimise reconstruction error while respecting a budget on memory.
2. **Conditional prediction** – maximise the probability that a suggested action (e.g., flaging a decision) is correct, given the current context.

Both problems hinge on *contextual embeddings* that capture *temporal dynamics* and *speaker roles*. The data strategy therefore dictates:

- **Hierarchical sampling**: raw audio → speaker‑level frames → event segments.  
- **Domain‑aware augmentation**: synthetic re‑orders of agenda items to teach the model invariance to meeting flow changes.  
- **Curriculum‑based fine‑tuning**: start with generic speech corpora, then progressively introduce domain‑specific logs (minutes, calendars).

**Non‑obvious insight:** *Context should be treated as a “latent variable” that is learned jointly with content.*  
Instead of feeding the model past minutes or calendar tags as static features, embed them in the same latent space as the speech embeddings. This lets the system infer missing context (e.g., an unlabelled agenda item) from the dialogue itself, reducing reliance on external data and improving robustness to noisy or incomplete metadata.

In short, a meeting‑assistant’s success rests on a principled, jointly‑optimised data pipeline that treats *what is said* and *why it matters* as inseparable components of the same latent representation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

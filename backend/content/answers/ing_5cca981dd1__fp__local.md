---
qid: ing_5cca981dd1__fp__local
question: 'Explain: Tier 1: Active Context (refreshed every session)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 460
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:21:31-05:00'
sources: []
---

### Why “Active Context” must be **refreshed every session**

When an LLM interacts with a user it faces two competing goals:

1. **Preserve useful knowledge** (e.g., the user’s long‑term preferences).  
2. **Avoid stale or erroneous assumptions** that could mislead the model.

The *active context* is the slice of memory the model uses to answer immediately. It is built on top of a **finite‑capacity working set**: each token consumes a fixed amount of compute and memory, so the system can only keep a limited history.  
If we let this window grow arbitrarily (e.g., by appending every past dialogue), two things happen:

* **Drift:** Older messages become less relevant; the model starts treating them as if they were recent, which biases responses incorrectly.
* **Noise accumulation:** Mis‑understandings or hallucinations in earlier turns propagate forward, compounding errors.

By **resetting** the active context at the start of each session we enforce a *fresh optimization problem*: the model must re‑infer user intent from scratch using only the current prompt and any stored long‑term embeddings. This mirrors how humans discard irrelevant past details when starting a new conversation, focusing computational resources on the present task.

#### Deeper principle

The design is an instance of **bounded rationality** in dynamic programming: we approximate the optimal policy by limiting the state space to what can be feasibly maintained. The active context acts as a *state buffer* that captures enough information to make near‑optimal decisions while guaranteeing tractable inference.

#### Non‑obvious insight

A common mistake is to think resetting loses everything; in fact, the *long‑term memory* (e.g., user profile embeddings) is still accessible. The active context merely selects a **minimal sufficient statistic** of that long‑term memory for the current task. Thus, freshness does not mean forgetting—it means *re‑compressing* past knowledge into the most relevant form for the present session.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

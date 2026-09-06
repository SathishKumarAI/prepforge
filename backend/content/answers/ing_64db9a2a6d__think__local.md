---
qid: ing_64db9a2a6d__think__local
question: 'Explain: A global workspace in language models — Research \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 511
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:41:27-05:00'
sources: []
---

**1. Clarify the scope and assumptions**

- *What is meant by “global workspace”?*  
  Assume it refers to a conceptual layer that aggregates information from many sub‑modules or attention heads in an LM, akin to the Global Workspace Theory in cognitive science.
- *Which models are we talking about?*  
  Focus on large transformer‑based language models (e.g., GPT‑4, Claude) and research from Anthropic that proposes a “global workspace” architecture.

**2. Adopt a mental model**

Treat the LM as composed of:
1. **Local processors** – individual attention heads or feed‑forward sub‑networks.
2. **Global integrator** – a shared representation (the “workspace”) that collects signals from locals, performs higher‑level reasoning, and broadcasts results back.

Use the *information bottleneck* framework: local modules encode fine details; the workspace compresses salient features into a concise vector.

**3. Step‑by‑step reasoning**

1. **Identify inputs** – token embeddings → local heads.
2. **Local processing** – each head computes context‑aware representations.
3. **Aggregation** – outputs are projected into a shared space (e.g., via a learned linear layer).
4. **Workspace operation** – a small transformer or recurrent unit processes the aggregated vector, enabling cross‑head interactions and maintaining coherence over long contexts.
5. **Feedback loop** – workspace updates local heads’ queries or biases for subsequent layers.

Relate this to Anthropic’s *“Anthropic’s Generalized Global Workspace”* paper: they propose an explicit module that aggregates attention outputs to improve interpretability and controllability.

**4. Common traps**

- Mixing up *local* vs *global* in transformer terminology; remember local heads are per‑layer, global is a separate bottleneck.
- Assuming the workspace replaces all attention rather than supplements it.
- Forgetting that the workspace itself can be parameterized (e.g., small MLP) and may have its own training objectives.

**5. Sanity‑check & verbalize**

- Does each step preserve the flow from input tokens to final logits?  
- Can I explain how the workspace helps with long‑range dependencies or interpretability?  
- Summarize: “The global workspace acts like a shared memory that stitches together diverse local insights, enabling higher‑level reasoning while keeping the model scalable.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

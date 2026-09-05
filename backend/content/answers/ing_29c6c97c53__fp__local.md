---
qid: ing_29c6c97c53__fp__local
question: 'Explain: Creating Custom SuperComponents — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 406
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:33:56-05:00'
sources: []
---

**Why a “SuperComponent” is needed**

In end‑to‑end retrieval pipelines (e.g., question answering) the **query → document index → answer** flow involves several distinct sub‑tasks: query expansion, vector search, reranking, generation, etc.  
Each sub‑task is a *stateless* component with a clear input–output contract.  
When you stitch them together manually you risk tangled dependencies and duplicated logic.  
A **SuperComponent** formalises the idea of “one logical step that may internally use many components” so that:

1. The pipeline remains linear (only one new node is added).  
2. Each internal component can be swapped or tuned without touching the outer contract.  
3. Unit‑testing and caching are scoped to the supercomponent, not to every child.

**How it works**

A SuperComponent inherits from `BaseComponent` but accepts a *list* of other components in its constructor.  
During `_process`, it iteratively feeds the input through this list, passing the output of one as the next’s input.  
The final output is wrapped into a single dictionary, just like any ordinary component.

**Deeper principle**

This is essentially **composition over inheritance**, but with *pipeline‑level* encapsulation.  
By treating a sub‑pipeline as an atomic function you preserve the compositionality of the overall architecture while keeping each part optimisable independently—an application of the *divide‑and‑conquer* strategy in optimization.

**Non‑obvious insight**

Because SuperComponents expose the same interface as ordinary components, they can be **cached independently**.  
If a sub‑pipeline is expensive but deterministic, you can memoise its output once per query ID, drastically reducing latency for repeated queries without altering any downstream logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_f52483acd9__fp__local
question: How do you design good tool/function definitions for an LLM? What makes
  tool calling fail?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 526
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:40:32-05:00'
sources: []
---

**Why a good function signature matters**

An LLM is essentially an *optimizer* over a huge parameter space.  
When it “calls” a tool, the optimizer’s objective becomes: pick a sequence of tokens that maximizes expected reward **given the constraints** imposed by the function’s definition.  
If those constraints are too loose (e.g., `def foo() -> Any`) the search space explodes; if they’re too tight (e.g., an impossible type), the optimizer is forced to back‑track or produce garbage. Thus, a well‑crafted signature acts as a *regularizer* that prunes useless paths and guides learning.

**Principles for crafting signatures**

| Principle | Why it works | Practical cue |
|-----------|--------------|---------------|
| **Explicit contract** | Forces the model to reason about inputs/outputs, reducing hallucination. | Use precise types (`int`, `List[Dict[str, str]]`). |
| **Minimality** | Fewer arguments mean fewer failure modes and easier grounding. | Keep only what the tool truly needs; wrap optional logic inside the function body. |
| **Determinism** | Guarantees that identical calls yield identical results, enabling caching and verification. | Avoid side‑effects or random seeds unless documented. |
| **Semantic granularity** | Matching LLM tokenization to human intent improves grounding. | Split a complex tool into sub‑functions (`search`, `parse`). |

**What makes tool calling fail**

1. **Ambiguous signatures** → the model cannot infer whether “list of items” means strings or objects.  
2. **Inconsistent return types** → the LLM may produce a dict when a list is expected, causing runtime errors.  
3. **Missing error handling** → the tool never signals failure; the LLM keeps retrying uselessly.  
4. **Unreachable preconditions** → e.g., requiring authentication that the prompt cannot provide.

**Non‑obvious insight**

Treat the function definition as a *probabilistic prior* over token sequences: each type constraint assigns a probability mass to syntactically valid continuations. By tightening these priors, you shift the LLM’s posterior toward correct calls without changing its underlying weights. Thus, carefully engineered signatures are not just documentation—they’re part of the model’s inference engine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

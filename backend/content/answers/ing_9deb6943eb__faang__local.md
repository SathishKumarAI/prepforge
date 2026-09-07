---
qid: ing_9deb6943eb__faang__local
question: 'Explain: Code-First Evaluation — Pydantic Evals | Pydantic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 529
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:51:21-05:00'
sources: []
---

## Clarify  
You’re asking about **Code‑First Evaluation** in the context of *Pydantic* – i.e., how Pydantic lazily evaluates annotations (e.g., `list[MyModel]`) when a model is instantiated or validated, rather than at import time. I’ll assume you want to understand why this matters for performance and recursion.

## Approach  
1. Summarize what Code‑First Evaluation means in Pydantic v2.  
2. Explain the mechanics: delayed parsing of annotations, caching, and forward refs.  
3. Highlight key benefits (speed, memory) and typical pitfalls (cyclic imports).  

## Depth  
Pydantic v2 defers evaluating type hints until the model is actually used. When you declare `class User(BaseModel): friends: list[User]`, Pydantic stores the raw string `'list[User]'` instead of immediately importing `User`. On first access, it resolves the annotation via a thread‑safe cache (`_eval_context`). This lazy approach:
- **Reduces import overhead** – annotations are parsed only when needed.  
- **Avoids circular‑dependency crashes** – forward references can be resolved at runtime.  
- **Speeds up module load times** – especially in large codebases with many models.  

Internally, Pydantic uses `typing.get_type_hints` with a custom `globalns` that includes the model’s own namespace, and it memoizes results so subsequent accesses hit O(1).  

## Edge Cases  
- **Self‑referencing models**: if not resolved properly, you’ll get `NameError`. Use `"User"` or `typing.ForwardRef`.  
- **Dynamic types** (e.g., from `typing.Any`): evaluation may be expensive; Pydantic caches them.  
- **Multi‑threaded access**: the cache is protected by a lock to avoid race conditions.

## Optimize & Communicate  
If you notice slow validation, profile annotation resolution. You can pre‑evaluate annotations at import time with `pydantic.ConfigDict(arbitrary_types_allowed=True)` if you’re sure there are no circular refs, trading startup latency for runtime speed. When explaining this to an interviewer, emphasize that Code‑First Evaluation is a deliberate design choice balancing **import-time cost vs. runtime flexibility**, which is critical in large FAANG services where models evolve frequently and circular dependencies are common.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

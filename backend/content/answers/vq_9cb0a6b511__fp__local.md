---
qid: vq_9cb0a6b511__fp__local
question: What is _init_?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 405
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:48:26-05:00'
sources: []
---

### Why `__init__` exists

When a class is instantiated, Python first **allocates** memory for a new object (`__new__`). That step only gives the object an empty shell; it has no attributes or state.  
The next phase is to *configure* that shell so the instance behaves as intended. `__init__(self, …)` performs this configuration: it receives the freshly created object and any constructor arguments, then sets up fields, opens resources, validates invariants, etc.

This separation of allocation (`__new__`) from initialization (`__init__`) mirrors a deep principle in systems design—**construct‑then‑configure**. It lets subclasses override only what they need: they can call `super().__init__(…)` to preserve the base configuration while adding their own state. If `__init__` performed allocation, every subclass would have to duplicate that logic.

### A subtle insight

Most people treat `__init__` as a “constructor” that *creates* an object, but it actually never returns anything (`None`). The real constructor is `__new__`; `__init__` is merely the first opportunity to mutate the instance. Because of this, you can safely modify or replace attributes even after construction (e.g., monkey‑patching). Recognizing this distinction clarifies why methods like `copy.copy()` invoke `__reduce_ex__`, not `__init__`.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

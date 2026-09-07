---
qid: ing_7d8053425a__faang__local
question: 'Explain: Pass 3: Dependency Restoration (and the bug that made me build
  it properly)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 320
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:36:59-05:00'
sources: []
---

**Pass 3 – Dependency Restoration**

| Step | What it does |
|------|--------------|
| **Collect** | Walk the model graph, gathering all tensors that were *not* produced in earlier passes (i.e., inputs, constants, or outputs of sub‑graphs). |
| **Map** | Build a mapping from tensor names to their producers (or external sources) so we know where each value comes from. |
| **Inject** | Replace placeholder references with the actual tensors, effectively wiring the sub‑graph into the main graph. |

---

### The bug that forced a proper implementation

During early builds I used *lazy* placeholders: every missing tensor was simply replaced by `tf.placeholder`.  
When the graph executed, TensorFlow would treat those placeholders as independent inputs, so any downstream node that needed the real value still received the placeholder instead of the computed tensor. This manifested as **shape mismatches** or **runtime errors** when a sub‑graph expected a concrete tensor but got an unconnected placeholder.

The fix was to:

1. **Detect missing tensors** at graph construction time (not lazily).  
2. **Store the actual producer** for each missing tensor.  
3. **Replace placeholders with real connections** before the session runs.

This guarantees that every edge in the final graph points to a valid source, eliminating silent failures and making debugging trivial.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

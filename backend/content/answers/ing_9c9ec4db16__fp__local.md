---
qid: ing_9c9ec4db16__fp__local
question: When would you fine-tune a model instead of using prompting or RAG?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 333
total_tokens: 508
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:38:12-05:00'
sources: []
---

When the *signal* you need to extract is too tightly coupled to a narrow domain, a fine‑tuned network becomes preferable to prompting or Retrieval‑Augmented Generation (RAG).  
**Fundamental problem**: we want a model that maps inputs \(x\) to outputs \(y\) with high fidelity for a specific task. Prompting and RAG treat the base LM as a *black box* whose internal weights remain frozen; they only steer inference by conditioning or injecting external documents. This works when the desired mapping is largely already encoded in the pre‑trained distribution (e.g., summarizing generic news).  

**Why fine‑tuning matters**: it updates the parameters \(\theta\) to minimize a task‑specific loss \(L(y,\hat y_\theta(x))\). If the target distribution differs significantly from the LM’s prior—say, legal jargon, code generation for a niche framework, or medical diagnosis notes—the base model’s implicit priors will bias predictions away from the optimum. Fine‑tuning forces \(\theta\) to *reshape* these priors toward the new manifold, yielding lower expected loss.

**Non‑obvious insight**: fine‑tuned models can *compress* domain knowledge into a compact parameter set, enabling inference on low‑resource devices where RAG’s runtime cost (retrieval + re‑ranking) is prohibitive. Thus, if deployment latency or memory budget is tight, fine‑tuning often wins over prompting/RAG even when the task isn’t extremely specialized.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

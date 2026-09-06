---
qid: ing_9a41e388d5__fp__local
question: 'Explain: Pattern 3 – Custom planner (DIY prompting + parsing)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 402
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:33:55-05:00'
sources: []
---

**Pattern 3 – Custom Planner (DIY Prompting + Parsing)**  

At its core, a language model is an *information‑theoretic black box*: given a prompt \(p\), it samples tokens according to a learned distribution \(P_\theta(t|p)\). If we ask the model to “think step by step” we force it to output a sequence of intermediate decisions \(d_1,d_2,\dots\) that together form a plan. The *custom planner* pattern exploits this by letting us *design* the prompt structure (the *DIY prompting*) and then *parse* the model’s own text back into structured actions.

Why must we parse? Because the raw token stream is unstructured; without a parser the planner cannot be fed back into an execution engine. The parsing step essentially implements a deterministic mapping \(f:\text{tokens}\rightarrow \mathcal{A}\), where \(\mathcal{A}\) is the action space of our downstream system. This mapping restores *computability* to the model’s output, allowing us to treat the planner as a function in an algorithmic pipeline.

The deeper principle here is **modular compositionality**: we separate the generative component (the model) from the control component (the parser). By doing so, we can fine‑tune each independently—improving prompting heuristics for creativity while tightening parsing rules for safety. A non‑obvious insight: *the quality of the plan is bounded not just by the model’s knowledge but largely by the expressiveness of our prompt schema*. If the prompt enforces a rigid skeleton (e.g., “Step 1: …; Step 2: …”), we trade off flexibility for predictability, which often yields more reliable planning in safety‑critical domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

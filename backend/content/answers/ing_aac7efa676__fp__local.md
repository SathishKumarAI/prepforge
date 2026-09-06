---
qid: ing_aac7efa676__fp__local
question: Not Sure If Context Pollution Is Hurting Your Agent?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 440
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:08:39-05:00'
sources: []
---

### Why “context pollution” matters for any LLM‑based agent

At its core, a language model is an **information‑theoretic estimator**: given a prompt \(p\), it produces a distribution over next tokens \(P_\theta(t|p)\).  
When you *stack* multiple turns into a single prompt (as most agents do), you are effectively conditioning on a longer history. The model must allocate its finite capacity to all symbols in that history, diluting the signal from the *relevant* part of the conversation.  

Formally, let \(H\) be the entropy of the target action and \(C\) the set of contextual tokens. By the chain rule,
\[
I(H;C)=H(H)-H(H|C).
\]
If irrelevant tokens dominate \(C\), the mutual information \(I(H;C)\) falls because the conditional entropy \(H(H|C)\) increases—exactly what “context pollution” means.

The deeper principle is **optimal sub‑sequence selection**: an agent should choose a *minimal* context that maximizes \(I(H;C_{\text{min}})\). This is akin to variable‑length coding in data compression—only the bits that reduce uncertainty are kept.  

#### One non‑obvious insight  
A model trained on long prompts learns **implicit token weighting**: early tokens get higher influence than later ones (the “attention bias”). Thus, simply truncating a prompt can inadvertently remove *high‑weight* but irrelevant tokens, harming performance more than keeping the whole context. The solution is to *strategically prune*—remove low‑weight, redundant turns rather than indiscriminately chopping off the end.

In practice, build an **importance score** (e.g., via attention weights or entropy reduction) for each turn, keep only those above a threshold, and re‑prompt. This preserves the essential signal while keeping the prompt within the model’s effective capacity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

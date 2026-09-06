---
qid: ing_84a730904e__fp__local
question: 'Explain: The Dual-LLM Defense Pattern — Prompt Injection Defense'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 418
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:47:17-05:00'
sources: []
---

**Dual‑LLM Defense Pattern – a principled shield against prompt injection**

The core problem is that an adversary can prepend or append malicious text to a user’s query, coercing the model into disallowed behaviour (e.g., leaking private data). The defense must detect and neutralise *any* injected fragment **before** the LLM sees it.  

1. **Segmentation by context‑aware tokeniser** – the first lightweight LLM (the *guard*) classifies every contiguous chunk of the input as either *trusted user text* or *suspected injection*. This is a supervised sequence‑labeling task, optimised for high recall; we deliberately over‑flag to minimise false negatives.  
2. **Reconstruction with sanitisation** – only the “trusted” chunks are concatenated and passed to the second, policy‑aware LLM (the *executer*). The guard’s output acts as a hard filter: if any chunk is flagged, the entire request is rejected or rewritten.

Why this works:  
- **Information bottleneck** – by compressing the input into a binary mask, we reduce the attacker’s ability to embed stealthy instructions in otherwise innocuous text.  
- **Two‑step optimisation** – the guard learns a *generalised* detection objective (e.g., anomalous token patterns), while the executor optimises for task performance under a clean input distribution.

**Non‑obvious insight:** The guard need not be perfect; its role is to *restrict entropy*. Even if it mislabels some benign text, the executor still receives a cleaner prompt because the guard’s mask guarantees that any high‑entropy malicious fragment is excised. This turns an adversarial problem into one of controlled information loss, which is far easier to manage than trying to make the main LLM “immune” to injection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

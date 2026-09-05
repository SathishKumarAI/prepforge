---
qid: ing_ec38f35bbf__eli5__local
question: 'Explain: Explain how LoRA works - the math, and what `r` and `alpha` mean.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 249
total_tokens: 418
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:49:37-05:00'
sources: []
---

Imagine you’re a sculptor who already has a big marble block (the pre‑trained AI model). Instead of carving the whole block from scratch, you bring in a small, lightweight mold that only touches a few places on the surface. That mold is **LoRA**—a tiny set of extra “low‑rank” matrices that tweak the big block’s shape just enough to fit a new job.

In math terms, LoRA adds two small matrices, \(A\) and \(B\), to the original weight matrix \(W\). The change looks like  
\( \Delta W = A B^\top \).  
The size of these matrices is controlled by **\(r\)** (the rank): a larger \(r\) gives more flexibility but costs more memory.  
**\(\alpha\)** is a scaling factor that decides how strongly the new tweak is applied; it’s like turning up or down a volume knob on the modification.

So LoRA lets you adapt a huge model by just adjusting a few tiny knobs, keeping the main structure intact while tailoring it to a specific task.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

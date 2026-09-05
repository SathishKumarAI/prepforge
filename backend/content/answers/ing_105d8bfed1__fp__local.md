---
qid: ing_105d8bfed1__fp__local
question: 'Explain: 🧭 Prompt Engineering & Context Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 365
total_tokens: 534
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:40:13-05:00'
sources: []
---

**Prompt Engineering & Context Engineering – a principled view**

At its core an LLM is a conditional probability model \(P(\text{output}\mid\text{input})\).  
A *prompt* is the input we hand to it; *context engineering* is the art of shaping that input so that the posterior distribution over outputs concentrates on the desired answer.  

1. **Problem statement** – We want a specific, safe, and useful response. The model has no internal goal; it merely maximizes likelihood given the prompt tokens.  
2. **Why it must work this way** – The transformer’s self‑attention treats every token symmetrically; the probability of each next token depends on all preceding ones. By carefully selecting those preceding tokens (the context), we bias the attention heads toward the semantics we care about.  
3. **Deep principle** – This is an *information bottleneck*: we compress the task description into a minimal, high‑mutual‑information snippet that preserves only what matters for the output. The more the prompt’s entropy aligns with the target distribution, the sharper the posterior.  

**Non‑obvious insight:**  
The optimal prompt is often *negative* – i.e., telling the model **not** to do something (e.g., “Do not mention X”) can be far more effective than positive instructions because it removes high‑entropy distractors that otherwise occupy attention slots, thereby tightening the distribution over valid outputs.  

In practice, prompt + context engineering is a controlled entropy reduction: we iteratively prune irrelevant tokens until the model’s output variance falls below an acceptable threshold.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

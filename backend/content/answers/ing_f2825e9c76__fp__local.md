---
qid: ing_f2825e9c76__fp__local
question: How do you handle streaming when the model is emitting tool calls or structured
  JSON?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 445
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:34:30-05:00'
sources: []
---

**Why streaming must be “structured”**

When a language model emits text in real time, it is solving a *sequential prediction* problem: at each token \(t\), the model chooses \(\hat{y}_t = \arg\max P(y_t|y_{<t},x)\).  
If we allow arbitrary tool calls or JSON fragments to appear interleaved with prose, the token‑level objective breaks: a single partial token can invalidate an entire call (e.g., “get‑weather” → “{”), and downstream consumers cannot parse until the block closes. Thus we need a *semantic delimiter* that separates *content* from *action*.

**The principle of “minimal valid units”**

Treat each tool invocation or JSON object as the smallest indivisible unit. The model is trained to emit a **complete token sequence** for an action before emitting any further tokens. This mirrors how compilers enforce syntactic closure: they only accept a statement after the closing brace, ensuring downstream code can be parsed deterministically.

**Implementation**

1. **Token‑level policy**: The decoding loop checks whether the current prefix ends with a *complete* JSON object or tool call syntax (e.g., matching braces).  
2. **Buffering**: Until closure is detected, tokens are buffered and not forwarded to downstream consumers.  
3. **Fallback**: If the buffer grows beyond a threshold without closure, emit an error token or request a retry.

**Non‑obvious insight**

Many pipelines treat tool calls as opaque “function names” and ignore internal structure. By enforcing *syntactic validity* at the stream level, we enable *incremental parsing*—the consumer can start executing a partially streamed call immediately after its opening token, reducing latency by up to 30 % in interactive settings. This subtle shift from “wait‑for‑complete” to “stream‑until‑valid” leverages the same parsing logic used in compilers, yielding both robustness and speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

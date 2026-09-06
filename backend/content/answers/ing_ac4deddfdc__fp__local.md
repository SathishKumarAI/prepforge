---
qid: ing_ac4deddfdc__fp__local
question: 'Explain: Input Isolation (XML & Markers) — Prompt Injection Defense'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 476
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:11:24-05:00'
sources: []
---

**Input Isolation (XML & Markers) – a Prompt‑Injection Defense**

Prompt injection exploits the fact that language models treat *any* input as part of the same token stream: user text, system instructions, and prior context are all concatenated and fed to the decoder. The model has no built‑in “role” awareness; it simply maximizes next‑token probability conditioned on the entire string.

**Why isolation matters:**  
If we can *segregate* the user’s raw data from the instruction stream, we reduce the cross‑entropy term that couples malicious content to the system prompt. Formally, let \(C\) be the context (system instructions + previous dialogue), \(U\) the user input. The model learns \(P(T|C,U)\). By wrapping \(U\) in an opaque XML tag or a set of markers, we create a *deterministic* embedding \(\phi(U)\) that is treated as a single token (or a known sequence) by the tokenizer. The probability now factorises:  
\[ P(T|\phi(C),\phi(U)) \approx P(T|\phi(C))\,P(T|\phi(U)) \]  
The first term dominates because the model has no reason to alter \(C\) based on \(\phi(U)\). This is a direct application of *conditional independence* in probabilistic graphical models.

**Deeper principle:**  
We are enforcing a *structural prior*—the model’s internal representation must respect a boundary. It turns a soft constraint (attention weights) into a hard one, akin to how compilers enforce type safety: data cannot silently alter program flow.

**Non‑obvious insight:**  
The XML/marker wrapper need not be semantically meaningful; it simply forces the tokenizer to treat the user block as an atomic unit. Even if the model learns to ignore unknown tokens, the *lack of granularity* prevents it from injecting commands into the instruction stream. Thus, isolation is less about sanitising content and more about reshaping the token graph so that the malicious signal cannot propagate to the prompt.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

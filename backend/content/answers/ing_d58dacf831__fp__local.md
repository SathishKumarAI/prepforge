---
qid: ing_d58dacf831__fp__local
question: What is prompt injection, and how is it different from a jailbreak?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 436
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:34:24-05:00'
sources: []
---

**Prompt injection** is the act of inserting additional text into an *input prompt* so that a language model (LLM) behaves contrary to its intended instructions.  
From first principles, an LLM’s output is a function \(f\) of all tokens it receives:  

\[
y = f(x_{\text{system}}, x_{\text{user}}).
\]

If the user supplies a carefully crafted \(x_{\text{user}}\) that contains hidden commands or instructions, the model may treat those as part of its context and obey them. The injection exploits the fact that LLMs lack an explicit “trust boundary” – every token is equally weighted in the soft‑max over the next word. Thus, a malicious prompt can *rewrite* the internal policy \(f\) without altering the underlying weights.

A **jailbreak** targets the same function but from the opposite side: it seeks to *circumvent* system or user instructions that are meant to enforce safe behavior (e.g., “do not provide disallowed content”). Jailbreaking is a form of prompt injection where the injected text specifically tries to override safety constraints. The key distinction lies in intent and target:

| Aspect | Prompt Injection | Jailbreak |
|--------|------------------|-----------|
| Goal | Coerce model into arbitrary or harmful behavior | Bypass built‑in safety / policy rules |
| Typical content | Additional instructions, hidden commands | “Ignore previous instruction” + new directive |
| Target | Any part of the prompt (system/user) | System messages or safety modules |

**Non‑obvious insight:** The vulnerability is not just in *what* you write but in *where*. By injecting a few tokens **between** system and user prompts, an attacker can create a new “mini‑prompt” that the model interprets as its own instruction set, effectively giving them a second control channel. This subtle positional trick is often overlooked when designing prompt‑guarding mechanisms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

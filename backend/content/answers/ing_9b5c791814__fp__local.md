---
qid: ing_9b5c791814__fp__local
question: Design a secure architecture for an agent that reads untrusted web/email
  content AND has access to a user's private data. How do you defeat prompt injection
  by construction?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 492
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:35:54-05:00'
sources: []
---

**Fundamental problem**  
An LLM that can read untrusted web/email content must *filter* malicious instructions from the user’s private data before it is fed to a model that could be coerced into leaking or misusing that data. The attack surface is the *prompt construction*: an attacker injects deceptive tokens (“You are a helpful assistant…”) that re‑frame the LLM’s task.

**Why construction matters**  
If the prompt is built in one place, any injection can be neutralised by *semantic isolation*. By separating the *data layer* (user facts) from the *instruction layer* (model behavior), we turn the problem into a constrained optimisation: minimise the KL‑divergence between the desired policy and the adversarial distribution. The constraint is that the instruction must remain within a *policy envelope* defined by a static, verifiable policy graph.

**Secure architecture**  

1. **Pre‑tokenisation sandbox** – all incoming content is parsed into an abstract syntax tree (AST) and annotated with trust metadata.  
2. **Policy compiler** – converts a high‑level declarative policy (“never reveal PII”) into a finite‑state machine that tags each AST node with *allowed* / *denied*.  
3. **Prompt synthesiser** – concatenates only the *allowed* nodes, then appends a canonical instruction template (e.g., “You are an assistant that follows policy X”).  
4. **Model wrapper** – runs the LLM inside a container with enforced resource limits; outputs are post‑filtered by the same policy compiler before reaching the user.

**Deeper principle**  
This is an instance of *information bottleneck*: we deliberately compress all untrusted content to a minimal, policy‑bounded representation that still preserves utility. The bottleneck guarantees that any injected instruction cannot propagate because it fails the policy graph check.

**Non‑obvious insight**  
The key is that the *policy compiler* itself must be formally verified (e.g., via SMT solving). Once verified, any prompt injection reduces to a logical contradiction: the injected tokens are rejected at compile time, not by heuristic filters. Thus, prompt injection is defeated *by construction*, not by ad‑hoc heuristics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

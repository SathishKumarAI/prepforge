---
qid: ing_e101f4966e__fp__local
question: What is Prompt Injection? — Prompt Injection Defense
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 391
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:58:10-05:00'
sources: []
---

**Prompt‑Injection Defense – a principled view**

At its core a language model is an *information‑processing engine*: given a textual context \(C\) and a prompt \(P\), it returns the most probable continuation \(\hat{Y}\) under its learned distribution \(p_\theta(Y|C,P)\).  
A *prompt injection* exploits this mechanism by appending malicious instructions to \(P\) that alter the model’s behavior (e.g., leaking data or changing policy). The attack is simply a different conditioning variable; the model still obeys Bayes’ rule.  

Therefore, defense must enforce **causal separation** between the user‑supplied prompt and any *policy* signal that governs what can be output. One principled method is to *factorize* the input:
\[
C_{\text{user}},\quad C_{\text{policy}}
\]
and condition the generation on a fixed, sanitized policy context \(C_{\text{policy}}\) that cannot be overridden by user text. This mirrors information‑theoretic channel capacity limits: we cap the mutual information \(I(P;Y)\) so that malicious variations in \(P\) cannot increase it beyond a threshold.

A non‑obvious insight: **contextual gating is equivalent to adding an auxiliary “security token”**—a learned vector appended before decoding. The token’s influence on logits can be tuned via *soft prompts* or *adapter layers*, ensuring the model’s attention never shifts its focus to injected sub‑prompts. Thus, prompt‑injection defense becomes a controlled form of *information bottleneck*, preserving expressivity while guaranteeing policy invariance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

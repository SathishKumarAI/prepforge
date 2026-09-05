---
qid: ing_0cade195d9__fp__local
question: 'Q79: How do you approach prompt injection defense in a multi-tenant agentic
  system where the agent reads external web pages or documents?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 609
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:32:46-05:00'
sources: []
---

### Prompt‑Injection Defense in Multi‑Tenant Agentic Systems  

**Fundamental problem** – a tenant’s prompt can be hijacked by injecting malicious text that the agent later propagates to downstream LLM calls or external actions. The attack surface is two‑fold: (1) *content* read from untrusted web pages, and (2) *control flow* induced by user‑supplied prompts.

**Why a layered filter must exist** –  
1. **Information‑theoretic isolation**: Each tenant’s prompt should be treated as an independent random variable \(X\). The agent’s policy \(\pi(a|x)\) must have low mutual information with any external content \(E\), i.e., \(I(X;E)\approx0\).  
2. **Optimization of utility vs. risk**: Define a loss \(L = L_{\text{utility}} + \lambda L_{\text{security}}\). The security term penalizes policy outputs that contain tokens from \(E\) or patterns correlated with known injection templates.

**Concrete defenses**

| Layer | Mechanism | Rationale |
|-------|-----------|-----------|
| **Static pre‑processing** | Regex/grammar checks on tenant prompt; strip URLs, scripts. | Removes obvious injection vectors before tokenization. |
| **Semantic sandboxing** | Embed a *prompt‑embedding* \(p = \text{Enc}(X)\). Train a classifier to detect when \(p\) deviates from the distribution of benign prompts (via out‑of‑distribution detection). | Leverages geometric separation in embedding space; hard for an attacker to push \(p\) into the safe region without changing intent. |
| **Runtime policy monitoring** | During generation, apply a *token‑level discriminator* that flags any token with high similarity to known malicious patterns (e.g., “execute”, “download”). If flagged, truncate or replace. | Provides an online safety net; aligns with causal inference: if the agent’s next token is influenced by external content, it can be corrected before commitment. |
| **Audit‑log replay** | Log all prompts and generated actions. Use differential privacy to publish aggregate statistics for anomaly detection. | Enables post‑hoc reconstruction of injection attempts, revealing hidden patterns. |

**Non‑obvious insight**  
*The attack surface is amplified when the agent’s internal state (e.g., a memory buffer) is shared across tenants.* Even if each prompt passes filtering, a malicious tenant can seed the shared memory with covert tokens that later influence other tenants’ generations. Thus, **memory isolation**—resetting or hashing the internal buffer per request—is as critical as input sanitization.

By treating prompt injection as an information‑theoretic leakage problem and enforcing geometric isolation at multiple layers, a multi‑tenant agentic system can maintain high utility while keeping malicious influence negligible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

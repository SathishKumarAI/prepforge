---
qid: ing_e31a803636__fp__local
question: Walk me through the OWASP Top 10 for LLM Applications. Which matter most
  for an agent?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 690
total_tokens: 870
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:02:43-05:00'
sources: []
---

### Why a “LLM‑OWASP” list even exists

Large language models are *statistical black boxes*: they map prompts to token distributions. The only guarantees we have come from the training data and the safety filters built on top of it. When an LLM is wrapped in an agent (chatbot, policy engine, autonomous system), the interface becomes a **policy surface** that adversaries can probe or subvert. Every vulnerability in that surface is a potential *information leakage* or *control‑flow hijack*—the two classic attack vectors of software security.

### The adapted OWASP Top 10 for LLM agents

| Rank | Issue | Why it matters for an agent |
|------|-------|-----------------------------|
| 1 | **Injection & Prompt Manipulation** | An attacker can embed malicious instructions that the model executes, bypassing business logic. |
| 2 | **Model Mis‑use / Data Leakage** | Sensitive data may surface in responses; agents must enforce *least‑privilege* on training data exposure. |
| 3 | **Untrusted Output (Hallucination)** | Agents acting autonomously can propagate false facts, undermining decision quality. |
| 4 | **Adversarial Prompting (Steganography)** | Hidden commands in benign prompts can trigger hidden model capabilities. |
| 5 | **API Rate & Resource Abuse** | Attackers can exhaust compute or API quotas, causing denial of service to legitimate users. |
| 6 | **Misconfiguration of Safety Filters** | Over‑tight filters cause *functional lockout*; lax filters allow policy violations. |
| 7 | **Model Theft / Reverse Engineering** | Adversaries may clone the agent’s behavior by probing its response patterns. |
| 8 | **Session Hijacking & Replay** | Reusing conversation context can bypass authentication or state checks. |
| 9 | **Data Integrity & Model Drift** | Continuous fine‑tuning without validation lets attackers poison the model over time. |
|10 | **Supply‑Chain Attacks on Dependencies** | Vulnerable libraries (e.g., tokenizers) can introduce code execution vectors. |

### Which matter most for an agent?

1. **Injection & Prompt Manipulation** – because agents often interpret user intent directly; a single malicious prompt can subvert the entire workflow.
2. **Untrusted Output** – autonomous decisions based on hallucinated facts can have catastrophic real‑world consequences.
3. **Model Mis‑use / Data Leakage** – agents frequently handle personal or proprietary data; any leakage is a direct breach.

### Non‑obvious insight

Most people focus on *input sanitization* alone, but the core problem is that LLMs are *statistical learners*, not deterministic parsers. The “sanitization” you apply must be **probabilistic**: design prompts and safety nets that *shift the distribution* of responses away from unsafe regions, rather than trying to block a finite set of tokens. This is why differential privacy–inspired techniques (e.g., temperature tuning + output filtering) are increasingly crucial for protecting agents against subtle prompt attacks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

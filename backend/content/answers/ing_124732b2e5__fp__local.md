---
qid: ing_124732b2e5__fp__local
question: You're doing a security review of a coding agent that executes model-generated
  code. What's your threat model and controls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 419
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:44:37-05:00'
sources: []
---

### Threat model

1. **Execution‑time exploitation** – The agent runs arbitrary code; an attacker can embed a malicious payload that abuses OS privileges or escalates via kernel exploits.  
2. **Model mis‑generation** – The language model may hallucinate code that silently leaks secrets (e.g., hard‑coded keys) or performs side‑channel attacks (timing, cache).  
3. **Data leakage** – Code can read/write files outside its sandbox; the agent might inadvertently expose training data or user context to external services.  
4. **Denial of service** – Infinite loops or heavy recursion could exhaust CPU/memory, hijacking system resources.

### Controls derived from core principles

| Principle | Control |
|-----------|---------|
| **Least‑privilege (information‑theoretic security)** | Run code in a *fully isolated* container with read‑only mounts and no network access. |
| **Defense‑in‑depth (probabilistic failure handling)** | Pre‑parse the generated AST; reject any calls that touch disallowed APIs or modify environment variables. |
| **Fail‑safe defaults (optimization of safe states)** | If parsing fails, fall back to a deterministic “no‑op” kernel and log the incident for audit. |
| **Zero‑trust by default (information theory)** | Treat every code fragment as potentially adversarial; only allow a minimal whitelist of safe standard library functions. |

**Non‑obvious insight:**  
A model’s *hallucinated* secrets are statistically indistinguishable from legitimate ones until you enforce an *explicit sandbox policy*. By integrating the sandbox into the compilation pipeline (e.g., using static analysis to prove absence of forbidden syscalls), you convert a probabilistic threat (“maybe this is malicious”) into a deterministic guarantee (“this code cannot touch the file system”), dramatically tightening security without sacrificing model flexibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

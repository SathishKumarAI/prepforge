---
qid: ing_2643011dbd__faang__local
question: 'Q: Compare sandboxed vs. unsandboxed execution for AI agents. When would
  you choose each?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 477
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:12:47-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re comparing two deployment models for an AI agent:  

| | **Sandboxed** | **Unsandboxed** |
|---|---|---|
|Execution context|Isolated VM/Container with strict OS and network limits|Runs directly on host or shared runtime, full privileges|

Assumptions to confirm:  
- What safety guarantees are required?  
- Is the agent interacting with external data or internal systems?  
- Regulatory / compliance constraints (PCI‑DSS, HIPAA).  

**2️⃣ Approach**  
1. Enumerate risks: privilege escalation, data leakage, denial‑of‑service.  
2. Map those to sandbox vs unsandbox trade‑offs.  
3. Identify use‑case scenarios where each model is optimal.

**3️⃣ Depth**  
- **Sandboxed** protects against malicious or buggy code by restricting file I/O, network, and system calls. It’s essential when the agent processes untrusted user data, runs in multi‑tenant cloud services, or must satisfy strict compliance (e.g., medical diagnostics). Overhead: 2–3× latency for context switches; limited access to GPU/accelerators unless explicitly exposed.  
- **Unsandboxed** offers lower latency and full hardware utilization, ideal for internal tooling, batch inference pipelines, or when the agent is a controlled component of a larger system with already‑established security boundaries (e.g., on‑prem data center). It’s acceptable if code is fully vetted, signed, and runs in isolated processes.  

**4️⃣ Edge Cases**  
- *Sandbox escape*: kernel bugs; mitigated by regular OS updates.  
- *Resource contention*: containers may starve GPU; use cgroups or separate nodes.  
- *Compliance failures*: unsandboxed agents can inadvertently exfiltrate data.

**5️⃣ Optimize & Communicate**  
Start with a sandbox for untrusted workloads, then progressively “lift” restrictions (e.g., read‑only mounts) as confidence grows. Explain trade‑offs: “We’ll accept 30 ms overhead to guarantee no external network writes.” This narrative shows structured thinking and clear risk assessment—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

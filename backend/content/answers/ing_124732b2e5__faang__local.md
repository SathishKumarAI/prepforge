---
qid: ing_124732b2e5__faang__local
question: You're doing a security review of a coding agent that executes model-generated
  code. What's your threat model and controls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 541
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:26:17-05:00'
sources: []
---

**Clarify**  
You’re reviewing a *coding‑agent* that receives prompts, generates source code with an LLM, then compiles/executed it in a sandbox. The goal is to ensure the agent can’t exfiltrate data or escape isolation. Key assumptions:  
- The model’s output is not pre‑filtered by a human;  
- Execution occurs on a shared host;  
- The attacker may supply malicious prompts.

**Approach**  
1. Define an adversary that can inject arbitrary code via prompts.  
2. Enumerate assets: user data, system secrets, network interfaces, and other containers.  
3. Map threat vectors: code injection, privilege escalation, side‑channel leaks, denial of service.  
4. Propose controls per vector.

**Depth (Controls)**  

| Vector | Control | Rationale |
|--------|---------|-----------|
| **Code execution** | Hardened sandbox (e.g., gVisor or Firecracker VM) with least‑privilege kernel modules disabled | Prevents escape to host. |
| **Data exfiltration** | Mandatory network egress filtering; only allow HTTPS to known endpoints, no DNS rebinding | Stops outbound traffic. |
| **Privilege escalation** | Run the agent as a non‑root user; strip capabilities (`CAP_SYS_ADMIN`, `CAP_NET_RAW`) | Limits kernel interaction. |
| **Side‑channel leakage** | Disable `/proc` and `/sys` mounts inside sandbox; randomize memory layout | Hides process metadata. |
| **Denial of Service** | Resource quotas (CPU, memory, file descriptors) + watchdog timers | Stops runaway code. |
| **Model output filtering** | Static analysis (e.g., Semgrep) + taint tracking before execution | Catches obvious malicious patterns early. |

**Edge Cases**  
- Prompt‑based *prompt injection* that tricks the LLM into generating benign code but embeds hidden exploits; test with adversarial prompts.  
- Race conditions where sandbox exits before policy enforcement; ensure atomic start‑up checks.  
- Cache poisoning: attacker forces the agent to load cached binaries; enforce fresh builds per request.

**Optimize & Communicate**  
Explain that each control layers defense, reducing attack surface multiplicatively. Highlight trade‑offs—tight sandboxes increase latency but are essential for safety. Summarize: “By combining least‑privilege execution, strict network egress rules, and proactive code analysis, we mitigate the primary risks of a model‑generated coding agent while keeping usability high.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

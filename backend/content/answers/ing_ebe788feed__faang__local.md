---
qid: ing_ebe788feed__faang__local
question: 'Q65: Your agent can execute arbitrary Python code. How do you make this
  safe?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 506
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:48:57-05:00'
sources: []
---

**Clarify**  
We’re building a sandboxed “agent” that may run any user‑supplied Python snippet. The goal: prevent malicious or buggy code from harming the host (data leaks, DoS, privilege escalation). I’ll assume we control the runtime environment and can install packages.

**Approach**  
1. **Process isolation** – run each job in a fresh container or VM with minimal privileges.  
2. **Resource limits** – enforce CPU time, memory, disk usage via cgroups/ulimit or Kubernetes resource requests.  
3. **Filesystem sandbox** – mount an empty read‑only root; expose only a controlled data volume.  
4. **Restricted language subset** – use a safe interpreter (e.g., `restrictedpython`, `Pyodide`) or compile to bytecode and strip dangerous builtins.  
5. **Network isolation** – disable outbound networking or route through a proxy with strict ACLs.  
6. **Audit & monitoring** – log all syscalls, capture stdout/stderr, run static analysis on the code before execution.

**Depth**  
- Container image: Alpine + `python3` stripped of `pip`, `setuptools`.  
- `ulimit -n 0` to block file descriptor creation; `cgroups` limit CPU to e.g., 200 ms.  
- Use `seccomp-bpf` to allow only safe syscalls (`read, write, execve`).  
- For byte‑code filtering: walk the AST and reject imports of modules like `os`, `subprocess`.  
- Timeouts via `signal.alarm()` inside the process; kill on overflow.

**Edge Cases**  
- Infinite loops in C extensions bypass Python limits → container CPU cap.  
- Code that tries to spawn a child process → blocked by seccomp.  
- Self‑modifying code (`exec`, `eval`) – allowed only if we whitelist safe patterns.  
- Hidden data leakage via environment variables – clear env before exec.

**Optimize & Communicate**  
We can reduce overhead by reusing a lightweight container pool and caching the sandbox image. Explain that each layer adds isolation; trade‑offs are startup latency vs security. Emphasize that combining multiple orthogonal defenses (process isolation + bytecode filtering) gives defense‑in‑depth, which is what FAANG teams expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

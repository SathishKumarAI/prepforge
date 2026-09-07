---
qid: ing_1d9bb93df8__faang__local
question: How do you sandbox a code-executing agent?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 483
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:53:54-05:00'
sources: []
---

**Clarify**  
We need to prevent an autonomous code‑executing agent from affecting the host or network while still allowing it to run useful tasks (e.g., data processing). Key assumptions:  
1. The agent can spawn subprocesses and access local files.  
2. We have control over the runtime environment but not the agent’s source code.  

**Approach**  
1. **Process isolation** – run the agent in a lightweight container (Docker, Firecracker).  
2. **Resource limits** – cgroups to cap CPU, memory, and I/O.  
3. **Filesystem sandboxing** – mount only required directories read‑only; use tmpfs for write operations.  
4. **Network isolation** – disable outbound traffic or proxy through a firewall that allows only whitelisted endpoints.  
5. **System call filtering** – seccomp‑BPF to block dangerous syscalls (e.g., `ptrace`, `mknod`).  
6. **Runtime monitoring** – log all actions and terminate on policy violations.

**Depth**  
- Docker + cgroups give O(1) overhead; Firecracker adds ~10 µs per VM start but is lighter than full VMs.  
- Seccomp filters can drop >90% of syscalls with negligible performance hit.  
- Network ACLs enforce a “deny‑by‑default” model, preventing data exfiltration.  

**Edge Cases**  
- Agent uses shared memory or IPC to escape the container → block `shm_open`, `mmap` with MAP_SHARED.  
- Zero‑day exploitation of kernel bugs → rely on host OS updates and minimal privileges (`--no-new-privileges`).  
- Legitimate long‑running tasks hitting CPU caps → allow adjustable limits per job.

**Optimize & Communicate**  
Start with a “sandbox‑as‑service” layer that auto‑generates container specs from high‑level policies. Use automated tests (CVE‑based fuzzing, static analysis) to validate isolation. Explain trade‑offs: containers are fast but less strict than VMs; Firecracker offers stronger isolation at slightly higher latency. Conclude by highlighting how this stack balances security, performance, and developer ergonomics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

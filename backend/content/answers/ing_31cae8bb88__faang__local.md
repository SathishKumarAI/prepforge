---
qid: ing_31cae8bb88__faang__local
question: 'Explain: A shared kernel is a security threat — What We Learned Building
  Cloud Agents | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 498
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:39:59-05:00'
sources: []
---

**Clarify**  
We’re asked why a *shared kernel*—i.e., multiple virtual machines or containers running on the same host kernel—poses a security risk for cloud agents. The assumption is that each agent runs with its own isolated user space, but all share the underlying OS kernel.

**Approach**  
1. Identify what “shared kernel” means in practice (VMs, containers).  
2. List attack surfaces that arise from shared state.  
3. Explain how an attacker could exploit one VM to compromise others or the host.  
4. Summarize mitigations used by modern cloud providers.

**Depth**  
A shared kernel implies that any kernel‑level bug or privilege‑escalation vulnerability is a single point of failure: a flaw in the Linux kernel, for instance, can let an attacker escape from one container into the host and then to other containers. Even with user‑space isolation (cgroups, namespaces), kernel exploits bypass those boundaries because they run at ring 0.  
Additionally, shared drivers or device files become attack vectors; a malicious process could manipulate a driver that is globally visible, affecting all tenants. Kernel memory corruption can also leak data across VMs via shared page tables.  
Cloud agents often run privileged operations (e.g., installing software), so if an attacker compromises the kernel they can tamper with agent binaries or intercept telemetry.

**Edge Cases**  
- *Trusted‑Path* containers: If the host is fully trusted, the risk diminishes but still exists for zero‑day bugs.  
- *Unprivileged kernels*: Running a minimal, hardened kernel reduces surface area but cannot eliminate all shared‑kernel risks.  
Testing should involve fuzzing the kernel and attempting container escape from a sandboxed VM.

**Optimize & Communicate**  
To mitigate: use **unikernels** or **microVMs** (Firecracker) that bundle only needed services, reducing attack surface; employ **kernel hardening** (KPTI, SELinux, seccomp); isolate with **hardware virtualization extensions**.  
When explaining to interviewers, emphasize the *single point of failure* nature, concrete exploit paths, and how modern architectures shift toward minimal shared kernels for security. This demonstrates structured reasoning, depth in technical detail, and awareness of trade‑offs—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

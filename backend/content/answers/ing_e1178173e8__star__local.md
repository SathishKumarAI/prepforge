---
qid: ing_e1178173e8__star__local
question: 'Explain: Sandboxed vs. Unsandboxed Execution — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 344
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:58:53-05:00'
sources: []
---

**Situation**  
At my last company we were building a recommendation engine that ran user‑generated Python scripts to personalize content. The product manager demanded that the system support both quick, trusted “sandboxed” runs for internal users and more powerful “unsandboxed” executions for external partners who needed full library access.

**Task**  
I had to design an architecture that allowed safe isolation for sandboxed jobs while still enabling unrestricted execution for trusted workloads, without sacrificing performance or complicating deployment.

**Action**  
I chose a container‑first approach. For sandboxed runs I spun up lightweight Docker containers with read‑only volumes, limited CPU shares, and a custom SELinux policy that blocked system calls like `ptrace` and network access. Inside the container we used PyPy’s “safe interpreter” to further restrict bytecode execution.  
For unsandboxed jobs, I leveraged Kubernetes’ NodePort service to schedule them on dedicated worker nodes with elevated privileges, allowing full Python libraries and GPU access. A shared Redis queue fed tasks into both queues; a Go‑based orchestrator inspected the job metadata (trust level, resource tags) and routed each job accordingly. To keep latency low, I pre‑warmed containers and used a shared build cache for dependencies.

**Result**  
The new architecture cut sandboxed job failures from 12% to 1%, reduced overall execution time by 18%, and allowed us to onboard three external partners within two weeks of launch. I learned that container isolation combined with fine‑grained policy controls can provide both safety and flexibility, and that a lightweight orchestrator is key to managing mixed workloads efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

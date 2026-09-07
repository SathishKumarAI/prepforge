---
qid: ing_3054d4ca9b__aws__local
question: 'Explain: gVisor — Safety And Governance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 421
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:14:32-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the migration of a multi‑tenant ML platform from bare‑metal VMs to containers on EKS. The security team flagged that untrusted workloads could escape isolation and exfiltrate data. We needed an in‑process kernel emulator that would give us *gVisor*‑level safety without breaking performance.

**Action & Design**  
I scoped the problem: 1 k concurrent pods, each running a TensorFlow inference job (≈2 ms latency). I evaluated **gVisor**, **Firecracker**, and **Kata Containers**. gVisor offered the strongest syscall sandboxing (∼90 % of syscalls intercepted) while keeping CPU overhead <5 %.  
I designed a hybrid deployment:  
- *EKS* with **AWS Fargate** for stateless inference pods,  
- *Amazon RDS Aurora Serverless* for metadata,  
- *AWS App Mesh* to enforce traffic policies.  
To keep cost low, I enabled **gVisor’s** “lightweight mode” and set a 10 min idle timeout on Fargate tasks.

**Result & Metrics**  
Post‑migration, zero successful escape incidents were logged for 18 months. CPU overhead dropped from 12 % (Firecracker) to 4.7 %, keeping latency at 2.1 ms (vs 3.8 ms baseline). Cost savings: $15k/month by eliminating on‑prem VMs and reducing idle compute time.

**Reflection & Learning**  
I took full ownership of the security posture, dove deep into syscall profiling, and iterated quickly—deploying a canary first, then rolling out to production. The experience reinforced that *Customer Obsession* + *Ownership* drive measurable impact while balancing risk and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

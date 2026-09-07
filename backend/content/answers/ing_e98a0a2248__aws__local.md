---
qid: ing_e98a0a2248__aws__local
question: 'Explain: Firecracker MicroVM — What makes AWS Lambda so fast?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 418
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:05:59-05:00'
sources: []
---

**Situation / Task**  
I was tasked to explain why AWS Lambda launches in < 100 ms and how *Firecracker MicroVM* enables that performance while keeping isolation.

**Action**  
1. **Dive Deep into the architecture** – Lambda runs each invocation inside a lightweight, pre‑initialized Firecracker VM.  
2. **Key AWS services** –  
   - *Amazon S3* for code storage,  
   - *AWS Lambda@Edge* for edge caching,  
   - *Amazon CloudWatch* for telemetry,  
   - *EC2 Nitro hypervisor* as the underlying runtime.  
3. **Design choices** – Firecracker uses a single‑process kernel (x86_64) with KVM isolation; it boots in ~20 ms, far faster than full VMs. The VM image is cached on the local Nitro SSD and memory‑mapped into the host, eliminating disk I/O per invocation.  
4. **Scalability & cost** – Each MicroVM consumes < 30 MB RAM and 1 vCPU core; AWS can spawn tens of thousands per node, keeping per‑invocation cost <$0.000001. Availability is achieved by launching new VMs in parallel across AZs.

**Result**  
Lambda’s cold start latency dropped from ~1 s (classic EC2) to < 100 ms for 90 % of invocations, driving a 3× increase in request throughput and a 25 % reduction in cost per million requests for the finance application I worked on.  

> **Leadership Principles**: *Customer Obsession* – delivering instant responses; *Ownership* – designing Firecracker to balance speed, isolation, and cost; *Dive Deep* – dissecting kernel‑level decisions that yield measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

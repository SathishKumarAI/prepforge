---
qid: ing_801bf1908c__aws__local
question: 'Explain: NUMA Awareness and CPU Topology — Virtualization Architecture
  - by Neo Kim and Ayaan'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 496
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:14:54-05:00'
sources: []
---

**Situation & Task**  
While leading the *EC2 Compute Optimization* team, we noticed a 12 % latency spike in GPU‑accelerated inference workloads on our latest instance family (c6i). Customer benchmarks were falling short of SLAs, and internal A/B tests suggested that the hypervisor was not respecting CPU topology, causing NUMA‑bound memory contention. I owned the investigation, drove a root‑cause analysis, and delivered a fix within 7 days.

**Action – Dive Deep & Ownership**  
1. **Profiling**: Instrumented KVM’s `kvm_vcpu` scheduler with eBPF to capture per‑vcpu CPU affinity and memory page faults.  
2. **NUMA Awareness**: Confirmed that the Nitro Hypervisor was binding vCPUs to a single NUMA node, while guest processes scheduled across nodes, leading to cross‑node traffic.  
3. **Design Fix**: Updated the Nitro firmware to expose *CPU topology* (socket, core, thread) via `sysfs` and patched the hypervisor scheduler to honor the guest’s CPU affinity map (`cpuinfo`).  
4. **AWS Service Integration**: Published a new EC2 instance attribute `--numa-aware=true`, automatically enabled on all c6i and r6i families, leveraging Nitro’s *VM Guest Access* API.  

**Result – Deliver Results**  
- Latency dropped from 18 ms to 5 ms (≈ 70 % improvement) in our benchmark suite.  
- Customer‑reported error rates fell by 90 %, reducing SLA penalties and saving ~$1.2 M annually for the region.  
- The patch was rolled out with zero downtime, costing an additional $15K in development but generating a net positive ROI of 8× within the first quarter.

**Learning & Bar‑raiser Insight**  
Bar‑raisers look for: ownership (I led from hypothesis to production), depth (eBPF tracing + NUMA theory), quantified impact (latency, cost), and iterative learning (we validated the fix in a staging environment before full rollout).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

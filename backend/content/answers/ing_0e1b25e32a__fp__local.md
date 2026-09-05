---
qid: ing_0e1b25e32a__fp__local
question: 'Explain: Firecracker MicroVM — How AWS Lambda Works Behind the Scenes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 522
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:35:41-05:00'
sources: []
---

**Why Lambda needs a micro‑VM**

The core problem is *fast, isolated execution* for millions of short jobs on shared hardware.  
An interpreter or container would give isolation but adds ~500 ms cold‑start overhead; a full VM gives isolation but costs too much memory and CPU.  
The solution must: (1) start in < 100 ms, (2) use < 10 MiB per job, and (3) guarantee that one function cannot read another’s state.

**Firecracker’s design from first principles**

1. **Minimal hypervisor + copy‑on‑write (COW)**  
   Firecracker is a tiny KVM‑based hypervisor with only the kernel code required to boot a Linux guest.  All user code runs in that guest; the host sees nothing but a few memory pages.  COW guarantees that the same base image can be shared by thousands of guests, so each new function consumes just the delta pages it modifies.

2. **Resource quotas via cgroups & namespaces**  
   The hypervisor exposes per‑VM CPU shares and RAM limits directly to the kernel; no extra sandboxing layer is needed.  This gives precise isolation while keeping overhead low.

3. **Fast snapshotting with AMI‑based kernels**  
   Lambda’s “image” is a pre‑built, read‑only root filesystem that can be snapshotted in < 10 ms.  The hypervisor loads it into memory and boots instantly because the kernel is already resident.

**Non‑obvious insight**

Firecracker’s *kernel‑level isolation* means the guest sees no other VMs’ memory pages at all, even if they share the same physical RAM.  This eliminates the classic “page‑table poisoning” attack vector that containers cannot avoid, giving Lambda a security guarantee akin to full VMs but with micro‑VM latency.

---

**Bottom line:**  
Firecracker satisfies the *“fast, cheap, isolated”* triad by turning the KVM hypervisor into a minimal, COW‑friendly VM that can be spun up in milliseconds and shared across millions of Lambda invocations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

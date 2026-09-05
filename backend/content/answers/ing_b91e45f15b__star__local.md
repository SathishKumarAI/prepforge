---
qid: ing_b91e45f15b__star__local
question: 'Explain: Nested Virtualization — Virtualization Architecture - by Neo Kim
  and Ayaan'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 393
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:41:28-05:00'
sources: []
---

**Situation** – In my last role as a DevOps engineer, we had a legacy data‑science platform that ran on bare metal servers in our on‑prem data center. The platform’s GPU workloads needed to be sandboxed for each research team, but the existing hypervisor (VMware ESXi) didn’t support running a second hypervisor inside its VMs due to performance concerns.

**Task** – I was tasked with designing an isolated, reproducible environment that allowed teams to spin up their own virtual machines on top of the host VMs while still leveraging GPU passthrough and maintaining strict isolation between projects. The goal was to reduce provisioning time from days to minutes and keep overhead below 5 % CPU usage.

**Action** – I implemented nested virtualization using KVM inside the VMware guests. First, I created a lightweight ESXi‑managed VM with direct PCI passthrough of an NVIDIA A100 GPU to the guest. Inside that VM, I installed a Debian host running libvirt/KVM and exposed its API via a REST endpoint. Each research team could then launch “guest‑within‑guest” VMs through a custom web portal; these VMs were allocated 2 vCPU, 8 GB RAM, and the passthrough GPU slice. I also set up SELinux policies to restrict filesystem access and used cgroups to limit memory bandwidth.

**Result** – The nested environment cut provisioning time from three days to under 30 minutes per team. GPU utilization stayed above 90 % while CPU overhead remained below 4 %. We saw a 35 % increase in concurrent research workloads without adding physical servers, and the teams reported higher productivity thanks to consistent environments. This project taught me how to balance isolation, performance, and operational simplicity when extending virtualization layers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

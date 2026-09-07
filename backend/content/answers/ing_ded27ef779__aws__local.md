---
qid: ing_ded27ef779__aws__local
question: 'Explain: Layer 2: Data Link — OSI Model | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 502
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:43:26-05:00'
sources: []
---

**Context – “Layer‑2: Data Link in the OSI model” (System Design)**  

**Situation:**  
While leading a project to modernize our on‑prem network for a high‑throughput analytics platform, I had to redesign the data‑link layer so that we could move from legacy Ethernet to a scalable, fault‑tolerant fabric. The existing switch stack was aging and caused 3 % MTBF drops, hurting downstream ML pipelines.

**Task:**  
Redesign the Layer‑2 fabric to support 10 Gbps per node, zero broadcast storms, and automated failover, while staying under $200k CAPEX and maintaining 99.999% availability.

**Action:**  
1. **Design** a VXLAN‑based overlay on top of SD‑WAN switches, using *Cisco Nexus* for local switching and *AWS Direct Connect* for cloud integration.  
2. Implement *Spanning Tree Protocol (STP) with Rapid PVST+* for loop prevention, and use *Link Aggregation Control Protocol (LACP)* to bundle links.  
3. Deploy **AWS Transit Gateway** as a central hub, routing all VXLAN tunnels through it; this gives us *single‑point of failure protection* via Multi‑AZ transit gateway endpoints.  
4. Automate configuration with **Ansible + Terraform**, pushing changes to switches and the transit gateway in under 5 min.  

**Result:**  
- Achieved >10 Gbps per node with <1 ms latency jitter.  
- MTBF improved from 3 % to 99.9 %.  
- CAPEX cut by 15 % vs. a full switch replacement.  
- Reduced ops hours by 70 % through automation.

**Leadership Principles:**  
*Customer Obsession – we kept ML engineers’ latency and reliability at the core.*  
*Ownership & Dive Deep – I took end‑to‑end responsibility, from protocol choice to AWS integration, and validated every assumption with real traffic data.*

**Bar‑raiser note:**  
Look for ownership (I owned the full stack), depth (I explained STP, VXLAN, LACP details), quantified impact (MTBF, latency), and learning (automated failover reduced ops).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

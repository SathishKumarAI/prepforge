---
qid: ing_f02fe3c12d__faang__local
question: 'Explain: Layer 3: Network — OSI Model | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 777
total_tokens: 1014
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:58:00-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to explain *Layer 3 (Network)* of the OSI model **as it applies to system‑design decisions**.  
Key assumptions:  
* We’re building a large, distributed service (e.g., micro‑services) that must scale horizontally and remain resilient.  
* The audience knows basic networking but not necessarily the deep OSI layers.

---

### Approach  
1. Briefly recap the 7‑layer model to set context.  
2. Focus on Layer 3 responsibilities: routing, logical addressing, fragmentation, QoS.  
3. Map each responsibility to concrete design choices (protocols, topology, failure handling).  

---

### Depth  

| Layer 3 Feature | What it does | Design Implication |
|-----------------|--------------|--------------------|
| **Logical addressing** (IP) | Unique node ID, subnetting | Choose IPv4/IPv6, CIDR blocks, VPC/subnet design; consider address exhaustion and future growth. |
| **Routing** | Determines next hop | Use BGP for inter‑data‑center paths, OSPF/IS-IS within a region; implement route reflection or full mesh for fault tolerance. |
| **Fragmentation / MTU** | Splits packets > MTU | Set consistent MTU (e.g., 1500 B) across all links; enable ECN to avoid congestion collapse; consider Path‑MTU Discovery in service meshes. |
| **QoS & Traffic Engineering** | Prioritizes traffic, guarantees bandwidth | Deploy QoS policies on routers/switches; use SR‑IOV for high‑throughput services; design load balancers with sticky sessions only when needed. |
| **Security at Layer 3** | IPsec, VPNs | Use IPSec tunnels between regions; leverage AWS Direct Connect/VPN for private connectivity; enforce ACLs on routing tables. |

Complexity trade‑offs:  
* Full BGP mesh gives best resiliency but higher convergence time and memory usage.  
* Route reflection simplifies topology at the cost of a single point of failure per region.

---

### Edge Cases  

| Scenario | Potential Breakage | Test |
|----------|-------------------|------|
| **Link failure** | Sudden loss of a primary route | Simulate router reboot; verify BGP convergence within < 5 s. |
| **IP address exhaustion** | Subnet runs out of hosts | Run CIDR calculator on projected growth; implement auto‑scaling subnet allocation. |
| **MTU mismatch** | Packet drops due to fragmentation issues | Test with varying MTU settings across VPC peering links. |

---

### Optimize & Communicate  

1. **Start with the big picture**: “Layer 3 is where we decide *who* talks to whom and *how* packets traverse our network.”  
2. **Show a diagram** of VPC → edge router → BGP peers → core switches, labeling IP ranges and routing protocols.  
3. **Quantify decisions**: e.g., “Using route reflection reduces router memory from O(n²) to O(n).”  
4. **Close with trade‑offs**: “We accept slightly higher convergence latency for a more resilient mesh because our SLA requires < 1 % downtime.”  

This structure demonstrates clear thinking, technical depth, and the ability to translate OSI concepts into pragmatic system‑design choices—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

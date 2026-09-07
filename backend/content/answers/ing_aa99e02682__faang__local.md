---
qid: ing_aa99e02682__faang__local
question: 'Explain: VPC Peering — Typical AWS Network Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 561
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:21:10-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *VPC Peering* and how it’s used in a typical AWS network design. I’ll assume the audience knows basic AWS concepts (VPC, subnets) but not the specifics of peering or its trade‑offs.

**Approach**  
1. Define VPC peering and its purpose.  
2. Outline the key components: VPCs, route tables, security groups, and network ACLs.  
3. Describe a common “hub‑and‑spoke” pattern that uses peering.  
4. Highlight limitations (no transitive peering, same region, etc.).  
5. Touch on monitoring/diagnostics.

**Depth**  
VPC peering lets two VPCs—same or different accounts—communicate over private IPs without an Internet Gateway, NAT, or VPN. After establishing a peer connection, each side updates its route table to forward traffic destined for the other VPC’s CIDR through the peering link. Security groups and NACLs then control which pods/instances may talk. Peering is *bidirectional* but *non‑transitive*: A‑B and B‑C peered does not allow A‑C traffic unless another route exists.

Typical architecture:  
- **Hub VPC** hosts shared services (DB, auth).  
- **Spoke VPCs** run workloads per business unit or region.  
- Each spoke has a peering to the hub; spokes may also peer with each other if needed.  
This keeps routing tables small, isolates tenant traffic, and avoids over‑provisioning a single large CIDR.

**Edge cases**  
*CIDR overlap*: Peering fails if IP ranges collide.  
*Same‑region restriction*: Cross‑region peering is allowed but incurs latency.  
*Transit traffic*: You must add explicit routes for each spoke pair; otherwise, packets drop.  
*Security*: Misconfigured SG/NACLs can silently block traffic.

**Optimize & Communicate**  
To scale, consider a *Transit Gateway* instead of many peer links—this reduces routing complexity and centralizes monitoring. I’d explain that while peering is simple and cost‑free, it doesn’t support dynamic routing or failover; those are handled by the Transit Gateway or VPN. In an interview, I would conclude with: “VPC Peering gives you fast, private connectivity for a limited set of VPCs, but when your network grows beyond a handful of peers, a transit solution is usually cleaner.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_3c43c711b9__think__local
question: 'Explain: Network Failures — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 466
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:00:50-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
Ask: “Are we talking about internal data‑center networking, WAN links, or edge connectivity?” Assume a typical cloud‑based microservices architecture with multiple AZs and at least one load balancer per tier.

**2️⃣ Adopt the Availability framework**  
Use the classic *5 S* (Speed, Scale, Service, Security, and Support) but focus on *Service* → *Reliability*. Break reliability into *Redundancy*, *Fail‑over*, *Monitoring*, *Recovery*, and *Graceful degradation*.

**3️⃣ Step‑by‑step reasoning**  
1. Identify failure modes: link outages, DNS failures, router crashes, software bugs in the SDN controller.  
2. Map each to a mitigation: multiple physical links (bonding), BGP multipath, redundant switches, health‑checks, circuit breakers.  
3. Quantify impact: compute MTTR and MTBF per component; propagate through the service chain to get overall SLA.  
4. Design for observability: distributed tracing, link latency metrics, packet loss dashboards.  
5. Plan recovery: automated fail‑over scripts, rolling restarts, canary deployments.

**4️⃣ Avoid common traps**  
- Don’t equate “availability” with “throughput”; a 99.9 % uptime is still a 7‑hour outage per year.  
- Beware of *single points of failure* hidden in the control plane (e.g., a single SDN controller).  
- Remember that redundancy can introduce *state consistency* challenges; use quorum protocols where needed.

**5️⃣ Sanity‑check & communicate**  
Re‑derive the SLA from the component MTBFs and compare against customer expectations. Present the design as a diagram: traffic flow → load balancer (redundant) → service tier (AZ‑spanning replicas) → database (multi‑region). Emphasize that each layer’s fail‑over logic is orthogonal to the others, ensuring graceful degradation rather than catastrophic collapse.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_2da2fadbc6__fp__local
question: 'Explain: Geographic Redundancy — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 493
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:41:49-05:00'
sources: []
---

**Geographic Redundancy – Availability**

The *fundamental problem* is that a single data centre can fail because of power loss, natural disaster, or network partition.  
Let \(p\) be the probability that a given site goes down during a 24‑hour window; for most modern infra \(p\approx0.001\). If we place all replicas in one location, the system’s availability is simply \(1-p\).

Now consider two independent sites separated by distance \(d\). Assuming failures are uncorrelated (the independence assumption can be checked empirically), the joint failure probability is \(p^2\). The *availability* becomes  
\[
A = 1 - p_{\text{joint}} = 1 - p^{\,n}\quad (n=\text{# sites}).
\]
This exponential decay shows why even a small increase in \(n\) yields dramatic gains. It is a direct consequence of the *multiplication principle* from probability theory, not an ad‑hoc rule.

**Why must we replicate across regions?**  
1. **Latency vs reliability trade‑off**: The closer replicas are to users, the lower latency; but proximity also increases correlation risk (e.g., same earthquake zone).  
2. **Data consistency**: Distributed consensus protocols (Paxos/Raft) guarantee safety only if a majority of replicas are reachable. Geographic spread ensures that at least one majority can survive a local outage.

**Non‑obvious insight:**  
The *critical* factor is not just the number of sites but their *correlation structure*. Two sites in the same country may fail together due to a power grid collapse, so the effective \(p_{\text{joint}}\) is higher than \(p^2\). True geographic redundancy requires *independent failure domains*—different utilities, separate fiber rings, and distinct regulatory regimes. Thus, when designing for availability, one must model correlated failures explicitly rather than assuming independence.

In short, geographic redundancy turns a linear reliability problem into an exponential one by exploiting statistical independence across distant sites, but only if those sites truly live in independent failure domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

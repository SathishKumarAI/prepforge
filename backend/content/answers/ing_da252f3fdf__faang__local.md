---
qid: ing_da252f3fdf__faang__local
question: 'Explain: Availability in Series vs Parallel — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 533
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:06:05-05:00'
sources: []
---

**Clarify**  
We’re asked to compare how system availability behaves when components are wired *in series* versus *in parallel*. Assume each component has a steady‑state failure probability \(p\) (or mean time between failures MTBF), and that failures are independent.

**Approach**  
1. Derive the overall success probability for each topology.  
2. Express availability as \(A = 1 - P_{\text{fail}}\).  
3. Discuss trade‑offs: cost, complexity, fault isolation, scalability.

**Depth**  

| Topology | Failure probability | Availability |
|----------|---------------------|--------------|
| **Series** (all must work) | \(P_f^{(S)} = 1 - \prod_{i=1}^{n}(1-p_i)\) ≈ \(1-(1-p)^n\) for identical units | \(A_S = \prod_{i=1}^{n}(1-p_i)\) |
| **Parallel** (any can work) | \(P_f^{(P)} = \prod_{i=1}^{n}p_i\) ≈ \(p^n\) | \(A_P = 1-\prod_{i=1}^{n}p_i\) |

For identical units with small \(p\), a series system’s availability degrades linearly with \(n\); a parallel system improves exponentially. Complexity: parallel requires load‑balancing, redundancy management, and potentially higher cost per unit of uptime.

**Edge Cases**  
- **Zero failures (\(p=0\))**: both topologies give 100 % availability.  
- **High failure probability (\(p>0.5\))**: parallel may still outperform series, but diminishing returns appear when \(n\) is large.  
- **Dependent failures (common‑cause)**: assumptions break; series can be catastrophic if one component fails, while parallel only helps if failures are truly independent.

**Optimize & Communicate**  
When designing a highly available service, start with a *series* backbone for core logic to keep cost low, then add *parallel* replicas of critical endpoints (e.g., load‑balanced web servers). Use health checks and graceful degradation. Communicate this trade‑off: “Series gives you a clean, cheap path but risks single points of failure; parallel adds resilience at the price of extra infrastructure and coordination.” This structured reasoning aligns with FAANG expectations for clarity, depth, and practical insight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

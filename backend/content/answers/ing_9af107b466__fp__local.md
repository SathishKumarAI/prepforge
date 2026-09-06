---
qid: ing_9af107b466__fp__local
question: 'Explain: Active-Active policy — Availabilitypatterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 484
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:35:08-05:00'
sources: []
---

### Why an **active‑active** pattern is needed

When a service must stay online even if *any* single node fails, the naïve “active‑passive” (hot standby) approach wastes capacity: only one instance serves traffic while another sits idle until it takes over.  
From reliability theory, the system’s **availability** \(A\) is
\[
A = 1 - \prod_{i=1}^{n}(1-p_i),
\]
where \(p_i\) is the failure probability of node *i*.  
If one node has a non‑zero \(p_i\), the product term never vanishes; thus, as soon as we add an idle standby (with \(p_{\text{standby}}\approx0\)), \(A\) barely improves.  The active‑active design replaces that standby with a second *working* instance, effectively setting each \(p_i\) to its true operational failure probability and letting the product shrink dramatically.

### How it works

1. **Load balancing** distributes requests across all active nodes (round‑robin, least‑connections, etc.).  
2. Each node independently handles its share; failures are isolated because other nodes continue serving.  
3. A **global health‑check** marks nodes offline only after repeated failures, preventing flapping.

### Deeper principle

The pattern embodies *parallelism in reliability*: by sharing load, each node’s effective failure rate is multiplied by the number of concurrent requests it receives. In probabilistic terms, the chance that *all* active nodes fail simultaneously drops exponentially with the number of nodes—exactly the same math that underlies fault‑tolerant parallel computing.

### Non‑obvious insight

Most people think an active‑active system is just “more capacity.”  The real gain comes from **reducing the correlation** between node failures.  If two nodes share a single network switch or power supply, their failures are correlated; an active‑active design forces architectural separation (different racks, redundant links).  Only then does the exponential drop in joint failure probability materialise—otherwise you’re just double‑booking the same risk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

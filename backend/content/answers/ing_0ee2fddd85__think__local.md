---
qid: ing_0ee2fddd85__think__local
question: 'Explain: Distributed Systems Resilience — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 480
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:43:17-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Ask whether “resilience” refers to *fault‑tolerance*, *high availability*, or *robustness under load*.  
   - Assume a typical microservice cluster (e.g., Kubernetes) with network partitions, node failures, and variable traffic.  
   - State that we’ll focus on architectural patterns rather than specific tooling.

**2️⃣ Adopt the “CAP + PACELC” mental model**  
   - Map out consistency vs availability trade‑offs.  
   - Use **P** (partition tolerance) as a baseline for distributed systems.  
   - Consider **A** (availability) and **C** (consistency) when designing replicas, leader election, and quorum reads/writes.

**3️⃣ Step‑by‑step reasoning**  
   1. *Identify failure domains*: nodes, racks, data centers, network links.  
   2. *Design redundancy*: replicate data across zones; use quorum protocols (Raft/CP).  
   3. *Graceful degradation*: fallback to read‑only mode or cached results when partitions occur.  
   4. *Health checks & auto‑scaling*: detect and replace failed instances automatically.  
   5. *Observability*: distributed tracing, metrics, alerts for latency spikes or dropped messages.

**4️⃣ Avoid common traps**  
   - Don’t over‑complicate with “perfect” consistency; choose the right level of eventual consistency where acceptable.  
   - Beware of “split brain” scenarios: ensure a single source of truth (e.g., leader election).  
   - Resist the urge to hard‑code retry loops without exponential backoff—can amplify failures.

**5️⃣ Sanity‑check & articulate**  
   - Verify that each component can survive at least one node failure.  
   - Summarize: “By partitioning data, using quorum reads/writes, and coupling health checks with autoscaling, we achieve a resilient system that remains available even under network or node faults.”  
   - If time allows, sketch a diagram to reinforce the explanation visually.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

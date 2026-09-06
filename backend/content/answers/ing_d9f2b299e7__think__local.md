---
qid: ing_d9f2b299e7__think__local
question: 'Explain: Pattern 2: Active-Active — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 497
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:20:00-05:00'
sources: []
---

**1. Clarify the ask & assumptions**  
   - The user wants a *thinking process* (meta‑cognition) for explaining the “Active‑Active – Design Load Balancer” pattern in ML system design.  
   - Assume the audience has basic ML and distributed systems knowledge but is new to this specific pattern.  
   - The goal: show how you’d break down, reason about, and communicate the concept without giving a full textbook answer.

**2. Choose a mental model / framework**  
   - Use the *“problem → constraints → trade‑offs → design → evaluation”* flow.  
   - Map each step to relevant ML/engineering concepts (e.g., latency, fault tolerance, consistency).

**3. Step‑by‑step reasoning path**  
   1. **Define the pattern**: two active nodes that share traffic, no single point of failure.  
   2. **Identify constraints**: low latency, high availability, eventual consistency, load balancing across data centers.  
   3. **List trade‑offs**: more complex state sync vs. higher throughput; CAP theorem considerations.  
   4. **Sketch the design**: dual load balancers (global + local), health checks, shared state store or gossip protocol.  
   5. **Evaluate**: what metrics to monitor, how to handle split‑brain, rollback strategies.

**4. Common traps & wrong turns**  
   - Forgetting that “active‑active” implies *simultaneous* operation; many confuse it with failover only.  
   - Overlooking the need for a *coordinated state* (e.g., model weights, feature flags).  
   - Assuming load balancer alone solves consistency; you still need data replication or consensus.

**5. Sanity‑check & verbalize**  
   - Run through a quick “use‑case scenario” (e.g., real‑time inference during peak traffic) to see if the design holds.  
   - Summarize in plain language: “We keep two serving nodes up, balance requests between them, and sync their state so they can both answer queries instantly.”  
   - Ask yourself: does this explanation cover constraints, trade‑offs, and practical implementation details? If yes, you’re ready to share.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

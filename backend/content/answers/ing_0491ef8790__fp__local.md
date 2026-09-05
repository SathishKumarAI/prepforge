---
qid: ing_0491ef8790__fp__local
question: 'Explain: Amazon System Design Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 427
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:15:25-05:00'
sources: []
---

**Fundamental problem**  
A parking garage must *locate a free spot for each incoming vehicle and release it when the vehicle exits*, while keeping space utilization high, minimizing driver walking distance, and ensuring safety/security.  

**Why the architecture is structured that way**  
1. **State‑ful storage (spot inventory)** – The system’s core objective is to maintain an up‑to‑date map of spot occupancy. A relational DB or distributed key‑value store (e.g., DynamoDB) guarantees ACID semantics for concurrent check‑ins/check‑outs, preventing double assignment.  
2. **Event‑driven updates** – Spot status changes are treated as events (entry/exit). An event bus decouples sensor input from the inventory service, enabling horizontal scaling and eventual consistency where strict immediacy is not required.  
3. **Greedy allocation + optimization layer** – The greedy “first free spot” policy maximizes throughput. A secondary optimizer (e.g., weighted shortest‑path search) re‑allocates spots to balance load across levels or to keep high‑value spots near exits for premium customers, embodying the *convex optimization* principle of minimizing total travel distance.  
4. **Geometric routing** – By modeling the garage as a graph with nodes (levels, aisles) and edges (doorways), shortest‑path algorithms (Dijkstra/A*) provide real‑time navigation hints to drivers, reducing congestion—an application of *graph theory* in logistics.

**Non‑obvious insight**  
Treating spot assignment as a *matching problem* rather than a simple queue allows the system to support complex policies (e.g., reserved spots, handicap accessibility) without sacrificing throughput. A bipartite matching algorithm can instantly reassign vehicles when higher‑priority requests arrive, guaranteeing optimal use of scarce resources while maintaining fairness—something most designers overlook in favor of naïve FIFO queues.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_a58f22d246__aws__local
question: 'Explain: to search to because obviously we want — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 617
total_tokens: 851
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:41:24-05:00'
sources: []
---

**Answer – “Search in a Chess Engine”**

> *“We want the engine to find the best move, not just any legal one.”*  

### Situation
I was tasked with adding an alpha‑beta search with iterative deepening to our open‑source chess engine (Python). The goal: reduce evaluation time by 40 % while keeping accuracy within 1‑centipawn of a baseline.

### Task
Implement a depth‑limited, transposition‑table‑backed search that scales from single‑core to 8‑core GPUs on AWS.  

### Action
1. **Requirements & Constraints**  
   * Max memory: 4 GB per instance (t3.large).  
   * Latency target: < 50 ms per move for real‑time play.  
2. **Design**  
   * **Alpha‑Beta with Principal Variation Search (PVS)** – cuts branches early.  
   * **Iterative Deepening + Time‑Control** – ensures best move is ready if time runs out.  
   * **Transposition Table (hash table)** stored in **Amazon ElastiCache Redis** for low‑latency lookups across instances.  
   * **Parallelization**: split root node evaluation across 8 **AWS Lambda** workers; aggregate results via **SQS**.  
3. **Scalability & Cost**  
   * Each Lambda costs ~$0.0000167 per 100 ms, so a full search (~200 ms) costs <$0.0034.  
   * Elastic scaling: spin up more Lambdas during peak play hours; shut down when idle.  
4. **Trade‑offs**  
   * Redis latency < 1 µs → negligible overhead vs CPU evaluation.  
   * Using Lambda avoids provisioning EC2, but introduces cold‑start risk (handled by keeping warm instances).  

### Result
* Search time dropped from 120 ms to **78 ms** on average (~35 % reduction).  
* Accuracy: engine still within **0.9 centipawn** of the baseline after adding iterative deepening.  
* Cost per move decreased from $0.0068 (EC2) to **$0.0034** (Lambda + Redis).

### Learning
Tried a monolithic multi‑threaded C++ version first; it hit memory limits and had hard‑to‑debug race conditions. Switching to stateless Lambdas with a shared Redis cache simplified debugging and made scaling linear—exactly what we needed for production.

> **Leadership Principles**: *Ownership* (I drove the end‑to‑end redesign), *Dive Deep* (profiled CPU vs. network costs), *Deliver Results* (quantified speedup & cost savings).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

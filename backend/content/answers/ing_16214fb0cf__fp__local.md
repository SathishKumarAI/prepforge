---
qid: ing_16214fb0cf__fp__local
question: 'Explain: think about it um why would we — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 504
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:52:33-05:00'
sources: []
---

## Why the “Parking‑Garage” problem is a classic in system‑design interviews

The core **problem** is: *“Given an arbitrary number of cars, find the fastest way to park and retrieve them while respecting space constraints.”*  
At first glance it looks like a logistics puzzle, but behind it lies a classic **resource allocation + queuing** problem.

1. **Resource constraints** – each parking level has a fixed capacity (the “resource”).  
2. **Dynamic demand** – cars arrive and depart at random times (a stochastic process).  
3. **Latency objective** – we want to minimize the time from arrival to exit, which is the *latency* metric in many systems.

### Why the solution must be hierarchical

- **First‑level allocation**: When a car arrives, the system needs an O(1) way to know where space exists.  
  This is exactly what a *bitmap* or *segment tree* provides: each node represents a contiguous block of spots; querying “is there any free spot in this subtree?” takes logarithmic time.

- **Second‑level routing**: Once a slot is chosen, the car must be moved to it without colliding with others.  
  This is analogous to **scheduling** in operating systems: we need a lock or token that guarantees exclusive access to a lane/door, preventing deadlock (two cars trying to swap spots).

### The hidden insight

Most interviewees focus on *how* to find a free spot; they miss the **probabilistic balance** between levels.  
If every arrival always goes to the lowest available level, higher levels become saturated early, forcing later arrivals into longer routes—this is a *hotspot problem*.  
The optimal policy is to maintain an **expected occupancy ratio** across all levels (e.g., keep each level at ~70 % capacity). This mirrors load‑balancing in distributed systems: keeping queues short everywhere yields lower maximum latency than simply filling one queue to the brim.

### Bottom line

Designing a parking garage is essentially designing a **distributed resource allocator with low contention**.  
It forces you to think about data structures that give fast allocation, concurrency control that avoids deadlock, and a probabilistic strategy that keeps latency bounded—a microcosm of many real‑world systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

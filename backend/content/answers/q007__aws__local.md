---
qid: q007__aws__local
question: How does the A* search algorithm work?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 626
total_tokens: 865
web_searches: 0
cost_usd: 0.0
sources: []
---

**Answer – Amazon Way**

**Situation & Task (Customer Obsession, Ownership)**  
In my last role I led the “Route‑Optimizer” feature for our logistics app. Customers complained that delivery estimates were off by up to 30 % because the algorithm didn’t consider real‑time traffic. I owned the solution: implement A* to compute shortest, most reliable routes.

**Action (Dive Deep, Bias for Action)**  
1. **Requirements** – Route must minimize *expected travel time* (cost = distance × traffic factor) and respect hard constraints (vehicle capacity, delivery windows).  
2. **Design** –  
   * **Graph model**: vertices = road intersections; edges = road segments with dynamic weight `w = length / speed_limit * traffic_factor`.  
   * **Heuristic** `h(n)` = straight‑line distance to destination ÷ average highway speed (admissible, never overestimates).  
   * **Priority queue** – binary heap in Go (`container/heap`) for O(log n) push/pop.  
   * **Parallelism** – spawn multiple goroutines per city; each runs A* on its sub‑graph and returns best path segment.  
3. **AWS Services** –  
   * **Amazon RDS (PostgreSQL)** to store road network and traffic snapshots.  
   * **AWS Lambda** + **Step Functions** orchestrate parallel A* workers, scaling up to 200 concurrent invocations.  
   * **DynamoDB** for caching pre‑computed routes; read‑through with TTL of 5 min to keep cost low while ensuring freshness.  

4. **Scalability & Cost** – Lambda’s pay‑per‑execution model kept compute costs < $0.02 per route, a 70 % reduction vs the previous Java microservice that ran on EC2 (≈ $0.12/route).  
5. **Testing & Metrics** – Benchmarked against ground truth: average error dropped from 30 % to **7 %** in production; latency ≤ 120 ms for 95 % of requests.

**Result (Deliver Results, Learn from Failure)**  
The new A*‑based optimizer increased on‑time deliveries by **12 %**, reduced customer support tickets by 40 %, and cut operational costs by $150k annually. After a brief rollback caused by an edge case in traffic data ingestion, I instituted automated validation of traffic snapshots before route recomputation—an example of learning from failure.

---

*Key takeaways:* A* is a best‑first search that expands nodes based on `f(n) = g(n)+h(n)`; with an admissible heuristic it guarantees optimality. In practice, coupling it to scalable serverless compute and caching yields high performance at low cost—exactly the balance Amazon looks for.

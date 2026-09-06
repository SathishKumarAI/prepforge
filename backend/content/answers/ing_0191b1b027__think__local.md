---
qid: ing_0191b1b027__think__local
question: Which Pattern Should You Choose? — Design Load Balancer | System Design
  Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 486
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:49:49-05:00'
sources: []
---

**1. Clarify the problem & assumptions**  
   - What exactly is “load balancer” here? (HTTP traffic vs. data‑pipeline jobs?)  
   - Are we focusing on latency, throughput, fault tolerance, or cost?  
   - Do we need horizontal scaling, stateful sessions, or simple round‑robin?  
   - Assume typical cloud infra (EC2/Containers) and a modest traffic load to keep the design tractable.

**2. Adopt a mental model / framework**  
   - Use the classic “scalable system” layers: *client → load balancer → application tier → data tier*.  
   - Apply the CAP & PACELC trade‑offs for consistency vs. latency when deciding routing logic.  
   - Map common patterns (Round Robin, Least Connections, Sticky Sessions, Weighted) to the problem’s constraints.

**3. Step‑by‑step reasoning toward the answer**  
   1. Enumerate all candidate patterns.  
   2. For each pattern, list pros/cons relative to the clarified goals.  
   3. Rank them by how many goals they satisfy and penalize for trade‑offs (e.g., sticky sessions hurt scaling).  
   4. Pick the highest‑scoring pattern; note any hybrid approach (e.g., weighted round robin + health checks).

**4. Common traps to avoid**  
   - Overlooking *stateful* requirements that invalidate simple stateless patterns.  
   - Assuming “most popular” pattern is always best—context matters.  
   - Neglecting failure scenarios: what if a node dies mid‑request?  
   - Forgetting about *health checks* and *failover* mechanisms.

**5. Sanity‑check & verbalize the choice**  
   - Verify that the chosen pattern meets latency, throughput, and fault‑tolerance targets.  
   - Explain how it integrates with other layers (e.g., health‑check endpoints for EC2).  
   - Present a quick “why not X” argument for alternatives to show you considered them.  

By following this structured thought process, you’ll arrive at a defensible design choice and be able to articulate it clearly in an interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

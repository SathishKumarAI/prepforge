---
qid: ing_b3d1cca166__fp__local
question: 'Explain: Table of System Design Interview Problems'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 400
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:26:25-05:00'
sources: []
---

**Why a “Table of System‑Design Problems” is essential**

In a system‑design interview the interviewer tests *problem decomposition* and *trade‑off reasoning*.  
The space of possible questions is enormous, yet most candidates repeatedly hit the same stumbling blocks: missing scalability constraints, ignoring consistency models, or over‑engineering latency.  
By arranging problems in a table—rows for **core concepts** (e.g., caching, sharding, fault tolerance) and columns for **difficulty levels** (beginner → advanced)—we create a *basis* that mirrors the underlying optimization problem: *maximize utility under resource constraints*.  

Each cell represents a minimal instance of a design challenge that forces the candidate to apply a particular principle:

| Core Concept | Sample Problem |
|--------------|----------------|
| Caching | “Design an in‑memory cache for a high‑traffic news site.” |
| Sharding | “Partition user data across 100 nodes while preserving ACID guarantees.” |

**Derivation**  
1. **Identify primitives**: latency, throughput, consistency, cost.  
2. **Map each problem to a primitive** that must be balanced.  
3. **Quantify constraints** (e.g., 99.9 % availability) so the candidate can formulate an objective function.  

**Non‑obvious insight**  
Candidates often treat problems as *black boxes* and choose a single pattern. The table, however, forces them to recognize that many problems are *equivalent under a change of variables*: a cache for session data is mathematically identical to a CDN edge cache if you swap the key‑value store with a content store. This abstraction lets interviewers assess whether a candidate can see beyond surface details and solve the *core* optimization problem, which is what real production systems demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

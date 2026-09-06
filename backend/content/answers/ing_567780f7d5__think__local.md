---
qid: ing_567780f7d5__think__local
question: 'Explain: Availability patterns — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 655
total_tokens: 880
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:42:48-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**  
- The question asks *“Explain: Availability patterns”* as presented in the “system‑design‑primer” GitHub repo.  
- Assume the reader knows basic reliability concepts (MTBF, MTTR) but not the specific patterns.  
- Focus on the four canonical availability models highlighted in the primer: **Active‑Passive, Active‑Active, Multi‑Region/Geo‑Redundant, and Hybrid (e.g., Circuit Breaker + Retry)**.

**2️⃣ Mental model / framework**  
Use a *“fault‑tolerance ladder”* structure:  
1. Simple redundancy → 2. Load‑balanced redundancy → 3. Geographic separation → 4. Intelligent fault isolation.  
Map each pattern onto one rung, explaining the trade‑offs (cost, complexity, consistency).

**3️⃣ Step‑by‑step reasoning**  

| Pattern | How it works | Typical use‑case | Pros | Cons |
|---------|--------------|-----------------|------|------|
| **Active‑Passive** | One live node; standby copies data; failover on failure. | Databases (e.g., PostgreSQL streaming replication). | Simple, low cost. | Single point of failure until switchover; slow recovery. |
| **Active‑Active** | Multiple nodes share load and replicate in real time. | Web services (AWS ELB + EC2). | High throughput & fault tolerance. | Data consistency challenges; more expensive. |
| **Multi‑Region/Geo‑Redundant** | Nodes spread across regions with asynchronous replication. | CDN edge caches, global SaaS. | Low latency for all users; disaster recovery. | Higher cost; eventual consistency. |
| **Hybrid (Circuit Breaker + Retry)** | Combines local retries with fallback to alternate services. | Microservices communication. | Keeps system responsive while protecting downstream services. | Requires careful tuning of thresholds. |

Walk through each row: describe the failure scenario, how traffic is rerouted, and what guarantees (e.g., *“eventual consistency”* vs *“strong consistency”*) apply.

**4️⃣ Common traps to avoid**  
- Mixing “availability” with “performance”; emphasize that availability is about uptime, not speed.  
- Forgetting the *CAP theorem*: you can’t have strong consistency, high availability, and partition tolerance all at once in a distributed system.  
- Over‑promising failover time; be explicit about MTTR expectations.

**5️⃣ Sanity‑check & communicate out loud**  
- Ask: “Does each pattern solve a distinct failure mode?” If yes, you’re on track.  
- Explain it as if teaching a junior engineer: start with the simplest model, then layer complexity.  
- Conclude by summarizing trade‑offs: *“Choose Active‑Passive for low cost and simple recovery; pick Active‑Active when throughput matters; go geo‑redundant for global resilience; use hybrid patterns to protect inter‑service calls.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

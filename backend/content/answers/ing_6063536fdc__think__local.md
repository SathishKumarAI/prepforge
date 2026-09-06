---
qid: ing_6063536fdc__think__local
question: 'Explain: Availability in parallel vs in sequence — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 432
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:23:22-05:00'
sources: []
---

**1️⃣ Clarify & Assume**  
First ask: *What exactly is meant by “availability in parallel vs in sequence”?* I’ll assume it refers to how a distributed system guarantees that its services stay reachable when requests are processed concurrently (parallel) versus one after another (sequential). Also presume the context is large‑scale, fault‑tolerant design like in the GitHub repo.

**2️⃣ Mental Model / Framework**  
Use the classic *CAP* and *Paxos/Raft* lens:  
- **Parallel availability** → multiple replicas handle traffic simultaneously; consistency may be relaxed (Eventual).  
- **Sequential availability** → a single “leader” processes all requests in order; stronger consistency but potential bottleneck.

Add the *Availability–Latency trade‑off*: parallel can reduce latency, sequential can increase it but simplifies state management.

**3️⃣ Step‑by‑Step Reasoning**  
1. Define *availability* (service up + correct response).  
2. Contrast *parallel* (sharding, load balancing, read replicas) vs *sequential* (leader‑follower, consensus).  
3. Explain how each handles failures: in parallel, a node drop still leaves others; sequential needs failover to new leader.  
4. Discuss impact on latency, throughput, and consistency guarantees.  

**4️⃣ Common Traps**  
- Mixing up *availability* with *performance*.  
- Assuming parallel always means better availability; ignoring quorum requirements.  
- Forgetting that “parallel” can still be sequential internally (e.g., micro‑tasks in a thread pool).

**5️⃣ Sanity‑Check & Communicate**  
Rephrase the answer back to yourself: “Parallel keeps many nodes alive at once, trading consistency for uptime; sequential centralizes control, simplifying state but risking single‑point latency.” If that sounds right, you’re good. Then present it concisely, using bullet points or a diagram if possible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

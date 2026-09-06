---
qid: ing_8268c3bfaa__fp__local
question: 'Explain: Clarifying Requirements — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 407
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:42:38-05:00'
sources: []
---

**Why we start by clarifying requirements**

In a system‑design interview the *problem statement* is only a **surface description**; underneath it lies an optimization problem: *deliver instant, reliable messaging to millions of users with minimal latency and maximal availability*.  
To solve that, we must first formalize what “instant”, “reliable” and “millions” actually mean for the system. That is why interviewers ask you to **clarify requirements**—you’re translating vague business goals into concrete constraints that guide every design decision.

1. **Identify core use‑cases** (one‑to‑one, group chats, media transfer).  
2. **Quantify scale**: peak users per second, message size, throughput.  
3. **Define SLAs**: latency (≤ 200 ms), MTTR for outages, data durability.  
4. **Determine failure modes**: network partitions, device loss, DDoS.

Each of these items is a *constraint* that turns an abstract problem into a constrained optimization task: minimize cost while satisfying latency and availability constraints.

---

### One non‑obvious insight

Many candidates treat “availability” as simply “always online”. In reality, **availability is about *consistency* under partition**. WhatsApp’s design deliberately accepts eventual consistency for message delivery (allowing temporary out‑of‑order messages) to keep the system highly available during network splits—a direct application of the CAP theorem. Clarifying whether strict ordering is required or can be relaxed dramatically changes the architecture: a fully consistent store would need synchronous replication, hurting latency; an eventually consistent one can use asynchronous queues and gossip protocols, achieving higher throughput.

By rigorously deriving these constraints from first principles, you not only satisfy interviewers but also uncover the true trade‑offs that make WhatsApp scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_122f0499b3__think__local
question: 'Explain: Software Failures — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 378
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:55:08-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   * Define “software failures” in this context (bugs, crashes, hangs).  
   * Assume a distributed system with multiple replicas and a load‑balancer.  
   * Decide whether we’re focusing on *availability* as an SLA metric or as a design goal.

**2️⃣ Adopt a mental model / framework**  
   * Use the **SRE Availability Triangle**: uptime, latency, error budget.  
   * Map to classic reliability concepts (MTTF, MTTR, RPO).  
   * Think in terms of *failure modes* → *impact* → *mitigation*.

**3️⃣ Step‑by‑step reasoning**  
   1. Identify common failure causes: resource exhaustion, network partitions, race conditions.  
   2. For each cause, ask: “What’s the observable effect on availability?”  
   3. Translate effects into design countermeasures (e.g., circuit breakers, graceful degradation).  
   4. Quantify how each measure improves uptime or reduces MTTR.

**4️⃣ Common traps to avoid**  
   * Mixing up *availability* with *performance* or *security*.  
   * Over‑engineering: adding many layers of redundancy when a simple retry logic suffices.  
   * Forgetting that higher availability often means more complex failure handling, which itself can introduce bugs.

**5️⃣ Sanity‑check & verbalize**  
   * Verify that each mitigation step logically follows the identified failure cause.  
   * Summarize: “If X fails → Y happens; we mitigate by Z, reducing downtime from A to B.”  
   * Practice explaining this chain aloud to ensure clarity and catch any logical gaps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

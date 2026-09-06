---
qid: ing_2f3c4ce0cd__think__local
question: 'Explain: When You Need It — Durable Execution'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 397
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:47:30-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   *What “durable execution” means in your context?*  
   - Is it about ensuring a job completes even after failures (e.g., retries, checkpoints)?  
   - Or about maintaining state across restarts (stateful services)?  
   Assume you’re working with cloud‑native workloads where transient failures are common.

**2️⃣ Adopt the “Fault‑Tolerant Design” framework**  
   *Three pillars:*  
   1. **Redundancy** – multiple instances, load balancing.  
   2. **State preservation** – checkpoints or external state stores (e.g., DynamoDB, Redis).  
   3. **Recovery logic** – idempotent operations, retry policies.

**3️⃣ Reason through use‑cases step by step**  
   a. Identify the critical operation that must not be lost.  
   b. Map failure modes (network drop, node crash).  
   c. Decide on a checkpoint strategy: before/after each micro‑step?  
   d. Implement idempotency: can you run the same step twice without harm?  
   e. Test with controlled failures to confirm recovery.

**4️⃣ Avoid common pitfalls**  
   - *State leakage:* forgetting to persist state leads to duplicate work.  
   - *Over‑retrying:* endless loops if termination conditions aren’t clear.  
   - *Complexity creep:* adding durability where a simple retry suffices can over‑engineer.

**5️⃣ Sanity‑check & verbalize**  
   - **Ask:** “If the machine dies mid‑step, will we lose progress?”  
   - **Explain aloud:** Outline the flow from start → checkpoint → failure → resume.  
   If you can describe it in plain language, the design is sound.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

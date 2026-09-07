---
qid: ing_efe8080cc9__faang__local
question: 'Explain: Non-Blocking Queue Implementation — Blocking vs Non-Blocking Queue'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 498
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:57:12-05:00'
sources: []
---

**Clarify**  
You’re asking about *blocking* versus *non‑blocking* queues in concurrent ML pipelines (e.g., producer‑consumer buffering). I’ll assume we need thread‑safe FIFO semantics, bounded capacity for back‑pressure, and minimal latency.

**Approach**  
1. Define the interface (`push`, `pop`).  
2. For **blocking**, use a mutex + condition variables; producers wait when full, consumers wait when empty.  
3. For **non‑blocking**, employ lock‑free data structures (e.g., ring buffer with atomic indices) or use concurrent queues from libraries (TBB, Folly).  
4. Compare throughput and latency under bursty load.

**Depth**  
*Blocking Queue*:  
- `push(item)` locks mutex; if size==cap, `cv.wait()` until space frees.  
- `pop()` similarly waits on empty.  
- Complexity: O(1) amortized but blocking can serialize threads, hurting throughput when producers/consumers are imbalanced.

*Non‑Blocking Queue*:  
- Circular buffer with atomic head/tail indices; use compare‑and‑swap (CAS).  
- Producers increment tail atomically; if `(tail+1)%cap == head`, the queue is full—return failure or spin.  
- Consumers read from head, advance head atomically.  
- No locks → true parallelism; but can suffer from ABA problems and requires careful memory ordering.

**Edge Cases**  
- Full/empty conditions: blocking queues block forever if no consumer/producers; non‑blocking must retry or drop.  
- Memory reclamation in lock‑free queues (hazard pointers).  
- Thread starvation with many producers vs few consumers.

**Optimize & Communicate**  
- Use *bounded* lock‑free queues for predictable latency; fall back to blocking when throughput is critical and back‑pressure needed.  
- Profile under realistic ML workloads: e.g., batch size 64, GPU consumer.  
- Explain trade‑offs: blocking queues simpler, safer but higher contention; non‑blocking offers lower latency but complex correctness guarantees.

This structure shows clear problem framing, a step‑by‑step plan, technical depth with complexity analysis, edge‑case awareness, and an optimization narrative—all key for FAANG interview success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

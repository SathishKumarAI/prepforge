---
qid: ing_c3ed95f33c__fp__local
question: 'Explain: Step 2: Create a high level design — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 213
output_tokens: 540
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:58:42-05:00'
sources: []
---

**Step 2 – “Create a high‑level design”**  
At its core, the interview is asking you to *optimize* for three competing dimensions: **throughput**, **latency**, and **cost** while maintaining **correctness**. The first half of the conversation (problem scoping) isolates the constraints; the second half must show how you’ll satisfy them.

1. **Identify the core sub‑systems**  
   - *Data ingestion* (API, queue, stream)  
   - *Processing/compute* (stateless workers vs. stateful services)  
   - *Storage* (relational vs. NoSQL, caching layers)  
   - *Serving layer* (CDN, load balancer)

   Each choice is a trade‑off: e.g., a relational DB guarantees ACID but hurts write latency; a cache improves read latency at the cost of consistency.

2. **Lay out data flow as a directed acyclic graph**  
   This reveals bottlenecks early. If two services both write to the same table, you’ll need conflict resolution or eventual consistency guarantees—an optimization that may be overlooked otherwise.

3. **Decouple with message queues**  
   The principle of *bounded‑latency* says: “If a component can’t meet its SLA, isolate it.” A queue buffers spikes and lets downstream services scale independently. That’s why many high‑scale designs include Kafka or SQS between ingestion and processing.

4. **Add observability hooks**  
   Metrics, traces, and logs are the “feedback loop” of any system. Without them you can’t prove your design meets its constraints; with them you can quantify trade‑offs (e.g., how many replicas needed to keep latency < 200 ms).

5. **Iterate on a single diagram**  
   Draw once, then refine by swapping one component at a time and recalculating the three metrics. This demonstrates that your design isn’t just “good enough” but *optimal* under the given constraints.

### Non‑obvious insight  
Most interviewers focus on components; few ask you to **prove** why each is necessary. By framing every choice as a mathematical optimization (e.g., minimizing \(L + \lambda C\) where \(L\) = latency, \(C\) = cost, \(\lambda\) = weight), you turn the conversation into a rigorous argument rather than a vague sketch—exactly what top‑tier engineers do in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

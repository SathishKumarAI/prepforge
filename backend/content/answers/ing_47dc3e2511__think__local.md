---
qid: ing_47dc3e2511__think__local
question: 'Explain: Latency vs throughput — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 426
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:13:22-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- *Goal*: Explain the difference between **latency** and **throughput** in ML system design (e.g., inference pipelines).  
- *Assumptions*: The reader knows basic networking terms, is familiar with ML workloads, and wants a concise yet complete picture for interview prep.

**2️⃣ Adopt a mental model**  
Treat the system as a *pipeline* of stages: data ingestion → preprocessing → model execution → post‑processing.  
- **Latency** = time taken to process one unit (e.g., one request).  
- **Throughput** = number of units processed per unit time (requests/second).

**3️⃣ Step‑by‑step reasoning**  
1. Define each metric formally.  
2. Map each pipeline stage’s contribution to latency.  
3. Show how batching or parallelism increases throughput while possibly increasing latency.  
4. Highlight trade‑offs: low latency → fewer concurrent requests; high throughput → larger batches, higher memory, possible queuing delays.

**4️⃣ Common traps to avoid**  
- Confusing *average* vs *worst‑case* latency.  
- Assuming higher throughput always means better performance—ignore user QoS requirements.  
- Mixing up “throughput of a single machine” with system‑wide throughput (distributed scaling).

**5️⃣ Sanity‑check & verbalize**  
- Verify units: ms for latency, req/s or ops/sec for throughput.  
- Use a concrete example (e.g., image classification API) to illustrate how changing batch size shifts the trade‑off curve.  
- Summarize: *Latency* is about *speed per request*, *throughput* is about *volume processed over time*. This dual perspective aligns with the design‑primer’s emphasis on balancing performance goals in large‑scale ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

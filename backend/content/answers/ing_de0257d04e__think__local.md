---
qid: ing_de0257d04e__think__local
question: 'Explain: Performance vs scalability — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 412
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:38:13-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- Identify what “performance” and “scalability” mean in ML context (latency, throughput vs. ability to handle larger data / users).  
- Assume we’re talking about a deployed model/service rather than training phase.  

**2️⃣ Choose a mental framework**  
- *Performance* = per‑request speed & resource usage.  
- *Scalability* = how performance degrades (or not) as load or data size grows.  
- Map to system design concepts: bottlenecks, horizontal vs vertical scaling, caching, sharding, load balancing.

**3️⃣ Step‑by‑step reasoning**  
1. List the common ML service layers (data ingestion → preprocessing → inference → post‑processing).  
2. For each layer, pinpoint latency contributors and resource constraints.  
3. Consider how adding more requests or larger models changes those contributors.  
4. Evaluate horizontal scaling options (model replicas, edge deployment) versus vertical (GPU upgrades).  
5. Relate trade‑offs: higher performance may mean less scalability if you’re bound to a single powerful GPU.

**4️⃣ Avoid common traps**  
- Don’t conflate “fast” with “scalable”; a single fast instance can still choke under load.  
- Beware of over‑optimizing micro‑latency at the expense of throughput.  
- Remember that training scalability (data parallelism) is different from inference scalability.

**5️⃣ Sanity‑check & verbalize**  
- Ask: “If I double the user base, will latency stay constant?” If not, identify which component breaks.  
- Explain the difference using a simple analogy (e.g., a single fast road vs. many parallel roads).  

By following these steps you can dissect any ML system’s performance‑scalability trade‑offs and articulate them clearly in an interview or design document.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

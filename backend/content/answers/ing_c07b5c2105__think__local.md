---
qid: ing_c07b5c2105__think__local
question: 'Explain: Notes — Which Latency Numbers Should You Know?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 477
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:39:10-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**

- *What is “latency” in ML?*  
  Distinguish between **inference latency**, **training time per batch**, and **data‑loading latency**.  
- *Audience level:* Assume readers know basic ML pipelines but not deployment metrics.  
- *Context:* Mention common platforms (cloud, edge) because numbers vary widely.

**2️⃣ Choose a mental model**

Use the **Latency Pyramid**:  
1. *Raw data → preprocessing*  
2. *Model inference*  
3. *Post‑processing & I/O*  

Each layer has its own latency targets; treat them as separate but interdependent components.

**3️⃣ Step‑by‑step reasoning**

a. **Identify critical use cases** (real‑time vs batch).  
b. **Define SLA requirements** (e.g., < 50 ms for autonomous driving, < 1 s for recommendation systems).  
c. **Measure each layer**:  
   - *Data‑loading latency*: time to fetch/stream data.  
   - *Preprocessing latency*: feature extraction or image resizing.  
   - *Inference latency*: GPU/CPU forward pass.  
   - *Post‑processing latency*: decoding, formatting outputs.  
d. **Aggregate** (usually sum) to get total end‑to‑end latency.  
e. **Benchmark against SLA**; if above target, identify bottlenecks and iterate.

**4️⃣ Common traps**

- Confusing *batch latency* with *per‑sample latency*.  
- Ignoring I/O or network delays that dominate in edge deployments.  
- Assuming model size ≈ latency; actual throughput matters too.  
- Reporting only “average” latency—outliers can break real‑time systems.

**5️⃣ Sanity‑check & communicate**

- Cross‑validate with a simple test case (e.g., MNIST inference on CPU vs GPU).  
- Present numbers as ranges, not single points, to account for variability.  
- Use visual aids: bar charts or waterfall diagrams showing each component’s contribution.  

By following this structured approach, you’ll know *which* latency metrics matter and *why* they should be reported.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

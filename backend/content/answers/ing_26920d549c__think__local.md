---
qid: ing_26920d549c__think__local
question: 'Explain: AI-native and infrastructure — Company Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 480
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:13:00-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *What is “AI‑native” exactly?* (built from the ground up for ML workloads) vs *“infrastructure”* (hardware, networking, storage).  
- *Which interview context?* Are we talking about hiring a data‑engineer, platform engineer, or senior architect?  
- Assume the interviewer wants to gauge depth of design thinking and practical trade‑offs.

**2️⃣ Adopt a layered mental model**  
- **Application layer** (models, pipelines) → **Platform layer** (Kubernetes, ML ops tools) → **Infrastructure layer** (compute, GPU, network, storage).  
- Map “AI‑native” to choices that span all three layers: e.g., using managed Kubernetes + GPU nodes + model‑aware autoscaling.

**3️⃣ Step‑by‑step reasoning**  
1. Identify the key performance drivers for AI workloads (GPU compute, data throughput, low‑latency inference).  
2. Enumerate infrastructure components that satisfy those drivers (elastic GPU fleets, NVMe SSDs, high‑speed interconnects).  
3. Show how platform tools (Kubeflow, Airflow) expose these resources to the application layer in a “native” way—abstracting away cluster plumbing.  
4. Discuss trade‑offs: cost vs performance, vendor lock‑in vs portability.

**4️⃣ Common traps to avoid**  
- *Over‑emphasizing hardware*: forget that software abstractions (e.g., pod autoscaling) are equally AI‑native.  
- *Assuming one size fits all*: different workloads (training vs inference) need different infra patterns.  
- *Mixing terminology*: “AI‑native” can mean “built for AI” or “native to the platform”; clarify.

**5️⃣ Sanity‑check & verbalize**  
- Ask yourself: Does each layer logically support the next?  
- Summarize by linking a concrete example (e.g., a real‑time recommendation system) back to the three layers.  
- Practice explaining how you would evolve the stack if traffic doubles—this demonstrates foresight and architectural depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

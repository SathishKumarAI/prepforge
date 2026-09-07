---
qid: ing_1f5f5f672c__faang__local
question: 'Explain: So what do you do? One of — System Design BASICS: Horizontal vs.
  Vertical Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 431
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:57:45-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of *horizontal* versus *vertical* scaling in the context of ML workloads (e.g., training pipelines or inference serving). I’ll confirm: “You’re asking about scaling for model training vs. production inference, and whether we’re considering on‑prem or cloud resources?”  

**Approach**  
1. Define each scaling strategy.  
2. Map them to typical ML stages.  
3. Highlight trade‑offs (cost, complexity, latency).  

**Depth**  
- **Vertical Scaling (Scale‑Up)**: Increase CPU/GPU count, memory, or disk per node. Good for single‑node training jobs that are tightly coupled; simpler configuration, no sharding logic. Downside: hardware limits and higher per‑unit cost.  
- **Horizontal Scaling (Scale‑Out)**: Add more worker nodes—data parallelism for training (e.g., TensorFlow MirroredStrategy) or request routing for inference (load balancers + stateless containers). Handles larger datasets, offers fault isolation, and can be autoscaled in cloud environments. Requires distributed coordination (parameter servers, sync/async ops), but yields linear throughput up to the network bottleneck.  

**Edge Cases**  
- *GPU memory*: vertical scaling hits GPU RAM limits for large models; horizontal may require model partitioning or sharding.  
- *Stateful workloads*: inference with session state is harder to distribute horizontally.  
- *Cost spikes*: vertical scaling can lead to under‑utilized expensive hardware if load fluctuates.  

**Optimize & Communicate**  
I’d suggest a hybrid: start with vertical scaling for prototyping, then migrate to horizontal using container orchestration (K8s) and managed services (SageMaker, Vertex AI). Emphasize monitoring (latency, throughput) and autoscaling policies. This demonstrates a clear trade‑off analysis and an actionable migration path—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

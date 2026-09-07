---
qid: ing_99ae1d9f9b__aws__local
question: 'Explain: Previous Work — GitHub - zai-org/CogAgent: An open-sourced end-to-end
  VLM-based GUI Agent \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 426
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:13:10-05:00'
sources: []
---

**Situation / Task**  
I led the refactor of *CogAgent*—an open‑source VLM‑based GUI agent that translates user prompts into UI actions. The repo had 12 K lines, slow inference (≈8 s per request), and poor fault tolerance when running on a shared GPU cluster.

**Action**  
1. **Ownership & Dive Deep** – I profiled CPU/GPU usage with *nvprof* and discovered that the image encoder was bottlenecked by an eager‑mode PyTorch pipeline.  
2. Rewrote the inference loop in **TorchScript** and deployed it as a stateless Lambda layer, exposing the model via an API Gateway endpoint.  
3. Added a **SQS queue** to buffer incoming requests; each message triggers an EC2 Spot instance that pulls the latest container from ECR.  
4. Implemented **CloudWatch Alarms** for latency spikes and auto‑scales the spot fleet based on 95th percentile metrics, keeping cost < $0.03/req while guaranteeing 99.9% availability.

**Result**  
- Latency dropped from 8 s to **1.2 s** (≈84 % reduction).  
- Throughput increased from 20 req/s to 150 req/s, scaling linearly with the spot fleet.  
- Operational cost fell by **70 %**, and we logged a 99.9 % success rate over 30 days.

**Learnings**  
The biggest failure was assuming a single GPU would suffice; profiling revealed hidden memory thrashing. By treating the model as an immutable artifact in Lambda, I gained “single‑point‑of‑truth” control and simplified CI/CD. This experience reinforces *Customer Obsession* (fast, reliable service) and *Bias for Action* (quick, data‑driven pivots).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

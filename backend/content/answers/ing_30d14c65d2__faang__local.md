---
qid: ing_30d14c65d2__faang__local
question: 'Explain: Terminologies — Latency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 599
total_tokens: 829
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:37:55-05:00'
sources: []
---

**1️⃣ Clarify**  
*Question*: “Explain the term *latency* in machine‑learning contexts.”  
Assumptions I’d confirm:  
- Are we talking about inference latency, training latency, or data‑pipeline latency?  
- What is the target audience (engineers vs. product managers)?  
- Is there a specific use case (real‑time recommendation, autonomous driving, batch analytics)?

**2️⃣ Approach**  
I’ll define latency, distinguish its flavors, relate it to ML workloads, then illustrate with an example and trade‑offs.

**3️⃣ Depth**  

| Type | Definition | Typical Units | Impact on ML |
|------|------------|--------------|-------------|
| **Inference Latency** | Time from receiving a request to returning a prediction. | ms – s | Determines user experience (e.g., recommendation click‑through). |
| **Training Latency** | Duration of one training epoch or full model convergence. | min – days | Affects model iteration speed and resource cost. |
| **Data‑Pipeline Latency** | Time to ingest, preprocess, and store data before it reaches the learner. | ms – hours | Influences freshness of models (e.g., fraud detection). |

*Example*: An online ad platform wants < 50 ms inference latency for click‑prediction. A 1‑Billion‑parameter transformer would exceed this; we might use model distillation or a lower‑ranked LightGBM model.

**Trade‑offs**  
- **Accuracy vs. Latency**: Larger models → higher accuracy but more latency.  
- **Hardware vs. Software**: GPUs/TPUs reduce inference time but increase cost; quantization or pruning can help on CPUs.  
- **Batching**: Grouping requests reduces per‑sample overhead but increases wait time.

**4️⃣ Edge Cases**  
- *Cold start*: First request after deployment incurs extra latency due to loading weights into memory.  
- *Skewed workloads*: Some queries may trigger heavy preprocessing, inflating latency.  
- *Distributed inference*: Network hops can dominate latency even if compute is fast.

**5️⃣ Optimize & Communicate**  

1. **Profile**: Measure where time is spent (data load, pre‑proc, model forward).  
2. **Quantize / Prune**: Reduce model size without significant accuracy loss.  
3. **Edge inference**: Deploy lightweight models on user devices to eliminate network latency.  
4. **Asynchronous pipelines**: Pre‑compute predictions for popular inputs.

When presenting this to stakeholders, I’d start with a clear definition, show the latency budget diagram, and then walk through the optimization roadmap, highlighting expected speedups and cost trade‑offs. This structured narrative demonstrates deep understanding while keeping communication concise—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

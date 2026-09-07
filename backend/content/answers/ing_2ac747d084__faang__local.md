---
qid: ing_2ac747d084__faang__local
question: 'Q19: When would you use a small language model vs a frontier model?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 526
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:22:31-05:00'
sources: []
---

**Clarify**

The question asks *when* to choose a compact (e.g., 1–10 M parameters) language model over a large “frontier” model (hundreds of billions).  
Key assumptions:  
• Task type and domain (general chat vs. niche legal docs).  
• Latency, compute budget, and deployment environment (edge device vs. cloud).  
• Privacy or regulatory constraints that forbid sending data off‑premise.  

**Approach**

1. List the decision dimensions (latency, cost, accuracy, privacy).  
2. Map each dimension to model size characteristics.  
3. Prioritize the user’s most critical requirement and choose accordingly.

**Depth**

| Dimension | Small Model | Frontier Model |
|-----------|-------------|----------------|
| **Latency** | ~10 ms inference on a single core; suitable for real‑time UI or embedded systems. | 50–200 ms even on GPU clusters; may need batching or edge‑caching. |
| **Compute & Cost** | < 1 GPU hour per fine‑tune; negligible inference cost. | Requires multi‑GPU training, high inference bandwidth; cost can be orders of magnitude higher. |
| **Accuracy / Generality** | Good for narrow domains with strong domain‑specific fine‑tuning; performance degrades on open‑ended prompts. | State‑of‑the‑art on broad benchmarks; handles diverse topics and complex reasoning better. |
| **Privacy/Compliance** | Can run entirely on premises; no data leaves the device, meeting GDPR/health‑care rules. | Often requires cloud APIs; may violate privacy constraints unless using private instances. |

**Edge Cases**

*When latency is critical (e.g., voice assistants) but accuracy can be slightly lower.*  
*When the model must process highly confidential text and cannot leave the local network.*  
*When budgets are tight, a small model may still satisfy SLAs.*

**Optimize & Communicate**

Explain trade‑offs clearly: “If your primary goal is sub‑50 ms response on an edge device with no external traffic, we’ll pick a 5M‑parameter distilled model. If you need the absolute best performance on open‑ended queries and can afford GPU clusters, then a frontier model is justified.”  

This structured reasoning aligns with FAANG interview expectations: clear problem restatement, systematic decision framework, technical depth, edge‑case awareness, and concise communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_22c20f4c7a__faang__local
question: 'Explain: Tier 1 - cheap classifier on 100% of traffic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 427
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:05:08-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a *Tier‑1* solution that runs a **cheap classifier** on **all incoming traffic**.  
Assumptions I’d confirm:  
1. “Cheap” means minimal compute (e.g., a lightweight ML model or rule‑based filter).  
2. The traffic volume is high enough that latency and cost matter.  
3. We can afford to drop a small fraction of misclassifications downstream.

**Approach**  
1. **Feature extraction** – Pull the cheapest, most predictive features (e.g., request header flags, simple regex on URLs).  
2. **Model choice** – Use a linear model or decision tree with ≤10 features; can be served in memory or via a fast inference library.  
3. **Deployment** – Run it as a sidecar or lightweight micro‑service behind the load balancer to keep latency < 5 ms.  
4. **Monitoring & fallback** – Log confidence scores and route low‑confidence cases to Tier‑2 for deeper analysis.

**Depth**  
- *Complexity*: O(1) per request; memory footprint ~ few MB.  
- *Trade‑offs*: Lower accuracy but high throughput; acceptable if downstream layers can correct errors.  
- *Implementation detail*: Use a frozen ONNX model or even a compiled C++ decision tree for minimal overhead.

**Edge Cases**  
- Sudden traffic spikes could saturate the classifier → add auto‑scaling.  
- Novel inputs that fall outside training distribution → fallback to Tier‑2.  
- Feature drift over time → schedule periodic re‑training.

**Optimize & Communicate**  
Explain that this tier guarantees **zero latency impact** while keeping cost negligible, and that it serves as a *pre‑filter* so the expensive Tier‑2 only sees a reduced, higher‑confidence subset. This balances performance, cost, and reliability—exactly what FAANG teams prioritize.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

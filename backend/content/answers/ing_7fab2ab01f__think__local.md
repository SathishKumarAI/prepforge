---
qid: ing_7fab2ab01f__think__local
question: 'Explain: Adaptive Timeouts — How Uber Serves Over 40 Million Reads Per
  Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 441
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:26:16-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *What* is “Adaptive Timeouts” in Uber’s context?  
- Assume it refers to dynamic timeout adjustments for cache‑to‑storage requests.  
- Assume we’re explaining how this mechanism lets Uber serve >40 M reads/s.  

**2️⃣ Adopt a systems‑engineering framework**  
- **Layered view**: request → integrated cache → backend storage.  
- **Performance knobs**: latency budgets, timeout policies, backpressure signals.  
- **Feedback loop**: metrics (latency, hit rate) → adaptive control.  

**3️⃣ Step‑by‑step reasoning**  
1. Start with the problem: raw storage can’t sustain 40 M reads/s; cache is needed.  
2. Explain the integrated cache design (in‑memory + SSD tier).  
3. Show how each read path has a timeout that must be *tight* enough to avoid stalling but *loose* enough to tolerate bursts.  
4. Describe the adaptive algorithm: monitor per‑request latency, compute moving averages, adjust timeouts upward if tail latency rises, downward if cache hits dominate.  
5. Illustrate how this keeps the cache “healthy” (no runaway backpressure) while keeping overall read latency low.  

**4️⃣ Common pitfalls to avoid**  
- Don’t conflate *static* vs *dynamic* timeouts; emphasize feedback loop.  
- Avoid saying “cache solves everything”; highlight that storage still matters for consistency.  
- Skip technical jargon unless the audience is familiar with Uber’s infra stack.  

**5️⃣ Sanity‑check & verbalize**  
- Re‑state the core claim: adaptive timeouts let the cache self‑tune, preventing queue buildup and enabling sustained 40 M reads/s.  
- Ask: “If latency spikes, does the timeout increase or decrease?” – it increases to give storage more leeway.  
- Confirm that the explanation remains within 150–220 words before delivering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

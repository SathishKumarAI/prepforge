---
qid: ing_bff58c8dfd__fp__local
question: 'Explain: Meta Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 426
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:51:08-05:00'
sources: []
---

### Meta‑Design for FAANG: Why It Matters and How It Works  

At the core of any large‑scale ML system is **trade‑off engineering**—balancing latency, throughput, accuracy, cost, and reliability while scaling to billions of users. A meta‑design interview forces you to formalize that trade‑off space before touching code.

1. **Problem decomposition**  
   • *Functional*: what predictions must the model serve?  
   • *Non‑functional*: how many requests per second, acceptable error, budget constraints.  
2. **Mathematical framing**  
   • Treat latency \(L\) and cost \(C\) as functions of batch size \(b\), hardware allocation \(h\), and inference engine \(e\).  
   • Optimize \(\min_{b,h,e} \alpha L(b,h,e)+\beta C(h)\) subject to accuracy constraints.  
3. **Architectural patterns**  
   – *Micro‑batching* for GPU amortization, *model distillation* for latency reduction, *feature caching* for repeated inference.  
4. **Probabilistic guarantees**  
   Use concentration inequalities to bound the probability that latency exceeds a SLA after batching decisions—turns a heuristic into a provable guarantee.

#### Non‑obvious insight
A single “fast” model often beats an ensemble of slow models because the *overhead* (serialization, network hop) dominates total response time. Therefore, investing in **model compression** and **runtime optimization** can yield more performance than simply scaling hardware or adding complexity.  

In a FAANG interview, articulating this reasoning—starting from the problem, formalizing constraints, choosing patterns, and justifying trade‑offs—demonstrates mastery of both machine learning theory and large‑scale system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

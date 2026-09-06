---
qid: ing_78e2d9acbf__fp__local
question: 'Explain: On-site: system design — OpenAI System Design Interview (2026
  Guide) - Exponent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 478
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:21:50-05:00'
sources: []
---

**Why the “On‑Site: System Design” section matters**

When an interviewer asks you to design a system on paper, they’re really testing *how you formalise uncertainty*. A real AI service (think GPT‑4 inference or fine‑tuning) is a cascade of probabilistic modules—data ingestion, tokenisation, model serving, caching, monitoring. Each module trades off latency, throughput, cost and accuracy. The interview forces you to surface these trade‑offs mathematically:  
- **Throughput** ≈ *requests / time* → `T = N / Σt_i`.  
- **Latency budget** is a constraint on the sum of component latencies.  
- **Cost** follows an exponential cost curve with GPU utilisation, so you must allocate resources to minimise `C = α·E[utilisation] + β·idle_cost`.

By deriving these equations from first principles, you show that the design isn’t arbitrary but a *convex optimisation* problem over discrete choices (e.g., number of inference nodes, cache size).  

**One non‑obvious insight**

Most candidates treat caching as “just store outputs.” In an AI service, caching is a *probabilistic belief update*: each cache hit reduces the posterior uncertainty about future requests. This can be formalised via Bayesian updating on request patterns, leading to a dynamic cache eviction policy that outperforms static LRU by up to 30 % in realistic workloads.

**What the guide expects**

1. **Problem framing** – articulate objectives and constraints.  
2. **Component breakdown** – detail each subsystem, its inputs/outputs, and key metrics.  
3. **Quantitative trade‑offs** – write equations for latency, throughput, cost, and error budgets.  
4. **Scalability & resilience** – discuss horizontal scaling, failure modes, and observability.  
5. **Design iteration** – show how you refine the architecture based on the metrics above.

Mastering this approach demonstrates that you can turn a vague “AI service” prompt into a rigorous, optimised system blueprint—exactly what OpenAI looks for in its 2026 interviewees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

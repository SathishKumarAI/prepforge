---
qid: ing_7b6d5eaf08__think__local
question: How do you load test an LLM service so the numbers actually mean something?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 487
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:10:55-05:00'
sources: []
---

**1️⃣ Clarify & Set Assumptions**  
- Ask what “numbers” refer to (latency, throughput, cost, error rate).  
- Assume a cloud‑hosted LLM API with REST/GRPC endpoints and a known pricing tier.  
- Assume you have test harnesses (Locust, k6, JMeter) and monitoring tools (Prometheus, CloudWatch).

**2️⃣ Adopt a Structured Testing Framework**  
- **Load Test = Stress + Capacity + Stability**:  
  - *Stress* pushes beyond expected peak to see failure modes.  
  - *Capacity* finds the maximum sustainable QPS.  
  - *Stability* checks long‑term behavior (memory leaks, token limits).  

Use a *steady‑state* phase after ramp‑up for meaningful averages.

**3️⃣ Step‑by‑Step Reasoning**  
1. **Define Baseline** – run a small pilot to capture average latency, CPU, memory.  
2. **Choose Load Profile** – linear ramp → peak → steady → ramp‑down.  
3. **Measure Key Metrics** – request latency percentiles (p95/p99), error rate, throughput, cost per token.  
4. **Correlate with Pricing** – calculate cost = (#tokens × unit price) + infrastructure costs.  
5. **Iterate** – adjust concurrency, batch size, or prompt length; re‑measure.

**4️⃣ Avoid Common Traps**  
- Don’t mix *synthetic* and *real* workloads without normalization (prompt length matters).  
- Ignore cold starts if your service uses serverless functions—warm up first.  
- Assume 100% success; always capture failures and back‑off behavior.  

**5️⃣ Sanity‑Check & Communicate**  
- Cross‑validate latency against SLA targets.  
- Plot latency vs QPS to spot knee points.  
- Present results as: *“At 500 QPS, average latency is 120 ms (p99 = 250 ms) with a cost of $0.02 per request; beyond 800 QPS error rate spikes to 5%.”*  

This systematic approach ensures the numbers you report truly reflect real‑world performance and cost implications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_7b6d5eaf08__fp__local
question: How do you load test an LLM service so the numbers actually mean something?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 548
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:27:14-05:00'
sources: []
---

**Why “numbers” matter for an LLM service**

An LLM is a stochastic optimizer: each request samples from a conditional language distribution.  
The *true* quality of the service is therefore the expected latency, throughput and error probability under realistic traffic patterns.  If you only measure peak CPU or raw response time, you miss two things:

1. **Statistical stability** – the observed mean is just one draw from a random variable; without confidence intervals you can’t tell if a change improves performance.  
2. **Queueing dynamics** – LLM inference is highly nonlinear (GPU saturation, memory spills).  Load testing must expose the *critical point* where latency explodes.

**Design principles**

| Goal | Metric | How to measure |
|------|--------|----------------|
| Throughput | TPS (transactions per second) | Ramp‑up until 99th‑percentile latency > target. |
| Latency | 95th/99th percentile, mean | Record every request; compute CI via bootstrapping. |
| Errors | Failure rate | Count any non‑200 or malformed output. |
| Resource usage | GPU memory, CPU %, power | Sample at high frequency; correlate with latency spikes. |

**Procedure**

1. **Baseline traffic model** – use production logs to generate a realistic request mix (prompt length, temperature, batch size).  
2. **Ramp‑up** – start below expected peak, increase by 10 % every minute until saturation.  
3. **Steady‑state sampling** – once latency plateaus, collect ≥10⁶ samples for robust statistics.  
4. **Statistical analysis** – compute 95 % confidence intervals on percentiles; if the upper bound of the 99th percentile exceeds SLA, you’re overloaded.

**Non‑obvious insight**

Because LLMs are *memory‑bounded*, a single long prompt can dominate GPU memory and cause evictions that cascade to all other requests.  A load test that averages over many short prompts will hide this “cold‑start” effect.  Therefore always include a small fraction (≈5 %) of long prompts in every batch; otherwise you’ll be underestimating tail latency by up to an order of magnitude.

By grounding the test in statistical confidence, queueing theory, and the memory characteristics of transformers, the numbers you report truly reflect how the service behaves under real load.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_1218cb2951__fp__local
question: What do you monitor in production LLM serving, and what pages someone at
  3 a.m.?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 515
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:44:15-05:00'
sources: []
---

## What to monitor in production LLM serving

| Metric | Why it matters (first‑principles) |
|--------|-----------------------------------|
| **Latency & tail latency** | The inference pipeline is a stochastic process; the tail determines user‑perceived QoS. By modeling requests as an M/M/1 queue, we can bound the 95th‑percentile delay and detect bottlenecks before SLA breaches. |
| **Throughput / tokens per second** | Tokens are the unit of work; throughput is a direct measure of compute efficiency. Tracking it reveals under‑utilisation or capacity limits. |
| **Error & rejection rate** | Each failed request is a loss in information flow. The error probability *P(e)* bounds the mutual information between input and output, so a spike signals model drift or infrastructure fault. |
| **Resource utilisation (GPU/CPU memory)** | The transformer’s memory footprint grows as *O(n²)* with context length. Sudden spikes hint at runaway batch sizes or memory leaks that could crash the service. |
| **Output entropy / confidence distribution** | High‑confidence low‑entropy outputs often indicate hallucination. Monitoring mean token entropy provides an early warning of calibration drift without inspecting every response. |

## 3 a.m. sanity check

1. **Latency dashboard** – confirm tail latency is still below the SLA threshold.  
2. **Error rate spike** – if any, drill down to request patterns and model checkpoints.  
3. **GPU memory** – ensure no out‑of‑memory leaks; compare against expected *O(n²)* growth.  
4. **Entropy trend** – a sudden drop suggests the model is over‑confident (possible drift).  

### Non‑obvious insight

Output entropy is not just a curiosity—it’s an *information‑theoretic* proxy for hallucination risk. A steady rise in mean token entropy often precedes a spike in user‑reported nonsensical answers, giving operators a quantifiable early warning before qualitative symptoms surface.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_9fff44de8b__faang__local
question: 'Explain: No Rate Limiting — Anti Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 452
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:56:08-05:00'
sources: []
---

**Clarify**  
The interview asks why “no rate limiting” is an anti‑pattern in AI services (e.g., inference APIs, model training jobs). I’ll assume the context is public or shared resources where multiple users/clients may issue requests simultaneously and that the system has finite compute, memory, and network bandwidth.

**Approach**  
1. Identify what “rate limiting” means: throttling request frequency per client or globally.  
2. Map consequences of disabling it (resource starvation, QoS violations).  
3. Propose mitigation strategies (token buckets, priority queues, back‑pressure).  

**Depth**  
- **Resource contention:** Unlimited requests flood GPU/CPU memory; the scheduler cannot guarantee fair allocation → queue lengths grow, latency skyrockets.  
- **Quality of Service (QoS):** Clients expecting bounded response times suffer when others monopolize bandwidth or compute slots.  
- **Security & Abuse:** Attackers can launch denial‑of‑service attacks by sending millions of small inference calls; no limit means the service crashes or throttles legitimate traffic.  
- **Cost predictability:** Cloud providers bill per GPU‑hour; unbounded usage leads to unpredictable bills and potential budget overruns.  
Implementing a token bucket per user caps requests to *k* per minute, smoothing bursts while allowing bursty workloads. A global cap prevents overallocation of shared resources.

**Edge Cases**  
- **Burst tolerance:** Some workloads (e.g., batch inference) legitimately need high throughput; rate limits should be configurable.  
- **Fairness vs. priority:** High‑priority clients may need relaxed limits—requires a dynamic policy.  
- **Cold starts:** New users may get throttled unfairly if defaults are too aggressive.

**Optimize & Communicate**  
Explain trade‑offs: stricter limits reduce latency variance but may underutilize idle resources; looser limits improve throughput but risk starvation. Suggest adaptive algorithms that monitor queue lengths and adjust caps in real time. Finally, highlight that proper rate limiting preserves reliability, security, and cost control—key metrics for any AI platform at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

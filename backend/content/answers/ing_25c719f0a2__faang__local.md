---
qid: ing_25c719f0a2__faang__local
question: 'Explain: Two different latency numbers — Understanding latency | ElevenLabs
  Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 520
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:11:37-05:00'
sources: []
---

**Clarify**  
The question asks why a machine‑learning service (e.g., ElevenLabs TTS) reports *two* latency metrics: **“Request latency”** and **“Audio generation latency.”** I’ll assume the reader knows basic ML inference but not the internal pipeline of a cloud TTS system.

**Approach**  
1. Define each metric in plain terms.  
2. Map them to stages of an API call (network → server → model).  
3. Show why they differ and when each matters.  
4. Mention how clients can use them for SLA tuning.  

**Depth**  
| Metric | What it measures | Typical value range | When it matters |
|--------|------------------|---------------------|-----------------|
| **Request latency** | Time from client sends HTTP request to the server’s response header (often “200 OK”). Includes TCP handshake, TLS, routing, load‑balancer queuing. | 10 – 200 ms for a well‑proxied API. |
| **Audio generation latency** | Time spent inside the inference engine: tokenization → model forward pass → waveform synthesis. Does *not* include network overhead. | 50 – 300 ms per sentence, larger for long inputs or GPU‑cold starts. |

Why two numbers?  
- **Request latency** tells you about the *infrastructure* health (network, load balancer, autoscaling).  
- **Audio generation latency** reflects the *model’s computational cost* and can be improved by better hardware, quantization, or batching.

**Edge Cases**  
- Cold start: first request after scaling‑up shows a huge spike in both metrics.  
- Network congestion: request latency jumps while audio generation stays constant.  
- Extremely long text: audio generation scales linearly; request latency may stay flat.

**Optimize & Communicate**  
When explaining to stakeholders, highlight that SLA guarantees usually refer to **request latency**, but user‑experience is dominated by **audio generation latency**. For a 200 ms API contract, a client can still feel laggy if the model takes 250 ms; thus we should expose both numbers in dashboards and offer “batch mode” or “pre‑warm” options.

*Bottom line*: Two latencies exist because they belong to orthogonal layers of the service stack—network vs. compute—and each must be monitored independently for robust ML deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

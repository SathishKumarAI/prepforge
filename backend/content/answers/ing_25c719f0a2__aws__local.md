---
qid: ing_25c719f0a2__aws__local
question: 'Explain: Two different latency numbers — Understanding latency | ElevenLabs
  Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 420
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:51:34-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
At my previous role I was tasked with reducing the response time for our text‑to‑speech API used by 30 % of our mobile users in real‑time chat. The product team raised a concern: “Why does the latency report show *10 ms* for request processing but *120 ms* overall?”  
**Action (Dive Deep & Ownership)**  
I dug into ElevenLabs’ docs and discovered that the API reports two distinct latencies:  

| Latency | Meaning |
|---------|--------|
| **Request‑to‑Processing** – 10 ms | Time from receiving the HTTP request to the start of waveform synthesis. |
| **End‑to‑End (E2E)** – 120 ms | Full round‑trip, including network RTT, queuing, and audio streaming back to the client. |

I mapped each step onto AWS services:  
* API Gateway → Lambda (10 ms)  
* Queues (SQS) & compute (EC2/Spot) → S3 for generated audio (≈100 ms).  

I added CloudWatch metrics and introduced a **latency bucket** to capture network variability, then tuned the load balancer’s idle timeout from 60 s to 30 s.  
**Result (Deliver Results)**  
E2E latency dropped from 120 ms to 75 ms (+37 % improvement). User‑reported “lag” incidents fell by 42 %. I documented the findings in a post‑mortem, sharing the two‑latency model with the product team so they could set realistic SLAs.  

**Bar‑raiser takeaway:**  
*Clear ownership of the problem.*  
*Deep dive into metric definitions and infrastructure.*  
*Quantified impact that directly improved customer experience.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_eef8a95a1d__aws__local
question: 'Explain: Real-Time Media — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 436
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:18:04-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the redesign of a live‑streaming platform that delivered 5 GB/s of media to 200k concurrent viewers. The core decision was whether to ship video over **TCP** (reliable) or **UDP** (low latency).  

**Action** – *Customer Obsession + Dive Deep*  
I set up a controlled A/B test on an EC2 fleet behind an Application Load Balancer, using **Amazon Kinesis Video Streams** for ingest and **CloudFront** for edge delivery. I instrumented packet loss, jitter, re‑transmission count, and end‑to‑end latency with **AWS X-Ray** and Prometheus exporters.  

- **TCP path**: 30 % higher throughput but 200 ms added latency; 12 % increased CPU on EC2 due to retransmissions.  
- **UDP path (DTLS)**: 150 ms latency, <1 % packet loss, but required a custom RTSP proxy and a small increase in storage cost for replay buffers.  

I chose UDP with DTLS + adaptive bitrate. The result was a 35 % drop in buffer underruns and a 22 % lift in viewer engagement (measured by session length).  

**Result / Learnings – *Deliver Results* & *Bias for Action***  
The switch cut operational costs by $18k/month while keeping compliance through DTLS. I documented the trade‑offs, shared the A/B data with product and security teams, and added a “latency‑first” design pattern to our engineering handbook.  

**Bar‑raiser check** – ownership of metrics, deep dive into packet behavior, quantified impact on user experience, and iterative learning from failure (the initial TCP trial).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

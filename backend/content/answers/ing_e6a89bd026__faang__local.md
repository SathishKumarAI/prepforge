---
qid: ing_e6a89bd026__faang__local
question: 'Explain: 2.3 Bandwidth Estimates — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 398
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:34:51-05:00'
sources: []
---

**Clarify**

You’re asked to estimate the bandwidth required for a service like Spotify that streams audio to millions of users simultaneously.  
Assumptions I’d confirm:  
1. Average bitrate per track (e.g., 320 kbps).  
2. Peak concurrent listeners (daily active users × fraction listening at peak).  
3. Network overhead, CDN caching, and buffering.  

**Approach**

1. Compute the raw data rate per user.  
2. Scale by the peak concurrency count.  
3. Add a safety margin for protocol overhead and burst traffic.  

**Depth**

- **Per‑user bandwidth:** 320 kbps ≈ 40 KB/s (≈ 288 KB/min).  
- **Daily active users (DAU):** say 70 M.  
- **Peak concurrency factor:** 0.1 → 7 M listeners at peak.  
- **Raw peak traffic:** 7 M × 320 kbps = 2,240 Mbps ≈ 2.24 Gbps.  
- **Overhead (TCP/IP, CDN):** +30 % → ~3 Gbps total.  

Thus Spotify would provision roughly 3–4 Gbps of downstream capacity during peak times.

**Edge Cases**

- Sudden spikes (e.g., new release launch).  
- Users switching between bitrates or devices with higher bandwidth.  
- CDN failures causing back‑haul load on origin servers.

**Optimize & Communicate**

I’d suggest dynamic bitrate adaptation and edge caching to reduce origin load, and use traffic shaping to absorb bursts. In an interview I would walk through the math, state assumptions clearly, and discuss how monitoring metrics (bytes per second, user churn) inform capacity scaling—demonstrating both analytical rigor and operational insight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

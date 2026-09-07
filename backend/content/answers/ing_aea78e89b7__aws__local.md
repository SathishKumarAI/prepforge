---
qid: ing_aea78e89b7__aws__local
question: 'Explain: Choose QUIC or HTTP/3 When — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 453
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:00:31-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the redesign of our global video‑streaming platform to reduce latency for mobile users by 30 %. The core decision was whether to expose our recommendation API over HTTP/3 (QUIC) or stick with legacy TCP‑based HTTP/2.  

**Action**  
I owned a cross‑functional experiment:  
1. **Requirements & Trade‑offs** – I mapped latency, throughput, and failure tolerance. QUIC runs on UDP, offers 0‑RTT handshakes, multiplexing without head‑of‑line blocking, and built‑in congestion control. TCP is mature, widely supported, but suffers from head‑of‑line stalls.  
2. **Design** – I architected a dual‑stack gateway in AWS:  
   * **API Gateway + Lambda@Edge** for HTTP/2 traffic (legacy clients).  
   * **ALB with NLB (UDP)** routing to EC2 instances running Envoy that speaks QUIC, backed by Auto Scaling.  
3. **Metrics** – Over a 4‑week A/B test on 1 M concurrent users, QUIC cut average RTT from 120 ms to 80 ms (33 % improvement) and reduced dropped‑segment rate by 15 %. Cost was +5 % due to extra NLB capacity but overall user engagement rose 12 %, justifying the spend.  

**Result**  
We migrated 60 % of traffic to QUIC, achieving a sustained 25 % latency reduction platform‑wide while maintaining backward compatibility. The initiative earned a “Customer Obsession” badge from leadership and inspired a company‑wide QUIC rollout.  

**Bar‑raiser takeaways** – I demonstrated *Ownership* by driving the experiment end‑to‑end, *Dive Deep* through detailed trade‑off analysis, quantified impact with real metrics, and learned that early fallback paths (dual stack) mitigate risk when adopting new transport protocols.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_be330e40fb__aws__local
question: 'Explain: TCP three-way handshake — What Happens When You Type a URL Into
  Your Browser? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 444
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:33:32-05:00'
sources: []
---

**Situation & Task (Leadership: Ownership, Customer Obsession)**  
When I joined a SaaS startup, our traffic spiked by 400 % during a product launch. Users complained that “typing a URL” sometimes took >2 s. I owned the investigation and delivered a solution that cut page‑load latency from 1.8 s to 0.7 s while keeping costs <10 % of baseline.

**Action (Dive Deep & Bias for Action)**  
I mapped the end‑to‑end flow:  
1️⃣ DNS lookup → Route 53 + CloudFront edge cache.  
2️⃣ TCP three‑way handshake → EC2 Auto Scaling Group behind an ALB.  
3️⃣ TLS handshake → AWS Certificate Manager (ACM) with CloudFront.  
4️⃣ Application logic → containerized microservice on ECS Fargate, fronted by API Gateway.

To reduce handshake overhead I:  
* Enabled **ALB’s HTTP/2** and **TLS 1.3**, cutting round‑trip time by ~30 %.  
* Added **TCP keep‑alive** on EC2 instances to reuse sockets for back‑to‑back requests.  
* Deployed **CloudFront with origin request policy “Cache based on query string”** so identical URLs hit the CDN cache, eliminating repeat handshakes.

I also instrumented CloudWatch metrics (latency, handshake count) and set a 90 % SLA on first‑byte time.  

**Result (Deliver Results)**  
Latency dropped from **1.8 s → 0.7 s** (61 % improvement). Traffic grew 400 %, but cost increased only **$120/month** due to efficient scaling.  

**Learning (Bar‑raiser focus)**  
I realized that seemingly “simple” URL resolution hides complex handshake dynamics; optimizing them requires cross‑service visibility and a willingness to tweak low‑level network settings. This mindset keeps customers happy and the system robust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

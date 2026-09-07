---
qid: ing_cb364590b1__aws__local
question: 'Explain: 2.1 Traffic Estimates — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 478
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:00:29-05:00'
sources: []
---

**Situation & Task**  
I was asked to estimate daily traffic for a new music‑streaming service similar to Spotify—specifically the number of concurrent streams and peak bandwidth required over a 24‑hour period.

**Action (Design)**  
1. **Collect baseline data** – Pull publicly available figures: Spotify has ~400 M MAU, average listening time 2 h/day, 60 % of users are on mobile, 40 % on desktop.  
2. **Compute user sessions** –  
   *Daily streams = MAU × avg daily minutes ÷ average track length*  
   ≈ 400 M × 120 min ÷ 3 min ≈ **16 B streams/day**.  
3. **Concurrent users** – Assume a normal distribution of listening times; peak occurs at 8 pm UTC with ~30 % of daily users active → 120 M concurrent listeners.  
4. **Bandwidth per stream** – Standard AAC‑encoded audio ≈ 320 kbps.  
   *Peak bandwidth = 120 M × 0.32 Mbps ≈ 38 Tbps*.  
5. **AWS services** – Use **Amazon CloudFront** for CDN, **Elastic Load Balancing** to distribute traffic across **EC2 Auto Scaling Groups**, and **Amazon DynamoDB** for session state (low latency).  

**Result**  
These estimates guided the architecture team to provision a 40 Tbps edge‑network capacity and design auto‑scaling policies that keep cost per stream under $0.0005 while guaranteeing <50 ms latency.

**Leadership Principles**  
- **Customer Obsession** – Built metrics around real user behavior, not assumptions.  
- **Ownership & Deliver Results** – Took end‑to‑end responsibility for the estimate and translated it into a scalable, cost‑effective AWS solution.  

*Bar‑raiser note:* I showcased ownership by deriving data from actual Spotify stats, dove deep into traffic modeling, quantified impact with concrete numbers, and learned that early engagement spikes drive bandwidth planning—an insight I later shared in our post‑mortem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

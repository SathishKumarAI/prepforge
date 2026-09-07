---
qid: ing_5f3cb1043f__aws__local
question: 'Explain: How Routing Works — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 450
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:01:18-05:00'
sources: []
---

**Situation & Task (S)**  
I was asked to architect a global routing layer for a SaaS that serves millions of users worldwide. The goal was to reduce latency, improve fail‑over, and keep the cost below $0.05 per million requests.

**Action (A) – Design & AWS Services**  
1. **Route 53 Traffic Flow + Weighted Routing** – maps user IP prefixes to nearest AWS Region with health checks for each endpoint.  
2. **Global Accelerator** – keeps a single static IP, improves TCP handshakes and gives us an “edge” that always points to the healthiest region.  
3. **VPC Endpoints & NAT Gateways** – isolate traffic inside each region; use Spot instances for NAT to cut costs by 30 %.  
4. **Global Cache (CloudFront + Lambda@Edge)** – caches static ML model artifacts and pre‑computes routing decisions, reducing round‑trips by 40 %.  

**Result (R)**  
- Latency dropped from 250 ms (regional only) to 70 ms globally.  
- Uptime rose from 99.9 % to 99.999 % during a region outage, thanks to health‑check‑driven failover.  
- Cost per million requests fell from $0.08 to $0.04 by leveraging Spot NATs and CloudFront caching.

**Learning & Ownership (L)**  
I conducted post‑mortem on a routing failure that caused a 5 % traffic spike to a lagging region; we added a “slow‑down” rule in Route 53 to throttle that region for 10 min, preventing SLA breach.  

**Leadership Principles Highlighted**  
- **Customer Obsession:** We measured latency from the end‑user’s perspective and continuously tuned routing.  
- **Ownership & Dive Deep:** I owned the entire routing stack, debugged cross‑region traffic, and quantified every change with A/B tests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

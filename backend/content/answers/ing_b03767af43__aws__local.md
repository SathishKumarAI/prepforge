---
qid: ing_b03767af43__aws__local
question: 'Q: When is a self-hosted individual GPU cluster cheaper than an API?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 473
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:03:48-05:00'
sources: []
---

**Situation (S)**  
While revamping our recommendation engine for a mid‑size e‑commerce brand, the team faced a cost‑vs‑performance trade‑off: use OpenAI’s GPT‑4 API or spin up an on‑prem GPU cluster.

**Task (T)**  
Determine when a self‑hosted 8‑GPU node would be cheaper than the API while still meeting latency and throughput targets.

**Action (A)**  
1. **Dive Deep into Usage** – Logged 3 M inference requests per month, average payload 512 tokens.  
2. **Cost Modelling** –  
   * GPT‑4: $0.03/1K tokens → ~$45 k/month.  
   * On‑prem:  
     * GPU (RTX 3090) ×8 = $3 k upfront + $120 mo/VM + $0.10/kWh (24 h).  
     * Total ≈ $15 k/mo if fully utilized.  
3. **Scalability & Availability** – Deployed on an AWS‑compatible bare‑metal server with Kubernetes, autoscaling between 1–8 nodes, using NVIDIA DCGM for health monitoring and failover.  
4. **Performance Test** – Achieved <150 ms latency at 200 req/s; API maxed at 400 req/s but required a $10 k burst buffer.

**Result (R)**  
When usage >1.5 M requests/month, the GPU cluster saved ~66 % in cost and gave us deterministic SLAs. For <1 M requests, the API remained cheaper due to under‑utilization of hardware.  

**Leadership Principles Highlighted**  
- **Customer Obsession & Deliver Results**: Delivered a cost‑efficient solution that met SLA demands.  
- **Ownership & Dive Deep**: Owns end‑to‑end pipeline and rigorously models trade‑offs.  

*Bar‑raiser cue:* Look for ownership of the entire decision lifecycle, depth in metrics, and candid reflection on what would happen if traffic dipped (e.g., auto‑scale to 0).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

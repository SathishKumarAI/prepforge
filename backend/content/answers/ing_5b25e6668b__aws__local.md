---
qid: ing_5b25e6668b__aws__local
question: 'Explain: Production Concerns — Realtime Voice Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 489
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:51:34-05:00'
sources: []
---

**Situation & Task** – I led a cross‑functional team that had to launch an AI‑powered real‑time voice agent for a global e‑commerce platform. The goal was to keep latency below **200 ms** and maintain 99.9 % uptime while processing up to **10k concurrent users**.

**Action** –  
1. **Architecture**: Gateway → Lambda (Python) → Amazon Transcribe (streaming) → Amazon Lex (intent), then Polly for synthesis.  
2. **Scalability**: Used *Lambda provisioned concurrency* (3 × max users per region) and *Auto Scaling* on API‑Gateway, backed by a *global CloudFront distribution*.  
3. **Availability & Cost**: Deployed in **N = 3** AZs; used *AWS WAF* + *Shield Advanced* for DDoS protection. Leveraged *Spot Instances* for background model training (30 % cost reduction).  
4. **Observability**: CloudWatch metrics, X-Ray tracing, and a custom dashboard to capture end‑to‑end latency per region.

**Result** – In production we achieved **<180 ms average latency**, 99.95 % uptime, and handled **15k concurrent users** during peak sales events—up 50 % over baseline. Cost was kept under the $1.2M quarterly budget by shifting non‑critical training to Spot.

---

### Leadership Principles  
- **Customer Obsession** – Reduced user wait times to improve satisfaction scores (+12 pts).  
- **Ownership** – Took end‑to‑end responsibility, from design through ops monitoring.  

Bar‑raiser focus: depth of architectural trade‑offs (e.g., Lambda vs EC2), quantified impact on latency and cost, and lessons learned when an initial Lambda timeout caused a 5 % spike in errors—prompted us to refactor the streaming pipeline and add retry logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

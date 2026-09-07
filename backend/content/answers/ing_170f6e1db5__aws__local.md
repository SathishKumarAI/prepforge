---
qid: ing_170f6e1db5__aws__local
question: 'Explain: Server-Sent Events (SSE) — Long Polling vs WebSockets - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 573
total_tokens: 817
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:18:02-05:00'
sources: []
---

**Situation (S)**  
At my last role I led the redesign of a real‑time analytics dashboard that streamed clickstream data to thousands of users. The existing solution used long polling via API Gateway and Lambda, which hit the 29 s timeout limit and caused a 35 % increase in latency.

**Task (T)**  
My goal was to deliver a low‑latency, cost‑effective stream without breaking AWS limits or increasing operational overhead.

**Action (A)**  

| Technique | How I applied it | AWS services | Trade‑offs |
|-----------|------------------|--------------|------------|
| **Server‑Sent Events (SSE)** | Implemented via API Gateway + Lambda to push events over HTTP/2. Keeps connection open, simple on client side. | API Gateway, Lambda, CloudWatch | Limited bidirectional support; scaling tied to Lambda concurrency. |
| **Long Polling** | Used only for legacy clients that couldn’t upgrade to SSE/WebSocket. | API Gateway + Lambda | Higher latency (≈2–3 s), higher cost per request. |
| **WebSockets** | Replaced long polling for the main dashboard; used API Gateway WebSocket APIs backed by a stateful *Amazon DynamoDB* table for connection IDs and an *Elasticache Redis* pub/sub channel for event distribution. | API Gateway, Lambda, DynamoDB, ElastiCache | Slightly more operational complexity but 90 % lower latency and 70 % cost savings at peak load. |

**Result (R)**  
Latency dropped from 2.8 s to **<300 ms** for 95th‑percentile events; monthly costs fell by **$12k** (~30 %). The solution also scaled to 50,000 concurrent connections with no outage.

---

### Leadership Principles Highlighted
- **Ownership & Bias for Action** – I took end‑to‑end ownership of the streaming layer and moved quickly from polling to WebSockets.  
- **Dive Deep** – Conducted a detailed cost/latency analysis, measured real metrics, and iterated on the architecture until it met SLA targets.

### What a Bar‑Raiser Listens For
- Concrete data showing impact (latency & cost).  
- Clear trade‑off discussion and rationale for choosing SSE vs. WebSocket vs. Long Polling.  
- Evidence of learning from failure: we initially stuck with long polling, saw the pain points, then pivoted to a hybrid model that balanced backward compatibility with modern standards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

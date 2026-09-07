---
qid: ing_7f2dec23cc__aws__local
question: 'Explain: Closure — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 399
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:12:48-05:00'
sources: []
---

**Situation / Task**  
I was leading the redesign of our real‑time analytics dashboard for a SaaS product that served 120 000 daily users. The existing polling‑based REST API caused >300 ms latency and bursty traffic spikes during peak usage, hurting customer satisfaction.

**Action**  
I chose **WebSockets** to maintain an open, bidirectional channel between clients and the backend.  
*Design*:  
- Frontend opens a WebSocket (`wss://api.example.com/stream`) that stays alive for each user session.  
- Backend uses **Amazon API Gateway** (WebSocket APIs) → **AWS Lambda** + **Amazon DynamoDB Streams** to push updates in real time.  
- Scaling: API Gateway handles millions of concurrent connections with minimal latency; Lambda scales automatically per message.  
- Availability: Multi‑AZ deployment, health checks, and automatic reconnection logic in the client.  
- Cost: Pay for actual data transfer (≈$0.09/GB) vs. repeated polling requests (~$1.20/GB).  

**Result**  
Latency dropped from 350 ms to <80 ms average; CPU usage on EC2 nodes fell by 60 %. Customer‑reported “real‑time” satisfaction rose 25 % (NPS +12).  

**Learnings & Bar‑raiser cues**  
- **Ownership**: I drove the full stack change, from design to ops.  
- **Dive Deep**: I benchmarked multiple protocols and quantified trade‑offs.  
- **Quantified Impact**: Direct revenue lift via improved user retention.  
- **Learning from Failure**: Early prototype suffered connection churn; we added exponential backoff and server‑side heartbeats, turning a fragile feature into a robust product.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

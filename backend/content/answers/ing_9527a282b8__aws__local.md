---
qid: ing_9527a282b8__aws__local
question: 'Explain: Clarifying questions & assumptions — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 488
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:03:11-05:00'
sources: []
---

**Situation**  
At a fintech startup I led the launch of a real‑time voice agent that answered customer queries on the phone and routed them to the correct service line. The client expected sub‑200 ms latency, 99.9% availability, and a 30 % reduction in call center load.

**Task**  
I had to surface hidden requirements, validate assumptions, and design an architecture that met those SLAs while staying cost‑effective.

**Action**  

| Clarifying Question | Assumption Tested | Design Impact |
|---------------------|-------------------|---------------|
| *What is the peak concurrent call volume?* | 10 k calls/hour → 3 calls/sec. | Needed auto‑scaling of **Amazon Transcribe RealTime** and **Lex Runtime** instances. |
| *How many intents will Lex handle?* | 50 intents, each with 5 utterances. | Shallow intent hierarchy → lower training time; kept in **S3** + **DynamoDB** for fast lookup. |
| *Do we need real‑time sentiment analysis?* | Not critical for routing but optional for escalation. | Added **Amazon Comprehend** only on flagged calls, keeping cost down. |
| *What is the acceptable error rate?* | <1 % misrouted calls. | Built a fallback to human agent via **Amazon Connect Contact Lens** and logged metrics in **CloudWatch**. |

I used **AWS Lambda** for orchestration, **API Gateway** for secure callbacks, and **Elastic Load Balancer** for 99.9 % availability. Cost was $0.04 per minute of transcription versus $1.20 for a dedicated call center.

**Result**  
The agent handled 12 k calls in the first month, reduced live‑agent load by **34 %**, and maintained 99.95 % uptime—all within a 15 % budget variance.  

*Leadership Principles:* **Ownership** – I drove end‑to‑end delivery; **Dive Deep** – rigorously questioned assumptions to surface hidden constraints; **Deliver Results** – achieved measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

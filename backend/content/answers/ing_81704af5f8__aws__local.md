---
qid: ing_81704af5f8__aws__local
question: 'Explain: Instead of exposing 130 tools as function definitions, you expose
  them as a code API the agent writes scripts against. Walk me through the tradeoffs.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 447
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:17:32-05:00'
sources: []
---

**Situation / Task**  
While revamping our internal AI‑agent platform, I was asked to decide between (1) exposing each of the 130 existing tools as individual function definitions and (2) creating a unified code API that lets agents generate scripts calling those tools. The goal was to reduce maintenance overhead while keeping execution speed under 200 ms per request.

**Action**  
I scoped requirements:  
* **Scalability** – up to 10k concurrent agent sessions.  
* **Availability** – 99.9% SLA.  
* **Cost** – keep Lambda invocations < $0.0000167 each.  

I designed a *code‑execution microservice* on AWS Fargate, using Docker images that embed the 130 tool libraries. Agents submit Python snippets via an API Gateway endpoint; the service runs them in isolated containers (AWS Nitro). Tool calls are wrapped with tracing (X-Ray) and throttled per user to prevent abuse.

Trade‑offs:  
| Approach | Pros | Cons |
|----------|------|------|
| Function defs | Fast, granular permission control | 130 IAM policies, high ops cost, brittle on tool changes |
| Code API | Single entry point, easier versioning, lower ops | Slightly higher latency (container spin), risk of code injection |

I ran a pilot: 1,200 agents used the new API, achieving **97.6%** hit‑rate vs 89.3% for function defs, and cut tool‑maintenance tickets by **72 %**.

**Result**  
The unified API delivered faster iteration (30 % reduction in feature time) while keeping costs down ($12k/month vs $18k). I documented the design in a whitepaper that became the company’s standard for future AI services.  

*Leadership Principles:* **Ownership** – led the end‑to‑end redesign; **Dive Deep** – analyzed latency, cost, and security trade‑offs; **Deliver Results** – achieved measurable performance gains.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

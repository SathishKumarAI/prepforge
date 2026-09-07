---
qid: ing_8cca51d181__aws__local
question: 'Explain: What Did Not Work Initially — Conversational Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 398
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:44:19-05:00'
sources: []
---

**Situation & Problem**  
When launching the first version of our cross‑platform chatbot (Alexa skill + web widget), we hit a 75 % abandonment rate within the first 30 seconds. Users complained “I can’t get the answer I need.”  

**Task**  
My goal was to reduce that drop‑off to below 20 % while keeping latency <200 ms and cost < $0.001 per request.

**Action**  
1. **Dive Deep into Logs** – enabled CloudWatch Insights on Lambda logs, discovered a 2‑second cold start for the intent‑handler function due to large dependency bundles.  
2. **Refactor Architecture** – split the monolith into three AWS Lambda layers (NLU, business logic, response generator) and switched from Node 12 to Go runtime (30 % smaller image).  
3. **Add DynamoDB Global Tables** – cached top‑10 intents per region; read latency dropped from 120 ms to <15 ms.  
4. **Implement SQS for heavy‑weight tasks** – offloaded email‑notification generation, keeping the conversational flow instant.  

**Result**  
- Drop‑off fell to 12 % (≈65 % lift).  
- Avg response time: 95 ms (↓60 %).  
- Monthly cost reduced from $1,200 to $780 (~35 % savings).  

**Learning & Ownership**  
I took full ownership of the failure, iterated quickly, and used data to validate each change. The bar‑raiser will note my *Customer Obsession* for user experience, *Dive Deep* into metrics, and *Bias for Action* that led to measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

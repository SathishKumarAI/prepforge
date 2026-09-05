---
qid: ing_05003de09e__eli5__local
question: 'Explain: Rate Limiting — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 228
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:43:31-05:00'
sources: []
---

**Rate limiting is like a traffic cop at a busy intersection.**  
When many cars (requests) want to cross the street at once, the cop lets only a certain number go per minute so the road doesn’t get jammed and everyone gets through safely. In system design for machine learning services, “rate limiting” means putting that same rule on how often users or other systems can call an API—say, sending data to a model or asking for predictions.

- **API** – The door people use to talk to your ML service.  
- **Request** – A single call through that door (e.g., “give me a prediction”).  
- **Limit** – The maximum number of requests allowed in a time window (like 100 per second).  

If the limit is hit, extra requests are paused or rejected until the window resets. This protects the ML model from being overwhelmed, keeps response times predictable, and ensures fair use for everyone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

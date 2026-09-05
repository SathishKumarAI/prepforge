---
qid: ing_9f358845b0__eli5__local
question: 'Explain: Step 3: Authentication & Authorization — What is an API Gateway?
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 204
total_tokens: 375
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:49:52-05:00'
sources: []
---

**Step 3: Authentication & Authorization – What is an API Gateway?**

Think of an API gateway as the **security guard at a high‑tech club entrance**.  
When someone (a client app) wants to use a service inside the club (your microservices), they must first show their ID and be told which rooms they may enter.

*Authentication* is checking that ID—confirming who you are.  
*Authorization* decides what doors you can open—what actions you’re allowed to perform.

The gateway sits in front of all your services, so every request passes through it once. It validates tokens (like a club badge), rejects strangers, and then forwards the request only if the user is permitted. By handling this at one point, developers avoid duplicating security checks inside each service, keeping the system simpler and safer—just as a single guard keeps the whole club secure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

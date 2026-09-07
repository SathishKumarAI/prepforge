---
qid: ing_3dbf22ebca__faang__local
question: 'Explain: Amazon SNS message filtering — AWS-Services/4_MessageBrokers/AmazonSNS.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 474
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:07:27-05:00'
sources: []
---

**Clarify**  
The question asks how Amazon SNS’s *message‑filtering* works – i.e., the mechanism that lets a subscriber receive only messages that match user‑defined criteria. I’ll assume we’re talking about standard (topic‑based) SNS, not FIFO or mobile push nuances.

**Approach**  
1. Define the filtering context (topics → subscriptions).  
2. Explain the filter policy syntax and how it’s attached to a subscription.  
3. Walk through evaluation: message attributes → policy → accept/reject.  
4. Mention performance and limits.  

**Depth**  
- **Filter policy** is a JSON document with key‑value pairs, where keys correspond to *message attribute names* (string or number). Values can be:
  - A list of exact matches (`["red", "blue"]`).
  - Operators for numeric attributes: `{"numeric": ["<", 10]}`.
  - Wildcards/regex via the `prefix` and `anything-but` operators.  
- **Attachment**: policy is set on a *subscription* (via console, CLI or SDK).  
- When a message is published, SNS extracts its attributes and evaluates each subscription’s policy. If all specified keys satisfy their conditions, the message is delivered; otherwise it’s dropped for that subscriber.  
- SNS processes filters **in memory** per subscription, so latency is negligible (<1 ms).  
- Limits: up to 100 attributes per message, 10 KB total policy size.

**Edge Cases**  
- Missing attribute → treated as non‑match (unless `anything-but` includes null).  
- Type mismatch (string vs number) causes rejection.  
- Overly large policies can hit the 10 KB ceiling or degrade performance.  

**Optimize & Communicate**  
To reduce churn, keep policies concise and use numeric operators instead of enumerating many values. In an interview I’d illustrate with a quick JSON example and mention that SNS logs filter decisions via CloudWatch for auditability. This shows clear understanding, structured reasoning, and practical trade‑offs—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

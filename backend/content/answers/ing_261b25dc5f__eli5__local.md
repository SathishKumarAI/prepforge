---
qid: ing_261b25dc5f__eli5__local
question: 'Explain: Monitoring — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 238
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:36:28-05:00'
sources: []
---

**Monitoring a Service with TCP or UDP – Think of it as watching two different kinds of buses**

*TCP (Transmission Control Protocol)* is like a scheduled, ticketed bus that always follows the route exactly, stops at every station, and confirms each passenger gets on safely before leaving. *UDP (User Datagram Protocol)* is an express shuttle that zips along without stopping; it just drops off passengers wherever they’re waiting and never asks for proof of arrival.

When you **monitor** a system that uses TCP, you check the bus’s schedule, ticket‑scan logs, and make sure no one got left behind. For UDP, you watch only the number of shuttles that leave and the destinations they reached—there are no guarantees they arrived.

So, in design, choose **TCP monitoring** if reliability matters (e.g., file transfer), and **UDP monitoring** if speed is key and occasional loss is acceptable (e.g., live video). This keeps your “buses” running smoothly without confusing the system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

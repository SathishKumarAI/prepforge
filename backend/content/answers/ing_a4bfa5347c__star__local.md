---
qid: ing_a4bfa5347c__star__local
question: 'Explain: Flexible PTO — Careers at Glean | Glean Work AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 329
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:02:48-05:00'
sources: []
---

**Situation**  
When I joined Glean’s HR tech team, the company was rolling out a new benefits package to attract remote talent across three continents. Our focus was on making Paid Time Off (PTO) more adaptive for distributed teams.

**Task**  
I had to design a flexible PTO system that allowed employees to bundle vacation days with personal or sick leave while ensuring compliance with local labor laws and maintaining fair usage metrics.

**Action**  
First, I mapped out legal requirements in the U.S., UK, and India. Then I built a micro‑service on AWS Lambda using Python that calculated carry‑over limits, aggregated team usage via DynamoDB, and exposed an API for the internal portal. I integrated Slack bots to let staff request or view their balance in real time, and set up CloudWatch alerts when overall utilization hit 80 % to trigger manager reviews. Finally, I ran a pilot with 120 engineers, collecting feedback through surveys and usage logs.

**Result**  
The flexible PTO model reduced unplanned absences by 18 % and increased employee satisfaction scores from 78 % to 92 %. It also cut HR processing time by 60 %, allowing the team to focus on policy refinement. I learned that combining legal compliance, automation, and real‑time communication is key to a scalable benefits solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

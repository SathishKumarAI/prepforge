---
qid: ing_482d7ccd40__eli5__local
question: 'Explain: Request Volume — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 226
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:31:28-05:00'
sources: []
---

Think of a busy coffee shop that opens its doors at 6 a.m. and serves up to 1,000 customers in a day. The **request volume** is the number of people who want coffee each hour. A **load balancer** is like the shop’s manager who directs each customer to an open barista so no single barista gets overwhelmed.

When the morning rush hits (hundreds of requests per second), the manager (load balancer) looks at how many customers are already waiting in line for each barista and sends the next person to the least busy one. If a new “barista” opens—say a robot assistant—it joins the rotation automatically, taking some of the load.

In system design interviews, you’ll be asked to explain this balancing act: how to measure request volume, how to distribute traffic evenly across servers, and how to add or remove servers without breaking service. The goal is smooth flow and quick response for every customer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

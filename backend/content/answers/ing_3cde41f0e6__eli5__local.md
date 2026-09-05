---
qid: ing_3cde41f0e6__eli5__local
question: 'Explain: 2.2 Bandwidth Estimates — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 245
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:12:16-05:00'
sources: []
---

Imagine a busy airport with many runways (servers) and an air‑traffic controller (load balancer).  
Each airplane is a user request, and the runway’s speed limit is the server’s **bandwidth**—the amount of data it can handle per second.

When designing the controller, you first estimate how fast planes will arrive: that’s the **bandwidth estimate**. If you expect 1,000 planes per hour but only have runways that can clear 800, you’ll see delays (slow responses).  

So you calculate the average data size of each request and multiply by the expected request rate to get a target throughput in megabits per second.  
You then match this number against the combined capacity of all servers plus some safety margin.  
If the estimate is too high, add more runways; if it’s low, you can keep fewer.  

In short: measure how much data will flow, compare that to what your servers can carry, and adjust the load balancer so every “airplane” lands smoothly without traffic jams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

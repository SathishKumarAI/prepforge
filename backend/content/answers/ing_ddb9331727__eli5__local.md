---
qid: ing_ddb9331727__eli5__local
question: 'Explain: Cost Model for CI — Claude Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 260
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:25:30-05:00'
sources: []
---

Think of a Continuous Integration (CI) system like a **factory line that builds toy cars**—each car is a new version of your software, and every time you add a part (code change), the line has to run tests, compile, and package it again.

The *cost model* is simply the recipe that tells you how many “resources” (like workers, machines, or cloud minutes) you’ll need for each job.  
- **Workers** are like factory robots; more of them mean you can finish a batch faster but cost more money per hour.  
- **Machines** are the physical tools—each expensive to rent for every run.  
- **Cloud minutes** are the electricity bill that goes up with longer test runs.

So, when you push code, the CI system checks how many workers and machines it will spin up, estimates the time each job will take, and calculates the total “price” in dollars or credits. That price is your cost model: a simple equation of resources × time = money spent for every build.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

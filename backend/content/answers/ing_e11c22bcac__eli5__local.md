---
qid: ing_e11c22bcac__eli5__local
question: 'Explain: Job Execution Table — Design a Distributed Job Scheduler - System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 268
total_tokens: 431
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:32:05-05:00'
sources: []
---

Think of a **distributed job scheduler** like a city’s traffic‑control center that keeps thousands of cars (jobs) moving smoothly on many roads (workers).  
The **Job Execution Table** is the city map that records every car’s journey: when it entered, which road it took, how long it traveled, and where it ended.  

*Job* = a small task (e.g., rendering a video frame).  
*Worker* = a computer that can run jobs.  
*Schedule* = the plan telling workers “run this job at 3 pm.”  

When a worker picks up a job, the scheduler writes an entry in the table:  
- **Job ID** (car number)  
- **Start time** (when it entered traffic)  
- **End time** (when it reached its destination)  
- **Status** (running, succeeded, failed)  

If a car breaks down, the table notes the failure so another worker can take over. By continually updating this table, the scheduler sees the whole system’s health, can balance load, and guarantees every job eventually finishes—just as a traffic‑control center keeps all cars on route safely.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

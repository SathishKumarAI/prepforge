---
qid: ing_4eae65a836__think__local
question: 'Explain: Amazon EventBridge — Event-Driven Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 379
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:13:44-05:00'
sources: []
---

**1️⃣ Clarify the goal and set assumptions**  
   - Ask: *What does the learner already know about event‑driven patterns?*  
   - Assume they’re familiar with basic AWS services (S3, Lambda) but not EventBridge specifics.

**2️⃣ Choose a mental model**  
   - Treat EventBridge as an “Event Bus” that routes *events* between *sources* and *targets*.  
   - Use the publish‑subscribe diagram: **Source → Bus → Rule → Target**.

**3️⃣ Build the explanation step‑by‑step**  
   1. Define an event (JSON payload + metadata).  
   2. Explain sources (AWS services, SaaS apps, custom applications).  
   3. Show how rules filter events by pattern or schedule.  
   4. Illustrate targets (Lambda, Step Functions, SNS, SQS, Kinesis).  
   5. Mention event replay and dead‑letter queues for reliability.

**4️⃣ Avoid common pitfalls**  
   - Don’t conflate EventBridge with CloudWatch Events; emphasize the broader scope (SaaS integration).  
   - Don’t assume all events are processed instantly—highlight eventual consistency.  
   - Beware of over‑engineering: use EventBridge when decoupling is truly needed.

**5️⃣ Sanity‑check and verbalize**  
   - Re‑state the flow in plain words: *“When a source emits an event, EventBridge routes it to any matching rule, which hands it off to one or more targets for processing.”*  
   - Ask the learner to map a real use case (e.g., “order created → send email”) onto this diagram to confirm understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

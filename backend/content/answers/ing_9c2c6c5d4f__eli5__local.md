---
qid: ing_9c2c6c5d4f__eli5__local
question: 'Explain: We need to make one more assumption — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 223
total_tokens: 399
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:44:59-05:00'
sources: []
---

In a FAANG system‑design interview you’re often asked to sketch a big idea—say, “build a location‑based service like Yelp or Google Places.” The interviewer will then say, “Let’s add one more assumption: we must keep the user experience fast even when millions of people are searching at once.”  

Think of it as planning a crowded stadium. You already know you need seats (data storage) and an entrance gate (API). The extra assumption is like insisting that everyone can enter within 10 seconds, no matter how many fans arrive. It forces you to think about traffic‑light systems, parallel gates, and load‑balancing—just as a stadium designer adds extra entrances and crowd‑control measures when the capacity is huge.

So, that single added rule pushes you from “how do we store places?” to “how do we deliver them instantly under heavy load?” It keeps your design realistic for real‑world scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

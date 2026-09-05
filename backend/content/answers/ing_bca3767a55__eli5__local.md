---
qid: ing_bca3767a55__eli5__local
question: Build the evaluation harness for a new frontier model release. What does
  it need to do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 260
total_tokens: 425
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:36:20-05:00'
sources: []
---

Think of a new AI model as a brand‑new car that has never driven on the road before. The evaluation harness is its test track: it checks every part so the car can safely hit the highway.

First, **accuracy** is tested by giving the car a set of known destinations (questions or tasks) and measuring how often it reaches them correctly—just like checking if the GPS points to the right spot.  
Second, **speed** measures how quickly the car gets there; for AI that’s how fast it produces an answer.  
Third, **robustness** is the car’s ability to handle bumps: we feed it tricky or noisy inputs and see if it still behaves reasonably.  
Fourth, **fairness** checks that the car treats all roads equally—no bias toward certain routes (demographics).  
Finally, **resource use** looks at how much fuel (CPU, memory) the car consumes.

The harness runs these tests automatically every time a new model version is released, logging results so developers know whether the AI is ready for real‑world use or needs more tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

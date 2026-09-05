---
qid: ing_d70e831cf3__eli5__local
question: 'Explain: that and um to be able to — Amazon System Design Interview: Design
  Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 238
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:15:16-05:00'
sources: []
---

**Think of a parking garage as a smart robot driver.**

When you hand the car to the robot, it first looks at the map (the *training data*). It sees where each spot is, how many cars fit in each lane, and which spots are already taken. From that map it learns a simple rule: “If I need space for a 4‑wheel vehicle, choose the closest empty spot that’s wide enough.”  

Later, when you ask the robot to park a new car (the *prediction*), it uses that rule—just like a trained driver—to pick a spot instantly. If the map changes (a new floor added or a door closed), the robot can learn again by watching where cars actually go and adjusting its rule.

So, **machine learning** is the process of letting an algorithm look at lots of past parking decisions (data) to discover patterns (rules) that it can then apply quickly to new situations. No math needed—just observation, pattern‑finding, and applying what was learned.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

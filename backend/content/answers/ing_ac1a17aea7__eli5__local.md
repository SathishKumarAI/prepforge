---
qid: ing_ac1a17aea7__eli5__local
question: 'Explain: Reinforcement Learning From Human Feedback - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 246
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:10:35-05:00'
sources: []
---

Imagine teaching a robot to bake cookies.  
First, you let it try many recipes (the *agent*). Some cookies taste awful, some are perfect (the *environment* gives no clear score). Instead of hard‑coded rules, you step in as a human judge and say “good” or “bad” for each cookie. The robot records these thumbs‑up/thumbs‑down signals—this is **Human Feedback**.  

Next, the robot learns to predict how much humans will like its creations by training a small model on those ratings (the *reward model*). Once it has that predictor, it uses standard reinforcement learning: it rolls out many recipes, asks the reward model how tasty they would be, and adjusts its recipe‑choosing policy to maximize that predicted taste.  

So RLHF = “teach with thumbs‑up/down → build a reward guide → let the agent learn to follow that guide.”  
Key terms: *agent* (the learner), *environment* (the world it acts in), *reward model* (human‑inspired score predictor).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

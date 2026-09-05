---
qid: ing_a238f2d6b3__eli5__local
question: 'Explain: Walk me through the classic RLHF pipeline end to end.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 299
total_tokens: 460
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:54:49-05:00'
sources: []
---

Imagine teaching a robot how to bake bread, but you’re only allowed to give it hints by tasting its cakes and saying “good” or “bad.”  
**1. Collect data (pre‑training).** First the robot reads thousands of recipes—this is like giving it a huge cookbook so it learns the basics of baking.  
**2. Generate drafts (policy rollouts).** It then tries making several loaves on its own, each time recording how it mixed ingredients and timed ovens.  
**3. Human feedback (labeling).** You taste each loaf and write “great,” “okay,” or “terrible.” These labels are the *human preference* data.  
**4. Train a reward model.** The robot learns a function that, given any loaf, predicts how tasty it will be—this is its new internal “taste” guide.  
**5. Fine‑tune with reinforcement learning (RL).** Using that reward model as a coach, the robot keeps baking, adjusting its actions to maximize predicted tastiness.  
**6. Iterate.** You keep collecting more feedback on the improved loaves, retraining the reward model and re‑fine‑tuning until it consistently produces bakery‑quality bread.  

That’s RLHF: human tastes guide a policy that learns to bake better by maximizing the learned reward.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

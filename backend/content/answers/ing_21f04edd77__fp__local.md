---
qid: ing_21f04edd77__fp__local
question: 'Explain: Tell me about a time you owned a customer-facing problem end to
  end.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 338
total_tokens: 514
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:18:13-05:00'
sources: []
---

When I led the rollout of an intent‑recognition model for a banking chatbot, the “customer‑facing problem” was to reduce abandonment on the loan‑application funnel.  
**Problem framing:** The core objective was to keep users in the conversation long enough to complete the form, which is a classic *sequential decision* problem: each bot utterance changes the state of the dialogue and influences the probability that the user will drop out.  

**Why it must work this way:** In any interactive system the expected reward (completed loan) is the integral over all possible paths weighted by their transition probabilities. Optimizing a single utterance in isolation ignores downstream effects, so I formulated a *Markov Decision Process* and solved it with reinforcement learning (policy gradient).  

**End‑to‑end ownership:**  
1. Collected conversation logs → engineered state features.  
2. Trained the policy → deployed A/B test against legacy rule‑based bot.  
3. Monitored key metrics (drop‑off rate, NPS) and iterated on reward shaping.  
4. Integrated feedback loops so that every new user interaction automatically updated the model.  

**Non‑obvious insight:** The *variance* of the policy gradient was the real bottleneck; by adding a small “confidence bonus” to high‑entropy states we dramatically stabilized learning, leading to a 12 % lift in completion rates—an improvement that would have been invisible if we had only looked at average reward.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

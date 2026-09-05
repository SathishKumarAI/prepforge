---
qid: ing_afe0230809__star__local
question: 'Explain: RLHF and DPO (Alignment)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 329
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:23:52-05:00'
sources: []
---

**Situation:**  
When my team was preparing the next release of our conversational AI product, we noticed that user satisfaction scores were dropping from 88 % to 74 %. Customers complained that the bot’s responses felt “off” or irrelevant in nuanced contexts.

**Task:**  
I had to realign the model so it would better reflect human preferences and reduce those misaligned outputs before the August launch deadline.

**Action:**  
We adopted a two‑phase alignment strategy. First, we implemented **RLHF (Reinforcement Learning from Human Feedback)**: we collected a curated dataset of 10,000 user–bot interactions, had domain experts rank responses, and trained a reward model on those rankings. Using Proximal Policy Optimization, the policy network was fine‑tuned to maximize that reward signal. Next, to address edge cases where RLHF struggled, we introduced **DPO (Direct Preference Optimization)**: instead of modeling a reward function, we directly optimized the likelihood ratio between preferred and non‑preferred samples, reducing variance and improving convergence speed. We ran A/B tests on 15 % of traffic, monitoring perplexity, BLEU, and user satisfaction in real time.

**Result:**  
Within two weeks, the new model lifted user satisfaction to 87 %, nearly back to baseline, while cutting hallucination incidents by 35 %. I learned that combining RLHF for broad alignment with DPO for fine‑grained preference tuning yields a robust, production‑ready system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

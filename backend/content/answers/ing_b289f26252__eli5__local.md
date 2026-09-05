---
qid: ing_b289f26252__eli5__local
question: What do RLHF, DPO, and Constitutional AI/RLAIF actually do for safety, and
  why can't a system prompt replace them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 237
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:19:51-05:00'
sources: []
---

Imagine teaching a dog that loves treats (the AI) how to behave safely around people.  
**RLHF (Reinforcement Learning from Human Feedback)** is like giving the dog a basket of treats and asking its owner to pick the best ones—those that make everyone happy. The dog learns to repeat the tricks that earned those treats.  

**DPO (Direct Preference Optimization)** is a sharper trainer: instead of picking single treats, it shows the dog two tricks at once and asks which one feels better, then teaches only the preferred trick. It speeds up learning while keeping safety in focus.  

**Constitutional AI / RLAIF** are like writing a short rulebook (“don’t bite, be polite”) that the trainer uses to judge every move, ensuring the dog’s behavior stays within safe boundaries.  

A simple system prompt can only say “be nice,” but it can’t keep checking and correcting each action in real time. The learning loops above continually evaluate, adjust, and reinforce safety—something a static prompt alone cannot do.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

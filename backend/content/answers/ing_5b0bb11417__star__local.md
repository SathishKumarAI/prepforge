---
qid: ing_5b0bb11417__star__local
question: 'Explain: Title: Training language models to follow instructions with human
  feedback'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 313
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:29:43-05:00'
sources: []
---

**Situation:**  
In my last role at a startup, we had built a conversational chatbot that was great at answering factual questions but struggled when users gave ambiguous or multi‑step instructions. Our quarterly user satisfaction score for the “help” feature dropped from 4.2 to 3.7 on a 5‑point scale.

**Task:**  
I was tasked with improving the model’s ability to interpret and execute complex, instruction‑style prompts without sacrificing its general knowledge performance, all within a two‑month sprint.

**Action:**  
First, I collected a curated dataset of real user queries that highlighted misunderstanding. Then, using OpenAI’s RLHF pipeline, I fine‑tuned our base transformer on this data while incorporating human reviewers who graded responses on clarity and correctness. I introduced a reward model that penalized hallucinations and rewarded step‑by‑step reasoning. To keep inference latency low, I pruned the policy network by 20 % using knowledge distillation from the larger teacher model. Finally, I deployed A/B tests across 10% of traffic to measure impact.

**Result:**  
After rollout, the satisfaction score rose back to 4.3, a 17% improvement. The model’s instruction‑following accuracy increased from 68% to 84%. I learned that combining targeted data curation with a lightweight reward signal can dramatically boost user trust without heavy computational overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

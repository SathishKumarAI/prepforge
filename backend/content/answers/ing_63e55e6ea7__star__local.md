---
qid: ing_63e55e6ea7__star__local
question: 'Q: How do you prevent reward hacking in Best-of-N?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 332
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:47:30-05:00'
sources: []
---

**Situation:**  
In a recent NLP project at my previous company we were building a best‑of‑N text generation system for product descriptions. The model was rewarded on BLEU score, but the dev team noticed it was producing repetitive boilerplate that still scored high.

**Task:**  
I had to redesign the reward function and training pipeline so the model could’t game the metric while still delivering diverse, high‑quality output within our 2 s inference window.

**Action:**  
First, I introduced a penalty term for n‑gram overlap across the N samples, calculated via a rolling hash over the last 200 tokens. Then I swapped BLEU for a learned reward model trained on human preference data using reinforcement learning from human feedback (RLHF). To keep latency low, I distilled the RLHF policy into a smaller Transformer and added a variance‑regularization term to discourage deterministic outputs. Finally, I ran an automated “reward hacking” test suite that generated adversarial prompts and checked for metric inflation.

**Result:**  
The new system cut repetitive text by 68 % (measured via unique token ratio) while improving human-rated relevance scores from 3.2/5 to 4.1/5, all within the same inference budget. I learned that combining domain‑specific penalties with a learned reward and rigorous adversarial testing is key to robust best‑of‑N generation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

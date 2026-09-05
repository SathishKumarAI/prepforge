---
qid: ing_8c7649028e__star__local
question: 'Explain: When to Fine-Tune — Fine Tuning Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 291
total_tokens: 528
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:13:47-05:00'
sources: []
---

**Situation:**  
At my last startup we built a chatbot for customer support, initially using a generic GPT‑4 model that scored 78% on intent classification but struggled with domain‑specific jargon and legal compliance questions.

**Task:**  
I was tasked to improve accuracy for the finance sector module while keeping latency under 200 ms and avoiding catastrophic forgetting of the base knowledge.

**Action:**  
First, I performed data‑driven fine‑tuning: collected a curated set of 12k labeled finance conversations, applied differential learning rates (lower for embedding layers, higher for output heads), and used LoRA adapters to keep the model lightweight. Next, I introduced a two‑phase strategy—pre‑train on domain data then a second “prompt‑tune” phase where we added few‑shot prompts directly into inference. Throughout, I monitored perplexity and an A/B test against the baseline, adjusting batch size and weight decay to mitigate overfitting.

**Result:**  
The fine‑tuned model achieved 91% intent accuracy and reduced misclassification of compliance queries by 67%. Latency stayed below 180 ms, and we avoided catastrophic forgetting as shown by a 1.2% drop in general knowledge tasks. I learned that combining LoRA with prompt‑tuning allows rapid domain adaptation without sacrificing base performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

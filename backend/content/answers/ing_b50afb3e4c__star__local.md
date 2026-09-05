---
qid: ing_b50afb3e4c__star__local
question: Can LLMs learn from a single example? — fast.ai\u2014Making neural nets
  uncool again \u2013 fast.ai
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 335
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:33:36-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with adding a quick‑response chatbot to our customer support portal. The product team wanted the bot to answer niche technical questions that only appeared once in the training data, and they insisted we could not retrain the entire model due to time constraints.

**Task:**  
I needed to prove that a large language model could adapt to those rare queries using just a single example each, without full fine‑tuning or extra labeled data.

**Action:**  
I experimented with prompt engineering in a 7B transformer from Hugging Face. For every unique question I built a “few‑shot” prompt: the user’s query followed by one high‑quality Q&A pair as an example. I added a small prefix (“Answer concisely”) to steer style. To keep latency low, I used FlashAttention and 16‑bit FP precision. I also set a top‑p sampling of 0.9 to preserve creativity while avoiding hallucinations.

**Result:**  
In A/B tests the bot answered 93 % of those rare questions correctly on the first try—up from 58 % with no prompt engineering. User satisfaction scores rose by 18 %. I learned that with careful prompting and a single exemplar, LLMs can perform effectively “one‑shot learning,” turning a seemingly impossible requirement into a deployable feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

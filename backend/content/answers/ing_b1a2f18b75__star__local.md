---
qid: ing_b1a2f18b75__star__local
question: 'Explain: F3: Teacher hallucinations baked into student'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 313
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:26:54-05:00'
sources: []
---

**Situation:**  
When I joined a startup developing an educational chatbot for middle‑school science, we noticed that the model kept generating “extra” facts—so‑called teacher hallucinations—that confused students and broke trust in our product.

**Task:**  
My goal was to identify why these hallucinations were happening and design a mitigation pipeline so the bot could only relay verified information while still sounding natural.

**Action:**  
First, I set up a logging system that tagged every answer with its source token. Using TensorFlow’s AttentionViz, I traced attention heads that produced unsupported statements. I then built an “external knowledge filter” that cross‑checked each claim against the curated OpenStax database via a lightweight ElasticSearch index. If a claim wasn’t found, the model was forced to produce a fallback like “I’m not sure—let me look it up.” Finally, I fine‑tuned the decoder with a reinforcement signal that penalized hallucinated tokens during training.

**Result:**  
Within two sprints we reduced hallucination rates from 18 % of responses to under 2 %. User satisfaction scores rose by 27 %, and our beta testers reported fewer misinformation incidents. I learned that coupling interpretability tools with a real‑time knowledge filter can effectively curb hallucinations without sacrificing fluency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_6b12ead675__star__local
question: 'Explain: Pitfall 1: Small Test Set — Capability Assessment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 306
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:01:26-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching an AI‑driven customer support chatbot. The product team wanted a quick benchmark of its intent classification accuracy before the first sprint, so I was asked to create a test set and report results.

**Task:**  
I needed to demonstrate that the model could reliably understand user intents across our 12 primary categories, and prove it would perform well in production, all within two days.

**Action:**  
Instead of gathering thousands of real conversations, I scraped the last 200 support tickets from our helpdesk and split them into a 70/30 train/test split. I used a simple accuracy metric on the test set and got 92 %. Confident, I presented this to stakeholders. During live testing, however, user intent recognition dropped to 68 %, revealing that the small, homogeneous test set had over‑fit to our internal jargon.

**Result:**  
We expanded the test corpus to 2,500 tickets from multiple channels (email, chat, social) and added synthetic variations using a paraphrasing model. Accuracy stabilized at 87 % on this diverse set, aligning with real‑world performance. I learned that a representative, sizable test set is critical for honest capability assessment, and that over‑reliance on small, curated data can mask true weaknesses in AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

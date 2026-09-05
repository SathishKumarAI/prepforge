---
qid: ing_6751c9cb6d__star__local
question: 'Explain: Walk me through a post-training recipe to turn a pretrained base
  model into a personalized assistant.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 340
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:54:30-05:00'
sources: []
---

**Situation** – I was working on a customer‑support chatbot for a fintech startup that had already deployed an open‑source LLM (Vicuna) as its base. The client wanted the bot to adopt their brand voice, comply with regulatory jargon, and remember user preferences across sessions.

**Task** – Convert the generic model into a personalized assistant: fine‑tune it on proprietary data, embed a lightweight memory layer for context retention, and enforce compliance rules without degrading latency.

**Action** – First, I curated 15 k domain‑specific conversation logs and applied LoRA adapters (rank = 8) to preserve the base weights while training only ~0.5 M parameters on an A100 for 3 epochs, keeping inference <30 ms. Next, I integrated a key–value store using Redis to cache user intents and preferences, pulling them via a prompt template that injects context before each generation. Finally, I added a rule‑based post‑processor that scans outputs for disallowed phrases (e.g., “investment advice”) and rewrites or flags them.

**Result** – The fine‑tuned model achieved a BLEU score of 0.42 against a held‑out test set, up from 0.28 pre‑fine‑tune. User satisfaction surveys rose by 18 %, and compliance incidents dropped to zero during the pilot month. I learned that lightweight adapters coupled with external context storage can rapidly personalize a base LLM while keeping compute overhead minimal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

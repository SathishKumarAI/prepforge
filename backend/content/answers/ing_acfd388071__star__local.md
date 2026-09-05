---
qid: ing_acfd388071__star__local
question: 'Q48: When would you choose fine-tuning over prompt engineering?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 290
total_tokens: 529
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:18:14-05:00'
sources: []
---

**Situation:** In early 2024 I was leading a product‑line upgrade for our customer‑support chatbot. The baseline model could answer FAQs but struggled with domain‑specific jargon and nuanced policy queries, causing a 15 % drop in CSAT.

**Task:** My goal was to improve accuracy on those niche topics while keeping the system lightweight enough to run on our edge devices within a 200 ms latency budget.

**Action:** I first evaluated prompt engineering: we built dynamic prompts that inserted user context and policy snippets, but the model still misinterpreted rare terms. Next, I performed targeted fine‑tuning with a curated 5k‑example dataset of policy Q&A, using LoRA adapters to keep the core weights frozen. We set a strict early‑stopping criterion and monitored perplexity on a held‑out validation set. Finally, we deployed both versions side‑by‑side in A/B tests.

**Result:** The fine‑tuned model reduced error rates by 42 % on policy queries and lifted CSAT from 78 % to 91 %. Prompt engineering alone only achieved an 18 % improvement. I learned that when domain knowledge is scarce, limited data, or latency constraints are tight, fine‑tuning with lightweight adapters can deliver measurable gains over prompt tweaks alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

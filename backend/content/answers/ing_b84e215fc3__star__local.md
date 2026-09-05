---
qid: ing_b84e215fc3__star__local
question: What is in-context learning, and how do you decide between it and fine-tuning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 338
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:40:06-05:00'
sources: []
---

**Situation** – At my last role we were launching a chatbot for a banking client that needed to handle regulatory compliance queries. The existing model was trained on generic customer service data and struggled with niche legal terminology.

**Task** – I had to decide whether to use in‑context learning by providing few-shot examples during inference or to fine‑tune the base LLM on a proprietary compliance corpus, while keeping latency under 200 ms for real‑time responses.

**Action** – First, I benchmarked both approaches. For in‑context, I crafted a prompt with five labeled compliance scenarios and measured accuracy on a held‑out set; accuracy hit 78% but inference cost was high due to larger prompts. For fine‑tuning, I used LoRA adapters (4 GB GPU memory) on 12 k domain‑specific examples, achieving 85% accuracy with negligible latency increase. I also ran A/B tests with end users and collected feedback; fine‑tuned model received a 15% higher satisfaction score.

**Result** – We deployed the fine‑tuned model, cutting compliance query errors by 40% and improving user satisfaction from 82 % to 97 %. The exercise taught me that in‑context learning is great for rapid prototyping or when data is scarce, but when you have a sizeable domain corpus and strict latency constraints, lightweight fine‑tuning with adapters often yields better performance and maintainability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

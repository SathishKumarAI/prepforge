---
qid: ing_2a01d6a176__star__local
question: 'Explain: The Core Philosophy: Grounding vs. Training'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 323
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:52:04-05:00'
sources: []
---

**Situation** – At my previous company we were building a conversational agent for customer support. Early testing showed the bot could generate plausible responses, but it frequently gave factually incorrect or policy‑violating answers, especially when faced with new product updates.

**Task** – I was tasked with improving the model’s reliability: reduce hallucinations and ensure compliance with our internal knowledge base while keeping response latency under 300 ms for a live chat platform.

**Action** – First, I introduced *grounding* by integrating a retrieval‑augmented framework. The system now queries a vector index of up‑to‑date product documents (built with FAISS) and concatenates the top three passages to the prompt before decoding. Next, I fine‑tuned the base transformer on a curated dataset that included both typical user questions and edge cases flagged by our compliance team. I also implemented an “attention masking” trick so the decoder prioritizes retrieved facts over its own prior knowledge, reducing hallucinations by 40 %. Finally, I added a lightweight policy classifier to veto responses that violate guidelines.

**Result** – After deployment, we saw a 35 % drop in customer escalations due to misinformation and improved overall user satisfaction scores from 4.1 to 4.6 out of 5. The grounding pipeline also cut hallucination‑related support tickets by half, proving that combining retrieval with selective fine‑tuning yields more trustworthy AI than training alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

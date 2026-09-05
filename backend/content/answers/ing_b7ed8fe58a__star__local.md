---
qid: ing_b7ed8fe58a__star__local
question: 'Explain: Feature/Hidden State Distillation — Knowledge Distillation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 309
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:39:14-05:00'
sources: []
---

**Situation** – At my last company we had a production chatbot that ran on a GPU‑heavy transformer model. The latency was 350 ms per request, which exceeded the SLA of 250 ms for our mobile app users.  
**Task** – I needed to compress the large teacher model into a lightweight student while preserving its conversational nuance, so the API could stay in the cloud but still hit the deadline.  
**Action** – I implemented feature (hidden‑state) distillation: first I froze the teacher and extracted intermediate layer activations for a representative 200k dialogue set. Then I trained a smaller BERT‑base student to match those hidden vectors using an L2 loss plus a cross‑entropy on the final logits. To keep training stable, I added temperature scaling (T=4) and a small KL penalty between teacher/student soft labels. I also used mixed‑precision training in PyTorch and logged layer‑wise cosine similarities to tune which layers mattered most.  
**Result** – The student achieved 92 % of the teacher’s perplexity, reduced inference time to 170 ms on an A100 GPU, and cut memory usage by 60 %. I learned that aligning internal representations is often more effective than matching outputs alone, especially when the task relies on subtle contextual cues.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

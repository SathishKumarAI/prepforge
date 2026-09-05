---
qid: ing_61314e3913__eli5__local
question: How do you serve fine-tuned models at scale - merged checkpoints vs adapters,
  versioning, rollback?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 246
total_tokens: 414
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:10:30-05:00'
sources: []
---

Think of a large language model as a giant library that can answer almost anything.  
When you want the library to specialize in a niche (say medical advice), you don’t rebuild it from scratch; instead you add a small “reference book” that points out the relevant sections. That reference book is like an **adapter** – a tiny set of extra weights that sit on top of the original model.  
A **merged checkpoint** is what happens when you copy those reference pages into every shelf, turning each book into a fully specialized version.  

At scale we keep many copies: one master library and several “specialized” libraries (different checkpoints). When an error shows up, we can simply stop using the faulty copy and switch back to the last good one—this is **rollback**.  
Versioning works like labeling each copy with a date or tag; if a new adaptation improves things, we label it “v2” and let traffic flow there automatically. In this way, adding expertise, scaling out, and recovering from mistakes all feel as simple as swapping out a book in the library.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

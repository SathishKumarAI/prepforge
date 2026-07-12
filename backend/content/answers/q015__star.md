---
qid: q015
question: "When would you fine-tune an LLM instead of using prompting or RAG?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Situation** At a medical-scribe company, we needed the model to output clinical notes in a very specific, rigid house format and terminology, and despite heavy prompting and RAG, the base model kept drifting in style and tone.

**Task** I had to decide whether fine-tuning was justified over our existing prompt-plus-RAG setup, since fine-tuning is costlier to build and maintain.

**Action** I reasoned through it explicitly. Prompting and RAG are great for injecting knowledge and quick iteration, but this was a behavior and style problem, not a knowledge gap, which is exactly the case for fine-tuning. We had 8,000 high-quality human-written note pairs, enough training data to make it worthwhile. I fine-tuned an open model on those examples to bake in the format, tone, and shorthand, while keeping RAG for patient-specific facts. I evaluated against a held-out set and monitored for catastrophic forgetting.

**Result** Format-compliance went from 68% with prompting to 96% after fine-tuning, and reviewer edits dropped by half. The rule I took away: fine-tune for consistent behavior and style when you have data; use RAG for knowledge.

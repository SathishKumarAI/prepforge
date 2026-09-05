---
qid: ing_9ddd143913__eli5__local
question: 'Explain: Data Characteristics — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 302
total_tokens: 462
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:47:44-05:00'
sources: []
---

**Data characteristics are the “personality traits” of the data you’ll use in a machine‑learning system.**  
Think of building a recipe: if you want to bake a cake that tastes good for everyone, you need to know how much flour, sugar and eggs each baker prefers. Similarly, before designing a ML system you must ask:

- **Size (how many data points)** – can the system store millions of images?  
- **Format (structured vs. unstructured)** – are we dealing with tidy tables or raw text?  
- **Quality (missing values, noise)** – do we need cleaning steps like filling gaps or removing outliers?  
- **Distribution (balance across classes)** – is one label overrepresented, making the model biased?

**Analogy:** *Imagine a tailor who must create a suit for a crowd.* The tailor checks each person’s measurements (size), knows if they prefer a slim cut or loose fit (style preference), and sees whether they have any body quirks that need special tailoring (missing data). Only after this “pre‑measurement” can the tailor design the pattern, choose fabrics, and stitch a perfect suit.  
In system design interviews, showing you’ve thought about these data traits demonstrates you’ll build a robust, efficient ML solution from the ground up.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

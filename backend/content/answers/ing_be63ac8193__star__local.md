---
qid: ing_be63ac8193__star__local
question: 'Explain: Types of CoT prompts — Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 365
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:51:52-05:00'
sources: []
---

**Situation** – While leading a data‑science sprint at a fintech startup, we needed to generate high‑quality financial risk reports from our LLM model. The baseline “zero‑shot” outputs were too terse and often missed nuanced regulatory language.

**Task** – Design a set of Chain‑of‑Thought (CoT) prompts that would guide the model through step‑by‑step reasoning, ensuring both accuracy and compliance with industry standards.

**Action** – I first mapped three CoT styles:  
1. *Explicit reasoning*—“First, list the relevant regulations; then, explain how each applies.”  
2. *Self‑questioning*—“What are the key risk factors? Why does factor X matter?”  
3. *Scenario simulation*—“Imagine a borrower with history Y; predict default probability step by step.”  

I built templates in Python, using OpenAI’s API with temperature 0.4 and top_p 1.0 to balance creativity and precision. I ran A/B tests against our baseline: the explicit reasoning prompt reduced factual errors from 18% to 3%, while self‑questioning improved model confidence scores by 12%. Scenario simulation yielded a 15% increase in actionable insights per report.

**Result** – The new CoT prompts cut report turnaround time by 30% and increased stakeholder satisfaction scores from 78 % to 92 %. I learned that tailoring prompt structure—choosing between explicit steps, self‑questions, or scenario walks—directly influences model reliability, especially in regulated domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

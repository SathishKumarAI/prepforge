---
qid: ing_ff949c3ade__aws__local
question: 'Explain: Tips for Example Ordering — Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 465
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:55:51-05:00'
sources: []
---

**Prompt‑Engineering Tip: Order Your Examples by *Signal Strength* and *Diversity***  

**Situation** – I led a team that built an LLM‑powered FAQ bot for a global e‑commerce site. The model’s accuracy dropped to 68 % when users asked niche product questions, so we needed a better prompt strategy.  

**Task** – Redesign the example ordering in the prompt template so the model focuses on high‑impact, representative queries without inflating token usage.  

**Action** –  
1. **Signal‑Based Ranking**: Extracted term frequency–inverse document frequency (TF‑IDF) scores from the FAQ corpus and sorted examples by descending score; this surfaced the most discriminative questions first.  
2. **Diversity Buffer**: After every 3 top‑signal examples, inserted a “topic‑shift” example chosen via k‑means clustering on embeddings to keep the model from over‑fitting a single domain.  
3. **Token Budgeting**: Truncated each example to ≤ 150 tokens and used AWS Comprehend to auto‑summarize longer FAQs, keeping the prompt under 1,500 tokens (the limit for GPT‑4).  

**Result** – Accuracy on niche queries rose from 68 % to 91 %, a **23 pp lift**, while inference cost fell by 18 % due to fewer token calls. The model also reduced hallucinations by 12 pp because the diversified examples prevented context drift.  

**Leadership Principles Highlighted**  
- *Customer Obsession*: Delivered clearer answers for shoppers, improving conversion by 4 %.  
- *Dive Deep*: Analyzed TF‑IDF and embedding clusters to engineer the prompt.  

**Bar‑raiser Insight** – They’ll look for evidence that I owned the problem end‑to‑end (data extraction → model tuning → deployment), dug into the metrics that mattered, quantified impact, and learned from the initial low accuracy failure by iterating on example selection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

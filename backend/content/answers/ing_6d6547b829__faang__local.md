---
qid: ing_6d6547b829__faang__local
question: 'Explain: You need to classify and summarise 50 million records with an
  LLM. Design the pipeline and estimate the cost.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 625
total_tokens: 873
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:57:52-05:00'
sources: []
---

**Clarify**

> *Goal:* Classify + summarise **50 M** tabular/text records using an LLM.  
> *Assumptions I’d confirm:*  
> 1. Record size ≈ 1 KB (text + metadata).  
> 2. Desired summarisation length ~ 200 tokens.  
> 3. Classification labels ≤ 20 classes, no need for real‑time inference.  
> 4. Budget ≤ $30k/month and latency < 24 h.

**Approach**

1. **Data prep & batching** – chunk records into 10K‑size batches; compress with gzip (≈ 5× size reduction).  
2. **Pre‑filtering** – lightweight rule‑based/embedding classifier to drop obvious non‑relevant rows, cutting LLM calls by ~30%.  
3. **LLM inference** – use a hosted model (e.g., OpenAI GPT‑4o) with *classification* and *summarisation* prompts combined in one pass.  
4. **Post‑processing** – parse output JSON; store results in a columnar DB (Snowflake/BigQuery).  
5. **Monitoring & rollback** – spot‑check 0.1% of outputs for quality; if drift, retrain the rule‑based filter.

**Depth**

*Token calculation:*  
- Input ≈ 200 tokens per record → 50 M × 200 = 10 B tokens (≈ 2 TB).  
- Prompt + output ≈ 400 tokens → 20 B tokens total.  

*Cost estimate* (GPT‑4o: $0.03/1k input, $0.06/1k output):  
- Input: 10 B × $0.03 /1k = **$300k**  
- Output: 10 B × $0.06 /1k = **$600k**  
Total ≈ $900k – far above budget.

*Optimization:*  
- Switch to GPT‑3.5‑Turbo ($0.002/1k) → $20k + $40k = **$60k**.  
- Reduce tokens by 50% via smarter prompts and summarisation length → ~**$30k**.

**Edge Cases**

- Extremely long records (> 10K tokens): split or truncate; may lose context.  
- Ambiguous labels: fallback to human review queue.  
- API rate limits: batch with exponential back‑off.

**Optimize & Communicate**

Explain trade‑offs (model quality vs cost), show a cost‑benefit table, and present the pipeline as a diagram in the interview deck. Highlight that the rule‑based pre‑filter is key to keeping usage within budget while maintaining acceptable accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

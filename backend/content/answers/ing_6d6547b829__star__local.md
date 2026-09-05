---
qid: ing_6d6547b829__star__local
question: 'Explain: You need to classify and summarise 50 million records with an
  LLM. Design the pipeline and estimate the cost.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 429
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:06:00-05:00'
sources: []
---

**Situation**  
I was hired by a fintech startup to process and summarize 50 million transaction logs for compliance reporting. The client needed concise, LLM‑generated summaries within 48 hours and had a tight budget.

**Task**  
Build an end‑to‑end pipeline that ingests raw JSON records, classifies each record into one of ten risk categories, then produces a short natural‑language summary per transaction—all while keeping the total compute cost under $25k.

**Action**  
1. **Data staging:** Loaded logs into S3 and used Athena to run a lightweight pre‑filter that removed duplicate or malformed rows (≈ 5% reduction).  
2. **Batching & chunking:** Split the 50 M records into 500,000 batches of 100 records each; each batch was processed as a single prompt to maximize token efficiency.  
3. **Model choice:** Employed OpenAI’s GPT‑4o (8k context) via the “chat/completions” endpoint, costing $0.002 per 1K tokens. Estimated 200 tokens per summary → ~10 M tokens → $20.  
4. **Parallelism:** Ran 50 concurrent Lambda functions (15 ms cold start) to keep throughput at ≈ 300 batches/sec, completing in ~3 h.  
5. **Cost monitoring:** Used CloudWatch metrics and a custom cost‑alerting script; total spend hit $22.7k, staying below budget.

**Result**  
Delivered 50 M classified summaries in under 4 hours for $22.7k. The pipeline proved scalable: we can add more categories or larger batches with negligible re‑engineering. I learned how careful batching and real‑time cost tracking are critical when working with large language models at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

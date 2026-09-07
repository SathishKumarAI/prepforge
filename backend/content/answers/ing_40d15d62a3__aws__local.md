---
qid: ing_40d15d62a3__aws__local
question: 'Explain: Uploading test data — Working with evals | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 423
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:52:30-05:00'
sources: []
---

**Situation & Task (S)**  
When I joined a startup building an AI‑powered customer support bot, we needed to benchmark our LLM against industry standards. The team had no internal test set that matched the real user queries, so I decided to create and upload a custom evaluation dataset to OpenAI’s `evals` framework.

**Action (A)**  
1. **Gather & clean data** – Scraped 15 k support tickets, anonymized PII, and labeled intent/response quality.  
2. **Format for evals** – Structured each record as `{input: "...", target: "..."}` in JSONL, adhering to the `openai/evals` schema.  
3. **Upload & register** – Used `openai api evals create --file mydata.jsonl --name support‑bench`.  
4. **Run evaluation** – Triggered with `openai api evals run --name support‑bench --model gpt-4o-mini`, capturing metrics (accuracy, F1, latency).  
5. **Iterate** – Analyzed failures, added context prompts, and re‑evaluated until we hit 82 % intent accuracy.

**Result (R)**  
The custom eval revealed a 15 % drop in real‑world performance versus the OpenAI baseline, prompting a model fine‑tuning that lifted accuracy to 91 %. Deployment latency stayed under 300 ms, and cost per inference dropped by 18 % after pruning low‑impact examples.

**Leadership Principles Highlighted**  
- **Customer Obsession & Ownership** – Built an evaluation pipeline directly addressing user pain points.  
- **Dive Deep & Deliver Results** – Quantified impact with concrete metrics and iterated until the model met SLA targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

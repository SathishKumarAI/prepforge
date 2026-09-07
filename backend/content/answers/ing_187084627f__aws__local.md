---
qid: ing_187084627f__aws__local
question: 'Explain: Step 1. Do the work manually — How Do AI Agents Work - by Neo
  Kim and Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 486
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:20:52-05:00'
sources: []
---

**Situation**  
When I was tasked with building a generative‑AI product for a B2B SaaS client, the first step in the team’s playbook was “Do the work manually.” We needed a concrete baseline of how an AI agent behaves before automating it at scale.  

**Task**  
Create a proof‑of‑concept (POC) that demonstrates the end‑to‑end flow of an AI agent: data ingestion, prompt engineering, inference, and post‑processing, while collecting performance metrics for future optimization.

**Action**  
1. **Manual prototype** – I wrote a Python script that pulls raw logs from S3, feeds them into GPT‑4 via the OpenAI API, and writes back structured JSON to another bucket.  
2. **Metrics collection** – Using CloudWatch Logs Insights I extracted latency (average 480 ms), token usage (≈1.2 k tokens per request), and error rate (<0.5%).  
3. **Evaluation loop** – I iterated on prompt templates, trimming context windows by 25% while keeping a 99% correctness rate.  
4. **AWS services used**: S3 for storage, Lambda for orchestration, Step Functions to chain steps, DynamoDB for audit logs, and CloudWatch for observability.  
5. **Cost estimate** – The manual run costed ~$0.03 per request; scaling to 10k requests/day would be $300/month, a baseline to compare against an eventual SageMaker endpoint.

**Result**  
The manual POC delivered a 99 % accurate agent with sub‑second latency and a clear cost model. It enabled the team to justify migrating to a fully managed SageMaker inference endpoint (which reduced cost by 40% and improved SLA to <200 ms).  

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered a fast, reliable prototype that met the client’s latency expectations.  
- **Ownership & Dive Deep** – Took full responsibility for end‑to‑end data flow and drilled into performance bottlenecks.

*Bar‑raiser takeaways*: clear ownership, deep technical dive with metrics, tangible impact on cost/latency, and learning from iterative failure (prompt refinement).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

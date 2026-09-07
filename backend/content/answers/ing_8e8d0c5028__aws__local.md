---
qid: ing_8e8d0c5028__aws__local
question: 'Explain: ​ Runs — Evaluation concepts - Docs by LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 482
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:48:16-05:00'
sources: []
---

**Situation / Task**  
I was tasked to build a production‑grade AI assistant that could ingest legal documents and automatically generate concise “runs” (high‑level summaries) while letting users drill down into the full evaluation text. The goal was 90 % accuracy in key‑phrase extraction and sub‑second latency for any document under 10 MB.

**Action**  
*Customer Obsession & Ownership*: I mapped user pain points—lawyers spending >4 hrs per case—and set a KPI of <30 s turnaround.  
*Dive Deep & Bias for Action*: I chose LangChain’s evaluation module to chain OpenAI‑based summarization with a custom prompt that flags uncertainty. I wrapped it in an AWS Lambda microservice (Python 3.11) triggered by S3 uploads, using **Amazon Bedrock** for the LLM calls and **AWS Step Functions** to orchestrate retry logic.  
*Invent & Simplify*: To keep costs down, I stored raw docs in **S3 Glacier Deep Archive** post‑processing, while caching recent runs in **DAX (Redis)** for instant lookup.  
*Deliver Results*: In a 2‑week sprint I delivered a pipeline that processed 1,200 documents daily, achieved 92 % F1 on key‑phrase extraction (validated against a manually annotated gold set), and reduced lawyer time per case from 4 hrs to 45 min.

**Result**  
The system handled peak loads of 3,000 concurrent users with <99.9 % availability, costing <$2k/month versus the previous $12k/quarter LLM‑only approach—an 83 % cost saving. I documented failure modes (e.g., token limit overruns) and introduced automated rollback to a fallback rule‑based summarizer.

**Bar‑raiser takeaways**  
- Demonstrated full ownership from requirements to ops.  
- Deep dive into AWS services (Bedrock, Lambda, Step Functions, DAX) with clear trade‑offs.  
- Quantified impact on user time and cost.  
- Reflected on failures and built resilience for future iterations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

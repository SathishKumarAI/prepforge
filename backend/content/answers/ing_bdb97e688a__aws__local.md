---
qid: ing_bdb97e688a__aws__local
question: 'Explain: RAG architecture (senior+) — Glean Interview Guide (2026): Process,
  Questions, Compensation \u2013 techinterview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 520
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:32:19-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked to redesign the company’s internal knowledge‑base chatbot so that it could answer product‑specific queries with up‑to‑date documentation instead of relying on a static FAQ. The goal was to cut support tickets by 30 % and improve customer satisfaction scores from 82 % to ≥90 %.

**Action (Technical Design)**  
I proposed a **Retrieval‑Augmented Generation (RAG)** pipeline:

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Document ingestion & vector store | **Amazon Kendra** + **S3** | Kendra automatically indexes PDFs/Markdown and returns top‑ranked passages. S3 holds raw docs; cost‑effective and highly durable. |
| Retrieval layer | **Lambda@Edge** (API Gateway) | Low‑latency, globally distributed entry point; scales with request volume. |
| Generation layer | **Amazon Bedrock** (Claude 3) or **SageMaker Runtime** | Handles on‑demand inference; can be throttled to stay within cost budgets (~$0.12/1k tokens). |
| State & metrics | **DynamoDB** + **CloudWatch** | Store query logs, user feedback, and latency for continuous improvement. |

The system fetches the top 5 passages from Kendra, concatenates them with the user prompt, sends to Bedrock, and streams the answer back via WebSocket.

**Result (Quantified Impact)**  
After deployment, support tickets dropped by **34 %** in the first quarter; NPS rose from **82 %** to **91 %**. The architecture handled 15k QPS with <200 ms average latency, staying under a $1.5K/month budget.

**Reflection (Learning)**  
I initially underestimated Kendra’s cost per query, leading to a 12 % overrun in month‑one. I added a token‑budget guard in Lambda and introduced caching for frequent queries, bringing costs back within target. This experience reinforced the *Ownership* principle—owning both performance and budget—and the *Dive Deep* habit of inspecting every cost line item.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_2cc229d6d5__aws__local
question: 'Explain: A customer asks: "Should we fine-tune, use RAG, or just prompt
  better?" Give me your decision framework.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 550
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:06:14-05:00'
sources: []
---

**Answer (≈210 words)**  

> **Situation:** A mid‑market retailer wants to launch a chatbot that recommends products and answers policy questions.  
> **Task:** Decide whether to fine‑tune a LLM, implement Retrieval‑Augmented Generation (RAG), or simply craft better prompts.  
> **Action:** I built a lightweight decision framework anchored in **Customer Obsession** and **Ownership**.

| Criterion | Why it matters | Decision rule |
|-----------|----------------|---------------|
| **Latency** | Users expect < 200 ms replies. | If < 200 ms → *prompt engineering*; else RAG or fine‑tune. |
| **Content freshness** | Policy docs change weekly. | If > 30 % of content changes in last 30 days → RAG (dynamic retrieval). |
| **Accuracy needed** | Policy compliance requires 99 % correctness. | If target accuracy > 95 % and training data is available → fine‑tune; otherwise RAG with a confidence threshold. |
| **Cost & scalability** | Budget $5k/month, traffic 10k req/day. | Fine‑tuning costs ~\$2k/month + inference ($0.02/req). RAG adds S3+Bedrock retrieval (~\$0.005/req). Prompting is cheapest. |

**Implementation (AWS stack)**  
- **Prompt engineering:** Use Amazon Bedrock *Claude* or *GPT‑4o* with carefully crafted system prompts; store prompt templates in DynamoDB for A/B testing.  
- **RAG:** Store policy PDFs in S3, index with Amazon Kendra (or OpenSearch) for semantic search; invoke via Bedrock’s Retrieval API.  
- **Fine‑tune:** Use Bedrock’s fine‑tuning on a curated dataset of 5k Q&A pairs; monitor drift with SageMaker Model Monitor.

**Result:** Applied this framework in a pilot: latency dropped to 180 ms, accuracy hit 97 %, and costs fell by 35 % compared to an earlier ad‑hoc fine‑tune approach.  
> **Bar‑raiser focus:** Did I own the trade‑offs? (Yes – clear cost/accuracy thresholds). Did I dive deep into metrics? (Latency, drift, cost). Learned from a failed RAG rollout where we ignored content freshness, leading to stale answers—now I enforce the 30 % rule.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

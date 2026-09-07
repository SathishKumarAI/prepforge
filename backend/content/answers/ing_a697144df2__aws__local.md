---
qid: ing_a697144df2__aws__local
question: 'Q: Why would you still use RAG if frontier models ship 1M-2M token contexts?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 547
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:43:42-05:00'
sources: []
---

**Answer (Amazon style)**  

During my last role as a Solutions Architect at AWS, we were asked to build a compliance‑aware legal chatbot for a Fortune 500 client. The model’s context window had grown to 1.5M tokens, so the instinct was to drop RAG entirely. I chose **not** to.  

| S | T | A | R |
|---|---|---|---|
| **Situation:** Client needed instant answers while keeping proprietary case files out of a public LLM. | **Task:** Reduce token usage and maintain audit trails without sacrificing accuracy. | **Action:** Implemented a hybrid RAG pipeline: *Step Functions* orchestrated *Lambda* to query a *DynamoDB* index, fetch relevant PDFs from *S3*, embed them with *Amazon Bedrock* embeddings, and pass only the top 5 snippets (≈ 2K tokens) to the LLM. | **Result:** Token consumption dropped 78 % (from ~200k to ~44k per request), cutting inference cost by $0.04 per query—$48k annually for our 300k queries. Latency stayed under 250 ms, meeting SLA. Compliance logs were stored in S3 with fine‑grained IAM policies, satisfying audit requirements. |

**Why RAG still matters:**  
- **Domain specificity**: Even a 2M‑token model can’t embed every niche law; retrieval ensures up‑to‑date facts.  
- **Cost & speed**: Smaller prompts mean cheaper GPU time and lower latency.  
- **Explainability & governance**: We can audit the retrieved snippets, something opaque LLM outputs cannot provide.

**AWS services used:** S3, DynamoDB, Bedrock (embedding & inference), Lambda, Step Functions, IAM.  

**Bar‑raiser cues I hit:** Ownership of cost and compliance; dive deep into token economics; quantified impact on spend and latency; learned that “more context” isn’t always better when you can *retrieve* the right context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

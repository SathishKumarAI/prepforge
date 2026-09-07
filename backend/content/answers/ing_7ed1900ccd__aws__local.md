---
qid: ing_7ed1900ccd__aws__local
question: 'Explain: Contains Keywords — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 416
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:11:50-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
When our product team launched a conversational AI for customer support, we needed to guarantee that the model’s responses stayed on brand and didn’t surface disallowed content. The “Contains‑Keywords” metric was chosen as an early‑warning signal: if a response contained any of a curated blacklist (e.g., policy‑violating terms), it would be flagged for review.

**Action (Dive Deep, Bias for Action)**  
1. **Requirement Clarification** – We defined the keyword set (≈ 120 words) and built a deterministic lookup table stored in DynamoDB for fast read.  
2. **Design** – Each LLM inference ran through a lightweight Lambda that streamed the output to an Amazon Kinesis Data Stream; a downstream Fargate task performed a regex scan against the DynamoDB list, returned a Boolean flag, and routed the text to either “safe” or “review” queues in SQS.  
3. **Scalability & Cost** – Using serverless components (Lambda + Fargate) kept the per‑request cost <$0.0001, while Kinesis shards were auto‑scaled based on request volume, guaranteeing < 50 ms latency.

**Result (Deliver Results)**  
- Reduced policy‑violations by **92%** in production within 3 weeks.  
- Cut manual review hours from 15 h/week to 2 h/week, saving ~ $1.8k/month.  

**Bar‑raiser Insight**  
They’ll note my ownership of the full pipeline, deep dive into DynamoDB vs. in‑memory solutions, and quantified impact on compliance & cost—plus lessons learned when an initial regex missed a new slang term, prompting us to add automated NLP‑based keyword expansion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

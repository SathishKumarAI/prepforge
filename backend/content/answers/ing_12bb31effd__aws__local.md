---
qid: ing_12bb31effd__aws__local
question: 'Explain: Step 4: Build Your Judge Prompt — Ai Evals Comprehensive Study
  Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 454
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:07:41-05:00'
sources: []
---

**Step 4 – Build Your Judge Prompt (AI‑Evals)**  
*Leadership Principles: Customer Obsession & Ownership*

**Situation**  
When launching our internal ML model validation platform, I realized the existing “human‑judge” process was slow and inconsistent. Stakeholders demanded a faster, repeatable way to score new models against production benchmarks.

**Task**  
Design an automated *Judge Prompt* that feeds evaluation data into an LLM, parses its responses, and outputs structured metrics for downstream dashboards—while keeping latency < 200 ms per request.

**Action**  
1. **Requirements & Design** – Defined the prompt schema:  
   - Input JSON (predictions, ground truth, metadata) → Prompt template → LLM → Structured JSON output.  
2. **AWS Services** –  
   - *Amazon Bedrock* for low‑latency inference with a fine‑tuned GPT‑4o model.  
   - *Step Functions* orchestrate prompt assembly and post‑processing.  
   - *DynamoDB* stores evaluation logs; *EventBridge* triggers real‑time alerts.  
3. **Scalability & Cost** – Implemented request batching (max 32 evals) to amortize Bedrock costs; used reserved capacity for predictable traffic, keeping spend < $0.03 per eval.  
4. **Reliability** – Added retry logic with exponential back‑off and a fallback rule‑based scorer.

**Result**  
Reduced model evaluation turnaround from ~5 min to 150 ms, cutting review cycles by 90%. The new pipeline handled 1,200 concurrent requests with 99.9% availability during peak load. Post‑implementation, model deployment frequency rose from 2×/month to weekly, directly improving customer satisfaction scores.

**Reflection**  
I learned that a well‑crafted prompt is as critical as the underlying LLM; iterative testing against edge cases prevented downstream bias. This approach now serves as our standard for any AI‑evaluation workflow across services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_39bc550274__aws__local
question: 'Title: SWE-bench: Can Language Models Resolve Real-World GitHub Issues?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 424
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:37:00-05:00'
sources: []
---

**Situation & Task**  
At my previous company we built a self‑service “SWE‑Bench” to let developers auto‑resolve open GitHub issues using a fine‑tuned LLM. The goal was to reduce mean time to resolution (MTTR) by 30 % for high‑volume repos while keeping the cost per issue <$0.50.

**Action**  
1. **Ownership & Dive Deep** – I wrote an end‑to‑end pipeline:  
   * Scrape issue text → preprocess → encode with a DistilBERT encoder.  
   * Fine‑tune on 120 k labeled GitHub issues (label = “resolved” vs “needs more info”).  
2. **AWS Services** –  
   * **S3** for raw & processed data, **Lambda** for lightweight orchestration, **ECS Fargate** for model inference (GPU‑enabled).  
   * **Step Functions** to retry failed predictions and route to human triage if confidence < 0.7.  
3. **Scalability/Cost** – Using spot instances + auto‑scaling reduced GPU cost by 40 %. We capped daily inference to 50k requests; with a per‑request cost of $0.30, the total spend stayed below $15k/month.  
4. **Bias for Action & Deliver Results** – Deployed A/B test on 3 repos: MTTR dropped from 12 h to 7.2 h (40 % reduction) and issue closure rate increased by 22 %. The LLM correctly classified 84 % of “resolved” issues, which we validated against the repo’s CI status.

**Result**  
The system achieved a **$30k annual savings** in support effort and a **4× faster developer loop**, demonstrating that language models can reliably resolve real‑world GitHub issues when built with ownership, data‑driven validation, and scalable AWS infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

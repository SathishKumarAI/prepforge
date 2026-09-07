---
qid: ing_402d1d6e49__aws__local
question: 'Explain: Recursive Structure Splitting — Chunking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 424
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:50:49-05:00'
sources: []
---

**Recursive Structure Splitting – Chunking Strategy for LLMs**

*Situation*: In a previous role I led the redesign of our AI‑driven recommendation engine that processed user queries up to 64 k tokens. The model’s GPU memory capped at 16 k, causing frequent OOM errors and 30 % slower inference.

*Task*: Build a scalable chunking pipeline that preserves semantic coherence while staying within hardware limits.

*Action*: I applied **Recursive Structure Splitting**—a divide‑and‑conquer approach that recursively splits text only when structural boundaries (sentences, clauses) are violated.  
1. **Pre‑process** with spaCy to tag sentence boundaries.  
2. Use a recursive function that merges adjacent sentences until the token count ≈ 14 k, then spawns a new chunk.  
3. Each chunk is sent to an Amazon SageMaker endpoint (GPU P4d) via **AWS Step Functions**; results are aggregated with **Amazon DynamoDB** for stateful merging.

I chose Step Functions for its *built‑in retry* and *parallelism*, keeping availability >99.9 %. Cost was reduced by 18 % because we avoided over‑provisioning GPUs.  

*Result*: After deployment, inference latency dropped from 1.8 s to 0.6 s per request, and GPU utilization rose from 45 % to 78 %. Customer satisfaction scores improved by 12 points (NPS).  

**Leadership Principles**: *Ownership* – I owned the end‑to‑end pipeline; *Dive Deep* – dissected tokenization patterns to engineer a rule‑based splitter. **Bar‑raiser cues**: quantified performance uplift, clear trade‑off analysis, and post‑mortem of OOM incidents that informed our design choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

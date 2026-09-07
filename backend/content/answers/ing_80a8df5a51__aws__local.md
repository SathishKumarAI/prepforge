---
qid: ing_80a8df5a51__aws__local
question: 'Explain: Use at runtime — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 475
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:15:53-05:00'
sources: []
---

**Situation / Task**  
At a fintech startup I was tasked with validating every LLM‑powered recommendation before it hit the user’s dashboard. The model output varied wildly, so we needed an on‑the‑fly evaluation pipeline that could score quality, bias, and compliance without adding latency.

**Action (Design)**  
I built a **runtime eval engine** that hooks into *Langwatch* for live monitoring and *Langfuse* for structured scoring.  

1. **Trigger:** Each LLM call is wrapped in an AWS Lambda that writes the prompt‑response pair to an S3 bucket.  
2. **Evaluation:** A second Lambda pulls the payload, runs Langfuse’s prebuilt “Safety” and “Coherence” evaluators, then feeds the result back into Langwatch as a custom metric (`llm_score`).  
3. **Decision logic:** If `llm_score < 0.75`, the Lambda rewrites the prompt (using a fallback rule set) and re‑calls the LLM; otherwise it streams the answer to the user via API Gateway.

**Result**  
- Latency increased by only **12 ms** on average, well within SLA.  
- The real‑time scoring reduced erroneous recommendations by **34%**, cutting downstream support tickets by 18K/month.  
- Cost of the Lambda + S3 + Langwatch/Langfuse was < $0.05 per inference, keeping us below the budget cap.

**Reflection (Bar‑raiser)**  
I owned the entire end‑to‑end flow, diving deep into AWS event loops and Langfuse’s API contract to avoid cold‑start spikes. The quantitative impact—latency, ticket reduction, cost—demonstrated clear ownership. I also documented a rollback plan that used a “shadow” mode for A/B testing, learning from failures by iterating on the eval thresholds.  

**Leadership Principles Anchored**  
- **Customer Obsession** – ensuring every recommendation meets quality standards before reaching users.  
- **Ownership & Dive Deep** – taking full responsibility for latency, cost, and reliability while deeply exploring AWS and Langfuse internals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

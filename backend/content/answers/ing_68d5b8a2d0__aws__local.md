---
qid: ing_68d5b8a2d0__aws__local
question: 'Explain: 🤝 Contributing — GitHub - langfuse/langfuse: \ud83e\udea2 Open
  source AI engineering platform: LLM evals, observability, metrics, prompt management,
  playground, datasets. Integrates with OpenTelemetry, LangChain, OpenAI SDK, LiteLLM,
  and more. \ud83c\udf4aYC W23 \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 306
output_tokens: 515
total_tokens: 821
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:21:23-05:00'
sources: []
---

**Situation (S)**  
While leading a cross‑functional AI product at my previous company, we struggled with reproducible LLM experiments and real‑time observability. The team spent hours manually collecting metrics from each model run and had no unified playground for prompt tuning.

**Task (T)**  
I was tasked to build an end‑to‑end platform that could:  
1. Run LLM evaluations at scale,  
2. Capture telemetry in a single source of truth,  
3. Expose dashboards and prompt management tools, and  
4. Integrate with the popular open‑source stack (OpenTelemetry, LangChain, OpenAI SDK, LiteLLM).

**Action (A)**  
I chose **langfuse** as our core framework because it already bundles:  
- **Evaluation engine** – runs batched prompts against multiple models;  
- **Observability layer** – automatically emits OpenTelemetry spans for latency, cost, and token usage;  
- **Prompt playground & dataset UI** – built on React + FastAPI.  

I wrapped the repo in a serverless architecture:  
* **AWS Lambda** (Python) for evaluation workers, scaling to 1k concurrent invocations.  
* **Amazon API Gateway** exposes REST endpoints with OIDC auth from Cognito.  
* **DynamoDB** stores prompt metadata and results; **S3** holds raw logs.  
* **Athena + QuickSight** generate ad‑hoc analytics dashboards.  

Cost was < $30/month for 10k evaluation calls, and the platform reduced manual metric collection time by **85%** (from ~4 hrs to ~45 min).  

**Result (R)**  
The team could iterate on prompts in minutes, see real‑time cost/latency graphs, and ship production models with confidence. The solution was adopted by 3 downstream services, saving an estimated $12k/month in ops overhead.

---

> **Bar‑raiser cues:**  
> • Demonstrated *ownership* of the entire pipeline.  
> • Showed *dive deep* into AWS cost modeling and latency trade‑offs.  
> • Quantified impact (85% time savings, $12k/month).  
> • Learned from early failures: switched from EC2 to Lambda after a 30 min cold‑start spike, improving reliability by 99.9%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

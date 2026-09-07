---
qid: ing_e550767a30__aws__local
question: 'Explain: Workflows vs agents — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 467
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:56:30-05:00'
sources: []
---

**Answer (Amazon Way)**  

> *“Agents are autonomous actors that can invoke tools on behalf of a user; workflows are orchestrated sequences of steps that may involve multiple agents or manual inputs.”*  

### Context & Challenge  
In **Q3 2024**, our ML Ops team needed to automate model retraining and deployment across 12 regions while keeping latency < 2 s for inference. Traditional batch pipelines were slow, and manual triggers caused drift.

### Action (Technical Design)  
1. **Workflow** – built with *AWS Step Functions* to coordinate data ingestion → preprocessing → training → validation → deployment.  
2. **Agent** – a *Lambda‑based agent* (`ModelRetrainer`) that listens to S3 events, calls SageMaker Training jobs, and uses the OpenAI API as an external tool for hyper‑parameter tuning.  
3. Tool integration via *AWS SDK* wrappers; state machine passes tool output back into the workflow.  

### Result (Data‑driven)  
- **Throughput**: 30 % increase in model refresh rate (from 24 h to 6 h).  
- **Latency**: inference latency dropped from 3.5 s to 1.8 s.  
- **Cost**: overall spend reduced by $12k/month due to serverless scaling and reduced idle SageMaker instances.

### Leadership Principles Highlighted  
- **Customer Obsession** – faster, more reliable models directly improve user experience.  
- **Ownership & Dive Deep** – I mapped every step, identified bottlenecks, and iterated on the agent’s error handling logic.  

### Bar‑raiser Signals  
- Demonstrated ownership by fully owning the end‑to‑end pipeline.  
- Showed depth with a clear trade‑off analysis (Lambda vs EC2 for agents).  
- Quantified impact with concrete metrics.  
- Reflected on early failures: first iteration misparsed tool output, leading to retraining loops; we added schema validation and automated rollback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

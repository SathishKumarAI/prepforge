---
qid: ing_3d87de75d9__aws__local
question: 'Explain: GitHub - crewAIInc/crewAI: Framework for orchestrating role-playing,
  autonomous AI agents. By fostering collaborative intelligence, CrewAI empowers agents
  to work together seamlessly, tackling complex tasks. · GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 377
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:44:51-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a project to build an AI‑powered workflow for processing large volumes of customer support tickets. The goal was to reduce manual triage time by 60 % while keeping SLA compliance above 99 %.  

**Action**  
I chose **CrewAI** (GitHub: crewAIInc/crewAI) because its role‑orchestrated agent model fits the “customer obsession” and “ownership” principles. I mapped each ticket to a *role*—“Classifier”, “Sentiment Analyzer”, “Resolution Suggestor”. Using AWS Step Functions, each role became an autonomous Lambda‑driven microservice; DynamoDB stored intermediate states; S3 archived raw logs.  
I implemented **Amazon Bedrock** for the base language model and added custom prompts per role to keep inference costs low (≈$0.0015/req). The orchestration layer leveraged Step Functions’ retry & timeout policies, ensuring 99.9 % availability even under spike traffic.

**Result**  
After two weeks of A/B testing, triage time dropped from 12 min to 4 min per ticket—a **66 % reduction**—and SLA adherence improved from 96 % to 99.8 %. Cost savings were 30 % versus a monolithic model approach.  

**Reflection (Bar‑raiser focus)**  
I own the end‑to‑end pipeline, diving deep into Step Functions’ state machine logs to optimize retry logic. The measurable impact (time & cost) satisfies Amazon’s “Deliver Results” principle, and I documented lessons on prompt tuning that are now part of our internal playbook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

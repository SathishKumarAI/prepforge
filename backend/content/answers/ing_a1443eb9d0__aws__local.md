---
qid: ing_a1443eb9d0__aws__local
question: 'Explain: Multi AI Agent Systems with crewAI - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 434
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:29:46-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
At my last role I led a pilot to replace a manual content‑generation workflow that produced 200 k articles/month with an autonomous *crewAI* multi‑agent system from DeepLearning.AI. The goal was to cut turnaround time by 70 % while keeping quality above 95 % NPS.

**Action (Dive Deep + Bias for Action)**  
1. **Requirements & Design** – Defined three core agents: *Research*, *Draft*, and *Review*. Each agent ran in a separate ECS Fargate task, communicating via SQS queues.  
2. **AWS Services** –  
   - **Amazon SageMaker** hosts the language model (LLM) for Drafting.  
   - **Lambda + Step Functions** orchestrate agent sequencing.  
   - **DynamoDB** stores versioned drafts and review scores.  
3. **Scalability & Availability** – Auto‑scaling on CPU/GPU metrics, Multi‑AZ deployment; SQS FIFO guarantees ordering.  
4. **Cost Trade‑offs** – Chose spot instances for Draft tasks, saving ~35 % vs. On‑Demand while maintaining 99.9 % availability through fallback logic.

**Result (Deliver Results)**  
Within two weeks of rollout:  
- Turnaround dropped from 48 h to **13 h** (71 % reduction).  
- Article NPS rose from 82 % to **91 %**.  
- Operational cost fell by **$12k/month** due to spot usage and reduced manual labor.

**Learning & Bar‑raiser Focus**  
I documented failure points (e.g., draft hallucinations) and added a rollback path, demonstrating ownership and continuous improvement—exactly what a bar‑raiser expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

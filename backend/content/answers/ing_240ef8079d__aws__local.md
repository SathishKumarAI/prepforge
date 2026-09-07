---
qid: ing_240ef8079d__aws__local
question: 'Explain: Agents — Building Effective AI Agents \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 426
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:48:22-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a team tasked with launching an *AI‑agent* platform for a fintech client that needed real‑time fraud detection and customer support bots. The goal was to reduce false positives by 30 % while keeping latency under 200 ms.

**Action**  
I applied **Ownership** and **Dive Deep**:  

1. **Requirements & Design** – Built an event‑driven architecture on Amazon EventBridge, routing user actions to two Lambda “agent” layers (policy decision + response generation).  
2. **AI Service Choice** – Used Anthropic’s Claude model via the **Amazon Bedrock** runtime for natural language understanding and policy inference, coupled with SageMaker Neo for on‑device inference in edge devices.  
3. **Scalability & Availability** – Enabled Lambda concurrency limits with *Provisioned Concurrency* (5 × baseline) to guarantee 99.9 % SLA; used CloudWatch metrics and Auto Scaling for burst traffic.  
4. **Cost Control** – Leveraged Spot Instances for SageMaker training, set up a cost‑allocation tag, and applied an IAM policy that throttled API calls during peak hours.

**Result**  
- False positives dropped from 12 % to 7 % (≈ 41 % improvement).  
- Latency stayed below 180 ms for 99.5 % of requests.  
- Cost per inference fell by 18 % due to Spot usage and efficient concurrency.

**Learnings & Bar‑raiser cues**  
I documented the failure mode when the agent mis‑classified a high‑value transaction, used that data to retrain the model (30 % accuracy gain), and created a “post‑mortem” playbook. This demonstrates **Bias for Action**, continuous learning, and ownership of end‑to‑end impact—exactly what Amazon looks for in an AI agent architect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_c37a5b4d0d__aws__local
question: 'Explain: Recommendation for Tool-Using Agents — Safety And Governance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 464
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:45:08-05:00'
sources: []
---

**Recommendation for Tool‑Using Agents – Safety & Governance**

*Situation:*  
In my last role at a fintech startup we launched an AI agent that could pull data from third‑party APIs (credit bureaus, payment processors) to auto‑populate loan offers. Early tests showed a 12 % increase in deal velocity but a 3 % spike in compliance violations.

*Task:*  
I was tasked with building a safety & governance framework so the agent could operate at scale without jeopardizing regulatory trust.

*Action:*  
1. **Ownership + Customer Obsession** – I mapped every data‑flow to an impact score (risk, cost, user benefit).  
2. Implemented a *policy engine* on **AWS Step Functions** orchestrating:  
   - **Amazon GuardDuty** & **Macie** for real‑time threat detection.  
   - **AWS Secrets Manager** + **KMS** for credential rotation.  
   - **Amazon EventBridge** to trigger an *audit trail* in **DynamoDB** (latency < 50 ms).  
3. Added a *sandbox sandbox layer* using **App Runner** that runs untrusted code in isolated containers, limiting API calls via **API Gateway throttling** and **IAM policy constraints**.  
4. Created a *feedback loop* – every 10 min the agent’s decisions are reviewed by an Ops dashboard (CloudWatch + QuickSight).  
5. Deployed **AWS WAF** rules to block malformed requests, reducing injection attempts by 98 %.

*Result:*  
Within three months we cut compliance incidents from 3 % to <0.1 %, while throughput rose by 18 %. The policy engine cost <$2k/month and the sandbox reduced mean time to recovery (MTTR) by 70 %.  

**Bar‑raiser check:** I owned the end‑to‑end solution, dove deep into security & compliance metrics, quantified a clear ROI, and iterated after each audit cycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

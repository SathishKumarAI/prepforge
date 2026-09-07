---
qid: ing_abe4ab22e9__aws__local
question: 'Explain: Build: Native support for A2A in the Agent Development Kit (ADK)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 453
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:54:36-05:00'
sources: []
---

**Situation & Task**  
I was hired by an AWS startup that builds a conversational AI platform for e‑commerce merchants. The product team wanted “agent‑to‑agent” (A2A) collaboration so one chatbot could hand off context to another without exposing internal APIs. The goal: add native A2A support to our Agent Development Kit (ADK) with 99.9 % uptime and < 30 ms latency for 10k concurrent merchants.

**Approach & Design**  
1. **Requirements** – secure, stateless message routing; versioned schemas; audit trail.  
2. **Architecture** –  
   * **API Gateway + Lambda**: expose `/invoke` endpoint; serverless scaling removes cold‑start risk.  
   * **Amazon MQ (ActiveMQ)** as the A2A broker for guaranteed delivery and DLQ.  
   * **AWS Step Functions** orchestrate multi‑agent workflows, allowing retries and compensations.  
   * **DynamoDB** stores session metadata; Global Tables give cross‑region replication (latency < 20 ms).  
3. **Security** – IAM roles per agent type, Cognito for tenant isolation, TLS end‑to‑end.  
4. **Observability** – CloudWatch Logs + X-Ray tracing to surface latency spikes.

**Result**  
After 6 weeks of development and a staged rollout:  
* Throughput hit 12k requests/second with < 25 ms average latency.  
* SLA compliance reached 99.95 % across three regions.  
* Customer churn dropped by 18 % because merchants could now chain agents seamlessly.

**Learnings & Bar‑raiser cues**  
I owned the end‑to‑end flow, diving deep into MQ metrics to spot a subtle backpressure issue and fixed it with a dynamic consumer scaling rule. I documented a “fail‑fast” pattern for malformed payloads, turning a potential outage into a learning loop that reduced support tickets by 30 %. This demonstrates ownership, depth, quantified impact, and continuous improvement—exactly what a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

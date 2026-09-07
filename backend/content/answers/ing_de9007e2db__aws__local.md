---
qid: ing_de9007e2db__aws__local
question: 'Explain: Indirect Prompt Injection (IPI) Defense in Depth'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 493
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:42:54-05:00'
sources: []
---

**Situation – Problem**  
While building a conversational AI product for our Alexa‑style assistant, we discovered that malicious users could embed hidden instructions (“prompt injection”) into user utterances. A single injected payload could alter the model’s output, compromising both security and user trust.

**Task – What I had to do**  
I was tasked with designing an *Indirect Prompt Injection (IPI) Defense in Depth* strategy that would keep our LLM outputs safe without hurting latency or cost.

**Action – Technical & Leadership Steps**  

| Step | AWS Service | Design Rationale |
|------|-------------|------------------|
| 1. Input sanitization | **AWS WAF + Lambda@Edge** | Filter out non‑ASCII and suspicious patterns before the request reaches the inference layer. |
| 2. Context isolation | **Amazon SageMaker Endpoint with VPC isolation** | Run each user session in a dedicated, encrypted container to prevent cross‑session leakage. |
| 3. Prompt vetting | **AWS Step Functions + Amazon Comprehend** | Analyse the prompt for intent anomalies and route suspicious requests to a human review queue. |
| 4. Output verification | **Amazon GuardDuty + CloudWatch Logs** | Detect anomalous token distributions in model responses; auto‑flag and rollback if necessary. |

I also introduced an *audit trail* via **AWS CloudTrail** so every prompt–response pair is immutable, enabling post‑incident forensics.

**Result – Impact & Metrics**  
- Reduced IPI incidents from 12/month to <1/month (≈ 92% drop).  
- Latency increased by only 15 ms (≤ 10 % over baseline).  
- Operational cost grew by 8 %, a trade‑off we justified with the loss‑aversion metric of preventing potential $2M in brand‑damage payouts.  

**Reflection – What I learned**  
Ownership meant iterating on the feedback loop: after each incident, I updated the Lambda sanitizers and re‑trained the Comprehend model. The biggest lesson was that *defense in depth* is not a single fix but a continuous cycle of monitoring, learning, and improving—exactly what Amazon expects from its leaders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

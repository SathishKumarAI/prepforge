---
qid: ing_c6bbcd6d5a__aws__local
question: 'Explain: As an FDE: a contact centre wants to replace its IVR with voice
  agents. Run the engagement.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 567
total_tokens: 810
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:52:01-05:00'
sources: []
---

**Situation (S)**  
A regional contact centre handling ~30 k calls/day wanted to replace its legacy IVR with AI‑powered voice agents to cut wait times and improve CSAT.

**Task (T)**  
Design a fully managed, scalable solution that can handle peak 1.5 k concurrent conversations, reduce average handling time by ≥25 %, and maintain 99.9 % uptime.

**Action (A)**  

| Step | AWS Services | Rationale |
|------|--------------|-----------|
| 1 | **Amazon Connect** + **Contact Flow** | Native telephony platform; zero‑code integration with AI services. |
| 2 | **Amazon Lex** (voice bot) | Handles natural language understanding, multi‑turn dialogue, and can be updated without redeploying code. |
| 3 | **AWS Lambda** | Orchestrates business logic, retrieves data from **DynamoDB**, invokes external APIs. |
| 4 | **Amazon Transcribe Streaming** | Provides real‑time speech‑to‑text for fallback or audit when Lex confidence <70 %. |
| 5 | **Amazon Polly** | High‑quality TTS for dynamic responses; supports multiple voices and languages. |
| 6 | **Amazon CloudWatch & X-Ray** | Continuous monitoring, latency metrics, and root‑cause analysis. |

*Scalability*: Connect scales elastically to thousands of simultaneous calls; Lex automatically shards; Lambda concurrency limits are increased per account.  
*Availability*: All services are multi‑AZ by design; fallback to Transcribe ensures 99.95 % uptime.  
*Cost*: Pay‑per‑second for Connect, per interaction for Lex, and per minute for Transcribe/Polly—total projected savings of ~30 % vs legacy IVR.

**Result (R)**  

- **CSAT rose from 72 % to 88 %** within 90 days.  
- **Average handle time dropped by 32 %** (from 4:12 min to 2:45 min).  
- **Cost per contact fell 28 %**, saving ~$120k annually.

**Bar‑raiser cues**  
I owned the end‑to‑end rollout, dove deep into latency logs to tune Lex confidence thresholds, quantified impact with clear KPIs, and iterated after a 5 % dip in early adoption by adding fallback prompts—learning that continuous user feedback loops are critical for sustained success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

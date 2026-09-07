---
qid: ing_c6bbcd6d5a__faang__local
question: 'Explain: As an FDE: a contact centre wants to replace its IVR with voice
  agents. Run the engagement.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 516
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:22:54-05:00'
sources: []
---

**Clarify**  
The client runs a call‑center that currently uses a scripted IVR. They want to deploy AI‑powered voice agents (e.g., Rasa, Amazon Lex) to handle customer interactions in real time. I’d confirm:  

- What volume of calls per day?  
- Which languages / accents must be supported?  
- Desired SLA (average handle time, first‑contact resolution).  
- Existing telephony infrastructure (PSTN/VoIP).  
- Integration points (CRM, ticketing, billing systems).  

**Approach**  
1. **Assessment & Design** – Map current IVR flows to intent–entity structures; identify high‑volume use cases.  
2. **Prototype** – Build a minimal NLU model with a few intents and test against recorded calls.  
3. **Telephony Integration** – Use a SIP gateway (e.g., Twilio, Plivo) or on‑prem Asterisk to route calls to the bot via REST/WebSocket.  
4. **Fallback & Hand‑off** – Implement graceful handover to live agents when confidence < threshold or intent is “escalate.”  
5. **Monitoring** – Real‑time metrics (confidence, dropout rate), logging for continuous retraining.  

**Depth**  
- NLU: Transformer‑based model fine‑tuned on domain data; 99 % F1 on intents.  
- Speech‑to‑Text: Whisper or Google STT with 95 % WER in target accents.  
- Text‑to‑Speech: Neural TTS (e.g., Amazon Polly) for natural prosody.  
- Latency: End‑to‑end < 200 ms to meet IVR SLA.  
- Scalability: Containerized services behind a load balancer; autoscale based on call queue length.

**Edge Cases**  
- Background noise / low‑quality audio → fallback to live agent.  
- Unknown intents → prompt clarification or offer to transfer.  
- Legal compliance (recording consent) – ensure encryption at rest/transport.  

**Optimize & Communicate**  
Iterate on intent coverage, continuously retrain with new call logs to improve accuracy. Present progress via dashboards and a pilot run with 10% of traffic before full rollout. This structured plan demonstrates clear problem framing, technical depth, and a path to measurable success—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

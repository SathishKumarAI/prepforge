---
qid: ing_317ee7ab1d__faang__local
question: 'Explain: Cost estimate — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 532
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:39:23-05:00'
sources: []
---

**Clarify**  
You’re asking for a cost model for an on‑prem or cloud‑based real‑time voice agent that accepts spoken input, transcribes it, runs NLP inference, and produces a spoken reply. I’ll assume: 1) continuous 24/7 uptime; 2) single‑tenant deployment (no multi‑tenant discounts); 3) modest concurrency (≤ 200 simultaneous calls); 4) use of commercial APIs for ASR/TTS unless you build your own.

**Approach**  
Break the stack into three layers:  
1. **Speech‑to‑Text (ASR)** – per‑second or per‑character billing.  
2. **NLP inference** – GPU/CPU compute time plus model storage.  
3. **Text‑to‑Speech (TTS)** – again per‑second or per‑character pricing.  
Add fixed costs: VMs, networking, monitoring, and a 10–20 % buffer for burst traffic.

**Depth**  
| Layer | Typical Cloud Price | Monthly Cost (200 calls/day, 5 min each) |
|-------|---------------------|----------------------------------------|
| ASR (e.g., Google Speech‑to‑Text) | $0.006/second | ~$1 100 |
| TTS (Google Text‑to‑Speech) | $4.00/10 k characters (~$0.0004/sec) | ~$700 |
| NLP (GPU VM e.g., g4dn.xlarge, 24h) | $0.526/hr | ~$380 |
| Storage/Network + buffer | – | ~$200 |
**Total ≈ $2.3K/month**  
If you self‑host ASR/TTS with open‑source models on cheaper VMs the compute cost drops to ~$150–$250, but you pay for data transfer and licensing of large language models.

**Edge Cases**  
- **Burst traffic**: scale GPU nodes horizontally or use spot instances.  
- **Long utterances**: ASR/TTS rates spike; monitor per‑session length.  
- **Model updates**: retraining can incur temporary compute spikes.  

**Optimize & Communicate**  
*Optimization*: Cache frequent replies, batch inference, and pre‑warm GPU pools. *Communication*: Present the table, explain assumptions, and walk through a single call’s cost flow so interviewers see you can translate architecture to dollars.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

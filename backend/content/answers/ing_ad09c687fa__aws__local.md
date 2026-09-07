---
qid: ing_ad09c687fa__aws__local
question: 'Explain: Cascaded ASR plus LLM plus TTS, or a native speech-to-speech model?
  Argue both sides for an enterprise support deployment.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 556
total_tokens: 807
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:56:56-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a recent **AWS Enterprise AI Lab**, I led the design of a speech‑to‑speech system for a global telecom client that needed 99.9 % uptime and < 50 ms latency.  
*Situation:* The client’s support agents handled > 200k calls/day, but manual transcription and translation caused SLA drift (average 12 s delay).  
*Task:* Build an end‑to‑end solution with minimal operational overhead.  

**Option A – Cascaded ASR → LLM → TTS**  
- **ASR**: Amazon Transcribe (custom vocab) → 99.5 % WER on domain data.  
- **LLM**: Amazon Bedrock (Claude 3) for intent extraction, summarization, and response generation; 0.75 s per request.  
- **TTS**: Amazon Polly with Neural voices; < 30 ms synthesis.  

*Pros:* Fine‑tuned models, easier debugging, better control over each stage.  
*Cons:* Latency accumulates (≈ 1.5 s), higher cost due to multiple calls.

**Option B – Native Speech‑to‑Speech**  
- **Model**: Deploy a custom Whisper‑based encoder–decoder on SageMaker Neo for edge inference.  
- **Inference**: 0.6 s total, single GPU per node; cost $0.04/hr vs $0.07/hr for cascaded.  

*Pros:* Lower latency, reduced ops (single model).  
*Cons:* Harder to update components individually; risk of cascading failures.

**Result:** I championed the cascaded approach initially, achieving a 30 % reduction in average call handling time and a cost saving of $120k/yr by using Spot Instances. Later, we migrated a high‑volume tier to the native model, cutting latency by 60 % while keeping cost within budget.

**Leadership Principles:**  
- **Customer Obsession**: We measured agent satisfaction (CSAT ↑12%) and SLA compliance (↓8%).  
- **Ownership & Dive Deep**: I built monitoring dashboards, performed root‑cause analysis on ASR errors, and iterated model weights.  

**Bar‑raiser check:** The solution showed ownership (full pipeline responsibility), depth (metrics‑driven optimization), quantified impact (time & cost savings), and learning from failure (switching to native when needed).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

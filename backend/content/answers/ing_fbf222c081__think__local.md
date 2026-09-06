---
qid: ing_fbf222c081__think__local
question: 'Explain: The latency budget is the design — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 415
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:39:08-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**  
   - Identify *what* “latency budget” means in this context (time allowed from user utterance to agent response).  
   - Assume a typical real‑time voice scenario: speech‑to‑text → processing → text‑to‑speech, all within a perceptible 1 s window.  

**2️⃣ Adopt a mental model**  
   - View the system as a pipeline of stages, each with its own time cost.  
   - Think in terms of *end‑to‑end latency* = sum(stages) + any network round‑trips.  

**3️⃣ Step‑by‑step reasoning**  
   1. Break down the voice agent into components: microphone capture, STT inference, intent parsing, response generation, TTS synthesis, audio output.  
   2. Estimate each component’s typical runtime (e.g., 200 ms for STT, 100 ms for NLP).  
   3. Add them up; compare to the overall budget (≈1 s).  
   4. Identify bottlenecks where reducing latency is most impactful (often STT or TTS).  

**4️⃣ Common traps to avoid**  
   - Forgetting that human perception tolerates ~200–300 ms delays per step, not just total sum.  
   - Ignoring queuing or CPU contention which can add unpredictable jitter.  
   - Assuming a fixed budget works across all devices; edge vs cloud latency differs.  

**5️⃣ Sanity‑check & communicate**  
   - Verify the summed latency against real‑world measurements (e.g., use profiling tools).  
   - Explain to stakeholders that “latency budget” is not just a hard cap but a design constraint guiding trade‑offs: model size vs speed, local inference vs cloud calls.  
   - Summarize in a diagram or table for clarity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

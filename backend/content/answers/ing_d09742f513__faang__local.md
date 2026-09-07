---
qid: ing_d09742f513__faang__local
question: In our build session you get two hours and any AI tools you want. How do
  you decide what to build and how do you spend the time?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 468
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:45:42-05:00'
sources: []
---

**Clarify**  
We’re given a 2‑hour sprint with unrestricted AI tooling (LLMs, vision models, code generators). The goal is to produce a tangible demo that showcases real value and demonstrates thoughtful use of AI. I’d confirm: *What domain should the product serve?* *Are there any constraints on data privacy or deployment platform?* *Is the target audience internal stakeholders or external users?*  

**Approach**  
1. **Define scope & impact** – pick a problem that can be solved in <30 min of AI‑powered automation (e.g., auto‑generating meeting summaries).  
2. **Select tools** – choose an LLM with strong summarization, a speech‑to‑text API if audio is involved, and a lightweight UI framework (Streamlit or Flask).  
3. **Prototype pipeline** – data ingestion → AI processing → presentation layer.  
4. **Iterate quickly** – test the flow on sample inputs, refine prompts, tweak UI.  

**Depth**  
- Build an endpoint that ingests a 5‑min audio clip, transcribes it (Whisper), feeds the transcript to GPT‑4 with a prompt like “Summarize key decisions and action items.”  
- Render results in a minimal dashboard showing transcript snippets highlighted with the summary.  
- Add a quick export button for PDF/CSV.  
Complexity: O(n) on audio length; latency ≈ 10–15 s per clip, acceptable for demo.

**Edge Cases**  
- Low‑quality audio → fallback to manual upload.  
- Extremely long transcripts → chunking and hierarchical summarization.  
- Prompt hallucination → sanity check with a confidence score or user confirmation step.

**Optimize & Communicate**  
Explain trade‑offs: choosing Whisper keeps all processing local, improving privacy; using GPT‑4 maximizes accuracy but incurs cost—could switch to a cheaper model if budget tight. Summarize the sprint plan aloud, showing each decision’s rationale, and finish with a live demo of the summary pipeline. This demonstrates clear problem definition, rapid prototyping, technical depth, and awareness of edge conditions—all key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_1c83c91ab5__star__local
question: 'Explain: The interview loop — Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 330
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:26:32-05:00'
sources: []
---

**Situation:**  
At my previous startup we were scaling our talent pipeline from 5 to over 30 hires per quarter. Our manual interview scheduling and feedback collection was bottlenecked by email threads, causing a 48‑hour lag between rounds and inconsistent candidate scoring.

**Task:**  
Design an automated “interview loop” that would handle scheduling, recording, real‑time sentiment analysis, and rubric‑based scoring—all while keeping the process transparent for both interviewers and candidates.

**Action:**  
I architected a microservice using FastAPI, integrated Calendly’s API for auto‑scheduling, and stored recordings in S3 with a Whisper‑powered transcription pipeline. Using Hugging Face transformers I built a sentiment model to flag red‑flag phrases, feeding results into an internal scoring dashboard built on Streamlit. Interviewers could review the transcript, adjust scores manually, and the system would trigger the next interview slot or send a rejection email automatically.

**Result:**  
The loop cut scheduling time from 48 hrs to under 2 hrs, reduced manual score entry errors by 90%, and increased hiring throughput by 35%. I learned how to blend NLP, API orchestration, and UX‑centric design to create an end‑to‑end hiring automation that still respected human judgment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

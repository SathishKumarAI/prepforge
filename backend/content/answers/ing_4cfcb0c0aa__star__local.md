---
qid: ing_4cfcb0c0aa__star__local
question: 'Explain: Building the Real-World Project (Meeting Recording Summarizer)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 418
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:02:13-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked to prototype a real‑world meeting‑recording summarizer for our client’s internal knowledge base. The recordings were long (average 90 min), noisy audio from multiple participants, and the company wanted a concise 3–5 minute summary that could be indexed in their search platform.

**Task:**  
Build an end‑to‑end pipeline that transcribes the audio, extracts key points, and produces a readable summary while staying under a 30‑minute processing window per meeting.

**Action:**  
I started with Whisper (OpenAI) for ASR, fine‑tuned it on the company’s domain data to improve speaker diarization. For summarisation I leveraged a pretrained BART model, then performed domain‑specific fine‑tuning using a custom dataset of annotated meeting transcripts and their executive summaries. I implemented a multi‑stage filtering step: first, a keyword‑based topic clustering (using spaCy) to reduce token count, then an extractive pass with RoBERTa to pick salient sentences before feeding them into BART for abstractive condensation. The pipeline was containerized in Docker and orchestrated via Airflow; I used Ray to parallelise inference across GPU nodes, cutting latency from 12 min to ~2 min per meeting.

**Result:**  
The summariser achieved an ROUGE‑L score of 0.48 against the ground truth, a 35% improvement over our baseline rule‑based system. Client adoption grew to 80 % of all internal meetings within three months, and we saw a 20 % reduction in knowledge‑search time. I learned how critical it is to combine domain‑specific fine‑tuning with efficient preprocessing pipelines for production‑grade ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

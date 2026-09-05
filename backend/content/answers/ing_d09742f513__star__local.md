---
qid: ing_d09742f513__star__local
question: In our build session you get two hours and any AI tools you want. How do
  you decide what to build and how do you spend the time?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 339
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:26:29-05:00'
sources: []
---

**Situation:** In a recent hackathon we had two hours and access to any AI tools—OpenAI API, Hugging Face models, LangChain, and cloud GPU instances. My teammates and I were tasked with creating something that could be demoed within the time limit.

**Task:** I needed to choose a project that showcased real‑world impact, was technically feasible in two hours, and leveraged multiple AI components (NLP + vision) to demonstrate my toolkit fluency.

**Action:** I scoped a “smart résumé parser” that extracts skills and experience from PDFs and auto‑generates a concise summary. First, I used LangChain’s PDFLoader to ingest documents locally. Next, I ran the text through OpenAI’s GPT‑4 for entity extraction, tuning prompt weights to balance precision vs recall. For the UI, I spun up a lightweight Streamlit app on an EC2 spot instance, integrating the model via FastAPI. I added a small BERT‑based sentiment layer to flag any negative language in cover letters, using Hugging Face’s transformers library. Throughout, I monitored latency with Prometheus and kept the total build time under 90 minutes.

**Result:** The demo processed a 5‑page résumé in <3 seconds, highlighting key skills and generating a polished summary that received a 4.8/5 rating from judges for clarity and speed. I learned how to rapidly prototype end‑to‑end AI pipelines, balance compute cost with latency, and prioritize features that deliver tangible business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

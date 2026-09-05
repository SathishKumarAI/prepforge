---
qid: ing_eb57f0be9d__star__local
question: 'Explain: The Shift: Traditional OCR vs. Vision-LLMs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 338
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:19:02-05:00'
sources: []
---

**Situation:**  
In my last role at a logistics startup, we were processing thousands of handwritten invoices daily. Our legacy OCR pipeline was stuck at ~85% accuracy and required manual triage for the remaining 15%, costing us $12k/month in labor.

**Task:**  
I had to overhaul the document ingestion process to reduce manual effort by 70% while maintaining data integrity, all within a three‑month sprint.

**Action:**  
I evaluated several Vision‑LLMs—specifically OpenAI’s GPT‑4o and Google’s Gemini Pro Vision. After a quick proof of concept with a sample set of invoices, I chose GPT‑4o for its superior multilingual understanding. I built an ingestion microservice in Python that streamed PDFs to the LLM via LangChain, parsed the structured output into JSON, and fed it directly into our ETL pipeline. To keep costs down, I implemented prompt templating and batch processing, which cut inference time by 40%. I also added a lightweight confidence scoring layer so low‑certainty items could be routed back to human reviewers.

**Result:**  
Accuracy jumped from 85% to 97%, eliminating the manual triage queue. We saved roughly $9k/month in labor costs and reduced invoice processing time from 3 hours to under 30 minutes per batch. The experience taught me that a well‑tuned Vision‑LLM can replace brittle OCR pipelines, but careful prompt design and cost‑aware inference are key to scaling the solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

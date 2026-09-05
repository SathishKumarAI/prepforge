---
qid: ing_9248194475__star__local
question: 'Explain: Details to know — Generative AI with Large Language Models | Coursera'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 373
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:25:33-05:00'
sources: []
---

**Situation:**  
When I joined the research team at a fintech startup, our customer‑support chatbot was stuck in scripted responses and couldn’t handle complex loan inquiries. The support ticket backlog had risen to 3,000 unresolved chats per month, costing us roughly $12K in manual labor.

**Task:**  
I was tasked with designing a generative AI layer that could understand user intent, generate accurate financial explanations, and integrate seamlessly with our existing API stack—all while staying within the company’s privacy compliance guidelines.

**Action:**  
I started by fine‑tuning an open‑source LLM (Vicuna 13B) on a curated dataset of anonymized loan conversations, then wrapped it in a Flask microservice. I implemented a hybrid retrieval‑generation pipeline: first use Pinecone to fetch the top‑5 relevant FAQ embeddings, then pass those snippets plus user prompt to the model for a context‑aware reply. To keep costs down, I set up an autoscaling policy that spun up GPU instances only during peak hours and used DeepSpeed’s ZeRO‑2 to reduce memory usage by 70%. Finally, I added a human‑in‑the‑loop review step with a simple Slack bot that flags uncertain responses for a senior analyst.

**Result:**  
Within two months, the chatbot handled 85% of inquiries autonomously, cutting the support backlog by 62% and saving $9.6K in labor costs per month. The average response time dropped from 4.2 minutes to under 30 seconds. I learned how to balance model performance with operational constraints and the importance of continuous monitoring for drift in conversational data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

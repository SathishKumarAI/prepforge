---
qid: ing_79573cd0c5__star__local
question: 'Explain: Week 2 - Context: prompting, RAG, fine-tuning'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 362
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:36:27-05:00'
sources: []
---

**Situation:**  
During my internship at a fintech startup, we were tasked with building an internal knowledge‑base assistant to help analysts quickly retrieve regulatory information and generate concise reports. The existing search engine returned too many irrelevant documents, and our developers were skeptical about using large language models because of cost concerns.

**Task:**  
I had to demonstrate how prompting, Retrieval-Augmented Generation (RAG), and fine‑tuning could be combined to create a cost‑effective, accurate assistant that reduced research time by at least 30 % for the team.

**Action:**  
First, I crafted a set of structured prompts in Python using OpenAI’s API, experimenting with few‑shot examples to guide the model toward formal regulatory language. Next, I built a RAG pipeline: indexed our internal PDFs into Pinecone (vector store), then used sentence embeddings from SentenceTransformers to retrieve the top 5 relevant passages per query. These passages were fed back into the prompt as context, dramatically narrowing hallucinations. Finally, for domain‑specific jargon, I performed lightweight fine‑tuning on a subset of 2 k labeled documents using Hugging Face’s Trainer, which cut down token usage by ~15 % and improved precision from 0.62 to 0.78.

**Result:**  
The prototype cut analysts’ research time from an average of 45 minutes to 28 minutes per report— a 38 % reduction—and increased satisfaction scores from 3.8/5 to 4.6/5 in the quarterly survey. I learned that combining prompt engineering with RAG and selective fine‑tuning can deliver high‑quality, low‑cost AI solutions in real‑world settings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

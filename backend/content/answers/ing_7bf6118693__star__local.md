---
qid: ing_7bf6118693__star__local
question: 'Explain: Prospective Students — CS294/194-196 Large Language Model Agents
  | CS 194/294-196 Large Language Model Agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 354
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:41:48-05:00'
sources: []
---

**Situation:**  
In my final semester I was part of a research team building a chatbot that could autonomously browse the web to answer student queries for our university’s admissions office. The system had to stay within budget, keep latency under 2 seconds, and respect privacy regulations.

**Task:**  
I needed to design an architecture that leveraged large language models (LLMs) while ensuring efficient inference, minimal data exposure, and compliance with FERPA.

**Action:**  
First, I selected a distilled LLM (~3B parameters) and fine‑tuned it on anonymized Q&A logs using LoRA adapters, reducing GPU memory by 70 %. Next, I built a hybrid retrieval pipeline: the LLM generates a short query, a vector search in Pinecone retrieves relevant documents, and the model is prompted with those snippets. For privacy, all user data is hashed before sending to external services, and inference occurs on an isolated VPC. I also implemented token‑level rate limiting and a monitoring dashboard that flags any outlier responses.

**Result:**  
The prototype achieved 92 % accuracy on a held‑out test set, reduced inference cost by 45 %, and maintained latency below 1.8 seconds. The admissions office reported a 30 % drop in repetitive inquiries, freeing staff to handle more complex cases. I learned how to balance model power with operational constraints, and the importance of end‑to‑end privacy safeguards when deploying LLM agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

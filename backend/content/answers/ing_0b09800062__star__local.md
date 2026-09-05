---
qid: ing_0b09800062__star__local
question: 'Q: How do you prevent hallucination in a production RAG system?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 355
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:50:54-05:00'
sources: []
---

**Situation:**  
When I joined the data‑science team at FinServe, we were building a customer‑support chatbot that used a RAG architecture to pull policy documents and generate responses. Early beta testing revealed frequent “hallucinations” – the model would invent details about coverage limits that weren’t in any document.

**Task:**  
My goal was to reduce hallucination rates below 2% while keeping response latency under 1 s, so the bot could be deployed for live support without human oversight.

**Action:**  
I first instrumented the retriever with a relevance‑scoring filter: only top‑5 passages that scored >0.85 on cosine similarity to the query were passed to the generator. Next, I wrapped the LLM in a “fact‑check” layer using an open‑source fact verification model (e.g., DeBERTa). The generator’s output was parsed into key statements, each verified against the retrieved passages; any statement failing verification triggered a safe fallback (“I’m not sure, let me connect you to a human”). I also added a temperature‑clamp (0.4) and a beam‑search penalty for novel tokens to discourage invented content.

**Result:**  
After two iterations, hallucination dropped from 12% to 1.6%, while average response time stayed at 0.9 s. The system gained trust from the support team, and we reduced human‑review tickets by 35%. I learned that combining retrieval filtering with post‑generation fact checking is a practical way to tame hallucinations in production RAG systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

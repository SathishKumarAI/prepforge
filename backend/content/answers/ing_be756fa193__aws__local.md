---
qid: ing_be756fa193__aws__local
question: 'Explain: Resources — Llm Papers Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 330
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:34:04-05:00'
sources: []
---

**Answer (Amazon Way)**  

I built a *LLM Papers Cheat‑Sheet* for my research team so we could quickly assess the state of the art and decide which models to prototype.  

- **Customer Obsession / Ownership** – The “customers” were product managers needing evidence‑based model choices. I took full ownership: I gathered 200+ seminal papers, distilled each into a one‑page summary (problem, architecture, training data, evaluation metrics, key hyper‑parameters), and tagged them by domain (NLP, vision, multimodal).  
- **Dive Deep / Deliver Results** – Using Python scripts, I parsed PDFs, extracted figures, and auto‑generated tables in Markdown. The final cheat‑sheet reduced the average literature review time from 3 days to 4 hours per project, a **>90% productivity gain**.  
- **Bias for Action / Invent & Simplify** – I wrapped the cheat‑sheet in an AWS S3 bucket behind CloudFront and exposed it via a lightweight Lambda@Edge function that served updates on demand. This architecture gave us <1 ms latency globally with <$10/month cost, while ensuring high availability (S3 + CloudFront).  

Bar‑raisers would note my end‑to‑end ownership, the quantitative impact (time saved), the depth of parsing logic, and how I iterated after initial failures (e.g., improving OCR accuracy for scanned PDFs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

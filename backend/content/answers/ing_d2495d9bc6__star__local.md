---
qid: ing_d2495d9bc6__star__local
question: What tools do I need? — Welcome to the \ud83e\udd17 AI Agents Course \u00b7
  Hugging Face
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 313
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:30:03-05:00'
sources: []
---

**Situation:** In my last role as a machine‑learning engineer, our product team wanted to add an intelligent FAQ bot to the customer support portal. The existing stack was Python + Django, and we had no AI infrastructure in place.

**Task:** I needed to prototype a proof‑of‑concept within two weeks that could understand user queries, retrieve relevant knowledge base articles, and generate concise responses without heavy server load.

**Action:** First, I set up a local environment with Conda and installed the `transformers` library from Hugging Face. For rapid prototyping I chose the `distilbert-base-uncased-distilled-squad` fine‑tuned model for question answering and paired it with Pinecone’s vector index for semantic search over our knowledge base PDFs. I used FastAPI to expose a lightweight REST endpoint, integrated Docker for containerization, and leveraged GitHub Actions for CI/CD. To keep inference latency under 200 ms, I deployed the model on an NVIDIA A10 GPU instance and applied ONNX runtime optimizations.

**Result:** The MVP was live in nine days, handling 3,000 daily queries with a 92 % accuracy rate on manual QA audits. User satisfaction scores rose from 3.2 to 4.6/5, and support tickets dropped by 18 %. I learned the importance of choosing the right pre‑trained model, vector search backend, and container workflow for scalable AI deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

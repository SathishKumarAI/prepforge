---
qid: ing_9d8be15917__star__local
question: An enterprise customer on Azure wants the model to "know our business."
  Prompting, RAG, or fine-tuning - how do you decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 378
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:47:13-05:00'
sources: []
---

**Situation:**  
I was consulting for a Fortune 500 retailer that had migrated its data lake to Azure and wanted an AI assistant to answer internal queries about product lines, pricing strategies, and regulatory compliance. Their SLA required 95% accuracy on domain‑specific questions within two months.

**Task:**  
Determine the most efficient approach—prompt engineering, Retrieval Augmented Generation (RAG), or fine‑tuning—to give the model “business knowledge” while meeting latency, cost, and governance constraints.

**Action:**  
I started with a lightweight prompt schema using Azure OpenAI’s GPT‑4o, embedding domain glossaries as few‑shot examples. Parallelly, I built a RAG pipeline: indexed key documents in Azure Cognitive Search, queried via semantic search, and fed the top 3 snippets into the prompt. For high‑confidence scenarios (e.g., pricing policies), I fine‑tuned a smaller model on 5,000 annotated Q&A pairs, ensuring compliance with data residency rules. I compared runtimes, costs, and accuracy in a staged A/B test, iterating on relevance weights until the RAG+prompt combo hit 96% precision.

**Result:**  
The hybrid solution reduced average response time from 2.1 s to 0.9 s and cut inference cost by 30%. Post‑deployment analytics showed a 95%+ accuracy rate, exceeding SLA goals. I learned that layering prompt design with selective fine‑tuning and semantic retrieval yields the best balance of performance, control, and compliance in Azure‑hosted AI deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

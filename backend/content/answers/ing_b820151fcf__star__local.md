---
qid: ing_b820151fcf__star__local
question: 'Explain: A customer wants an assistant over their internal knowledge base
  and asks whether to fine-tune. Prompting, RAG, or fine-tuning - walk through the
  decision.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 361
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:39:45-05:00'
sources: []
---

**Situation:**  
At a mid‑size SaaS firm, the support team was overwhelmed by repetitive queries about our internal API docs and onboarding workflow. The product owner asked if we should build an AI assistant that could pull up relevant knowledge from our internal wiki.

**Task:**  
I had to evaluate whether to fine‑tune a large language model on the legacy documentation, use Retrieval Augmented Generation (RAG) with our vector store, or rely purely on prompt engineering. The goal was to deliver quick, accurate answers while keeping infrastructure costs under $2k/month and respecting data privacy.

**Action:**  
I first benchmarked three prototypes: 1) a fine‑tuned GPT‑4 model trained on the full docs; 2) a RAG pipeline using Pinecone embeddings + OpenAI’s text‑embedding‑ada‑002; 3) a prompt‑engineering approach that fed carefully crafted prompts into base GPT‑4. For each, I ran 200 real support tickets and measured latency, correctness (via manual review), and cost per query. Fine‑tuning gave the best accuracy but required ~$5k upfront and incurred $0.12/1000 tokens inference costs—exceeding our budget. Prompt engineering was fast but only 70% correct on nuanced questions. The RAG solution hit 85% accuracy, 200 ms latency, and cost $0.04/query.

**Result:**  
We deployed the RAG pipeline, cutting support ticket response time by 40% and reducing agent workload by 30%. I learned that for internal knowledge bases with frequent updates, RAG offers a balanced trade‑off between performance, cost, and maintainability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_489c075adb__star__local
question: 'Explain: Multi-turn handling — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 323
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:53:43-05:00'
sources: []
---

**Situation** – At my last role I was tasked with building an internal RAG assistant for the finance team that could handle multi‑turn queries about quarterly reports, policy documents, and regulatory filings. The existing chatbot only responded to single prompts and often returned stale data.

**Task** – My goal was to design a system that could maintain context across several turns, fetch up‑to‑date information from our document store, and generate coherent, accurate responses while respecting data privacy.

**Action** – I architected a hybrid solution: first, I used LangChain’s conversational buffer memory to track dialogue state; second, I integrated Pinecone for vector search on PDFs and CSVs, re‑ranking results with a custom BM25 module. For generation, I wrapped OpenAI’s GPT‑4 Turbo in a prompt template that inserted the top 3 relevant passages as context. I added a privacy filter that stripped PII before sending data to the LLM. Finally, I built an automated unit‑test suite that simulated multi‑turn sessions and verified correctness against ground‑truth answers.

**Result** – The new assistant reduced answer latency from 8 s to 3 s per turn, improved F1‑score on a held‑out test set from 0.62 to 0.84, and cut the finance team’s manual data‑lookup time by 70%. I learned that coupling memory modules with fine‑tuned retrieval pipelines is key for reliable enterprise RAG in conversational settings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

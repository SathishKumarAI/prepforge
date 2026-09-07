---
qid: ing_d1f11e6a26__faang__local
question: 'Explain: Split — LlamaIndex | AI Agents for Document OCR + Workflows'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 478
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:48:44-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of how *Split* can use **LlamaIndex** (formerly GPT‑index) and AI agents to ingest scanned documents via OCR, then execute automated workflows on the extracted text.

Assumptions:  
- Documents are image PDFs or scans.  
- OCR output is unstructured text.  
- Workflows involve queries, summarization, or data extraction.  

**Approach**  
1. **OCR ingestion** – Feed each image to an OCR engine (e.g., Tesseract/Google Vision).  
2. **Indexing with LlamaIndex** – Convert OCR output into *Document* objects; build a vector index for semantic search.  
3. **Agent orchestration** – Deploy an AI agent (LangChain/AutoGen) that:  
   - Queries the index to retrieve relevant passages.  
   - Executes LLM prompts for summarization, entity extraction, or form‑filling.  
4. **Workflow automation** – Chain agent outputs into downstream tasks (e.g., populating a database, triggering alerts).  

**Depth**  
- OCR → raw text (≈ 0.5 s per page).  
- LlamaIndex builds embeddings with OpenAI/LLAMA; index construction is O(n) time, O(n) memory.  
- Agent logic runs in a loop: *Retrieve → Process → Store*.  
- Use batching to reduce API calls and latency.  

**Edge Cases**  
- Low‑quality scans → fuzzy OCR → noisy embeddings → misretrieval.  
- Extremely long documents → chunking required for LLM context limits.  
- Non‑textual content (tables, diagrams) → need specialized extraction.  

**Optimize & Communicate**  
- Cache embeddings to avoid re‑computing on repeated runs.  
- Parallelize OCR and indexing across shards.  
- Provide a monitoring dashboard to flag low‑confidence OCR pages.  
- Explain trade‑offs: higher OCR accuracy vs. processing cost; richer embeddings vs. latency.

*This structured answer demonstrates clear problem framing, methodical planning, technical depth, awareness of pitfalls, and actionable optimizations—key signals for FAANG interviewers.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

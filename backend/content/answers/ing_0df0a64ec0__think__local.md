---
qid: ing_0df0a64ec0__think__local
question: 'Explain: Get started with LlamaParse for free — LlamaIndex | AI Agents
  for Document OCR + Workflows'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 516
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:38:44-05:00'
sources: []
---

**1️⃣ Clarify the goal & scope**  
*Assumptions:* You already have a Python environment (or know how to set one up), an OpenAI API key, and basic familiarity with LlamaIndex. The aim is to ingest documents via OCR, parse them with LlamaParse, and build simple AI‑agent workflows—all for free.  

**2️⃣ Adopt the “LlamaIndex → LlamaParse → Agent” mental model**  
Think of *LlamaIndex* as the data layer that stores parsed chunks; *LlamaParse* is the OCR + text extraction engine; and *Agents* (e.g., `DocumentChatAgent`) orchestrate queries over the index.  

**3️⃣ Step‑by‑step recipe**  
1. Install: `pip install llama-index-llama-parse` (plus any optional OCR backends).  
2. Create a free LlamaParse account, copy your API key, and set it in env vars (`export LLAMA_PARSE_API_KEY=…`).  
3. Ingest a PDF:  
   ```python
   from llama_index import StorageContext, load_index_from_storage
   index = StorageContext.from_defaults(
       embed_model="text-embedding-ada-002",
       llm="gpt-4o-mini"
   ).load_documents("path/to/file.pdf", parser_name="llama_parse")
   ```  
4. Build an agent: `agent = DocumentChatAgent(index=index)` and query it with natural language prompts.  

**4️⃣ Avoid common pitfalls**  
* Forgetting the API key → authentication errors.*  
* Using a paid LLM model without downgrading to “gpt‑4o‑mini” → cost overruns.*  
* Not installing the optional OCR backend (e.g., `pytesseract`) if you need local OCR support.  

**5️⃣ Verify & communicate**  
Run a quick test prompt (`agent.chat("What is the main topic?")`). If you get a coherent answer, you’re set. Share your workflow code in a gist and note any environment specifics for reproducibility. This concise loop ensures you hit the free tier while leveraging LlamaParse’s OCR + AI agents effectively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

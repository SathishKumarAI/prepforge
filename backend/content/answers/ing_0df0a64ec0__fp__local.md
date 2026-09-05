---
qid: ing_0df0a64ec0__fp__local
question: 'Explain: Get started with LlamaParse for free — LlamaIndex | AI Agents
  for Document OCR + Workflows'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 620
total_tokens: 802
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:35:25-05:00'
sources: []
---

### Why you need a *document‑OCR* engine before any AI agent can act on PDFs

1. **The fundamental problem** – A PDF is a bitmap of characters and shapes, not a text stream.  
   An LLM receives tokens; it cannot “see” the layout that tells us which block is a title, table header, or figure caption.  
2. **What must be extracted** – (a) *Text* in reading order, (b) *Layout metadata* (page number, bounding boxes), and (c) *Structure* (tables, lists).  
3. **Why layout matters** – Geometry encodes semantics: a larger font at the top of a page is usually a heading; a grid of equally spaced cells signals a table.  

### LlamaParse: the principled solution

- **LLM‑guided OCR** – It runs an optical recogniser, then feeds every chunk to a large language model that decides whether the chunk belongs to a table, paragraph, or figure.  
- **Token‑budget optimisation** – By chunking into 512‑token windows and pruning irrelevant text, it keeps inference cost low, enabling a *free tier* for developers.  
- **Vector‑aligned output** – Each parsed element is embedded in the same space as downstream LlamaIndex queries, so an agent can “point” to the exact page or cell that answers a question.

### One non‑obvious insight

Most people treat OCR output as a flat text dump and then post‑process with regexes.  
LlamaParse learns *layout semantics* from data; its embeddings capture *where* information lives, not just *what* it says. This means an agent can ask “Show me the table of quarterly revenues” and get a direct link to the exact cells—no manual parsing needed.

---

#### Getting started for free

1. **Sign up** at [LlamaIndex](https://www.llamaindex.ai) and activate the *Free* tier.  
2. Install the SDK:  

   ```bash
   pip install llama-index-llamaparse
   ```

3. Initialise a parser:

   ```python
   from llama_index import LlamaParse
   parser = LlamaParse(api_key="YOUR_API_KEY", max_tokens=512)
   result = parser.parse("path/to/document.pdf")
   ```

4. Feed `result` to your agent or vector store; the free tier gives you up to 1 GB of OCRed content per month.

Happy parsing!

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

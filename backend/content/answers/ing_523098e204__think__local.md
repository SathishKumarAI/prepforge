---
qid: ing_523098e204__think__local
question: 'Explain: Q: A client has 500 insurance claim PDFs per day that must be
  entered into a legacy web portal with no API. Design a system using computer-use
  agents.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 213
output_tokens: 528
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:25:30-05:00'
sources: []
---

**1️⃣ Clarify the problem & state assumptions**

- *What* is required? 500 PDFs/day → data entry into an old web UI, no API.
- *Constraints*: legacy portal (only form‑based), high volume, accuracy critical, security concerns, possible rate limits or captchas.
- *Assumptions*: PDFs contain semi‑structured text; OCR accuracy acceptable with preprocessing; the client can host agents on a secure network; we have access to the PDFs in bulk.

**2️⃣ Choose a mental model / framework**

Use the **Computer‑Use Agent (CUI)** pattern:  
  - *Input layer*: ingest PDFs, run OCR → structured data.  
  - *Agent layer*: simulate human interactions with the web UI (mouse clicks, keyboard).  
  - *Control layer*: orchestrate parallel agents, monitor for errors, handle retries.

**3️⃣ Step‑by‑step reasoning**

1. **Data extraction pipeline**  
   - Batch PDFs → OCR (Tesseract or cloud service) → parse into JSON (claim ID, policy number, amounts).  
2. **Agent design**  
   - Build a headless browser agent (e.g., Playwright/ Puppeteer) that logs in, navigates to the claim form, fills fields, submits.  
3. **Parallelism & scaling**  
   - Run N agents concurrently (e.g., 10–20) depending on portal limits; use a task queue (Celery/RabbitMQ).  
4. **Error handling**  
   - Detect submission success via DOM cues; on failure retry with back‑off, capture screenshots for audit.  
5. **Security & compliance**  
   - Store credentials securely (Vault), encrypt data in transit, log agent actions.  

**4️⃣ Common traps to avoid**

- *Overloading the portal*: too many concurrent agents → throttling or captcha.  
- *Ignoring OCR errors*: malformed data leads to wrong entries; validate against schema first.  
- *Hard‑coding UI paths*: brittle if portal changes; use robust selectors and periodic regression tests.  

**5️⃣ Sanity‑check & communicate**

- Run a pilot with 10 PDFs, verify accuracy > 99%.  
- Present the architecture diagram (PDF → OCR → Queue → Agents → Portal) and highlight how agents mimic human interaction while maintaining audit trails.  
- Emphasize that this design scales linearly with agent count and can be adapted if an API becomes available later.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

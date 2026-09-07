---
qid: ing_523098e204__faang__local
question: 'Explain: Q: A client has 500 insurance claim PDFs per day that must be
  entered into a legacy web portal with no API. Design a system using computer-use
  agents.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 493
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:55:25-05:00'
sources: []
---

**Clarify**  
We need to ingest ~500 PDF claims daily and populate fields in an old web UI that exposes only a browser form (no API). The PDFs are unstructured; the portal expects manual data entry with validation checks. Assumptions: 1) PDFs can be parsed reliably with OCR/ML; 2) the portal accepts standard HTML input; 3) we have no control over the UI, but we can automate a browser session.  

**Approach**  
1. **Document Extraction Layer** – Use an OCR engine (Tesseract + fine‑tuned model) to pull structured JSON from each PDF.  
2. **Data Validation Service** – Cross‑check extracted fields against business rules and external reference tables.  
3. **Automation Agent** – Deploy a headless browser agent (Selenium / Playwright) that logs into the portal, navigates to the claim form, fills in fields, submits, and captures any error screens.  
4. **Orchestration & Queueing** – Kafka/Redis queue holds PDFs; workers process them in parallel while respecting portal rate limits.  
5. **Monitoring & Alerting** – Log success/failure per claim; use Prometheus + Grafana to surface throughput and error rates.

**Depth**  
- OCR: ~0.2 s per PDF → 100 s total, well under a day’s window.  
- Agent: Runs headless Chrome with explicit waits; retries on transient failures.  
- Queue size: 500 items × 10 workers = 50 s processing time.  
- Complexity: O(n) extraction + O(m) UI interactions (m≈fields).  

**Edge Cases**  
- OCR errors → fallback to manual review queue.  
- Portal changes (new fields) → detect via DOM diff and alert.  
- Network hiccups → exponential back‑off retries.  

**Optimize & Communicate**  
Future improvements: replace Selenium with a lightweight browserless API (e.g., Playwright’s CDP), cache session cookies to reduce login overhead, and add ML confidence thresholds to trigger human intervention only when needed. I’ll present the pipeline diagram, discuss trade‑offs between speed vs. accuracy, and highlight how each component scales horizontally while staying cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

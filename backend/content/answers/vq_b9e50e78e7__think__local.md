---
qid: vq_b9e50e78e7__think__local
question: How long should raw data be retained?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 482
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:16:22-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - Identify *what* “raw data” means (e.g., sensor streams, logs, ETL inputs).  
   - Ask whether retention rules are driven by legal, compliance, business‑value, or storage‑cost factors.  
   - Assume a typical enterprise context with GDPR/CCPA and internal analytics needs.

**2. Adopt a layered mental model**  
   - *Legal layer*: statutory minimums (e.g., 7 years for financial records).  
   - *Compliance layer*: industry standards (PCI‑DSS, HIPAA) that may extend or shorten the period.  
   - *Business value layer*: data that can inform future models, trend analysis, or audit trails.  
   - *Cost/operational layer*: storage tiering and lifecycle policies.

**3. Step‑by‑step reasoning**  
   1. Map each data type to its regulatory retention requirement.  
   2. Overlay any contractual obligations (e.g., client‑specific SLAs).  
   3. Estimate the business value window—often 1–3 years for predictive analytics, longer if historical trend analysis is critical.  
   4. Balance with storage costs: hot tier for 0–12 months, warm for 1–3 years, cold/archive beyond that.  
   5. Document a retention matrix and review quarterly.

**4. Common pitfalls to avoid**  
   - Assuming “raw” equals “unnecessary”; raw data can be crucial for audit or model retraining.  
   - Ignoring jurisdictional differences; a global company may need varied policies per region.  
   - Over‑consolidating storage tiers without proper metadata tagging—retrieval becomes costly.

**5. Sanity‑check & communicate**  
   - Verify against at least two independent sources (legal counsel, data governance board).  
   - Present the matrix in a table: Data type | Legal minimum | Business window | Storage tier | Review cycle.  
   - Highlight trade‑offs explicitly so stakeholders understand why, e.g., 3 years of raw logs are retained for fraud detection, even if legally only 1 year is required.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

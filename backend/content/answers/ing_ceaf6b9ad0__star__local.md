---
qid: ing_ceaf6b9ad0__star__local
question: 'Explain: You''re given exports from three customer systems, each with its
  own customer records. Write code to produce one deduplicated set of entities, and
  explain your design.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 353
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:22:31-05:00'
sources: []
---

**Situation:**  
At a fintech startup we integrated data from three partner banks—each delivered daily CSVs of customer records with overlapping customers but different schemas and inconsistent identifiers.

**Task:**  
I had to build an automated pipeline that ingested the three feeds, deduplicated them into a single canonical entity set, and exposed it via an API for downstream analytics, all within a 48‑hour sprint.

**Action:**  
1. **Schema mapping & ingestion** – wrote Python ETL scripts using `pandas` to load each CSV, normalizing columns (e.g., “SSN” vs “TaxID”) into a unified schema.  
2. **Identifier resolution** – built a composite key generator combining normalized name, DOB, and email hash. For records lacking a unique ID, I used fuzzy‑matching (`fuzzywuzzy`) to score similarity against existing keys.  
3. **Deduplication engine** – implemented a dedupe function that groups by composite key, then merges attributes using priority rules (e.g., bank A’s address over B). Duplicate counts were logged.  
4. **Persistence & API** – stored the cleaned set in PostgreSQL, exposed via FastAPI with pagination and search filters.

**Result:**  
The pipeline processed 1.2 M rows per day, reducing duplicate entries by 92% (from ~200k to ~16k unique customers). Real‑time analytics dashboards saw a 30% faster query response time. I learned that combining deterministic keys with probabilistic matching yields robust deduplication while keeping the code maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

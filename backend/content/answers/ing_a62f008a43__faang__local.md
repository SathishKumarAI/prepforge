---
qid: ing_a62f008a43__faang__local
question: 'Explain: Company entity and accounting — How to Design a System for Internationalization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 506
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:11:21-05:00'
sources: []
---

**Clarify**

You’re asked to design a system that tracks *company entities* (legal structures) and their *accounting records* while supporting multiple countries’ regulations, currencies, tax regimes, and reporting standards.  
Assumptions to confirm:  
- Entities can be owned by other entities or individuals.  
- Each entity has its own chart of accounts, fiscal year, and reporting frequency.  
- Users need consolidated reports across jurisdictions.  

**Approach**

1. **Domain‑driven data model** – separate *Entity*, *Currency*, *TaxRegime*, *Account*, *Transaction*.  
2. **Multi‑tenant architecture** with a global “Country” dimension.  
3. **Event‑sourced accounting ledger** for auditability and time‑travel.  
4. **ETL pipelines** to translate local GAAP/IFRS into a common schema for consolidation.  

**Depth**

- `Entity` table: PK, name, parent_entity_id (self‑ref), country_code, fiscal_year_start.  
- `Currency` table: code, exchange_rate_to_usd (historical).  
- `Transaction` stream: entity_id, date, amount, currency, account_id, tax_regime_id.  
- Ledger stored in a columnar store; use ACID transactions per day.  
- Consolidation uses *snapshot isolation*: apply FX rates at transaction time and aggregate across entities.  
- Complexity: CRUD O(1); query consolidation O(N log N) where N = number of transactions, mitigated by pre‑aggregated views.  

**Edge Cases**

- Cross‑border transfers (double counting). Handle via *inter‑entity* flag and offsetting entries.  
- Currency devaluation spikes – ensure exchange rates are immutable per transaction date.  
- Regulatory changes (e.g., new tax law) – versioned `TaxRegime` table, re‑run ETL for affected entities.

**Optimize & Communicate**

Add a *materialized view* per country/year to serve reporting in milliseconds; refresh nightly. For real‑time dashboards, stream to a time‑series database. Explain trade‑offs: ACID ledger vs eventual consistency of aggregated views. Highlight that the design keeps data isolated per entity but allows efficient global consolidation—exactly what FAANG data teams need for scalable international finance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

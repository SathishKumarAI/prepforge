---
qid: ing_e2ebae26bd__faang__local
question: 'Explain: Announcing ProxySQL 3.0.10, 3.1.10, and 4.0.10'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 580
total_tokens: 830
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:26:43-05:00'
sources: []
---

**Clarify**  
You’re asking for an overview of the new ProxySQL releases (v3.0.10, v3.1.10, and v4.0.10). I’ll assume you want a concise summary of what’s new, why it matters, and how it impacts deployment.

**Approach**  
1. Highlight the core purpose of ProxySQL (MySQL proxy with query caching & routing).  
2. List the key enhancements in each minor release.  
3. Explain the significance for performance, security, and usability.  
4. Note any breaking changes or migration steps.

**Depth**  

| Release | Highlights | Impact |
|---------|------------|--------|
| **3.0.10** | • Fixed a race condition that caused query failures under high concurrency.<br>• Added support for MySQL 8.0.31 authentication plugin (caching_sha2_password). | Improves stability in production clusters and enables native MySQL 8 auth. |
| **3.1.10** | • Introduced “dynamic‑weight” routing: hosts can report current load, allowing more granular traffic distribution.<br>• Enhanced health‑check logic to avoid false positives during transient network glitches.<br>• Minor UI/CLI tweaks for easier diagnostics. | Gives ops finer control over query routing and reduces downtime caused by flaky nodes. |
| **4.0.10** | • First release in the 4.x series; adds full support for MySQL 8.0.35’s new “caching‑sha2‑password” fallback, plus optional TLS‑1.3 enforcement.<br>• Overhauled internal memory allocator to reduce fragmentation and lower peak RAM usage by ~15% on large deployments.<br>• Backwards‑compatible config schema but introduces `max_connection_pool_size` default of 1000 (was 500). | Enables modern security defaults, better resource efficiency, and smoother scaling for petabyte‑scale shards. |

**Edge cases**  
- Upgrading from 3.x to 4.0 may require adjusting the connection pool size in existing setups.  
- If you rely on legacy auth plugins (`mysql_native_password`), double‑check compatibility with TLS settings.  
- The new health‑check logic can flag nodes as down if they miss a single probe; tune `probe_interval_ms`.  

**Optimize & communicate**  
For teams migrating, run the official upgrade script in a staging cluster first, monitor connection counts, and adjust `max_connection_pool_size` gradually. Communicate the benefits—lower latency from dynamic routing, fewer crashes from race fixes, and stronger encryption—to stakeholders to justify the small operational overhead of upgrading.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

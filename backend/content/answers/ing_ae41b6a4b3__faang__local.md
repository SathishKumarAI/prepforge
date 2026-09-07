---
qid: ing_ae41b6a4b3__faang__local
question: 'Explain: F8: Cost-tracking failure across teacher and student'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 472
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:28:52-05:00'
sources: []
---

**Clarify**  
We need to explain why a cost‑tracking feature (F8) fails for both teachers and students in an AI learning platform.  
Assumptions: *Cost* refers to monetary or resource usage; *tracking* means real‑time logging of consumption; *failure* implies data loss, latency, or incorrect reporting.

**Approach**  
1. Identify the data pipeline (instrumentation → ingestion → storage → display).  
2. Pinpoint where failures manifest for each role.  
3. Map symptoms to root causes (missing events, aggregation errors, permission gaps).

**Depth**  

| Role | Failure Symptom | Root Cause |
|------|-----------------|------------|
| Teacher | “My dashboard shows zero cost after a lesson.” | **Instrumentation drift** – teacher‑side SDK not firing due to dynamic content loading or CSP blocking. |
| Student | “I see higher usage than my plan allows.” | **Server‑side aggregation bug** – rounding up per‑second metrics, leading to over‑counting. |
| Both | “Cost spikes at the end of term.” | **Batch flush delay** – events buffered for 15 min; sudden batch causes a burst in billing. |

Key technical details:  
- Use distributed tracing (e.g., OpenTelemetry) to capture event timestamps.  
- Store raw events in immutable logs (Kafka, Cloud Pub/Sub).  
- Run idempotent aggregation jobs with exact‑once semantics.  

**Edge Cases**  
- Offline teachers triggering retry logic that duplicates events.  
- Students using multiple devices causing duplicate session counts.  
- Time‑zone mismatches when converting timestamps for reports.

**Optimize & Communicate**  
1. Add client‑side heartbeat to detect SDK load failures and auto‑reload.  
2. Switch to per‑action counters instead of time‑based windows to avoid rounding errors.  
3. Introduce a “dry‑run” mode in the aggregation pipeline to surface anomalies before production release.  

Explain these steps succinctly, highlighting how each fix directly addresses the observed failure patterns for both teachers and students. This showcases structured problem solving, clear communication, and depth—all critical for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

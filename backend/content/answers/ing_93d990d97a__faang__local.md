---
qid: ing_93d990d97a__faang__local
question: 'Explain: On-call playbook — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 487
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:27:57-05:00'
sources: []
---

**Clarify**  
We’re asked to explain an *on‑call playbook* for evaluating a gated CI/CD pipeline—i.e., how on‑call engineers react when the automated gate (build/test/scan) fails and must decide whether to unblock or rollback. I’ll assume:  
1. The pipeline is fully automated, with unit, integration, security scans.  
2. “Gated” means any failure blocks promotion to next stage.  
3. On‑call engineers have access to logs, metrics, and can trigger manual overrides.

**Approach**  
1. **Detect & triage** – Alert from CI system → ingest into on‑call dashboard.  
2. **Diagnose** – Pull latest commit hash, run `ci-diagnostics` script (lint, unit test summary).  
3. **Assess impact** – Check affected services, production traffic, SLA thresholds.  
4. **Decide** – If the failure is non‑critical (e.g., a flaky integration test), *override*; if it’s a security or critical runtime error, *rollback*.  
5. **Execute & verify** – Trigger manual gate bypass or deploy previous release; run smoke tests.  
6. **Post‑mortem** – Document root cause and mitigation in knowledge base.

**Depth**  
- The diagnostics script uses container snapshots to replay the build locally, achieving O(1) time for re‑runs.  
- Override is a signed Git tag that bypasses the gate; rollback pulls the last successful tag.  
- Complexity: detection O(1), diagnosis O(n) over test logs, decisions are constant time.

**Edge Cases**  
- *Split‑brain*: two on‑calls act simultaneously → resolve via central lock (Redis).  
- *Data loss*: If logs missing, fallback to artifact inspection.  
- *Security breach*: automatic block and alert security team regardless of override.

**Optimize & Communicate**  
Introduce a **Canary Gate** that allows a 5% traffic rollout before full promotion—reduces rollback risk. Communicate the playbook via an internal wiki, run tabletop drills quarterly. This structured process keeps on‑call engineers focused, reduces mean time to resolution, and aligns with FAANG’s high‑availability culture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

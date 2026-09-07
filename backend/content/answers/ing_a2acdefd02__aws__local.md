---
qid: ing_a2acdefd02__aws__local
question: 'Explain: Study map — Qa Sdet Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 475
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:33:00-05:00'
sources: []
---

**Situation & Task**  
I was hired as a QA SDET on the *Study‑Map* product—a dynamic learning‑path visualizer used by 3 M+ students daily. The team struggled to catch rendering glitches that caused data loss, and release cycles were stalled because manual tests ran for 8 hrs.

**Action (Technical & System Design)**  
I introduced a hybrid test framework:  

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Test runner | **AWS CodeBuild + ECS Fargate** | Scales on demand, eliminates idle servers. |
| Visual diff engine | **S3 + Lambda (Pillow)** | Stores baseline screenshots; Lambda compares in parallel, reducing cost to <$0.02/compare. |
| Metrics dashboard | **CloudWatch + QuickSight** | Real‑time pass/fail rates per module. |

I scripted a data‑driven test suite that pulls real user navigation logs from **Amazon Kinesis Data Streams**, ensuring coverage of edge cases. The framework runs 200+ scenarios in under 30 min, cutting cycle time by 75 %. I added a *Self‑Healing* mechanism: if a diff fails, the Lambda auto‑updates the baseline after manual approval—reducing regression risk.

**Result**  
- **Release frequency increased from bi‑weekly to weekly.**  
- **Bug count in production dropped 60 % (from 48→19 per month).**  
- **Cost savings of $12k/month** by eliminating dedicated test servers.  

**Leadership Principles Anchored**  
*Customer Obsession* – ensured students see accurate maps, preventing learning disruptions. *Ownership & Dive Deep* – I built the entire end‑to‑end pipeline and continuously iterated based on metrics.

**Bar‑raiser take‑away**  
I demonstrated ownership by owning both code and infrastructure, dove deep into failure patterns to build self‑healing logic, quantified impact with clear KPIs, and learned from an initial false‑positive spike—pivoted the diff tolerance algorithm accordingly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
